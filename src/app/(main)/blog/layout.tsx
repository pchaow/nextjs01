import React from "react";

export default function MainLayout({children} : {children : React.ReactNode}) {

    return (
        <section className="flex flex-row">
            <div>
                Side Bar
            </div>
            <div className="ml-3">
            {children}
            </div>
        </section>
    )
}