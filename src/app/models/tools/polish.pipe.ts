import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'polish',
})
export class PolishPipe implements PipeTransform {
  transform(clubName: string): unknown {
    console.log("'" + clubName + "'");
    clubName = clubName.includes('<b>') ? clubName.slice(3, -4) : clubName;
    return this._clubNameMap[clubName] || clubName;
  }

  private _clubNameMap: { [key: string]: string } = {
    '  Pogo� 1945 Stasz�w  ': 'Pogoń 1945 Staszów',
    '  Spartakus Daleszyce  ': 'Spartakus Daleszyce',
    '  Sparta Kazimierza Wielka  ': 'Sparta Kazimierza Wielka',
    '  Wierna Ma�ogoszcz  ': 'Wierna Małogoszcz',
    '  Hetman W�oszczowa  ': 'Hetman Włoszczowa',
    '  GKS Rudki  ': 'GKS Rudki',
    '  AKS 1947 Busko Zdr�j  ': 'AKS 1947 Busko Zdrój',
    '  Klimontowianka Klimont�w  ': 'Klimontowianka Klimontów',
    '  �KS �ag�w  ': 'ŁKS Łagów',
    '  Alit O�ar�w  ': 'Alit Ożarów',
    '  Neptun Ko�skie  ': 'Neptun Końskie',
    '  GKS Nowiny (Sitk�wka-Nowiny)  ': 'GKS Nowiny (Sitkówka-Nowiny)',
    '  Arka Paw��w  ': 'Arka Pawłów',
    '  �ysica Bodzentyn  ': 'Łysica Bodzentyn',
    '  Naprz�d J�drzej�w  ': 'Naprzód Jędrzejów',
    '  Granat Skar�ysko-Kamienna  ': 'Granat Skarżysko-Kamienna',
    '  Moravia Morawica  ': 'Moravia Morawica',
    '  Orl�ta Kielce  ': 'Orlęta Kielce',
    '  Wicher Miedziana G�ra  ': 'Wicher Miedziana Góra',
    '  Piast Stopnica  ': 'Piast Stopnica',
    '  Astra Piekosz�w  ': 'Astra Piekoszów',
    '  Star II Starachowice  ': 'Star II Starachowice',
    '  Partyzant Wodzis�aw  ': 'Partyzant Wodzisław',
    '  Partyzant Radoszyce  ': 'Partyzant Radoszyce',
    '  Kamienna Brody  ': 'Kamienna Brody',
    '  Piaskowianka Piaski  ': 'Piaskowianka Piaski',
    '  Orlicz Suchedni�w  ': 'Orlicz Suchedniów',
    '  Stal Kun�w  ': 'Stal Kunów',
    '  Wis�a Sandomierz  ': 'Wisła Sandomierz',
    '  GKS G�rno  ': 'GKS Górno',
    '  Victoria Skalbmierz  ': 'Victoria Skalbmierz',
    '  Nida Pi�cz�w  ': 'Nida Pińczów',
    '  Victoria Mni�w  ': 'Victoria Mniów',
    '  Politechnika �wi�tokrzyska Kielce  ':
      'Politechnika Świętokrzyska Kielce',
    '  KKP Korona Kielce  ': 'KKP Korona Kielce',
    '  GKS Fa�k�w  ': 'GKS Fałków',
    '  Gr�d �mi�sk  ': 'Gród Ćmińsk',
    '  Sok� Rykoszyn  ': 'Sokół Rykoszyn',
    '  Eska Skar�ysko-Kamienna  ': 'Eska Skarżysko-Kamienna',
    '  Moravia II Morawica  ': 'Moravia II Morawica',
    '  KS Smyk�w  ': 'KS Smyków',
    '  GOKiS Mas��w  ': 'GOKiS Masłów',
    '  Nidzianka Bieliny  ': 'Nidzianka Bieliny',
    '  Lechia Strawczyn  ': 'Lechia Strawczyn',
    '  Polonia Bia�ogon (Kielce)  ': 'Polonia Białogon (Kielce)',
    '  Granat Borki  ': 'Granat Borki',
    '  Bucovia Bukowa  ': 'Bucovia Bukowa',
    '  Jawornik Gorzk�w  ': 'Jawornik Gorzków',
    '  Zryw Skroni�w  ': 'Zryw Skroniów',
    '  Nida Sobk�w  ': 'Nida Sobków',
    '  Gr�d Wi�lica  ': 'Gród Wiślica',
    '  Unia S�dzisz�w  ': 'Unia Sędziszów',
    '  Zenit Chmielnik  ': 'Zenit Chmielnik',
    '  LKS Bolmin  ': 'LKS Bolmin',
    '  Nida Oksa  ': 'Nida Oksa',
    '  Wis�a Nowy Korczyn  ': 'Wisła Nowy Korczyn',
    '  Nidzica Dobies�awice  ': 'Nidzica Dobiesławice',
    '  GKS Kluczewsko  ': 'GKS Kluczewsko',
  };
}
