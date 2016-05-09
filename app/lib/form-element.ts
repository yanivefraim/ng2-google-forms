export default class FormElement {
  constructor(
    public question = 'Untitled Question',
    public options = [],
    public type = 'text',
    public required = false) {

    }
}
