__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "basey",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 33,
              "end": 35
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 36
          }
        ],
        "start": 11,
        "end": 38
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 54
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 67
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 86,
              "end": 88
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 74,
            "end": 89
          }
        ],
        "start": 68,
        "end": 91
      },
      "abstract": false,
      "declare": false,
      "start": 40,
      "end": 91
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 107
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 120
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 139,
              "end": 141
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 127,
            "end": 142
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 163,
              "end": 165
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 147,
            "end": 166
          }
        ],
        "start": 121,
        "end": 168
      },
      "abstract": false,
      "declare": false,
      "start": 93,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "classy",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 185
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 196
              },
              "typeArguments": null,
              "start": 192,
              "end": 196
            },
            "start": 190,
            "end": 196
          },
          "start": 186,
          "end": 196
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
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
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 219
                  },
                  "typeArguments": null,
                  "start": 211,
                  "end": 219
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 230
                  },
                  "typeArguments": null,
                  "start": 222,
                  "end": 230
                }
              ],
              "start": 211,
              "end": 230
            },
            "start": 209,
            "end": 230
          },
          "start": 198,
          "end": 230
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 246,
              "end": 250
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 271
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 291
                  },
                  "start": 267,
                  "end": 291
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 305,
                        "end": 309
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 311
                      },
                      "optional": false,
                      "computed": false,
                      "start": 305,
                      "end": 311
                    },
                    "directive": null,
                    "start": 305,
                    "end": 311
                  }
                ],
                "start": 262,
                "end": 311
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 368,
                        "end": 372
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "basey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 378
                      },
                      "optional": false,
                      "computed": false,
                      "start": 368,
                      "end": 378
                    },
                    "directive": null,
                    "start": 368,
                    "end": 378
                  }
                ],
                "start": 347,
                "end": 378
              }
            ],
            "start": 238,
            "end": 384
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 398,
              "end": 402
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someDerived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 430
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 450
                  },
                  "start": 419,
                  "end": 450
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 464,
                        "end": 475
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 476,
                        "end": 477
                      },
                      "optional": false,
                      "computed": false,
                      "start": 464,
                      "end": 477
                    },
                    "directive": null,
                    "start": 464,
                    "end": 477
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 490,
                    "end": 496
                  }
                ],
                "start": 414,
                "end": 496
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someDerived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 510,
                    "end": 521
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 541
                  },
                  "start": 510,
                  "end": 541
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 566
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 567,
                        "end": 568
                      },
                      "optional": false,
                      "computed": false,
                      "start": 555,
                      "end": 568
                    },
                    "directive": null,
                    "start": 555,
                    "end": 568
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 581,
                    "end": 586
                  }
                ],
                "start": 505,
                "end": 586
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "never",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 629,
                              "end": 634
                            },
                            "start": 627,
                            "end": 634
                          },
                          "start": 622,
                          "end": 634
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someDerived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 648
                        },
                        "definite": false,
                        "start": 622,
                        "end": 648
                      }
                    ],
                    "declare": false,
                    "start": 616,
                    "end": 649
                  }
                ],
                "start": 595,
                "end": 649
              }
            ],
            "start": 390,
            "end": 655
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 669,
              "end": 673
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someDerived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 701
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 721
                  },
                  "start": 690,
                  "end": 721
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 735,
                        "end": 746
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 747,
                        "end": 748
                      },
                      "optional": false,
                      "computed": false,
                      "start": 735,
                      "end": 748
                    },
                    "directive": null,
                    "start": 735,
                    "end": 748
                  }
                ],
                "start": 685,
                "end": 748
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someDerived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 789,
                    "end": 800
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 812,
                    "end": 820
                  },
                  "start": 789,
                  "end": 820
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 834,
                        "end": 845
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 846,
                        "end": 847
                      },
                      "optional": false,
                      "computed": false,
                      "start": 834,
                      "end": 847
                    },
                    "directive": null,
                    "start": 834,
                    "end": 847
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 860,
                    "end": 865
                  }
                ],
                "start": 784,
                "end": 865
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "never",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 908,
                              "end": 913
                            },
                            "start": 906,
                            "end": 913
                          },
                          "start": 901,
                          "end": 913
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someDerived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 916,
                          "end": 927
                        },
                        "definite": false,
                        "start": 901,
                        "end": 927
                      }
                    ],
                    "declare": false,
                    "start": 895,
                    "end": 928
                  }
                ],
                "start": 874,
                "end": 928
              }
            ],
            "start": 661,
            "end": 934
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 948,
              "end": 952
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "never",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 998,
                              "end": 1003
                            },
                            "start": 996,
                            "end": 1003
                          },
                          "start": 991,
                          "end": 1003
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someDerived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1006,
                          "end": 1017
                        },
                        "definite": false,
                        "start": 991,
                        "end": 1017
                      }
                    ],
                    "declare": false,
                    "start": 985,
                    "end": 1018
                  }
                ],
                "start": 964,
                "end": 1018
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someDerived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1032,
                    "end": 1043
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1055,
                    "end": 1063
                  },
                  "start": 1032,
                  "end": 1063
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1077,
                        "end": 1088
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1089,
                        "end": 1090
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1077,
                      "end": 1090
                    },
                    "directive": null,
                    "start": 1077,
                    "end": 1091
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1104,
                        "end": 1115
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "basey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1116,
                        "end": 1121
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1104,
                      "end": 1121
                    },
                    "directive": null,
                    "start": 1104,
                    "end": 1122
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1135,
                    "end": 1140
                  }
                ],
                "start": 1027,
                "end": 1140
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someDerived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1154,
                    "end": 1165
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1177,
                    "end": 1185
                  },
                  "start": 1154,
                  "end": 1185
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1199,
                        "end": 1210
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1211,
                        "end": 1212
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1199,
                      "end": 1212
                    },
                    "directive": null,
                    "start": 1199,
                    "end": 1213
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1226,
                        "end": 1237
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1238,
                        "end": 1243
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1226,
                      "end": 1243
                    },
                    "directive": null,
                    "start": 1226,
                    "end": 1244
                  }
                ],
                "start": 1149,
                "end": 1244
              }
            ],
            "start": 940,
            "end": 1250
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1264,
              "end": 1268
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someDerived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1285,
                    "end": 1296
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1316
                  },
                  "start": 1285,
                  "end": 1316
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1330,
                        "end": 1341
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1342,
                        "end": 1343
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1330,
                      "end": 1343
                    },
                    "directive": null,
                    "start": 1330,
                    "end": 1344
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1357,
                        "end": 1368
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "basey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1369,
                        "end": 1374
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1357,
                      "end": 1374
                    },
                    "directive": null,
                    "start": 1357,
                    "end": 1375
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1388,
                    "end": 1393
                  }
                ],
                "start": 1280,
                "end": 1393
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "never",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 1436,
                              "end": 1441
                            },
                            "start": 1434,
                            "end": 1441
                          },
                          "start": 1429,
                          "end": 1441
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someDerived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1444,
                          "end": 1455
                        },
                        "definite": false,
                        "start": 1429,
                        "end": 1455
                      }
                    ],
                    "declare": false,
                    "start": 1423,
                    "end": 1456
                  }
                ],
                "start": 1402,
                "end": 1456
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someDerived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1470,
                    "end": 1481
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1493,
                    "end": 1501
                  },
                  "start": 1470,
                  "end": 1501
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1515,
                        "end": 1526
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1527,
                        "end": 1528
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1515,
                      "end": 1528
                    },
                    "directive": null,
                    "start": 1515,
                    "end": 1529
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1542,
                        "end": 1553
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1554,
                        "end": 1559
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1542,
                      "end": 1559
                    },
                    "directive": null,
                    "start": 1542,
                    "end": 1560
                  }
                ],
                "start": 1465,
                "end": 1560
              }
            ],
            "start": 1256,
            "end": 1566
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1580,
              "end": 1584
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someDerived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1601,
                    "end": 1612
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1624,
                    "end": 1632
                  },
                  "start": 1601,
                  "end": 1632
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1646,
                        "end": 1657
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1658,
                        "end": 1659
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1646,
                      "end": 1659
                    },
                    "directive": null,
                    "start": 1646,
                    "end": 1660
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1673,
                        "end": 1684
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "basey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1685,
                        "end": 1690
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1673,
                      "end": 1690
                    },
                    "directive": null,
                    "start": 1673,
                    "end": 1691
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1704,
                    "end": 1709
                  }
                ],
                "start": 1596,
                "end": 1709
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someDerived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1723,
                    "end": 1734
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1746,
                    "end": 1754
                  },
                  "start": 1723,
                  "end": 1754
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1768,
                        "end": 1779
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1780,
                        "end": 1781
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1768,
                      "end": 1781
                    },
                    "directive": null,
                    "start": 1768,
                    "end": 1782
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1795,
                        "end": 1806
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1807,
                        "end": 1812
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1795,
                      "end": 1812
                    },
                    "directive": null,
                    "start": 1795,
                    "end": 1813
                  }
                ],
                "start": 1718,
                "end": 1813
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1843,
                        "end": 1854
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1855,
                        "end": 1856
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1843,
                      "end": 1856
                    },
                    "directive": null,
                    "start": 1843,
                    "end": 1857
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1870,
                        "end": 1881
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1882,
                        "end": 1887
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1870,
                      "end": 1887
                    },
                    "directive": null,
                    "start": 1870,
                    "end": 1888
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
                          "name": "never",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 1914,
                              "end": 1919
                            },
                            "start": 1912,
                            "end": 1919
                          },
                          "start": 1907,
                          "end": 1919
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someDerived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1922,
                          "end": 1933
                        },
                        "definite": false,
                        "start": 1907,
                        "end": 1933
                      }
                    ],
                    "declare": false,
                    "start": 1901,
                    "end": 1934
                  }
                ],
                "start": 1822,
                "end": 1934
              }
            ],
            "start": 1572,
            "end": 1940
          }
        ],
        "start": 232,
        "end": 1943
      },
      "expression": false,
      "start": 170,
      "end": 1943
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1943
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10,
    "range": [
      6,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "basey",
    "start": 17,
    "end": 22,
    "range": [
      17,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30,
    "range": [
      24,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 33,
    "end": 35,
    "range": [
      33,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 40,
    "end": 45,
    "range": [
      40,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 46,
    "end": 54,
    "range": [
      46,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 55,
    "end": 62,
    "range": [
      55,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 63,
    "end": 67,
    "range": [
      63,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 77,
    "end": 83,
    "range": [
      77,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 86,
    "end": 88,
    "range": [
      86,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 93,
    "end": 98,
    "range": [
      93,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 99,
    "end": 107,
    "range": [
      99,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 108,
    "end": 115,
    "range": [
      108,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 116,
    "end": 120,
    "range": [
      116,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 139,
    "end": 141,
    "range": [
      139,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 147,
    "end": 152,
    "range": [
      147,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 154,
    "end": 160,
    "range": [
      154,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 163,
    "end": 165,
    "range": [
      163,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178,
    "range": [
      170,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "classy",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 186,
    "end": 190,
    "range": [
      186,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 192,
    "end": 196,
    "range": [
      192,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 198,
    "end": 209,
    "range": [
      198,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 211,
    "end": 219,
    "range": [
      211,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 222,
    "end": 230,
    "range": [
      222,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 238,
    "end": 244,
    "range": [
      238,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 246,
    "end": 250,
    "range": [
      246,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 262,
    "end": 266,
    "range": [
      262,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 267,
    "end": 271,
    "range": [
      267,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 272,
    "end": 282,
    "range": [
      272,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 283,
    "end": 291,
    "range": [
      283,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 305,
    "end": 309,
    "range": [
      305,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 347,
    "end": 354,
    "range": [
      347,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 368,
    "end": 372,
    "range": [
      368,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "basey",
    "start": 373,
    "end": 378,
    "range": [
      373,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 390,
    "end": 396,
    "range": [
      390,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 398,
    "end": 402,
    "range": [
      398,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 414,
    "end": 418,
    "range": [
      414,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 419,
    "end": 430,
    "range": [
      419,
      430
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 431,
    "end": 441,
    "range": [
      431,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 442,
    "end": 450,
    "range": [
      442,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 464,
    "end": 475,
    "range": [
      464,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 490,
    "end": 495,
    "range": [
      490,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 505,
    "end": 509,
    "range": [
      505,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 510,
    "end": 521,
    "range": [
      510,
      521
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 522,
    "end": 532,
    "range": [
      522,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 533,
    "end": 541,
    "range": [
      533,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 555,
    "end": 566,
    "range": [
      555,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 581,
    "end": 586,
    "range": [
      581,
      586
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 595,
    "end": 602,
    "range": [
      595,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 616,
    "end": 621,
    "range": [
      616,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 622,
    "end": 627,
    "range": [
      622,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 629,
    "end": 634,
    "range": [
      629,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 637,
    "end": 648,
    "range": [
      637,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 661,
    "end": 667,
    "range": [
      661,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 669,
    "end": 673,
    "range": [
      669,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 685,
    "end": 689,
    "range": [
      685,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 690,
    "end": 701,
    "range": [
      690,
      701
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 702,
    "end": 712,
    "range": [
      702,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 713,
    "end": 721,
    "range": [
      713,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 735,
    "end": 746,
    "range": [
      735,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 784,
    "end": 788,
    "range": [
      784,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 789,
    "end": 800,
    "range": [
      789,
      800
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 801,
    "end": 811,
    "range": [
      801,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 812,
    "end": 820,
    "range": [
      812,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 834,
    "end": 845,
    "range": [
      834,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 860,
    "end": 865,
    "range": [
      860,
      865
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 874,
    "end": 881,
    "range": [
      874,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 895,
    "end": 900,
    "range": [
      895,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 901,
    "end": 906,
    "range": [
      901,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 908,
    "end": 913,
    "range": [
      908,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 916,
    "end": 927,
    "range": [
      916,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 940,
    "end": 946,
    "range": [
      940,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 948,
    "end": 952,
    "range": [
      948,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 964,
    "end": 971,
    "range": [
      964,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 985,
    "end": 990,
    "range": [
      985,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 991,
    "end": 996,
    "range": [
      991,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 998,
    "end": 1003,
    "range": [
      998,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1006,
    "end": 1017,
    "range": [
      1006,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1027,
    "end": 1031,
    "range": [
      1027,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1032,
    "end": 1043,
    "range": [
      1032,
      1043
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1044,
    "end": 1054,
    "range": [
      1044,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1055,
    "end": 1063,
    "range": [
      1055,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1077,
    "end": 1088,
    "range": [
      1077,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1104,
    "end": 1115,
    "range": [
      1104,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "basey",
    "start": 1116,
    "end": 1121,
    "range": [
      1116,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1135,
    "end": 1140,
    "range": [
      1135,
      1140
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1149,
    "end": 1153,
    "range": [
      1149,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1154,
    "end": 1165,
    "range": [
      1154,
      1165
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1166,
    "end": 1176,
    "range": [
      1166,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1177,
    "end": 1185,
    "range": [
      1177,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1199,
    "end": 1210,
    "range": [
      1199,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1226,
    "end": 1237,
    "range": [
      1226,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1238,
    "end": 1243,
    "range": [
      1238,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1256,
    "end": 1262,
    "range": [
      1256,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1264,
    "end": 1268,
    "range": [
      1264,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1280,
    "end": 1284,
    "range": [
      1280,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1285,
    "end": 1296,
    "range": [
      1285,
      1296
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1297,
    "end": 1307,
    "range": [
      1297,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1308,
    "end": 1316,
    "range": [
      1308,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1330,
    "end": 1341,
    "range": [
      1330,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1357,
    "end": 1368,
    "range": [
      1357,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Identifier",
    "value": "basey",
    "start": 1369,
    "end": 1374,
    "range": [
      1369,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1388,
    "end": 1393,
    "range": [
      1388,
      1393
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1402,
    "end": 1409,
    "range": [
      1402,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1423,
    "end": 1428,
    "range": [
      1423,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1429,
    "end": 1434,
    "range": [
      1429,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1436,
    "end": 1441,
    "range": [
      1436,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1444,
    "end": 1455,
    "range": [
      1444,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1465,
    "end": 1469,
    "range": [
      1465,
      1469
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1470,
    "end": 1481,
    "range": [
      1470,
      1481
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1482,
    "end": 1492,
    "range": [
      1482,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1493,
    "end": 1501,
    "range": [
      1493,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1515,
    "end": 1526,
    "range": [
      1515,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1542,
    "end": 1553,
    "range": [
      1542,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1554,
    "end": 1559,
    "range": [
      1554,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1572,
    "end": 1578,
    "range": [
      1572,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1580,
    "end": 1584,
    "range": [
      1580,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1596,
    "end": 1600,
    "range": [
      1596,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1601,
    "end": 1612,
    "range": [
      1601,
      1612
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1613,
    "end": 1623,
    "range": [
      1613,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1624,
    "end": 1632,
    "range": [
      1624,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1646,
    "end": 1657,
    "range": [
      1646,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1673,
    "end": 1684,
    "range": [
      1673,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Identifier",
    "value": "basey",
    "start": 1685,
    "end": 1690,
    "range": [
      1685,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1704,
    "end": 1709,
    "range": [
      1704,
      1709
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1718,
    "end": 1722,
    "range": [
      1718,
      1722
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1723,
    "end": 1734,
    "range": [
      1723,
      1734
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1735,
    "end": 1745,
    "range": [
      1735,
      1745
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1746,
    "end": 1754,
    "range": [
      1746,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1768,
    "end": 1779,
    "range": [
      1768,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1795,
    "end": 1806,
    "range": [
      1795,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1807,
    "end": 1812,
    "range": [
      1807,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1822,
    "end": 1829,
    "range": [
      1822,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1843,
    "end": 1854,
    "range": [
      1843,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1870,
    "end": 1881,
    "range": [
      1870,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1882,
    "end": 1887,
    "range": [
      1882,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1901,
    "end": 1906,
    "range": [
      1901,
      1906
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1907,
    "end": 1912,
    "range": [
      1907,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1914,
    "end": 1919,
    "range": [
      1914,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1922,
    "end": 1933,
    "range": [
      1922,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1942,
    "end": 1943,
    "range": [
      1942,
      1943
    ]
  }
]
```
