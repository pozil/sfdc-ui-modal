({
	showModal : function(component) {
		const modalContainer = component.find('modalContainer');
		$A.util.removeClass(modalContainer, 'slds-hide');
	},

	hideModal : function(component) {
		const modalContainer = component.find('modalContainer');
		$A.util.addClass(modalContainer, 'slds-hide');
	}
})