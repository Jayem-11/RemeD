import React from 'react'
import {Link }from "@chakra-ui/react";

const Footer = () => {
    return (
        <div id="footer">

        
            <ul class="copyright">
                <li>&copy; RemeD. All rights reserved.</li><li>Design: The OG HUB😎</li>
            </ul>

            <Link href="/faqs" color={"blue.400"}>
                FAQS
            </Link>

    </div>
    )
}

export default Footer
