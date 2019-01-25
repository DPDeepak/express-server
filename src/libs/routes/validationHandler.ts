export const validationHandler = (config) => (req, res, next) => {
    //console.log(req.body);
    const serverData = Object.keys(req.body)
    const configData = Object.keys(config)
   
   
    console.log(serverData );
    console.log( configData);
    // for (const n in serverData) {
    //     for (const m in configData) {
    //         if (serverData[m] === configData[n])
    //             console.log(serverData[n] + "     " + configData[n]);

    //     }

    // }
   

}