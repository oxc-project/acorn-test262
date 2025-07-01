__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "createScopedActionType",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 67
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 71,
                    "end": 72
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 81,
                    "end": 87
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 71,
                  "end": 87
                }
              ],
              "start": 70,
              "end": 88
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "scope",
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
                      "start": 96,
                      "end": 97
                    },
                    "typeArguments": null,
                    "start": 96,
                    "end": 97
                  },
                  "start": 94,
                  "end": 97
                },
                "start": 89,
                "end": 97
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
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
                      "start": 103,
                      "end": 104
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 113,
                      "end": 119
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 103,
                    "end": 119
                  }
                ],
                "start": 102,
                "end": 120
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 128
                      },
                      "typeArguments": null,
                      "start": 127,
                      "end": 128
                    },
                    "start": 125,
                    "end": 128
                  },
                  "start": 121,
                  "end": 128
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSAsExpression",
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
                      "start": 133,
                      "end": 136
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "/",
                        "cooked": "/"
                      },
                      "tail": false,
                      "start": 141,
                      "end": 145
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 149,
                      "end": 151
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "scope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 141
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 149
                    }
                  ],
                  "start": 133,
                  "end": 151
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 155,
                      "end": 158
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "/",
                        "cooked": "/"
                      },
                      "tail": false,
                      "start": 159,
                      "end": 163
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 164,
                      "end": 166
                    }
                  ],
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 159
                      },
                      "typeArguments": null,
                      "start": 158,
                      "end": 159
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 164
                      },
                      "typeArguments": null,
                      "start": 163,
                      "end": 164
                    }
                  ],
                  "start": 155,
                  "end": 166
                },
                "start": 133,
                "end": 166
              },
              "id": null,
              "generator": false,
              "start": 102,
              "end": 166
            },
            "id": null,
            "generator": false,
            "start": 70,
            "end": 166
          },
          "definite": false,
          "start": 45,
          "end": 166
        }
      ],
      "declare": false,
      "start": 39,
      "end": 167
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
            "name": "createActionInMyScope",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 195
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createScopedActionType",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 220
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "MyScope",
                "raw": "\"MyScope\"",
                "start": 221,
                "end": 230
              }
            ],
            "optional": false,
            "start": 198,
            "end": 231
          },
          "definite": false,
          "start": 174,
          "end": 231
        }
      ],
      "declare": false,
      "start": 168,
      "end": 232
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
            "name": "MY_ACTION",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 298
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createActionInMyScope",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 322
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "MY_ACTION",
                "raw": "\"MY_ACTION\"",
                "start": 323,
                "end": 334
              }
            ],
            "optional": false,
            "start": 301,
            "end": 335
          },
          "definite": false,
          "start": 289,
          "end": 335
        }
      ],
      "declare": false,
      "start": 283,
      "end": 336
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventName",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 428
      },
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
              "start": 429,
              "end": 430
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 439,
              "end": 445
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 429,
            "end": 445
          }
        ],
        "start": 428,
        "end": 446
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 449,
            "end": 452
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "Changed",
              "cooked": "Changed"
            },
            "tail": true,
            "start": 453,
            "end": 462
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "typeArguments": null,
            "start": 452,
            "end": 453
          }
        ],
        "start": 449,
        "end": 462
      },
      "declare": false,
      "start": 414,
      "end": 463
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EN1",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 472
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "EventName",
          "optional": false,
          "typeAnnotation": null,
          "start": 475,
          "end": 484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Foo",
                    "raw": "'Foo'",
                    "start": 485,
                    "end": 490
                  },
                  "start": 485,
                  "end": 490
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Bar",
                    "raw": "'Bar'",
                    "start": 493,
                    "end": 498
                  },
                  "start": 493,
                  "end": 498
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Baz",
                    "raw": "'Baz'",
                    "start": 501,
                    "end": 506
                  },
                  "start": 501,
                  "end": 506
                }
              ],
              "start": 485,
              "end": 506
            }
          ],
          "start": 484,
          "end": 507
        },
        "start": 475,
        "end": 507
      },
      "declare": false,
      "start": 464,
      "end": 508
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Loc",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 517
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 520,
            "end": 523
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false,
            "start": 550,
            "end": 554
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 581,
            "end": 583
          }
        ],
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "top",
                  "raw": "'top'",
                  "start": 523,
                  "end": 528
                },
                "start": 523,
                "end": 528
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "middle",
                  "raw": "'middle'",
                  "start": 531,
                  "end": 539
                },
                "start": 531,
                "end": 539
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bottom",
                  "raw": "'bottom'",
                  "start": 542,
                  "end": 550
                },
                "start": 542,
                "end": 550
              }
            ],
            "start": 523,
            "end": 550
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "left",
                  "raw": "'left'",
                  "start": 554,
                  "end": 560
                },
                "start": 554,
                "end": 560
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "center",
                  "raw": "'center'",
                  "start": 563,
                  "end": 571
                },
                "start": 563,
                "end": 571
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "right",
                  "raw": "'right'",
                  "start": 574,
                  "end": 581
                },
                "start": 574,
                "end": 581
              }
            ],
            "start": 554,
            "end": 581
          }
        ],
        "start": 520,
        "end": 583
      },
      "declare": false,
      "start": 509,
      "end": 584
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToString",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 656
      },
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
              "start": 657,
              "end": 658
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 667,
                  "end": 673
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 676,
                  "end": 682
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 685,
                  "end": 692
                },
                {
                  "type": "TSBigIntKeyword",
                  "start": 695,
                  "end": 701
                }
              ],
              "start": 667,
              "end": 701
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 657,
            "end": 701
          }
        ],
        "start": 656,
        "end": 702
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 705,
            "end": 708
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 709,
            "end": 711
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 709
            },
            "typeArguments": null,
            "start": 708,
            "end": 709
          }
        ],
        "start": 705,
        "end": 711
      },
      "declare": false,
      "start": 643,
      "end": 712
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS1",
        "optional": false,
        "typeAnnotation": null,
        "start": 718,
        "end": 721
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToString",
          "optional": false,
          "typeAnnotation": null,
          "start": 724,
          "end": 732
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "'abc'",
                    "start": 733,
                    "end": 738
                  },
                  "start": 733,
                  "end": 738
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 741,
                    "end": 743
                  },
                  "start": 741,
                  "end": 743
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 746,
                    "end": 750
                  },
                  "start": 746,
                  "end": 750
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "1234n",
                      "bigint": "1234",
                      "start": 754,
                      "end": 759
                    },
                    "prefix": true,
                    "start": 753,
                    "end": 759
                  },
                  "start": 753,
                  "end": 759
                }
              ],
              "start": 733,
              "end": 759
            }
          ],
          "start": 732,
          "end": 760
        },
        "start": 724,
        "end": 760
      },
      "declare": false,
      "start": 713,
      "end": 761
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL1",
        "optional": false,
        "typeAnnotation": null,
        "start": 815,
        "end": 818
      },
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
              "start": 819,
              "end": 820
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 829,
              "end": 835
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 819,
            "end": 835
          }
        ],
        "start": 818,
        "end": 836
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "a",
              "cooked": "a"
            },
            "tail": false,
            "start": 839,
            "end": 843
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "b",
              "cooked": "b"
            },
            "tail": false,
            "start": 844,
            "end": 848
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "c",
              "cooked": "c"
            },
            "tail": true,
            "start": 849,
            "end": 852
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 844
            },
            "typeArguments": null,
            "start": 843,
            "end": 844
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 848,
              "end": 849
            },
            "typeArguments": null,
            "start": 848,
            "end": 849
          }
        ],
        "start": 839,
        "end": 852
      },
      "declare": false,
      "start": 810,
      "end": 853
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL2",
        "optional": false,
        "typeAnnotation": null,
        "start": 859,
        "end": 862
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 864
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 873,
              "end": 879
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 863,
            "end": 879
          }
        ],
        "start": 862,
        "end": 880
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TL1",
          "optional": false,
          "typeAnnotation": null,
          "start": 883,
          "end": 886
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "x",
                    "cooked": "x"
                  },
                  "tail": false,
                  "start": 887,
                  "end": 891
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "y",
                    "cooked": "y"
                  },
                  "tail": true,
                  "start": 892,
                  "end": 895
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 892
                  },
                  "typeArguments": null,
                  "start": 891,
                  "end": 892
                }
              ],
              "start": 887,
              "end": 895
            }
          ],
          "start": 886,
          "end": 896
        },
        "start": 883,
        "end": 896
      },
      "declare": false,
      "start": 854,
      "end": 897
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL3",
        "optional": false,
        "typeAnnotation": null,
        "start": 925,
        "end": 928
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TL2",
          "optional": false,
          "typeAnnotation": null,
          "start": 931,
          "end": 934
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "o",
                "raw": "'o'",
                "start": 935,
                "end": 938
              },
              "start": 935,
              "end": 938
            }
          ],
          "start": 934,
          "end": 939
        },
        "start": 931,
        "end": 939
      },
      "declare": false,
      "start": 920,
      "end": 940
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cases",
        "optional": false,
        "typeAnnotation": null,
        "start": 985,
        "end": 990
      },
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
              "start": 991,
              "end": 992
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1001,
              "end": 1007
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 991,
            "end": 1007
          }
        ],
        "start": 990,
        "end": 1008
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 1011,
            "end": 1014
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 1026,
            "end": 1030
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 1042,
            "end": 1046
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 1059,
            "end": 1063
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 1078,
            "end": 1080
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1023
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1024,
                    "end": 1025
                  },
                  "typeArguments": null,
                  "start": 1024,
                  "end": 1025
                }
              ],
              "start": 1023,
              "end": 1026
            },
            "start": 1014,
            "end": 1026
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1039
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1041
                  },
                  "typeArguments": null,
                  "start": 1040,
                  "end": 1041
                }
              ],
              "start": 1039,
              "end": 1042
            },
            "start": 1030,
            "end": 1042
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 1046,
              "end": 1056
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1057,
                    "end": 1058
                  },
                  "typeArguments": null,
                  "start": 1057,
                  "end": 1058
                }
              ],
              "start": 1056,
              "end": 1059
            },
            "start": 1046,
            "end": 1059
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uncapitalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1075
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1076,
                    "end": 1077
                  },
                  "typeArguments": null,
                  "start": 1076,
                  "end": 1077
                }
              ],
              "start": 1075,
              "end": 1078
            },
            "start": 1063,
            "end": 1078
          }
        ],
        "start": 1011,
        "end": 1080
      },
      "declare": false,
      "start": 980,
      "end": 1081
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TCA1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1088,
        "end": 1092
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cases",
          "optional": false,
          "typeAnnotation": null,
          "start": 1095,
          "end": 1100
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 1101,
                "end": 1106
              },
              "start": 1101,
              "end": 1106
            }
          ],
          "start": 1100,
          "end": 1107
        },
        "start": 1095,
        "end": 1107
      },
      "declare": false,
      "start": 1083,
      "end": 1108
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TCA2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1136,
        "end": 1140
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cases",
          "optional": false,
          "typeAnnotation": null,
          "start": 1143,
          "end": 1148
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "BAR",
                "raw": "'BAR'",
                "start": 1149,
                "end": 1154
              },
              "start": 1149,
              "end": 1154
            }
          ],
          "start": 1148,
          "end": 1155
        },
        "start": 1143,
        "end": 1155
      },
      "declare": false,
      "start": 1131,
      "end": 1156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1211
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1213
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1222,
                    "end": 1227
                  },
                  "start": 1222,
                  "end": 1227
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 1230,
                    "end": 1235
                  },
                  "start": 1230,
                  "end": 1235
                }
              ],
              "start": 1222,
              "end": 1235
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1212,
            "end": 1235
          }
        ],
        "start": 1211,
        "end": 1236
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "get",
                    "cooked": "get"
                  },
                  "tail": false,
                  "start": 1243,
                  "end": 1249
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1262,
                  "end": 1264
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Capitalize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1249,
                    "end": 1259
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1260,
                          "end": 1261
                        },
                        "typeArguments": null,
                        "start": 1260,
                        "end": 1261
                      }
                    ],
                    "start": 1259,
                    "end": 1262
                  },
                  "start": 1249,
                  "end": 1262
                }
              ],
              "start": 1243,
              "end": 1264
            },
            "start": 1241,
            "end": 1264
          },
          "start": 1237,
          "end": 1264
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
                      "type": "TSStringKeyword",
                      "start": 1280,
                      "end": 1286
                    },
                    "start": 1278,
                    "end": 1286
                  },
                  "start": 1276,
                  "end": 1286
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1289,
                  "end": 1293
                },
                "definite": false,
                "start": 1276,
                "end": 1293
              }
            ],
            "declare": false,
            "start": 1272,
            "end": 1294
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "getFoo",
                            "raw": "'getFoo'",
                            "start": 1307,
                            "end": 1315
                          },
                          "start": 1307,
                          "end": 1315
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "getBar",
                            "raw": "'getBar'",
                            "start": 1318,
                            "end": 1326
                          },
                          "start": 1318,
                          "end": 1326
                        }
                      ],
                      "start": 1307,
                      "end": 1326
                    },
                    "start": 1305,
                    "end": 1326
                  },
                  "start": 1303,
                  "end": 1326
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1329,
                  "end": 1333
                },
                "definite": false,
                "start": 1303,
                "end": 1333
              }
            ],
            "declare": false,
            "start": 1299,
            "end": 1334
          }
        ],
        "start": 1266,
        "end": 1336
      },
      "expression": false,
      "start": 1198,
      "end": 1336
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1347,
        "end": 1350
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1351,
              "end": 1352
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1351,
            "end": 1352
          }
        ],
        "start": 1350,
        "end": 1353
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1357,
                "end": 1358
              },
              "typeArguments": null,
              "start": 1357,
              "end": 1358
            },
            "start": 1355,
            "end": 1358
          },
          "start": 1354,
          "end": 1358
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1366,
                "end": 1367
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1377,
                    "end": 1378
                  },
                  "typeArguments": null,
                  "start": 1377,
                  "end": 1378
                },
                "start": 1371,
                "end": 1378
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1381,
                    "end": 1382
                  },
                  "typeArguments": null,
                  "start": 1381,
                  "end": 1382
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1383,
                    "end": 1384
                  },
                  "typeArguments": null,
                  "start": 1383,
                  "end": 1384
                },
                "start": 1381,
                "end": 1385
              },
              "optional": false,
              "readonly": null,
              "start": 1363,
              "end": 1387
            },
            "start": 1361,
            "end": 1387
          },
          "start": 1360,
          "end": 1387
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1395,
                "end": 1396
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1406,
                        "end": 1407
                      },
                      "typeArguments": null,
                      "start": 1406,
                      "end": 1407
                    },
                    "start": 1400,
                    "end": 1407
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1410,
                    "end": 1416
                  }
                ],
                "start": 1400,
                "end": 1416
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "p_",
                      "cooked": "p_"
                    },
                    "tail": false,
                    "start": 1420,
                    "end": 1425
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1426,
                    "end": 1428
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1425,
                      "end": 1426
                    },
                    "typeArguments": null,
                    "start": 1425,
                    "end": 1426
                  }
                ],
                "start": 1420,
                "end": 1428
              },
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1431,
                    "end": 1432
                  },
                  "typeArguments": null,
                  "start": 1431,
                  "end": 1432
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1433,
                    "end": 1434
                  },
                  "typeArguments": null,
                  "start": 1433,
                  "end": 1434
                },
                "start": 1431,
                "end": 1435
              },
              "optional": false,
              "readonly": null,
              "start": 1392,
              "end": 1437
            },
            "start": 1390,
            "end": 1437
          },
          "start": 1389,
          "end": 1437
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1445,
                "end": 1446
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1449,
                "end": 1450
              },
              "start": 1445,
              "end": 1450
            },
            "directive": null,
            "start": 1445,
            "end": 1451
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1456,
                "end": 1457
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1460,
                "end": 1461
              },
              "start": 1456,
              "end": 1461
            },
            "directive": null,
            "start": 1456,
            "end": 1462
          }
        ],
        "start": 1439,
        "end": 1474
      },
      "expression": false,
      "start": 1338,
      "end": 1474
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1485,
        "end": 1488
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1489,
              "end": 1490
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1489,
            "end": 1490
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1492,
              "end": 1493
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1502,
                "end": 1503
              },
              "typeArguments": null,
              "start": 1502,
              "end": 1503
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1492,
            "end": 1503
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1505,
              "end": 1506
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1515,
              "end": 1521
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1505,
            "end": 1521
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1523,
              "end": 1524
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1533,
                "end": 1534
              },
              "typeArguments": null,
              "start": 1533,
              "end": 1534
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1523,
            "end": 1534
          }
        ],
        "start": 1488,
        "end": 1535
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1542,
                "end": 1543
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1548
                },
                "typeArguments": null,
                "start": 1547,
                "end": 1548
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "p_",
                      "cooked": "p_"
                    },
                    "tail": false,
                    "start": 1552,
                    "end": 1557
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1558,
                    "end": 1560
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1557,
                      "end": 1558
                    },
                    "typeArguments": null,
                    "start": 1557,
                    "end": 1558
                  }
                ],
                "start": 1552,
                "end": 1560
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1563,
                  "end": 1564
                },
                "typeArguments": null,
                "start": 1563,
                "end": 1564
              },
              "optional": false,
              "readonly": null,
              "start": 1539,
              "end": 1566
            },
            "start": 1537,
            "end": 1566
          },
          "start": 1536,
          "end": 1566
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 1574,
                "end": 1575
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1579,
                  "end": 1580
                },
                "typeArguments": null,
                "start": 1579,
                "end": 1580
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "p_",
                      "cooked": "p_"
                    },
                    "tail": false,
                    "start": 1584,
                    "end": 1589
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1590,
                    "end": 1592
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1589,
                      "end": 1590
                    },
                    "typeArguments": null,
                    "start": 1589,
                    "end": 1590
                  }
                ],
                "start": 1584,
                "end": 1592
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1595,
                  "end": 1596
                },
                "typeArguments": null,
                "start": 1595,
                "end": 1596
              },
              "optional": false,
              "readonly": null,
              "start": 1571,
              "end": 1598
            },
            "start": 1569,
            "end": 1598
          },
          "start": 1568,
          "end": 1598
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1606,
                "end": 1607
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1610,
                "end": 1611
              },
              "start": 1606,
              "end": 1611
            },
            "directive": null,
            "start": 1606,
            "end": 1612
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1617,
                "end": 1618
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1622
              },
              "start": 1617,
              "end": 1622
            },
            "directive": null,
            "start": 1617,
            "end": 1623
          }
        ],
        "start": 1600,
        "end": 1635
      },
      "expression": false,
      "start": 1476,
      "end": 1635
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Join",
        "optional": false,
        "typeAnnotation": null,
        "start": 1703,
        "end": 1707
      },
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
              "start": 1708,
              "end": 1709
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1718,
                "end": 1725
              },
              "start": 1718,
              "end": 1727
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1708,
            "end": 1727
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1730
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1739,
              "end": 1745
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1729,
            "end": 1745
          }
        ],
        "start": 1707,
        "end": 1746
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1753,
            "end": 1754
          },
          "typeArguments": null,
          "start": 1753,
          "end": 1754
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 1763,
          "end": 1765
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1768,
            "end": 1770
          },
          "start": 1768,
          "end": 1770
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1777,
              "end": 1778
            },
            "typeArguments": null,
            "start": 1777,
            "end": 1778
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1788,
                    "end": 1794
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1797,
                    "end": 1803
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1806,
                    "end": 1813
                  },
                  {
                    "type": "TSBigIntKeyword",
                    "start": 1816,
                    "end": 1822
                  }
                ],
                "start": 1788,
                "end": 1822
              }
            ],
            "start": 1787,
            "end": 1823
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 1826,
                "end": 1829
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 1833,
                "end": 1835
              }
            ],
            "types": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1829,
                    "end": 1830
                  },
                  "typeArguments": null,
                  "start": 1829,
                  "end": 1830
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1831,
                    "end": 1832
                  },
                  "start": 1831,
                  "end": 1832
                },
                "start": 1829,
                "end": 1833
              }
            ],
            "start": 1826,
            "end": 1835
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1843
              },
              "typeArguments": null,
              "start": 1842,
              "end": 1843
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1853,
                      "end": 1859
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1862,
                      "end": 1868
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 1871,
                      "end": 1878
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 1881,
                      "end": 1887
                    }
                  ],
                  "start": 1853,
                  "end": 1887
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1898,
                        "end": 1899
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1898,
                      "end": 1899
                    },
                    "start": 1892,
                    "end": 1899
                  },
                  "start": 1889,
                  "end": 1899
                }
              ],
              "start": 1852,
              "end": 1900
            },
            "trueType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1903,
                  "end": 1906
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1910,
                  "end": 1913
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1914,
                  "end": 1917
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1927,
                  "end": 1929
                }
              ],
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1906,
                      "end": 1907
                    },
                    "typeArguments": null,
                    "start": 1906,
                    "end": 1907
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1908,
                      "end": 1909
                    },
                    "start": 1908,
                    "end": 1909
                  },
                  "start": 1906,
                  "end": 1910
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1913,
                    "end": 1914
                  },
                  "typeArguments": null,
                  "start": 1913,
                  "end": 1914
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Join",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1917,
                    "end": 1921
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1922,
                          "end": 1923
                        },
                        "typeArguments": null,
                        "start": 1922,
                        "end": 1923
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1925,
                          "end": 1926
                        },
                        "typeArguments": null,
                        "start": 1925,
                        "end": 1926
                      }
                    ],
                    "start": 1921,
                    "end": 1927
                  },
                  "start": 1917,
                  "end": 1927
                }
              ],
              "start": 1903,
              "end": 1929
            },
            "falseType": {
              "type": "TSStringKeyword",
              "start": 1936,
              "end": 1942
            },
            "start": 1842,
            "end": 1942
          },
          "start": 1777,
          "end": 1942
        },
        "start": 1753,
        "end": 1942
      },
      "declare": false,
      "start": 1698,
      "end": 1943
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TJ1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1950,
        "end": 1953
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Join",
          "optional": false,
          "typeAnnotation": null,
          "start": 1956,
          "end": 1960
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1962,
                    "end": 1963
                  },
                  "start": 1962,
                  "end": 1963
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1965,
                    "end": 1966
                  },
                  "start": 1965,
                  "end": 1966
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1968,
                    "end": 1969
                  },
                  "start": 1968,
                  "end": 1969
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1971,
                    "end": 1972
                  },
                  "start": 1971,
                  "end": 1972
                }
              ],
              "start": 1961,
              "end": 1973
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 1975,
                "end": 1978
              },
              "start": 1975,
              "end": 1978
            }
          ],
          "start": 1960,
          "end": 1979
        },
        "start": 1956,
        "end": 1979
      },
      "declare": false,
      "start": 1945,
      "end": 1979
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TJ2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1985,
        "end": 1988
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Join",
          "optional": false,
          "typeAnnotation": null,
          "start": 1991,
          "end": 1995
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1997,
                    "end": 2002
                  },
                  "start": 1997,
                  "end": 2002
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 2004,
                    "end": 2009
                  },
                  "start": 2004,
                  "end": 2009
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "baz",
                    "raw": "'baz'",
                    "start": 2011,
                    "end": 2016
                  },
                  "start": 2011,
                  "end": 2016
                }
              ],
              "start": 1996,
              "end": 2017
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "-",
                "raw": "'-'",
                "start": 2019,
                "end": 2022
              },
              "start": 2019,
              "end": 2022
            }
          ],
          "start": 1995,
          "end": 2023
        },
        "start": 1991,
        "end": 2023
      },
      "declare": false,
      "start": 1980,
      "end": 2024
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TJ3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2030,
        "end": 2033
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Join",
          "optional": false,
          "typeAnnotation": null,
          "start": 2036,
          "end": 2040
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 2041,
              "end": 2043
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 2045,
                "end": 2048
              },
              "start": 2045,
              "end": 2048
            }
          ],
          "start": 2040,
          "end": 2049
        },
        "start": 2036,
        "end": 2049
      },
      "declare": false,
      "start": 2025,
      "end": 2049
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MatchPair",
        "optional": false,
        "typeAnnotation": null,
        "start": 2090,
        "end": 2099
      },
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
              "start": 2100,
              "end": 2101
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2110,
              "end": 2116
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2100,
            "end": 2116
          }
        ],
        "start": 2099,
        "end": 2117
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 2120,
            "end": 2121
          },
          "typeArguments": null,
          "start": 2120,
          "end": 2121
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "[",
                "cooked": "["
              },
              "tail": false,
              "start": 2130,
              "end": 2134
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ",",
                "cooked": ","
              },
              "tail": false,
              "start": 2141,
              "end": 2145
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "]",
                "cooked": "]"
              },
              "tail": true,
              "start": 2152,
              "end": 2155
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2140,
                  "end": 2141
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2140,
                "end": 2141
              },
              "start": 2134,
              "end": 2141
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2151,
                  "end": 2152
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2151,
                "end": 2152
              },
              "start": 2145,
              "end": 2152
            }
          ],
          "start": 2130,
          "end": 2155
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 2159,
                "end": 2160
              },
              "typeArguments": null,
              "start": 2159,
              "end": 2160
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 2162,
                "end": 2163
              },
              "typeArguments": null,
              "start": 2162,
              "end": 2163
            }
          ],
          "start": 2158,
          "end": 2164
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 2167,
          "end": 2174
        },
        "start": 2120,
        "end": 2174
      },
      "declare": false,
      "start": 2085,
      "end": 2175
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2182,
        "end": 2185
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null,
          "start": 2188,
          "end": 2197
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "[1,2]",
                "raw": "'[1,2]'",
                "start": 2198,
                "end": 2205
              },
              "start": 2198,
              "end": 2205
            }
          ],
          "start": 2197,
          "end": 2206
        },
        "start": 2188,
        "end": 2206
      },
      "declare": false,
      "start": 2177,
      "end": 2207
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 2228,
        "end": 2231
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null,
          "start": 2234,
          "end": 2243
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "[foo,bar]",
                "raw": "'[foo,bar]'",
                "start": 2244,
                "end": 2255
              },
              "start": 2244,
              "end": 2255
            }
          ],
          "start": 2243,
          "end": 2256
        },
        "start": 2234,
        "end": 2256
      },
      "declare": false,
      "start": 2223,
      "end": 2257
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 2282,
        "end": 2285
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null,
          "start": 2288,
          "end": 2297
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": " [1,2]",
                "raw": "' [1,2]'",
                "start": 2298,
                "end": 2306
              },
              "start": 2298,
              "end": 2306
            }
          ],
          "start": 2297,
          "end": 2307
        },
        "start": 2288,
        "end": 2307
      },
      "declare": false,
      "start": 2277,
      "end": 2308
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null,
        "start": 2326,
        "end": 2329
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null,
          "start": 2332,
          "end": 2341
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "[123]",
                "raw": "'[123]'",
                "start": 2342,
                "end": 2349
              },
              "start": 2342,
              "end": 2349
            }
          ],
          "start": 2341,
          "end": 2350
        },
        "start": 2332,
        "end": 2350
      },
      "declare": false,
      "start": 2321,
      "end": 2351
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T24",
        "optional": false,
        "typeAnnotation": null,
        "start": 2369,
        "end": 2372
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null,
          "start": 2375,
          "end": 2384
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "[1,2,3,4]",
                "raw": "'[1,2,3,4]'",
                "start": 2385,
                "end": 2396
              },
              "start": 2385,
              "end": 2396
            }
          ],
          "start": 2384,
          "end": 2397
        },
        "start": 2375,
        "end": 2397
      },
      "declare": false,
      "start": 2364,
      "end": 2398
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SnakeToCamelCase",
        "optional": false,
        "typeAnnotation": null,
        "start": 2424,
        "end": 2440
      },
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
              "start": 2441,
              "end": 2442
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2451,
              "end": 2457
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2441,
            "end": 2457
          }
        ],
        "start": 2440,
        "end": 2458
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 2465,
            "end": 2466
          },
          "typeArguments": null,
          "start": 2465,
          "end": 2466
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2475,
              "end": 2478
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false,
              "start": 2485,
              "end": 2489
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2496,
              "end": 2498
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2484,
                  "end": 2485
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2484,
                "end": 2485
              },
              "start": 2478,
              "end": 2485
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2495,
                  "end": 2496
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2495,
                "end": 2496
              },
              "start": 2489,
              "end": 2496
            }
          ],
          "start": 2475,
          "end": 2498
        },
        "trueType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2501,
              "end": 2504
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2516,
              "end": 2519
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2539,
              "end": 2541
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lowercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 2504,
                "end": 2513
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2514,
                      "end": 2515
                    },
                    "typeArguments": null,
                    "start": 2514,
                    "end": 2515
                  }
                ],
                "start": 2513,
                "end": 2516
              },
              "start": 2504,
              "end": 2516
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SnakeToPascalCase",
                "optional": false,
                "typeAnnotation": null,
                "start": 2519,
                "end": 2536
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2537,
                      "end": 2538
                    },
                    "typeArguments": null,
                    "start": 2537,
                    "end": 2538
                  }
                ],
                "start": 2536,
                "end": 2539
              },
              "start": 2519,
              "end": 2539
            }
          ],
          "start": 2501,
          "end": 2541
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2548,
              "end": 2549
            },
            "typeArguments": null,
            "start": 2548,
            "end": 2549
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2558,
                "end": 2561
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2568,
                "end": 2570
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2567,
                    "end": 2568
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2567,
                  "end": 2568
                },
                "start": 2561,
                "end": 2568
              }
            ],
            "start": 2558,
            "end": 2570
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2573,
                "end": 2576
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2588,
                "end": 2590
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2576,
                  "end": 2585
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2586,
                        "end": 2587
                      },
                      "typeArguments": null,
                      "start": 2586,
                      "end": 2587
                    }
                  ],
                  "start": 2585,
                  "end": 2588
                },
                "start": 2576,
                "end": 2588
              }
            ],
            "start": 2573,
            "end": 2590
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SnakeToPascalCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 2597,
              "end": 2614
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2615,
                    "end": 2616
                  },
                  "typeArguments": null,
                  "start": 2615,
                  "end": 2616
                }
              ],
              "start": 2614,
              "end": 2617
            },
            "start": 2597,
            "end": 2617
          },
          "start": 2548,
          "end": 2617
        },
        "start": 2465,
        "end": 2617
      },
      "declare": false,
      "start": 2419,
      "end": 2618
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SnakeToPascalCase",
        "optional": false,
        "typeAnnotation": null,
        "start": 2625,
        "end": 2642
      },
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
              "start": 2643,
              "end": 2644
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2653,
              "end": 2659
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2643,
            "end": 2659
          }
        ],
        "start": 2642,
        "end": 2660
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 2667,
          "end": 2673
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 2682,
            "end": 2683
          },
          "typeArguments": null,
          "start": 2682,
          "end": 2683
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 2686,
          "end": 2692
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2699,
              "end": 2700
            },
            "typeArguments": null,
            "start": 2699,
            "end": 2700
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2709,
                "end": 2712
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "_",
                  "cooked": "_"
                },
                "tail": false,
                "start": 2719,
                "end": 2723
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2730,
                "end": 2732
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2718,
                    "end": 2719
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2718,
                  "end": 2719
                },
                "start": 2712,
                "end": 2719
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2729,
                    "end": 2730
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2729,
                  "end": 2730
                },
                "start": 2723,
                "end": 2730
              }
            ],
            "start": 2709,
            "end": 2732
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2735,
                "end": 2738
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2762,
                "end": 2765
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2785,
                "end": 2787
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Capitalize",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2738,
                  "end": 2748
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Lowercase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2749,
                        "end": 2758
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2759,
                              "end": 2760
                            },
                            "typeArguments": null,
                            "start": 2759,
                            "end": 2760
                          }
                        ],
                        "start": 2758,
                        "end": 2761
                      },
                      "start": 2749,
                      "end": 2761
                    }
                  ],
                  "start": 2748,
                  "end": 2762
                },
                "start": 2738,
                "end": 2762
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SnakeToPascalCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2765,
                  "end": 2782
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2783,
                        "end": 2784
                      },
                      "typeArguments": null,
                      "start": 2783,
                      "end": 2784
                    }
                  ],
                  "start": 2782,
                  "end": 2785
                },
                "start": 2765,
                "end": 2785
              }
            ],
            "start": 2735,
            "end": 2787
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 2794,
                "end": 2795
              },
              "typeArguments": null,
              "start": 2794,
              "end": 2795
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 2804,
                  "end": 2807
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2814,
                  "end": 2816
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2813,
                      "end": 2814
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2813,
                    "end": 2814
                  },
                  "start": 2807,
                  "end": 2814
                }
              ],
              "start": 2804,
              "end": 2816
            },
            "trueType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 2819,
                  "end": 2822
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2846,
                  "end": 2848
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Capitalize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2822,
                    "end": 2832
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Lowercase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2833,
                          "end": 2842
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2843,
                                "end": 2844
                              },
                              "typeArguments": null,
                              "start": 2843,
                              "end": 2844
                            }
                          ],
                          "start": 2842,
                          "end": 2845
                        },
                        "start": 2833,
                        "end": 2845
                      }
                    ],
                    "start": 2832,
                    "end": 2846
                  },
                  "start": 2822,
                  "end": 2846
                }
              ],
              "start": 2819,
              "end": 2848
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 2855,
              "end": 2860
            },
            "start": 2794,
            "end": 2860
          },
          "start": 2699,
          "end": 2860
        },
        "start": 2667,
        "end": 2860
      },
      "declare": false,
      "start": 2620,
      "end": 2861
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RR0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2868,
        "end": 2871
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SnakeToPascalCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 2874,
          "end": 2891
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello_world_foo",
                "raw": "'hello_world_foo'",
                "start": 2892,
                "end": 2909
              },
              "start": 2892,
              "end": 2909
            }
          ],
          "start": 2891,
          "end": 2910
        },
        "start": 2874,
        "end": 2910
      },
      "declare": false,
      "start": 2863,
      "end": 2911
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RR1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2937,
        "end": 2940
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SnakeToPascalCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 2943,
          "end": 2960
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "FOO_BAR_BAZ",
                "raw": "'FOO_BAR_BAZ'",
                "start": 2961,
                "end": 2974
              },
              "start": 2961,
              "end": 2974
            }
          ],
          "start": 2960,
          "end": 2975
        },
        "start": 2943,
        "end": 2975
      },
      "declare": false,
      "start": 2932,
      "end": 2976
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RR2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2998,
        "end": 3001
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SnakeToCamelCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 3004,
          "end": 3020
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello_world_foo",
                "raw": "'hello_world_foo'",
                "start": 3021,
                "end": 3038
              },
              "start": 3021,
              "end": 3038
            }
          ],
          "start": 3020,
          "end": 3039
        },
        "start": 3004,
        "end": 3039
      },
      "declare": false,
      "start": 2993,
      "end": 3040
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RR3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3066,
        "end": 3069
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SnakeToCamelCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 3072,
          "end": 3088
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "FOO_BAR_BAZ",
                "raw": "'FOO_BAR_BAZ'",
                "start": 3089,
                "end": 3102
              },
              "start": 3089,
              "end": 3102
            }
          ],
          "start": 3088,
          "end": 3103
        },
        "start": 3072,
        "end": 3103
      },
      "declare": false,
      "start": 3061,
      "end": 3104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FirstTwoAndRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 3158,
        "end": 3173
      },
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
              "start": 3174,
              "end": 3175
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3184,
              "end": 3190
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3174,
            "end": 3190
          }
        ],
        "start": 3173,
        "end": 3191
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 3194,
            "end": 3195
          },
          "typeArguments": null,
          "start": 3194,
          "end": 3195
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3204,
              "end": 3207
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3214,
              "end": 3217
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3224,
              "end": 3227
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3234,
              "end": 3236
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3213,
                  "end": 3214
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3213,
                "end": 3214
              },
              "start": 3207,
              "end": 3214
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3223,
                  "end": 3224
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3223,
                "end": 3224
              },
              "start": 3217,
              "end": 3224
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3233,
                  "end": 3234
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3233,
                "end": 3234
              },
              "start": 3227,
              "end": 3234
            }
          ],
          "start": 3204,
          "end": 3236
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3240,
                  "end": 3243
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3244,
                  "end": 3247
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3248,
                  "end": 3250
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3243,
                    "end": 3244
                  },
                  "typeArguments": null,
                  "start": 3243,
                  "end": 3244
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3247,
                    "end": 3248
                  },
                  "typeArguments": null,
                  "start": 3247,
                  "end": 3248
                }
              ],
              "start": 3240,
              "end": 3250
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 3252,
                "end": 3253
              },
              "typeArguments": null,
              "start": 3252,
              "end": 3253
            }
          ],
          "start": 3239,
          "end": 3254
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 3257,
          "end": 3264
        },
        "start": 3194,
        "end": 3264
      },
      "declare": false,
      "start": 3153,
      "end": 3265
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T25",
        "optional": false,
        "typeAnnotation": null,
        "start": 3272,
        "end": 3275
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "FirstTwoAndRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 3278,
          "end": 3293
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "abcde",
                "raw": "'abcde'",
                "start": 3294,
                "end": 3301
              },
              "start": 3294,
              "end": 3301
            }
          ],
          "start": 3293,
          "end": 3302
        },
        "start": 3278,
        "end": 3302
      },
      "declare": false,
      "start": 3267,
      "end": 3303
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T26",
        "optional": false,
        "typeAnnotation": null,
        "start": 3327,
        "end": 3330
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "FirstTwoAndRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 3333,
          "end": 3348
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "ab",
                "raw": "'ab'",
                "start": 3349,
                "end": 3353
              },
              "start": 3349,
              "end": 3353
            }
          ],
          "start": 3348,
          "end": 3354
        },
        "start": 3333,
        "end": 3354
      },
      "declare": false,
      "start": 3322,
      "end": 3355
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T27",
        "optional": false,
        "typeAnnotation": null,
        "start": 3376,
        "end": 3379
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "FirstTwoAndRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 3382,
          "end": 3397
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 3398,
                "end": 3401
              },
              "start": 3398,
              "end": 3401
            }
          ],
          "start": 3397,
          "end": 3402
        },
        "start": 3382,
        "end": 3402
      },
      "declare": false,
      "start": 3371,
      "end": 3403
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HexDigit",
        "optional": false,
        "typeAnnotation": null,
        "start": 3422,
        "end": 3430
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "0",
              "raw": "'0'",
              "start": 3433,
              "end": 3436
            },
            "start": 3433,
            "end": 3436
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 3439,
              "end": 3442
            },
            "start": 3439,
            "end": 3442
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 3445,
              "end": 3448
            },
            "start": 3445,
            "end": 3448
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 3451,
              "end": 3454
            },
            "start": 3451,
            "end": 3454
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "4",
              "raw": "'4'",
              "start": 3457,
              "end": 3460
            },
            "start": 3457,
            "end": 3460
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "5",
              "raw": "'5'",
              "start": 3463,
              "end": 3466
            },
            "start": 3463,
            "end": 3466
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "6",
              "raw": "'6'",
              "start": 3469,
              "end": 3472
            },
            "start": 3469,
            "end": 3472
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "7",
              "raw": "'7'",
              "start": 3475,
              "end": 3478
            },
            "start": 3475,
            "end": 3478
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "8",
              "raw": "'8'",
              "start": 3480,
              "end": 3483
            },
            "start": 3480,
            "end": 3483
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "9",
              "raw": "'9'",
              "start": 3486,
              "end": 3489
            },
            "start": 3486,
            "end": 3489
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "A",
              "raw": "'A'",
              "start": 3492,
              "end": 3495
            },
            "start": 3492,
            "end": 3495
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "B",
              "raw": "'B'",
              "start": 3498,
              "end": 3501
            },
            "start": 3498,
            "end": 3501
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "C",
              "raw": "'C'",
              "start": 3504,
              "end": 3507
            },
            "start": 3504,
            "end": 3507
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "D",
              "raw": "'D'",
              "start": 3510,
              "end": 3513
            },
            "start": 3510,
            "end": 3513
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "E",
              "raw": "'E'",
              "start": 3516,
              "end": 3519
            },
            "start": 3516,
            "end": 3519
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "F",
              "raw": "'F'",
              "start": 3522,
              "end": 3525
            },
            "start": 3522,
            "end": 3525
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 3528,
              "end": 3531
            },
            "start": 3528,
            "end": 3531
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 3534,
              "end": 3537
            },
            "start": 3534,
            "end": 3537
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "c",
              "raw": "'c'",
              "start": 3540,
              "end": 3543
            },
            "start": 3540,
            "end": 3543
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "d",
              "raw": "'d'",
              "start": 3546,
              "end": 3549
            },
            "start": 3546,
            "end": 3549
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "e",
              "raw": "'e'",
              "start": 3552,
              "end": 3555
            },
            "start": 3552,
            "end": 3555
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "f",
              "raw": "'f'",
              "start": 3558,
              "end": 3561
            },
            "start": 3558,
            "end": 3561
          }
        ],
        "start": 3433,
        "end": 3561
      },
      "declare": false,
      "start": 3417,
      "end": 3562
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HexColor",
        "optional": false,
        "typeAnnotation": null,
        "start": 3569,
        "end": 3577
      },
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
              "start": 3578,
              "end": 3579
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3588,
              "end": 3594
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3578,
            "end": 3594
          }
        ],
        "start": 3577,
        "end": 3595
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 3602,
            "end": 3603
          },
          "typeArguments": null,
          "start": 3602,
          "end": 3603
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "#",
                "cooked": "#"
              },
              "tail": false,
              "start": 3612,
              "end": 3616
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3624,
              "end": 3627
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3635,
              "end": 3638
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3646,
              "end": 3649
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3657,
              "end": 3660
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 3668,
              "end": 3671
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3679,
              "end": 3681
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3622,
                  "end": 3624
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3622,
                "end": 3624
              },
              "start": 3616,
              "end": 3624
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3633,
                  "end": 3635
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3633,
                "end": 3635
              },
              "start": 3627,
              "end": 3635
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3644,
                  "end": 3646
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3644,
                "end": 3646
              },
              "start": 3638,
              "end": 3646
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3655,
                  "end": 3657
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3655,
                "end": 3657
              },
              "start": 3649,
              "end": 3657
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3666,
                  "end": 3668
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3666,
                "end": 3668
              },
              "start": 3660,
              "end": 3668
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3677,
                  "end": 3679
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3677,
                "end": 3679
              },
              "start": 3671,
              "end": 3679
            }
          ],
          "start": 3612,
          "end": 3681
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3693,
                  "end": 3695
                },
                "typeArguments": null,
                "start": 3693,
                "end": 3695
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3697,
                  "end": 3699
                },
                "typeArguments": null,
                "start": 3697,
                "end": 3699
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3701,
                  "end": 3703
                },
                "typeArguments": null,
                "start": 3701,
                "end": 3703
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3705,
                  "end": 3707
                },
                "typeArguments": null,
                "start": 3705,
                "end": 3707
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3709,
                  "end": 3711
                },
                "typeArguments": null,
                "start": 3709,
                "end": 3711
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3713,
                  "end": 3715
                },
                "typeArguments": null,
                "start": 3713,
                "end": 3715
              }
            ],
            "start": 3692,
            "end": 3716
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3726,
                  "end": 3734
                },
                "typeArguments": null,
                "start": 3726,
                "end": 3734
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3736,
                  "end": 3744
                },
                "typeArguments": null,
                "start": 3736,
                "end": 3744
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3746,
                  "end": 3754
                },
                "typeArguments": null,
                "start": 3746,
                "end": 3754
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3756,
                  "end": 3764
                },
                "typeArguments": null,
                "start": 3756,
                "end": 3764
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3766,
                  "end": 3774
                },
                "typeArguments": null,
                "start": 3766,
                "end": 3774
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3776,
                  "end": 3784
                },
                "typeArguments": null,
                "start": 3776,
                "end": 3784
              }
            ],
            "start": 3725,
            "end": 3785
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 3800,
              "end": 3801
            },
            "typeArguments": null,
            "start": 3800,
            "end": 3801
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3816,
            "end": 3821
          },
          "start": 3692,
          "end": 3821
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3832,
          "end": 3837
        },
        "start": 3602,
        "end": 3837
      },
      "declare": false,
      "start": 3564,
      "end": 3838
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TH1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3845,
        "end": 3848
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null,
          "start": 3851,
          "end": 3859
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "#8080FF",
                "raw": "'#8080FF'",
                "start": 3860,
                "end": 3869
              },
              "start": 3860,
              "end": 3869
            }
          ],
          "start": 3859,
          "end": 3870
        },
        "start": 3851,
        "end": 3870
      },
      "declare": false,
      "start": 3840,
      "end": 3871
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TH2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3891,
        "end": 3894
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null,
          "start": 3897,
          "end": 3905
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "#80c0ff",
                "raw": "'#80c0ff'",
                "start": 3906,
                "end": 3915
              },
              "start": 3906,
              "end": 3915
            }
          ],
          "start": 3905,
          "end": 3916
        },
        "start": 3897,
        "end": 3916
      },
      "declare": false,
      "start": 3886,
      "end": 3917
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TH3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3937,
        "end": 3940
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null,
          "start": 3943,
          "end": 3951
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "#8080F",
                "raw": "'#8080F'",
                "start": 3952,
                "end": 3960
              },
              "start": 3952,
              "end": 3960
            }
          ],
          "start": 3951,
          "end": 3961
        },
        "start": 3943,
        "end": 3961
      },
      "declare": false,
      "start": 3932,
      "end": 3962
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TH4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3978,
        "end": 3981
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null,
          "start": 3984,
          "end": 3992
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "#8080FFF",
                "raw": "'#8080FFF'",
                "start": 3993,
                "end": 4003
              },
              "start": 3993,
              "end": 4003
            }
          ],
          "start": 3992,
          "end": 4004
        },
        "start": 3984,
        "end": 4004
      },
      "declare": false,
      "start": 3973,
      "end": 4005
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Trim",
        "optional": false,
        "typeAnnotation": null,
        "start": 4046,
        "end": 4050
      },
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
              "start": 4051,
              "end": 4052
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4061,
              "end": 4067
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4051,
            "end": 4067
          }
        ],
        "start": 4050,
        "end": 4068
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 4075,
            "end": 4076
          },
          "typeArguments": null,
          "start": 4075,
          "end": 4076
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": " ",
                "cooked": " "
              },
              "tail": false,
              "start": 4085,
              "end": 4089
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4096,
              "end": 4098
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4095,
                  "end": 4096
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4095,
                "end": 4096
              },
              "start": 4089,
              "end": 4096
            }
          ],
          "start": 4085,
          "end": 4098
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Trim",
            "optional": false,
            "typeAnnotation": null,
            "start": 4101,
            "end": 4105
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4106,
                  "end": 4107
                },
                "typeArguments": null,
                "start": 4106,
                "end": 4107
              }
            ],
            "start": 4105,
            "end": 4108
          },
          "start": 4101,
          "end": 4108
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 4115,
              "end": 4116
            },
            "typeArguments": null,
            "start": 4115,
            "end": 4116
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 4125,
                "end": 4128
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " ",
                  "cooked": " "
                },
                "tail": true,
                "start": 4135,
                "end": 4138
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4134,
                    "end": 4135
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4134,
                  "end": 4135
                },
                "start": 4128,
                "end": 4135
              }
            ],
            "start": 4125,
            "end": 4138
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Trim",
              "optional": false,
              "typeAnnotation": null,
              "start": 4141,
              "end": 4145
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4146,
                    "end": 4147
                  },
                  "typeArguments": null,
                  "start": 4146,
                  "end": 4147
                }
              ],
              "start": 4145,
              "end": 4148
            },
            "start": 4141,
            "end": 4148
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 4155,
              "end": 4156
            },
            "typeArguments": null,
            "start": 4155,
            "end": 4156
          },
          "start": 4115,
          "end": 4156
        },
        "start": 4075,
        "end": 4156
      },
      "declare": false,
      "start": 4041,
      "end": 4157
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TR1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4164,
        "end": 4167
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null,
          "start": 4170,
          "end": 4174
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "xx   ",
                "raw": "'xx   '",
                "start": 4175,
                "end": 4182
              },
              "start": 4175,
              "end": 4182
            }
          ],
          "start": 4174,
          "end": 4183
        },
        "start": 4170,
        "end": 4183
      },
      "declare": false,
      "start": 4159,
      "end": 4184
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TR2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4199,
        "end": 4202
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null,
          "start": 4205,
          "end": 4209
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "   xx",
                "raw": "'   xx'",
                "start": 4210,
                "end": 4217
              },
              "start": 4210,
              "end": 4217
            }
          ],
          "start": 4209,
          "end": 4218
        },
        "start": 4205,
        "end": 4218
      },
      "declare": false,
      "start": 4194,
      "end": 4219
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TR3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4234,
        "end": 4237
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null,
          "start": 4240,
          "end": 4244
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "   xx   ",
                "raw": "'   xx   '",
                "start": 4245,
                "end": 4255
              },
              "start": 4245,
              "end": 4255
            }
          ],
          "start": 4244,
          "end": 4256
        },
        "start": 4240,
        "end": 4256
      },
      "declare": false,
      "start": 4229,
      "end": 4257
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Split",
        "optional": false,
        "typeAnnotation": null,
        "start": 4273,
        "end": 4278
      },
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
              "start": 4279,
              "end": 4280
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4289,
              "end": 4295
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4279,
            "end": 4295
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 4297,
              "end": 4298
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4307,
              "end": 4313
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4297,
            "end": 4313
          }
        ],
        "start": 4278,
        "end": 4314
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 4321,
          "end": 4327
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 4336,
            "end": 4337
          },
          "typeArguments": null,
          "start": 4336,
          "end": 4337
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 4340,
            "end": 4346
          },
          "start": 4340,
          "end": 4348
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 4355,
              "end": 4356
            },
            "typeArguments": null,
            "start": 4355,
            "end": 4356
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 4365,
              "end": 4367
            },
            "start": 4365,
            "end": 4367
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [],
            "start": 4370,
            "end": 4372
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 4379,
                "end": 4380
              },
              "typeArguments": null,
              "start": 4379,
              "end": 4380
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4389,
                  "end": 4392
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4399,
                  "end": 4402
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4403,
                  "end": 4406
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4413,
                  "end": 4415
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4398,
                      "end": 4399
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4398,
                    "end": 4399
                  },
                  "start": 4392,
                  "end": 4399
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4402,
                    "end": 4403
                  },
                  "typeArguments": null,
                  "start": 4402,
                  "end": 4403
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4412,
                      "end": 4413
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4412,
                    "end": 4413
                  },
                  "start": 4406,
                  "end": 4413
                }
              ],
              "start": 4389,
              "end": 4415
            },
            "trueType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4419,
                    "end": 4420
                  },
                  "typeArguments": null,
                  "start": 4419,
                  "end": 4420
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Split",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4425,
                      "end": 4430
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4431,
                            "end": 4432
                          },
                          "typeArguments": null,
                          "start": 4431,
                          "end": 4432
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4434,
                            "end": 4435
                          },
                          "typeArguments": null,
                          "start": 4434,
                          "end": 4435
                        }
                      ],
                      "start": 4430,
                      "end": 4436
                    },
                    "start": 4425,
                    "end": 4436
                  },
                  "start": 4422,
                  "end": 4436
                }
              ],
              "start": 4418,
              "end": 4437
            },
            "falseType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4445,
                    "end": 4446
                  },
                  "typeArguments": null,
                  "start": 4445,
                  "end": 4446
                }
              ],
              "start": 4444,
              "end": 4447
            },
            "start": 4379,
            "end": 4447
          },
          "start": 4355,
          "end": 4447
        },
        "start": 4321,
        "end": 4447
      },
      "declare": false,
      "start": 4268,
      "end": 4448
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 4455,
        "end": 4458
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null,
          "start": 4461,
          "end": 4466
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 4467,
                "end": 4472
              },
              "start": 4467,
              "end": 4472
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 4474,
                "end": 4477
              },
              "start": 4474,
              "end": 4477
            }
          ],
          "start": 4466,
          "end": 4478
        },
        "start": 4461,
        "end": 4478
      },
      "declare": false,
      "start": 4450,
      "end": 4479
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null,
        "start": 4497,
        "end": 4500
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null,
          "start": 4503,
          "end": 4508
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo.bar.baz",
                "raw": "'foo.bar.baz'",
                "start": 4509,
                "end": 4522
              },
              "start": 4509,
              "end": 4522
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 4524,
                "end": 4527
              },
              "start": 4524,
              "end": 4527
            }
          ],
          "start": 4508,
          "end": 4528
        },
        "start": 4503,
        "end": 4528
      },
      "declare": false,
      "start": 4492,
      "end": 4529
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T42",
        "optional": false,
        "typeAnnotation": null,
        "start": 4561,
        "end": 4564
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null,
          "start": 4567,
          "end": 4572
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo.bar",
                "raw": "'foo.bar'",
                "start": 4573,
                "end": 4582
              },
              "start": 4573,
              "end": 4582
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 4584,
                "end": 4586
              },
              "start": 4584,
              "end": 4586
            }
          ],
          "start": 4572,
          "end": 4587
        },
        "start": 4567,
        "end": 4587
      },
      "declare": false,
      "start": 4556,
      "end": 4588
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T43",
        "optional": false,
        "typeAnnotation": null,
        "start": 4634,
        "end": 4637
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null,
          "start": 4640,
          "end": 4645
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 4646,
              "end": 4649
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 4651,
                "end": 4654
              },
              "start": 4651,
              "end": 4654
            }
          ],
          "start": 4645,
          "end": 4655
        },
        "start": 4640,
        "end": 4655
      },
      "declare": false,
      "start": 4629,
      "end": 4656
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 4726,
        "end": 4733
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
              "start": 4734,
              "end": 4735
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4734,
            "end": 4735
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 4737,
              "end": 4739
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4754,
                      "end": 4755
                    },
                    "typeArguments": null,
                    "start": 4754,
                    "end": 4755
                  },
                  "start": 4748,
                  "end": 4755
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4758,
                  "end": 4764
                }
              ],
              "start": 4748,
              "end": 4764
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4737,
            "end": 4764
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4766,
              "end": 4768
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4783,
                        "end": 4784
                      },
                      "typeArguments": null,
                      "start": 4783,
                      "end": 4784
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4785,
                        "end": 4787
                      },
                      "typeArguments": null,
                      "start": 4785,
                      "end": 4787
                    },
                    "start": 4783,
                    "end": 4788
                  },
                  "start": 4777,
                  "end": 4788
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4791,
                  "end": 4797
                }
              ],
              "start": 4777,
              "end": 4797
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4766,
            "end": 4797
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4799,
              "end": 4801
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4816,
                          "end": 4817
                        },
                        "typeArguments": null,
                        "start": 4816,
                        "end": 4817
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4818,
                          "end": 4820
                        },
                        "typeArguments": null,
                        "start": 4818,
                        "end": 4820
                      },
                      "start": 4816,
                      "end": 4821
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4822,
                        "end": 4824
                      },
                      "typeArguments": null,
                      "start": 4822,
                      "end": 4824
                    },
                    "start": 4816,
                    "end": 4825
                  },
                  "start": 4810,
                  "end": 4825
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4828,
                  "end": 4834
                }
              ],
              "start": 4810,
              "end": 4834
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4799,
            "end": 4834
          }
        ],
        "start": 4733,
        "end": 4835
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4841,
                "end": 4842
              },
              "typeArguments": null,
              "start": 4841,
              "end": 4842
            },
            "start": 4839,
            "end": 4842
          },
          "start": 4836,
          "end": 4842
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4850,
                  "end": 4853
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false,
                  "start": 4855,
                  "end": 4859
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false,
                  "start": 4861,
                  "end": 4865
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4867,
                  "end": 4869
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4853,
                    "end": 4855
                  },
                  "typeArguments": null,
                  "start": 4853,
                  "end": 4855
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4859,
                    "end": 4861
                  },
                  "typeArguments": null,
                  "start": 4859,
                  "end": 4861
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4865,
                    "end": 4867
                  },
                  "typeArguments": null,
                  "start": 4865,
                  "end": 4867
                }
              ],
              "start": 4850,
              "end": 4869
            },
            "start": 4848,
            "end": 4869
          },
          "start": 4844,
          "end": 4869
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4872,
                  "end": 4873
                },
                "typeArguments": null,
                "start": 4872,
                "end": 4873
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4874,
                  "end": 4876
                },
                "typeArguments": null,
                "start": 4874,
                "end": 4876
              },
              "start": 4872,
              "end": 4877
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4878,
                "end": 4880
              },
              "typeArguments": null,
              "start": 4878,
              "end": 4880
            },
            "start": 4872,
            "end": 4881
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4882,
              "end": 4884
            },
            "typeArguments": null,
            "start": 4882,
            "end": 4884
          },
          "start": 4872,
          "end": 4885
        },
        "start": 4870,
        "end": 4885
      },
      "body": null,
      "expression": false,
      "start": 4709,
      "end": 4886
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 4904,
        "end": 4911
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
              "start": 4912,
              "end": 4913
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4912,
            "end": 4913
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 4915,
              "end": 4917
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4932,
                      "end": 4933
                    },
                    "typeArguments": null,
                    "start": 4932,
                    "end": 4933
                  },
                  "start": 4926,
                  "end": 4933
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4936,
                  "end": 4942
                }
              ],
              "start": 4926,
              "end": 4942
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4915,
            "end": 4942
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4944,
              "end": 4946
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4961,
                        "end": 4962
                      },
                      "typeArguments": null,
                      "start": 4961,
                      "end": 4962
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4963,
                        "end": 4965
                      },
                      "typeArguments": null,
                      "start": 4963,
                      "end": 4965
                    },
                    "start": 4961,
                    "end": 4966
                  },
                  "start": 4955,
                  "end": 4966
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4969,
                  "end": 4975
                }
              ],
              "start": 4955,
              "end": 4975
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4944,
            "end": 4975
          }
        ],
        "start": 4911,
        "end": 4976
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4982,
                "end": 4983
              },
              "typeArguments": null,
              "start": 4982,
              "end": 4983
            },
            "start": 4980,
            "end": 4983
          },
          "start": 4977,
          "end": 4983
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4991,
                  "end": 4994
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false,
                  "start": 4996,
                  "end": 5000
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 5002,
                  "end": 5004
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4994,
                    "end": 4996
                  },
                  "typeArguments": null,
                  "start": 4994,
                  "end": 4996
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5000,
                    "end": 5002
                  },
                  "typeArguments": null,
                  "start": 5000,
                  "end": 5002
                }
              ],
              "start": 4991,
              "end": 5004
            },
            "start": 4989,
            "end": 5004
          },
          "start": 4985,
          "end": 5004
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5007,
                "end": 5008
              },
              "typeArguments": null,
              "start": 5007,
              "end": 5008
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 5009,
                "end": 5011
              },
              "typeArguments": null,
              "start": 5009,
              "end": 5011
            },
            "start": 5007,
            "end": 5012
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5013,
              "end": 5015
            },
            "typeArguments": null,
            "start": 5013,
            "end": 5015
          },
          "start": 5007,
          "end": 5016
        },
        "start": 5005,
        "end": 5016
      },
      "body": null,
      "expression": false,
      "start": 4887,
      "end": 5017
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 5035,
        "end": 5042
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
              "start": 5043,
              "end": 5044
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5043,
            "end": 5044
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 5046,
              "end": 5048
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5063,
                      "end": 5064
                    },
                    "typeArguments": null,
                    "start": 5063,
                    "end": 5064
                  },
                  "start": 5057,
                  "end": 5064
                },
                {
                  "type": "TSStringKeyword",
                  "start": 5067,
                  "end": 5073
                }
              ],
              "start": 5057,
              "end": 5073
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5046,
            "end": 5073
          }
        ],
        "start": 5042,
        "end": 5074
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5080,
                "end": 5081
              },
              "typeArguments": null,
              "start": 5080,
              "end": 5081
            },
            "start": 5078,
            "end": 5081
          },
          "start": 5075,
          "end": 5081
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 5089,
                "end": 5091
              },
              "typeArguments": null,
              "start": 5089,
              "end": 5091
            },
            "start": 5087,
            "end": 5091
          },
          "start": 5083,
          "end": 5091
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5094,
              "end": 5095
            },
            "typeArguments": null,
            "start": 5094,
            "end": 5095
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 5096,
              "end": 5098
            },
            "typeArguments": null,
            "start": 5096,
            "end": 5098
          },
          "start": 5094,
          "end": 5099
        },
        "start": 5092,
        "end": 5099
      },
      "body": null,
      "expression": false,
      "start": 5018,
      "end": 5100
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 5118,
        "end": 5125
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 5131,
              "end": 5137
            },
            "start": 5129,
            "end": 5137
          },
          "start": 5126,
          "end": 5137
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 5145,
              "end": 5151
            },
            "start": 5143,
            "end": 5151
          },
          "start": 5139,
          "end": 5151
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 5154,
          "end": 5161
        },
        "start": 5152,
        "end": 5161
      },
      "body": null,
      "expression": false,
      "start": 5101,
      "end": 5162
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5168,
            "end": 5170
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 5173,
              "end": 5180
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5183,
                        "end": 5184
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5188,
                              "end": 5189
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5192,
                                    "end": 5193
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 42,
                                    "raw": "42",
                                    "start": 5195,
                                    "end": 5197
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5192,
                                  "end": 5197
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5199,
                                    "end": 5200
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "hello",
                                    "raw": "'hello'",
                                    "start": 5202,
                                    "end": 5209
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5199,
                                  "end": 5209
                                }
                              ],
                              "start": 5191,
                              "end": 5211
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5188,
                            "end": 5211
                          }
                        ],
                        "start": 5186,
                        "end": 5212
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5183,
                      "end": 5212
                    }
                  ],
                  "start": 5181,
                  "end": 5213
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5217,
                    "end": 5222
                  },
                  "typeArguments": null,
                  "start": 5217,
                  "end": 5222
                },
                "start": 5181,
                "end": 5222
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 5224,
                "end": 5227
              }
            ],
            "optional": false,
            "start": 5173,
            "end": 5228
          },
          "definite": false,
          "start": 5168,
          "end": 5228
        }
      ],
      "declare": false,
      "start": 5164,
      "end": 5229
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5234,
            "end": 5236
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 5239,
              "end": 5246
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5249,
                        "end": 5250
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5254,
                              "end": 5255
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5258,
                                    "end": 5259
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 42,
                                    "raw": "42",
                                    "start": 5261,
                                    "end": 5263
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5258,
                                  "end": 5263
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5265,
                                    "end": 5266
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "hello",
                                    "raw": "'hello'",
                                    "start": 5268,
                                    "end": 5275
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5265,
                                  "end": 5275
                                }
                              ],
                              "start": 5257,
                              "end": 5277
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5254,
                            "end": 5277
                          }
                        ],
                        "start": 5252,
                        "end": 5278
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5249,
                      "end": 5278
                    }
                  ],
                  "start": 5247,
                  "end": 5279
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5283,
                    "end": 5288
                  },
                  "typeArguments": null,
                  "start": 5283,
                  "end": 5288
                },
                "start": 5247,
                "end": 5288
              },
              {
                "type": "Literal",
                "value": "a.b",
                "raw": "'a.b'",
                "start": 5290,
                "end": 5295
              }
            ],
            "optional": false,
            "start": 5239,
            "end": 5296
          },
          "definite": false,
          "start": 5234,
          "end": 5296
        }
      ],
      "declare": false,
      "start": 5230,
      "end": 5297
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5302,
            "end": 5304
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 5307,
              "end": 5314
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5317,
                        "end": 5318
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5322,
                              "end": 5323
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5326,
                                    "end": 5327
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 42,
                                    "raw": "42",
                                    "start": 5329,
                                    "end": 5331
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5326,
                                  "end": 5331
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5333,
                                    "end": 5334
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "hello",
                                    "raw": "'hello'",
                                    "start": 5336,
                                    "end": 5343
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 5333,
                                  "end": 5343
                                }
                              ],
                              "start": 5325,
                              "end": 5345
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5322,
                            "end": 5345
                          }
                        ],
                        "start": 5320,
                        "end": 5346
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5317,
                      "end": 5346
                    }
                  ],
                  "start": 5315,
                  "end": 5347
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5351,
                    "end": 5356
                  },
                  "typeArguments": null,
                  "start": 5351,
                  "end": 5356
                },
                "start": 5315,
                "end": 5356
              },
              {
                "type": "Literal",
                "value": "a.b.d",
                "raw": "'a.b.d'",
                "start": 5358,
                "end": 5365
              }
            ],
            "optional": false,
            "start": 5307,
            "end": 5366
          },
          "definite": false,
          "start": 5302,
          "end": 5366
        }
      ],
      "declare": false,
      "start": 5298,
      "end": 5367
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5374,
        "end": 5382
      },
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
              "start": 5383,
              "end": 5384
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5383,
            "end": 5384
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null,
              "start": 5386,
              "end": 5390
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5399,
              "end": 5405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5386,
            "end": 5405
          }
        ],
        "start": 5382,
        "end": 5406
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 5413,
          "end": 5419
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Path",
            "optional": false,
            "typeAnnotation": null,
            "start": 5428,
            "end": 5432
          },
          "typeArguments": null,
          "start": 5428,
          "end": 5432
        },
        "trueType": {
          "type": "TSUnknownKeyword",
          "start": 5435,
          "end": 5442
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null,
              "start": 5449,
              "end": 5453
            },
            "typeArguments": null,
            "start": 5449,
            "end": 5453
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5468,
                "end": 5469
              },
              "typeArguments": null,
              "start": 5468,
              "end": 5469
            },
            "start": 5462,
            "end": 5469
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5472,
                "end": 5473
              },
              "typeArguments": null,
              "start": 5472,
              "end": 5473
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Path",
                "optional": false,
                "typeAnnotation": null,
                "start": 5474,
                "end": 5478
              },
              "typeArguments": null,
              "start": 5474,
              "end": 5478
            },
            "start": 5472,
            "end": 5479
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Path",
                "optional": false,
                "typeAnnotation": null,
                "start": 5486,
                "end": 5490
              },
              "typeArguments": null,
              "start": 5486,
              "end": 5490
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 5499,
                  "end": 5502
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false,
                  "start": 5509,
                  "end": 5513
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 5520,
                  "end": 5522
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5508,
                      "end": 5509
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5508,
                    "end": 5509
                  },
                  "start": 5502,
                  "end": 5509
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5519,
                      "end": 5520
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5519,
                    "end": 5520
                  },
                  "start": 5513,
                  "end": 5520
                }
              ],
              "start": 5499,
              "end": 5522
            },
            "trueType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5525,
                  "end": 5526
                },
                "typeArguments": null,
                "start": 5525,
                "end": 5526
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5541,
                    "end": 5542
                  },
                  "typeArguments": null,
                  "start": 5541,
                  "end": 5542
                },
                "start": 5535,
                "end": 5542
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5545,
                  "end": 5553
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5554,
                          "end": 5555
                        },
                        "typeArguments": null,
                        "start": 5554,
                        "end": 5555
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5556,
                          "end": 5557
                        },
                        "typeArguments": null,
                        "start": 5556,
                        "end": 5557
                      },
                      "start": 5554,
                      "end": 5558
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5560,
                        "end": 5561
                      },
                      "typeArguments": null,
                      "start": 5560,
                      "end": 5561
                    }
                  ],
                  "start": 5553,
                  "end": 5562
                },
                "start": 5545,
                "end": 5562
              },
              "falseType": {
                "type": "TSUnknownKeyword",
                "start": 5565,
                "end": 5572
              },
              "start": 5525,
              "end": 5572
            },
            "falseType": {
              "type": "TSUnknownKeyword",
              "start": 5579,
              "end": 5586
            },
            "start": 5486,
            "end": 5586
          },
          "start": 5449,
          "end": 5586
        },
        "start": 5413,
        "end": 5586
      },
      "declare": false,
      "start": 5369,
      "end": 5587
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getPropValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 5606,
        "end": 5618
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
              "start": 5619,
              "end": 5620
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5619,
            "end": 5620
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 5622,
              "end": 5623
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5632,
              "end": 5638
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5622,
            "end": 5638
          }
        ],
        "start": 5618,
        "end": 5639
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5645,
                "end": 5646
              },
              "typeArguments": null,
              "start": 5645,
              "end": 5646
            },
            "start": 5643,
            "end": 5646
          },
          "start": 5640,
          "end": 5646
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5654,
                "end": 5655
              },
              "typeArguments": null,
              "start": 5654,
              "end": 5655
            },
            "start": 5652,
            "end": 5655
          },
          "start": 5648,
          "end": 5655
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropType",
            "optional": false,
            "typeAnnotation": null,
            "start": 5658,
            "end": 5666
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5667,
                  "end": 5668
                },
                "typeArguments": null,
                "start": 5667,
                "end": 5668
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5670,
                  "end": 5671
                },
                "typeArguments": null,
                "start": 5670,
                "end": 5671
              }
            ],
            "start": 5666,
            "end": 5672
          },
          "start": 5658,
          "end": 5672
        },
        "start": 5656,
        "end": 5672
      },
      "body": null,
      "expression": false,
      "start": 5589,
      "end": 5673
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5691,
                "end": 5697
              },
              "start": 5689,
              "end": 5697
            },
            "start": 5688,
            "end": 5697
          },
          "init": null,
          "definite": false,
          "start": 5688,
          "end": 5697
        }
      ],
      "declare": true,
      "start": 5674,
      "end": 5698
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5706,
            "end": 5709
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5714,
                  "end": 5715
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5719,
                        "end": 5720
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5723,
                              "end": 5724
                            },
                            "value": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 5726,
                              "end": 5728
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5723,
                            "end": 5728
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5730,
                              "end": 5731
                            },
                            "value": {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "'hello'",
                              "start": 5733,
                              "end": 5740
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5730,
                            "end": 5740
                          }
                        ],
                        "start": 5722,
                        "end": 5742
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5719,
                      "end": 5742
                    }
                  ],
                  "start": 5717,
                  "end": 5743
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5714,
                "end": 5743
              }
            ],
            "start": 5712,
            "end": 5744
          },
          "definite": false,
          "start": 5706,
          "end": 5744
        }
      ],
      "declare": false,
      "start": 5700,
      "end": 5745
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 5747,
          "end": 5759
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5760,
            "end": 5763
          },
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 5765,
            "end": 5768
          }
        ],
        "optional": false,
        "start": 5747,
        "end": 5769
      },
      "directive": null,
      "start": 5747,
      "end": 5770
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 5806,
          "end": 5818
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5819,
            "end": 5822
          },
          {
            "type": "Literal",
            "value": "a.b",
            "raw": "'a.b'",
            "start": 5824,
            "end": 5829
          }
        ],
        "optional": false,
        "start": 5806,
        "end": 5830
      },
      "directive": null,
      "start": 5806,
      "end": 5831
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 5860,
          "end": 5872
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5873,
            "end": 5876
          },
          {
            "type": "Literal",
            "value": "a.b.d",
            "raw": "'a.b.d'",
            "start": 5878,
            "end": 5885
          }
        ],
        "optional": false,
        "start": 5860,
        "end": 5886
      },
      "directive": null,
      "start": 5860,
      "end": 5887
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 5899,
          "end": 5911
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5912,
            "end": 5915
          },
          {
            "type": "Literal",
            "value": "a.b.x",
            "raw": "'a.b.x'",
            "start": 5917,
            "end": 5924
          }
        ],
        "optional": false,
        "start": 5899,
        "end": 5925
      },
      "directive": null,
      "start": 5899,
      "end": 5926
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 5939,
          "end": 5951
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 5952,
            "end": 5955
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5957,
            "end": 5958
          }
        ],
        "optional": false,
        "start": 5939,
        "end": 5959
      },
      "directive": null,
      "start": 5939,
      "end": 5960
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6048,
        "end": 6050
      },
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
              "start": 6051,
              "end": 6052
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6051,
            "end": 6052
          }
        ],
        "start": 6050,
        "end": 6053
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6056,
            "end": 6057
          },
          "typeArguments": null,
          "start": 6056,
          "end": 6057
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "foo",
                "cooked": "foo"
              },
              "tail": false,
              "start": 6066,
              "end": 6072
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "bar",
                "cooked": "bar"
              },
              "tail": true,
              "start": 6079,
              "end": 6084
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6078,
                  "end": 6079
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6078,
                "end": 6079
              },
              "start": 6072,
              "end": 6079
            }
          ],
          "start": 6066,
          "end": 6084
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S2",
            "optional": false,
            "typeAnnotation": null,
            "start": 6087,
            "end": 6089
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6090,
                  "end": 6091
                },
                "typeArguments": null,
                "start": 6090,
                "end": 6091
              }
            ],
            "start": 6089,
            "end": 6092
          },
          "start": 6087,
          "end": 6092
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6095,
          "end": 6100
        },
        "start": 6056,
        "end": 6100
      },
      "declare": false,
      "start": 6043,
      "end": 6101
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6107,
        "end": 6109
      },
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
              "start": 6110,
              "end": 6111
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 6120,
              "end": 6126
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6110,
            "end": 6126
          }
        ],
        "start": 6109,
        "end": 6127
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "S",
          "optional": false,
          "typeAnnotation": null,
          "start": 6130,
          "end": 6131
        },
        "typeArguments": null,
        "start": 6130,
        "end": 6131
      },
      "declare": false,
      "start": 6102,
      "end": 6132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TV1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6189,
        "end": 6192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 6195,
            "end": 6198
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 6205,
            "end": 6207
          }
        ],
        "types": [
          {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 6204,
                "end": 6205
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 6204,
              "end": 6205
            },
            "start": 6198,
            "end": 6205
          }
        ],
        "start": 6195,
        "end": 6207
      },
      "declare": false,
      "start": 6184,
      "end": 6208
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chars",
        "optional": false,
        "typeAnnotation": null,
        "start": 6281,
        "end": 6286
      },
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
              "start": 6287,
              "end": 6288
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 6297,
              "end": 6303
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6287,
            "end": 6303
          }
        ],
        "start": 6286,
        "end": 6304
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 6311,
          "end": 6317
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 6326,
            "end": 6327
          },
          "typeArguments": null,
          "start": 6326,
          "end": 6327
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 6330,
            "end": 6336
          },
          "start": 6330,
          "end": 6338
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 6345,
              "end": 6346
            },
            "typeArguments": null,
            "start": 6345,
            "end": 6346
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6355,
                "end": 6358
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6366,
                "end": 6369
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6377,
                "end": 6380
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6388,
                "end": 6391
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6399,
                "end": 6402
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6410,
                "end": 6413
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6421,
                "end": 6424
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6432,
                "end": 6435
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6443,
                "end": 6446
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6454,
                "end": 6457
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 6465,
                "end": 6468
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 6475,
                "end": 6477
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6364,
                    "end": 6366
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6364,
                  "end": 6366
                },
                "start": 6358,
                "end": 6366
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6375,
                    "end": 6377
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6375,
                  "end": 6377
                },
                "start": 6369,
                "end": 6377
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6386,
                    "end": 6388
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6386,
                  "end": 6388
                },
                "start": 6380,
                "end": 6388
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6397,
                    "end": 6399
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6397,
                  "end": 6399
                },
                "start": 6391,
                "end": 6399
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6408,
                    "end": 6410
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6408,
                  "end": 6410
                },
                "start": 6402,
                "end": 6410
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6419,
                    "end": 6421
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6419,
                  "end": 6421
                },
                "start": 6413,
                "end": 6421
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6430,
                    "end": 6432
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6430,
                  "end": 6432
                },
                "start": 6424,
                "end": 6432
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6441,
                    "end": 6443
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6441,
                  "end": 6443
                },
                "start": 6435,
                "end": 6443
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6452,
                    "end": 6454
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6452,
                  "end": 6454
                },
                "start": 6446,
                "end": 6454
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6463,
                    "end": 6465
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6463,
                  "end": 6465
                },
                "start": 6457,
                "end": 6465
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6474,
                    "end": 6475
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6474,
                  "end": 6475
                },
                "start": 6468,
                "end": 6475
              }
            ],
            "start": 6355,
            "end": 6477
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6481,
                  "end": 6483
                },
                "typeArguments": null,
                "start": 6481,
                "end": 6483
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6485,
                  "end": 6487
                },
                "typeArguments": null,
                "start": 6485,
                "end": 6487
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6489,
                  "end": 6491
                },
                "typeArguments": null,
                "start": 6489,
                "end": 6491
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6493,
                  "end": 6495
                },
                "typeArguments": null,
                "start": 6493,
                "end": 6495
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6497,
                  "end": 6499
                },
                "typeArguments": null,
                "start": 6497,
                "end": 6499
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6501,
                  "end": 6503
                },
                "typeArguments": null,
                "start": 6501,
                "end": 6503
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6505,
                  "end": 6507
                },
                "typeArguments": null,
                "start": 6505,
                "end": 6507
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6509,
                  "end": 6511
                },
                "typeArguments": null,
                "start": 6509,
                "end": 6511
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6513,
                  "end": 6515
                },
                "typeArguments": null,
                "start": 6513,
                "end": 6515
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6517,
                  "end": 6519
                },
                "typeArguments": null,
                "start": 6517,
                "end": 6519
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Chars",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6524,
                    "end": 6529
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6530,
                          "end": 6531
                        },
                        "typeArguments": null,
                        "start": 6530,
                        "end": 6531
                      }
                    ],
                    "start": 6529,
                    "end": 6532
                  },
                  "start": 6524,
                  "end": 6532
                },
                "start": 6521,
                "end": 6532
              }
            ],
            "start": 6480,
            "end": 6533
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 6540,
                "end": 6541
              },
              "typeArguments": null,
              "start": 6540,
              "end": 6541
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 6550,
                  "end": 6553
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 6560,
                  "end": 6563
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 6570,
                  "end": 6572
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6559,
                      "end": 6560
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 6559,
                    "end": 6560
                  },
                  "start": 6553,
                  "end": 6560
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6569,
                      "end": 6570
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 6569,
                    "end": 6570
                  },
                  "start": 6563,
                  "end": 6570
                }
              ],
              "start": 6550,
              "end": 6572
            },
            "trueType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6576,
                    "end": 6577
                  },
                  "typeArguments": null,
                  "start": 6576,
                  "end": 6577
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Chars",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6582,
                      "end": 6587
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6588,
                            "end": 6589
                          },
                          "typeArguments": null,
                          "start": 6588,
                          "end": 6589
                        }
                      ],
                      "start": 6587,
                      "end": 6590
                    },
                    "start": 6582,
                    "end": 6590
                  },
                  "start": 6579,
                  "end": 6590
                }
              ],
              "start": 6575,
              "end": 6591
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6598,
                  "end": 6599
                },
                "typeArguments": null,
                "start": 6598,
                "end": 6599
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 6608,
                  "end": 6610
                },
                "start": 6608,
                "end": 6610
              },
              "trueType": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 6613,
                "end": 6615
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 6622,
                "end": 6627
              },
              "start": 6598,
              "end": 6627
            },
            "start": 6540,
            "end": 6627
          },
          "start": 6345,
          "end": 6627
        },
        "start": 6311,
        "end": 6627
      },
      "declare": false,
      "start": 6276,
      "end": 6628
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6635,
        "end": 6637
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Chars",
          "optional": false,
          "typeAnnotation": null,
          "start": 6640,
          "end": 6645
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "FooBarBazThisIsALongerString",
                "raw": "'FooBarBazThisIsALongerString'",
                "start": 6646,
                "end": 6676
              },
              "start": 6646,
              "end": 6676
            }
          ],
          "start": 6645,
          "end": 6677
        },
        "start": 6640,
        "end": 6677
      },
      "declare": false,
      "start": 6630,
      "end": 6678
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6799,
        "end": 6802
      },
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
              "start": 6803,
              "end": 6804
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6803,
            "end": 6804
          }
        ],
        "start": 6802,
        "end": 6805
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6808,
            "end": 6809
          },
          "typeArguments": null,
          "start": 6808,
          "end": 6809
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "*",
                "cooked": "*"
              },
              "tail": false,
              "start": 6818,
              "end": 6822
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "*",
                "cooked": "*"
              },
              "tail": true,
              "start": 6829,
              "end": 6832
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6828,
                  "end": 6829
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6828,
                "end": 6829
              },
              "start": 6822,
              "end": 6829
            }
          ],
          "start": 6818,
          "end": 6832
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 6835,
            "end": 6836
          },
          "typeArguments": null,
          "start": 6835,
          "end": 6836
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6839,
          "end": 6844
        },
        "start": 6808,
        "end": 6844
      },
      "declare": false,
      "start": 6794,
      "end": 6845
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TF1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6852,
        "end": 6855
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 6858,
          "end": 6861
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 6862,
              "end": 6865
            }
          ],
          "start": 6861,
          "end": 6866
        },
        "start": 6858,
        "end": 6866
      },
      "declare": false,
      "start": 6847,
      "end": 6867
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TF2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6887,
        "end": 6890
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 6893,
          "end": 6896
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 6897,
              "end": 6903
            }
          ],
          "start": 6896,
          "end": 6904
        },
        "start": 6893,
        "end": 6904
      },
      "declare": false,
      "start": 6882,
      "end": 6905
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TF3",
        "optional": false,
        "typeAnnotation": null,
        "start": 6922,
        "end": 6925
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 6928,
          "end": 6931
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "abc",
                "raw": "'abc'",
                "start": 6932,
                "end": 6937
              },
              "start": 6932,
              "end": 6937
            }
          ],
          "start": 6931,
          "end": 6938
        },
        "start": 6928,
        "end": 6938
      },
      "declare": false,
      "start": 6917,
      "end": 6939
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TF4",
        "optional": false,
        "typeAnnotation": null,
        "start": 6957,
        "end": 6960
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 6963,
          "end": 6966
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "*abc*",
                "raw": "'*abc*'",
                "start": 6967,
                "end": 6974
              },
              "start": 6967,
              "end": 6974
            }
          ],
          "start": 6966,
          "end": 6975
        },
        "start": 6963,
        "end": 6975
      },
      "declare": false,
      "start": 6952,
      "end": 6976
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 7050,
        "end": 7051
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 7054,
        "end": 7057
      },
      "declare": false,
      "start": 7045,
      "end": 7058
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7065,
        "end": 7067
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7071,
                  "end": 7073
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7074,
                      "end": 7075
                    },
                    "typeArguments": null,
                    "start": 7074,
                    "end": 7075
                  },
                  "start": 7073,
                  "end": 7075
                },
                "accessibility": null,
                "static": false,
                "start": 7071,
                "end": 7075
              }
            ],
            "start": 7070,
            "end": 7076
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7080,
                  "end": 7082
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7083,
                      "end": 7084
                    },
                    "typeArguments": null,
                    "start": 7083,
                    "end": 7084
                  },
                  "start": 7082,
                  "end": 7084
                },
                "accessibility": null,
                "static": false,
                "start": 7080,
                "end": 7084
              }
            ],
            "start": 7079,
            "end": 7085
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7089,
                  "end": 7091
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7092,
                      "end": 7093
                    },
                    "typeArguments": null,
                    "start": 7092,
                    "end": 7093
                  },
                  "start": 7091,
                  "end": 7093
                },
                "accessibility": null,
                "static": false,
                "start": 7089,
                "end": 7093
              }
            ],
            "start": 7088,
            "end": 7094
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7098,
                  "end": 7100
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7101,
                      "end": 7102
                    },
                    "typeArguments": null,
                    "start": 7101,
                    "end": 7102
                  },
                  "start": 7100,
                  "end": 7102
                },
                "accessibility": null,
                "static": false,
                "start": 7098,
                "end": 7102
              }
            ],
            "start": 7097,
            "end": 7103
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7107,
                  "end": 7109
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7110,
                      "end": 7111
                    },
                    "typeArguments": null,
                    "start": 7110,
                    "end": 7111
                  },
                  "start": 7109,
                  "end": 7111
                },
                "accessibility": null,
                "static": false,
                "start": 7107,
                "end": 7111
              }
            ],
            "start": 7106,
            "end": 7112
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7116,
                  "end": 7118
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7119,
                      "end": 7120
                    },
                    "typeArguments": null,
                    "start": 7119,
                    "end": 7120
                  },
                  "start": 7118,
                  "end": 7120
                },
                "accessibility": null,
                "static": false,
                "start": 7116,
                "end": 7120
              }
            ],
            "start": 7115,
            "end": 7121
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7125,
                  "end": 7127
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7128,
                      "end": 7129
                    },
                    "typeArguments": null,
                    "start": 7128,
                    "end": 7129
                  },
                  "start": 7127,
                  "end": 7129
                },
                "accessibility": null,
                "static": false,
                "start": 7125,
                "end": 7129
              }
            ],
            "start": 7124,
            "end": 7130
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7134,
                  "end": 7136
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7137,
                      "end": 7138
                    },
                    "typeArguments": null,
                    "start": 7137,
                    "end": 7138
                  },
                  "start": 7136,
                  "end": 7138
                },
                "accessibility": null,
                "static": false,
                "start": 7134,
                "end": 7138
              }
            ],
            "start": 7133,
            "end": 7139
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7143,
                  "end": 7145
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7146,
                      "end": 7147
                    },
                    "typeArguments": null,
                    "start": 7146,
                    "end": 7147
                  },
                  "start": 7145,
                  "end": 7147
                },
                "accessibility": null,
                "static": false,
                "start": 7143,
                "end": 7147
              }
            ],
            "start": 7142,
            "end": 7148
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7152,
                  "end": 7154
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7155,
                      "end": 7156
                    },
                    "typeArguments": null,
                    "start": 7155,
                    "end": 7156
                  },
                  "start": 7154,
                  "end": 7156
                },
                "accessibility": null,
                "static": false,
                "start": 7152,
                "end": 7156
              }
            ],
            "start": 7151,
            "end": 7157
          }
        ],
        "start": 7070,
        "end": 7157
      },
      "declare": false,
      "start": 7060,
      "end": 7158
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U2",
        "optional": false,
        "typeAnnotation": null,
        "start": 7164,
        "end": 7166
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7170,
                  "end": 7172
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7173,
                      "end": 7174
                    },
                    "typeArguments": null,
                    "start": 7173,
                    "end": 7174
                  },
                  "start": 7172,
                  "end": 7174
                },
                "accessibility": null,
                "static": false,
                "start": 7170,
                "end": 7174
              }
            ],
            "start": 7169,
            "end": 7175
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7179,
                  "end": 7181
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7182,
                      "end": 7183
                    },
                    "typeArguments": null,
                    "start": 7182,
                    "end": 7183
                  },
                  "start": 7181,
                  "end": 7183
                },
                "accessibility": null,
                "static": false,
                "start": 7179,
                "end": 7183
              }
            ],
            "start": 7178,
            "end": 7184
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7188,
                  "end": 7190
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7191,
                      "end": 7192
                    },
                    "typeArguments": null,
                    "start": 7191,
                    "end": 7192
                  },
                  "start": 7190,
                  "end": 7192
                },
                "accessibility": null,
                "static": false,
                "start": 7188,
                "end": 7192
              }
            ],
            "start": 7187,
            "end": 7193
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7197,
                  "end": 7199
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7200,
                      "end": 7201
                    },
                    "typeArguments": null,
                    "start": 7200,
                    "end": 7201
                  },
                  "start": 7199,
                  "end": 7201
                },
                "accessibility": null,
                "static": false,
                "start": 7197,
                "end": 7201
              }
            ],
            "start": 7196,
            "end": 7202
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7206,
                  "end": 7208
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7209,
                      "end": 7210
                    },
                    "typeArguments": null,
                    "start": 7209,
                    "end": 7210
                  },
                  "start": 7208,
                  "end": 7210
                },
                "accessibility": null,
                "static": false,
                "start": 7206,
                "end": 7210
              }
            ],
            "start": 7205,
            "end": 7211
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7215,
                  "end": 7217
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7218,
                      "end": 7219
                    },
                    "typeArguments": null,
                    "start": 7218,
                    "end": 7219
                  },
                  "start": 7217,
                  "end": 7219
                },
                "accessibility": null,
                "static": false,
                "start": 7215,
                "end": 7219
              }
            ],
            "start": 7214,
            "end": 7220
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7224,
                  "end": 7226
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7227,
                      "end": 7228
                    },
                    "typeArguments": null,
                    "start": 7227,
                    "end": 7228
                  },
                  "start": 7226,
                  "end": 7228
                },
                "accessibility": null,
                "static": false,
                "start": 7224,
                "end": 7228
              }
            ],
            "start": 7223,
            "end": 7229
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7233,
                  "end": 7235
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7236,
                      "end": 7237
                    },
                    "typeArguments": null,
                    "start": 7236,
                    "end": 7237
                  },
                  "start": 7235,
                  "end": 7237
                },
                "accessibility": null,
                "static": false,
                "start": 7233,
                "end": 7237
              }
            ],
            "start": 7232,
            "end": 7238
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7242,
                  "end": 7244
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7245,
                      "end": 7246
                    },
                    "typeArguments": null,
                    "start": 7245,
                    "end": 7246
                  },
                  "start": 7244,
                  "end": 7246
                },
                "accessibility": null,
                "static": false,
                "start": 7242,
                "end": 7246
              }
            ],
            "start": 7241,
            "end": 7247
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7251,
                  "end": 7253
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7254,
                      "end": 7255
                    },
                    "typeArguments": null,
                    "start": 7254,
                    "end": 7255
                  },
                  "start": 7253,
                  "end": 7255
                },
                "accessibility": null,
                "static": false,
                "start": 7251,
                "end": 7255
              }
            ],
            "start": 7250,
            "end": 7256
          }
        ],
        "start": 7169,
        "end": 7256
      },
      "declare": false,
      "start": 7159,
      "end": 7257
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U3",
        "optional": false,
        "typeAnnotation": null,
        "start": 7263,
        "end": 7265
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7269,
                  "end": 7271
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7272,
                      "end": 7273
                    },
                    "typeArguments": null,
                    "start": 7272,
                    "end": 7273
                  },
                  "start": 7271,
                  "end": 7273
                },
                "accessibility": null,
                "static": false,
                "start": 7269,
                "end": 7273
              }
            ],
            "start": 7268,
            "end": 7274
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7278,
                  "end": 7280
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7281,
                      "end": 7282
                    },
                    "typeArguments": null,
                    "start": 7281,
                    "end": 7282
                  },
                  "start": 7280,
                  "end": 7282
                },
                "accessibility": null,
                "static": false,
                "start": 7278,
                "end": 7282
              }
            ],
            "start": 7277,
            "end": 7283
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7287,
                  "end": 7289
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7290,
                      "end": 7291
                    },
                    "typeArguments": null,
                    "start": 7290,
                    "end": 7291
                  },
                  "start": 7289,
                  "end": 7291
                },
                "accessibility": null,
                "static": false,
                "start": 7287,
                "end": 7291
              }
            ],
            "start": 7286,
            "end": 7292
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7296,
                  "end": 7298
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7299,
                      "end": 7300
                    },
                    "typeArguments": null,
                    "start": 7299,
                    "end": 7300
                  },
                  "start": 7298,
                  "end": 7300
                },
                "accessibility": null,
                "static": false,
                "start": 7296,
                "end": 7300
              }
            ],
            "start": 7295,
            "end": 7301
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7305,
                  "end": 7307
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7308,
                      "end": 7309
                    },
                    "typeArguments": null,
                    "start": 7308,
                    "end": 7309
                  },
                  "start": 7307,
                  "end": 7309
                },
                "accessibility": null,
                "static": false,
                "start": 7305,
                "end": 7309
              }
            ],
            "start": 7304,
            "end": 7310
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7314,
                  "end": 7316
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7317,
                      "end": 7318
                    },
                    "typeArguments": null,
                    "start": 7317,
                    "end": 7318
                  },
                  "start": 7316,
                  "end": 7318
                },
                "accessibility": null,
                "static": false,
                "start": 7314,
                "end": 7318
              }
            ],
            "start": 7313,
            "end": 7319
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7323,
                  "end": 7325
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7326,
                      "end": 7327
                    },
                    "typeArguments": null,
                    "start": 7326,
                    "end": 7327
                  },
                  "start": 7325,
                  "end": 7327
                },
                "accessibility": null,
                "static": false,
                "start": 7323,
                "end": 7327
              }
            ],
            "start": 7322,
            "end": 7328
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7332,
                  "end": 7334
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7335,
                      "end": 7336
                    },
                    "typeArguments": null,
                    "start": 7335,
                    "end": 7336
                  },
                  "start": 7334,
                  "end": 7336
                },
                "accessibility": null,
                "static": false,
                "start": 7332,
                "end": 7336
              }
            ],
            "start": 7331,
            "end": 7337
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7341,
                  "end": 7343
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7344,
                      "end": 7345
                    },
                    "typeArguments": null,
                    "start": 7344,
                    "end": 7345
                  },
                  "start": 7343,
                  "end": 7345
                },
                "accessibility": null,
                "static": false,
                "start": 7341,
                "end": 7345
              }
            ],
            "start": 7340,
            "end": 7346
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7350,
                  "end": 7352
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7353,
                      "end": 7354
                    },
                    "typeArguments": null,
                    "start": 7353,
                    "end": 7354
                  },
                  "start": 7352,
                  "end": 7354
                },
                "accessibility": null,
                "static": false,
                "start": 7350,
                "end": 7354
              }
            ],
            "start": 7349,
            "end": 7355
          }
        ],
        "start": 7268,
        "end": 7355
      },
      "declare": false,
      "start": 7258,
      "end": 7356
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U4",
        "optional": false,
        "typeAnnotation": null,
        "start": 7362,
        "end": 7364
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7368,
                  "end": 7370
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7371,
                      "end": 7372
                    },
                    "typeArguments": null,
                    "start": 7371,
                    "end": 7372
                  },
                  "start": 7370,
                  "end": 7372
                },
                "accessibility": null,
                "static": false,
                "start": 7368,
                "end": 7372
              }
            ],
            "start": 7367,
            "end": 7373
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7377,
                  "end": 7379
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7380,
                      "end": 7381
                    },
                    "typeArguments": null,
                    "start": 7380,
                    "end": 7381
                  },
                  "start": 7379,
                  "end": 7381
                },
                "accessibility": null,
                "static": false,
                "start": 7377,
                "end": 7381
              }
            ],
            "start": 7376,
            "end": 7382
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7386,
                  "end": 7388
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7389,
                      "end": 7390
                    },
                    "typeArguments": null,
                    "start": 7389,
                    "end": 7390
                  },
                  "start": 7388,
                  "end": 7390
                },
                "accessibility": null,
                "static": false,
                "start": 7386,
                "end": 7390
              }
            ],
            "start": 7385,
            "end": 7391
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7395,
                  "end": 7397
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7398,
                      "end": 7399
                    },
                    "typeArguments": null,
                    "start": 7398,
                    "end": 7399
                  },
                  "start": 7397,
                  "end": 7399
                },
                "accessibility": null,
                "static": false,
                "start": 7395,
                "end": 7399
              }
            ],
            "start": 7394,
            "end": 7400
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7404,
                  "end": 7406
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7407,
                      "end": 7408
                    },
                    "typeArguments": null,
                    "start": 7407,
                    "end": 7408
                  },
                  "start": 7406,
                  "end": 7408
                },
                "accessibility": null,
                "static": false,
                "start": 7404,
                "end": 7408
              }
            ],
            "start": 7403,
            "end": 7409
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7413,
                  "end": 7415
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7416,
                      "end": 7417
                    },
                    "typeArguments": null,
                    "start": 7416,
                    "end": 7417
                  },
                  "start": 7415,
                  "end": 7417
                },
                "accessibility": null,
                "static": false,
                "start": 7413,
                "end": 7417
              }
            ],
            "start": 7412,
            "end": 7418
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7422,
                  "end": 7424
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7425,
                      "end": 7426
                    },
                    "typeArguments": null,
                    "start": 7425,
                    "end": 7426
                  },
                  "start": 7424,
                  "end": 7426
                },
                "accessibility": null,
                "static": false,
                "start": 7422,
                "end": 7426
              }
            ],
            "start": 7421,
            "end": 7427
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7431,
                  "end": 7433
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7434,
                      "end": 7435
                    },
                    "typeArguments": null,
                    "start": 7434,
                    "end": 7435
                  },
                  "start": 7433,
                  "end": 7435
                },
                "accessibility": null,
                "static": false,
                "start": 7431,
                "end": 7435
              }
            ],
            "start": 7430,
            "end": 7436
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7440,
                  "end": 7442
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7443,
                      "end": 7444
                    },
                    "typeArguments": null,
                    "start": 7443,
                    "end": 7444
                  },
                  "start": 7442,
                  "end": 7444
                },
                "accessibility": null,
                "static": false,
                "start": 7440,
                "end": 7444
              }
            ],
            "start": 7439,
            "end": 7445
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7449,
                  "end": 7451
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7452,
                      "end": 7453
                    },
                    "typeArguments": null,
                    "start": 7452,
                    "end": 7453
                  },
                  "start": 7451,
                  "end": 7453
                },
                "accessibility": null,
                "static": false,
                "start": 7449,
                "end": 7453
              }
            ],
            "start": 7448,
            "end": 7454
          }
        ],
        "start": 7367,
        "end": 7454
      },
      "declare": false,
      "start": 7357,
      "end": 7455
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U5",
        "optional": false,
        "typeAnnotation": null,
        "start": 7461,
        "end": 7463
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7467,
                  "end": 7469
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7470,
                      "end": 7471
                    },
                    "typeArguments": null,
                    "start": 7470,
                    "end": 7471
                  },
                  "start": 7469,
                  "end": 7471
                },
                "accessibility": null,
                "static": false,
                "start": 7467,
                "end": 7471
              }
            ],
            "start": 7466,
            "end": 7472
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7476,
                  "end": 7478
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7479,
                      "end": 7480
                    },
                    "typeArguments": null,
                    "start": 7479,
                    "end": 7480
                  },
                  "start": 7478,
                  "end": 7480
                },
                "accessibility": null,
                "static": false,
                "start": 7476,
                "end": 7480
              }
            ],
            "start": 7475,
            "end": 7481
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7485,
                  "end": 7487
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7488,
                      "end": 7489
                    },
                    "typeArguments": null,
                    "start": 7488,
                    "end": 7489
                  },
                  "start": 7487,
                  "end": 7489
                },
                "accessibility": null,
                "static": false,
                "start": 7485,
                "end": 7489
              }
            ],
            "start": 7484,
            "end": 7490
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7494,
                  "end": 7496
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7497,
                      "end": 7498
                    },
                    "typeArguments": null,
                    "start": 7497,
                    "end": 7498
                  },
                  "start": 7496,
                  "end": 7498
                },
                "accessibility": null,
                "static": false,
                "start": 7494,
                "end": 7498
              }
            ],
            "start": 7493,
            "end": 7499
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7503,
                  "end": 7505
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7506,
                      "end": 7507
                    },
                    "typeArguments": null,
                    "start": 7506,
                    "end": 7507
                  },
                  "start": 7505,
                  "end": 7507
                },
                "accessibility": null,
                "static": false,
                "start": 7503,
                "end": 7507
              }
            ],
            "start": 7502,
            "end": 7508
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7512,
                  "end": 7514
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7515,
                      "end": 7516
                    },
                    "typeArguments": null,
                    "start": 7515,
                    "end": 7516
                  },
                  "start": 7514,
                  "end": 7516
                },
                "accessibility": null,
                "static": false,
                "start": 7512,
                "end": 7516
              }
            ],
            "start": 7511,
            "end": 7517
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7521,
                  "end": 7523
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7524,
                      "end": 7525
                    },
                    "typeArguments": null,
                    "start": 7524,
                    "end": 7525
                  },
                  "start": 7523,
                  "end": 7525
                },
                "accessibility": null,
                "static": false,
                "start": 7521,
                "end": 7525
              }
            ],
            "start": 7520,
            "end": 7526
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7530,
                  "end": 7532
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7533,
                      "end": 7534
                    },
                    "typeArguments": null,
                    "start": 7533,
                    "end": 7534
                  },
                  "start": 7532,
                  "end": 7534
                },
                "accessibility": null,
                "static": false,
                "start": 7530,
                "end": 7534
              }
            ],
            "start": 7529,
            "end": 7535
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7539,
                  "end": 7541
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7542,
                      "end": 7543
                    },
                    "typeArguments": null,
                    "start": 7542,
                    "end": 7543
                  },
                  "start": 7541,
                  "end": 7543
                },
                "accessibility": null,
                "static": false,
                "start": 7539,
                "end": 7543
              }
            ],
            "start": 7538,
            "end": 7544
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7548,
                  "end": 7550
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7551,
                      "end": 7552
                    },
                    "typeArguments": null,
                    "start": 7551,
                    "end": 7552
                  },
                  "start": 7550,
                  "end": 7552
                },
                "accessibility": null,
                "static": false,
                "start": 7548,
                "end": 7552
              }
            ],
            "start": 7547,
            "end": 7553
          }
        ],
        "start": 7466,
        "end": 7553
      },
      "declare": false,
      "start": 7456,
      "end": 7554
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U100000",
        "optional": false,
        "typeAnnotation": null,
        "start": 7561,
        "end": 7568
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7571,
              "end": 7573
            },
            "typeArguments": null,
            "start": 7571,
            "end": 7573
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U2",
              "optional": false,
              "typeAnnotation": null,
              "start": 7576,
              "end": 7578
            },
            "typeArguments": null,
            "start": 7576,
            "end": 7578
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U3",
              "optional": false,
              "typeAnnotation": null,
              "start": 7581,
              "end": 7583
            },
            "typeArguments": null,
            "start": 7581,
            "end": 7583
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U4",
              "optional": false,
              "typeAnnotation": null,
              "start": 7586,
              "end": 7588
            },
            "typeArguments": null,
            "start": 7586,
            "end": 7588
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U5",
              "optional": false,
              "typeAnnotation": null,
              "start": 7591,
              "end": 7593
            },
            "typeArguments": null,
            "start": 7591,
            "end": 7593
          }
        ],
        "start": 7571,
        "end": 7593
      },
      "declare": false,
      "start": 7556,
      "end": 7594
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Digits",
        "optional": false,
        "typeAnnotation": null,
        "start": 7611,
        "end": 7617
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 7620,
              "end": 7621
            },
            "start": 7620,
            "end": 7621
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 7624,
              "end": 7625
            },
            "start": 7624,
            "end": 7625
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 7628,
              "end": 7629
            },
            "start": 7628,
            "end": 7629
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 7632,
              "end": 7633
            },
            "start": 7632,
            "end": 7633
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 7636,
              "end": 7637
            },
            "start": 7636,
            "end": 7637
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 7640,
              "end": 7641
            },
            "start": 7640,
            "end": 7641
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 7644,
              "end": 7645
            },
            "start": 7644,
            "end": 7645
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 7,
              "raw": "7",
              "start": 7648,
              "end": 7649
            },
            "start": 7648,
            "end": 7649
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 7652,
              "end": 7653
            },
            "start": 7652,
            "end": 7653
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 9,
              "raw": "9",
              "start": 7656,
              "end": 7657
            },
            "start": 7656,
            "end": 7657
          }
        ],
        "start": 7620,
        "end": 7657
      },
      "declare": false,
      "start": 7606,
      "end": 7658
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D100000",
        "optional": false,
        "typeAnnotation": null,
        "start": 7665,
        "end": 7672
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 7675,
            "end": 7678
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 7684,
            "end": 7687
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 7693,
            "end": 7696
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 7702,
            "end": 7705
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 7711,
            "end": 7714
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 7720,
            "end": 7722
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null,
              "start": 7678,
              "end": 7684
            },
            "typeArguments": null,
            "start": 7678,
            "end": 7684
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null,
              "start": 7687,
              "end": 7693
            },
            "typeArguments": null,
            "start": 7687,
            "end": 7693
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null,
              "start": 7696,
              "end": 7702
            },
            "typeArguments": null,
            "start": 7696,
            "end": 7702
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null,
              "start": 7705,
              "end": 7711
            },
            "typeArguments": null,
            "start": 7705,
            "end": 7711
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null,
              "start": 7714,
              "end": 7720
            },
            "typeArguments": null,
            "start": 7714,
            "end": 7720
          }
        ],
        "start": 7675,
        "end": 7722
      },
      "declare": false,
      "start": 7660,
      "end": 7723
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TDigits",
        "optional": false,
        "typeAnnotation": null,
        "start": 7740,
        "end": 7747
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 7751,
                  "end": 7752
                },
                "start": 7751,
                "end": 7752
              }
            ],
            "start": 7750,
            "end": 7753
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 7757,
                  "end": 7758
                },
                "start": 7757,
                "end": 7758
              }
            ],
            "start": 7756,
            "end": 7759
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 7763,
                  "end": 7764
                },
                "start": 7763,
                "end": 7764
              }
            ],
            "start": 7762,
            "end": 7765
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 7769,
                  "end": 7770
                },
                "start": 7769,
                "end": 7770
              }
            ],
            "start": 7768,
            "end": 7771
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 7775,
                  "end": 7776
                },
                "start": 7775,
                "end": 7776
              }
            ],
            "start": 7774,
            "end": 7777
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 7781,
                  "end": 7782
                },
                "start": 7781,
                "end": 7782
              }
            ],
            "start": 7780,
            "end": 7783
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 6,
                  "raw": "6",
                  "start": 7787,
                  "end": 7788
                },
                "start": 7787,
                "end": 7788
              }
            ],
            "start": 7786,
            "end": 7789
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 7793,
                  "end": 7794
                },
                "start": 7793,
                "end": 7794
              }
            ],
            "start": 7792,
            "end": 7795
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 8,
                  "raw": "8",
                  "start": 7799,
                  "end": 7800
                },
                "start": 7799,
                "end": 7800
              }
            ],
            "start": 7798,
            "end": 7801
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 9,
                  "raw": "9",
                  "start": 7805,
                  "end": 7806
                },
                "start": 7805,
                "end": 7806
              }
            ],
            "start": 7804,
            "end": 7807
          }
        ],
        "start": 7750,
        "end": 7807
      },
      "declare": false,
      "start": 7735,
      "end": 7808
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T100000",
        "optional": false,
        "typeAnnotation": null,
        "start": 7815,
        "end": 7822
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null,
                "start": 7829,
                "end": 7836
              },
              "typeArguments": null,
              "start": 7829,
              "end": 7836
            },
            "start": 7826,
            "end": 7836
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null,
                "start": 7841,
                "end": 7848
              },
              "typeArguments": null,
              "start": 7841,
              "end": 7848
            },
            "start": 7838,
            "end": 7848
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null,
                "start": 7853,
                "end": 7860
              },
              "typeArguments": null,
              "start": 7853,
              "end": 7860
            },
            "start": 7850,
            "end": 7860
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null,
                "start": 7865,
                "end": 7872
              },
              "typeArguments": null,
              "start": 7865,
              "end": 7872
            },
            "start": 7862,
            "end": 7872
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null,
                "start": 7877,
                "end": 7884
              },
              "typeArguments": null,
              "start": 7877,
              "end": 7884
            },
            "start": 7874,
            "end": 7884
          }
        ],
        "start": 7825,
        "end": 7885
      },
      "declare": false,
      "start": 7810,
      "end": 7886
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsNegative",
        "optional": false,
        "typeAnnotation": null,
        "start": 7925,
        "end": 7935
      },
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
              "start": 7936,
              "end": 7937
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 7946,
              "end": 7952
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7936,
            "end": 7952
          }
        ],
        "start": 7935,
        "end": 7953
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 7956,
              "end": 7959
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7960,
              "end": 7962
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 7959,
                "end": 7960
              },
              "typeArguments": null,
              "start": 7959,
              "end": 7960
            }
          ],
          "start": 7956,
          "end": 7962
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "-",
                "cooked": "-"
              },
              "tail": false,
              "start": 7971,
              "end": 7975
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7981,
              "end": 7983
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 7975,
              "end": 7981
            }
          ],
          "start": 7971,
          "end": 7983
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 7986,
            "end": 7990
          },
          "start": 7986,
          "end": 7990
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 7993,
            "end": 7998
          },
          "start": 7993,
          "end": 7998
        },
        "start": 7956,
        "end": 7998
      },
      "declare": false,
      "start": 7920,
      "end": 7999
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 8006,
        "end": 8008
      },
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
              "start": 8009,
              "end": 8010
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 8019,
              "end": 8025
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8009,
            "end": 8025
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 8027,
              "end": 8028
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 8037,
              "end": 8043
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8027,
            "end": 8043
          }
        ],
        "start": 8008,
        "end": 8044
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 8052,
                "end": 8056
              },
              "start": 8052,
              "end": 8056
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 8058,
                "end": 8062
              },
              "start": 8058,
              "end": 8062
            }
          ],
          "start": 8051,
          "end": 8063
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null,
                "start": 8073,
                "end": 8083
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8084,
                      "end": 8085
                    },
                    "typeArguments": null,
                    "start": 8084,
                    "end": 8085
                  }
                ],
                "start": 8083,
                "end": 8086
              },
              "start": 8073,
              "end": 8086
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null,
                "start": 8088,
                "end": 8098
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8099,
                      "end": 8100
                    },
                    "typeArguments": null,
                    "start": 8099,
                    "end": 8100
                  }
                ],
                "start": 8098,
                "end": 8101
              },
              "start": 8088,
              "end": 8101
            }
          ],
          "start": 8072,
          "end": 8102
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Every thing is ok!",
            "raw": "'Every thing is ok!'",
            "start": 8105,
            "end": 8125
          },
          "start": 8105,
          "end": 8125
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "strange",
                "raw": "'strange'",
                "start": 8129,
                "end": 8138
              },
              "start": 8129,
              "end": 8138
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null,
                "start": 8140,
                "end": 8150
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8151,
                      "end": 8152
                    },
                    "typeArguments": null,
                    "start": 8151,
                    "end": 8152
                  }
                ],
                "start": 8150,
                "end": 8153
              },
              "start": 8140,
              "end": 8153
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null,
                "start": 8155,
                "end": 8165
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8166,
                      "end": 8167
                    },
                    "typeArguments": null,
                    "start": 8166,
                    "end": 8167
                  }
                ],
                "start": 8165,
                "end": 8168
              },
              "start": 8155,
              "end": 8168
            }
          ],
          "start": 8128,
          "end": 8169
        },
        "start": 8051,
        "end": 8169
      },
      "declare": false,
      "start": 8001,
      "end": 8170
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 8177,
        "end": 8179
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null,
          "start": 8182,
          "end": 8184
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 8186,
                  "end": 8187
                },
                "prefix": true,
                "start": 8185,
                "end": 8187
              },
              "start": 8185,
              "end": 8187
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 8190,
                  "end": 8191
                },
                "prefix": true,
                "start": 8189,
                "end": 8191
              },
              "start": 8189,
              "end": 8191
            }
          ],
          "start": 8184,
          "end": 8192
        },
        "start": 8182,
        "end": 8192
      },
      "declare": false,
      "start": 8172,
      "end": 8193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PathKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 8222,
        "end": 8230
      },
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
              "start": 8231,
              "end": 8232
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8231,
            "end": 8232
          }
        ],
        "start": 8230,
        "end": 8233
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSUnknownKeyword",
          "start": 8240,
          "end": 8247
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 8256,
            "end": 8257
          },
          "typeArguments": null,
          "start": 8256,
          "end": 8257
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 8260,
          "end": 8265
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 8272,
              "end": 8273
            },
            "typeArguments": null,
            "start": 8272,
            "end": 8273
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 8291,
                "end": 8294
              },
              "start": 8291,
              "end": 8296
            },
            "start": 8282,
            "end": 8296
          },
          "trueType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Extract",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8299,
                  "end": 8306
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8313,
                          "end": 8314
                        },
                        "typeArguments": null,
                        "start": 8313,
                        "end": 8314
                      },
                      "start": 8307,
                      "end": 8314
                    },
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 8316,
                          "end": 8319
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 8325,
                          "end": 8327
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 8319,
                          "end": 8325
                        }
                      ],
                      "start": 8316,
                      "end": 8327
                    }
                  ],
                  "start": 8306,
                  "end": 8328
                },
                "start": 8299,
                "end": 8328
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SubKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8331,
                  "end": 8338
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8339,
                        "end": 8340
                      },
                      "typeArguments": null,
                      "start": 8339,
                      "end": 8340
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8342,
                        "end": 8349
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8356,
                                "end": 8357
                              },
                              "typeArguments": null,
                              "start": 8356,
                              "end": 8357
                            },
                            "start": 8350,
                            "end": 8357
                          },
                          {
                            "type": "TSTemplateLiteralType",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": false,
                                "start": 8359,
                                "end": 8362
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": true,
                                "start": 8368,
                                "end": 8370
                              }
                            ],
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 8362,
                                "end": 8368
                              }
                            ],
                            "start": 8359,
                            "end": 8370
                          }
                        ],
                        "start": 8349,
                        "end": 8371
                      },
                      "start": 8342,
                      "end": 8371
                    }
                  ],
                  "start": 8338,
                  "end": 8372
                },
                "start": 8331,
                "end": 8372
              }
            ],
            "start": 8299,
            "end": 8372
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 8379,
                "end": 8380
              },
              "typeArguments": null,
              "start": 8379,
              "end": 8380
            },
            "extendsType": {
              "type": "TSObjectKeyword",
              "start": 8389,
              "end": 8395
            },
            "trueType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8398,
                    "end": 8405
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8412,
                            "end": 8413
                          },
                          "typeArguments": null,
                          "start": 8412,
                          "end": 8413
                        },
                        "start": 8406,
                        "end": 8413
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 8415,
                        "end": 8421
                      }
                    ],
                    "start": 8405,
                    "end": 8422
                  },
                  "start": 8398,
                  "end": 8422
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SubKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8425,
                    "end": 8432
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8433,
                          "end": 8434
                        },
                        "typeArguments": null,
                        "start": 8433,
                        "end": 8434
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Extract",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8436,
                          "end": 8443
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8450,
                                  "end": 8451
                                },
                                "typeArguments": null,
                                "start": 8450,
                                "end": 8451
                              },
                              "start": 8444,
                              "end": 8451
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 8453,
                              "end": 8459
                            }
                          ],
                          "start": 8443,
                          "end": 8460
                        },
                        "start": 8436,
                        "end": 8460
                      }
                    ],
                    "start": 8432,
                    "end": 8461
                  },
                  "start": 8425,
                  "end": 8461
                }
              ],
              "start": 8398,
              "end": 8461
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 8468,
              "end": 8473
            },
            "start": 8379,
            "end": 8473
          },
          "start": 8272,
          "end": 8473
        },
        "start": 8240,
        "end": 8473
      },
      "declare": false,
      "start": 8217,
      "end": 8474
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 8481,
        "end": 8488
      },
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
              "start": 8489,
              "end": 8490
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8489,
            "end": 8490
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 8492,
              "end": 8493
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 8502,
              "end": 8508
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8492,
            "end": 8508
          }
        ],
        "start": 8488,
        "end": 8509
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 8512,
            "end": 8513
          },
          "typeArguments": null,
          "start": 8512,
          "end": 8513
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 8528,
              "end": 8529
            },
            "typeArguments": null,
            "start": 8528,
            "end": 8529
          },
          "start": 8522,
          "end": 8529
        },
        "trueType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 8532,
              "end": 8535
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 8536,
              "end": 8540
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 8554,
              "end": 8556
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 8535,
                "end": 8536
              },
              "typeArguments": null,
              "start": 8535,
              "end": 8536
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PathKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 8540,
                "end": 8548
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8549,
                        "end": 8550
                      },
                      "typeArguments": null,
                      "start": 8549,
                      "end": 8550
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8551,
                        "end": 8552
                      },
                      "typeArguments": null,
                      "start": 8551,
                      "end": 8552
                    },
                    "start": 8549,
                    "end": 8553
                  }
                ],
                "start": 8548,
                "end": 8554
              },
              "start": 8540,
              "end": 8554
            }
          ],
          "start": 8532,
          "end": 8556
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 8559,
          "end": 8564
        },
        "start": 8512,
        "end": 8564
      },
      "declare": false,
      "start": 8476,
      "end": 8565
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProp2",
        "optional": false,
        "typeAnnotation": null,
        "start": 8584,
        "end": 8592
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
              "start": 8593,
              "end": 8594
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8593,
            "end": 8594
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 8596,
              "end": 8597
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PathKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 8606,
                "end": 8614
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8615,
                      "end": 8616
                    },
                    "typeArguments": null,
                    "start": 8615,
                    "end": 8616
                  }
                ],
                "start": 8614,
                "end": 8617
              },
              "start": 8606,
              "end": 8617
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8596,
            "end": 8617
          }
        ],
        "start": 8592,
        "end": 8618
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 8624,
                "end": 8625
              },
              "typeArguments": null,
              "start": 8624,
              "end": 8625
            },
            "start": 8622,
            "end": 8625
          },
          "start": 8619,
          "end": 8625
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8633,
                "end": 8634
              },
              "typeArguments": null,
              "start": 8633,
              "end": 8634
            },
            "start": 8631,
            "end": 8634
          },
          "start": 8627,
          "end": 8634
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropType",
            "optional": false,
            "typeAnnotation": null,
            "start": 8637,
            "end": 8645
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8646,
                  "end": 8647
                },
                "typeArguments": null,
                "start": 8646,
                "end": 8647
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8649,
                  "end": 8650
                },
                "typeArguments": null,
                "start": 8649,
                "end": 8650
              }
            ],
            "start": 8645,
            "end": 8651
          },
          "start": 8637,
          "end": 8651
        },
        "start": 8635,
        "end": 8651
      },
      "body": null,
      "expression": false,
      "start": 8567,
      "end": 8652
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 8660,
            "end": 8664
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8673,
                    "end": 8677
                  },
                  "value": {
                    "type": "Literal",
                    "value": "John",
                    "raw": "'John'",
                    "start": 8679,
                    "end": 8685
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 8673,
                  "end": 8685
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "age",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8691,
                    "end": 8694
                  },
                  "value": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 8696,
                    "end": 8698
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 8691,
                  "end": 8698
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cars",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8704,
                    "end": 8708
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "make",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8722,
                              "end": 8726
                            },
                            "value": {
                              "type": "Literal",
                              "value": "Ford",
                              "raw": "'Ford'",
                              "start": 8728,
                              "end": 8734
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 8722,
                            "end": 8734
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "age",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8736,
                              "end": 8739
                            },
                            "value": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 8741,
                              "end": 8743
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 8736,
                            "end": 8743
                          }
                        ],
                        "start": 8720,
                        "end": 8745
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "make",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8757,
                              "end": 8761
                            },
                            "value": {
                              "type": "Literal",
                              "value": "Trabant",
                              "raw": "'Trabant'",
                              "start": 8763,
                              "end": 8772
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 8757,
                            "end": 8772
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "age",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8774,
                              "end": 8777
                            },
                            "value": {
                              "type": "Literal",
                              "value": 35,
                              "raw": "35",
                              "start": 8779,
                              "end": 8781
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 8774,
                            "end": 8781
                          }
                        ],
                        "start": 8755,
                        "end": 8783
                      }
                    ],
                    "start": 8710,
                    "end": 8789
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 8704,
                  "end": 8789
                }
              ],
              "start": 8667,
              "end": 8791
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 8795,
                "end": 8800
              },
              "typeArguments": null,
              "start": 8795,
              "end": 8800
            },
            "start": 8667,
            "end": 8800
          },
          "definite": false,
          "start": 8660,
          "end": 8800
        }
      ],
      "declare": false,
      "start": 8654,
      "end": 8801
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
            "name": "make",
            "optional": false,
            "typeAnnotation": null,
            "start": 8807,
            "end": 8811
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 8814,
              "end": 8822
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 8823,
                "end": 8827
              },
              {
                "type": "Literal",
                "value": "cars.1.make",
                "raw": "'cars.1.make'",
                "start": 8829,
                "end": 8842
              }
            ],
            "optional": false,
            "start": 8814,
            "end": 8843
          },
          "definite": false,
          "start": 8807,
          "end": 8843
        }
      ],
      "declare": false,
      "start": 8803,
      "end": 8844
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Spacing",
          "optional": false,
          "typeAnnotation": null,
          "start": 8894,
          "end": 8901
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "0",
                      "cooked": "0"
                    },
                    "tail": true,
                    "start": 8910,
                    "end": 8913
                  }
                ],
                "expressions": [],
                "start": 8910,
                "end": 8913
              },
              "start": 8910,
              "end": 8913
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 8920,
                  "end": 8923
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "px",
                    "cooked": "px"
                  },
                  "tail": true,
                  "start": 8929,
                  "end": 8933
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 8923,
                  "end": 8929
                }
              ],
              "start": 8920,
              "end": 8933
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 8940,
                  "end": 8943
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "rem",
                    "cooked": "rem"
                  },
                  "tail": true,
                  "start": 8949,
                  "end": 8954
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 8943,
                  "end": 8949
                }
              ],
              "start": 8940,
              "end": 8954
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 8961,
                  "end": 8965
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 9053,
                  "end": 9055
                }
              ],
              "types": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 8965,
                        "end": 8966
                      },
                      "start": 8965,
                      "end": 8966
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 8969,
                        "end": 8970
                      },
                      "start": 8969,
                      "end": 8970
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 8973,
                        "end": 8974
                      },
                      "start": 8973,
                      "end": 8974
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 8977,
                        "end": 8978
                      },
                      "start": 8977,
                      "end": 8978
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 8981,
                        "end": 8982
                      },
                      "start": 8981,
                      "end": 8982
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 8985,
                        "end": 8986
                      },
                      "start": 8985,
                      "end": 8986
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 8989,
                        "end": 8990
                      },
                      "start": 8989,
                      "end": 8990
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 8993,
                        "end": 8994
                      },
                      "start": 8993,
                      "end": 8994
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 8997,
                        "end": 8998
                      },
                      "start": 8997,
                      "end": 8998
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 9001,
                        "end": 9003
                      },
                      "start": 9001,
                      "end": 9003
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 9006,
                        "end": 9008
                      },
                      "start": 9006,
                      "end": 9008
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 9011,
                        "end": 9013
                      },
                      "start": 9011,
                      "end": 9013
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 9016,
                        "end": 9018
                      },
                      "start": 9016,
                      "end": 9018
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 9021,
                        "end": 9023
                      },
                      "start": 9021,
                      "end": 9023
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 9026,
                        "end": 9028
                      },
                      "start": 9026,
                      "end": 9028
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 9031,
                        "end": 9033
                      },
                      "start": 9031,
                      "end": 9033
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 9036,
                        "end": 9038
                      },
                      "start": 9036,
                      "end": 9038
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 18,
                        "raw": "18",
                        "start": 9041,
                        "end": 9043
                      },
                      "start": 9041,
                      "end": 9043
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 19,
                        "raw": "19",
                        "start": 9046,
                        "end": 9048
                      },
                      "start": 9046,
                      "end": 9048
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 9051,
                        "end": 9053
                      },
                      "start": 9051,
                      "end": 9053
                    }
                  ],
                  "start": 8965,
                  "end": 9053
                }
              ],
              "start": 8961,
              "end": 9055
            }
          ],
          "start": 8908,
          "end": 9055
        },
        "declare": false,
        "start": 8889,
        "end": 9056
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8882,
      "end": 9056
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
            "name": "spacing",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Spacing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9073,
                  "end": 9080
                },
                "typeArguments": null,
                "start": 9073,
                "end": 9080
              },
              "start": 9071,
              "end": 9080
            },
            "start": 9064,
            "end": 9080
          },
          "init": {
            "type": "Literal",
            "value": "s12",
            "raw": "\"s12\"",
            "start": 9083,
            "end": 9088
          },
          "definite": false,
          "start": 9064,
          "end": 9088
        }
      ],
      "declare": false,
      "start": 9058,
      "end": 9088
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SpacingShorthand",
          "optional": false,
          "typeAnnotation": null,
          "start": 9102,
          "end": 9118
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 9127,
                  "end": 9130
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9137,
                  "end": 9141
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 9148,
                  "end": 9150
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9130,
                    "end": 9137
                  },
                  "typeArguments": null,
                  "start": 9130,
                  "end": 9137
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9141,
                    "end": 9148
                  },
                  "typeArguments": null,
                  "start": 9141,
                  "end": 9148
                }
              ],
              "start": 9127,
              "end": 9150
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 9157,
                  "end": 9160
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9167,
                  "end": 9171
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9178,
                  "end": 9182
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 9189,
                  "end": 9191
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9160,
                    "end": 9167
                  },
                  "typeArguments": null,
                  "start": 9160,
                  "end": 9167
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9171,
                    "end": 9178
                  },
                  "typeArguments": null,
                  "start": 9171,
                  "end": 9178
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9182,
                    "end": 9189
                  },
                  "typeArguments": null,
                  "start": 9182,
                  "end": 9189
                }
              ],
              "start": 9157,
              "end": 9191
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 9198,
                  "end": 9201
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9208,
                  "end": 9212
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9219,
                  "end": 9223
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false,
                  "start": 9230,
                  "end": 9234
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 9241,
                  "end": 9243
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9201,
                    "end": 9208
                  },
                  "typeArguments": null,
                  "start": 9201,
                  "end": 9208
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9212,
                    "end": 9219
                  },
                  "typeArguments": null,
                  "start": 9212,
                  "end": 9219
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9223,
                    "end": 9230
                  },
                  "typeArguments": null,
                  "start": 9223,
                  "end": 9230
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9234,
                    "end": 9241
                  },
                  "typeArguments": null,
                  "start": 9234,
                  "end": 9241
                }
              ],
              "start": 9198,
              "end": 9243
            }
          ],
          "start": 9125,
          "end": 9243
        },
        "declare": false,
        "start": 9097,
        "end": 9244
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 9090,
      "end": 9244
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SpacingShorthand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9259,
                  "end": 9275
                },
                "typeArguments": null,
                "start": 9259,
                "end": 9275
              },
              "start": 9257,
              "end": 9275
            },
            "start": 9252,
            "end": 9275
          },
          "init": {
            "type": "Literal",
            "value": "0 0 0",
            "raw": "\"0 0 0\"",
            "start": 9278,
            "end": 9285
          },
          "definite": false,
          "start": 9252,
          "end": 9285
        }
      ],
      "declare": false,
      "start": 9246,
      "end": 9286
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 9286
}
```
