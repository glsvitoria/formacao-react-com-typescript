export function timeForSeconds(time: string) {
  const [horas = 0, minutos = 0, segundos = 0] = time.split(":");

  const hoursInSeconds = Number(horas) * 60 * 60;
  const minutesInSeconds = Number(minutos) * 60;
  return hoursInSeconds + minutesInSeconds + Number(segundos);
}
