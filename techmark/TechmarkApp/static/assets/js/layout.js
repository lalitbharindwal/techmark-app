function save_theme_settings() {
    localStorage.setItem("data-bs-theme", sessionStorage.getItem("data-bs-theme"));
    localStorage.setItem("data-preloader", sessionStorage.getItem("data-preloader"));
    localStorage.setItem("data-layout", sessionStorage.getItem("data-layout"));
    localStorage.setItem("data-layout-width", sessionStorage.getItem("data-layout-width"));
    localStorage.setItem("data-sidebar-size", sessionStorage.getItem("data-sidebar-size"));
    localStorage.setItem("data-layout-style", sessionStorage.getItem("data-layout-style"));
    localStorage.setItem("data-layout-position", sessionStorage.getItem("data-layout-position"));
    localStorage.setItem("data-sidebar-visibility", sessionStorage.getItem("data-sidebar-visibility"));
    localStorage.setItem("data-sidebar", sessionStorage.getItem("data-sidebar"));
    localStorage.setItem("data-topbar", sessionStorage.getItem("data-topbar"));
    localStorage.setItem("data-sidebar-image", sessionStorage.getItem("data-sidebar-image"));
}

if (localStorage.getItem("data-bs-theme") != null) {
    sessionStorage.setItem("data-preloader", "enable");
    sessionStorage.setItem("data-bs-theme", localStorage.getItem("data-bs-theme"));
    sessionStorage.setItem("data-preloader", localStorage.getItem("data-preloader"));
    sessionStorage.setItem("data-layout", localStorage.getItem("data-layout"));
    sessionStorage.setItem("data-layout-width", localStorage.getItem("data-layout-width"));
    sessionStorage.setItem("data-sidebar-size", localStorage.getItem("data-sidebar-size"));
    sessionStorage.setItem("data-layout-style", localStorage.getItem("data-layout-style"));
    sessionStorage.setItem("data-layout-position", localStorage.getItem("data-layout-position"));
    sessionStorage.setItem("data-sidebar-visibility", localStorage.getItem("data-sidebar-visibility"));
    sessionStorage.setItem("data-sidebar", localStorage.getItem("data-sidebar"));
    sessionStorage.setItem("data-topbar", localStorage.getItem("data-topbar"));
    sessionStorage.setItem("data-sidebar-image", localStorage.getItem("data-sidebar-image"));
} else {
    sessionStorage.setItem("data-preloader", "enable");
}

!function() {
    "use strict";
    var t, a, e;
    sessionStorage.getItem("defaultAttribute") && (t = document.documentElement.attributes,
    a = {},
    Object.entries(t).forEach(function(t) {
        var e;
        t[1] && t[1].nodeName && "undefined" != t[1].nodeName && (e = t[1].nodeName,
        a[e] = t[1].nodeValue)
    }),
    sessionStorage.getItem("defaultAttribute") !== JSON.stringify(a) ? (sessionStorage.clear(),
    window.location.reload()) : ((e = {})["data-layout"] = sessionStorage.getItem("data-layout"),
    e["data-sidebar-size"] = sessionStorage.getItem("data-sidebar-size"),
    e["data-bs-theme"] = sessionStorage.getItem("data-bs-theme"),
    e["data-layout-width"] = sessionStorage.getItem("data-layout-width"),
    e["data-sidebar"] = sessionStorage.getItem("data-sidebar"),
    e["data-sidebar-image"] = sessionStorage.getItem("data-sidebar-image"),
    e["data-layout-direction"] = sessionStorage.getItem("data-layout-direction"),
    e["data-layout-position"] = sessionStorage.getItem("data-layout-position"),
    e["data-layout-style"] = sessionStorage.getItem("data-layout-style"),
    e["data-topbar"] = sessionStorage.getItem("data-topbar"),
    e["data-preloader"] = sessionStorage.getItem("data-preloader"),
    e["data-body-image"] = sessionStorage.getItem("data-body-image"),
    Object.keys(e).forEach(function(t) {
        e[t] && document.documentElement.setAttribute(t, e[t])
    })))
}();
