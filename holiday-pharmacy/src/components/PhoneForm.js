import React, {Component} from 'react';

class PhoneForm extends Component {

    // constructor(props) {
    //     super(props)
    // }

    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을  onCreate를 통해 부모 컴포넌트에 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        })

    }
    

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder = "name"
                    value = {this.state.name}
                    onChange = {this.handleChange}
                    name = "name"
                />
                <input
                    placeholder = "phone number"
                    value = {this.state.phone}
                    onChange = {this.handleChange}
                    name = "phone"
                />
                <button type='submit'> 등록</button>

                <div>{this.state.name}</div>
                <div>{this.state.phone}</div>
            </form>
        );
    }


}

export default PhoneForm;