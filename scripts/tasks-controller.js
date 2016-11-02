tasksController = function(){
	var taskPage;
	var initialised = false;

	return {
		init:function(page) {
			if(!initialised) {
				taskPage = page;
				$(taskPage).find('[required="required"]').prev('label').append('<span>*</span>').children('span').addclass('required');
				$(taskPage).find('tbody tr:even').addclass('even');

				$(taskPage).find("#btnAddTask").click(function(evt) {
					evt.preventDefault();
					$(taskPage).find('#taskCreation').removeClass('not');
				});

				$(taskPage).find('tbody tr').click(function(evt){
					$(evt.target).closet('td').siblings().andSelf().toggleClass('rowHighlight');
				});

				$(taskPage).find('#tblTasks tbody').on('click', '.deleteRow', function(evt){
					evt.preventDefault();
					$(evt.target).parent('tr').remove();
				});

				$(taskPage).find('#saveTask').click(function(evt){
					evt.preventDefault();
					var task=$('form').toObject();
					$('#taskRow').tmpl(task).appendTo($(taskPage).find('#tblTasks tbody'));
				});

				initialised = true;
			}
		}
	}
}();