import { defineComponent as _, getCurrentInstance as B, ref as r, computed as R, createElementBlock as x, openBlock as g, normalizeClass as c, normalizeStyle as u, createElementVNode as h, createCommentVNode as z, renderSlot as $, toDisplayString as I, nextTick as C } from "vue";
const D = ["hover-class", "disabled"], H = /* @__PURE__ */ _({
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
  setup(s, { emit: m }) {
    let n = 0;
    const a = B(), e = s;
    n++;
    const v = r(0), y = r(0), p = r(!1), d = r({}), f = "seeButton_" + n;
    let w = 0;
    const k = r([]), S = R(() => e.isRipple ? "none" : e.hoverClass ? e.hoverClass : e.isHollow ? `button-hover-${e.type}-hollow` : `button-hover-${e.type}`), b = (l) => {
      p.value = !1, C(() => T(l));
    }, T = (l) => {
      W().then((t) => {
        if (!(t != null && t.height) || (t.finalWidth = t.height > t.width ? t.height : t.width, !t.finalWidth)) return;
        d.value = t;
        let o, i;
        o = l.changedTouches[0].clientX, i = l.changedTouches[0].clientY, o = l.detail.clientX, i = l.detail.clientY, o = l.touches[0].clientX, i = l.touches[0].clientY, v.value = i - t.top - t.finalWidth / 2, y.value = o - t.left - t.finalWidth / 2, C(() => p.value = !0), k.value.push({
          id: w++,
          x: o - t.left - t.finalWidth / 2,
          y: i - t.top - t.finalWidth / 2,
          size: t.finalWidth
        });
      });
    }, W = () => new Promise((l) => {
      const t = uni.createSelectorQuery().in(a), o = "#" + f;
      t.select(o).boundingClientRect((i) => {
        l(i);
      }).exec();
    });
    return (l, t) => (g(), x("view", {
      id: f,
      style: u({ ...e.customStyle, borderRadius: e.radius + "px" }),
      class: c(["see-button", [e.size]]),
      onClick: t[1] || (t[1] = (o) => b(o))
    }, [
      h("view", {
        id: f,
        style: u({ ...e.customStyle, borderRadius: e.radius + "px" }),
        class: c(["see-button", [e.size]]),
        onTouchstart: t[0] || (t[0] = (o) => b(o))
      }, [
        h("button", {
          style: u({
            ...e.customStyle,
            borderRadius: e.radius + "px",
            background: e.color
          }),
          class: c(["see-botton-class", [
            e.size,
            e.isDisabled && `disabled-${e.type}`,
            e.isHollow ? `hollow-${e.type}` : e.type,
            `border-${e.type}-${e.border ?? 1}`
          ]]),
          "hover-class": S.value,
          disabled: e.isDisabled
        }, [
          h("text", {
            style: u({ color: e.textColor }),
            class: "title"
          }, I(e.title), 5),
          $(l.$slots, "default", {}, void 0, !0)
        ], 14, D),
        e.isRipple ? (g(), x("view", {
          key: 0,
          class: c(["see-button-ripple", { active: p.value }]),
          style: u({
            ...e.rippleStyle,
            top: v.value + "px",
            left: y.value + "px",
            width: d.value.finalWidth + "px",
            height: d.value.finalWidth + "px",
            "background-color": s.rippleColor,
            "--ripple-time": e.rippleTime + "ms",
            "--mask-time": e.maskTime + "ms"
          })
        }, null, 6)) : z("", !0)
      ], 38)
    ], 6));
  }
}), X = (s, m) => {
  const n = s.__vccOpts || s;
  for (const [a, e] of m)
    n[a] = e;
  return n;
}, Y = /* @__PURE__ */ X(H, [["__scopeId", "data-v-2c11f93a"]]), E = {
  SeeButton: Y
};
export {
  Y as SeeButton,
  E as default
};
