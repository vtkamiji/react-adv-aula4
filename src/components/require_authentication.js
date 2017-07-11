import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {

        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            console.log(this.context);
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}

//Os contextos são passados de pai para Filho
//Portanto, quando declaramos o <Router> pai dos componentes
//Os componentes filhos terão acesso ao contexto do Router
//Porém, para que não se abusasse disso, criaram uma dificuldade

//static: cria atributo de classe e não de instância da classe