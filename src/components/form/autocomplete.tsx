import React from 'react';
import conclass from '../../utility/conclass';

/**
 * `AutoComplete` is experimental and is not recommended to use it right now.
 */
class AutoComplete extends React.Component<RazorWindProps.Form.AutoComplete, RazorWindStates.Form.AutoComplete> {
  private inputRef: HTMLInputElement;
  private valueRef: HTMLInputElement;

  constructor(props: RazorWindProps.Form.AutoComplete) {
    super(props);

    this.state = {
      highlightIndex: -1,
      matches: [],
      showDropdown: false,
    }
  }

  componentDidMount() {
    this.inputRef.addEventListener('keydown', this.keydownHandler);
  }

  componentWillUnmount() {
    this.inputRef.removeEventListener('keydown', this.keydownHandler);
  }

  keydownHandler = (event: KeyboardEvent) => {
    if(event.key === 'ArrowUp' && this.state.highlightIndex > 0) {
      event.preventDefault();
      this.setState(prev => ({ highlightIndex: prev.highlightIndex - 1 }));
    }
    else if(event.key === 'ArrowDown' && this.state.highlightIndex < this.state.matches.length - 1) {
      event.preventDefault();
      this.setState(prev => ({ highlightIndex: prev.highlightIndex + 1 }));
    }
    else if(event.key === 'Enter') {
      event.preventDefault();
      const value = this.state.matches[this.state.highlightIndex];
      this.onSelect(typeof(value) === 'string' ? value : value.value, typeof(value) === 'string' ? value : value.label);
    }
  }

  searchMatch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    !this.state.showDropdown && this.setState({ showDropdown: true });

    const inputValue = event.target.value;
    const minChar = this.props.minChar ? this.props.minChar : 0;
    if (inputValue.length > minChar) {
      if (Array.isArray(this.props.source)) {
        const matches = (this.props.source as any).filter(
          (val: string | RazorWindProps.Form.AutoCompleteOption) => typeof(val) === 'string' ? val.toLowerCase().includes(inputValue.toLowerCase()) : val.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        this.setState({ matches, highlightIndex: -1 });
      }
      else if(typeof(this.props.source) === 'function') {
        const matches = await this.props.source(inputValue);
        this.setState({ matches, highlightIndex: -1 });
      }
    }
  }

  onSelect = (value: string, label?: string) => {
    this.valueRef.value = value;
    this.inputRef.value = label ? label : value;
    this.setState({ showDropdown: false });
    this.props.onSelect && this.props.onSelect(value);
  }

  render() {
    return (
      <div className="relative">
        <label className="text-gray-600">{this.props.label}</label>
        <input ref={ref=>this.valueRef=ref} type="hidden" name={this.props.name}/>
        <input
          ref={ref => this.inputRef = ref}
          type="text"
          className={conclass('form-text-input', this.state.showDropdown && 'z-20')}
          onChange={this.searchMatch}
          disabled={this.props.disabled}
          readOnly={this.props.readonly}
        />
        <div className={conclass('absolute mt-2 py-2 z-20 flex flex-col w-full h-fit bg-white shadow-lg border border-gray-300 text-gray-700 rounded', (!this.state.showDropdown || this.state.matches.length === 0) && 'hidden')}>
          { this.state.matches
            .map((val, i) => (
              <a
                className={conclass('p-2 hover:bg-gray-200 cursor-pointer', (this.state.highlightIndex === i) && 'bg-gray-200')}
                key={typeof(val) === 'string' ? val : val.label}
                onClick={() => this.onSelect(typeof (val) === 'string' ? val : val.value, typeof(val) === 'string' ? undefined : val.label)}>
                {typeof(val) === 'string' ? val : val.label}
              </a>
            ))
          }
        </div>
        <div
          className={conclass('fixed inset-0 z-10', (!this.state.showDropdown || this.state.matches.length === 0) && 'hidden')}
          onClick={() => this.setState({ showDropdown: false })}
        ></div>
      </div>
    );
  }
}

export default AutoComplete;
