import bcrypt from "bcryptjs";

async function generarPass() {
    const pass = '1234';
    const hash = await bcrypt.hash(pass, 10);
    console.log('Traducción= ', hash);
}

generarPass();