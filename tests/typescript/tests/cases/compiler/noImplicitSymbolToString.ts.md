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
            "name": "symbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "start": 19,
            "end": 34
          },
          "init": null,
          "definite": true,
          "start": 19,
          "end": 34
        }
      ],
      "declare": false,
      "start": 15,
      "end": 35
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
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 43
          },
          "init": {
            "type": "Literal",
            "value": "hello ",
            "raw": "\"hello \"",
            "start": 46,
            "end": 54
          },
          "definite": false,
          "start": 40,
          "end": 54
        }
      ],
      "declare": false,
      "start": 36,
      "end": 55
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
            "name": "templateStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 74
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "hello ",
                  "cooked": "hello "
                },
                "tail": false,
                "start": 77,
                "end": 86
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 92,
                "end": 94
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 92
              }
            ],
            "start": 77,
            "end": 94
          },
          "definite": false,
          "start": 63,
          "end": 94
        }
      ],
      "declare": false,
      "start": 57,
      "end": 95
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
            "name": "appendStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 111
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "hello ",
              "raw": "\"hello \"",
              "start": 114,
              "end": 122
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 131
            },
            "start": 114,
            "end": 131
          },
          "definite": false,
          "start": 102,
          "end": 131
        }
      ],
      "declare": false,
      "start": 96,
      "end": 132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 136
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "symbol",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 146
        },
        "start": 133,
        "end": 146
      },
      "directive": null,
      "start": 133,
      "end": 147
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
            "name": "symbolUnionNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 173,
                "end": 188
              },
              "start": 171,
              "end": 188
            },
            "start": 153,
            "end": 188
          },
          "init": null,
          "definite": true,
          "start": 153,
          "end": 188
        }
      ],
      "declare": false,
      "start": 149,
      "end": 189
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
            "name": "symbolUnionString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 214,
                "end": 229
              },
              "start": 212,
              "end": 229
            },
            "start": 194,
            "end": 229
          },
          "init": null,
          "definite": true,
          "start": 194,
          "end": 229
        }
      ],
      "declare": false,
      "start": 190,
      "end": 230
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
            "name": "templateStrUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 254
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "union with number ",
                  "cooked": "union with number "
                },
                "tail": false,
                "start": 257,
                "end": 278
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " and union with string ",
                  "cooked": " and union with string "
                },
                "tail": false,
                "start": 295,
                "end": 321
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 338,
                "end": 340
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "symbolUnionNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 295
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "symbolUnionString",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 338
              }
            ],
            "start": 257,
            "end": 340
          },
          "definite": false,
          "start": 238,
          "end": 340
        }
      ],
      "declare": false,
      "start": 232,
      "end": 341
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringOrSymbol",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 378
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
        ],
        "start": 381,
        "end": 396
      },
      "declare": false,
      "start": 359,
      "end": 397
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 408,
        "end": 414
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 416
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringOrSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 439
              },
              "typeArguments": null,
              "start": 425,
              "end": 439
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 415,
            "end": 439
          }
        ],
        "start": 414,
        "end": 440
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 447
              },
              "typeArguments": null,
              "start": 446,
              "end": 447
            },
            "start": 444,
            "end": 447
          },
          "start": 441,
          "end": 447
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 462,
                  "end": 465
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " is the key",
                    "cooked": " is the key"
                  },
                  "tail": true,
                  "start": 468,
                  "end": 481
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 468
                }
              ],
              "start": 462,
              "end": 481
            },
            "start": 455,
            "end": 482
          }
        ],
        "start": 449,
        "end": 484
      },
      "expression": false,
      "start": 399,
      "end": 484
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getKey1",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 502
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 504
            },
            "constraint": {
              "type": "TSSymbolKeyword",
              "start": 513,
              "end": 519
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 503,
            "end": 519
          }
        ],
        "start": 502,
        "end": 520
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 527
              },
              "typeArguments": null,
              "start": 526,
              "end": 527
            },
            "start": 524,
            "end": 527
          },
          "start": 521,
          "end": 527
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 545
                      },
                      "typeArguments": null,
                      "start": 544,
                      "end": 545
                    },
                    "start": 542,
                    "end": 545
                  },
                  "start": 539,
                  "end": 545
                },
                "init": null,
                "definite": true,
                "start": 539,
                "end": 545
              }
            ],
            "declare": false,
            "start": 535,
            "end": 546
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 551,
                  "end": 554
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 556,
                  "end": 558
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 556
                }
              ],
              "start": 551,
              "end": 558
            },
            "directive": null,
            "start": 551,
            "end": 559
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 566
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 569,
                "end": 571
              },
              "start": 564,
              "end": 571
            },
            "directive": null,
            "start": 564,
            "end": 572
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 580
              },
              "prefix": true,
              "start": 577,
              "end": 580
            },
            "directive": null,
            "start": 577,
            "end": 581
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
                  "name": "s2",
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
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 596,
                            "end": 597
                          },
                          "typeArguments": null,
                          "start": 596,
                          "end": 597
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 600,
                          "end": 606
                        }
                      ],
                      "start": 596,
                      "end": 606
                    },
                    "start": 594,
                    "end": 606
                  },
                  "start": 591,
                  "end": 606
                },
                "init": null,
                "definite": true,
                "start": 591,
                "end": 606
              }
            ],
            "declare": false,
            "start": 587,
            "end": 607
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 612,
                  "end": 615
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 617,
                  "end": 619
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 615,
                  "end": 617
                }
              ],
              "start": 612,
              "end": 619
            },
            "directive": null,
            "start": 612,
            "end": 620
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 627
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 630,
                "end": 632
              },
              "start": 625,
              "end": 632
            },
            "directive": null,
            "start": 625,
            "end": 633
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 641
              },
              "prefix": true,
              "start": 638,
              "end": 641
            },
            "directive": null,
            "start": 638,
            "end": 642
          }
        ],
        "start": 529,
        "end": 644
      },
      "expression": false,
      "start": 486,
      "end": 644
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getKey2",
        "optional": false,
        "typeAnnotation": null,
        "start": 655,
        "end": 662
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 664
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 673,
              "end": 679
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 663,
            "end": 679
          }
        ],
        "start": 662,
        "end": 680
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 687
              },
              "typeArguments": null,
              "start": 686,
              "end": 687
            },
            "start": 684,
            "end": 687
          },
          "start": 681,
          "end": 687
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 704,
                        "end": 705
                      },
                      "typeArguments": null,
                      "start": 704,
                      "end": 705
                    },
                    "start": 702,
                    "end": 705
                  },
                  "start": 699,
                  "end": 705
                },
                "init": null,
                "definite": true,
                "start": 699,
                "end": 705
              }
            ],
            "declare": false,
            "start": 695,
            "end": 706
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 711,
                  "end": 714
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 716,
                  "end": 718
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 716
                }
              ],
              "start": 711,
              "end": 718
            },
            "directive": null,
            "start": 711,
            "end": 719
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 726
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 729,
                "end": 731
              },
              "start": 724,
              "end": 731
            },
            "directive": null,
            "start": 724,
            "end": 732
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 738,
                "end": 740
              },
              "prefix": true,
              "start": 737,
              "end": 740
            },
            "directive": null,
            "start": 737,
            "end": 741
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
                  "name": "s2",
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
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 756,
                            "end": 757
                          },
                          "typeArguments": null,
                          "start": 756,
                          "end": 757
                        },
                        {
                          "type": "TSSymbolKeyword",
                          "start": 760,
                          "end": 766
                        }
                      ],
                      "start": 756,
                      "end": 766
                    },
                    "start": 754,
                    "end": 766
                  },
                  "start": 751,
                  "end": 766
                },
                "init": null,
                "definite": true,
                "start": 751,
                "end": 766
              }
            ],
            "declare": false,
            "start": 747,
            "end": 767
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 772,
                  "end": 775
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 777,
                  "end": 779
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 777
                }
              ],
              "start": 772,
              "end": 779
            },
            "directive": null,
            "start": 772,
            "end": 780
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 787
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 790,
                "end": 792
              },
              "start": 785,
              "end": 792
            },
            "directive": null,
            "start": 785,
            "end": 793
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 801
              },
              "prefix": true,
              "start": 798,
              "end": 801
            },
            "directive": null,
            "start": 798,
            "end": 802
          }
        ],
        "start": 689,
        "end": 804
      },
      "expression": false,
      "start": 646,
      "end": 804
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 15,
  "end": 804
}
```
