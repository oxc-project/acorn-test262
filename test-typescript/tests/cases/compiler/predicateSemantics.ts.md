__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2113,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 35,
            "decorators": [],
            "name": "opt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 17,
                "end": 35,
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
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 97,
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 100,
            "end": 144,
            "operator": "??",
            "left": {
              "type": "ConditionalExpression",
              "start": 101,
              "end": 121,
              "alternate": {
                "type": "Literal",
                "start": 119,
                "end": 121,
                "raw": "32",
                "value": 32
              },
              "consequent": {
                "type": "Identifier",
                "start": 107,
                "end": 116,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "test": {
                "type": "Identifier",
                "start": 101,
                "end": 104,
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 126,
              "end": 144,
              "raw": "\"possibly reached\"",
              "value": "possibly reached"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 238,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 191,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 194,
            "end": 238,
            "operator": "??",
            "left": {
              "type": "ConditionalExpression",
              "start": 195,
              "end": 217,
              "alternate": {
                "type": "Literal",
                "start": 213,
                "end": 217,
                "raw": "null",
                "value": null
              },
              "consequent": {
                "type": "Identifier",
                "start": 201,
                "end": 210,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "test": {
                "type": "Identifier",
                "start": 195,
                "end": 198,
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 222,
              "end": 238,
              "raw": "\"always reached\"",
              "value": "always reached"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 325,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 289,
            "decorators": [],
            "name": "test3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 292,
            "end": 325,
            "operator": "??",
            "left": {
              "type": "ConditionalExpression",
              "start": 293,
              "end": 307,
              "alternate": {
                "type": "Literal",
                "start": 305,
                "end": 307,
                "raw": "17",
                "value": 17
              },
              "consequent": {
                "type": "Literal",
                "start": 299,
                "end": 302,
                "raw": "132",
                "value": 132
              },
              "test": {
                "type": "Identifier",
                "start": 293,
                "end": 296,
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 312,
              "end": 325,
              "raw": "\"unreachable\"",
              "value": "unreachable"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 349,
            "decorators": [],
            "name": "test4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 352,
            "end": 384,
            "operator": "??",
            "left": {
              "type": "ConditionalExpression",
              "start": 353,
              "end": 377,
              "alternate": {
                "type": "Literal",
                "start": 374,
                "end": 376,
                "raw": "17",
                "value": 17
              },
              "consequent": {
                "type": "Identifier",
                "start": 360,
                "end": 369,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "test": {
                "type": "Identifier",
                "start": 353,
                "end": 356,
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 382,
              "end": 384,
              "raw": "42",
              "value": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 418,
      "end": 434,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 430,
        "end": 434,
        "body": []
      },
      "test": {
        "type": "UnaryExpression",
        "start": 422,
        "end": 428,
        "argument": {
          "type": "UnaryExpression",
          "start": 423,
          "end": 428,
          "argument": {
            "type": "Literal",
            "start": 424,
            "end": 428,
            "raw": "true",
            "value": true
          },
          "operator": "!",
          "prefix": true
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "WhileStatement",
      "start": 468,
      "end": 481,
      "body": {
        "type": "BlockStatement",
        "start": 478,
        "end": 481,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 475,
        "end": 476,
        "raw": "0",
        "value": 0
      }
    },
    {
      "type": "WhileStatement",
      "start": 482,
      "end": 495,
      "body": {
        "type": "BlockStatement",
        "start": 492,
        "end": 495,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 489,
        "end": 490,
        "raw": "1",
        "value": 1
      }
    },
    {
      "type": "WhileStatement",
      "start": 496,
      "end": 512,
      "body": {
        "type": "BlockStatement",
        "start": 509,
        "end": 512,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 503,
        "end": 507,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "WhileStatement",
      "start": 513,
      "end": 530,
      "body": {
        "type": "BlockStatement",
        "start": 527,
        "end": 530,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 520,
        "end": 525,
        "raw": "false",
        "value": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 532,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 538,
          "end": 554,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 538,
            "end": 541,
            "decorators": [],
            "name": "p01",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 544,
            "end": 554,
            "operator": "??",
            "left": {
              "type": "ObjectExpression",
              "start": 544,
              "end": 546,
              "properties": []
            },
            "right": {
              "type": "Literal",
              "start": 550,
              "end": 554,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 556,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 581,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 565,
            "decorators": [],
            "name": "p02",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 568,
            "end": 581,
            "operator": "??",
            "left": {
              "type": "BinaryExpression",
              "start": 568,
              "end": 573,
              "operator": ">",
              "left": {
                "type": "Literal",
                "start": 568,
                "end": 569,
                "raw": "0",
                "value": 0
              },
              "right": {
                "type": "Literal",
                "start": 572,
                "end": 573,
                "raw": "1",
                "value": 1
              }
            },
            "right": {
              "type": "Literal",
              "start": 577,
              "end": 581,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 583,
      "end": 605,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 604,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 592,
            "decorators": [],
            "name": "p03",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 595,
            "end": 604,
            "operator": "??",
            "left": {
              "type": "Literal",
              "start": 595,
              "end": 599,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "Literal",
              "start": 603,
              "end": 604,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 630,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 615,
            "decorators": [],
            "name": "p04",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 618,
            "end": 630,
            "operator": "??",
            "left": {
              "type": "Literal",
              "start": 618,
              "end": 622,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "Literal",
              "start": 626,
              "end": 630,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 632,
      "end": 668,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 667,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 641,
            "decorators": [],
            "name": "p05",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 644,
            "end": 667,
            "operator": "&&",
            "left": {
              "type": "ClassExpression",
              "start": 645,
              "end": 658,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 655,
                "end": 658,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 651,
                "end": 654,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "right": {
              "type": "Literal",
              "start": 663,
              "end": 667,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 669,
      "end": 705,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 675,
          "end": 704,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 675,
            "end": 678,
            "decorators": [],
            "name": "p06",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 681,
            "end": 704,
            "operator": "||",
            "left": {
              "type": "ClassExpression",
              "start": 682,
              "end": 695,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 692,
                "end": 695,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 688,
                "end": 691,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "right": {
              "type": "Literal",
              "start": 700,
              "end": 704,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 706,
      "end": 739,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 712,
          "end": 738,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 712,
            "end": 715,
            "decorators": [],
            "name": "p07",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 718,
            "end": 738,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 718,
              "end": 730,
              "operator": "??",
              "left": {
                "type": "Literal",
                "start": 718,
                "end": 722,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Literal",
                "start": 726,
                "end": 730,
                "raw": "null",
                "value": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 734,
              "end": 738,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 740,
      "end": 772,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 771,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 749,
            "decorators": [],
            "name": "p08",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 752,
            "end": 771,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 752,
              "end": 763,
              "operator": "??",
              "left": {
                "type": "Literal",
                "start": 752,
                "end": 756,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Identifier",
                "start": 760,
                "end": 763,
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 767,
              "end": 771,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 773,
      "end": 826,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 779,
          "end": 825,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 779,
            "end": 782,
            "decorators": [],
            "name": "p09",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 785,
            "end": 825,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 785,
              "end": 817,
              "operator": "??",
              "left": {
                "type": "Literal",
                "start": 785,
                "end": 789,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "ConditionalExpression",
                "start": 794,
                "end": 816,
                "alternate": {
                  "type": "Identifier",
                  "start": 807,
                  "end": 816,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": {
                  "type": "Literal",
                  "start": 800,
                  "end": 804,
                  "raw": "null",
                  "value": null
                },
                "test": {
                  "type": "Identifier",
                  "start": 794,
                  "end": 797,
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "Literal",
              "start": 821,
              "end": 825,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 828,
      "end": 857,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 834,
          "end": 856,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 834,
            "end": 837,
            "decorators": [],
            "name": "p10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 840,
            "end": 856,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 840,
              "end": 851,
              "operator": "??",
              "left": {
                "type": "Identifier",
                "start": 840,
                "end": 843,
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 847,
                "end": 851,
                "raw": "null",
                "value": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 855,
              "end": 856,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 858,
      "end": 890,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 864,
          "end": 889,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 864,
            "end": 867,
            "decorators": [],
            "name": "p11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 870,
            "end": 889,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 870,
              "end": 881,
              "operator": "??",
              "left": {
                "type": "Identifier",
                "start": 870,
                "end": 873,
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 877,
                "end": 881,
                "raw": "null",
                "value": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 885,
              "end": 889,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 891,
      "end": 922,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 897,
          "end": 921,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 897,
            "end": 900,
            "decorators": [],
            "name": "p12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 903,
            "end": 921,
            "operator": "??",
            "left": {
              "type": "Identifier",
              "start": 903,
              "end": 906,
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "LogicalExpression",
              "start": 911,
              "end": 920,
              "operator": "??",
              "left": {
                "type": "Literal",
                "start": 911,
                "end": 915,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Literal",
                "start": 919,
                "end": 920,
                "raw": "1",
                "value": 1
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 923,
      "end": 957,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 929,
          "end": 956,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 929,
            "end": 932,
            "decorators": [],
            "name": "p13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 935,
            "end": 956,
            "operator": "??",
            "left": {
              "type": "Identifier",
              "start": 935,
              "end": 938,
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "LogicalExpression",
              "start": 943,
              "end": 955,
              "operator": "??",
              "left": {
                "type": "Literal",
                "start": 943,
                "end": 947,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Literal",
                "start": 951,
                "end": 955,
                "raw": "null",
                "value": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 958,
      "end": 1000,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 964,
          "end": 999,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 964,
            "end": 967,
            "decorators": [],
            "name": "p14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 970,
            "end": 999,
            "operator": "??",
            "left": {
              "type": "Identifier",
              "start": 970,
              "end": 973,
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "LogicalExpression",
              "start": 978,
              "end": 998,
              "operator": "??",
              "left": {
                "type": "LogicalExpression",
                "start": 978,
                "end": 990,
                "operator": "??",
                "left": {
                  "type": "Literal",
                  "start": 978,
                  "end": 982,
                  "raw": "null",
                  "value": null
                },
                "right": {
                  "type": "Literal",
                  "start": 986,
                  "end": 990,
                  "raw": "null",
                  "value": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 994,
                "end": 998,
                "raw": "null",
                "value": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1001,
      "end": 1053,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1007,
          "end": 1052,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1007,
            "end": 1010,
            "decorators": [],
            "name": "p15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1013,
            "end": 1052,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 1013,
              "end": 1044,
              "operator": "??",
              "left": {
                "type": "Identifier",
                "start": 1013,
                "end": 1016,
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ConditionalExpression",
                "start": 1021,
                "end": 1043,
                "alternate": {
                  "type": "Identifier",
                  "start": 1034,
                  "end": 1043,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": {
                  "type": "Literal",
                  "start": 1027,
                  "end": 1031,
                  "raw": "null",
                  "value": null
                },
                "test": {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1024,
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "Literal",
              "start": 1048,
              "end": 1052,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1054,
      "end": 1080,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1060,
          "end": 1079,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1060,
            "end": 1063,
            "decorators": [],
            "name": "p16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1066,
            "end": 1079,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 1066,
              "end": 1074,
              "operator": "??",
              "left": {
                "type": "Identifier",
                "start": 1066,
                "end": 1069,
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1073,
                "end": 1074,
                "raw": "1",
                "value": 1
              }
            },
            "right": {
              "type": "Literal",
              "start": 1078,
              "end": 1079,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1081,
      "end": 1119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1087,
          "end": 1118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1087,
            "end": 1090,
            "decorators": [],
            "name": "p17",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1093,
            "end": 1118,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 1093,
              "end": 1113,
              "operator": "??",
              "left": {
                "type": "Identifier",
                "start": 1093,
                "end": 1096,
                "decorators": [],
                "name": "opt",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ConditionalExpression",
                "start": 1101,
                "end": 1112,
                "alternate": {
                  "type": "Literal",
                  "start": 1111,
                  "end": 1112,
                  "raw": "2",
                  "value": 2
                },
                "consequent": {
                  "type": "Literal",
                  "start": 1107,
                  "end": 1108,
                  "raw": "1",
                  "value": 1
                },
                "test": {
                  "type": "Identifier",
                  "start": 1101,
                  "end": 1104,
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "Literal",
              "start": 1117,
              "end": 1118,
              "raw": "3",
              "value": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1121,
      "end": 1162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1127,
          "end": 1161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1127,
            "end": 1130,
            "decorators": [],
            "name": "p21",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1133,
            "end": 1161,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 1133,
              "end": 1153,
              "operator": "??",
              "left": {
                "type": "LogicalExpression",
                "start": 1133,
                "end": 1145,
                "operator": "??",
                "left": {
                  "type": "Literal",
                  "start": 1133,
                  "end": 1137,
                  "raw": "null",
                  "value": null
                },
                "right": {
                  "type": "Literal",
                  "start": 1141,
                  "end": 1145,
                  "raw": "null",
                  "value": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 1149,
                "end": 1153,
                "raw": "null",
                "value": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 1157,
              "end": 1161,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1163,
      "end": 1190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1169,
          "end": 1189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1169,
            "end": 1172,
            "decorators": [],
            "name": "p22",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1175,
            "end": 1189,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 1175,
              "end": 1184,
              "operator": "??",
              "left": {
                "type": "Literal",
                "start": 1175,
                "end": 1179,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Literal",
                "start": 1183,
                "end": 1184,
                "raw": "1",
                "value": 1
              }
            },
            "right": {
              "type": "Literal",
              "start": 1188,
              "end": 1189,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1191,
      "end": 1230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1197,
          "end": 1229,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1197,
            "end": 1200,
            "decorators": [],
            "name": "p23",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1203,
            "end": 1229,
            "operator": "??",
            "left": {
              "type": "LogicalExpression",
              "start": 1203,
              "end": 1224,
              "operator": "??",
              "left": {
                "type": "Literal",
                "start": 1203,
                "end": 1207,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "ConditionalExpression",
                "start": 1212,
                "end": 1223,
                "alternate": {
                  "type": "Literal",
                  "start": 1222,
                  "end": 1223,
                  "raw": "2",
                  "value": 2
                },
                "consequent": {
                  "type": "Literal",
                  "start": 1218,
                  "end": 1219,
                  "raw": "1",
                  "value": 1
                },
                "test": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1215,
                  "decorators": [],
                  "name": "opt",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "Literal",
              "start": 1228,
              "end": 1229,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "WhileStatement",
      "start": 1258,
      "end": 1279,
      "body": {
        "type": "BlockStatement",
        "start": 1276,
        "end": 1279,
        "body": []
      },
      "test": {
        "type": "TSAsExpression",
        "start": 1265,
        "end": 1274,
        "expression": {
          "type": "ObjectExpression",
          "start": 1265,
          "end": 1267,
          "properties": []
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1271,
          "end": 1274
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 1280,
      "end": 1312,
      "body": {
        "type": "BlockStatement",
        "start": 1309,
        "end": 1312,
        "body": []
      },
      "test": {
        "type": "TSSatisfiesExpression",
        "start": 1287,
        "end": 1307,
        "expression": {
          "type": "ObjectExpression",
          "start": 1287,
          "end": 1289,
          "properties": []
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1300,
          "end": 1307
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 1313,
      "end": 1336,
      "body": {
        "type": "BlockStatement",
        "start": 1333,
        "end": 1336,
        "body": []
      },
      "test": {
        "type": "TSTypeAssertion",
        "start": 1321,
        "end": 1330,
        "expression": {
          "type": "ObjectExpression",
          "start": 1327,
          "end": 1329,
          "properties": []
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1322,
          "end": 1325
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 1337,
      "end": 1355,
      "body": {
        "type": "BlockStatement",
        "start": 1352,
        "end": 1355,
        "body": []
      },
      "test": {
        "type": "ObjectExpression",
        "start": 1346,
        "end": 1348,
        "properties": []
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1357,
      "end": 1379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1369,
          "end": 1378,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1369,
            "end": 1378,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1373,
              "end": 1378,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1375,
                "end": 1378
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1397,
      "end": 1442,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1397,
        "end": 1441,
        "arguments": [
          {
            "type": "LogicalExpression",
            "start": 1409,
            "end": 1440,
            "operator": "&&",
            "left": {
              "type": "LogicalExpression",
              "start": 1410,
              "end": 1427,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 1410,
                "end": 1414,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1418,
                "end": 1427,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "BinaryExpression",
              "start": 1432,
              "end": 1440,
              "operator": "/",
              "left": {
                "type": "Literal",
                "start": 1432,
                "end": 1433,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Identifier",
                "start": 1436,
                "end": 1440,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1397,
          "end": 1408,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1397,
            "end": 1404,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1405,
            "end": 1408,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1444,
      "end": 1528,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1483,
        "end": 1528,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1509,
            "end": 1526,
            "argument": {
              "type": "LogicalExpression",
              "start": 1516,
              "end": 1525,
              "operator": "??",
              "left": {
                "type": "ThisExpression",
                "start": 1516,
                "end": 1520
              },
              "right": {
                "type": "Literal",
                "start": 1524,
                "end": 1525,
                "raw": "0",
                "value": 0
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1453,
        "end": 1456,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1457,
          "end": 1481,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1461,
            "end": 1481,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1463,
              "end": 1481,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1463,
                  "end": 1469,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1463,
                    "end": 1469,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1472,
                  "end": 1481
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "BlockStatement",
      "start": 1586,
      "end": 1763,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1590,
          "end": 1624,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1596,
              "end": 1623,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 1596,
                "end": 1601,
                "decorators": [],
                "name": "maybe",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "TSAsExpression",
                "start": 1604,
                "end": 1623,
                "expression": {
                  "type": "Literal",
                  "start": 1604,
                  "end": 1608,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 1612,
                  "end": 1623,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 1612,
                      "end": 1616,
                      "literal": {
                        "type": "Literal",
                        "start": 1612,
                        "end": 1616,
                        "raw": "true",
                        "value": true
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 1619,
                      "end": 1623
                    }
                  ]
                }
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "VariableDeclaration",
          "start": 1627,
          "end": 1637,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1631,
              "end": 1636,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 1631,
                "end": 1632,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 1635,
                "end": 1636,
                "raw": "0",
                "value": 0
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        {
          "type": "VariableDeclaration",
          "start": 1640,
          "end": 1671,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1646,
              "end": 1670,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 1646,
                "end": 1647,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "LogicalExpression",
                "start": 1650,
                "end": 1670,
                "operator": "??",
                "left": {
                  "type": "SequenceExpression",
                  "start": 1651,
                  "end": 1661,
                  "expressions": [
                    {
                      "type": "UpdateExpression",
                      "start": 1651,
                      "end": 1654,
                      "argument": {
                        "type": "Identifier",
                        "start": 1651,
                        "end": 1652,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "++",
                      "prefix": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1656,
                      "end": 1661,
                      "decorators": [],
                      "name": "maybe",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "right": {
                  "type": "Literal",
                  "start": 1666,
                  "end": 1670,
                  "raw": "true",
                  "value": true
                }
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "VariableDeclaration",
          "start": 1680,
          "end": 1709,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1686,
              "end": 1708,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 1686,
                "end": 1687,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "LogicalExpression",
                "start": 1690,
                "end": 1708,
                "operator": "??",
                "left": {
                  "type": "SequenceExpression",
                  "start": 1691,
                  "end": 1699,
                  "expressions": [
                    {
                      "type": "UpdateExpression",
                      "start": 1691,
                      "end": 1694,
                      "argument": {
                        "type": "Identifier",
                        "start": 1691,
                        "end": 1692,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "++",
                      "prefix": false
                    },
                    {
                      "type": "UpdateExpression",
                      "start": 1696,
                      "end": 1699,
                      "argument": {
                        "type": "Identifier",
                        "start": 1696,
                        "end": 1697,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  ]
                },
                "right": {
                  "type": "Literal",
                  "start": 1704,
                  "end": 1708,
                  "raw": "true",
                  "value": true
                }
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "VariableDeclaration",
          "start": 1721,
          "end": 1752,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1727,
              "end": 1751,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 1727,
                "end": 1728,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "LogicalExpression",
                "start": 1731,
                "end": 1751,
                "operator": "??",
                "left": {
                  "type": "SequenceExpression",
                  "start": 1732,
                  "end": 1742,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1732,
                      "end": 1737,
                      "decorators": [],
                      "name": "maybe",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "UpdateExpression",
                      "start": 1739,
                      "end": 1742,
                      "argument": {
                        "type": "Identifier",
                        "start": 1739,
                        "end": 1740,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  ]
                },
                "right": {
                  "type": "Literal",
                  "start": 1747,
                  "end": 1751,
                  "raw": "true",
                  "value": true
                }
              }
            }
          ],
          "declare": false,
          "kind": "const"
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 1821,
      "end": 1886,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1829,
        "end": 1886,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1833,
            "end": 1884,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1833,
              "end": 1844,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1844,
              "end": 1884,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1847,
                "end": 1884,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1853,
                    "end": 1880,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1859,
                        "end": 1879,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1859,
                          "end": 1860,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 1863,
                          "end": 1879,
                          "operator": "??",
                          "left": {
                            "type": "MetaProperty",
                            "start": 1863,
                            "end": 1873,
                            "meta": {
                              "type": "Identifier",
                              "start": 1863,
                              "end": 1866,
                              "decorators": [],
                              "name": "new",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1867,
                              "end": 1873,
                              "decorators": [],
                              "name": "target",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1877,
                            "end": 1879,
                            "raw": "32",
                            "value": 32
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1827,
        "end": 1828,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1944,
      "end": 2036,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1961,
        "end": 1964,
        "decorators": [],
        "name": "tag",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1971,
          "end": 2000,
          "decorators": [],
          "name": "strings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1978,
            "end": 2000,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1980,
              "end": 2000,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1980,
                "end": 2000,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 2004,
          "end": 2023,
          "argument": {
            "type": "Identifier",
            "start": 2007,
            "end": 2013,
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2013,
            "end": 2023,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 2015,
              "end": 2023,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 2015,
                "end": 2021
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2025,
        "end": 2035,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 2027,
          "end": 2035,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2027,
              "end": 2028,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2027,
                "end": 2028,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSNullKeyword",
              "start": 2031,
              "end": 2035
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1964,
        "end": 1967,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1965,
            "end": 1966,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1965,
              "end": 1966,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2038,
      "end": 2057,
      "directive": null,
      "expression": {
        "type": "LogicalExpression",
        "start": 2038,
        "end": 2056,
        "operator": "??",
        "left": {
          "type": "TaggedTemplateExpression",
          "start": 2038,
          "end": 2050,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 2041,
            "end": 2050,
            "expressions": [
              {
                "type": "Literal",
                "start": 2047,
                "end": 2048,
                "raw": "1",
                "value": 1
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 2041,
                "end": 2047,
                "tail": false,
                "value": {
                  "cooked": "foo",
                  "raw": "foo"
                }
              },
              {
                "type": "TemplateElement",
                "start": 2048,
                "end": 2050,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ]
          },
          "tag": {
            "type": "Identifier",
            "start": 2038,
            "end": 2041,
            "decorators": [],
            "name": "tag",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "right": {
          "type": "Literal",
          "start": 2054,
          "end": 2056,
          "raw": "32",
          "value": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2065,
      "end": 2081,
      "directive": null,
      "expression": {
        "type": "LogicalExpression",
        "start": 2065,
        "end": 2080,
        "operator": "??",
        "left": {
          "type": "TemplateLiteral",
          "start": 2065,
          "end": 2074,
          "expressions": [
            {
              "type": "Literal",
              "start": 2071,
              "end": 2072,
              "raw": "1",
              "value": 1
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2065,
              "end": 2071,
              "tail": false,
              "value": {
                "cooked": "foo",
                "raw": "foo"
              }
            },
            {
              "type": "TemplateElement",
              "start": 2072,
              "end": 2074,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "right": {
          "type": "Literal",
          "start": 2078,
          "end": 2080,
          "raw": "32",
          "value": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2091,
      "end": 2103,
      "directive": null,
      "expression": {
        "type": "LogicalExpression",
        "start": 2091,
        "end": 2102,
        "operator": "??",
        "left": {
          "type": "TemplateLiteral",
          "start": 2091,
          "end": 2096,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2091,
              "end": 2096,
              "tail": true,
              "value": {
                "cooked": "foo",
                "raw": "foo"
              }
            }
          ]
        },
        "right": {
          "type": "Literal",
          "start": 2100,
          "end": 2102,
          "raw": "32",
          "value": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
