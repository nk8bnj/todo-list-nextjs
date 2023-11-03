exports.id = 693;
exports.ids = [693];
exports.modules = {

/***/ 9620:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 3765:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8747));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 785))

/***/ }),

/***/ 785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5269);
/* harmony import */ var _hooks_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4768);
/* harmony import */ var _services_redux_features_todoListSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8635);
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Header() {
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const dispatch = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const inputValueHandler = (e)=>{
        setInputValue(e.target.value);
    };
    const addTodoButtonHandler = ()=>{
        dispatch((0,_services_redux_features_todoListSlice__WEBPACK_IMPORTED_MODULE_4__/* .addTodoList */ .WE)({
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(),
            name: inputValue,
            tasks: []
        }));
        setInputValue("");
    };
    const enterPressHandler = (e)=>{
        if (e.key === "Enter") {
            addTodoButtonHandler();
            inputRef.current?.blur();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "z-10 bg-red-500 h-16 flex items-center justify-center max-sm:h-24 sticky top-0 opacity-95",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto flex max-sm:flex-col items-center justify-between px-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex space-x-4 max-sm:m-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            className: "text-white hover:text-gray-200",
                            children: "Home"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/about",
                            className: "text-white hover:text-gray-200",
                            children: "About Me"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex space-x-4 max-sm:mb-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            ref: inputRef,
                            type: "text",
                            className: "w-60 border border-gray-300 rounded px-2 py-1 text-black",
                            placeholder: "Todo list title",
                            value: inputValue,
                            onChange: inputValueHandler,
                            onKeyDown: enterPressHandler
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: addTodoButtonHandler,
                            className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded",
                            children: "Add"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 4768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 8635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WE": () => (/* binding */ addTodoList),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_5": () => (/* binding */ deleteTask),
/* harmony export */   "d$": () => (/* binding */ setTodoLists),
/* harmony export */   "gI": () => (/* binding */ addTask),
/* harmony export */   "k9": () => (/* binding */ changeIsDone)
/* harmony export */ });
/* unused harmony export todoList */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const selectedTodo = (id, todoLists)=>{
    return todoLists.filter((todo)=>todo.id === id);
};
const initialState = {
    todoLists: []
};
const todoList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "totoList",
    initialState,
    reducers: {
        addTodoList: (state, action)=>{
            state.todoLists.push({
                id: action.payload.id,
                name: action.payload.name,
                tasks: action.payload.tasks
            });
        },
        setTodoLists (state, action) {
            state.todoLists = action.payload;
        },
        addTask (state, action) {
            const todo = selectedTodo(action.payload.id, state.todoLists);
            todo[0].tasks.push(action.payload.task);
        },
        deleteTask (state, action) {
            const todo = selectedTodo(action.payload.id, state.todoLists);
            todo[0].tasks = todo[0].tasks.filter((task)=>task.id !== action.payload.selectedTaskId);
        },
        changeIsDone (state, action) {
            const todo = selectedTodo(action.payload.id, state.todoLists);
            const task = todo[0].tasks.filter((task)=>task.id === action.payload.selectedTaskId);
            task[0].isDone = !task[0].isDone;
        }
    }
});
const { addTodoList , setTodoLists , addTask , deleteTask , changeIsDone  } = todoList.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoList.reducer);


/***/ }),

/***/ 8747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Providers": () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(668);
// EXTERNAL MODULE: ./src/services/redux/features/todoListSlice.ts
var todoListSlice = __webpack_require__(8635);
;// CONCATENATED MODULE: ./src/services/redux/store.ts


const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        todoListSlice: todoListSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(1560);
;// CONCATENATED MODULE: ./src/services/redux/providers.tsx
/* __next_internal_client_entry_do_not_use__ Providers auto */ 


function Providers({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: children
    });
}


/***/ }),

/***/ 2106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(9077);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/Nikita/Development/Projects/todo-list-nextjs/src/components/Header/Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
;// CONCATENATED MODULE: ./src/services/redux/providers.tsx

const providers_proxy = (0,module_proxy.createProxy)(String.raw`/Users/Nikita/Development/Projects/todo-list-nextjs/src/services/redux/providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: providers_esModule, $$typeof: providers_$$typeof } = providers_proxy;
const providers_default_ = providers_proxy.default;

const e0 = providers_proxy["Providers"];

;// CONCATENATED MODULE: ./src/app/layout.tsx





const metadata = {
    title: "Todo List | Next.js",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "container  mt-4 mx-auto px-4",
                        children: children
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 1764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;