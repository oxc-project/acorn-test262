__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 43,
  "end": 981,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 51,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 78,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 76,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 67,
              "name": "property1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 69,
                "end": 75
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 88,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 97,
        "end": 99,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 100,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 115,
              "name": "property2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 149,
            "name": "var1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 149,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 138,
                "end": 149,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 138,
                    "end": 140,
                    "typeName": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 140,
                      "name": "C2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 143,
                    "end": 149
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 151,
      "end": 231,
      "test": {
        "type": "BinaryExpression",
        "start": 155,
        "end": 178,
        "left": {
          "type": "MemberExpression",
          "start": 155,
          "end": 171,
          "object": {
            "type": "Identifier",
            "start": 155,
            "end": 159,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 171,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 176,
          "end": 178,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 180,
        "end": 231,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 191,
            "expression": {
              "type": "Identifier",
              "start": 186,
              "end": 190,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 220,
            "expression": {
              "type": "MemberExpression",
              "start": 205,
              "end": 219,
              "object": {
                "type": "Identifier",
                "start": 205,
                "end": 209,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 210,
                "end": 219,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 232,
      "end": 310,
      "test": {
        "type": "BinaryExpression",
        "start": 236,
        "end": 259,
        "left": {
          "type": "MemberExpression",
          "start": 236,
          "end": 252,
          "object": {
            "type": "Identifier",
            "start": 236,
            "end": 240,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 241,
            "end": 252,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 257,
          "end": 259,
          "name": "C2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 261,
        "end": 310,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 267,
            "end": 272,
            "expression": {
              "type": "Identifier",
              "start": 267,
              "end": 271,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 283,
            "end": 298,
            "expression": {
              "type": "MemberExpression",
              "start": 283,
              "end": 297,
              "object": {
                "type": "Identifier",
                "start": 283,
                "end": 287,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 288,
                "end": 297,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ClassDeclaration",
      "start": 355,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 363,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 364,
        "end": 366,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 368,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 374,
        "end": 376,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 385,
        "end": 387,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 388,
        "end": 390,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 413,
            "name": "var2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 400,
              "end": 413,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 402,
                "end": 413,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 402,
                    "end": 404,
                    "typeName": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 404,
                      "name": "C4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 407,
                    "end": 413
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 415,
      "end": 466,
      "test": {
        "type": "BinaryExpression",
        "start": 419,
        "end": 442,
        "left": {
          "type": "MemberExpression",
          "start": 419,
          "end": 435,
          "object": {
            "type": "Identifier",
            "start": 419,
            "end": 423,
            "name": "var2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 424,
            "end": 435,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 440,
          "end": 442,
          "name": "C3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 444,
        "end": 466,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 450,
            "end": 455,
            "expression": {
              "type": "Identifier",
              "start": 450,
              "end": 454,
              "name": "var2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 467,
      "end": 515,
      "test": {
        "type": "BinaryExpression",
        "start": 471,
        "end": 494,
        "left": {
          "type": "MemberExpression",
          "start": 471,
          "end": 487,
          "object": {
            "type": "Identifier",
            "start": 471,
            "end": 475,
            "name": "var2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 476,
            "end": 487,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 492,
          "end": 494,
          "name": "C4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 496,
        "end": 515,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 502,
            "end": 507,
            "expression": {
              "type": "Identifier",
              "start": 502,
              "end": 506,
              "name": "var2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ClassDeclaration",
      "start": 550,
      "end": 585,
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 558,
        "name": "C5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 559,
        "end": 585,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 565,
            "end": 583,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 565,
              "end": 574,
              "name": "property1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 582,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 576,
                "end": 582
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 587,
      "end": 622,
      "id": {
        "type": "Identifier",
        "start": 593,
        "end": 595,
        "name": "C6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 596,
        "end": 622,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 602,
            "end": 620,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 611,
              "name": "property2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 611,
              "end": 619,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 613,
                "end": 619
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 624,
      "end": 646,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 628,
          "end": 645,
          "id": {
            "type": "Identifier",
            "start": 628,
            "end": 645,
            "name": "let3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 632,
              "end": 645,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 634,
                "end": 645,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 634,
                    "end": 636,
                    "typeName": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 636,
                      "name": "C6",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 639,
                    "end": 645
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 647,
      "end": 698,
      "test": {
        "type": "BinaryExpression",
        "start": 651,
        "end": 674,
        "left": {
          "type": "MemberExpression",
          "start": 651,
          "end": 667,
          "object": {
            "type": "Identifier",
            "start": 651,
            "end": 655,
            "name": "let3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 656,
            "end": 667,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 672,
          "end": 674,
          "name": "C5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 676,
        "end": 698,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 682,
            "end": 687,
            "expression": {
              "type": "Identifier",
              "start": 682,
              "end": 686,
              "name": "let3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 699,
      "end": 747,
      "test": {
        "type": "BinaryExpression",
        "start": 703,
        "end": 726,
        "left": {
          "type": "MemberExpression",
          "start": 703,
          "end": 719,
          "object": {
            "type": "Identifier",
            "start": 703,
            "end": 707,
            "name": "let3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 708,
            "end": 719,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 724,
          "end": 726,
          "name": "C6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 728,
        "end": 747,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 734,
            "end": 739,
            "expression": {
              "type": "Identifier",
              "start": 734,
              "end": 738,
              "name": "let3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ClassDeclaration",
      "start": 784,
      "end": 818,
      "id": {
        "type": "Identifier",
        "start": 790,
        "end": 792,
        "name": "C7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 793,
        "end": 818,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 799,
            "end": 816,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 799,
              "end": 808,
              "name": "property1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 808,
              "end": 816,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 810,
                "end": 816
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 820,
      "end": 855,
      "id": {
        "type": "Identifier",
        "start": 826,
        "end": 828,
        "name": "C8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 829,
        "end": 855,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 835,
            "end": 853,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 835,
              "end": 844,
              "name": "property1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 844,
              "end": 852,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 846,
                "end": 852
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 857,
      "end": 879,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 861,
          "end": 878,
          "id": {
            "type": "Identifier",
            "start": 861,
            "end": 878,
            "name": "let4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 865,
              "end": 878,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 867,
                "end": 878,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 867,
                    "end": 869,
                    "typeName": {
                      "type": "Identifier",
                      "start": 867,
                      "end": 869,
                      "name": "C8",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 872,
                    "end": 878
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 880,
      "end": 931,
      "test": {
        "type": "BinaryExpression",
        "start": 884,
        "end": 907,
        "left": {
          "type": "MemberExpression",
          "start": 884,
          "end": 900,
          "object": {
            "type": "Identifier",
            "start": 884,
            "end": 888,
            "name": "let4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 889,
            "end": 900,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 905,
          "end": 907,
          "name": "C7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 909,
        "end": 931,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 915,
            "end": 920,
            "expression": {
              "type": "Identifier",
              "start": 915,
              "end": 919,
              "name": "let4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 932,
      "end": 980,
      "test": {
        "type": "BinaryExpression",
        "start": 936,
        "end": 959,
        "left": {
          "type": "MemberExpression",
          "start": 936,
          "end": 952,
          "object": {
            "type": "Identifier",
            "start": 936,
            "end": 940,
            "name": "let4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 941,
            "end": 952,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 957,
          "end": 959,
          "name": "C8",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 961,
        "end": 980,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 967,
            "end": 972,
            "expression": {
              "type": "Identifier",
              "start": 967,
              "end": 971,
              "name": "let4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
