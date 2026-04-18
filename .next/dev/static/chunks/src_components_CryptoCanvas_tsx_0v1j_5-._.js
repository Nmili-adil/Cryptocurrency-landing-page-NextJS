(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CryptoCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CryptoCanvas",
    ()=>CryptoCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CryptoCanvas() {
    _s();
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoCanvas.useEffect": ()=>{
            const mount = mountRef.current;
            if (!mount) return;
            // ── Renderer ──────────────────────────────────────────────────────────────
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(mount.clientWidth, mount.clientHeight);
            renderer.setClearColor(0x000000, 0);
            mount.appendChild(renderer.domElement);
            // ── Scene & Camera ────────────────────────────────────────────────────────
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](50, mount.clientWidth / mount.clientHeight, 0.1, 200);
            camera.position.set(0, 2, 12);
            // ── Lights ────────────────────────────────────────────────────────────────
            scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.3));
            const purpleLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0x7c3aed, 2, 60);
            purpleLight.position.set(10, 10, 10);
            scene.add(purpleLight);
            const cyanLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0x06b6d4, 1.5, 60);
            cyanLight.position.set(-10, -5, -10);
            scene.add(cyanLight);
            const goldLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xf59e0b, 1, 50);
            goldLight.position.set(0, -8, 5);
            scene.add(goldLight);
            const spot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpotLight"](0xa78bfa, 3, 80, 0.4, 1);
            spot.position.set(0, 15, 0);
            scene.add(spot);
            // ── Stars ─────────────────────────────────────────────────────────────────
            const starCount = 3000;
            const starPositions = new Float32Array(starCount * 3);
            for(let i = 0; i < starCount * 3; i++){
                starPositions[i] = (Math.random() - 0.5) * 200;
            }
            const starGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            starGeo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](starPositions, 3));
            const stars = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](starGeo, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                color: 0xffffff,
                size: 0.08,
                transparent: true,
                opacity: 0.5
            }));
            scene.add(stars);
            // ── Coin group ────────────────────────────────────────────────────────────
            const coinGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            scene.add(coinGroup);
            // Coin body
            const coinMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0x7c3aed,
                metalness: 0.9,
                roughness: 0.05,
                emissive: 0x4c1d95,
                emissiveIntensity: 0.3
            });
            coinGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](2, 2, 0.25, 64), coinMat));
            // Coin rim
            const rimMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0x06b6d4,
                emissive: 0x06b6d4,
                emissiveIntensity: 2,
                metalness: 1,
                roughness: 0
            });
            coinGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](2, 0.06, 16, 64), rimMat));
            // Inner ring
            const innerRingMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0xa78bfa,
                emissive: 0xa78bfa,
                emissiveIntensity: 0.8,
                metalness: 1,
                roughness: 0.1,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            });
            const innerRing = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RingGeometry"](1.2, 1.5, 64), innerRingMat);
            innerRing.rotation.x = Math.PI / 2;
            innerRing.position.y = 0.14;
            coinGroup.add(innerRing);
            // Center disc
            const centerMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0xf59e0b,
                emissive: 0xf59e0b,
                emissiveIntensity: 0.6,
                metalness: 0.9,
                roughness: 0.1
            });
            const centerDisc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.6, 32), centerMat);
            centerDisc.rotation.x = Math.PI / 2;
            centerDisc.position.y = 0.14;
            coinGroup.add(centerDisc);
            // ── Orbiting particles ────────────────────────────────────────────────────
            const pCount = 120;
            const pPos = new Float32Array(pCount * 3);
            const pCol = new Float32Array(pCount * 3);
            for(let i = 0; i < pCount; i++){
                const angle = i / pCount * Math.PI * 2;
                const radius = 3.5 + Math.random() * 2.5;
                pPos[i * 3] = Math.cos(angle) * radius;
                pPos[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
                pPos[i * 3 + 2] = Math.sin(angle) * radius;
                const isCyan = Math.random() > 0.5;
                pCol[i * 3] = isCyan ? 0.02 : 0.49;
                pCol[i * 3 + 1] = isCyan ? 0.71 : 0.23;
                pCol[i * 3 + 2] = isCyan ? 0.83 : 0.93;
            }
            const pGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            pGeo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](pPos, 3));
            pGeo.setAttribute("color", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](pCol, 3));
            const particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](pGeo, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                size: 0.04,
                vertexColors: true,
                transparent: true,
                opacity: 0.8
            }));
            scene.add(particles);
            // ── Wireframe distort sphere ──────────────────────────────────────────────
            const wireSphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](4.5, 32, 32), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0x06b6d4,
                wireframe: true,
                transparent: true,
                opacity: 0.06
            }));
            scene.add(wireSphere);
            // ── Outer rings ───────────────────────────────────────────────────────────
            const ring1Mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0x7c3aed,
                transparent: true,
                opacity: 0.5
            });
            const ring1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](5, 0.015, 2, 200), ring1Mat);
            ring1.rotation.x = Math.PI / 2;
            scene.add(ring1);
            const ring2Mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0x06b6d4,
                transparent: true,
                opacity: 0.3
            });
            const ring2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](6.5, 0.01, 2, 200), ring2Mat);
            ring2.rotation.x = Math.PI / 3;
            ring2.rotation.y = 0.3;
            scene.add(ring2);
            // ── Animation loop ────────────────────────────────────────────────────────
            let animId;
            const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
            const animate = {
                "CryptoCanvas.useEffect.animate": ()=>{
                    animId = requestAnimationFrame(animate);
                    const t = clock.getElapsedTime();
                    coinGroup.rotation.y = t * 0.4;
                    coinGroup.rotation.x = Math.sin(t * 0.2) * 0.15;
                    coinGroup.position.y = Math.sin(t * 0.8) * 0.3;
                    particles.rotation.y = t * 0.12;
                    particles.rotation.x = Math.sin(t * 0.05) * 0.1;
                    wireSphere.rotation.y = t * 0.15;
                    ring1.rotation.z = t * 0.2;
                    ring2.rotation.x = Math.PI / 3 + t * 0.15;
                    renderer.render(scene, camera);
                }
            }["CryptoCanvas.useEffect.animate"];
            animate();
            // ── Resize handler ────────────────────────────────────────────────────────
            const onResize = {
                "CryptoCanvas.useEffect.onResize": ()=>{
                    if (!mount) return;
                    camera.aspect = mount.clientWidth / mount.clientHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(mount.clientWidth, mount.clientHeight);
                }
            }["CryptoCanvas.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            // ── Cleanup ───────────────────────────────────────────────────────────────
            return ({
                "CryptoCanvas.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener("resize", onResize);
                    renderer.dispose();
                    if (mount.contains(renderer.domElement)) {
                        mount.removeChild(renderer.domElement);
                    }
                }
            })["CryptoCanvas.useEffect"];
        }
    }["CryptoCanvas.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: "absolute inset-0 w-full h-full"
    }, void 0, false, {
        fileName: "[project]/src/components/CryptoCanvas.tsx",
        lineNumber: 197,
        columnNumber: 10
    }, this);
}
_s(CryptoCanvas, "V9/qkEdV8GfsDZk7lMTA1T8g5Ps=");
_c = CryptoCanvas;
var _c;
__turbopack_context__.k.register(_c, "CryptoCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CryptoCanvas.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/CryptoCanvas.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_CryptoCanvas_tsx_0v1j_5-._.js.map