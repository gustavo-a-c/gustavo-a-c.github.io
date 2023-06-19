//07/06/2023 - Gustavo Albuquerque - NeoSolar Energia - Sistema de Recomendação de Kits Híbridos V0.2

function processamento() {
    // colar aqui o array resultado do montagem_kits_teste.js
    lista_bidimensional = [['KIT', 'Tipo', 'Inversor', 'Painel', 'S', 'P', 'Bateria', 'S', 'P', 'VmpInversor', 'Vmpptmin', 'Vmpptmax', 'VmpmaxInversor', 'Vdcmax', 'VdcmaxInversor', 'Idcmax', 'ImpInversor', 'Iccmac', 'IscInversor', 'Pot', 'PotmaxInversor', 'TensãoBatInversor', 'GeraçãoFVDiária', 'EnergiaDispnívelDiária', 'CorrenteMáximaCarga', 'CorrenteMáximaCargaCalculada', 'CorrenteMáx.Descarga', '%CorrenteMax.DescargaAdotado', '%CorrenteMax.Descarga', 'DODAdotado', 'DOD', 'AutonomiaAdotada', 'Autonomia', 'HSPAdotado', 'HSP', 'RendimentoAdotado', 'Rendimento', 'TemperaturaMáximaAdotada', 'TemperaturaMínimaAdotada', 'Temp.Max.', 'Temp.Min.', 'TensãoSaídaInversor', 'CapacidadeBanco', 'Pot(W)', 'Voc', 'Vmp', 'Isc', 'Imp', 'T-Voc', 'T-Pot', 'T-Isca', 'Vocnominal', 'Vmpnominal', 'Iscnominal', 'Impnominal', 'Capacidade', 'Tensão'], [1, 'NB', 'UP2000-HM6021', 'LuxenLNVU-550M', 2, 1, 'Moura220Ah', 2, 1, 60, 71.5, 89.8, 200, 106.3, 250, 13.3, 20, 14.2, 22, 1100, 2000, 24, 4125, 1056, 60, 45.8, 44, 0.2, 9, 0.6, 88, 3, 99, 5, 5, 0.75, 0.75, 75, 5, 69, -5, 110, 220, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 100.6, 84.6, 13.9, 13, 220, 12, 'Chumbo'], [2, 'NB', 'UP2000-HM6021', 'LuxenLNVU-550M', 4, 1, 'Moura220Ah', 2, 2, 60, 142.9, 179.6, 200, 212.6, 250, 13.3, 20, 14.2, 22, 2200, 2000, 24, 8250, 2112, 60, 91.7, 88, 0.2, 10, 0.6, 89, 3, 100, 5, 6, 0.75, 1.75, 75, 5, 69, -5, 110, 440, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 13.9, 13, 220, 12, 'Chumbo'], [3, 'H', 'UP2000-HM6021', 'LuxenLNVU-550M', 2, 1, 'Moura220Ah', 2, 3, 60, 71.5, 89.8, 200, 106.3, 250, 13.3, 20, 14.2, 22, 1100, 2000, 24, 3300, 3168, 60, 45.8, 132, 0.2, 9, 0.6, 88, 3, 99, 4, 5, 0.75, 0.75, 75, 5, 69, -5, 110, 660, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 100.6, 84.6, 13.9, 13, 220, 12, 'Chumbo'], [4, 'H', 'UP2000-HM6021', 'LuxenLNVU-550M', 4, 1, 'Moura220Ah', 2, 6, 60, 142.9, 179.6, 200, 212.6, 250, 13.3, 20, 14.2, 22, 2200, 2000, 24, 6600, 6336, 60, 91.7, 264, 0.2, 10, 0.6, 89, 3, 100, 4, 6, 0.75, 1.75, 75, 5, 69, -5, 110, 1320, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 13.9, 13, 220, 12, 'Chumbo'], [5, 'NB', 'UP3000-HM8041', 'LuxenLNVU-550M', 4, 1, 'Moura220Ah', 4, 2, 60, 142.9, 179.6, 200, 212.6, 250, 13.3, 30, 14.2, 30, 2200, 4000, 48, 8250, 4224, 80, 45.8, 88, 0.2, 11, 0.6, 90, 3, 101, 5, 7, 0.75, 2.75, 75, 5, 69, -5, 110, 440, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 13.9, 13, 220, 12, 'Chumbo'], [6, 'NB', 'UP3000-HM8041', 'LuxenLNVU-550M', 4, 2, 'Moura220Ah', 4, 2, 60, 142.9, 179.6, 200, 212.6, 250, 26.7, 30, 28.5, 30, 4400, 4000, 48, 16500, 4224, 80, 91.7, 88, 0.2, 11, 0.6, 90, 3, 101, 5, 7, 0.75, 2.75, 75, 5, 69, -5, 110, 440, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 27.8, 26, 220, 12, 'Chumbo'], [7, 'NB', 'UP3000-HM8041', 'LuxenLNVU-550M', 4, 1, 'Unicoba100Ah3U', 1, 1, 60, 142.9, 179.6, 200, 212.6, 250, 13.3, 30, 14.2, 30, 2200, 4000, 48, 8250, 2160, 80, 45.8, 50, 0.5, 12, 0.9, 91, 2, 102, 5, 8, 0.75, 3.75, 75, 5, 69, -5, 110, 100, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 13.9, 13, 100, 48, 'Litio'], [8, 'NB', 'UP3000-HM8041', 'LuxenLNVU-550M', 4, 2, 'Unicoba100Ah3U', 1, 2, 60, 142.9, 179.6, 200, 212.6, 250, 26.7, 30, 28.5, 30, 4400, 4000, 48, 16500, 4320, 80, 91.7, 100, 0.5, 15, 0.9, 94, 2, 105, 5, 11, 0.75, 6.75, 75, 5, 69, -5, 110, 200, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 27.8, 26, 100, 48, 'Litio'], [9, 'NB', 'UP3000-HM8041', 'LuxenLNVU-550M', 4, 2, 'Unicoba100Ah3U', 1, 3, 60, 142.9, 179.6, 200, 212.6, 250, 26.7, 30, 28.5, 30, 4400, 4000, 48, 16500, 6480, 80, 91.7, 150, 0.5, 16, 0.9, 95, 2, 106, 5, 12, 0.75, 7.75, 75, 5, 69, -5, 110, 300, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 27.8, 26, 100, 48, 'Litio'], [10, 'H', 'UP3000-HM8041', 'LuxenLNVU-550M', 4, 1, 'Moura220Ah', 4, 3, 60, 142.9, 179.6, 200, 212.6, 250, 13.3, 30, 14.2, 30, 2200, 4000, 48, 6600, 6336, 80, 45.8, 132, 0.2, 11, 0.6, 90, 3, 101, 4, 7, 0.75, 2.75, 75, 5, 69, -5, 110, 660, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 13.9, 13, 220, 12, 'Chumbo'], [11, 'H', 'UP3000-HM8041', 'LuxenLNVU-550M', 4, 2, 'Moura220Ah', 4, 6, 60, 142.9, 179.6, 200, 212.6, 250, 26.7, 30, 28.5, 30, 4400, 4000, 48, 13200, 12672, 80, 91.7, 264, 0.2, 11, 0.6, 90, 3, 101, 4, 7, 0.75, 2.75, 75, 5, 69, -5, 110, 1320, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 27.8, 26, 220, 12, 'Chumbo'], [12, 'H', 'UP3000-HM8041', 'LuxenLNVU-550M', 4, 1, 'Unicoba100Ah3U', 1, 3, 60, 142.9, 179.6, 200, 212.6, 250, 13.3, 30, 14.2, 30, 2200, 4000, 48, 6600, 6480, 80, 45.8, 150, 0.5, 12, 0.9, 91, 2, 102, 4, 8, 0.75, 3.75, 75, 5, 69, -5, 110, 300, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 13.9, 13, 100, 48, 'Litio'], [13, 'H', 'UP3000-HM8041', 'LuxenLNVU-550M', 4, 2, 'Unicoba100Ah3U', 1, 6, 60, 142.9, 179.6, 200, 212.6, 250, 26.7, 30, 28.5, 30, 4400, 4000, 48, 13200, 12960, 80, 91.7, 300, 0.5, 15, 0.9, 94, 2, 105, 4, 11, 0.75, 6.75, 75, 5, 69, -5, 110, 600, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 27.8, 26, 100, 48, 'Litio'], [14, 'H', 'UP3000-HM8041', 'LuxenLNVU-550M', 4, 2, 'Unicoba100Ah3U', 1, 7, 60, 142.9, 179.6, 200, 212.6, 250, 26.7, 30, 28.5, 30, 4400, 4000, 48, 13200, 15120, 80, 91.7, 350, 0.5, 16, 0.9, 95, 2, 106, 4, 12, 0.75, 7.75, 75, 5, 69, -5, 110, 700, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 27.8, 26, 100, 48, 'Litio'], [15, 'NB', 'UP3000-HM5042', 'LuxenLNVU-550M', 4, 1, 'Moura220Ah', 4, 1, 80, 142.9, 179.6, 350, 212.6, 450, 13.3, 20, 14.2, 20, 2200, 4000, 48, 8250, 2112, 50, 45.8, 44, 0.2, 16, 0.6, 95, 3, 106, 5, 12, 0.75, 7.75, 75, 5, 69, -5, 220, 220, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 13.9, 13, 220, 12, 'Chumbo'], [16, 'NB', 'UP3000-HM5042', 'LuxenLNVU-550M', 7, 1, 'Moura220Ah', 4, 2, 80, 250.1, 314.3, 350, 372, 450, 13.3, 20, 14.2, 20, 3850, 4000, 48, 14437.5, 4224, 50, 80.2, 88, 0.2, 16, 0.6, 95, 3, 106, 5, 12, 0.75, 7.75, 75, 5, 69, -5, 220, 440, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 352.2, 296, 13.9, 13, 220, 12, 'Chumbo'], [17, 'NB', 'UP3000-HM5042', 'LuxenLNVU-550M', 4, 1, 'Unicoba100Ah3U', 1, 1, 80, 142.9, 179.6, 350, 212.6, 450, 13.3, 20, 14.2, 20, 2200, 4000, 48, 8250, 2160, 50, 45.8, 50, 0.5, 16, 0.9, 95, 2, 106, 5, 12, 0.75, 7.75, 75, 5, 69, -5, 220, 100, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 13.9, 13, 100, 48, 'Litio'], [18, 'NB', 'UP3000-HM5042', 'LuxenLNVU-550M', 7, 1, 'Unicoba100Ah3U', 1, 2, 80, 250.1, 314.3, 350, 372, 450, 13.3, 20, 14.2, 20, 3850, 4000, 48, 14437.5, 4320, 50, 80.2, 100, 0.5, 16, 0.9, 95, 2, 106, 5, 12, 0.75, 7.75, 75, 5, 69, -5, 220, 200, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 352.2, 296, 13.9, 13, 100, 48, 'Litio'], [19, 'NB', 'UP3000-HM5042', 'LuxenLNVU-550M', 7, 1, 'Unicoba100Ah3U', 1, 3, 80, 250.1, 314.3, 350, 372, 450, 13.3, 20, 14.2, 20, 3850, 4000, 48, 14437.5, 6480, 50, 80.2, 150, 0.5, 16, 0.9, 95, 2, 106, 5, 12, 0.75, 7.75, 75, 5, 69, -5, 220, 300, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 352.2, 296, 13.9, 13, 100, 48, 'Litio'], [20, 'H', 'UP3000-HM5042', 'LuxenLNVU-550M', 4, 1, 'Moura220Ah', 4, 3, 80, 142.9, 179.6, 350, 212.6, 450, 13.3, 20, 14.2, 20, 2200, 4000, 48, 6600, 6336, 50, 45.8, 132, 0.2, 16, 0.6, 95, 3, 106, 4, 12, 0.75, 7.75, 75, 5, 69, -5, 220, 660, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 13.9, 13, 220, 12, 'Chumbo'], [21, 'H', 'UP3000-HM5042', 'LuxenLNVU-550M', 7, 1, 'Moura220Ah', 4, 5, 80, 250.1, 314.3, 350, 372, 450, 13.3, 20, 14.2, 20, 3850, 4000, 48, 11550, 10560, 50, 80.2, 220, 0.2, 16, 0.6, 95, 3, 106, 4, 12, 0.75, 7.75, 75, 5, 69, -5, 220, 1100, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 352.2, 296, 13.9, 13, 220, 12, 'Chumbo'], [22, 'H', 'UP3000-HM5042', 'LuxenLNVU-550M', 4, 1, 'Unicoba100Ah3U', 1, 3, 80, 142.9, 179.6, 350, 212.6, 450, 13.3, 20, 14.2, 20, 2200, 4000, 48, 6600, 6480, 50, 45.8, 150, 0.5, 16, 0.9, 95, 2, 106, 4, 12, 0.75, 7.75, 75, 5, 69, -5, 220, 300, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 201.3, 169.1, 13.9, 13, 100, 48, 'Litio'], [23, 'H', 'UP3000-HM5042', 'LuxenLNVU-550M', 7, 1, 'Unicoba100Ah3U', 1, 5, 80, 250.1, 314.3, 350, 372, 450, 13.3, 20, 14.2, 20, 3850, 4000, 48, 11550, 10800, 50, 80.2, 250, 0.5, 16, 0.9, 95, 2, 106, 4, 12, 0.75, 7.75, 75, 5, 69, -5, 220, 500, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 352.2, 296, 13.9, 13, 100, 48, 'Litio'], [24, 'H', 'UP3000-HM5042', 'LuxenLNVU-550M', 7, 1, 'Unicoba100Ah3U', 1, 6, 80, 250.1, 314.3, 350, 372, 450, 13.3, 20, 14.2, 20, 3850, 4000, 48, 11550, 12960, 50, 80.2, 300, 0.5, 16, 0.9, 95, 2, 106, 4, 12, 0.75, 7.75, 75, 5, 69, -5, 220, 600, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 352.2, 296, 13.9, 13, 100, 48, 'Litio'], [25, 'NB', 'UP5000-HM8042', 'LuxenLNVU-550M', 5, 1, 'Moura220Ah', 4, 2, 120, 178.6, 224.5, 400, 265.7, 500, 13.3, 20, 14.2, 21, 2750, 4000, 48, 10312.5, 4224, 80, 57.3, 88, 0.2, 18, 0.6, 97, 3, 108, 5, 14, 0.75, 9.75, 75, 5, 69, -5, 220, 440, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 251.6, 211.4, 13.9, 13, 220, 12, 'Chumbo'], [26, 'NB', 'UP5000-HM8042', 'LuxenLNVU-550M', 7, 1, 'Moura220Ah', 4, 2, 120, 250.1, 314.3, 400, 372, 500, 13.3, 20, 14.2, 21, 3850, 4000, 48, 14437.5, 4224, 80, 80.2, 88, 0.2, 18, 0.6, 97, 3, 108, 5, 14, 0.75, 9.75, 75, 5, 69, -5, 220, 440, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 352.2, 296, 13.9, 13, 220, 12, 'Chumbo'], [27, 'NB', 'UP5000-HM8042', 'LuxenLNVU-550M', 5, 1, 'Unicoba100Ah3U', 1, 1, 120, 178.6, 224.5, 400, 265.7, 500, 13.3, 20, 14.2, 21, 2750, 4000, 48, 10312.5, 2160, 80, 57.3, 50, 0.5, 18, 0.9, 97, 2, 108, 5, 14, 0.75, 9.75, 75, 5, 69, -5, 220, 100, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 251.6, 211.4, 13.9, 13, 100, 48, 'Litio'], [28, 'NB', 'UP5000-HM8042', 'LuxenLNVU-550M', 7, 1, 'Unicoba100Ah3U', 1, 2, 120, 250.1, 314.3, 400, 372, 500, 13.3, 20, 14.2, 21, 3850, 4000, 48, 14437.5, 4320, 80, 80.2, 100, 0.5, 18, 0.9, 97, 2, 108, 5, 14, 0.75, 9.75, 75, 5, 69, -5, 220, 200, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 352.2, 296, 13.9, 13, 100, 48, 'Litio'], [29, 'NB', 'UP5000-HM8042', 'LuxenLNVU-550M', 7, 1, 'Unicoba100Ah3U', 1, 3, 120, 250.1, 314.3, 400, 372, 500, 13.3, 20, 14.2, 21, 3850, 4000, 48, 14437.5, 6480, 80, 80.2, 150, 0.5, 18, 0.9, 97, 2, 108, 5, 14, 0.75, 9.75, 75, 5, 69, -5, 220, 300, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 352.2, 296, 13.9, 13, 100, 48, 'Litio'], [30, 'H', 'UP5000-HM8042', 'LuxenLNVU-550M', 5, 1, 'Moura220Ah', 4, 3, 120, 178.6, 224.5, 400, 265.7, 500, 13.3, 20, 14.2, 21, 2750, 4000, 48, 8250, 6336, 80, 57.3, 132, 0.2, 18, 0.6, 97, 3, 108, 4, 14, 0.75, 9.75, 75, 5, 69, -5, 220, 660, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 251.6, 211.4, 13.9, 13, 220, 12, 'Chumbo'], [31, 'H', 'UP5000-HM8042', 'LuxenLNVU-550M', 7, 1, 'Moura220Ah', 4, 5, 120, 250.1, 314.3, 400, 372, 500, 13.3, 20, 14.2, 21, 3850, 4000, 48, 11550, 10560, 80, 80.2, 220, 0.2, 18, 0.6, 97, 3, 108, 4, 14, 0.75, 9.75, 75, 5, 69, -5, 220, 1100, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 352.2, 296, 13.9, 13, 220, 12, 'Chumbo'], [32, 'H', 'UP5000-HM8042', 'LuxenLNVU-550M', 5, 1, 'Unicoba100Ah3U', 1, 3, 120, 178.6, 224.5, 400, 265.7, 500, 13.3, 20, 14.2, 21, 2750, 4000, 48, 8250, 6480, 80, 57.3, 150, 0.5, 18, 0.9, 97, 2, 108, 4, 14, 0.75, 9.75, 75, 5, 69, -5, 220, 300, 550, 50.3, 42.3, 13.9, 13, -0.0028, -0.0036, 0.0005, 251.6, 211.4, 13.9, 13, 100, 48, 'Litio'], [352.2, 296, 13.9, 13, 100, 48, 'Litio']]
    // FIM DO ARRAY: ARRAY GERADO NA MONTAGEM_KITS_TESTE.JS      

    const fator_energia = 3000

    // área que lê o html e define os limites de potência e tensão

    var pot_sistema = parseInt(document.getElementById('result_energia_consumida').innerHTML.slice(0, -1));
    var result_pot_total = parseInt(document.getElementById('result_pot_total').innerHTML.slice(0, -1))
    limite1 = pot_sistema
    limite2 = limite1 + fator_energia

    var tensao_saida = document.getElementById('tensao_saida').value
    if (tensao_saida == '110V') {
        tensao_saida = 110
    }
    else {
        tensao_saida = 220
    }

    // área da análise da qtd. energia
    var lista_analise1 = []
    for (let i = 0; i < lista_bidimensional.length; i++) {
        if ((lista_bidimensional[i][23] >= limite1 && lista_bidimensional[i][23] <= limite2)) {
            lista_analise1.push(lista_bidimensional[i])
        }
    }


    // área de análise da tensao
    var lista_analise2 = []
    for (let i = 0; i < lista_analise1.length; i++) {
        if (parseInt(lista_analise1[i][41]) == tensao_saida) {
            lista_analise2.push(lista_analise1[i])
        }
    }

    // área de análise da potencia
    var lista_analise3 = []
    for (let i = 0; i < lista_analise2.length; i++) {
        pot_saida_inversor = parseInt(lista_analise2[i][2][2] + lista_analise2[i][2][3] + lista_analise2[i][2][4] + lista_analise2[i][2][5])
        if (pot_saida_inversor >= result_pot_total) {
            lista_analise3.push(lista_analise2[i])
        }
    }
    console.log(lista_analise1)
    console.log(lista_analise2)
    console.log(lista_analise3)

    var codigo_html_resultado = ''

    const codigo_imagem_kit = '' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">' +
        '<rect width="200" height="200" fill="#ffffff"/>' +
        '<rect x="10" y="10" width="50" height="120" fill="#000066" stroke="#ffffff" stroke-width="2"/>' +
        '<rect x="40" y="40" width="50" height="120" fill="#000099" stroke="#ffffff" stroke-width="2"/>' +
        '<rect x="70" y="70" width="50" height="120" fill="#0000cc" stroke="#ffffff" stroke-width="2"/>' +
        '<rect x="140" y="140" width="50" height="50" fill="#000000" stroke="#ffffff" stroke-width="2"/>' +
        '<rect x="120" y="10" width="70" height="50" fill="#808080" stroke="#ffffff" stroke-width="2"/>' +
        '</svg>'

    for (let i = 0; i < lista_analise3.length; i++) {
        pot_saida_inversor = parseInt(lista_analise3[i][2][2] + lista_analise3[i][2][3] + lista_analise3[i][2][4] + lista_analise3[i][2][5])
        // se eu quiser adicionar um link a cada kit, é só usar o <a href= ...
        codigo_html_resultado += '<a href="https://www.neosolar.com.br"> Kit ' + lista_analise3[i][0] +
            '<br>' + codigo_imagem_kit + '<br>' +
            '<br> Inversor ' + lista_analise3[i][2] +
            '<br>' + lista_analise3[i][4] + 'x' + lista_analise3[i][5] + ' painéis ' + lista_analise3[i][3] +
            '<br>' + lista_analise3[i][7] + 'x' + lista_analise3[i][8] + ' baterias ' + lista_analise3[i][6] +
            '<br> Energia disponível diária: ' + lista_analise3[i][23] + 'W' +
            '<br> Potência do inversor: ' + pot_saida_inversor +
            // '<br>' + lista_analise2[i][23] + ' ' + lista_analise2[i][41] + ' ' + limite1 + ' ' + limite2 +
            '</a>'
    }

    if (codigo_html_resultado.length == 0) {
        codigo_html_resultado = '<a> Nenhum kit encontrado </a>'
    }

    var resultadoItens = document.getElementById("teste_scroll");
    resultadoItens.innerHTML = codigo_html_resultado

    // EASTER EGG
    if (limite1 == 123456 && result_pot_total == 78910) {
        resultadoItens.innerHTML = '\n' + 
    '<button type="button" id="botao_comecar" onclick="setTimeout(jogo_easter_egg(), 5000)"> Começar </button>'
    }
}


