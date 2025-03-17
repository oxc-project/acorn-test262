__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1944,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 36,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 22,
              "name": "basey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 33,
              "end": 35,
              "value": "",
              "raw": "\"\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
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
      "start": 40,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 54,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 91,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 89,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 86,
              "end": 88,
              "value": "",
              "raw": "\"\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
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
      "start": 93,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 107,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 116,
        "end": 120,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 168,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 127,
            "end": 142,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 139,
              "end": 141,
              "value": "",
              "raw": "\"\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 152,
              "name": "other",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 163,
              "end": 165,
              "value": "",
              "raw": "\"\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
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
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 1943,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 185,
        "name": "classy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 186,
          "end": 196,
          "name": "base",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 196,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 196,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 196,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 198,
          "end": 230,
          "name": "someDerived",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 209,
            "end": 230,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 211,
              "end": 230,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 211,
                  "end": 219,
                  "typeName": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 219,
                    "name": "Derived1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 222,
                  "end": 230,
                  "typeName": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 230,
                    "name": "Derived2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 232,
        "end": 1943,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 238,
            "end": 384,
            "discriminant": {
              "type": "Literal",
              "start": 246,
              "end": 250,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 262,
                "end": 311,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 305,
                    "end": 311,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 305,
                      "end": 311,
                      "object": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 309,
                        "name": "base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 311,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 267,
                  "end": 291,
                  "left": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 271,
                    "name": "base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 291,
                    "name": "Derived1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 347,
                "end": 378,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 368,
                    "end": 378,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 368,
                      "end": 378,
                      "object": {
                        "type": "Identifier",
                        "start": 368,
                        "end": 372,
                        "name": "base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 378,
                        "name": "basey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ],
                "test": null
              }
            ]
          },
          {
            "type": "SwitchStatement",
            "start": 390,
            "end": 655,
            "discriminant": {
              "type": "Literal",
              "start": 398,
              "end": 402,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 414,
                "end": 496,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 464,
                    "end": 477,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 464,
                      "end": 477,
                      "object": {
                        "type": "Identifier",
                        "start": 464,
                        "end": 475,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 476,
                        "end": 477,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 490,
                    "end": 496,
                    "label": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 419,
                  "end": 450,
                  "left": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 430,
                    "name": "someDerived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 450,
                    "name": "Derived1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 505,
                "end": 586,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 555,
                    "end": 568,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 555,
                      "end": 568,
                      "object": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 566,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 567,
                        "end": 568,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 581,
                    "end": 586,
                    "label": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 510,
                  "end": 541,
                  "left": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 521,
                    "name": "someDerived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 541,
                    "name": "Derived2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 595,
                "end": 649,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 616,
                    "end": 649,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 622,
                        "end": 648,
                        "id": {
                          "type": "Identifier",
                          "start": 622,
                          "end": 634,
                          "name": "never",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 627,
                            "end": 634,
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 629,
                              "end": 634
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 648,
                          "name": "someDerived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ],
                "test": null
              }
            ]
          },
          {
            "type": "SwitchStatement",
            "start": 661,
            "end": 934,
            "discriminant": {
              "type": "Literal",
              "start": 669,
              "end": 673,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 685,
                "end": 748,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 735,
                    "end": 748,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 735,
                      "end": 748,
                      "object": {
                        "type": "Identifier",
                        "start": 735,
                        "end": 746,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 747,
                        "end": 748,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 690,
                  "end": 721,
                  "left": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 701,
                    "name": "someDerived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 721,
                    "name": "Derived1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 784,
                "end": 865,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 834,
                    "end": 847,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 834,
                      "end": 847,
                      "object": {
                        "type": "Identifier",
                        "start": 834,
                        "end": 845,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 846,
                        "end": 847,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 860,
                    "end": 865,
                    "label": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 789,
                  "end": 820,
                  "left": {
                    "type": "Identifier",
                    "start": 789,
                    "end": 800,
                    "name": "someDerived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 812,
                    "end": 820,
                    "name": "Derived2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 874,
                "end": 928,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 895,
                    "end": 928,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 901,
                        "end": 927,
                        "id": {
                          "type": "Identifier",
                          "start": 901,
                          "end": 913,
                          "name": "never",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 906,
                            "end": 913,
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 908,
                              "end": 913
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 916,
                          "end": 927,
                          "name": "someDerived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ],
                "test": null
              }
            ]
          },
          {
            "type": "SwitchStatement",
            "start": 940,
            "end": 1250,
            "discriminant": {
              "type": "Literal",
              "start": 948,
              "end": 952,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 964,
                "end": 1018,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 985,
                    "end": 1018,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 991,
                        "end": 1017,
                        "id": {
                          "type": "Identifier",
                          "start": 991,
                          "end": 1003,
                          "name": "never",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 996,
                            "end": 1003,
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 998,
                              "end": 1003
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1006,
                          "end": 1017,
                          "name": "someDerived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ],
                "test": null
              },
              {
                "type": "SwitchCase",
                "start": 1027,
                "end": 1140,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1077,
                    "end": 1091,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1077,
                      "end": 1090,
                      "object": {
                        "type": "Identifier",
                        "start": 1077,
                        "end": 1088,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1089,
                        "end": 1090,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1104,
                    "end": 1122,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1104,
                      "end": 1121,
                      "object": {
                        "type": "Identifier",
                        "start": 1104,
                        "end": 1115,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1116,
                        "end": 1121,
                        "name": "basey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1135,
                    "end": 1140,
                    "label": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 1032,
                  "end": 1063,
                  "left": {
                    "type": "Identifier",
                    "start": 1032,
                    "end": 1043,
                    "name": "someDerived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 1055,
                    "end": 1063,
                    "name": "Derived1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 1149,
                "end": 1244,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1199,
                    "end": 1213,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1199,
                      "end": 1212,
                      "object": {
                        "type": "Identifier",
                        "start": 1199,
                        "end": 1210,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1211,
                        "end": 1212,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1226,
                    "end": 1244,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1226,
                      "end": 1243,
                      "object": {
                        "type": "Identifier",
                        "start": 1226,
                        "end": 1237,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1238,
                        "end": 1243,
                        "name": "other",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 1154,
                  "end": 1185,
                  "left": {
                    "type": "Identifier",
                    "start": 1154,
                    "end": 1165,
                    "name": "someDerived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 1177,
                    "end": 1185,
                    "name": "Derived2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          {
            "type": "SwitchStatement",
            "start": 1256,
            "end": 1566,
            "discriminant": {
              "type": "Literal",
              "start": 1264,
              "end": 1268,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1280,
                "end": 1393,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1330,
                    "end": 1344,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1330,
                      "end": 1343,
                      "object": {
                        "type": "Identifier",
                        "start": 1330,
                        "end": 1341,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1342,
                        "end": 1343,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1357,
                    "end": 1375,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1357,
                      "end": 1374,
                      "object": {
                        "type": "Identifier",
                        "start": 1357,
                        "end": 1368,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1369,
                        "end": 1374,
                        "name": "basey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1388,
                    "end": 1393,
                    "label": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 1285,
                  "end": 1316,
                  "left": {
                    "type": "Identifier",
                    "start": 1285,
                    "end": 1296,
                    "name": "someDerived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 1308,
                    "end": 1316,
                    "name": "Derived1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 1402,
                "end": 1456,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1423,
                    "end": 1456,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1429,
                        "end": 1455,
                        "id": {
                          "type": "Identifier",
                          "start": 1429,
                          "end": 1441,
                          "name": "never",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1434,
                            "end": 1441,
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 1436,
                              "end": 1441
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1444,
                          "end": 1455,
                          "name": "someDerived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ],
                "test": null
              },
              {
                "type": "SwitchCase",
                "start": 1465,
                "end": 1560,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1515,
                    "end": 1529,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1515,
                      "end": 1528,
                      "object": {
                        "type": "Identifier",
                        "start": 1515,
                        "end": 1526,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1527,
                        "end": 1528,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1542,
                    "end": 1560,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1542,
                      "end": 1559,
                      "object": {
                        "type": "Identifier",
                        "start": 1542,
                        "end": 1553,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1554,
                        "end": 1559,
                        "name": "other",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 1470,
                  "end": 1501,
                  "left": {
                    "type": "Identifier",
                    "start": 1470,
                    "end": 1481,
                    "name": "someDerived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 1493,
                    "end": 1501,
                    "name": "Derived2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          {
            "type": "SwitchStatement",
            "start": 1572,
            "end": 1940,
            "discriminant": {
              "type": "Literal",
              "start": 1580,
              "end": 1584,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1596,
                "end": 1709,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1646,
                    "end": 1660,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1646,
                      "end": 1659,
                      "object": {
                        "type": "Identifier",
                        "start": 1646,
                        "end": 1657,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1658,
                        "end": 1659,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1673,
                    "end": 1691,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1673,
                      "end": 1690,
                      "object": {
                        "type": "Identifier",
                        "start": 1673,
                        "end": 1684,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1685,
                        "end": 1690,
                        "name": "basey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1704,
                    "end": 1709,
                    "label": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 1601,
                  "end": 1632,
                  "left": {
                    "type": "Identifier",
                    "start": 1601,
                    "end": 1612,
                    "name": "someDerived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 1624,
                    "end": 1632,
                    "name": "Derived1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 1718,
                "end": 1813,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1768,
                    "end": 1782,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1768,
                      "end": 1781,
                      "object": {
                        "type": "Identifier",
                        "start": 1768,
                        "end": 1779,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1780,
                        "end": 1781,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1795,
                    "end": 1813,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1795,
                      "end": 1812,
                      "object": {
                        "type": "Identifier",
                        "start": 1795,
                        "end": 1806,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1807,
                        "end": 1812,
                        "name": "other",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 1723,
                  "end": 1754,
                  "left": {
                    "type": "Identifier",
                    "start": 1723,
                    "end": 1734,
                    "name": "someDerived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 1746,
                    "end": 1754,
                    "name": "Derived2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 1822,
                "end": 1934,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1843,
                    "end": 1857,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1843,
                      "end": 1856,
                      "object": {
                        "type": "Identifier",
                        "start": 1843,
                        "end": 1854,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1855,
                        "end": 1856,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1870,
                    "end": 1888,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1870,
                      "end": 1887,
                      "object": {
                        "type": "Identifier",
                        "start": 1870,
                        "end": 1881,
                        "name": "someDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1882,
                        "end": 1887,
                        "name": "other",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1901,
                    "end": 1934,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1907,
                        "end": 1933,
                        "id": {
                          "type": "Identifier",
                          "start": 1907,
                          "end": 1919,
                          "name": "never",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1912,
                            "end": 1919,
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 1914,
                              "end": 1919
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1922,
                          "end": 1933,
                          "name": "someDerived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ],
                "test": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
