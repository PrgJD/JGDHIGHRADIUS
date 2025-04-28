sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
             // var Omodel = this.getView().getModel();
          var Omodel = this.getOwnerComponent().getModel();
          console.log(Omodel);
        //   var data = Omodel.getServiceMetadata();
        //   console.log(data);
        //   this.getView().setModel(Omodel);
          Omodel.read("/AccountManagedBy", {
            success: function (oData) {
                console.log("inside success");
                console.log("Data:", oData);
            },
            error: function (oError) {
                console.error("Error:", oError);
            },
            
        });
        }
    });
});