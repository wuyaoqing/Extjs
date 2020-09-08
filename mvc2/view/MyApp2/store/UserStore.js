Ext.define("MyApp2.store.UserStore", {
    extend: "Ext.data.Store",
    model: "MyApp2.model.UserModel",
    data: [
        { name: "Tom", age: 5, phone: "123456" },
        { name: "Jerry", age: 3, phone: "654321" },
		{ name: "hi", age: 10, phone: "654321" }
    ]
});

