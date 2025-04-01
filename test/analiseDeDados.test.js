const Analisar = require("../src/analiseDeDados");

describe('ADICIONAR DADOS', () => {
    let analisar;

    beforeEach(() => {
        analisar.dados = new analisar();
        analisar.dados['Neymar', 'Messi', 'Veigh', 'Ronaldo'];
    });

    test('Deve Adicionar os dados no dados', () => {
        const dadosNovos = ['Travis', 'Scott']
        analisar.adicionarDados(dadosNovos);
        expect(analisar.dados).toEqual(expect.arrayContaining(dadosNovos));
    });

    test("Adicionar dados em formato inválido", async () => {
        const dadosNovos = 1;
        expect(() => analisar.adicionarDados(dadosNovos)).toThrow("Os dados devem ser um array.");
      });

    test('Deve remover um item existente dos dados', () => {
        dados.limparDados('Neymar');
        expect(dados.adicionarDados()).toEqual(['Messi']);
    });
})

describe("LIMPAR DADOS", () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar(); 
      analisar.dados = ['Marcos','Lucas','Mateus','Angiel'];
    });
  
    test("Limpar dados corretamente", async () => {
      analisar.limparDados();
      expect(analisar.dados).toEqual([]);
    });

  });
  
  describe('Testes para ordenarDados', () => {
    let analisar; 

    beforeEach(() => {
        analisar = new Analisar();
      });
    
      test('Deve ordenar os dados', () => {
        analisar.dados = ['CR7', 'Messi', 'PELE', 'Neymar','Ronaldo' ];
        const resultado = analisar.ordenarDados();
        expect(resultado).toEqual(['Messi', 'PELE', 'Ronaldo','Neymar','CR7']);})

  });

  describe('Testes para calcularMedia', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve calcular corretamente a média de um array de números', () => {
      analisar.dados = [50,50];
      expect(analisar.calcularMedia()).toBe(50)
    });

});

describe('Testes para calcularMediana', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve calcular corretamente a mediana para um array ímpar', () => {
      analisar.dados = [5, 1, 3, 2, 4]; 
      expect(analisar.calcularMediana()).toBe(3);})

 });

 describe('Testes para calcularModa()', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve calcular corretamente a moda quando há um jogador mais frequente', () => {
      analisar.dados = ['Messi', 'Messi','Ronaldo']; 
      expect(analisar.calcularModa()).toEqual(['Messi']);
    });
});

describe('Testes para calcular a Variancia', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve calcular corretamente a variância de um conjunto de números', () => {
      analisar.dados = [10, 20, 30, 40, 50]; 
      expect(analisar.calcularVariancia()).toBe(200);
    });
});

describe('Testes para calcular Desvio Padrao', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve calcular corretamente o desvio padrão de um conjunto de números', () => {
      analisar.dados = [10, 20, 30, 40, 50]; 
      expect(analisar.calcularDesvioPadrao()).toBeCloseTo(14.14, 2);
    });
});



describe('Testes para encontrarMinimo', () => {
    let analisar;
      
    beforeEach(() => {
      analisar = new Analisar();
            });
      
    test('Deve retornar o menor número de um conjunto de valores', () => {
          analisar.dados = [10, 20, 70, 40, 50];
          expect(analisar.encontrarMinimo()).toBe(10);
        });

});


describe('Testes para encontrarMaximo', () => {
    let analisar;
      
    beforeEach(() => {
      analisar = new Analisar();
            });
      
    test('Deve retornar o maior número de um conjunto de valores', () => {
          analisar.dados = [10, 20, 70, 40, 50];
          expect(analisar.encontrarMaximo()).toBe(70);
        });

});

describe('Testes para normalizarDados', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve normalizar corretamente um conjunto de números', () => {
      analisar.dados = [10, 20, 30, 40, 50]; 
      expect(analisar.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
    });

});


describe('Testes para calcularPercentil', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve calcular corretamente os percentis comuns', () => {
      analisar.dados = [10, 20, 30, 40, 50];
      expect(analisar.calcularPercentil(0)).toBe(10); // Mínimo
      expect(analisar.calcularPercentil(25)).toBe(20);
      expect(analisar.calcularPercentil(50)).toBe(30); // Mediana
      expect(analisar.calcularPercentil(75)).toBe(40);
      expect(analisar.calcularPercentil(100)).toBe(50); // Máximo
    });

});

describe('Testes para calcularSoma', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve calcular corretamente a soma de um conjunto de números', () => {
      analisar.dados = [10, 20];
      expect(analisar.calcularSoma()).toBe(30);
    });

});

describe('Testes para calcularProduto', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve calcular corretamente o produto de um conjunto de números', () => {
      analisar.dados = [2, 3, 4];
      expect(analisar.calcularProduto()).toBe(24);
    });

})

describe('Testes para calcularAmplitude', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve calcular corretamente a amplitude de um conjunto de números', () => {
      analisar.dados = [10, 20, 30, 40, 50];
      expect(analisar.calcularAmplitude()).toBe(40); // 50 - 10 = 40
    });

});

describe('Testes para calcularCoeficienteVariacao()', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve calcular corretamente o coeficiente de variação', () => {
      analisar.dados = [10, 20, 30, 40, 50];
      const esperado = (analisar.calcularDesvioPadrao() / analisar.calcularMedia()) * 100;
      expect(analisar.calcularCoeficienteVariacao()).toBeCloseTo(esperado);
    });

});

describe('Testes para removerOutliers()', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve remover corretamente os outliers', () => {
      analisar.dados = [10, 12, 14, 16, 18, 100]; // 100 é um outlier
      analisar.removerOutliers();
      expect(analisar.dados).toEqual([10, 12, 14, 16, 18]); // 100 foi removido
    });

});

describe('Testes para calcularCorrelacao()', () => {
    let analisar;
  
    beforeEach(() => {
      analisar = new Analisar();
    });
  
    test('Deve retornar 1 para correlação positiva perfeita', () => {
      analisar.dados = [10, 20, 30, 40, 50];
      const outroConjunto = [10, 20, 30, 40, 50];
      expect(analisar.calcularCorrelacao(outroConjunto)).toBeCloseTo(1);
    });

});










      


      
  

