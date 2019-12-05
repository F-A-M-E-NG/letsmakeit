import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import logo from '../../assets/images/logo/logo.png';
import * as THREE from "three";
import Countdown from "../countdown/countdown";

const OrbitControls = require("three-orbitcontrols");

class MainSlider extends Component {
	componentDidMount() {
		var SEPARATION = 200;
		var AMOUNTX = 30;
		var AMOUNTY = 30;
		var mouseX = 100;
		var mouseY = -550;
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			1,
			4500
		);
		camera.position.z = 1000;
		var renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		this.controls = new OrbitControls(camera, renderer.domElement);
		this.mount.appendChild(renderer.domElement);
		var material = new THREE.SpriteMaterial({
			color: 0x2ebaca
		});
		var particles = [];
		var particle;
		var count = 0;
		var i = 0;

		for (var ix = 0; ix < AMOUNTX; ix++) {
			for (var iy = 0; iy < AMOUNTY; iy++) {
				particle = particles[i++] = new THREE.Sprite(material);
				particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
				scene.add(particle);
			}
		}
		var animate = function() {
			requestAnimationFrame(animate);

			camera.position.x += (mouseX - camera.position.x) * 0.05;
			camera.position.y += (-mouseY - camera.position.y) * 0.05;
			camera.lookAt(scene.position);

			var i = 0;

			for (var ix = 0; ix < AMOUNTX; ix++) {
				for (var iy = 0; iy < AMOUNTY; iy++) {
					particle = particles[i++];
					particle.position.y =
						Math.sin((ix + count) * 0.3) * 50 +
						Math.sin((iy + count) * 0.5) * 50;
					particle.scale.x = particle.scale.y =
						(Math.sin((ix + count) * 0.3) + 1) * 3 +
						(Math.sin((iy + count) * 0.5) + 1) * 3;
				}
			}
			renderer.render(scene, camera);
			count += 0.1;
		};
		animate();
	}
	componentWillUnmount() {
		this.controls.dispose();
	}
	render() {
		const data = [
			{
				title:
					"Brass and books multipurpose co-operative society ",
				btn1: "Invest",
				btn2: "Loans"
			},
			{
				title:
					"Making you wealthy every day!",
				btn1: "Invest",
				btn2: "Loans"
			}
		];
		const Items = data.map((obj, i) => (
			<div className="item" key={i}>
				<Container>
					<Row>
						<Col lg={6} md={6} sm={12} className="col-xs-12">
							<div className="slider-content">
								<h2>
									{obj.title} {}
								</h2>
								<div className="buttons">
									<Link to="/invest" className="btn1">
										{obj.btn1}
									</Link>
									<Link to="/loan" className="btn2">
										{obj.btn2}
									</Link>
								</div>
							</div>
						</Col>
						<Col
							lg={6}
							md={6}
							sm={12}
							className="col-xs-12 hidden-xs hidden-sm"
						>
							<img style={{height:"300px"}} src={logo} alt="Logo"/>
						</Col>
					</Row>
				</Container>
			</div>
		));
		return (
			<div className="slider-area">
				<div
					ref={mount => {
						this.mount = mount;
					}}
				></div>
				<div className="carousel">
					<Slider autoplay duration={5000}>
						{Items}
					</Slider>
				</div>
			</div>
		);
	}
}

export default MainSlider;
