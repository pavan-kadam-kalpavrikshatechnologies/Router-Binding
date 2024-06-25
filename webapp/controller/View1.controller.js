sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.kt.demo.viewandbindnext.controller.View1", {
            onInit: function () {
                var oModel = this.getOwnerComponent().getModel("datamodel");
                var oModel1 = this.getOwnerComponent().getModel("datamodel1");
                var oData = Object.assign({}, oModel.getData(), oModel1.getData());
                 var oModel3 = new sap.ui.model.json.JSONModel(oData);
                this.getView().setModel(oModel3, "oModel3");
                console.log(oModel3);
            },
            onPressView : function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
               // oRouter.navTo("RouteView2");
                var sPath = oEvent.getSource().getBindingContextPath().split("/")[2];
                var oRouter=this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2", {
                    expID : sPath
                });
            }
        });
    });
