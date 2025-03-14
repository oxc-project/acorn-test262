__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 15,
  "end": 805,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 34,
          "definite": true,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "str",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 46,
            "end": 54,
            "raw": "\"hello \"",
            "value": "hello "
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 74,
            "decorators": [],
            "name": "templateStr",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 77,
            "end": 94,
            "expressions": [
              {
                "type": "Identifier",
                "start": 86,
                "end": 92,
                "decorators": [],
                "name": "symbol",
                "optional": false
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 77,
                "end": 86,
                "tail": false,
                "value": {
                  "cooked": "hello ",
                  "raw": "hello "
                }
              },
              {
                "type": "TemplateElement",
                "start": 92,
                "end": 94,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 111,
            "decorators": [],
            "name": "appendStr",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 114,
            "end": 131,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 114,
              "end": 122,
              "raw": "\"hello \"",
              "value": "hello "
            },
            "right": {
              "type": "Identifier",
              "start": 125,
              "end": 131,
              "decorators": [],
              "name": "symbol",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 140,
          "end": 146,
          "decorators": [],
          "name": "symbol",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 188,
          "definite": true,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 190,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 229,
          "definite": true,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 340,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 254,
            "decorators": [],
            "name": "templateStrUnion",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 257,
            "end": 340,
            "expressions": [
              {
                "type": "Identifier",
                "start": 278,
                "end": 295,
                "decorators": [],
                "name": "symbolUnionNumber",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 321,
                "end": 338,
                "decorators": [],
                "name": "symbolUnionString",
                "optional": false
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 257,
                "end": 278,
                "tail": false,
                "value": {
                  "cooked": "union with number ",
                  "raw": "union with number "
                }
              },
              {
                "type": "TemplateElement",
                "start": 295,
                "end": 321,
                "tail": false,
                "value": {
                  "cooked": " and union with string ",
                  "raw": " and union with string "
                }
              },
              {
                "type": "TemplateElement",
                "start": 338,
                "end": 340,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 359,
      "end": 397,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 378,
        "decorators": [],
        "name": "StringOrSymbol",
        "optional": false
      },
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 399,
      "end": 484,
      "async": false,
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
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 465,
                  "end": 468,
                  "decorators": [],
                  "name": "key",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 462,
                  "end": 465,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 468,
                  "end": 481,
                  "tail": true,
                  "value": {
                    "cooked": " is the key",
                    "raw": " is the key"
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 414,
        "decorators": [],
        "name": "getKey",
        "optional": false
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
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 414,
        "end": 440,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 415,
            "end": 439,
            "const": false,
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
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 486,
      "end": 644,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 529,
        "end": 644,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 535,
            "end": 546,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 539,
                "end": 545,
                "definite": true,
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
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 551,
            "end": 559,
            "expression": {
              "type": "TemplateLiteral",
              "start": 551,
              "end": 558,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 554,
                  "end": 556,
                  "decorators": [],
                  "name": "s1",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 551,
                  "end": 554,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 556,
                  "end": 558,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 564,
            "end": 572,
            "expression": {
              "type": "BinaryExpression",
              "start": 564,
              "end": 571,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 564,
                "end": 566,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 569,
                "end": 571,
                "raw": "''",
                "value": ""
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 577,
            "end": 581,
            "expression": {
              "type": "UnaryExpression",
              "start": 577,
              "end": 580,
              "argument": {
                "type": "Identifier",
                "start": 578,
                "end": 580,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              "operator": "+",
              "prefix": true
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 587,
            "end": 607,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 591,
                "end": 606,
                "definite": true,
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
                            "optional": false
                          }
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 612,
            "end": 620,
            "expression": {
              "type": "TemplateLiteral",
              "start": 612,
              "end": 619,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 615,
                  "end": 617,
                  "decorators": [],
                  "name": "s2",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 612,
                  "end": 615,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 617,
                  "end": 619,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 625,
            "end": 633,
            "expression": {
              "type": "BinaryExpression",
              "start": 625,
              "end": 632,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 625,
                "end": 627,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 630,
                "end": 632,
                "raw": "''",
                "value": ""
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 638,
            "end": 642,
            "expression": {
              "type": "UnaryExpression",
              "start": 638,
              "end": 641,
              "argument": {
                "type": "Identifier",
                "start": 639,
                "end": 641,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "operator": "+",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 502,
        "decorators": [],
        "name": "getKey1",
        "optional": false
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
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 502,
        "end": 520,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 503,
            "end": 519,
            "const": false,
            "constraint": {
              "type": "TSSymbolKeyword",
              "start": 513,
              "end": 519
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 503,
              "end": 504,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 646,
      "end": 804,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 689,
        "end": 804,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 695,
            "end": 706,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 699,
                "end": 705,
                "definite": true,
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
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 711,
            "end": 719,
            "expression": {
              "type": "TemplateLiteral",
              "start": 711,
              "end": 718,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 714,
                  "end": 716,
                  "decorators": [],
                  "name": "s1",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 711,
                  "end": 714,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 716,
                  "end": 718,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 724,
            "end": 732,
            "expression": {
              "type": "BinaryExpression",
              "start": 724,
              "end": 731,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 724,
                "end": 726,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 729,
                "end": 731,
                "raw": "''",
                "value": ""
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 737,
            "end": 741,
            "expression": {
              "type": "UnaryExpression",
              "start": 737,
              "end": 740,
              "argument": {
                "type": "Identifier",
                "start": 738,
                "end": 740,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              "operator": "+",
              "prefix": true
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 747,
            "end": 767,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 751,
                "end": 766,
                "definite": true,
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
                            "optional": false
                          }
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 772,
            "end": 780,
            "expression": {
              "type": "TemplateLiteral",
              "start": 772,
              "end": 779,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 775,
                  "end": 777,
                  "decorators": [],
                  "name": "s2",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 772,
                  "end": 775,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 777,
                  "end": 779,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 785,
            "end": 793,
            "expression": {
              "type": "BinaryExpression",
              "start": 785,
              "end": 792,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 785,
                "end": 787,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 790,
                "end": 792,
                "raw": "''",
                "value": ""
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 798,
            "end": 802,
            "expression": {
              "type": "UnaryExpression",
              "start": 798,
              "end": 801,
              "argument": {
                "type": "Identifier",
                "start": 799,
                "end": 801,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "operator": "+",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 655,
        "end": 662,
        "decorators": [],
        "name": "getKey2",
        "optional": false
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
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 662,
        "end": 680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 663,
            "end": 679,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 673,
              "end": 679
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 663,
              "end": 664,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
