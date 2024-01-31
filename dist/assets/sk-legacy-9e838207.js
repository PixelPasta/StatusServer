System.register([],(function(e,a){"use strict";return{execute:function(){var a=e("Settings","Nastavenia"),o=e("Help","Nápoveda"),t=e("Language","Jazyk"),n=e("Appearance","Vzhľad"),i=e("Theme","Téma"),r=e("General","Základné"),s=e("Version","Verzia"),d=e("List","Zoznam"),l=e("Add","Pridať"),v=e("Pending","Čaká sa"),p=e("statusMaintenance","Údržba"),u=e("Maintenance","Údržba"),m=e("pauseDashboardHome","Pauza"),k=e("Pause","Pauza"),c=e("Status","Stav"),y=e("Message","Správa"),h=e("Edit","Upraviť"),P=e("Delete","Odstrániť"),b=e("Current","Aktuálne"),g=e("day","deň | dni"),S=e("hour","hodina"),N=e("Response","Odpoveď"),T=e("Ping","Ping"),A=e("Keyword","Kľúčové slovo"),D=e("Port","Port"),f=e("Retries","Opakovania"),w=e("Advanced","Pokročilé"),R=e("checkEverySecond","Skontrolovať každých {0} sekúnd"),z=e("retryCheckEverySecond","Zopakovať každých {0} sekúnd"),E=e("resendEveryXTimes","Znovu poslať každých {0} krát"),L=e("resendDisabled","Opakované odoslanie vypnuté"),U=e("ignoreTLSError","Ignorovať TLS/SSL chyby pre HTTPS stránky"),j=e("upsideDownModeDescription","Obrátiť stav. Pokiaľ je služba dostupná, zobrazuje sa ako NEDOSTUPNÁ."),H=e("Save","Uložiť"),M=e("Notifications","Notifikácie"),x=e("Dark","Tmavá"),O=e("Light","Svetlá"),C=e("Auto","Automaticky"),I=e("Normal","Normálna"),V=e("Bottom","Dole"),Z=e("None","Žiadne"),F=e("Timezone","Časová zóna"),G=e("languageName","Slovenčina"),B=e("Dashboard","Dashboard"),J=e("Up","Dostupné"),K=e("Down","Nedostupné"),W=e("Unknown","Neznáme"),q=e("markdownSupported","Podpora Markdown syntaxu"),X=e("Name","Názov"),Q=e("DateTime","Dátum a čas"),Y=e("Resume","Pokračovať"),$=e("Uptime","Doba prevádzky"),_=e("Monitor","Sledovanie | Sledovania"),ee=e("URL","URL"),ae=e("Hostname","Adresa"),oe=e("retriesDescription","Maximálny počet opakovaní pred tým, ako je služba označená ako nedostupná a je zaslaná notifikácia"),te=e("maxRedirectDescription","Maximálny počet presmerovaní. Hodnota 0 vypne presmerovania."),ne=e("needPushEvery","Tuto adresu by ste mali volať každých {0} sekúnd."),ie=e("pushOptionalParams","Voliteľné parametre: {0}"),re=e("Game","Hra"),se=e("Logout","Odhlásiť sa"),de=e("Leave","Odísť"),le=e("Yes","Áno"),ve=e("No","Nie"),pe=e("Username","Používateľské meno"),ue=e("Password","Heslo"),me=e("Login","Prihlásiť sa"),ke=e("Email","E-mail"),ce=e("Test","Test"),ye=e("Export","Exportovať"),he=e("Import","Importovať"),Pe=e("respTime","Čas odozvy (ms)"),be=e("notAvailableShort","Nie je číslo"),ge=e("Create","Vytvoriť"),Se=e("Events","Udalosti"),Ne=e("Heartbeats","Odpovede"),Te=e("alertNoFile","Vyberte súbor na import."),Ae=e("alertWrongFileType","Vyberte súbor JSON."),De=e("Overwrite","Prepísať"),fe=e("Options","Možnosti"),we=e("Inactive","Neaktívne"),Re=e("Token","Token"),ze=e("Tags","Značky"),Ee=e("color","Farba"),Le=e("Gray","Šedá"),Ue=e("Red","Červená"),je=e("Orange","Oranžová"),He=e("Green","Zelená"),Me=e("Indigo","Indigo"),xe=e("Purple","Fialová"),Oe=e("Pink","Ružová"),Ce=e("Custom","Vlastná"),Ie=e("defaultNotificationName","Moje {notification} upozornenie ({number})"),Ve=e("here","tu"),Ze=e("Required","Povinné"),Fe=e("webhookJsonDesc","{0} je vhodný pre všetky moderné servery HTTP, ako napríklad Express.js"),Ge=e("webhookFormDataDesc","{multipart} je dobré pre PHP. JSON bude potrebné analyzovať pomocou {decodeFunction}"),Be=e("Generate","Generovať"),Je=e("Confirm","Potvrdiť"),Ke=e("Active","Aktívne"),We=e("Blue","Modrá"),qe=e("statusPageNothing","Nič tu nie je, pridajte skupinu alebo sledovanie."),Xe=e("webhookAdditionalHeadersTitle","Ďalšie položky"),Qe=e("webhookAdditionalHeadersDesc","Nastaví ďalšie hlavičky odoslané s webovým hákom."),Ye=e("Priority","Priorita"),$e=e("statusPageRefreshIn","Obnovenie za: {0}"),_e=e("emojiCheatSheet","Emotikony: {0}"),ea=e("appriseInstalled","Apprise je nainštalovaný."),aa=e("styleElapsedTimeShowWithLine","Zobraziť (S Riadkom)"),oa=e("webhookCustomBodyDesc","Zadajte vlastné HTTP Body pre request. Šablónové premenné {msg}, {heartbeat}, {monitor} sú akceptované."),ta=e("timeoutAfter","Platnosť požiadavky vypršala po {0} sekundách"),na=e("styleElapsedTime","Uplynulý čas pod lištou srdcového tepu"),ia=e("styleElapsedTimeShowNoLine","Zobraziť (Žiadny riadok)"),ra=e("filterActive","Aktívne"),sa=e("filterActivePaused","Pozastavené"),da=e("Home","Domov"),la=e("Method","Metoda");e("default",{Settings:a,Help:o,"New Update":"Nová aktualizácia",Language:t,Appearance:n,Theme:i,General:r,"Primary Base URL":"Základná URL",Version:s,List:d,Add:l,"Add New Monitor":"Pridať nové Sledovanie","Quick Stats":"Rýchly prehľad",Pending:v,statusMaintenance:p,Maintenance:u,"General Monitor Type":"Základný typ Sledovania","Passive Monitor Type":"Pasívny typ Sledovania","Specific Monitor Type":"Špecifický typ Sledovania",pauseDashboardHome:m,Pause:k,Status:c,Message:y,"No important events":"Žiadne dôležité udalosti",Edit:h,Delete:P,Current:b,"Cert Exp.":"Platnosť cert.",day:g,hour:S,Response:N,Ping:T,Keyword:A,"Friendly Name":"Názov",Port:D,Retries:f,"Resend Notification if Down X times consecutively":"Poslať oznámenie znovu, ak je nedostupné X-krát za sebou",Advanced:w,checkEverySecond:R,retryCheckEverySecond:z,resendEveryXTimes:E,resendDisabled:L,ignoreTLSError:U,upsideDownModeDescription:j,"Upside Down Mode":"Obrátený režim","Max. Redirects":"Max. počet presmerovaní","Accepted Status Codes":"Akceptované stavové kódy","Push URL":"Push URL",Save:H,Notifications:M,"Not available, please setup.":"Nedostupné, prosím nastavte.","Setup Notification":"Nastavenie notifikácií",Dark:x,Light:O,Auto:C,Normal:I,Bottom:V,None:Z,Timezone:F,languageName:G,Dashboard:B,"Check Update On GitHub":"Skontrolovať aktualizáciu na GitHub-e",Up:J,Down:K,Unknown:W,markdownSupported:q,Name:X,DateTime:Q,Resume:Y,Uptime:$,Monitor:_,"-day":"-dní","-hour":"-hodín","Monitor Type":"Typ Sledovania",URL:ee,Hostname:ae,"Heartbeat Interval":"Heartbeat Interval","Heartbeat Retry Interval":"Interval opakovania pre Heartbeat",retriesDescription:oe,maxRedirectDescription:te,needPushEvery:ne,pushOptionalParams:ie,"Theme - Heartbeat Bar":"Téma - Heartbeat riadok",Game:re,"Search Engine Visibility":"Viditeľnosť vyhľadávačmi","Allow indexing":"Povoliť indexovanie","Change Password":"Zmeniť heslo","Current Password":"Aktuálne heslo","New Password":"Nové heslo","Repeat New Password":"Zopakovať nové heslo","Update Password":"Aktualizovať heslo","Disable Auth":"Vypnúť autentifikáciu","Enable Auth":"Zapnúť autentifikáciu","Please use this option carefully!":"Túto možnosť používajte opatrne!",Logout:se,Leave:de,"I understand, please disable":"Rozumiem, vypnite to",Yes:le,No:ve,Username:pe,Password:ue,Login:me,"No Monitors, please":"Žiadne sledovanie, prosím","add one":"pridať jeden","Notification Type":"Typ notifikácie",Email:ke,Test:ce,"Certificate Info":"Informácie o certifikáte","Resolver Server":"DNS server","Last Result":"Posledný výsledok","Repeat Password":"Zopakovať heslo","Import Backup":"Importovať zálohu","Export Backup":"Exportovať zálohu",Export:ye,Import:he,respTime:Pe,notAvailableShort:be,"Default enabled":"Predvolene povolené",Create:ge,"Clear Data":"Vyčistiť dáta",Events:Se,Heartbeats:Ne,"Auto Get":"Získať automaticky","Schedule maintenance":"Naplánovať údržbu","Affected Monitors":"Dotknuté sledovania","Pick Affected Monitors...":"Vybrať dotknuté sledovania…","Start of maintenance":"Začiatok údržby","All Status Pages":"Všetky stavové stránky","Select status pages...":"Vybrať stránky stavu…",alertNoFile:Te,alertWrongFileType:Ae,"Clear all statistics":"Vymazať všetky štatistiky","Skip existing":"Preskočiť existujúce",Overwrite:De,Options:fe,"Keep both":"Ponechať obe","Setup 2FA":"Nastavenie 2FA","Disable 2FA":"Zakázať 2FA","2FA Settings":"Nastavenia 2FA","Two Factor Authentication":"Dvojfaktorová autentifikácia",Inactive:we,Token:Re,"Show URI":"Zobraziť URI",Tags:ze,"Add New below or Select...":"Pridať novú nižšie alebo vybrať…","Tag with this value already exist.":"Značka s touto hodnotou už existuje.",color:Ee,"value (optional)":"hodnota (voliteľné)",Gray:Le,Red:Ue,Orange:je,Green:He,Indigo:Me,Purple:xe,Pink:Oe,Custom:Ce,"Avg. Ping":"Priemerný ping","Avg. Response":"Priemerný čas odpovede","Entry Page":"Vstupná stránka","No Services":"Žiadne služby","All Systems Operational":"Všetky systémy funkčné","Partially Degraded Service":"Čiastočne zhoršená služba","Degraded Service":"Degradovaná služba","Add Group":"Pridať skupinu","Add a monitor":"Pridať sledovanie","Edit Status Page":"Upraviť stavovú stránku","Go to Dashboard":"Prejdite na informačný panel","Status Page":"Stavová stránka","Status Pages":"Stavové stránky",defaultNotificationName:Ie,here:Ve,Required:Ze,"Post URL":"Post URL","Content Type":"Druh obsahu",webhookJsonDesc:Fe,webhookFormDataDesc:Ge,Generate:Be,"Discourage search engines from indexing site":"Odradiť vyhľadávacie nástroje od indexovania stránky","disableauth.message1":"Ste si istý, že chcete <strong>vypnúť autentifikáciu</strong>?","disableauth.message2":"Je navrhnutý pre scenáre, <strong>kde máte v úmysle implementovať autentifikáciu treťou stranou</strong> pred Uptime Kuma, ako je Cloudflare Access, Authelia alebo iné autentifikačné mechanizmy.",Confirm:Je,"Remember me":"Zapamätať si ma","Resource Record Type":"Typ záznamu","Create your admin account":"Vytvorte si účet administrátora","Apply on all existing monitors":"Aplikujte na všetky existujúce sledovania","Verify Token":"Overiť token","Enable 2FA":"Povoliť 2FA",Active:Ke,"Add New Tag":"Pridať novú značku","Tag with this name already exist.":"Značka s týmto názvom už existuje.",Blue:We,"Search...":"Hľadať…",statusPageNothing:qe,webhookAdditionalHeadersTitle:Xe,webhookAdditionalHeadersDesc:Qe,"Webhook URL":"Webhook URL","Application Token":"Token aplikácie","Server URL":"Server URL",Priority:Ye,statusPageRefreshIn:$e,emojiCheatSheet:_e,"Read more":"Prečítajte si viac",appriseInstalled:ea,"Reconnecting...":"Prepájanie...","Request Timeout":"Platnosť požiadavky vypršala",styleElapsedTimeShowWithLine:aa,webhookCustomBodyDesc:oa,timeoutAfter:ta,styleElapsedTime:na,styleElapsedTimeShowNoLine:ia,filterActive:ra,filterActivePaused:sa,Home:da,"Cannot connect to the socket server":"Nemožno sa pripojiť k socket serveru","Invert Keyword":"Prevrátiť kľúčové slovo","Expected Value":"Očakávaná hodnota","Json Query":"Json Query",Method:la})}}}));
