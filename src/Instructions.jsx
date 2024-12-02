import React, { useState } from "react";

const HamburgerMenu = () => {
const [menuOpen, setMenuOpen] = useState(false);

return (
    <div style={{ position: "relative", color: "white" }}>
    {/* Hamburger Icon */}
    <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
        position: "absolute",
        top: "10px",
        left: "20px",
        cursor: "pointer",
        fontSize: "24px",
        background: "white",
        color: "black",
        padding: "5px 10px",
        borderRadius: "5px",
        zIndex: 1000,
        }}
    >
        {menuOpen ? "✖" : "☰"}
    </div>

    {/* Menu Content */}
    {menuOpen && (
        <div
        style={{
            position: "absolute",
            top: "50px",
            left: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            zIndex: 999,
            maxWidth: "90%",
            overflowY: "auto",
            height: "80vh",
            scrollbarWidth: "thin",
        }}
        >
        <h3 style={{ marginBottom: "10px", borderBottom: "1px solid white" }}>
            Controls
        </h3>
        <table
            style={{
            borderCollapse: "collapse",
            width: "100%",
            fontSize: "14px",
            color: "white",
            }}
        >
            <thead>
            <tr>
                <th
                style={{
                    border: "1px solid white",
                    padding: "8px",
                    textAlign: "left",
                }}
                >
                Action
                </th>
                <th
                style={{
                    border: "1px solid white",
                    padding: "8px",
                    textAlign: "left",
                }}
                >
                Keys
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Change X coordinate
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                ArrowUp / ArrowDown
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Change Y coordinate
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                ArrowLeft / ArrowRight
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Change Z coordinate
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                W / S
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Change W coordinate
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                A / D
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate YZ
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + ArrowUp / ArrowDown
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate XZ
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + ArrowLeft / ArrowRight
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate XY
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + M / N
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate WX
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + Q / A
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate WY
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + W / S
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate WZ
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + E / D
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate axes YZ
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + R / F
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate axes XZ
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + T / G
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate axes XY
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + Y / H
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate axes WX
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + U / J
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate axes WY
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + I / K
                </td>
            </tr>
            <tr>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Rotate axes WZ
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                Shift + O / L
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    )}
    </div>
);
};

export default HamburgerMenu;
