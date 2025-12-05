import { defineComponent as _, getCurrentInstance as E, ref as v, computed as b, createElementBlock as m, openBlock as p, normalizeClass as d, normalizeStyle as f, createElementVNode as C, createCommentVNode as g, renderSlot as H, toDisplayString as x, nextTick as D, createBlock as I, unref as k } from "vue";
const W = ["hover-class", "disabled"], z = /* @__PURE__ */ _({
  __name: "index",
  props: {
    title: { default: "" },
    size: { default: "normal" },
    type: { default: "info" },
    color: { default: "" },
    textColor: { default: "" },
    isRipple: { type: Boolean, default: !1 },
    rippleTime: { default: 500 },
    maskTime: { default: 1e3 },
    isHollow: { type: Boolean, default: !1 },
    rippleColor: { default: "rgba(0, 0, 0, .15)" },
    rippleStyle: { default: null },
    customStyle: { default: null },
    hoverClass: { default: "" },
    border: { default: 1 },
    isDisabled: { type: Boolean, default: !1 },
    radius: { default: 4 }
  },
  emits: ["onTap"],
  setup(n, { emit: l }) {
    let e = 0;
    const o = E(), t = n;
    e++;
    const s = v(0), u = v(0), i = v(!1), h = v({}), w = "seeButton_" + e;
    let R = 0;
    const M = v([]), N = b(() => t.isRipple ? "none" : t.hoverClass ? t.hoverClass : t.isHollow ? `button-hover-${t.type}-hollow` : `button-hover-${t.type}`), $ = (a) => {
      i.value = !1, D(() => Y(a));
    }, Y = (a) => {
      B().then((r) => {
        if (!r?.height || (r.finalWidth = r.height > r.width ? r.height : r.width, !r.finalWidth)) return;
        h.value = r;
        let c, y;
        c = a.changedTouches[0].clientX, y = a.changedTouches[0].clientY, c = a.detail.clientX, y = a.detail.clientY, c = a.touches[0].clientX, y = a.touches[0].clientY, s.value = y - r.top - r.finalWidth / 2, u.value = c - r.left - r.finalWidth / 2, D(() => i.value = !0), M.value.push({
          id: R++,
          x: c - r.left - r.finalWidth / 2,
          y: y - r.top - r.finalWidth / 2,
          size: r.finalWidth
        });
      });
    }, B = () => new Promise((a) => {
      const r = uni.createSelectorQuery().in(o), c = "#" + w;
      r.select(c).boundingClientRect((y) => {
        a(y);
      }).exec();
    });
    return (a, r) => (p(), m("view", {
      id: w,
      style: f({ ...t.customStyle, borderRadius: t.radius + "px" }),
      class: d(["see-button", [t.size]]),
      onClick: r[1] || (r[1] = (c) => $(c))
    }, [
      C("view", {
        id: w,
        style: f({ ...t.customStyle, borderRadius: t.radius + "px" }),
        class: d(["see-button", [t.size]]),
        onTouchstart: r[0] || (r[0] = (c) => $(c))
      }, [
        C("button", {
          style: f({
            ...t.customStyle,
            borderRadius: t.radius + "px",
            background: t.color
          }),
          class: d(["see-botton-class", [
            t.size,
            t.isDisabled && `disabled-${t.type}`,
            t.isHollow ? `hollow-${t.type}` : t.type,
            `border-${t.type}-${t.border ?? 1}`
          ]]),
          "hover-class": N.value,
          disabled: t.isDisabled
        }, [
          C("text", {
            style: f({ color: t.textColor }),
            class: "title"
          }, x(t.title), 5),
          H(a.$slots, "default", {}, void 0, !0)
        ], 14, W),
        t.isRipple ? (p(), m("view", {
          key: 0,
          class: d(["see-button-ripple", { active: i.value }]),
          style: f({
            ...t.rippleStyle,
            top: s.value + "px",
            left: u.value + "px",
            width: h.value.finalWidth + "px",
            height: h.value.finalWidth + "px",
            "background-color": n.rippleColor,
            "--ripple-time": t.rippleTime + "ms",
            "--mask-time": t.maskTime + "ms"
          })
        }, null, 6)) : g("", !0)
      ], 38)
    ], 6));
  }
}), S = (n, l) => {
  const e = n.__vccOpts || n;
  for (const [o, t] of l)
    e[o] = t;
  return e;
}, F = /* @__PURE__ */ S(z, [["__scopeId", "data-v-4ae6dd2e"]]), L = /* @__PURE__ */ _({
  __name: "index",
  props: {
    text: { default: "" },
    type: { default: "info" },
    color: { default: "" },
    href: { default: "" },
    isLine: { type: Boolean, default: !1 },
    lineColor: { default: "" }
  },
  emits: ["onClick"],
  setup(n, { emit: l }) {
    const e = n, o = l, t = b(() => {
      const i = [];
      return e.color || i.push(e.type), e.isLine && i.push("href"), i.join(" ");
    }), s = b(() => {
      const i = {};
      return e.color && (i.color = e.color), e.isLine && e.lineColor && (i.borderBottomColor = e.lineColor), i;
    }), u = () => {
      o("onClick"), (e.href ?? "") && (plus.runtime.openURL(e.href), window.open(e.href), uni.setClipboardData({
        data: e.href,
        success: () => {
          uni.hideToast(), D(() => {
            uni.showToast({
              title: "链接已复制，请在浏览器打开",
              icon: "none"
            });
          });
        }
      }));
    };
    return (i, h) => (p(), m("text", {
      class: d(t.value),
      style: f(s.value),
      onClick: u
    }, x(e.text), 7));
  }
}), T = /* @__PURE__ */ S(L, [["__scopeId", "data-v-a55d9e3c"]]);
function P(n) {
  if (n == null) return null;
  if (n instanceof Date) return n;
  if (typeof n == "number") return new Date(n);
  if (typeof n == "string") {
    if (/^\d+$/.test(n))
      return new Date(parseInt(n));
    const l = n.replace(/-/g, "/");
    return new Date(l);
  }
  return null;
}
function X(n, l = "YYYY-MM-DD HH:mm:ss", e = { placeholder: "" }) {
  const o = P(n);
  if (!o || isNaN(o.getTime()))
    return e.placeholder || "";
  const t = {
    "M+": o.getMonth() + 1,
    // 月份
    "D+": o.getDate(),
    // 日
    "H+": o.getHours(),
    // 小时 (24小时制)
    "h+": o.getHours() % 12 === 0 ? 12 : o.getHours() % 12,
    // 小时 (12小时制)
    "m+": o.getMinutes(),
    // 分
    "s+": o.getSeconds(),
    // 秒
    "q+": Math.floor((o.getMonth() + 3) / 3),
    // 季度
    "S+": o.getMilliseconds()
    // 毫秒
  };
  if (/(Y+|y+)/.test(l) && (l = l.replace(
    RegExp.$1,
    (o.getFullYear() + "").substr(4 - RegExp.$1.length)
  )), /(W+)/.test(l)) {
    const s = ["日", "一", "二", "三", "四", "五", "六"];
    l = l.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + s[o.getDay()]
    );
  }
  for (const s in t)
    if (new RegExp("(" + s + ")").test(l)) {
      const u = t[s].toString();
      s === "S+" ? l = l.replace(RegExp.$1, ("000" + u).slice(-3)) : l = l.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? u : ("00" + u).substr(("" + u).length)
      );
    }
  return l;
}
function q(n) {
  return n ? n instanceof Date ? n : typeof n == "number" ? new Date(n) : typeof n == "string" ? /^\d+$/.test(n) ? new Date(parseInt(n)) : new Date(n.replace(/-/g, "/")) : null : null;
}
function U(n) {
  const l = q(n);
  if (!l) return "";
  const o = (Date.now() - l.getTime()) / 1e3;
  return o < 0 ? "刚刚" : o < 60 ? Math.floor(o) + "秒前" : o < 3600 ? Math.floor(o / 60) + "分钟前" : o < 3600 * 24 ? Math.floor(o / 3600) + "小时前" : o < 3600 * 24 * 7 ? Math.floor(o / (3600 * 24)) + "天前" : o < 3600 * 24 * 30 ? Math.floor(o / (3600 * 24 * 7)) + "周前" : o < 3600 * 24 * 365 ? Math.floor(o / (3600 * 24 * 30)) + "月前" : Math.floor(o / (3600 * 24 * 365)) + "年前";
}
function A(n, l) {
  const e = n.toString(), o = e.indexOf(".");
  if (o === -1)
    return Number(e);
  const t = e.substring(0, o + 1 + l);
  return Number(t);
}
function O(n, l = {}) {
  const { decimals: e = 2, symbol: o = "", useGrouping: t = !0 } = l, s = Number(n);
  if (Number.isNaN(s)) return "";
  const u = A(s, e), h = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: e,
    maximumFractionDigits: e,
    useGrouping: t
    // 注意：不依赖 Intl 的 roundingMode，因为兼容性还不是 100% 全覆盖，
    // 手动截断最稳妥。
  }).format(u);
  return o ? `${o}${h}` : h;
}
const Q = /* @__PURE__ */ _({
  __name: "index",
  props: {
    text: { default: "" },
    type: { default: "info" },
    mode: { default: "text" },
    color: { default: "" },
    href: { default: "" },
    phoneNumber: { default: "" },
    date: { default: "" },
    dateFormat: { default: "YYYY-MM-DD" }
  },
  emits: ["onClick"],
  setup(n, { emit: l }) {
    const e = n, o = l, t = b(() => e.color ? "" : e.type), s = b(() => ({
      color: e.color
    })), u = () => {
      o("onClick"), e.mode === "phone" && (uni.makePhoneCall({
        phoneNumber: e.phoneNumber
      }), uni.showToast({
        title: "H5不支持，请使用小程序或APP点击",
        icon: "none"
      }));
    };
    return (i, h) => (p(), m("view", {
      class: "see-text",
      onClick: u
    }, [
      e.mode === "text" ? (p(), m("text", {
        key: 0,
        class: d(t.value),
        style: f(s.value)
      }, x(e.text), 7)) : g("", !0),
      e.mode === "link" ? (p(), I(T, {
        key: 1,
        text: e.text,
        type: e.type,
        href: e.href
      }, null, 8, ["text", "type", "href"])) : g("", !0),
      e.mode === "phone" ? (p(), m("text", {
        key: 2,
        class: d(t.value),
        style: f(s.value)
      }, x(e.text), 7)) : g("", !0),
      e.mode === "price" ? (p(), m("text", {
        key: 3,
        class: d(t.value),
        style: f(s.value)
      }, x(k(O)(e.text)), 7)) : g("", !0),
      e.mode === "date" ? (p(), m("text", {
        key: 4,
        class: d(t.value),
        style: f(s.value)
      }, x(k(X)(e.date, e.dateFormat)), 7)) : g("", !0),
      e.mode === "timeago" ? (p(), m("text", {
        key: 5,
        class: d(t.value),
        style: f(s.value)
      }, x(k(U)(e.date)), 7)) : g("", !0)
    ]));
  }
}), V = /* @__PURE__ */ S(Q, [["__scopeId", "data-v-468bf5b5"]]), G = {
  SeeButton: F,
  SeeText: V,
  SeeLink: T
};
export {
  F as SeeButton,
  T as SeeLink,
  V as SeeText,
  G as default
};
