"use strict";
(self.webpackChunkmcq = self.webpackChunkmcq || []).push([
    [694], {
        3876: function(e, s, a) {
            a.r(s), a.d(s, {
                default: function() {
                    return b
                }
            });
            var n = a(1413),
                l = a(8214),
                t = a(5861),
                r = a(885),
                i = a(2791),
                c = a(1609),
                d = a(8859),
                o = a(4373),
                x = a(6856),
                u = a(2419),
                m = a(3589),
                f = a(832),
                h = a(7692),
                p = a(828),
                v = a(6871),
                g = a(575),
                j = a(4270),
                N = a(184);

            function b() {
                document.title = "Profile | Aakhyaan Academy";
                var e = (0, i.useState)(null),
                    s = (0, r.Z)(e, 2),
                    a = s[0],
                    b = s[1],
                    k = (0, v.s0)(),
                    Z = (0, i.useRef)(null),
                    A = (0, i.useRef)(null),
                    P = (0, i.useRef)(null),
                    T = (0, i.useState)(!1),
                    C = (0, r.Z)(T, 2),
                    L = C[0],
                    S = C[1],
                    F = (0, i.useState)("Profile"),
                    I = (0, r.Z)(F, 2),
                    E = I[0],
                    R = I[1],
                    U = (0, i.useState)(null),
                    D = (0, r.Z)(U, 2),
                    B = D[0],
                    K = D[1],
                    O = (0, i.useState)(""),
                    V = (0, r.Z)(O, 2),
                    H = V[0],
                    J = V[1],
                    q = (0, i.useState)(""),
                    z = (0, r.Z)(q, 2),
                    Y = z[0],
                    G = z[1],
                    M = (0, i.useState)({
                        firstName: "",
                        middleName: "",
                        lastName: "",
                        age: "",
                        email: "",
                        phone: "",
                        college: "",
                        address: "",
                        profilePicture: ""
                    }),
                    Q = (0, r.Z)(M, 2),
                    X = Q[0],
                    $ = Q[1],
                    W = (0, i.useState)(X),
                    _ = (0, r.Z)(W, 2),
                    ee = _[0],
                    se = _[1],
                    ae = (0, u.kY)().mutate,
                    ne = (0, u.ZP)("https://api.aakhyaan.org/user/profile", function() {
                        var e = (0, t.Z)((0, l.Z)().mark((function e(s) {
                            return (0, l.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, m.Ai)(s);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(s) {
                            return e.apply(this, arguments)
                        }
                    }(), {
                        revalidateOnFocus: !1,
                        revalidateOnReconnect: !0
                    }),
                    le = ne.data,
                    te = ne.error;
                (0, i.useEffect)((function() {
                    var e, s;
                    "undefined" !== typeof le ? le.success ? ($(null === le || void 0 === le ? void 0 : le.data), K(null === le || void 0 === le || null === (e = le.data) || void 0 === e ? void 0 : e.profilePicture), b(null === le || void 0 === le || null === (s = le.data) || void 0 === s ? void 0 : s.paymentImage)) : k(-1) : te && k("/")
                }), [le, k, X, te]);
                var re = function() {
                        var e = (0, t.Z)((0, l.Z)().mark((function e(s) {
                            return (0, l.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (s.preventDefault(), ee !== X) {
                                            e.next = 5;
                                            break
                                        }
                                        G("You haven't made any changes, please make some changes before submitting."), e.next = 13;
                                        break;
                                    case 5:
                                        return S(!1), G(""), Z.current.classList.remove("animate-moveLeft"), Z.current.classList.add("animate-vanishRight"), setTimeout((function() {
                                            Z.current.classList.add("invisible")
                                        }), 500), e.next = 12, (0, m.s2)("https://api.aakhyaan.org/user/profile", ee);
                                    case 12:
                                        ae("https://api.aakhyaan.org/user/profile");
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(s) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ie = function() {
                        var e = (0, t.Z)((0, l.Z)().mark((function e(s) {
                            var a;
                            return (0, l.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s.preventDefault(), (a = new FormData).append("picture", P.current.files[0]), e.next = 5, (0, m.he)("https://api.aakhyaan.org/user/changepp", a);
                                    case 5:
                                        e.sent, ae("https://api.aakhyaan.org/user/profile");
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(s) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ce = function() {
                        var e, s;
                        L && (S(!1), G(""), null === (e = Z.current) || void 0 === e || e.classList.remove("animate-moveLeft"), null === (s = Z.current) || void 0 === s || s.classList.add("animate-vanishRight"), setTimeout((function() {
                            var e;
                            null === (e = Z.current) || void 0 === e || e.classList.add("invisible")
                        }), 500))
                    },
                    de = function() {
                        var e = (0, t.Z)((0, l.Z)().mark((function e() {
                            var s;
                            return (0, l.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, f.w$)("https://api.aakhyaan.org/user/email/verify");
                                    case 2:
                                        "undefined" !== typeof(s = e.sent) && J(s.message);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return window.addEventListener("click", (function(e) {
                    var s, a;
                    null !== (s = Z.current) && void 0 !== s && s.contains(e.target) || (null !== (a = A.current) && void 0 !== a && a.contains(e.target) || ce())
                })), (0, N.jsxs)("div", {
                    className: "w-full h-full bg-back dark:bg-background",
                    children: [(0, N.jsx)(j.Z, {
                        children: (0, N.jsx)("title", {
                            children: "Profile | Aakhyaan Academy"
                        })
                    }), (0, N.jsx)(c.Z, {
                        page: "profile"
                    }), (0, N.jsx)("div", {
                        className: "w-full h-full flex pt-[60px] md:pt-[80px] dark:bg-background",
                        children: (0, N.jsxs)("div", {
                            className: "relative w-full h-full flex items-center justify-center gap-20",
                            children: [(0, N.jsxs)("div", {
                                className: "flex flex-col w-full h-full dark:bg-background dark:text-mainText",
                                children: [(0, N.jsxs)("div", {
                                    className: "flex flex-col gap-10 p-24 pl-10 pr-10 font-sans tracking-wide w-full dark:bg-background",
                                    children: [(0, N.jsxs)("div", {
                                        className: "flex-col flex md:flex-row items-center gap-10",
                                        children: [(0, N.jsxs)("div", {
                                            onClick: function(e) {
                                                e.preventDefault(), P.current.click()
                                            },
                                            className: "hover:cursor-pointer hover:opacity-60 rounded-sm flex justify-center items-center text-center relative",
                                            children: [(0, N.jsx)("span", {
                                                children: (0, N.jsx)(g.Z, {
                                                    src: B,
                                                    alt: "",
                                                    sx: {
                                                        width: 80,
                                                        height: 80
                                                    }
                                                })
                                            }), (0, N.jsx)("span", {
                                                className: "rounded-full bg-pink-100 absolute bottom-0 right-0 p-1 opacity-90 hover:opacity-40",
                                                children: (0, N.jsx)(p.OKb, {
                                                    color: "black"
                                                })
                                            })]
                                        }), (0, N.jsx)("input", {
                                            onChange: ie,
                                            type: "file",
                                            accept: ".png, .jpg, .jpeg",
                                            name: "",
                                            ref: P,
                                            hidden: !0
                                        }), (0, N.jsxs)("div", {
                                            className: "flex flex-col items-center md:items-start gap-2",
                                            children: [(0, N.jsxs)("div", {
                                                className: "gap-0 flex flex-col items-center md:items-start",
                                                children: [(0, N.jsx)("span", {
                                                    className: "text-lg",
                                                    children: null !== X && void 0 !== X && X.firstName ? X.firstName + " " + X.lastName : "Unknown"
                                                }), (0, N.jsx)("span", {
                                                    className: "italic",
                                                    children: null === X || void 0 === X ? void 0 : X.type
                                                })]
                                            }), (0, N.jsxs)("div", {
                                                className: "flex items-center md:items-start flex-col text-blue-500 text-sm",
                                                children: [(0, N.jsxs)("div", {
                                                    className: "flex flex-col md:flex-row items-center md:gap-2",
                                                    children: [(0, N.jsxs)("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [(0, N.jsx)(x.F8X, {}), (0, N.jsx)("span", {
                                                            children: null !== X && void 0 !== X && X.email ? X.email : "Unknown"
                                                        })]
                                                    }), (0, N.jsx)("div", {
                                                        onClick: de,
                                                        className: "mb-2 md:mb-0 text-red-500 hover:cursor-pointer hover:underline",
                                                        children: null !== X && void 0 !== X && X.isVerified ? "" : "Verify email"
                                                    })]
                                                }), (0, N.jsxs)("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [(0, N.jsx)(o.tkl, {}), (0, N.jsx)("span", {
                                                        children: null !== X && void 0 !== X && X.phone ? X.phone : "Unknown"
                                                    })]
                                                })]
                                            })]
                                        }), (0, N.jsx)("div", {
                                            children: (0, N.jsxs)("button", {
                                                ref: A,
                                                onClick: function(e) {
                                                    e.preventDefault(), L ? (S(!1), Z.current.classList.remove("animate-moveLeft"), Z.current.classList.add("animate-vanishRight"), setTimeout((function() {
                                                        Z.current.classList.add("invisible")
                                                    }), 500)) : (Z.current.classList.remove("invisible"), Z.current.classList.remove("animate-vanishRight"), Z.current.classList.add("animate-moveLeft"), se(X), S(!0))
                                                },
                                                className: "md:ml-20 flex items-center transition duration-200 outline-2 text-primary outline font-sans outline-blue-400 rounded-lg  hover:bg-blue-500 hover:text-white px-3 py-1 text-xl",
                                                children: [(0, N.jsx)("span", {
                                                    children: "Edit"
                                                }), (0, N.jsx)(h.vpV, {})]
                                            })
                                        })]
                                    }), (0, N.jsx)("div", {
                                        className: "text-center text-red-600 md:text-left md:ml-28",
                                        children: H
                                    })]
                                }), (0, N.jsx)("div", {
                                    className: "flex flex-col dark:bg-slate-500 dark:text-white",
                                    children: (0, N.jsxs)("div", {
                                        className: "flex items-center gap-5 border-b-2 font-sans w-full py-2",
                                        children: [(0, N.jsx)("span", {
                                            className: "".concat("Profile" === E ? "text-blue-900 -translate-y-0.5 text-lg" : "text-md", " ml-5 hover:cursor-pointer"),
                                            onClick: function() {
                                                return R("Profile")
                                            },
                                            children: "Profile"
                                        }), (0, N.jsx)("span", {
                                            className: "".concat("Payment" === E ? "text-blue-900 -translate-y-0.5 text-lg" : "text-md ", " hover:cursor-pointer"),
                                            onClick: function() {
                                                return R("Payment")
                                            },
                                            children: "Payment"
                                        })]
                                    })
                                }), (0, N.jsxs)("div", {
                                    className: "p-5 dark:bg-background bg-back dark:text-mainText pt-10",
                                    children: ["Profile" === E ? (0, N.jsx)(w, {
                                        profile: X
                                    }) : null, "Payment" === E ? (0, N.jsx)(y, {
                                        profile: X,
                                        verifyEmail: de,
                                        paymentPicture: a,
                                        setPaymentPicture: b
                                    }) : null]
                                }), (0, N.jsx)(d.Z, {})]
                            }), (0, N.jsxs)("div", {
                                ref: Z,
                                className: "invisible flex flex-col gap-5 p-10 mt-[60px] md:mt-[80px] fixed right-0 rounded-lg w-[350px] bg-footer shadow-lg dark:bg-formBox h-full overflow-y-auto z-50 pb-20 md:pb-0",
                                children: [(0, N.jsx)("div", {
                                    children: (0, N.jsx)("span", {
                                        className: "float-right hover:cursor-pointer hover:translate-y-0.5 hover:translate-x-0.5",
                                        children: (0, N.jsx)(o.QAE, {
                                            size: 30,
                                            color: "white",
                                            onClick: function() {
                                                ce()
                                            }
                                        })
                                    })
                                }), (0, N.jsx)("div", {
                                    className: "text-mainText text-2xl text-center font-semibold font-sans",
                                    children: "Edit Profile"
                                }), (0, N.jsxs)("form", {
                                    onSubmit: re,
                                    className: "flex flex-col",
                                    children: [(0, N.jsxs)("div", {
                                        className: "flex flex-col md:flex-row  md:gap-3",
                                        children: [(0, N.jsxs)("div", {
                                            className: "flex flex-col mb-4",
                                            children: [(0, N.jsx)("label", {
                                                className: "block text-mainText font-sans text-lg mb-2",
                                                htmlFor: "email",
                                                children: "FirstName"
                                            }), (0, N.jsx)("input", {
                                                className: "font-sans shadow appearance-none border focus:outline-blue-600 focus:shadow-none rounded w-full py-2 px-3 text-gray-700 leading-tight",
                                                type: "text",
                                                placeholder: "First Name",
                                                value: ee.firstName,
                                                onChange: function(e) {
                                                    return se((function(s) {
                                                        return (0, n.Z)((0, n.Z)({}, s), {}, {
                                                            firstName: e.target.value
                                                        })
                                                    }))
                                                }
                                            })]
                                        }), (0, N.jsxs)("div", {
                                            className: "flex flex-col mb-4",
                                            children: [(0, N.jsx)("label", {
                                                className: "block text-mainText font-sans text-lg mb-2",
                                                htmlFor: "email",
                                                children: "LastName"
                                            }), (0, N.jsx)("input", {
                                                className: "font-sans shadow appearance-none border focus:outline-blue-600 focus:shadow-none rounded w-full py-2 px-3 text-gray-700 leading-tight",
                                                type: "text",
                                                placeholder: "Last Name",
                                                value: ee.lastName,
                                                onChange: function(e) {
                                                    return se((function(s) {
                                                        return (0, n.Z)((0, n.Z)({}, s), {}, {
                                                            lastName: e.target.value
                                                        })
                                                    }))
                                                }
                                            })]
                                        })]
                                    }), (0, N.jsx)("div", {
                                        className: "mb-4",
                                        children: (0, N.jsxs)("div", {
                                            children: [(0, N.jsx)("label", {
                                                className: "block text-mainText font-sans text-lg mb-2",
                                                htmlFor: "email",
                                                children: "College"
                                            }), (0, N.jsx)("input", {
                                                className: "font-sans shadow appearance-none border focus:outline-blue-600 focus:shadow-none rounded w-full py-2 px-3 text-gray-700 leading-tight",
                                                type: "text",
                                                placeholder: "College",
                                                value: ee.college,
                                                onChange: function(e) {
                                                    return se((function(s) {
                                                        return (0, n.Z)((0, n.Z)({}, s), {}, {
                                                            college: e.target.value
                                                        })
                                                    }))
                                                }
                                            })]
                                        })
                                    }), (0, N.jsx)("div", {
                                        className: "mb-4",
                                        children: (0, N.jsxs)("div", {
                                            children: [(0, N.jsx)("label", {
                                                className: "block text-mainText font-sans text-lg mb-2",
                                                htmlFor: "email",
                                                children: "Age"
                                            }), (0, N.jsx)("input", {
                                                className: "font-sans shadow appearance-none border focus:outline-blue-600 focus:shadow-none rounded w-full py-2 px-3 text-gray-700 leading-tight",
                                                type: "text",
                                                placeholder: "Age",
                                                value: ee.age,
                                                onChange: function(e) {
                                                    return se((function(s) {
                                                        return (0, n.Z)((0, n.Z)({}, s), {}, {
                                                            age: Number(e.target.value)
                                                        })
                                                    }))
                                                }
                                            })]
                                        })
                                    }), (0, N.jsx)("div", {
                                        className: "mb-4",
                                        children: (0, N.jsxs)("div", {
                                            children: [(0, N.jsx)("label", {
                                                className: "block text-mainText font-sans text-lg mb-2",
                                                htmlFor: "email",
                                                children: "Address"
                                            }), (0, N.jsx)("input", {
                                                className: "font-sans shadow appearance-none border rounded focus:outline-blue-600 focus:shadow-none w-full py-2 px-3 text-gray-700 leading-tight",
                                                type: "text",
                                                placeholder: "Address",
                                                value: ee.address,
                                                onChange: function(e) {
                                                    return se((function(s) {
                                                        return (0, n.Z)((0, n.Z)({}, s), {}, {
                                                            address: e.target.value
                                                        })
                                                    }))
                                                }
                                            })]
                                        })
                                    }), (0, N.jsx)("div", {
                                        className: "mb-6",
                                        children: (0, N.jsxs)("div", {
                                            children: [(0, N.jsx)("label", {
                                                className: "block text-mainText font-sans text-lg mb-2",
                                                htmlFor: "email",
                                                children: "Phone"
                                            }), (0, N.jsx)("input", {
                                                className: "mb-3 font-sans shadow appearance-none border rounded focus:outline-blue-600 focus:shadow-none w-full py-2 px-3 text-gray-700 leading-tight",
                                                type: "text",
                                                placeholder: "Phone No",
                                                value: ee.phone,
                                                onChange: function(e) {
                                                    return se((function(s) {
                                                        return (0, n.Z)((0, n.Z)({}, s), {}, {
                                                            phone: e.target.value
                                                        })
                                                    }))
                                                }
                                            }), (0, N.jsx)("div", {
                                                className: "text-center text-red-300",
                                                children: Y
                                            })]
                                        })
                                    }), (0, N.jsx)("div", {
                                        className: "mb-24",
                                        children: (0, N.jsx)("button", {
                                            class: "font-sans float-right text-lg hover:translate-y-0.5 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                                            type: "submit",
                                            children: "Submit"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
            var w = function(e) {
                    var s = e.profile;
                    return (0, N.jsxs)("div", {
                        className: "grid md:grid-cols-2 gap-20 font-sans dark:bg-background w-full min-h-[500px]",
                        children: [(0, N.jsxs)("div", {
                            className: "flex flex-col gap-5",
                            children: [(0, N.jsx)("div", {
                                className: "border-b-2 text-xl font-medium",
                                children: "Personal Information"
                            }), (0, N.jsxs)("div", {
                                className: "flex flex-col gap-5",
                                children: [(0, N.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, N.jsx)("span", {
                                        className: "text-lg text-faintText",
                                        children: "Age"
                                    }), (0, N.jsx)("span", {
                                        className: "font-light ",
                                        children: null !== s && void 0 !== s && s.age ? s.age : "Unknown"
                                    })]
                                }), (0, N.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, N.jsx)("span", {
                                        className: "text-lg text-faintText",
                                        children: "College"
                                    }), (0, N.jsx)("span", {
                                        className: "font-light ",
                                        children: null !== s && void 0 !== s && s.college ? s.college : "Unknown"
                                    })]
                                })]
                            })]
                        }), (0, N.jsxs)("div", {
                            className: "flex flex-col gap-5",
                            children: [(0, N.jsx)("div", {
                                className: "border-b-2 text-xl font-medium",
                                children: "Location"
                            }), (0, N.jsxs)("div", {
                                className: "flex flex-col gap-5",
                                children: [(0, N.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, N.jsx)("span", {
                                        className: "text-lg text-faintText",
                                        children: "Country"
                                    }), (0, N.jsx)("span", {
                                        className: "font-light ",
                                        children: "Nepal"
                                    })]
                                }), (0, N.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, N.jsx)("span", {
                                        className: "text-lg text-faintText",
                                        children: "Address"
                                    }), (0, N.jsx)("span", {
                                        className: "font-light ",
                                        children: null !== s && void 0 !== s && s.address ? s.address : "Unknown"
                                    })]
                                })]
                            })]
                        }), (0, N.jsxs)("div", {
                            className: "flex flex-col gap-5",
                            children: [(0, N.jsx)("div", {
                                className: "border-b-2 text-xl font-medium",
                                children: "Contact Information"
                            }), (0, N.jsxs)("div", {
                                className: "flex flex-col gap-5",
                                children: [(0, N.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, N.jsx)("span", {
                                        className: "text-lg text-faintText",
                                        children: "Phone"
                                    }), (0, N.jsx)("span", {
                                        className: "font-light ",
                                        children: null !== s && void 0 !== s && s.phone ? s.phone : "Unknown"
                                    })]
                                }), (0, N.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, N.jsx)("span", {
                                        className: "text-lg text-faintText",
                                        children: "Email"
                                    }), (0, N.jsx)("span", {
                                        className: "font-light ",
                                        children: null !== s && void 0 !== s && s.email ? s.email : "Unknown"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                y = function(e) {
                    var s = e.profile,
                        a = e.paymentPicture,
                        n = (e.setPaymentPicture, e.verifyEmail),
                        r = (0, i.useRef)(null),
                        c = function() {
                            var e = (0, t.Z)((0, l.Z)().mark((function e(s) {
                                var a;
                                return (0, l.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s.preventDefault(), (a = new FormData).append("picture", r.current.files[0]), e.next = 5, (0, m.he)("https://api.aakhyaan.org/user/changepayment", a);
                                        case 5:
                                            (0, u.JG)("https://api.aakhyaan.org/user/profile");
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(s) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, N.jsx)("div", {
                        className: "font-sans bg-back dark:bg-secondBackground min-h-[500px]",
                        children: (0, N.jsxs)("div", {
                            className: "flex gap-8 flex-col lg:flex-row md:gap-24",
                            children: [(0, N.jsx)("div", {
                                className: "mb-2 md:mb-0",
                                children: null !== s && void 0 !== s && s.isVerified ? (0, N.jsxs)(N.Fragment, {
                                    children: [(0, N.jsx)("div", {
                                        className: "mb-5",
                                        children: (0, N.jsx)("img", {
                                            className: "w-[500px]",
                                            src: a,
                                            alt: ""
                                        })
                                    }), (0, N.jsx)("input", {
                                        onChange: c,
                                        type: "file",
                                        accept: ".png, .jpg, .jpeg",
                                        name: "",
                                        ref: r
                                    }), (0, N.jsx)("span", {
                                            className: "text-xl block pt-2",
                                            children: "Upload the payment screenshot here."
                                        })]
                                }) : (0, N.jsx)("div", {
                                    onClick: n,
                                    className: "text-red-500 hover:cursor-pointer hover:underline",
                                    children: "Verify email"
                                })
                            }), (0, N.jsxs)("div", {
                                className: "flex flex-col gap-8",
                                children: [(0, N.jsxs)("div", {
                                    children: [(0, N.jsx)("div", {
                                        className: "mb-2",
                                        children: (0, N.jsx)("img", {
                                            className: "w-8",
                                            src: "/esewa.png"
                                        })
                                    }), (0, N.jsxs)("div", {
                                        className: "flex gap-8 flex-col lg:flex-row",
                                        children: [(0, N.jsxs)("div", {
                                            children: [(0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "Name:"
                                                }), (0, N.jsx)("span", {
                                                    children: "RAJAN BABU PANTA"
                                                })]
                                            }), (0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "EsewaId:"
                                                }), (0, N.jsx)("span", {
                                                    children: "9840544740"
                                                })]
                                            })]
                                        }), (0, N.jsxs)("div", {
                                            children: [(0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "Name:"
                                                }), (0, N.jsx)("span", {
                                                    children: "ANISH SAPKOTA"
                                                })]
                                            }), (0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "EsewaId:"
                                                }), (0, N.jsx)("span", {
                                                    children: "9865359485"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, N.jsxs)("div", {
                                    children: [(0, N.jsx)("div", {
                                        className: "mb-2",
                                        children: (0, N.jsx)("img", {
                                            className: "w-8",
                                            src: "/khalti.png"
                                        })
                                    }), (0, N.jsxs)("div", {
                                        className: "flex gap-8 flex-col lg:flex-row",
                                        children: [(0, N.jsxs)("div", {
                                            children: [(0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "Name:"
                                                }), (0, N.jsx)("span", {
                                                    children: "RAJAN BABU PANTA"
                                                })]
                                            }), (0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "KhaltiId:"
                                                }), (0, N.jsx)("span", {
                                                    children: "9840544740"
                                                })]
                                            })]
                                        }), (0, N.jsxs)("div", {
                                            children: [(0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "Name:"
                                                }), (0, N.jsx)("span", {
                                                    children: "ANISH SAPKOTA"
                                                })]
                                            }), (0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "KhaltiId:"
                                                }), (0, N.jsx)("span", {
                                                    children: "9865359485"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, N.jsxs)("div", {
                                    children: [(0, N.jsx)("div", {
                                        className: "mb-2",
                                        children: (0, N.jsx)("img", {
                                            className: "w-8",
                                            src: "/imepay.png"
                                        })
                                    }), (0, N.jsx)("div", {
                                        className: "flex gap-8 flex-col lg:flex-row",
                                        children: (0, N.jsxs)("div", {
                                            children: [(0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "Name:"
                                                }), (0, N.jsx)("span", {
                                                    children: "ANISH SAPKOTA"
                                                })]
                                            }), (0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "IMEPayId:"
                                                }), (0, N.jsx)("span", {
                                                    children: "9865359485"
                                                })]
                                            })]
                                        })
                                    })]
                                }), (0, N.jsxs)("div", {
                                    children: [(0, N.jsx)("div", {
                                        className: "mb-2",
                                        children: (0, N.jsx)("img", {
                                            width: "400",
                                            src: "https://news-api.aakhyaan.org/wp-content/uploads/2022/09/photo_6129458681683750959_y-e1663128084714.jpg"
                                        })
                                    }), (0, N.jsx)("div", {
                                        className: "flex gap-8 flex-col lg:flex-row",
                                        children: (0, N.jsxs)("div", {
                                            children: [(0, N.jsxs)("span", {
                                                className: "gap-2 flex",
                                                children: [(0, N.jsx)("span", {
                                                    children: "Name:"
                                                }), (0, N.jsx)("span", {
                                                    children: "ANISH SAPKOTA"
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                }
        }
    }
]);
//# sourceMappingURL=694.2640c277.chunk.js.map