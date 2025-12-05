import { defineComponent as w, getCurrentInstance as W, ref as b, computed as y, createElementBlock as m, openBlock as p, normalizeClass as d, normalizeStyle as f, createElementVNode as C, createCommentVNode as v, renderSlot as z, toDisplayString as x, nextTick as D, unref as _, onMounted as F, onUnmounted as L, toValue as P, createBlock as U } from "vue";
const X = ["hover-class", "disabled"], q = {
  name: "SeeButton"
}, A = /* @__PURE__ */ w({
  ...q,
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
    const t = W(), o = n;
    e++;
    const s = b(0), u = b(0), i = b(!1), h = b({}), k = "seeButton_" + e;
    let N = 0;
    const H = b([]), I = y(() => o.isRipple ? "none" : o.hoverClass ? o.hoverClass : o.isHollow ? `button-hover-${o.type}-hollow` : `button-hover-${o.type}`), $ = (a) => {
      i.value = !1, D(() => B(a));
    }, B = (a) => {
      E().then((r) => {
        if (!r?.height || (r.finalWidth = r.height > r.width ? r.height : r.width, !r.finalWidth)) return;
        h.value = r;
        let c, g;
        c = a.changedTouches[0].clientX, g = a.changedTouches[0].clientY, c = a.detail.clientX, g = a.detail.clientY, c = a.touches[0].clientX, g = a.touches[0].clientY, s.value = g - r.top - r.finalWidth / 2, u.value = c - r.left - r.finalWidth / 2, D(() => i.value = !0), H.value.push({
          id: N++,
          x: c - r.left - r.finalWidth / 2,
          y: g - r.top - r.finalWidth / 2,
          size: r.finalWidth
        });
      });
    }, E = () => new Promise((a) => {
      const r = uni.createSelectorQuery().in(t), c = "#" + k;
      r.select(c).boundingClientRect((g) => {
        a(g);
      }).exec();
    });
    return (a, r) => (p(), m("view", {
      id: k,
      style: f({ ...o.customStyle, borderRadius: o.radius + "px" }),
      class: d(["see-button", [o.size]]),
      onClick: r[1] || (r[1] = (c) => $(c))
    }, [
      C("view", {
        id: k,
        style: f({ ...o.customStyle, borderRadius: o.radius + "px" }),
        class: d(["see-button", [o.size]]),
        onTouchstart: r[0] || (r[0] = (c) => $(c))
      }, [
        C("button", {
          style: f({
            ...o.customStyle,
            borderRadius: o.radius + "px",
            background: o.color
          }),
          class: d(["see-botton-class", [
            o.size,
            o.isDisabled && `disabled-${o.type}`,
            o.isHollow ? `hollow-${o.type}` : o.type,
            `border-${o.type}-${o.border ?? 1}`
          ]]),
          "hover-class": I.value,
          disabled: o.isDisabled
        }, [
          C("text", {
            style: f({ color: o.textColor }),
            class: "title"
          }, x(o.title), 5),
          z(a.$slots, "default", {}, void 0, !0)
        ], 14, X),
        o.isRipple ? (p(), m("view", {
          key: 0,
          class: d(["see-button-ripple", { active: i.value }]),
          style: f({
            ...o.rippleStyle,
            top: s.value + "px",
            left: u.value + "px",
            width: h.value.finalWidth + "px",
            height: h.value.finalWidth + "px",
            "background-color": n.rippleColor,
            "--ripple-time": o.rippleTime + "ms",
            "--mask-time": o.maskTime + "ms"
          })
        }, null, 6)) : v("", !0)
      ], 38)
    ], 6));
  }
}), S = (n, l) => {
  const e = n.__vccOpts || n;
  for (const [t, o] of l)
    e[t] = o;
  return e;
}, V = /* @__PURE__ */ S(A, [["__scopeId", "data-v-8ca01f32"]]), O = {
  name: "SeeLink"
}, Q = /* @__PURE__ */ w({
  ...O,
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
    const e = n, t = l, o = y(() => {
      const i = [];
      return e.color || i.push(e.type), e.isLine && i.push("href"), i.join(" ");
    }), s = y(() => {
      const i = {};
      return e.color && (i.color = e.color), e.isLine && e.lineColor && (i.borderBottomColor = e.lineColor), i;
    }), u = () => {
      t("onClick"), (e.href ?? "") && (plus.runtime.openURL(e.href), window.open(e.href), uni.setClipboardData({
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
      class: d(o.value),
      style: f(s.value),
      onClick: u
    }, x(e.text), 7));
  }
}), T = /* @__PURE__ */ S(Q, [["__scopeId", "data-v-e96ac451"]]);
function j(n) {
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
function M(n, l = "YYYY-MM-DD HH:mm:ss", e = { placeholder: "" }) {
  const t = j(n);
  if (!t || isNaN(t.getTime()))
    return e.placeholder || "";
  const o = {
    "M+": t.getMonth() + 1,
    // 月份
    "D+": t.getDate(),
    // 日
    "H+": t.getHours(),
    // 小时 (24小时制)
    "h+": t.getHours() % 12 === 0 ? 12 : t.getHours() % 12,
    // 小时 (12小时制)
    "m+": t.getMinutes(),
    // 分
    "s+": t.getSeconds(),
    // 秒
    "q+": Math.floor((t.getMonth() + 3) / 3),
    // 季度
    "S+": t.getMilliseconds()
    // 毫秒
  };
  if (/(Y+|y+)/.test(l) && (l = l.replace(
    RegExp.$1,
    (t.getFullYear() + "").substr(4 - RegExp.$1.length)
  )), /(W+)/.test(l)) {
    const s = ["日", "一", "二", "三", "四", "五", "六"];
    l = l.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + s[t.getDay()]
    );
  }
  for (const s in o)
    if (new RegExp("(" + s + ")").test(l)) {
      const u = o[s].toString();
      s === "S+" ? l = l.replace(RegExp.$1, ("000" + u).slice(-3)) : l = l.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? u : ("00" + u).substr(("" + u).length)
      );
    }
  return l;
}
function oe(n, l = "YYYY-MM-DD HH:mm:ss", e = { placeholder: "" }) {
  return y(() => M(_(n), _(l), e));
}
function G(n) {
  return n ? n instanceof Date ? n : typeof n == "number" ? new Date(n) : typeof n == "string" ? /^\d+$/.test(n) ? new Date(parseInt(n)) : new Date(n.replace(/-/g, "/")) : null : null;
}
function R(n) {
  const l = G(n);
  if (!l) return "";
  const t = (Date.now() - l.getTime()) / 1e3;
  return t < 0 ? "刚刚" : t < 60 ? Math.floor(t) + "秒前" : t < 3600 ? Math.floor(t / 60) + "分钟前" : t < 3600 * 24 ? Math.floor(t / 3600) + "小时前" : t < 3600 * 24 * 7 ? Math.floor(t / (3600 * 24)) + "天前" : t < 3600 * 24 * 30 ? Math.floor(t / (3600 * 24 * 7)) + "周前" : t < 3600 * 24 * 365 ? Math.floor(t / (3600 * 24 * 30)) + "月前" : Math.floor(t / (3600 * 24 * 365)) + "年前";
}
function ne(n, l = 3e4) {
  const e = b(0);
  let t = null;
  const o = () => {
    s(), t = setInterval(() => {
      e.value++;
    }, l);
  }, s = () => {
    t && (clearInterval(t), t = null);
  };
  return F(() => o()), L(() => s()), y(() => (e.value, R(_(n))));
}
function J(n, l) {
  const e = n.toString(), t = e.indexOf(".");
  if (t === -1)
    return Number(e);
  const o = e.substring(0, t + 1 + l);
  return Number(o);
}
function Y(n, l = {}) {
  const { decimals: e = 2, symbol: t = "", useGrouping: o = !0 } = l, s = Number(n);
  if (Number.isNaN(s)) return "";
  const u = J(s, e), h = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: e,
    maximumFractionDigits: e,
    useGrouping: o
    // 注意：不依赖 Intl 的 roundingMode，因为兼容性还不是 100% 全覆盖，
    // 手动截断最稳妥。
  }).format(u);
  return t ? `${t}${h}` : h;
}
function le(n, l = {}) {
  const { placeholder: e = "-" } = l;
  return y(() => {
    const t = P(n);
    if (t == null || t === "")
      return e;
    const o = Y(t, l);
    return o === "" ? e : o;
  });
}
const K = {
  name: "SeeText"
}, Z = /* @__PURE__ */ w({
  ...K,
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
    const e = n, t = l, o = y(() => e.color ? "" : e.type), s = y(() => ({
      color: e.color
    })), u = () => {
      t("onClick"), e.mode === "phone" && (uni.makePhoneCall({
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
        class: d(o.value),
        style: f(s.value)
      }, x(e.text), 7)) : v("", !0),
      e.mode === "link" ? (p(), U(T, {
        key: 1,
        text: e.text,
        type: e.type,
        href: e.href
      }, null, 8, ["text", "type", "href"])) : v("", !0),
      e.mode === "phone" ? (p(), m("text", {
        key: 2,
        class: d(o.value),
        style: f(s.value)
      }, x(e.text), 7)) : v("", !0),
      e.mode === "price" ? (p(), m("text", {
        key: 3,
        class: d(o.value),
        style: f(s.value)
      }, x(_(Y)(e.text)), 7)) : v("", !0),
      e.mode === "date" ? (p(), m("text", {
        key: 4,
        class: d(o.value),
        style: f(s.value)
      }, x(_(M)(e.date, e.dateFormat)), 7)) : v("", !0),
      e.mode === "timeago" ? (p(), m("text", {
        key: 5,
        class: d(o.value),
        style: f(s.value)
      }, x(_(R)(e.date)), 7)) : v("", !0)
    ]));
  }
}), ee = /* @__PURE__ */ S(Z, [["__scopeId", "data-v-070997d1"]]), re = {
  SeeButton: V,
  SeeText: ee,
  SeeLink: T
};
export {
  V as SeeButton,
  T as SeeLink,
  ee as SeeText,
  re as default,
  Y as formatCurrency,
  M as formatDate,
  R as formatTimeAgo,
  le as useCurrencyFormat,
  oe as useDateFormat,
  ne as useTimeAgo
};
