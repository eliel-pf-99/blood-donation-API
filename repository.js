import sql from "./db.js";

export async function saveQuiz(value) {
    const result = await sql`insert into quiz (score) values (${value}) returning score`
    return result
}

export async function saveTime(ip) {
    const result = await sql`insert into times (ip) values (${ip}) returning ip`
    return result
}

export async function getTimes() {
    const result = await sql`SELECT COUNT(*) FROM times`.then(res => res)
    return result[0].count;
}