import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import _ from 'lodash';
import Instructions from './Instructions';

export default function Scene4D() {
    const mountRef = useRef(null);
    const [boxCentre, setBoxCentre] = useState([0, 0, 0, 0]);
    const vertices4DRef = useRef([]);
    const axesRef = useRef([]);
    const boxCentreRef = useRef(boxCentre);
    const [axesRotation, setAxesRotation] = useState([0, 0, 0, 0, 0, 0]);
    const [boxRotation, setBoxRotation] = useState([0, 0, 0, 0, 0, 0]);
    const distance = 2;

    useEffect(() => {
        boxCentreRef.current = boxCentre;
    }, [boxCentre]);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const handleResize = () => {
            const canvas = document.querySelector('canvas');
            const width = window.innerWidth;
            const height = window.innerHeight;
        
            // Adjust canvas size
            canvas.width = width;
            canvas.height = height;
        
            // Update Three.js renderer and camera
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);
        

        const controls = new OrbitControls( camera, renderer.domElement );

        camera.position.z = 5;

        const edges = [
            [0, 1], [0, 2], [0, 4], [0, 8],
            [1, 3], [1, 5], [1, 9],
            [2, 3], [2, 6], [2, 10],
            [3, 7], [3, 11],
            [4, 5], [4, 6], [4, 12],
            [5, 7], [5, 13],
            [6, 7], [6, 14],
            [7, 15],
            [8, 9], [8, 10], [8, 12],
            [9, 11], [9, 13],
            [10, 11], [10, 14],
            [11, 15],
            [12, 13], [12, 14],
            [13, 15],
            [14, 15],
        ];

        const baseVertices4D = [
            [-1, -1, -1, -1], [1, -1, -1, -1],
            [-1, 1, -1, -1], [1, 1, -1, -1],
            [-1, -1, 1, -1], [1, -1, 1, -1],
            [-1, 1, 1, -1], [1, 1, 1, -1],
            [-1, -1, -1, 1], [1, -1, -1, 1],
            [-1, 1, -1, 1], [1, 1, -1, 1],
            [-1, -1, 1, 1], [1, -1, 1, 1],
            [-1, 1, 1, 1], [1, 1, 1, 1],
        ];

        const project4DTo3D = (vertex) => {
            const [x, y, z, w] = vertex;
            const scale = 1 / (distance - w);
            return [x * scale, y * scale, z * scale];
        };

        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({ color: 0xffffff });
        const lines = new THREE.LineSegments(geometry, material);
        scene.add(lines);

        // 4D Axes (X, Y, Z, W)
        const axesLength = 5;
        const baseAxes4D = [
            [1, 0, 0, 0], // X axis
            [0, 1, 0, 0], // Y axis
            [0, 0, 1, 0], // Z axis
            [0, 0, 0, 1], // W axis
        ];
        axesRef.current = baseAxes4D;

        // Create geometry and lines for each axis
        const createLine = (start, end, color) => {
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(...start),
                new THREE.Vector3(...end),
            ]);
            const material = new THREE.LineBasicMaterial({ color });
            return new THREE.Line(geometry, material);
        };

        // Create 4D axes and project them to 3D
        const projectedAxes = baseAxes4D.map(axis => project4DTo3D(axis));
        
        // Create lines for the X, Y, Z, and W axes
        const axisLines = [
            createLine([0, 0, 0], projectedAxes[0], 0xff0000), // X axis (Red)
            createLine([0, 0, 0], projectedAxes[1], 0xffff00), // Y axis (Yellow)
            createLine([0, 0, 0], projectedAxes[2], 0x00ff00), // Z axis (Green)
            createLine([0, 0, 0], projectedAxes[3], 0x5555ff), // W axis (Blue)
        ];

        // Add the axis lines to the scene
        axisLines.forEach(line => scene.add(line));

        const updateRotations = (vertices) => {
            let verticesYZ = _.cloneDeep(vertices);
            let verticesXZ = _.cloneDeep(vertices);
            let verticesXY = _.cloneDeep(vertices);
            let verticesWX = _.cloneDeep(vertices);
            let verticesWY = _.cloneDeep(vertices);
            let verticesWZ = _.cloneDeep(vertices);

            rotate4D(verticesYZ, 'yz', axesRotation[0]);
            rotate4D(verticesXZ, 'xz', axesRotation[1]);
            rotate4D(verticesXY, 'xy', axesRotation[2]);
            rotate4D(verticesWX, 'wx', axesRotation[3]);
            rotate4D(verticesWY, 'wy', axesRotation[4]);
            rotate4D(verticesWZ, 'wz', axesRotation[5]);

            vertices.forEach((vertex, index1) => {
                vertex.forEach((value, index2) => {
                    vertices[index1][index2] = verticesYZ[index1][index2] + verticesXZ[index1][index2] + verticesXY[index1][index2] + verticesWX[index1][index2] + verticesWY[index1][index2] + verticesWZ[index1][index2] - 5*value;
                })
            })
        };

        const updateAxesGeometry = () => {
            const newAxes = _.cloneDeep(axesRef.current);
            updateRotations(newAxes);
            const projectedAxes = newAxes.map(axis => project4DTo3D(axis));
        
            axisLines.forEach((line, index) => {
                const start = [0, 0, 0];
                const end = projectedAxes[index];
        
                const positions = new Float32Array([
                    ...start,
                    ...end,
                ]);
        
                line.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                line.geometry.attributes.position.needsUpdate = true;
            });
        };

        const updateGeometry = () => {
            let vertices = vertices4DRef.current.map(vertex => 
                vertex.map((value, index) => value + boxCentreRef.current[index])
            );
            updateRotations(vertices);
            const vertices3D = vertices.map(project4DTo3D);

            const positions = new Float32Array(
                edges.flatMap(([i, j]) => [...vertices3D[i], ...vertices3D[j]])
            );

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        };

        const rotate4D = (vertices, plane, angle) => {
            const cosA = Math.cos(angle);
            const sinA = Math.sin(angle);

            const rotationMatrix = {
                yz: (v) => [v[0], cosA * v[1] - sinA * v[2], sinA * v[1] + cosA * v[2], v[3]],
                xz: (v) => [cosA * v[0] - sinA * v[2], v[1], sinA * v[0] + cosA * v[2], v[3]],
                xy: (v) => [cosA * v[0] - sinA * v[1], sinA * v[0] + cosA * v[1], v[2], v[3]],
                wx: (v) => [cosA * v[0] - sinA * v[3], v[1], v[2], sinA * v[0] + cosA * v[3]],
                wy: (v) => [v[0], cosA * v[1] - sinA * v[3], v[2], sinA * v[1] + cosA * v[3]],
                wz: (v) => [v[0], v[1], cosA * v[2] - sinA * v[3], sinA * v[2] + cosA * v[3]],
            };

            for (let i = 0; i < vertices.length; i++) {
                vertices[i] = rotationMatrix[plane](vertices[i]);
            }
        };

        const handleKeyDown = (event) => {
            const key = event.key.toLowerCase();
        
            const angle = 0.1;
            const stride = 0.1;
            // Rotation logic for Shift + key combinations
            if (event.shiftKey) {
                if (key === 'arrowup') {
                    rotate4D(vertices4DRef.current, 'yz', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[0] -= angle;
                        return newRotation;
                    }));
                }
                else if (key === 'arrowdown') {
                    rotate4D(vertices4DRef.current, 'yz', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[0] += angle;
                        return newRotation;
                    }));
                }
                else if (key === 'arrowleft') {
                    rotate4D(vertices4DRef.current, 'xz', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[1] += angle;
                        return newRotation;
                    }));
                }
                else if (key === 'arrowright') {
                    rotate4D(vertices4DRef.current, 'xz', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[1] -= angle;
                        return newRotation;
                    }));
                }
                else if (key === 'm') {
                    rotate4D(vertices4DRef.current, 'xy', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[2] += angle;
                        return newRotation;
                    }));
                }
                else if (key === 'n') {
                    rotate4D(vertices4DRef.current, 'xy', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[2] -= angle;
                        return newRotation;
                    }));
                }
                else if (key === 'q') {
                    rotate4D(vertices4DRef.current, 'wx', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[3] += angle;
                        return newRotation;
                    }));
                }
                else if (key === 'a') {
                    rotate4D(vertices4DRef.current, 'wx', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[3] -= angle;
                        return newRotation;
                    }));
                }
                else if (key === 'w') {
                    rotate4D(vertices4DRef.current, 'wy', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[4] -= angle;
                        return newRotation;
                    }));
                }
                else if (key === 's') {
                    rotate4D(vertices4DRef.current, 'wy', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[4] += angle;
                        return newRotation;
                    }));
                }
                else if (key === 'e') {
                    rotate4D(vertices4DRef.current, 'wz', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[5] += angle;
                        return newRotation;
                    }));
                }
                else if (key === 'd') {
                    rotate4D(vertices4DRef.current, 'wz', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[5] -= angle;
                        return newRotation;
                    }));
                }
        
                // Additional logic for Shift + Z + key combinations
                else if (key === 'r') {
                    setAxesRotation((prev) => {
                        prev[0] -= angle;
                        return prev;
                    });
                } else if (key === 'f') {
                    setAxesRotation((prev) => {
                        prev[0] += angle;
                        return prev;
                    })
                } else if (key === 't') {
                    setAxesRotation((prev) => {
                        prev[1] += angle;
                        return prev;
                    })
                } else if (key === 'g') {
                    setAxesRotation((prev) => {
                        prev[1] -= angle;
                        return prev;
                    })
                } else if (key === 'y') {
                    setAxesRotation((prev) => {
                        prev[2] += angle;
                        return prev;
                    })
                } else if (key === 'h') {
                    setAxesRotation((prev) => {
                        prev[2] -= angle;
                        return prev;
                    })
                } else if (key === 'u') {
                    setAxesRotation((prev) => {
                        prev[3] += angle;
                        return prev;
                    })
                } else if (key === 'j') {
                    setAxesRotation((prev) => {
                        prev[3] -= angle;
                        return prev;
                    })
                } else if (key === 'i') {
                    setAxesRotation((prev) => {
                        prev[4] -= angle;
                        return prev;
                    })
                } else if (key === 'k') {
                    setAxesRotation((prev) => {
                        prev[4] += angle;
                        return prev;
                    })
                } else if (key === 'o') {
                    setAxesRotation((prev) => {
                        prev[5] += angle;
                        return prev;
                    })
                } else if (key === 'l') {
                    setAxesRotation((prev) => {
                        prev[5] -= angle;
                        return prev;
                    })
                }
            }

            // Movement logic for non-Shift keys
            else {
                setBoxCentre((prev) => {
                    const newCentre = [...prev];
                    if (key === 'arrowup') newCentre[1] += stride;
                    else if (key === 'arrowdown') newCentre[1] -= stride;
                    else if (key === 'arrowleft') newCentre[0] -= stride;
                    else if (key === 'arrowright') newCentre[0] += stride;
                    else if (key === 'w') newCentre[2] -= stride;
                    else if (key === 's') newCentre[2] += stride;
                    else if (key === 'a') newCentre[3] -= stride;
                    else if (key === 'd') newCentre[3] += stride;
                    return newCentre;
                });
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        controls.update();
        function animate() {
            requestAnimationFrame(animate);
            updateAxesGeometry();
            updateGeometry();
            controls.update();
            renderer.render(scene, camera);
        }

        vertices4DRef.current = baseVertices4D;
        animate();

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div tabIndex={0} style={{ outline: 'none', position: 'relative' }}>
            <div style={{
                position: 'absolute',
                top: '10px',
                right: '20px',
                color: 'white'
            }}>
                <table style={{
                    borderCollapse: 'collapse',
                    borderSpacing: 0,
                    border: '1px solid #ccc'
                }}>
                    <tbody>
                    <tr>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>X: {boxCentre[0].toFixed(2)}</p>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>Z: {boxCentre[2].toFixed(2)}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>Y: {boxCentre[1].toFixed(2)}</p>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>W: {(boxCentre[3]-distance).toFixed(2)}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>YZ: {(-boxRotation[0]).toFixed(2)}</p>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>XY: {boxRotation[2].toFixed(2)}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>XZ: {(-boxRotation[1]).toFixed(2)}</p>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>WX: {boxRotation[3].toFixed(2)}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>WY: {(-boxRotation[4]).toFixed(2)}</p>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>WZ: {boxRotation[5].toFixed(2)}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            < Instructions />
            <div ref={mountRef}></div>
        </div>
    );
}