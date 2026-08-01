import '../index.css';

const Footer = () => {
	const footerStyle = {
		color: 'rgb(196, 196, 196)',
		fontStyle: 'italic',
	};

	return (
		<div style={footerStyle}>
			<br />
			<p>
				Note app, Department of Computer Science, University of Helsinki. Task
				done by Prajwal Dhakal ({' '}
				<a
					href="https://www.sillylix.com/"
					target="_blank"
				>
					sillylix
				</a>{' '}
				) 2026
			</p>
		</div>
	);
};

export default Footer;
