/*
βΊ Create By Radit
βΊ Base Ori Radit

π₯ KALAU MAU RENAME TARO CREDITS GUA : ππππππ πͺπΉπ¨πΊπ― ππππππππ */

const fs = require('fs')
const chalk = require('chalk')
//=================================================//
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)
global.autred = false
//βββββγ Set Random Image Menu γβββββ//
//gausah di apaΒ² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//βββββγ Set Kebutuhan Button & Kontak γβββββ//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/channel/HAMZXPRESET'
global.ig = 'https://www.instagram.com/syidaa._'
global.mygc = 'https://chat.whatsapp.com/L5X4iarh2CyBrFTMYxfD3o'
global.myweb = 'github.com/Hmzzfz'
global.linkgrupss = "https://chat.whatsapp.com/L5X4iarh2CyBrFTMYxfD3o"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.linkun = 'mailto:support@whatsapp.com?subject=Account%20Locked&body=Good%20Afternoon%20I%20Have%20A%20Problem%20Account%20Is%20Locked,%20I%20Spam%20Nothing%20But%20My%20Account%20Suddenly%20Locked,%20Please%20Reactivate%20This%20Number:%20[+62xxxxxx]'
global.email = 'stokhamz98@gmail.com'
global.ntidel = ['120363041515922784@g.us']
global.wlcm = []
global.wlcmm = []
global.ntnsfw = []
global.region = 'Indonesia'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//βββββγ Set Nama Own & Bot γβββββ//
global.ownername = 'ΰΌΊ~ β’ππ«΄π π·πΊππΆπ«΄β’ ~ΰΌ»' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = ' ππ«΄π π·πΊππΆπ«΄' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'ΰΌΊ~ β’ππ«΄π π·πΊππΆπ«΄β’ ~ΰΌ»' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['6285646509869'] 
global.premium = ['6285646509869']
global.packname = 'ΰΌΊ~ β’hmzz botzβ’ ~ΰΌ»'
global.ownerr = ['ΰΌΊ~ β’ππ«΄π π·πΊππΆπ«΄β’ ~ΰΌ»']
global.author = 'ΰΌΊ~ β’ππ«΄π π·πΊππΆπ«΄β’ ~ΰΌ»'
global.sessionName = './sessionye/paktzy'
global.prefa = ['','!','.',',','π€','πΏ']
global.sp = 'β­'
global.mess = {
nsfw: 'β οΈ _*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
wait: 'β³ _*Loading... Sabar Wibu*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
global.thumb = { url: 'https://telegra.ph/file/ef5e0eb4495807e88e007.jpg' }
global.visoka = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.menuimg = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.zy = { url: 'https://telegra.ph/file/ef5e0eb4495807e88e007.jpg' }
global.log0 = fs.readFileSync("./basetzy/gambarnye/thezyren.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
