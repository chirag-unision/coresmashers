import React, { Component } from 'react'

export default class MediaSelector extends Component {

    constructor(props) {
        super(props);
        this.state= {
            mediaSelect: false
        }
    }

    componentDidMount() {
        this.fileInput= document.getElementById('media-upload');
        this.fileInput.addEventListener("change", (e) => {
            let files = e.target.files,
                filesLength = files.length;
                // document.getElementById('img_count').innerText= filesLength+' Images are Selected.';
                document.getElementById('image_view').innerHTML= "";
            for (var i = 0; i < filesLength; i++) {
                var file = files[i];
                var fileReader = new FileReader();
                fileReader.addEventListener("load", function(e) {
                    document.getElementById('image_view').innerHTML += "<span class=\"pip\">" +
                    "<img class=\"imageThumb\" src=\"" + e.target.result + "\"/>" +
                    "</span>";
                });
                fileReader.readAsDataURL(file);
            }
            this.setState({ mediaSelect: true })
        });
    }

    render() {
        return (
            <React.Fragment>
                <div id="image_view"></div>
                <div className="media-box">
                    <input type="file" name="media-upload" id="media-upload" accept="image/*" onChange={this.props.handleMediaChange} multiple />
                    { !this.state.mediaSelect &&
                    <label for="media-upload">
                        <div className="media-select"><i className="fa fa-arrow-up"></i><br/>Upload</div>
                    </label>
                    }
                </div>
            </React.Fragment>
        )
    }
}
