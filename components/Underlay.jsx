import Image from "next/image";

export function Underlay() {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                padding: 40,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                pointerEvents: "none",
            }}>
            <Image src={'/logo.png'} width={200} height={100} alt="logo" className="invert absolute top-10 left-4" />
            <div style={{ height: 100 }} />
            <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center" }}>
                <p style={{ flex: "1 1 0%", height: "100%", fontSize: 12, lineHeight: "1.5em", color: "black" }}>
                    <b className="text-xl">MAKE YOUR BUSINESS FLY</b>
                    <br />
                    LÖNSAM DIGITAL MARKNADSFÖRING
                    <br />
                    <b>—</b>
                </p>
                <div style={{ width: 10 }} />
                <p
                    style={{
                        transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
                        transformOrigin: "right",
                        fontSize: 12,
                        fontWeight: "700",
                        lineHeight: "100%",
                        textAlign: "right",
                        color: "black",
                        whiteSpace: "nowrap",
                    }}>
                    DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
                </p>
            </div>
            <div style={{ height: 10 }} />
            <div
                className="full"
                style={{
                    fontFamily: "'Antonio', sans-serif",
                    width: "100%",
                    flex: "1 1 0%",
                    padding: 0,
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "center",
                }}>
                <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "1em", color: "black", margin: 0, letterSpacing: -10 }}>R</p>
                <div style={{ width: 10 }} />
                <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", color: "black", margin: 0, letterSpacing: -10 }}>_R</p>
            </div>
            <div style={{ height: 60 }} />
            <div
                style={{
                    pointerEvents: "all",
                    pointer: "auto",
                    width: "100%",
                    padding: 0,
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "center",
                }}>
                <p className="full" style={{ whiteSpace: "nowrap", flex: "1 1 0%", fontSize: 12, lineHeight: "1.5em", color: "black" }}>
                    <b>VI SKAPAR LÖNSAM TILLVÄXT </b>
                    <br />
                    Rocket Revenue
                </p>
                <div style={{ width: 10 }} />
                <p
                    className="full"
                    style={{
                        fontFamily: "'Antonio', sans-serif",
                        flex: "1 1 0%",
                        fontSize: 16,
                        fontWeight: "700",
                        lineHeight: "1em",
                        textAlign: "center",
                        color: "black",
                        letterSpacing: -0.5,
                        whiteSpace: "nowrap",
                    }}>
                    ACCELERERA MED ROCKET PERFORMANCE
                    MA​RKETING
                </p>
                <div style={{ width: 10 }} />
                <p className="full" style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}></p>
            </div>
        </div>
    )
}
