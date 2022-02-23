import api from "modules/api/api";
import { JOBS } from "modules/api/endpoints";
import React, {useEffect} from "react";

export default function Jobs() {
    useEffect(async () => {
        const response = await api.fetch(JOBS);

        console.log(response);
    }, []);

    return (
        <div>
            Jobs component
        </div>
    )
}