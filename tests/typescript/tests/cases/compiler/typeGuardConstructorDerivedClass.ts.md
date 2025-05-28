__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 43,
  "end": 980,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 78,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 51,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 78,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 76,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 67,
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 126,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 88,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 97,
        "end": 99,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 100,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 124,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 115,
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 150,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 149,
            "decorators": [],
            "name": "var1",
            "optional": false,
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
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 171,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 176,
          "end": 178,
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 210,
                "end": 219,
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 241,
            "end": 252,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 257,
          "end": 259,
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 288,
                "end": 297,
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 363,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 364,
        "end": 366,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 368,
      "end": 390,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 374,
        "end": 376,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 385,
        "end": 387,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 388,
        "end": 390,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 414,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 413,
            "decorators": [],
            "name": "var2",
            "optional": false,
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
                      "decorators": [],
                      "name": "C4",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 424,
            "end": 435,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 440,
          "end": 442,
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 476,
            "end": 487,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 492,
          "end": 494,
          "decorators": [],
          "name": "C4",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 558,
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 559,
        "end": 585,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 565,
            "end": 583,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 565,
              "end": 574,
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 587,
      "end": 622,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 593,
        "end": 595,
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 596,
        "end": 622,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 602,
            "end": 620,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 611,
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 624,
      "end": 646,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 628,
          "end": 645,
          "id": {
            "type": "Identifier",
            "start": 628,
            "end": 645,
            "decorators": [],
            "name": "let3",
            "optional": false,
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
                      "decorators": [],
                      "name": "C6",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "let3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 656,
            "end": 667,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 672,
          "end": 674,
          "decorators": [],
          "name": "C5",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "let3",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "let3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 708,
            "end": 719,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 724,
          "end": 726,
          "decorators": [],
          "name": "C6",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "let3",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 790,
        "end": 792,
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 793,
        "end": 818,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 799,
            "end": 816,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 799,
              "end": 808,
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 820,
      "end": 855,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 826,
        "end": 828,
        "decorators": [],
        "name": "C8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 829,
        "end": 855,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 835,
            "end": 853,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 835,
              "end": 844,
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 857,
      "end": 879,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 861,
          "end": 878,
          "id": {
            "type": "Identifier",
            "start": 861,
            "end": 878,
            "decorators": [],
            "name": "let4",
            "optional": false,
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
                      "decorators": [],
                      "name": "C8",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "let4",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 889,
            "end": 900,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 905,
          "end": 907,
          "decorators": [],
          "name": "C7",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "let4",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "let4",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 941,
            "end": 952,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 957,
          "end": 959,
          "decorators": [],
          "name": "C8",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "let4",
              "optional": false,
              "typeAnnotation": null
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
