import React, { useContext } from "react";
import "./style.css";
import { CoordsContext } from "../context";
const Sidebar = ({ hops, icon }) => {
    const { setCoords } = useContext(CoordsContext);

    // hops = hops.filter((el) => {
    //     return el.lat;
    // });

    // hops.map((el, i) => {
    //     el.lon = el.lon + i / 1000;
    //     el.lat = el.lat + i / 10000;
    //     return el;
    // });
    console.log("sidebar:", hops);
    return (
        <div className="sidebar">
            {hops.length > 1 ? (
                <>
                    <div className="logo">
                        <img src={icon} alt="Logo" />
                    </div>
                    <div className="items">
                        {hops.map((hop, index) => (
                            <div
                                key={index}
                                className="hop"
                                onClick={() => {
                                    if (hop.latitude) {
                                        setCoords([
                                            hop.longitude,
                                            hop.latitude,
                                        ]);
                                    }
                                }}
                            >
                                <div className="hop-number">{index + 1}</div>
                                <div className="hop-info">
                                    <div className="country">
                                        {hop?.country_name}
                                    </div>
                                    <div className="city">{hop?.city}</div>
                                    {hop.query === "Request timed out." ? (
                                        <div className="ip-timeout">
                                            {hop.query}
                                        </div>
                                    ) : (
                                        <>
                                            {hop.latitude && hop.longitude ? (
                                                <div className="lat-long">
                                                    <div className="ip">
                                                        ip: {hop?.ip}
                                                    </div>
                                                    <div className="ip">
                                                        isp: {hop?.isp}
                                                    </div>
                                                    Lat: {hop?.latitude}, Lon:{" "}
                                                    {hop?.longitude}
                                                </div>
                                            ) : (
                                                <div className="private-ip">
                                                    This IP address is private
                                                    and cannot be shown on the
                                                    map.
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <h3>Result of hops will be shown in this table :)</h3>
            )}
        </div>
    );
};

export default Sidebar;