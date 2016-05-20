window.Detectizr = function(e, n, t, r) {
    function i(e, n) {
        var t, r, o;
        if (arguments.length > 2)
            for (t = 1,
            r = arguments.length; r > t; t += 1)
                i(e, arguments[t]);
        else
            for (o in n)
                n.hasOwnProperty(o) && (e[o] = n[o]);
        return e
    }
    function o(e) {
        return b.browser.userAgent.indexOf(e) > -1
    }
    function s(e) {
        return e.test(b.browser.userAgent)
    }
    function a(e) {
        return e.exec(b.browser.userAgent)
    }
    function d(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }
    function l(e) {
        return null  === e || e === r ? "" : String(e).replace(/((\s|\-|\.)+[a-z0-9])/g, function(e) {
            return e.toUpperCase().replace(/(\s|\-|\.)/g, "")
        })
    }
    function c(e, n) {
        var t = n || ""
          , r = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(_, " ") : "");
        if (r) {
            for (; r.indexOf(" " + t + " ") >= 0; )
                r = r.replace(" " + t + " ", " ");
            e.className = n ? d(r) : ""
        }
    }
    function p(e, n, t) {
        e && (e = l(e),
        n && (n = l(n),
        u(e + n, !0),
        t && u(e + n + "_" + t, !0)))
    }
    function u(e, n) {
        e && x && (k.addAllFeaturesAsClass ? x.addTest(e, n) : (n = "function" == typeof n ? n() : n,
        n ? x.addTest(e, !0) : (delete x[e],
        c(A, e))))
    }
    function f(e, n) {
        e.version = n;
        var t = n.split(".");
        t.length > 0 ? (t = t.reverse(),
        e.major = t.pop(),
        t.length > 0 ? (e.minor = t.pop(),
        t.length > 0 ? (t = t.reverse(),
        e.patch = t.join(".")) : e.patch = "0") : e.minor = "0") : e.major = "0"
    }
    function m() {
        e.clearTimeout(w),
        w = e.setTimeout(function() {
            y = b.device.orientation,
            e.innerHeight > e.innerWidth ? b.device.orientation = "portrait" : b.device.orientation = "landscape",
            u(b.device.orientation, !0),
            y !== b.device.orientation && u(y, !1)
        }, 10)
    }
    function g(e) {
        var t, r, i, o, s, a = n.plugins;
        for (o = a.length - 1; o >= 0; o--) {
            for (t = a[o],
            r = t.name + t.description,
            i = 0,
            s = e.length; s >= 0; s--)
                -1 !== r.indexOf(e[s]) && (i += 1);
            if (i === e.length)
                return !0
        }
        return !1
    }
    function v(e) {
        var n;
        for (n = e.length - 1; n >= 0; n--)
            try {
                new ActiveXObject(e[n])
            } catch (t) {}
        return !1
    }
    function h(r) {
        var d, c, h, w, y, _, A;
        if (k = i({}, k, r || {}),
        k.detectDevice) {
            for (b.device = {
                type: "",
                model: "",
                orientation: ""
            },
            h = b.device,
            s(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/) ? (h.type = S[0],
            h.model = "smartTv") : s(/xbox|playstation.3|wii/) ? (h.type = S[0],
            h.model = "gameConsole") : s(/ip(a|ro)d/) ? (h.type = S[1],
            h.model = "ipad") : s(/tablet/) && !s(/rx-34/) || s(/folio/) ? (h.type = S[1],
            h.model = String(a(/playbook/) || "")) : s(/linux/) && s(/android/) && !s(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/) ? (h.type = S[1],
            h.model = "android") : s(/kindle/) || s(/mac.os/) && s(/silk/) ? (h.type = S[1],
            h.model = "kindle") : s(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/) || s(/mb511/) && s(/rutem/) ? (h.type = S[1],
            h.model = "android") : s(/bb10/) ? (h.type = S[1],
            h.model = "blackberry") : (h.model = a(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/),
            null  !== h.model ? (h.type = S[2],
            h.model = String(h.model)) : (h.model = "",
            s(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/) ? h.type = S[2] : s(/opera/) && s(/windows.nt.5/) && s(/htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/) ? h.type = S[2] : s(/windows.(nt|xp|me|9)/) && !s(/phone/) || s(/win(9|.9|nt)/) || s(/\(windows 8\)/) ? h.type = S[3] : s(/macintosh|powerpc/) && !s(/silk/) ? (h.type = S[3],
            h.model = "mac") : s(/linux/) && s(/x11/) ? h.type = S[3] : s(/solaris|sunos|bsd/) ? h.type = S[3] : s(/cros/) ? h.type = S[3] : s(/bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/) && !s(/mobile/) ? (h.type = S[3],
            h.model = "crawler") : h.type = S[2])),
            d = 0,
            c = S.length; c > d; d += 1)
                u(S[d], h.type === S[d]);
            k.detectDeviceModel && u(l(h.model), !0)
        }
        if (k.detectScreen && (h.screen = {},
        x && x.mq && (x.mq("only screen and (max-width: 240px)") ? (h.screen.size = "veryVerySmall",
        u("veryVerySmallScreen", !0)) : x.mq("only screen and (max-width: 320px)") ? (h.screen.size = "verySmall",
        u("verySmallScreen", !0)) : x.mq("only screen and (max-width: 480px)") && (h.screen.size = "small",
        u("smallScreen", !0)),
        (h.type === S[1] || h.type === S[2]) && x.mq("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)") && (h.screen.resolution = "high",
        u("highresolution", !0))),
        h.type === S[1] || h.type === S[2] ? (e.onresize = function(e) {
            m(e)
        }
        ,
        m()) : (h.orientation = "landscape",
        u(h.orientation, !0))),
        k.detectOS && (b.os = {},
        w = b.os,
        "" !== h.model && ("ipad" === h.model || "iphone" === h.model || "ipod" === h.model ? (w.name = "ios",
        f(w, (s(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."))) : "android" === h.model ? (w.name = "android",
        f(w, s(/android\s([\d\.]+)/) ? RegExp.$1 : "")) : "blackberry" === h.model ? (w.name = "blackberry",
        f(w, s(/version\/([^\s]+)/) ? RegExp.$1 : "")) : "playbook" === h.model && (w.name = "blackberry",
        f(w, s(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""))),
        w.name || (o("win") || o("16bit") ? (w.name = "windows",
        o("windows nt 6.3") ? f(w, "8.1") : o("windows nt 6.2") || s(/\(windows 8\)/) ? f(w, "8") : o("windows nt 6.1") ? f(w, "7") : o("windows nt 6.0") ? f(w, "vista") : o("windows nt 5.2") || o("windows nt 5.1") || o("windows xp") ? f(w, "xp") : o("windows nt 5.0") || o("windows 2000") ? f(w, "2k") : o("winnt") || o("windows nt") ? f(w, "nt") : o("win98") || o("windows 98") ? f(w, "98") : (o("win95") || o("windows 95")) && f(w, "95")) : o("mac") || o("darwin") ? (w.name = "mac os",
        o("68k") || o("68000") ? f(w, "68k") : o("ppc") || o("powerpc") ? f(w, "ppc") : o("os x") && f(w, (s(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(/_/g, "."))) : o("webtv") ? w.name = "webtv" : o("x11") || o("inux") ? w.name = "linux" : o("sunos") ? w.name = "sun" : o("irix") ? w.name = "irix" : o("freebsd") ? w.name = "freebsd" : o("bsd") && (w.name = "bsd")),
        w.name && (u(w.name, !0),
        w.major && (p(w.name, w.major),
        w.minor && p(w.name, w.major, w.minor))),
        s(/\sx64|\sx86|\swin64|\swow64|\samd64/) ? w.addressRegisterSize = "64bit" : w.addressRegisterSize = "32bit",
        u(w.addressRegisterSize, !0)),
        k.detectBrowser && (y = b.browser,
        s(/opera|webtv/) || !s(/msie\s([\d\w\.]+)/) && !o("trident") ? o("firefox") ? (y.engine = "gecko",
        y.name = "firefox",
        f(y, s(/firefox\/([\d\w\.]+)/) ? RegExp.$1 : "")) : o("gecko/") ? y.engine = "gecko" : o("opera") ? (y.name = "opera",
        y.engine = "presto",
        f(y, s(/version\/([\d\.]+)/) ? RegExp.$1 : s(/opera(\s|\/)([\d\.]+)/) ? RegExp.$2 : "")) : o("konqueror") ? y.name = "konqueror" : o("chrome") ? (y.engine = "webkit",
        y.name = "chrome",
        f(y, s(/chrome\/([\d\.]+)/) ? RegExp.$1 : "")) : o("iron") ? (y.engine = "webkit",
        y.name = "iron") : o("crios") ? (y.name = "chrome",
        y.engine = "webkit",
        f(y, s(/crios\/([\d\.]+)/) ? RegExp.$1 : "")) : o("applewebkit/") ? (y.name = "safari",
        y.engine = "webkit",
        f(y, s(/version\/([\d\.]+)/) ? RegExp.$1 : "")) : o("mozilla/") && (y.engine = "gecko") : (y.engine = "trident",
        y.name = "ie",
        !e.addEventListener && t.documentMode && 7 === t.documentMode ? f(y, "8.compat") : s(/trident.*rv[ :](\d+)\./) ? f(y, RegExp.$1) : f(y, s(/trident\/4\.0/) ? "8" : RegExp.$1)),
        y.name && (u(y.name, !0),
        y.major && (p(y.name, y.major),
        y.minor && p(y.name, y.major, y.minor))),
        u(y.engine, !0),
        y.language = n.userLanguage || n.language,
        u(y.language, !0)),
        k.detectPlugins) {
            for (y.plugins = [],
            d = C.length - 1; d >= 0; d--)
                _ = C[d],
                A = !1,
                e.ActiveXObject ? A = v(_.progIds) : n.plugins && (A = g(_.substrs)),
                A && (y.plugins.push(_.name),
                u(_.name, !0));
            n.javaEnabled() && (y.plugins.push("java"),
            u("java", !0))
        }
    }
    var w, y, b = {}, x = e.Modernizr, S = ["tv", "tablet", "mobile", "desktop"], k = {
        addAllFeaturesAsClass: !1,
        detectDevice: !0,
        detectDeviceModel: !0,
        detectScreen: !0,
        detectOS: !0,
        detectBrowser: !0,
        detectPlugins: !0
    }, C = [{
        name: "adobereader",
        substrs: ["Adobe", "Acrobat"],
        progIds: ["AcroPDF.PDF", "PDF.PDFCtrl.5"]
    }, {
        name: "flash",
        substrs: ["Shockwave Flash"],
        progIds: ["ShockwaveFlash.ShockwaveFlash.1"]
    }, {
        name: "wmplayer",
        substrs: ["Windows Media"],
        progIds: ["wmplayer.ocx"]
    }, {
        name: "silverlight",
        substrs: ["Silverlight"],
        progIds: ["AgControl.AgControl"]
    }, {
        name: "quicktime",
        substrs: ["QuickTime"],
        progIds: ["QuickTime.QuickTime"]
    }], _ = /[\t\r\n]/g, A = t.documentElement;
    return b.detect = function(e) {
        return h(e)
    }
    ,
    b.init = function() {
        b !== r && (b.browser = {
            userAgent: (n.userAgent || n.vendor || e.opera).toLowerCase()
        },
        b.detect())
    }
    ,
    b.init(),
    b
}(this, this.navigator, this.document);
