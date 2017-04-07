({
	openModal : function(component, event, helper) {
		helper.showModal(component);
	},

	openModalAlert : function(component, event, helper) {
		var params = event.getParam('arguments');
		// Set title
		component.set("v.title", params.title);
		// Add body
		$A.createComponent(
			"aura:text", {'value': params.message},
			function(newText, status, errorMessage){
				if (status === "SUCCESS") {
					var body = component.get("v.body");
					body.push(newText);
					component.set("v.body", body);
				}
			}
		);
		// Add 'ok' button
		$A.createComponent(
			"lightning:button", {
				'label': 'Ok',
				'variant': 'brand',
				'onclick': component.getReference('c.destroyModal')
			},
			function(newButton, status, errorMessage){
				if (status === "SUCCESS") {
					var footer = component.get("v.footer");
					footer.push(newButton);
					component.set("v.footer", footer);
				}
			}
		);
		// Display modal
		helper.showModal(component);
	},

	closeModal : function(component, event, helper) {
		helper.hideModal(component);
	},

	destroyModal : function(component, event, helper) {
		component.destroy();
	}
})