// essa aqui é a parte do documento que faz o html conseguir ler o código do arquivo EASTER EGG

document.addEventListener("DOMContentLoaded",
    function () {
        var botaoTeste = document.getElementById("botao_comecar");
        botaoTeste.addEventListener("click",
            function () {
                requestAnimationFrame(10);
            }
        );
    }
);

// essa aqui é a parte do documento que faz o html conseguir ler o código do arquivo

document.addEventListener("DOMContentLoaded",
    function () {
        var botaoTeste = document.getElementById("botao_buscar_kits");
        botaoTeste.addEventListener("click",
            function () {
                processamento();
            }
        );
    }
);

// FUNCAO SOMA

function soma() {
    // var valor_atual = parseInt(document.getElementById('carga_teste')[0].innerHTML.slice(0, -1));
    var valor_atual = parseInt(document.getElementById('result_pot_total').innerHTML.slice(0, -1));
    //alert(valor_atual)
    var valor_a_somar = parseInt(document.getElementById('pot_carga').value);

    var nome_carga = document.getElementById('nome_carga').value;

    var horas_carga = document.getElementById('horas_carga').value

    valor_atual += valor_a_somar;
    //alert(valor_atual)
    //valor_atual = 1000


    // CARGA TESTE 2
    var valor_atual2 = parseInt(document.getElementById('result_energia_consumida').innerHTML.slice(0, -1));
    var valor_a_somar2 = parseFloat(document.getElementById('pot_carga').value) * parseFloat(horas_carga);

    valor_atual2 += valor_a_somar2

    var resultado_valor = document.getElementById('result_pot_total');
    resultado_valor.innerHTML = valor_atual + 'W'

    var resultado_valor2 = document.getElementById('result_energia_consumida');
    resultado_valor2.innerHTML = valor_atual2 + 'Wh'

    var campo_texto = document.getElementById('lista_saida');
    campo_texto.value += nome_carga + ' - ' + valor_a_somar + "W - " + horas_carga + "h de uso\n"
}

