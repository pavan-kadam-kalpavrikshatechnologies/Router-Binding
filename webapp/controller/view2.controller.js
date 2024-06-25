sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.kt.demo.viewandbindnext.controller.view2", {
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouteView2").attachMatched(this._onRouteMatched, this);
            },

            _onRouteMatched:function(oEvent) {
                var sArg = oEvent.getParameter("arguments").expID;
                var oData = this.getOwnerComponent().getModel("datamodel").getData().studentdata[sArg];
                var oModel = new sap.ui.model.json.JSONModel(oData);
                this.getView().setModel(oModel,"oExpModel");

            },
            onPressButton : function(){
                var oRouter = this.getOwnerComponent().getRouter();
               oRouter.navTo("RouteView1");
            }
               
        });
    });
