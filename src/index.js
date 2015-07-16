import cu from 'targetprocess-mashup-helper/lib/customUnits';

const id = 'customunit_last_comment';

const output = (text) => {

    const tmp = document.createElement("DIV");

    tmp.innerHTML = text;

    let plain = tmp.textContent || tmp.innerText || "";

    if (plain.length > 150) {

        plain = plain.substring(0, 150) + "...";

    }

    return plain.replace(/\u00a0/g, " ");
};

cu.add({
    id: id,
    name: 'Last Comment',
    outerClassName: 'tau-board-unit_type_custom-rich-tex',
    alignment: 'base',
    sections: 1,
    template: {
        markup: '<div class="tau-board-unit__value" style="white-space:normal"><%= fn.output(this.data.comment.description) %>',
        customFunctions: {output}
    },
    hideIf: function(data) {
        return !data.comment;
    },
    model: {
        comment: 'Comments.OrderByDescending(CreateDate).Select({Description}).First()'
    },
    sampleData: {
        comment: {
            description: 'Suspendisse consequat nisi et diam euismod, vel pulvinar massa laoreet. Nunc finibus et elit nec ultrices. Suspendisse consectetur tincidunt tortor, venenatis varius dolor.'
        }
    }
});
