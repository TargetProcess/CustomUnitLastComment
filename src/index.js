import cu from 'targetprocess-mashup-helper/lib/customUnits';

const id = 'customunit_last_comment';

cu.add({
    id: id,
    name: 'Last Comment',
    template: '<div class="tau-board-unit__value"><%= this.data.comment.description %></div>',
    hideIf: function(data) {
        return !data.comment;
    },
    model: {
        comment: 'Comments.OrderByDescending(CreateDate).Select({Description}).First()'
    },
    sampleData: {
        comment: {
            description: 'hello here'
        }
    }
});
