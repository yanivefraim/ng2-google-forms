export default class FormElement {
  constructor(
    public title = 'New Item',
    public question = 'Untitled Question',
    public type = 'text',
    public value = '',
    public required = false) {

    }
}
