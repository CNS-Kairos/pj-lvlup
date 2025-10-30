import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

// Prueba 1: Footer básico
test('Footer se renderiza correctamente', () => {
  render(<Footer />);

  // Verificar que el texto del copyright esté presente
  expect(screen.getByText('© 2025 Level-Up Gamer. Todos los derechos reservados.')).toBeInTheDocument();

  // Verificar que el texto de redes sociales esté presente
  expect(screen.getByText('Síguenos en nuestras redes sociales:')).toBeInTheDocument();
});

// Prueba 2: Footer tiene enlaces de redes sociales
test('Footer contiene enlaces de redes sociales', () => {
  render(<Footer />);

  // Verificar que existan los iconos de redes sociales usando querySelector
  const facebookIcon = document.querySelector('.fa-facebook');
  const twitterIcon = document.querySelector('.fa-x-twitter');
  const instagramIcon = document.querySelector('.fa-instagram');

  expect(facebookIcon).toBeInTheDocument();
  expect(twitterIcon).toBeInTheDocument();
  expect(instagramIcon).toBeInTheDocument();
});

// Prueba 3: Footer tiene la estructura correcta
test('Footer tiene la estructura HTML correcta', () => {
  const { container } = render(<Footer />);

  // Verificar que tenga un div con clase footer
  const footerDiv = container.querySelector('.footer');
  expect(footerDiv).toBeInTheDocument();

  // Verificar que tenga un elemento footer
  const footerElement = container.querySelector('footer');
  expect(footerElement).toBeInTheDocument();
});