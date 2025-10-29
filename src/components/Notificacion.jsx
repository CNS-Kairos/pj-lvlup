import { useNotificacion } from '../context/NotificacionContext';


export default function Notificacion() {
  const { notificacion } = useNotificacion();

  if (!notificacion.visible) return null;

  const claseTipo = notificacion.tipo === 'exito' ? 'notificacion-exito' : 'notificacion-error';
  const icono = notificacion.tipo === 'exito' ? 'fa-solid fa-check-circle' : 'fa-solid fa-triangle-exclamation';

  return (
    <div className={`notificacion-agregado ${claseTipo}`}>
      <i className={icono}></i>
      <span>{notificacion.mensaje}</span>
    </div>
  );
}
