export const fetchKanji = async (setKanji) => {
    const response = await fetch('https://kanjiapi.dev/v1/kanji/車')//車　蛍
    const result = await response.json()
    setKanji(result)    
}