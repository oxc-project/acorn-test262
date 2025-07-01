__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "opt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 17,
                    "end": 23
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 26,
                    "end": 35
                  }
                ],
                "start": 17,
                "end": 35
              },
              "start": 15,
              "end": 35
            },
            "start": 12,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 97
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 104
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 116
              },
              "alternate": {
                "type": "Literal",
                "value": 32,
                "raw": "32",
                "start": 119,
                "end": 121
              },
              "start": 101,
              "end": 121
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "possibly reached",
              "raw": "\"possibly reached\"",
              "start": 126,
              "end": 144
            },
            "start": 100,
            "end": 144
          },
          "definite": false,
          "start": 92,
          "end": 144
        }
      ],
      "declare": false,
      "start": 86,
      "end": 145
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 191
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 198
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 210
              },
              "alternate": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 213,
                "end": 217
              },
              "start": 195,
              "end": 217
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "always reached",
              "raw": "\"always reached\"",
              "start": 222,
              "end": 238
            },
            "start": 194,
            "end": 238
          },
          "definite": false,
          "start": 186,
          "end": 238
        }
      ],
      "declare": false,
      "start": 180,
      "end": 239
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test3",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 289
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 296
              },
              "consequent": {
                "type": "Literal",
                "value": 132,
                "raw": "132",
                "start": 299,
                "end": 302
              },
              "alternate": {
                "type": "Literal",
                "value": 17,
                "raw": "17",
                "start": 305,
                "end": 307
              },
              "start": 293,
              "end": 307
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "unreachable",
              "raw": "\"unreachable\"",
              "start": 312,
              "end": 325
            },
            "start": 292,
            "end": 325
          },
          "definite": false,
          "start": 284,
          "end": 325
        }
      ],
      "declare": false,
      "start": 278,
      "end": 326
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test4",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 349
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 356
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 369
              },
              "alternate": {
                "type": "Literal",
                "value": 17,
                "raw": "17",
                "start": 374,
                "end": 376
              },
              "start": 353,
              "end": 377
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 382,
              "end": 384
            },
            "start": 352,
            "end": 384
          },
          "definite": false,
          "start": 344,
          "end": 384
        }
      ],
      "declare": false,
      "start": 338,
      "end": 385
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 424,
            "end": 428
          },
          "prefix": true,
          "start": 423,
          "end": 428
        },
        "prefix": true,
        "start": 422,
        "end": 428
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 430,
        "end": 434
      },
      "alternate": null,
      "start": 418,
      "end": 434
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 475,
        "end": 476
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 478,
        "end": 481
      },
      "start": 468,
      "end": 481
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 489,
        "end": 490
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 492,
        "end": 495
      },
      "start": 482,
      "end": 495
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 503,
        "end": 507
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 509,
        "end": 512
      },
      "start": 496,
      "end": 512
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 520,
        "end": 525
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 527,
        "end": 530
      },
      "start": 513,
      "end": 530
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p01",
            "optional": false,
            "typeAnnotation": null,
            "start": 538,
            "end": 541
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 544,
              "end": 546
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 550,
              "end": 554
            },
            "start": 544,
            "end": 554
          },
          "definite": false,
          "start": 538,
          "end": 554
        }
      ],
      "declare": false,
      "start": 532,
      "end": 555
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p02",
            "optional": false,
            "typeAnnotation": null,
            "start": 562,
            "end": 565
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 568,
                "end": 569
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 572,
                "end": 573
              },
              "start": 568,
              "end": 573
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 577,
              "end": 581
            },
            "start": 568,
            "end": 581
          },
          "definite": false,
          "start": 562,
          "end": 581
        }
      ],
      "declare": false,
      "start": 556,
      "end": 582
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p03",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 592
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 595,
              "end": 599
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 603,
              "end": 604
            },
            "start": 595,
            "end": 604
          },
          "definite": false,
          "start": 589,
          "end": 604
        }
      ],
      "declare": false,
      "start": 583,
      "end": 605
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p04",
            "optional": false,
            "typeAnnotation": null,
            "start": 612,
            "end": 615
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 618,
              "end": 622
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 626,
              "end": 630
            },
            "start": 618,
            "end": 630
          },
          "definite": false,
          "start": 612,
          "end": 630
        }
      ],
      "declare": false,
      "start": 606,
      "end": 631
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p05",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 641
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 651,
                "end": 654
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 655,
                "end": 658
              },
              "abstract": false,
              "declare": false,
              "start": 645,
              "end": 658
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 663,
              "end": 667
            },
            "start": 644,
            "end": 667
          },
          "definite": false,
          "start": 638,
          "end": 667
        }
      ],
      "declare": false,
      "start": 632,
      "end": 668
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p06",
            "optional": false,
            "typeAnnotation": null,
            "start": 675,
            "end": 678
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 691
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 692,
                "end": 695
              },
              "abstract": false,
              "declare": false,
              "start": 682,
              "end": 695
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 700,
              "end": 704
            },
            "start": 681,
            "end": 704
          },
          "definite": false,
          "start": 675,
          "end": 704
        }
      ],
      "declare": false,
      "start": 669,
      "end": 705
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p07",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 715
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 718,
                "end": 722
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 726,
                "end": 730
              },
              "start": 718,
              "end": 730
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 734,
              "end": 738
            },
            "start": 718,
            "end": 738
          },
          "definite": false,
          "start": 712,
          "end": 738
        }
      ],
      "declare": false,
      "start": 706,
      "end": 739
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p08",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 749
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 752,
                "end": 756
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 763
              },
              "start": 752,
              "end": 763
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 767,
              "end": 771
            },
            "start": 752,
            "end": 771
          },
          "definite": false,
          "start": 746,
          "end": 771
        }
      ],
      "declare": false,
      "start": 740,
      "end": 772
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p09",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 782
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 785,
                "end": 789
              },
              "operator": "??",
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 794,
                  "end": 797
                },
                "consequent": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 800,
                  "end": 804
                },
                "alternate": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 816
                },
                "start": 794,
                "end": 816
              },
              "start": 785,
              "end": 817
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 821,
              "end": 825
            },
            "start": 785,
            "end": 825
          },
          "definite": false,
          "start": 779,
          "end": 825
        }
      ],
      "declare": false,
      "start": 773,
      "end": 826
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p10",
            "optional": false,
            "typeAnnotation": null,
            "start": 834,
            "end": 837
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 843
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 847,
                "end": 851
              },
              "start": 840,
              "end": 851
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 855,
              "end": 856
            },
            "start": 840,
            "end": 856
          },
          "definite": false,
          "start": 834,
          "end": 856
        }
      ],
      "declare": false,
      "start": 828,
      "end": 857
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p11",
            "optional": false,
            "typeAnnotation": null,
            "start": 864,
            "end": 867
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 870,
                "end": 873
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 877,
                "end": 881
              },
              "start": 870,
              "end": 881
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 885,
              "end": 889
            },
            "start": 870,
            "end": 889
          },
          "definite": false,
          "start": 864,
          "end": 889
        }
      ],
      "declare": false,
      "start": 858,
      "end": 890
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p12",
            "optional": false,
            "typeAnnotation": null,
            "start": 897,
            "end": 900
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 906
            },
            "operator": "??",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 911,
                "end": 915
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 919,
                "end": 920
              },
              "start": 911,
              "end": 920
            },
            "start": 903,
            "end": 921
          },
          "definite": false,
          "start": 897,
          "end": 921
        }
      ],
      "declare": false,
      "start": 891,
      "end": 922
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p13",
            "optional": false,
            "typeAnnotation": null,
            "start": 929,
            "end": 932
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null,
              "start": 935,
              "end": 938
            },
            "operator": "??",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 943,
                "end": 947
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 951,
                "end": 955
              },
              "start": 943,
              "end": 955
            },
            "start": 935,
            "end": 956
          },
          "definite": false,
          "start": 929,
          "end": 956
        }
      ],
      "declare": false,
      "start": 923,
      "end": 957
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p14",
            "optional": false,
            "typeAnnotation": null,
            "start": 964,
            "end": 967
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 973
            },
            "operator": "??",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 978,
                  "end": 982
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 986,
                  "end": 990
                },
                "start": 978,
                "end": 990
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 994,
                "end": 998
              },
              "start": 978,
              "end": 998
            },
            "start": 970,
            "end": 999
          },
          "definite": false,
          "start": 964,
          "end": 999
        }
      ],
      "declare": false,
      "start": 958,
      "end": 1000
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1007,
            "end": 1010
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 1013,
                "end": 1016
              },
              "operator": "??",
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1024
                },
                "consequent": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1027,
                  "end": 1031
                },
                "alternate": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1034,
                  "end": 1043
                },
                "start": 1021,
                "end": 1043
              },
              "start": 1013,
              "end": 1044
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1048,
              "end": 1052
            },
            "start": 1013,
            "end": 1052
          },
          "definite": false,
          "start": 1007,
          "end": 1052
        }
      ],
      "declare": false,
      "start": 1001,
      "end": 1053
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1060,
            "end": 1063
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 1066,
                "end": 1069
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1073,
                "end": 1074
              },
              "start": 1066,
              "end": 1074
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1078,
              "end": 1079
            },
            "start": 1066,
            "end": 1079
          },
          "definite": false,
          "start": 1060,
          "end": 1079
        }
      ],
      "declare": false,
      "start": 1054,
      "end": 1080
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p17",
            "optional": false,
            "typeAnnotation": null,
            "start": 1087,
            "end": 1090
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1096
              },
              "operator": "??",
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1101,
                  "end": 1104
                },
                "consequent": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1107,
                  "end": 1108
                },
                "alternate": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1111,
                  "end": 1112
                },
                "start": 1101,
                "end": 1112
              },
              "start": 1093,
              "end": 1113
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1117,
              "end": 1118
            },
            "start": 1093,
            "end": 1118
          },
          "definite": false,
          "start": 1087,
          "end": 1118
        }
      ],
      "declare": false,
      "start": 1081,
      "end": 1119
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1127,
            "end": 1130
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1133,
                  "end": 1137
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1141,
                  "end": 1145
                },
                "start": 1133,
                "end": 1145
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1149,
                "end": 1153
              },
              "start": 1133,
              "end": 1153
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1157,
              "end": 1161
            },
            "start": 1133,
            "end": 1161
          },
          "definite": false,
          "start": 1127,
          "end": 1161
        }
      ],
      "declare": false,
      "start": 1121,
      "end": 1162
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1169,
            "end": 1172
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1175,
                "end": 1179
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1183,
                "end": 1184
              },
              "start": 1175,
              "end": 1184
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1188,
              "end": 1189
            },
            "start": 1175,
            "end": 1189
          },
          "definite": false,
          "start": 1169,
          "end": 1189
        }
      ],
      "declare": false,
      "start": 1163,
      "end": 1190
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1197,
            "end": 1200
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1203,
                "end": 1207
              },
              "operator": "??",
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1215
                },
                "consequent": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1218,
                  "end": 1219
                },
                "alternate": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1222,
                  "end": 1223
                },
                "start": 1212,
                "end": 1223
              },
              "start": 1203,
              "end": 1224
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1228,
              "end": 1229
            },
            "start": 1203,
            "end": 1229
          },
          "definite": false,
          "start": 1197,
          "end": 1229
        }
      ],
      "declare": false,
      "start": 1191,
      "end": 1230
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "TSAsExpression",
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 1265,
          "end": 1267
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1271,
          "end": 1274
        },
        "start": 1265,
        "end": 1274
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1276,
        "end": 1279
      },
      "start": 1258,
      "end": 1279
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "TSSatisfiesExpression",
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 1287,
          "end": 1289
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1300,
          "end": 1307
        },
        "start": 1287,
        "end": 1307
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1309,
        "end": 1312
      },
      "start": 1280,
      "end": 1312
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1322,
          "end": 1325
        },
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 1327,
          "end": 1329
        },
        "start": 1321,
        "end": 1330
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1333,
        "end": 1336
      },
      "start": 1313,
      "end": 1336
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1346,
        "end": 1348
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1352,
        "end": 1355
      },
      "start": 1337,
      "end": 1355
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1375,
                "end": 1378
              },
              "start": 1373,
              "end": 1378
            },
            "start": 1369,
            "end": 1378
          },
          "init": null,
          "definite": false,
          "start": 1369,
          "end": 1378
        }
      ],
      "declare": true,
      "start": 1357,
      "end": 1379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 1397,
            "end": 1404
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 1405,
            "end": 1408
          },
          "optional": false,
          "computed": false,
          "start": 1397,
          "end": 1408
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1410,
                "end": 1414
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1418,
                "end": 1427
              },
              "start": 1410,
              "end": 1427
            },
            "operator": "&&",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1432,
                "end": 1433
              },
              "operator": "/",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1436,
                "end": 1440
              },
              "start": 1432,
              "end": 1440
            },
            "start": 1409,
            "end": 1440
          }
        ],
        "optional": false,
        "start": 1397,
        "end": 1441
      },
      "directive": null,
      "start": 1397,
      "end": 1442
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1453,
        "end": 1456
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1463,
                    "end": 1469
                  },
                  "typeArguments": null,
                  "start": 1463,
                  "end": 1469
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1472,
                  "end": 1481
                }
              ],
              "start": 1463,
              "end": 1481
            },
            "start": 1461,
            "end": 1481
          },
          "start": 1457,
          "end": 1481
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "ThisExpression",
                "start": 1516,
                "end": 1520
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1524,
                "end": 1525
              },
              "start": 1516,
              "end": 1525
            },
            "start": 1509,
            "end": 1526
          }
        ],
        "start": 1483,
        "end": 1528
      },
      "expression": false,
      "start": 1444,
      "end": 1528
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "maybe",
                "optional": false,
                "typeAnnotation": null,
                "start": 1596,
                "end": 1601
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1604,
                  "end": 1608
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1612,
                        "end": 1616
                      },
                      "start": 1612,
                      "end": 1616
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 1619,
                      "end": 1623
                    }
                  ],
                  "start": 1612,
                  "end": 1623
                },
                "start": 1604,
                "end": 1623
              },
              "definite": false,
              "start": 1596,
              "end": 1623
            }
          ],
          "declare": false,
          "start": 1590,
          "end": 1624
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1631,
                "end": 1632
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1635,
                "end": 1636
              },
              "definite": false,
              "start": 1631,
              "end": 1636
            }
          ],
          "declare": false,
          "start": 1627,
          "end": 1637
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1646,
                "end": 1647
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1651,
                        "end": 1652
                      },
                      "start": 1651,
                      "end": 1654
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maybe",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1656,
                      "end": 1661
                    }
                  ],
                  "start": 1651,
                  "end": 1661
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1666,
                  "end": 1670
                },
                "start": 1650,
                "end": 1670
              },
              "definite": false,
              "start": 1646,
              "end": 1670
            }
          ],
          "declare": false,
          "start": 1640,
          "end": 1671
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1686,
                "end": 1687
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1691,
                        "end": 1692
                      },
                      "start": 1691,
                      "end": 1694
                    },
                    {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1696,
                        "end": 1697
                      },
                      "start": 1696,
                      "end": 1699
                    }
                  ],
                  "start": 1691,
                  "end": 1699
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1704,
                  "end": 1708
                },
                "start": 1690,
                "end": 1708
              },
              "definite": false,
              "start": 1686,
              "end": 1708
            }
          ],
          "declare": false,
          "start": 1680,
          "end": 1709
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1727,
                "end": 1728
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maybe",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1732,
                      "end": 1737
                    },
                    {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1739,
                        "end": 1740
                      },
                      "start": 1739,
                      "end": 1742
                    }
                  ],
                  "start": 1732,
                  "end": 1742
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1747,
                  "end": 1751
                },
                "start": 1731,
                "end": 1751
              },
              "definite": false,
              "start": 1727,
              "end": 1751
            }
          ],
          "declare": false,
          "start": 1721,
          "end": 1752
        }
      ],
      "start": 1586,
      "end": 1763
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 1827,
        "end": 1828
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1833,
              "end": 1844
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1859,
                          "end": 1860
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MetaProperty",
                            "meta": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "new",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1863,
                              "end": 1866
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "target",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1867,
                              "end": 1873
                            },
                            "start": 1863,
                            "end": 1873
                          },
                          "operator": "??",
                          "right": {
                            "type": "Literal",
                            "value": 32,
                            "raw": "32",
                            "start": 1877,
                            "end": 1879
                          },
                          "start": 1863,
                          "end": 1879
                        },
                        "definite": false,
                        "start": 1859,
                        "end": 1879
                      }
                    ],
                    "declare": false,
                    "start": 1853,
                    "end": 1880
                  }
                ],
                "start": 1847,
                "end": 1884
              },
              "expression": false,
              "start": 1844,
              "end": 1884
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1833,
            "end": 1884
          }
        ],
        "start": 1829,
        "end": 1886
      },
      "abstract": false,
      "declare": false,
      "start": 1821,
      "end": 1886
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 1961,
        "end": 1964
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1965,
              "end": 1966
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1965,
            "end": 1966
          }
        ],
        "start": 1964,
        "end": 1967
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1980,
                "end": 2000
              },
              "typeArguments": null,
              "start": 1980,
              "end": 2000
            },
            "start": 1978,
            "end": 2000
          },
          "start": 1971,
          "end": 2000
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null,
            "start": 2007,
            "end": 2013
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 2015,
                "end": 2021
              },
              "start": 2015,
              "end": 2023
            },
            "start": 2013,
            "end": 2023
          },
          "value": null,
          "start": 2004,
          "end": 2023
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2027,
                "end": 2028
              },
              "typeArguments": null,
              "start": 2027,
              "end": 2028
            },
            {
              "type": "TSNullKeyword",
              "start": 2031,
              "end": 2035
            }
          ],
          "start": 2027,
          "end": 2035
        },
        "start": 2025,
        "end": 2035
      },
      "body": null,
      "expression": false,
      "start": 1944,
      "end": 2036
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 2038,
            "end": 2041
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "foo",
                  "cooked": "foo"
                },
                "tail": false,
                "start": 2041,
                "end": 2047
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2048,
                "end": 2050
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2047,
                "end": 2048
              }
            ],
            "start": 2041,
            "end": 2050
          },
          "start": 2038,
          "end": 2050
        },
        "operator": "??",
        "right": {
          "type": "Literal",
          "value": 32,
          "raw": "32",
          "start": 2054,
          "end": 2056
        },
        "start": 2038,
        "end": 2056
      },
      "directive": null,
      "start": 2038,
      "end": 2057
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "foo",
                "cooked": "foo"
              },
              "tail": false,
              "start": 2065,
              "end": 2071
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2072,
              "end": 2074
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2071,
              "end": 2072
            }
          ],
          "start": 2065,
          "end": 2074
        },
        "operator": "??",
        "right": {
          "type": "Literal",
          "value": 32,
          "raw": "32",
          "start": 2078,
          "end": 2080
        },
        "start": 2065,
        "end": 2080
      },
      "directive": null,
      "start": 2065,
      "end": 2081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "foo",
                "cooked": "foo"
              },
              "tail": true,
              "start": 2091,
              "end": 2096
            }
          ],
          "expressions": [],
          "start": 2091,
          "end": 2096
        },
        "operator": "??",
        "right": {
          "type": "Literal",
          "value": 32,
          "raw": "32",
          "start": 2100,
          "end": 2102
        },
        "start": 2091,
        "end": 2102
      },
      "directive": null,
      "start": 2091,
      "end": 2103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2112
}
```
