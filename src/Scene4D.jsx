import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import _ from 'lodash';
import Instructions from './Instructions';

export default function Scene4D() {
    const mountRef = useRef(null);
    const [boxCentre, setBoxCentre] = useState([0, 0, 0, 0]);
    const boxCentreRef = useRef(boxCentre);
    const vertices4DRef = useRef([]);
    const axesRef = useRef([]);
    const axesRotationRef = useRef([0, 0, 0, 0, 0, 0]);
    const [boxRotation, setBoxRotation] = useState([0, 0, 0, 0, 0, 0]);
    const planarViewRef = useRef(false);
    const visibleCubesRef = useRef([false, false, false, false, false, false, false, false]);
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

        const faceIndices = [
            [0, 1, 3, 2], [0, 2, 6, 4], [0, 4, 5, 1], [1, 5, 7, 3],
            [2, 3, 7, 6], [4, 6, 7, 5], [8, 9, 11, 10], [8, 10, 14, 12],
            [8, 12, 13, 9], [9, 13, 15, 11], [10, 11, 15, 14], [12, 14, 15, 13],
            [0, 1, 9, 8], [2, 3, 11, 10], [4, 5, 13, 12], [6, 7, 15, 14],
            [0, 2, 10, 8], [1, 3, 11, 9], [4, 6, 14, 12], [5, 7, 15, 13],
            [0, 4, 12, 8], [1, 5, 13, 9], [2, 6, 14, 10], [3, 7, 15, 11],
        ];

        // Face indices for the tesseract (grouped into cubes)
        const cubeFaceGroups = [
            [[0, 1, 3, 2], [0, 2, 6, 4], [0, 4, 5, 1], [1, 5, 7, 3], [2, 3, 7, 6], [4, 6, 7, 5]],
            [[8, 9, 11, 10], [8, 10, 14, 12], [8, 12, 13, 9], [9, 13, 15, 11], [10, 11, 15, 14], [12, 14, 15, 13]],
            [[0, 1, 9, 8], [4, 5, 13, 12], [0, 4, 12, 8], [1, 5, 13, 9], [0, 4, 5, 1], [8, 12, 13, 9]],
            [[2, 3, 11, 10], [6, 7, 15, 14], [2, 6, 14, 10], [3, 7, 15, 11], [2, 3, 7, 6], [10, 11, 15, 14]],
            [[0, 2, 10, 8], [4, 6, 14, 12], [0, 4, 12, 8], [2, 6, 14, 10], [0, 2, 6, 4], [8, 10, 14, 12]],
            [[1, 3, 11, 9], [5, 7, 15, 13], [1, 5, 13, 9], [3, 7, 15, 11], [1, 5, 7, 3], [9, 13, 15, 11]],
            [[0, 2, 10, 8], [1, 3, 11, 9], [0, 1, 9, 8], [2, 3, 11, 10], [0, 1, 3, 2], [8, 9, 11, 10]],
            [[5, 7, 15, 13], [6, 7, 15, 14], [4, 5, 13, 12], [4, 6, 14, 12], [4, 6, 7, 5], [12, 14, 15, 13]],
        ];
        
        const planesAll = [];
        const planesCubes = [];
        for (let i = 0; i < 8; i++) {
            planesCubes.push([]);
        }        
        const createPlanes = (vertices3D, faces, planes) => {
            // Remove old planes from the scene
            planes.forEach(plane => scene.remove(plane));
            planes.length = 0;
        
            // Create new planes for each face
            // Precompute a unique color for each face
            const faceColors = faces.map((_, index) => 
                new THREE.Color().setHSL(index / faces.length, 0.7, 0.5)
            );

            faces.forEach((face, index) => {
                const [a, b, c, d] = face.map(i => vertices3D[i]);

                // Define geometry for the plane
                const planeGeometry = new THREE.BufferGeometry();
                const planeVertices = new Float32Array([
                    ...a, ...b, ...c, // Triangle 1
                    ...a, ...c, ...d  // Triangle 2
                ]);
                planeGeometry.setAttribute('position', new THREE.BufferAttribute(planeVertices, 3));

                // Use the precomputed color
                const planeMaterial = new THREE.MeshBasicMaterial({
                    color: faceColors[index],
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.3,
                });

                // Create and add plane to the scene
                const plane = new THREE.Mesh(planeGeometry, planeMaterial);
                scene.add(plane);
                planes.push(plane);
            });

        };

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

            rotate4D(verticesYZ, 'yz', axesRotationRef.current[0]);
            rotate4D(verticesXZ, 'xz', axesRotationRef.current[1]);
            rotate4D(verticesXY, 'xy', axesRotationRef.current[2]);
            rotate4D(verticesWX, 'wx', axesRotationRef.current[3]);
            rotate4D(verticesWY, 'wy', axesRotationRef.current[4]);
            rotate4D(verticesWZ, 'wz', axesRotationRef.current[5]);

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
            if (!planarViewRef.current) {
                // if planes exist in scene, remove them
                planesAll.forEach(plane => scene.remove(plane));

                scene.add(lines);
                const positions = new Float32Array(
                    edges.flatMap(([i, j]) => [...vertices3D[i], ...vertices3D[j]])
                );

                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

                if (visibleCubesRef.current[0] === true) {
                    createPlanes(vertices3D, cubeFaceGroups[0], planesCubes[0]);
                }
                else {
                    planesCubes[0].forEach(plane => scene.remove(plane));
                }
                if (visibleCubesRef.current[1] === true) {
                    createPlanes(vertices3D, cubeFaceGroups[1], planesCubes[1]);
                }
                else {
                    planesCubes[1].forEach(plane => scene.remove(plane));
                }
                if (visibleCubesRef.current[2] === true) {
                    createPlanes(vertices3D, cubeFaceGroups[2], planesCubes[2]);
                }
                else {
                    planesCubes[2].forEach(plane => scene.remove(plane));
                }
                if (visibleCubesRef.current[3] === true) {
                    createPlanes(vertices3D, cubeFaceGroups[3], planesCubes[3]);
                }
                else {
                    planesCubes[3].forEach(plane => scene.remove(plane));
                }
                if (visibleCubesRef.current[4] === true) {
                    createPlanes(vertices3D, cubeFaceGroups[4], planesCubes[4]);
                }
                else {
                    planesCubes[4].forEach(plane => scene.remove(plane));
                }
                if (visibleCubesRef.current[5] === true) {
                    createPlanes(vertices3D, cubeFaceGroups[5], planesCubes[5]);
                }
                else {
                    planesCubes[5].forEach(plane => scene.remove(plane));
                }
                if (visibleCubesRef.current[6] === true) {
                    createPlanes(vertices3D, cubeFaceGroups[6], planesCubes[6]);
                }
                else {
                    planesCubes[6].forEach(plane => scene.remove(plane));
                }
                if (visibleCubesRef.current[7] === true) {
                    createPlanes(vertices3D, cubeFaceGroups[7], planesCubes[7]);
                }
                else {
                    planesCubes[7].forEach(plane => scene.remove(plane));
                }
            }
            else {
                // if lines exist in scene, remove them
                scene.remove(lines);
                for (let i = 0; i < 8; i++) {
                    planesCubes[i].forEach(plane => scene.remove(plane));
                }
                // Update planes
                createPlanes(vertices3D, faceIndices, planesAll);
            }
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
                        newRotation[0] = (newRotation[0] - Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 'arrowdown') {
                    rotate4D(vertices4DRef.current, 'yz', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[0] += angle;
                        newRotation[0] = (newRotation[0] - Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 'arrowleft') {
                    rotate4D(vertices4DRef.current, 'xz', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[1] += angle;
                        newRotation[1] = (newRotation[1] - Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 'arrowright') {
                    rotate4D(vertices4DRef.current, 'xz', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[1] -= angle;
                        newRotation[1] = (newRotation[1] - Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 'm') {
                    rotate4D(vertices4DRef.current, 'xy', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[2] += angle;
                        newRotation[2] = (newRotation[2] + Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 'n') {
                    rotate4D(vertices4DRef.current, 'xy', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[2] -= angle;
                        newRotation[2] = (newRotation[2] + Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 'q') {
                    rotate4D(vertices4DRef.current, 'wx', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[3] += angle;
                        newRotation[3] = (newRotation[3] + Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 'a') {
                    rotate4D(vertices4DRef.current, 'wx', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[3] -= angle;
                        newRotation[3] = (newRotation[3] + Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 'w') {
                    rotate4D(vertices4DRef.current, 'wy', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[4] -= angle;
                        newRotation[4] = (newRotation[4] - Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 's') {
                    rotate4D(vertices4DRef.current, 'wy', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[4] += angle;
                        newRotation[4] = (newRotation[4] - Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 'e') {
                    rotate4D(vertices4DRef.current, 'wz', angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[5] += angle;
                        newRotation[5] = (newRotation[5] + Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
                else if (key === 'd') {
                    rotate4D(vertices4DRef.current, 'wz', -angle);
                    setBoxRotation((prev => {
                        let newRotation = [...prev];
                        newRotation[5] -= angle;
                        newRotation[5] = (newRotation[5] + Math.PI)%Math.PI;
                        return newRotation;
                    }));
                }
        
                // Additional logic for axes rotation
                else if (key === 'r') {
                    axesRotationRef.current[0] -= angle;
                } else if (key === 'f') {
                    axesRotationRef.current[0] += angle;
                } else if (key === 't') {
                    axesRotationRef.current[1] += angle;
                } else if (key === 'g') {
                    axesRotationRef.current[1] -= angle;
                } else if (key === 'y') {
                    axesRotationRef.current[2] += angle;
                } else if (key === 'h') {
                    axesRotationRef.current[2] -= angle;
                } else if (key === 'u') {
                    axesRotationRef.current[3] += angle;
                } else if (key === 'j') {
                    axesRotationRef.current[3] -= angle;
                } else if (key === 'i') {
                    axesRotationRef.current[4] -= angle;
                } else if (key === 'k') {
                    axesRotationRef.current[4] += angle;
                } else if (key === 'o') {
                    axesRotationRef.current[5] += angle;
                } else if (key === 'l') {
                    axesRotationRef.current[5] -= angle;
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
                        <p>YZ: {((-boxRotation[0])%Math.PI).toFixed(2)}</p>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>XY: {(boxRotation[2]%Math.PI).toFixed(2)}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>XZ: {((-boxRotation[1])%Math.PI).toFixed(2)}</p>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>WX: {(boxRotation[3]%Math.PI).toFixed(2)}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>WY: {((-boxRotation[4])%Math.PI).toFixed(2)}</p>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                        <p>WZ: {(boxRotation[5]%Math.PI).toFixed(2)}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <input 
                        type="checkbox"
                        id="planar-view"
                        onChange={() => planarViewRef.current = !planarViewRef.current} 
                    />
                    <label htmlFor="planar-view">Planar View</label>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input 
                                        type="checkbox"
                                        id="visCube1"
                                        onChange={() => visibleCubesRef.current[0] = !visibleCubesRef.current[0]} 
                                    />
                                    <label htmlFor="visCube1">Cube 1</label>
                                </td>
                                <td>
                                    <input 
                                        type="checkbox"
                                        id="visCube2"
                                        onChange={() => visibleCubesRef.current[1] = !visibleCubesRef.current[1]} 
                                    />
                                    <label htmlFor="visCube2">Cube 2</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type="checkbox"
                                        id="visCube3"
                                        onChange={() => visibleCubesRef.current[2] = !visibleCubesRef.current[2]} 
                                    />
                                    <label htmlFor="visCube3">Cube 3</label>
                                </td>
                                <td>
                                    <input 
                                        type="checkbox"
                                        id="visCube4"
                                        onChange={() => visibleCubesRef.current[3] = !visibleCubesRef.current[3]} 
                                    />
                                    <label htmlFor="visCube4">Cube 4</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type="checkbox"
                                        id="visCube5"
                                        onChange={() => visibleCubesRef.current[4] = !visibleCubesRef.current[4]} 
                                    />
                                    <label htmlFor="visCube5">Cube 5</label>
                                </td>
                                <td>
                                    <input 
                                        type="checkbox"
                                        id="visCube6"
                                        onChange={() => visibleCubesRef.current[5] = !visibleCubesRef.current[5]} 
                                    />
                                    <label htmlFor="visCube6">Cube 6</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type="checkbox"
                                        id="visCube7"
                                        onChange={() => visibleCubesRef.current[6] = !visibleCubesRef.current[6]} 
                                    />
                                    <label htmlFor="visCube7">Cube 7</label>
                                </td>
                                <td>
                                    <input 
                                        type="checkbox"
                                        id="visCube8"
                                        onChange={() => visibleCubesRef.current[7] = !visibleCubesRef.current[7]} 
                                    />
                                    <label htmlFor="visCube8">Cube 8</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            < Instructions />
            <div ref={mountRef}></div>
        </div>
    );
}