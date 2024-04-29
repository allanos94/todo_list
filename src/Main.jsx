import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashStack from "./navigators/SplashNavigation";
import IntroStack from "./navigators/IntroNavigation";


export default function Main() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000));
            }
            catch (error) {
                console.error(error);
            }
            finally {
                setIsReady(true);
            }
        }
            prepare();
        });
    return (
        <NavigationContainer>
            {isReady ? <IntroStack /> : <SplashStack />}
        </NavigationContainer>
    );
}


