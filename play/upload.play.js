import Upload from 'pure-upload';
import Button from 'pure-button';
import ProgressBar from 'pure-progress-bar';

play( Upload, module )
	.name( 'Upload' )
	.component( 'Button', Button )
	.component( 'ProgressBar', ProgressBar )
	.add( 'basic', `
			<Upload multiple show-file-list=true>
				<div class="pure-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</Upload>
		` )
	.add( 'drag', `
		<Upload drag multiple></Upload>
	` )
