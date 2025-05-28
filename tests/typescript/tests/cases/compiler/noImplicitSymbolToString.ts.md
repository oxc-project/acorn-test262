__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 15,
  "end": 804,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 35,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 34,
            "decorators": [],
            "name": "symbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 28,
                "end": 34
              }
            }
          },
          "init": null,
          "definite": true
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 55,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 46,
            "end": 54,
            "value": "hello ",
            "raw": "\"hello \""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 95,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 74,
            "decorators": [],
            "name": "templateStr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 77,
            "end": 94,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 77,
                "end": 86,
                "value": {
                  "cooked": "hello ",
                  "raw": "hello "
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 92,
                "end": 94,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "start": 86,
                "end": 92,
                "decorators": [],
                "name": "symbol",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 132,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 111,
            "decorators": [],
            "name": "appendStr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 114,
            "end": 131,
            "left": {
              "type": "Literal",
              "start": 114,
              "end": 122,
              "value": "hello ",
              "raw": "\"hello \""
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 125,
              "end": 131,
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 147,
      "expression": {
        "type": "AssignmentExpression",
        "start": 133,
        "end": 146,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 133,
          "end": 136,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 140,
          "end": 146,
          "decorators": [],
          "name": "symbol",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 189,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 188,
            "decorators": [],
            "name": "symbolUnionNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 188,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 173,
                "end": 188,
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 173,
                    "end": 179
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 182,
                    "end": 188
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": true
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 190,
      "end": 230,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 229,
            "decorators": [],
            "name": "symbolUnionString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 229,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 214,
                "end": 229,
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 214,
                    "end": 220
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 223,
                    "end": 229
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": true
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 341,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 340,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 254,
            "decorators": [],
            "name": "templateStrUnion",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 257,
            "end": 340,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 257,
                "end": 278,
                "value": {
                  "cooked": "union with number ",
                  "raw": "union with number "
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 295,
                "end": 321,
                "value": {
                  "cooked": " and union with string ",
                  "raw": " and union with string "
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 338,
                "end": 340,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "start": 278,
                "end": 295,
                "decorators": [],
                "name": "symbolUnionNumber",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 321,
                "end": 338,
                "decorators": [],
                "name": "symbolUnionString",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 359,
      "end": 397,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 378,
        "decorators": [],
        "name": "StringOrSymbol",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 381,
        "end": 396,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 381,
            "end": 387
          },
          {
            "type": "TSSymbolKeyword",
            "start": 390,
            "end": 396
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 399,
      "end": 484,
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 414,
        "decorators": [],
        "name": "getKey",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 414,
        "end": 440,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 415,
            "end": 439,
            "name": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 439,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 439,
                "decorators": [],
                "name": "StringOrSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 441,
          "end": 447,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 444,
            "end": 447,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 446,
              "end": 447,
              "typeName": {
                "type": "Identifier",
                "start": 446,
                "end": 447,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 449,
        "end": 484,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 455,
            "end": 482,
            "argument": {
              "type": "TemplateLiteral",
              "start": 462,
              "end": 481,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 462,
                  "end": 465,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 468,
                  "end": 481,
                  "value": {
                    "cooked": " is the key",
                    "raw": " is the key"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 465,
                  "end": 468,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 486,
      "end": 644,
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 502,
        "decorators": [],
        "name": "getKey1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 502,
        "end": 520,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 503,
            "end": 519,
            "name": {
              "type": "Identifier",
              "start": 503,
              "end": 504,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSSymbolKeyword",
              "start": 513,
              "end": 519
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 521,
          "end": 527,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 524,
            "end": 527,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 526,
              "end": 527,
              "typeName": {
                "type": "Identifier",
                "start": 526,
                "end": 527,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 529,
        "end": 644,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 535,
            "end": 546,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 539,
                "end": 545,
                "id": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 545,
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 542,
                    "end": 545,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 544,
                      "end": 545,
                      "typeName": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 545,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": true
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 551,
            "end": 559,
            "expression": {
              "type": "TemplateLiteral",
              "start": 551,
              "end": 558,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 551,
                  "end": 554,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 556,
                  "end": 558,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 554,
                  "end": 556,
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 564,
            "end": 572,
            "expression": {
              "type": "BinaryExpression",
              "start": 564,
              "end": 571,
              "left": {
                "type": "Identifier",
                "start": 564,
                "end": 566,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 569,
                "end": 571,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 577,
            "end": 581,
            "expression": {
              "type": "UnaryExpression",
              "start": 577,
              "end": 580,
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "start": 578,
                "end": 580,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 587,
            "end": 607,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 591,
                "end": 606,
                "id": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 606,
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 594,
                    "end": 606,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 596,
                      "end": 606,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 596,
                          "end": 597,
                          "typeName": {
                            "type": "Identifier",
                            "start": 596,
                            "end": 597,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 600,
                          "end": 606
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": true
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 612,
            "end": 620,
            "expression": {
              "type": "TemplateLiteral",
              "start": 612,
              "end": 619,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 612,
                  "end": 615,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 617,
                  "end": 619,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 615,
                  "end": 617,
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 625,
            "end": 633,
            "expression": {
              "type": "BinaryExpression",
              "start": 625,
              "end": 632,
              "left": {
                "type": "Identifier",
                "start": 625,
                "end": 627,
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 630,
                "end": 632,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 638,
            "end": 642,
            "expression": {
              "type": "UnaryExpression",
              "start": 638,
              "end": 641,
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "start": 639,
                "end": 641,
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 646,
      "end": 804,
      "id": {
        "type": "Identifier",
        "start": 655,
        "end": 662,
        "decorators": [],
        "name": "getKey2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 662,
        "end": 680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 663,
            "end": 679,
            "name": {
              "type": "Identifier",
              "start": 663,
              "end": 664,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 673,
              "end": 679
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 681,
          "end": 687,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 684,
            "end": 687,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 686,
              "end": 687,
              "typeName": {
                "type": "Identifier",
                "start": 686,
                "end": 687,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 689,
        "end": 804,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 695,
            "end": 706,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 699,
                "end": 705,
                "id": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 705,
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 702,
                    "end": 705,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 704,
                      "end": 705,
                      "typeName": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 705,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": true
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 711,
            "end": 719,
            "expression": {
              "type": "TemplateLiteral",
              "start": 711,
              "end": 718,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 711,
                  "end": 714,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 716,
                  "end": 718,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 714,
                  "end": 716,
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 724,
            "end": 732,
            "expression": {
              "type": "BinaryExpression",
              "start": 724,
              "end": 731,
              "left": {
                "type": "Identifier",
                "start": 724,
                "end": 726,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 729,
                "end": 731,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 737,
            "end": 741,
            "expression": {
              "type": "UnaryExpression",
              "start": 737,
              "end": 740,
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "start": 738,
                "end": 740,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 747,
            "end": 767,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 751,
                "end": 766,
                "id": {
                  "type": "Identifier",
                  "start": 751,
                  "end": 766,
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 754,
                    "end": 766,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 756,
                      "end": 766,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 756,
                          "end": 757,
                          "typeName": {
                            "type": "Identifier",
                            "start": 756,
                            "end": 757,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSSymbolKeyword",
                          "start": 760,
                          "end": 766
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": true
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 772,
            "end": 780,
            "expression": {
              "type": "TemplateLiteral",
              "start": 772,
              "end": 779,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 772,
                  "end": 775,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 777,
                  "end": 779,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 775,
                  "end": 777,
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 785,
            "end": 793,
            "expression": {
              "type": "BinaryExpression",
              "start": 785,
              "end": 792,
              "left": {
                "type": "Identifier",
                "start": 785,
                "end": 787,
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 790,
                "end": 792,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 798,
            "end": 802,
            "expression": {
              "type": "UnaryExpression",
              "start": 798,
              "end": 801,
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "start": 799,
                "end": 801,
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
