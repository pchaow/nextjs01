import React from "react";

export default function MainLayout({children} : {children : React.ReactNode}) {

    return (
        <section>
        <div>Header</div>
            {children}
        <div>Footer</div>
        </section>
    )
}