__ESTREE_TEST__:PASS:
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
