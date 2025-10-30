import { render, screen } from '@testing-library/react';
import AdminFooter from '../components/AdminFooter';

describe('AdminFooter', () => {
  test('renderiza correctamente el footer de admin', () => {
    render(<AdminFooter />);

    // Verificar que se renderiza el texto del copyright
    expect(screen.getByText('© Level-Up Gamer 2025')).toBeInTheDocument();
  });

  test('tiene la clase CSS correcta', () => {
    const { container } = render(<AdminFooter />);

    // Verificar que el elemento footer tiene la clase correcta
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('footer-admin');
  });

  test('es un elemento footer válido', () => {
    const { container } = render(<AdminFooter />);

    // Verificar que se renderiza como elemento footer
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer.tagName).toBe('FOOTER');
  });
});