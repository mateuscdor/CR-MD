const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "xvideos",
    alias: ["xvideodownload"],
    desc: "Download Media From https://xvideos.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.xvideos.com/video54414551/23413649/0/inked_beauty_harlow_harrison_c._on_bbc_before_riding",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/xvideos", { url: isUrl(text)[0] }, "apikey"))
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Duration : ${fetch.result.duration}s`
        killua.sendFile(m.from, fetch.result.files.low, "", m, { caption: teks })
    },
    isQuery: true
}