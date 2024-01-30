const parseEnv = () => {

    const result = []
    for (const v in process.env) {
        if (v.slice(0, 4) === 'RSS_') {
            result.push(`${v}=${process.env[v]}`)
        }
    }
    console.log(result.join('; '))
};

parseEnv();
