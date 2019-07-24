import React from 'react';

export class CitySearch extends React.Component {
    handleCity() {

    }

    handleCountry() {

    }

    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label for="city">City Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="city" 
                            placeholder="e.g. Berlin"
                            value={this.props.city}
                            onChange={(e) => this.handleCity(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="country">Country</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="country"
                            placeholder="e.g. DE"
                            value={this.props.country}
                            onChange={(e) => this.handleCountry(e)}
                        />
                    </div>
                </form>
                <button type="submit" className="btn btn-primary" onClick={() => {this.handleClick()}}>Search</button>
            </>
        );
    }
}