// essa aqui é a parte do documento que faz o html conseguir ler o código do arquivo
document.addEventListener("DOMContentLoaded",
    function () {
        var botaoTeste = document.getElementById("botao_soma");
        botaoTeste.addEventListener("click",
            function () {
                soma();
            }
        );
    }
);

function resetar() {
    var resultado_valor = document.getElementById('result_pot_total');
    resultado_valor.innerHTML = 0 + 'W'
    var resultado_valor2 = document.getElementById('result_energia_consumida');
    resultado_valor2.innerHTML = 0 + 'Wh'
    var campo_texto = document.getElementById('lista_saida');
    campo_texto.value = ""
}

// essa aqui é a parte do documento que faz o html conseguir ler o código do arquivo
document.addEventListener("DOMContentLoaded",
    function () {
        var botaoTeste = document.getElementById("botao_resetar");
        botaoTeste.addEventListener("click",
            function () {
                resetar();
            }
        );
    }
);

function set_valores() {
    var valor1 = document.getElementById('input_pot_total').value
    var valor2 = document.getElementById('input_energia_consumida').value
    console.log(valor1, valor2)
    var campo1 = document.getElementById('result_pot_total');
    var campo2 = document.getElementById('result_energia_consumida');
    var campo_texto = document.getElementById('lista_saida');
    campo_texto.value = ""

    campo1.innerHTML = valor1 + 'W'
    campo2.innerHTML = valor2 + 'Wh'
}

// essa aqui é a parte do documento que faz o html conseguir ler o código do arquivo
document.addEventListener("DOMContentLoaded",
    function () {
        var botaoTeste = document.getElementById("botao_valores");
        botaoTeste.addEventListener("click",
            function () {
                set_valores();
            }
        );
    }
);