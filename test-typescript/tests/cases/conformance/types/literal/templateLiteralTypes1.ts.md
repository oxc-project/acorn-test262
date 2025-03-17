__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 9287,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 67,
            "name": "createScopedActionType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 70,
            "end": 166,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 89,
                "end": 97,
                "name": "scope",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 94,
                  "end": 97,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 96,
                    "end": 97,
                    "typeName": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 102,
              "end": 166,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 121,
                  "end": 128,
                  "name": "type",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 127,
                      "end": 128,
                      "typeName": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 128,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "TSAsExpression",
                "start": 133,
                "end": 166,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 133,
                  "end": 151,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 136,
                      "end": 141,
                      "name": "scope",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 145,
                      "end": 149,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 133,
                      "end": 136,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 141,
                      "end": 145,
                      "value": {
                        "cooked": "/",
                        "raw": "/"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 149,
                      "end": 151,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "start": 155,
                  "end": 166,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 155,
                      "end": 158,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 159,
                      "end": 163,
                      "value": {
                        "cooked": "/",
                        "raw": "/"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 164,
                      "end": 166,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 159,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 163,
                      "end": 164,
                      "typeName": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 102,
                "end": 120,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 103,
                    "end": 119,
                    "name": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 113,
                      "end": 119
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 70,
              "end": 88,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 71,
                  "end": 87,
                  "name": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 81,
                    "end": 87
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 195,
            "name": "createActionInMyScope",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 198,
            "end": 231,
            "callee": {
              "type": "Identifier",
              "start": 198,
              "end": 220,
              "name": "createScopedActionType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 221,
                "end": 230,
                "value": "MyScope",
                "raw": "\"MyScope\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 283,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 335,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 298,
            "name": "MY_ACTION",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 301,
            "end": 335,
            "callee": {
              "type": "Identifier",
              "start": 301,
              "end": 322,
              "name": "createActionInMyScope",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 323,
                "end": 334,
                "value": "MY_ACTION",
                "raw": "\"MY_ACTION\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 414,
      "end": 463,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 428,
        "name": "EventName",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 428,
        "end": 446,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 429,
            "end": 445,
            "name": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 439,
              "end": 445
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 449,
        "end": 462,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 449,
            "end": 452,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 453,
            "end": 462,
            "value": {
              "cooked": "Changed",
              "raw": "Changed"
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 452,
            "end": 453,
            "typeName": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 464,
      "end": 508,
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 472,
        "name": "EN1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 475,
        "end": 507,
        "typeName": {
          "type": "Identifier",
          "start": 475,
          "end": 484,
          "name": "EventName",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 484,
          "end": 507,
          "params": [
            {
              "type": "TSUnionType",
              "start": 485,
              "end": 506,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 485,
                  "end": 490,
                  "literal": {
                    "type": "Literal",
                    "start": 485,
                    "end": 490,
                    "value": "Foo",
                    "raw": "'Foo'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 493,
                  "end": 498,
                  "literal": {
                    "type": "Literal",
                    "start": 493,
                    "end": 498,
                    "value": "Bar",
                    "raw": "'Bar'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 501,
                  "end": 506,
                  "literal": {
                    "type": "Literal",
                    "start": 501,
                    "end": 506,
                    "value": "Baz",
                    "raw": "'Baz'"
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 509,
      "end": 584,
      "id": {
        "type": "Identifier",
        "start": 514,
        "end": 517,
        "name": "Loc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 520,
        "end": 583,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 520,
            "end": 523,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 550,
            "end": 554,
            "value": {
              "cooked": "-",
              "raw": "-"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 581,
            "end": 583,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSUnionType",
            "start": 523,
            "end": 550,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 523,
                "end": 528,
                "literal": {
                  "type": "Literal",
                  "start": 523,
                  "end": 528,
                  "value": "top",
                  "raw": "'top'"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 531,
                "end": 539,
                "literal": {
                  "type": "Literal",
                  "start": 531,
                  "end": 539,
                  "value": "middle",
                  "raw": "'middle'"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 542,
                "end": 550,
                "literal": {
                  "type": "Literal",
                  "start": 542,
                  "end": 550,
                  "value": "bottom",
                  "raw": "'bottom'"
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 554,
            "end": 581,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 554,
                "end": 560,
                "literal": {
                  "type": "Literal",
                  "start": 554,
                  "end": 560,
                  "value": "left",
                  "raw": "'left'"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 563,
                "end": 571,
                "literal": {
                  "type": "Literal",
                  "start": 563,
                  "end": 571,
                  "value": "center",
                  "raw": "'center'"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 574,
                "end": 581,
                "literal": {
                  "type": "Literal",
                  "start": 574,
                  "end": 581,
                  "value": "right",
                  "raw": "'right'"
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 643,
      "end": 712,
      "id": {
        "type": "Identifier",
        "start": 648,
        "end": 656,
        "name": "ToString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 656,
        "end": 702,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 657,
            "end": 701,
            "name": {
              "type": "Identifier",
              "start": 657,
              "end": 658,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 667,
              "end": 701,
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
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 705,
        "end": 711,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 705,
            "end": 708,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 709,
            "end": 711,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 708,
            "end": 709,
            "typeName": {
              "type": "Identifier",
              "start": 708,
              "end": 709,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 713,
      "end": 761,
      "id": {
        "type": "Identifier",
        "start": 718,
        "end": 721,
        "name": "TS1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 724,
        "end": 760,
        "typeName": {
          "type": "Identifier",
          "start": 724,
          "end": 732,
          "name": "ToString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 732,
          "end": 760,
          "params": [
            {
              "type": "TSUnionType",
              "start": 733,
              "end": 759,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 733,
                  "end": 738,
                  "literal": {
                    "type": "Literal",
                    "start": 733,
                    "end": 738,
                    "value": "abc",
                    "raw": "'abc'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 741,
                  "end": 743,
                  "literal": {
                    "type": "Literal",
                    "start": 741,
                    "end": 743,
                    "value": 42,
                    "raw": "42"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 746,
                  "end": 750,
                  "literal": {
                    "type": "Literal",
                    "start": 746,
                    "end": 750,
                    "value": true,
                    "raw": "true"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 753,
                  "end": 759,
                  "literal": {
                    "type": "UnaryExpression",
                    "start": 753,
                    "end": 759,
                    "operator": "-",
                    "prefix": true,
                    "argument": {
                      "type": "Literal",
                      "start": 754,
                      "end": 759,
                      "value": null,
                      "raw": "1234n",
                      "bigint": "1234"
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 810,
      "end": 853,
      "id": {
        "type": "Identifier",
        "start": 815,
        "end": 818,
        "name": "TL1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 818,
        "end": 836,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 819,
            "end": 835,
            "name": {
              "type": "Identifier",
              "start": 819,
              "end": 820,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 829,
              "end": 835
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 839,
        "end": 852,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 839,
            "end": 843,
            "value": {
              "cooked": "a",
              "raw": "a"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 844,
            "end": 848,
            "value": {
              "cooked": "b",
              "raw": "b"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 849,
            "end": 852,
            "value": {
              "cooked": "c",
              "raw": "c"
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 843,
            "end": 844,
            "typeName": {
              "type": "Identifier",
              "start": 843,
              "end": 844,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 848,
            "end": 849,
            "typeName": {
              "type": "Identifier",
              "start": 848,
              "end": 849,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 854,
      "end": 897,
      "id": {
        "type": "Identifier",
        "start": 859,
        "end": 862,
        "name": "TL2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 862,
        "end": 880,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 863,
            "end": 879,
            "name": {
              "type": "Identifier",
              "start": 863,
              "end": 864,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 873,
              "end": 879
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 883,
        "end": 896,
        "typeName": {
          "type": "Identifier",
          "start": 883,
          "end": 886,
          "name": "TL1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 886,
          "end": 896,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 887,
              "end": 895,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 887,
                  "end": 891,
                  "value": {
                    "cooked": "x",
                    "raw": "x"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 892,
                  "end": 895,
                  "value": {
                    "cooked": "y",
                    "raw": "y"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 891,
                  "end": 892,
                  "typeName": {
                    "type": "Identifier",
                    "start": 891,
                    "end": 892,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 920,
      "end": 940,
      "id": {
        "type": "Identifier",
        "start": 925,
        "end": 928,
        "name": "TL3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 931,
        "end": 939,
        "typeName": {
          "type": "Identifier",
          "start": 931,
          "end": 934,
          "name": "TL2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 934,
          "end": 939,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 935,
              "end": 938,
              "literal": {
                "type": "Literal",
                "start": 935,
                "end": 938,
                "value": "o",
                "raw": "'o'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 980,
      "end": 1081,
      "id": {
        "type": "Identifier",
        "start": 985,
        "end": 990,
        "name": "Cases",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 990,
        "end": 1008,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 991,
            "end": 1007,
            "name": {
              "type": "Identifier",
              "start": 991,
              "end": 992,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1001,
              "end": 1007
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 1011,
        "end": 1080,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 1011,
            "end": 1014,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 1026,
            "end": 1030,
            "value": {
              "cooked": " ",
              "raw": " "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 1042,
            "end": 1046,
            "value": {
              "cooked": " ",
              "raw": " "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 1059,
            "end": 1063,
            "value": {
              "cooked": " ",
              "raw": " "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 1078,
            "end": 1080,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1014,
            "end": 1026,
            "typeName": {
              "type": "Identifier",
              "start": 1014,
              "end": 1023,
              "name": "Uppercase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1023,
              "end": 1026,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1024,
                  "end": 1025,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1024,
                    "end": 1025,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1030,
            "end": 1042,
            "typeName": {
              "type": "Identifier",
              "start": 1030,
              "end": 1039,
              "name": "Lowercase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1039,
              "end": 1042,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1040,
                  "end": 1041,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1040,
                    "end": 1041,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1046,
            "end": 1059,
            "typeName": {
              "type": "Identifier",
              "start": 1046,
              "end": 1056,
              "name": "Capitalize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1056,
              "end": 1059,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1057,
                  "end": 1058,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1057,
                    "end": 1058,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1063,
            "end": 1078,
            "typeName": {
              "type": "Identifier",
              "start": 1063,
              "end": 1075,
              "name": "Uncapitalize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1075,
              "end": 1078,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1076,
                  "end": 1077,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1077,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1083,
      "end": 1108,
      "id": {
        "type": "Identifier",
        "start": 1088,
        "end": 1092,
        "name": "TCA1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1095,
        "end": 1107,
        "typeName": {
          "type": "Identifier",
          "start": 1095,
          "end": 1100,
          "name": "Cases",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1100,
          "end": 1107,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1101,
              "end": 1106,
              "literal": {
                "type": "Literal",
                "start": 1101,
                "end": 1106,
                "value": "bar",
                "raw": "'bar'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1131,
      "end": 1156,
      "id": {
        "type": "Identifier",
        "start": 1136,
        "end": 1140,
        "name": "TCA2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1143,
        "end": 1155,
        "typeName": {
          "type": "Identifier",
          "start": 1143,
          "end": 1148,
          "name": "Cases",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1148,
          "end": 1155,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1149,
              "end": 1154,
              "literal": {
                "type": "Literal",
                "start": 1149,
                "end": 1154,
                "value": "BAR",
                "raw": "'BAR'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1198,
      "end": 1336,
      "id": {
        "type": "Identifier",
        "start": 1207,
        "end": 1211,
        "name": "test",
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
          "start": 1237,
          "end": 1264,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1241,
            "end": 1264,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 1243,
              "end": 1264,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1243,
                  "end": 1249,
                  "value": {
                    "cooked": "get",
                    "raw": "get"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1262,
                  "end": 1264,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1249,
                  "end": 1262,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1249,
                    "end": 1259,
                    "name": "Capitalize",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1259,
                    "end": 1262,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1260,
                        "end": 1261,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1260,
                          "end": 1261,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
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
        "start": 1266,
        "end": 1336,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1272,
            "end": 1294,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1276,
                "end": 1293,
                "id": {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1286,
                  "name": "s1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1278,
                    "end": 1286,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1280,
                      "end": 1286
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1289,
                  "end": 1293,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1299,
            "end": 1334,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1303,
                "end": 1333,
                "id": {
                  "type": "Identifier",
                  "start": 1303,
                  "end": 1326,
                  "name": "s2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1305,
                    "end": 1326,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1307,
                      "end": 1326,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1307,
                          "end": 1315,
                          "literal": {
                            "type": "Literal",
                            "start": 1307,
                            "end": 1315,
                            "value": "getFoo",
                            "raw": "'getFoo'"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1318,
                          "end": 1326,
                          "literal": {
                            "type": "Literal",
                            "start": 1318,
                            "end": 1326,
                            "value": "getBar",
                            "raw": "'getBar'"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1329,
                  "end": 1333,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1211,
        "end": 1236,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1212,
            "end": 1235,
            "name": {
              "type": "Identifier",
              "start": 1212,
              "end": 1213,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 1222,
              "end": 1235,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1222,
                  "end": 1227,
                  "literal": {
                    "type": "Literal",
                    "start": 1222,
                    "end": 1227,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1230,
                  "end": 1235,
                  "literal": {
                    "type": "Literal",
                    "start": 1230,
                    "end": 1235,
                    "value": "bar",
                    "raw": "'bar'"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1338,
      "end": 1474,
      "id": {
        "type": "Identifier",
        "start": 1347,
        "end": 1350,
        "name": "fa1",
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
          "start": 1354,
          "end": 1358,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1355,
            "end": 1358,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1357,
              "end": 1358,
              "typeName": {
                "type": "Identifier",
                "start": 1357,
                "end": 1358,
                "name": "T",
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
          "start": 1360,
          "end": 1387,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1361,
            "end": 1387,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1363,
              "end": 1387,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1366,
                "end": 1378,
                "name": {
                  "type": "Identifier",
                  "start": 1366,
                  "end": 1367,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 1371,
                  "end": 1378,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1377,
                    "end": 1378,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1377,
                      "end": 1378,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 1381,
                "end": 1385,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1381,
                  "end": 1382,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1381,
                    "end": 1382,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1383,
                  "end": 1384,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1383,
                    "end": 1384,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1371,
                "end": 1378,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1377,
                  "end": 1378,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1377,
                    "end": 1378,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 1366,
                "end": 1367,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1389,
          "end": 1437,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1390,
            "end": 1437,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1392,
              "end": 1437,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1395,
                "end": 1416,
                "name": {
                  "type": "Identifier",
                  "start": 1395,
                  "end": 1396,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSIntersectionType",
                  "start": 1400,
                  "end": 1416,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 1400,
                      "end": 1407,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1406,
                        "end": 1407,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1406,
                          "end": 1407,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 1410,
                      "end": 1416
                    }
                  ]
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "start": 1420,
                "end": 1428,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1420,
                    "end": 1425,
                    "value": {
                      "cooked": "p_",
                      "raw": "p_"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1426,
                    "end": 1428,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1425,
                    "end": 1426,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1425,
                      "end": 1426,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 1431,
                "end": 1435,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1431,
                  "end": 1432,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1431,
                    "end": 1432,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1433,
                  "end": 1434,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1433,
                    "end": 1434,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 1400,
                "end": 1416,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 1400,
                    "end": 1407,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1406,
                      "end": 1407,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1406,
                        "end": 1407,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1410,
                    "end": 1416
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 1395,
                "end": 1396,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1439,
        "end": 1474,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1445,
            "end": 1451,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1445,
              "end": 1450,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1445,
                "end": 1446,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1449,
                "end": 1450,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1456,
            "end": 1462,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1456,
              "end": 1461,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1456,
                "end": 1457,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1460,
                "end": 1461,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1350,
        "end": 1353,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1351,
            "end": 1352,
            "name": {
              "type": "Identifier",
              "start": 1351,
              "end": 1352,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1476,
      "end": 1635,
      "id": {
        "type": "Identifier",
        "start": 1485,
        "end": 1488,
        "name": "fa2",
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
          "start": 1536,
          "end": 1566,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1537,
            "end": 1566,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1539,
              "end": 1566,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1542,
                "end": 1548,
                "name": {
                  "type": "Identifier",
                  "start": 1542,
                  "end": 1543,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 1547,
                  "end": 1548,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1547,
                    "end": 1548,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "start": 1552,
                "end": 1560,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1552,
                    "end": 1557,
                    "value": {
                      "cooked": "p_",
                      "raw": "p_"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1558,
                    "end": 1560,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1557,
                    "end": 1558,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1557,
                      "end": 1558,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1563,
                "end": 1564,
                "typeName": {
                  "type": "Identifier",
                  "start": 1563,
                  "end": 1564,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 1547,
                "end": 1548,
                "typeName": {
                  "type": "Identifier",
                  "start": 1547,
                  "end": 1548,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 1542,
                "end": 1543,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1568,
          "end": 1598,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1569,
            "end": 1598,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1571,
              "end": 1598,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1574,
                "end": 1580,
                "name": {
                  "type": "Identifier",
                  "start": 1574,
                  "end": 1575,
                  "name": "Q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 1579,
                  "end": 1580,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1579,
                    "end": 1580,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "start": 1584,
                "end": 1592,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1584,
                    "end": 1589,
                    "value": {
                      "cooked": "p_",
                      "raw": "p_"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1590,
                    "end": 1592,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1589,
                    "end": 1590,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1589,
                      "end": 1590,
                      "name": "Q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1595,
                "end": 1596,
                "typeName": {
                  "type": "Identifier",
                  "start": 1595,
                  "end": 1596,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 1579,
                "end": 1580,
                "typeName": {
                  "type": "Identifier",
                  "start": 1579,
                  "end": 1580,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 1574,
                "end": 1575,
                "name": "Q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1600,
        "end": 1635,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1606,
            "end": 1612,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1606,
              "end": 1611,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1606,
                "end": 1607,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1610,
                "end": 1611,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1617,
            "end": 1623,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1617,
              "end": 1622,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1617,
                "end": 1618,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1621,
                "end": 1622,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1488,
        "end": 1535,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1489,
            "end": 1490,
            "name": {
              "type": "Identifier",
              "start": 1489,
              "end": 1490,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1492,
            "end": 1503,
            "name": {
              "type": "Identifier",
              "start": 1492,
              "end": 1493,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1502,
              "end": 1503,
              "typeName": {
                "type": "Identifier",
                "start": 1502,
                "end": 1503,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1505,
            "end": 1521,
            "name": {
              "type": "Identifier",
              "start": 1505,
              "end": 1506,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1515,
              "end": 1521
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1523,
            "end": 1534,
            "name": {
              "type": "Identifier",
              "start": 1523,
              "end": 1524,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1533,
              "end": 1534,
              "typeName": {
                "type": "Identifier",
                "start": 1533,
                "end": 1534,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1698,
      "end": 1943,
      "id": {
        "type": "Identifier",
        "start": 1703,
        "end": 1707,
        "name": "Join",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1707,
        "end": 1746,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1708,
            "end": 1727,
            "name": {
              "type": "Identifier",
              "start": 1708,
              "end": 1709,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 1718,
              "end": 1727,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1718,
                "end": 1725
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1729,
            "end": 1745,
            "name": {
              "type": "Identifier",
              "start": 1729,
              "end": 1730,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1739,
              "end": 1745
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1753,
        "end": 1942,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1753,
          "end": 1754,
          "typeName": {
            "type": "Identifier",
            "start": 1753,
            "end": 1754,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 1763,
          "end": 1765,
          "elementTypes": []
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 1768,
          "end": 1770,
          "literal": {
            "type": "Literal",
            "start": 1768,
            "end": 1770,
            "value": "",
            "raw": "''"
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 1777,
          "end": 1942,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1777,
            "end": 1778,
            "typeName": {
              "type": "Identifier",
              "start": 1777,
              "end": 1778,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTupleType",
            "start": 1787,
            "end": 1823,
            "elementTypes": [
              {
                "type": "TSUnionType",
                "start": 1788,
                "end": 1822,
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
                ]
              }
            ]
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "start": 1826,
            "end": 1835,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 1826,
                "end": 1829,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 1833,
                "end": 1835,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSIndexedAccessType",
                "start": 1829,
                "end": 1833,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1829,
                  "end": 1830,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1829,
                    "end": 1830,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1831,
                  "end": 1832,
                  "literal": {
                    "type": "Literal",
                    "start": 1831,
                    "end": 1832,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            ]
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 1842,
            "end": 1942,
            "checkType": {
              "type": "TSTypeReference",
              "start": 1842,
              "end": 1843,
              "typeName": {
                "type": "Identifier",
                "start": 1842,
                "end": 1843,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTupleType",
              "start": 1852,
              "end": 1900,
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "start": 1853,
                  "end": 1887,
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
                  ]
                },
                {
                  "type": "TSRestType",
                  "start": 1889,
                  "end": 1899,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 1892,
                    "end": 1899,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 1898,
                      "end": 1899,
                      "name": {
                        "type": "Identifier",
                        "start": 1898,
                        "end": 1899,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                }
              ]
            },
            "trueType": {
              "type": "TSTemplateLiteralType",
              "start": 1903,
              "end": 1929,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1903,
                  "end": 1906,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1910,
                  "end": 1913,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1914,
                  "end": 1917,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1927,
                  "end": 1929,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1906,
                  "end": 1910,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1906,
                    "end": 1907,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1906,
                      "end": 1907,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 1908,
                    "end": 1909,
                    "literal": {
                      "type": "Literal",
                      "start": 1908,
                      "end": 1909,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1913,
                  "end": 1914,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1913,
                    "end": 1914,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1917,
                  "end": 1927,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1917,
                    "end": 1921,
                    "name": "Join",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1921,
                    "end": 1927,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1922,
                        "end": 1923,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1922,
                          "end": 1923,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1925,
                        "end": 1926,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1925,
                          "end": 1926,
                          "name": "D",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            },
            "falseType": {
              "type": "TSStringKeyword",
              "start": 1936,
              "end": 1942
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1945,
      "end": 1979,
      "id": {
        "type": "Identifier",
        "start": 1950,
        "end": 1953,
        "name": "TJ1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1956,
        "end": 1979,
        "typeName": {
          "type": "Identifier",
          "start": 1956,
          "end": 1960,
          "name": "Join",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1960,
          "end": 1979,
          "params": [
            {
              "type": "TSTupleType",
              "start": 1961,
              "end": 1973,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 1962,
                  "end": 1963,
                  "literal": {
                    "type": "Literal",
                    "start": 1962,
                    "end": 1963,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1965,
                  "end": 1966,
                  "literal": {
                    "type": "Literal",
                    "start": 1965,
                    "end": 1966,
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1968,
                  "end": 1969,
                  "literal": {
                    "type": "Literal",
                    "start": 1968,
                    "end": 1969,
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1971,
                  "end": 1972,
                  "literal": {
                    "type": "Literal",
                    "start": 1971,
                    "end": 1972,
                    "value": 4,
                    "raw": "4"
                  }
                }
              ]
            },
            {
              "type": "TSLiteralType",
              "start": 1975,
              "end": 1978,
              "literal": {
                "type": "Literal",
                "start": 1975,
                "end": 1978,
                "value": ".",
                "raw": "'.'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1980,
      "end": 2024,
      "id": {
        "type": "Identifier",
        "start": 1985,
        "end": 1988,
        "name": "TJ2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1991,
        "end": 2023,
        "typeName": {
          "type": "Identifier",
          "start": 1991,
          "end": 1995,
          "name": "Join",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1995,
          "end": 2023,
          "params": [
            {
              "type": "TSTupleType",
              "start": 1996,
              "end": 2017,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 1997,
                  "end": 2002,
                  "literal": {
                    "type": "Literal",
                    "start": 1997,
                    "end": 2002,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 2004,
                  "end": 2009,
                  "literal": {
                    "type": "Literal",
                    "start": 2004,
                    "end": 2009,
                    "value": "bar",
                    "raw": "'bar'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 2011,
                  "end": 2016,
                  "literal": {
                    "type": "Literal",
                    "start": 2011,
                    "end": 2016,
                    "value": "baz",
                    "raw": "'baz'"
                  }
                }
              ]
            },
            {
              "type": "TSLiteralType",
              "start": 2019,
              "end": 2022,
              "literal": {
                "type": "Literal",
                "start": 2019,
                "end": 2022,
                "value": "-",
                "raw": "'-'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2025,
      "end": 2049,
      "id": {
        "type": "Identifier",
        "start": 2030,
        "end": 2033,
        "name": "TJ3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2036,
        "end": 2049,
        "typeName": {
          "type": "Identifier",
          "start": 2036,
          "end": 2040,
          "name": "Join",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2040,
          "end": 2049,
          "params": [
            {
              "type": "TSTupleType",
              "start": 2041,
              "end": 2043,
              "elementTypes": []
            },
            {
              "type": "TSLiteralType",
              "start": 2045,
              "end": 2048,
              "literal": {
                "type": "Literal",
                "start": 2045,
                "end": 2048,
                "value": ".",
                "raw": "'.'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2085,
      "end": 2175,
      "id": {
        "type": "Identifier",
        "start": 2090,
        "end": 2099,
        "name": "MatchPair",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2099,
        "end": 2117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2100,
            "end": 2116,
            "name": {
              "type": "Identifier",
              "start": 2100,
              "end": 2101,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2110,
              "end": 2116
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2120,
        "end": 2174,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2120,
          "end": 2121,
          "typeName": {
            "type": "Identifier",
            "start": 2120,
            "end": 2121,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 2130,
          "end": 2155,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2130,
              "end": 2134,
              "value": {
                "cooked": "[",
                "raw": "["
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2141,
              "end": 2145,
              "value": {
                "cooked": ",",
                "raw": ","
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2152,
              "end": 2155,
              "value": {
                "cooked": "]",
                "raw": "]"
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 2134,
              "end": 2141,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2140,
                "end": 2141,
                "name": {
                  "type": "Identifier",
                  "start": 2140,
                  "end": 2141,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 2145,
              "end": 2152,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2151,
                "end": 2152,
                "name": {
                  "type": "Identifier",
                  "start": 2151,
                  "end": 2152,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 2158,
          "end": 2164,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 2159,
              "end": 2160,
              "typeName": {
                "type": "Identifier",
                "start": 2159,
                "end": 2160,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 2162,
              "end": 2163,
              "typeName": {
                "type": "Identifier",
                "start": 2162,
                "end": 2163,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 2167,
          "end": 2174
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2177,
      "end": 2207,
      "id": {
        "type": "Identifier",
        "start": 2182,
        "end": 2185,
        "name": "T20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2188,
        "end": 2206,
        "typeName": {
          "type": "Identifier",
          "start": 2188,
          "end": 2197,
          "name": "MatchPair",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2197,
          "end": 2206,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2198,
              "end": 2205,
              "literal": {
                "type": "Literal",
                "start": 2198,
                "end": 2205,
                "value": "[1,2]",
                "raw": "'[1,2]'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2223,
      "end": 2257,
      "id": {
        "type": "Identifier",
        "start": 2228,
        "end": 2231,
        "name": "T21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2234,
        "end": 2256,
        "typeName": {
          "type": "Identifier",
          "start": 2234,
          "end": 2243,
          "name": "MatchPair",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2243,
          "end": 2256,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2244,
              "end": 2255,
              "literal": {
                "type": "Literal",
                "start": 2244,
                "end": 2255,
                "value": "[foo,bar]",
                "raw": "'[foo,bar]'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2277,
      "end": 2308,
      "id": {
        "type": "Identifier",
        "start": 2282,
        "end": 2285,
        "name": "T22",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2288,
        "end": 2307,
        "typeName": {
          "type": "Identifier",
          "start": 2288,
          "end": 2297,
          "name": "MatchPair",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2297,
          "end": 2307,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2298,
              "end": 2306,
              "literal": {
                "type": "Literal",
                "start": 2298,
                "end": 2306,
                "value": " [1,2]",
                "raw": "' [1,2]'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2321,
      "end": 2351,
      "id": {
        "type": "Identifier",
        "start": 2326,
        "end": 2329,
        "name": "T23",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2332,
        "end": 2350,
        "typeName": {
          "type": "Identifier",
          "start": 2332,
          "end": 2341,
          "name": "MatchPair",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2341,
          "end": 2350,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2342,
              "end": 2349,
              "literal": {
                "type": "Literal",
                "start": 2342,
                "end": 2349,
                "value": "[123]",
                "raw": "'[123]'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2364,
      "end": 2398,
      "id": {
        "type": "Identifier",
        "start": 2369,
        "end": 2372,
        "name": "T24",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2375,
        "end": 2397,
        "typeName": {
          "type": "Identifier",
          "start": 2375,
          "end": 2384,
          "name": "MatchPair",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2384,
          "end": 2397,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2385,
              "end": 2396,
              "literal": {
                "type": "Literal",
                "start": 2385,
                "end": 2396,
                "value": "[1,2,3,4]",
                "raw": "'[1,2,3,4]'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2419,
      "end": 2618,
      "id": {
        "type": "Identifier",
        "start": 2424,
        "end": 2440,
        "name": "SnakeToCamelCase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2440,
        "end": 2458,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2441,
            "end": 2457,
            "name": {
              "type": "Identifier",
              "start": 2441,
              "end": 2442,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2451,
              "end": 2457
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2465,
        "end": 2617,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2465,
          "end": 2466,
          "typeName": {
            "type": "Identifier",
            "start": 2465,
            "end": 2466,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 2475,
          "end": 2498,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2475,
              "end": 2478,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2485,
              "end": 2489,
              "value": {
                "cooked": "_",
                "raw": "_"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2496,
              "end": 2498,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 2478,
              "end": 2485,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2484,
                "end": 2485,
                "name": {
                  "type": "Identifier",
                  "start": 2484,
                  "end": 2485,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 2489,
              "end": 2496,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2495,
                "end": 2496,
                "name": {
                  "type": "Identifier",
                  "start": 2495,
                  "end": 2496,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTemplateLiteralType",
          "start": 2501,
          "end": 2541,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2501,
              "end": 2504,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2516,
              "end": 2519,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2539,
              "end": 2541,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2504,
              "end": 2516,
              "typeName": {
                "type": "Identifier",
                "start": 2504,
                "end": 2513,
                "name": "Lowercase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2513,
                "end": 2516,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2514,
                    "end": 2515,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2514,
                      "end": 2515,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2519,
              "end": 2539,
              "typeName": {
                "type": "Identifier",
                "start": 2519,
                "end": 2536,
                "name": "SnakeToPascalCase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2536,
                "end": 2539,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2537,
                    "end": 2538,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2537,
                      "end": 2538,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 2548,
          "end": 2617,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2548,
            "end": 2549,
            "typeName": {
              "type": "Identifier",
              "start": 2548,
              "end": 2549,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 2558,
            "end": 2570,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 2558,
                "end": 2561,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2568,
                "end": 2570,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "start": 2561,
                "end": 2568,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 2567,
                  "end": 2568,
                  "name": {
                    "type": "Identifier",
                    "start": 2567,
                    "end": 2568,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "start": 2573,
            "end": 2590,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 2573,
                "end": 2576,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2588,
                "end": 2590,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "start": 2576,
                "end": 2588,
                "typeName": {
                  "type": "Identifier",
                  "start": 2576,
                  "end": 2585,
                  "name": "Lowercase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2585,
                  "end": 2588,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2586,
                      "end": 2587,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2586,
                        "end": 2587,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 2597,
            "end": 2617,
            "typeName": {
              "type": "Identifier",
              "start": 2597,
              "end": 2614,
              "name": "SnakeToPascalCase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2614,
              "end": 2617,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2615,
                  "end": 2616,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2615,
                    "end": 2616,
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2620,
      "end": 2861,
      "id": {
        "type": "Identifier",
        "start": 2625,
        "end": 2642,
        "name": "SnakeToPascalCase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2642,
        "end": 2660,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2643,
            "end": 2659,
            "name": {
              "type": "Identifier",
              "start": 2643,
              "end": 2644,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2653,
              "end": 2659
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2667,
        "end": 2860,
        "checkType": {
          "type": "TSStringKeyword",
          "start": 2667,
          "end": 2673
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 2682,
          "end": 2683,
          "typeName": {
            "type": "Identifier",
            "start": 2682,
            "end": 2683,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 2686,
          "end": 2692
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 2699,
          "end": 2860,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2699,
            "end": 2700,
            "typeName": {
              "type": "Identifier",
              "start": 2699,
              "end": 2700,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 2709,
            "end": 2732,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 2709,
                "end": 2712,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2719,
                "end": 2723,
                "value": {
                  "cooked": "_",
                  "raw": "_"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2730,
                "end": 2732,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "start": 2712,
                "end": 2719,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 2718,
                  "end": 2719,
                  "name": {
                    "type": "Identifier",
                    "start": 2718,
                    "end": 2719,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 2723,
                "end": 2730,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 2729,
                  "end": 2730,
                  "name": {
                    "type": "Identifier",
                    "start": 2729,
                    "end": 2730,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "start": 2735,
            "end": 2787,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 2735,
                "end": 2738,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2762,
                "end": 2765,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2785,
                "end": 2787,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "start": 2738,
                "end": 2762,
                "typeName": {
                  "type": "Identifier",
                  "start": 2738,
                  "end": 2748,
                  "name": "Capitalize",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2748,
                  "end": 2762,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2749,
                      "end": 2761,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2749,
                        "end": 2758,
                        "name": "Lowercase",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2758,
                        "end": 2761,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2759,
                            "end": 2760,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2759,
                              "end": 2760,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 2765,
                "end": 2785,
                "typeName": {
                  "type": "Identifier",
                  "start": 2765,
                  "end": 2782,
                  "name": "SnakeToPascalCase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2782,
                  "end": 2785,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2783,
                      "end": 2784,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2783,
                        "end": 2784,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 2794,
            "end": 2860,
            "checkType": {
              "type": "TSTypeReference",
              "start": 2794,
              "end": 2795,
              "typeName": {
                "type": "Identifier",
                "start": 2794,
                "end": 2795,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "start": 2804,
              "end": 2816,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 2804,
                  "end": 2807,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 2814,
                  "end": 2816,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "start": 2807,
                  "end": 2814,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2813,
                    "end": 2814,
                    "name": {
                      "type": "Identifier",
                      "start": 2813,
                      "end": 2814,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              ]
            },
            "trueType": {
              "type": "TSTemplateLiteralType",
              "start": 2819,
              "end": 2848,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 2819,
                  "end": 2822,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 2846,
                  "end": 2848,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2822,
                  "end": 2846,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2822,
                    "end": 2832,
                    "name": "Capitalize",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2832,
                    "end": 2846,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2833,
                        "end": 2845,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2833,
                          "end": 2842,
                          "name": "Lowercase",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2842,
                          "end": 2845,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2843,
                              "end": 2844,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2843,
                                "end": 2844,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 2855,
              "end": 2860
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2863,
      "end": 2911,
      "id": {
        "type": "Identifier",
        "start": 2868,
        "end": 2871,
        "name": "RR0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2874,
        "end": 2910,
        "typeName": {
          "type": "Identifier",
          "start": 2874,
          "end": 2891,
          "name": "SnakeToPascalCase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2891,
          "end": 2910,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2892,
              "end": 2909,
              "literal": {
                "type": "Literal",
                "start": 2892,
                "end": 2909,
                "value": "hello_world_foo",
                "raw": "'hello_world_foo'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2932,
      "end": 2976,
      "id": {
        "type": "Identifier",
        "start": 2937,
        "end": 2940,
        "name": "RR1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2943,
        "end": 2975,
        "typeName": {
          "type": "Identifier",
          "start": 2943,
          "end": 2960,
          "name": "SnakeToPascalCase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2960,
          "end": 2975,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2961,
              "end": 2974,
              "literal": {
                "type": "Literal",
                "start": 2961,
                "end": 2974,
                "value": "FOO_BAR_BAZ",
                "raw": "'FOO_BAR_BAZ'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2993,
      "end": 3040,
      "id": {
        "type": "Identifier",
        "start": 2998,
        "end": 3001,
        "name": "RR2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3004,
        "end": 3039,
        "typeName": {
          "type": "Identifier",
          "start": 3004,
          "end": 3020,
          "name": "SnakeToCamelCase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3020,
          "end": 3039,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 3021,
              "end": 3038,
              "literal": {
                "type": "Literal",
                "start": 3021,
                "end": 3038,
                "value": "hello_world_foo",
                "raw": "'hello_world_foo'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3061,
      "end": 3104,
      "id": {
        "type": "Identifier",
        "start": 3066,
        "end": 3069,
        "name": "RR3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3072,
        "end": 3103,
        "typeName": {
          "type": "Identifier",
          "start": 3072,
          "end": 3088,
          "name": "SnakeToCamelCase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3088,
          "end": 3103,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 3089,
              "end": 3102,
              "literal": {
                "type": "Literal",
                "start": 3089,
                "end": 3102,
                "value": "FOO_BAR_BAZ",
                "raw": "'FOO_BAR_BAZ'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3153,
      "end": 3265,
      "id": {
        "type": "Identifier",
        "start": 3158,
        "end": 3173,
        "name": "FirstTwoAndRest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3173,
        "end": 3191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3174,
            "end": 3190,
            "name": {
              "type": "Identifier",
              "start": 3174,
              "end": 3175,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3184,
              "end": 3190
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3194,
        "end": 3264,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3194,
          "end": 3195,
          "typeName": {
            "type": "Identifier",
            "start": 3194,
            "end": 3195,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 3204,
          "end": 3236,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 3204,
              "end": 3207,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3214,
              "end": 3217,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3224,
              "end": 3227,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3234,
              "end": 3236,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 3207,
              "end": 3214,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3213,
                "end": 3214,
                "name": {
                  "type": "Identifier",
                  "start": 3213,
                  "end": 3214,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 3217,
              "end": 3224,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3223,
                "end": 3224,
                "name": {
                  "type": "Identifier",
                  "start": 3223,
                  "end": 3224,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 3227,
              "end": 3234,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3233,
                "end": 3234,
                "name": {
                  "type": "Identifier",
                  "start": 3233,
                  "end": 3234,
                  "name": "R",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 3239,
          "end": 3254,
          "elementTypes": [
            {
              "type": "TSTemplateLiteralType",
              "start": 3240,
              "end": 3250,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3240,
                  "end": 3243,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3244,
                  "end": 3247,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3248,
                  "end": 3250,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3243,
                  "end": 3244,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3243,
                    "end": 3244,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 3247,
                  "end": 3248,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3247,
                    "end": 3248,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            {
              "type": "TSTypeReference",
              "start": 3252,
              "end": 3253,
              "typeName": {
                "type": "Identifier",
                "start": 3252,
                "end": 3253,
                "name": "R",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 3257,
          "end": 3264
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3267,
      "end": 3303,
      "id": {
        "type": "Identifier",
        "start": 3272,
        "end": 3275,
        "name": "T25",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3278,
        "end": 3302,
        "typeName": {
          "type": "Identifier",
          "start": 3278,
          "end": 3293,
          "name": "FirstTwoAndRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3293,
          "end": 3302,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 3294,
              "end": 3301,
              "literal": {
                "type": "Literal",
                "start": 3294,
                "end": 3301,
                "value": "abcde",
                "raw": "'abcde'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3322,
      "end": 3355,
      "id": {
        "type": "Identifier",
        "start": 3327,
        "end": 3330,
        "name": "T26",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3333,
        "end": 3354,
        "typeName": {
          "type": "Identifier",
          "start": 3333,
          "end": 3348,
          "name": "FirstTwoAndRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3348,
          "end": 3354,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 3349,
              "end": 3353,
              "literal": {
                "type": "Literal",
                "start": 3349,
                "end": 3353,
                "value": "ab",
                "raw": "'ab'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3371,
      "end": 3403,
      "id": {
        "type": "Identifier",
        "start": 3376,
        "end": 3379,
        "name": "T27",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3382,
        "end": 3402,
        "typeName": {
          "type": "Identifier",
          "start": 3382,
          "end": 3397,
          "name": "FirstTwoAndRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3397,
          "end": 3402,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 3398,
              "end": 3401,
              "literal": {
                "type": "Literal",
                "start": 3398,
                "end": 3401,
                "value": "a",
                "raw": "'a'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3417,
      "end": 3562,
      "id": {
        "type": "Identifier",
        "start": 3422,
        "end": 3430,
        "name": "HexDigit",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3433,
        "end": 3561,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 3433,
            "end": 3436,
            "literal": {
              "type": "Literal",
              "start": 3433,
              "end": 3436,
              "value": "0",
              "raw": "'0'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3439,
            "end": 3442,
            "literal": {
              "type": "Literal",
              "start": 3439,
              "end": 3442,
              "value": "1",
              "raw": "'1'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3445,
            "end": 3448,
            "literal": {
              "type": "Literal",
              "start": 3445,
              "end": 3448,
              "value": "2",
              "raw": "'2'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3451,
            "end": 3454,
            "literal": {
              "type": "Literal",
              "start": 3451,
              "end": 3454,
              "value": "3",
              "raw": "'3'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3457,
            "end": 3460,
            "literal": {
              "type": "Literal",
              "start": 3457,
              "end": 3460,
              "value": "4",
              "raw": "'4'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3463,
            "end": 3466,
            "literal": {
              "type": "Literal",
              "start": 3463,
              "end": 3466,
              "value": "5",
              "raw": "'5'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3469,
            "end": 3472,
            "literal": {
              "type": "Literal",
              "start": 3469,
              "end": 3472,
              "value": "6",
              "raw": "'6'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3475,
            "end": 3478,
            "literal": {
              "type": "Literal",
              "start": 3475,
              "end": 3478,
              "value": "7",
              "raw": "'7'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3480,
            "end": 3483,
            "literal": {
              "type": "Literal",
              "start": 3480,
              "end": 3483,
              "value": "8",
              "raw": "'8'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3486,
            "end": 3489,
            "literal": {
              "type": "Literal",
              "start": 3486,
              "end": 3489,
              "value": "9",
              "raw": "'9'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3492,
            "end": 3495,
            "literal": {
              "type": "Literal",
              "start": 3492,
              "end": 3495,
              "value": "A",
              "raw": "'A'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3498,
            "end": 3501,
            "literal": {
              "type": "Literal",
              "start": 3498,
              "end": 3501,
              "value": "B",
              "raw": "'B'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3504,
            "end": 3507,
            "literal": {
              "type": "Literal",
              "start": 3504,
              "end": 3507,
              "value": "C",
              "raw": "'C'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3510,
            "end": 3513,
            "literal": {
              "type": "Literal",
              "start": 3510,
              "end": 3513,
              "value": "D",
              "raw": "'D'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3516,
            "end": 3519,
            "literal": {
              "type": "Literal",
              "start": 3516,
              "end": 3519,
              "value": "E",
              "raw": "'E'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3522,
            "end": 3525,
            "literal": {
              "type": "Literal",
              "start": 3522,
              "end": 3525,
              "value": "F",
              "raw": "'F'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3528,
            "end": 3531,
            "literal": {
              "type": "Literal",
              "start": 3528,
              "end": 3531,
              "value": "a",
              "raw": "'a'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3534,
            "end": 3537,
            "literal": {
              "type": "Literal",
              "start": 3534,
              "end": 3537,
              "value": "b",
              "raw": "'b'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3540,
            "end": 3543,
            "literal": {
              "type": "Literal",
              "start": 3540,
              "end": 3543,
              "value": "c",
              "raw": "'c'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3546,
            "end": 3549,
            "literal": {
              "type": "Literal",
              "start": 3546,
              "end": 3549,
              "value": "d",
              "raw": "'d'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3552,
            "end": 3555,
            "literal": {
              "type": "Literal",
              "start": 3552,
              "end": 3555,
              "value": "e",
              "raw": "'e'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3558,
            "end": 3561,
            "literal": {
              "type": "Literal",
              "start": 3558,
              "end": 3561,
              "value": "f",
              "raw": "'f'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3564,
      "end": 3838,
      "id": {
        "type": "Identifier",
        "start": 3569,
        "end": 3577,
        "name": "HexColor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3577,
        "end": 3595,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3578,
            "end": 3594,
            "name": {
              "type": "Identifier",
              "start": 3578,
              "end": 3579,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3588,
              "end": 3594
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3602,
        "end": 3837,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3602,
          "end": 3603,
          "typeName": {
            "type": "Identifier",
            "start": 3602,
            "end": 3603,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 3612,
          "end": 3681,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 3612,
              "end": 3616,
              "value": {
                "cooked": "#",
                "raw": "#"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3624,
              "end": 3627,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3635,
              "end": 3638,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3646,
              "end": 3649,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3657,
              "end": 3660,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3668,
              "end": 3671,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3679,
              "end": 3681,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 3616,
              "end": 3624,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3622,
                "end": 3624,
                "name": {
                  "type": "Identifier",
                  "start": 3622,
                  "end": 3624,
                  "name": "R1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 3627,
              "end": 3635,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3633,
                "end": 3635,
                "name": {
                  "type": "Identifier",
                  "start": 3633,
                  "end": 3635,
                  "name": "R2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 3638,
              "end": 3646,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3644,
                "end": 3646,
                "name": {
                  "type": "Identifier",
                  "start": 3644,
                  "end": 3646,
                  "name": "G1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 3649,
              "end": 3657,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3655,
                "end": 3657,
                "name": {
                  "type": "Identifier",
                  "start": 3655,
                  "end": 3657,
                  "name": "G2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 3660,
              "end": 3668,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3666,
                "end": 3668,
                "name": {
                  "type": "Identifier",
                  "start": 3666,
                  "end": 3668,
                  "name": "B1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 3671,
              "end": 3679,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3677,
                "end": 3679,
                "name": {
                  "type": "Identifier",
                  "start": 3677,
                  "end": 3679,
                  "name": "B2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 3692,
          "end": 3821,
          "checkType": {
            "type": "TSTupleType",
            "start": 3692,
            "end": 3716,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 3693,
                "end": 3695,
                "typeName": {
                  "type": "Identifier",
                  "start": 3693,
                  "end": 3695,
                  "name": "R1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3697,
                "end": 3699,
                "typeName": {
                  "type": "Identifier",
                  "start": 3697,
                  "end": 3699,
                  "name": "R2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3701,
                "end": 3703,
                "typeName": {
                  "type": "Identifier",
                  "start": 3701,
                  "end": 3703,
                  "name": "G1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3705,
                "end": 3707,
                "typeName": {
                  "type": "Identifier",
                  "start": 3705,
                  "end": 3707,
                  "name": "G2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3709,
                "end": 3711,
                "typeName": {
                  "type": "Identifier",
                  "start": 3709,
                  "end": 3711,
                  "name": "B1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3713,
                "end": 3715,
                "typeName": {
                  "type": "Identifier",
                  "start": 3713,
                  "end": 3715,
                  "name": "B2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          },
          "extendsType": {
            "type": "TSTupleType",
            "start": 3725,
            "end": 3785,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 3726,
                "end": 3734,
                "typeName": {
                  "type": "Identifier",
                  "start": 3726,
                  "end": 3734,
                  "name": "HexDigit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3736,
                "end": 3744,
                "typeName": {
                  "type": "Identifier",
                  "start": 3736,
                  "end": 3744,
                  "name": "HexDigit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3746,
                "end": 3754,
                "typeName": {
                  "type": "Identifier",
                  "start": 3746,
                  "end": 3754,
                  "name": "HexDigit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3756,
                "end": 3764,
                "typeName": {
                  "type": "Identifier",
                  "start": 3756,
                  "end": 3764,
                  "name": "HexDigit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3766,
                "end": 3774,
                "typeName": {
                  "type": "Identifier",
                  "start": 3766,
                  "end": 3774,
                  "name": "HexDigit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3776,
                "end": 3784,
                "typeName": {
                  "type": "Identifier",
                  "start": 3776,
                  "end": 3784,
                  "name": "HexDigit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 3800,
            "end": 3801,
            "typeName": {
              "type": "Identifier",
              "start": 3800,
              "end": 3801,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3816,
            "end": 3821
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3832,
          "end": 3837
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3840,
      "end": 3871,
      "id": {
        "type": "Identifier",
        "start": 3845,
        "end": 3848,
        "name": "TH1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3851,
        "end": 3870,
        "typeName": {
          "type": "Identifier",
          "start": 3851,
          "end": 3859,
          "name": "HexColor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3859,
          "end": 3870,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 3860,
              "end": 3869,
              "literal": {
                "type": "Literal",
                "start": 3860,
                "end": 3869,
                "value": "#8080FF",
                "raw": "'#8080FF'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3886,
      "end": 3917,
      "id": {
        "type": "Identifier",
        "start": 3891,
        "end": 3894,
        "name": "TH2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3897,
        "end": 3916,
        "typeName": {
          "type": "Identifier",
          "start": 3897,
          "end": 3905,
          "name": "HexColor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3905,
          "end": 3916,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 3906,
              "end": 3915,
              "literal": {
                "type": "Literal",
                "start": 3906,
                "end": 3915,
                "value": "#80c0ff",
                "raw": "'#80c0ff'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3932,
      "end": 3962,
      "id": {
        "type": "Identifier",
        "start": 3937,
        "end": 3940,
        "name": "TH3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3943,
        "end": 3961,
        "typeName": {
          "type": "Identifier",
          "start": 3943,
          "end": 3951,
          "name": "HexColor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3951,
          "end": 3961,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 3952,
              "end": 3960,
              "literal": {
                "type": "Literal",
                "start": 3952,
                "end": 3960,
                "value": "#8080F",
                "raw": "'#8080F'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3973,
      "end": 4005,
      "id": {
        "type": "Identifier",
        "start": 3978,
        "end": 3981,
        "name": "TH4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3984,
        "end": 4004,
        "typeName": {
          "type": "Identifier",
          "start": 3984,
          "end": 3992,
          "name": "HexColor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3992,
          "end": 4004,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 3993,
              "end": 4003,
              "literal": {
                "type": "Literal",
                "start": 3993,
                "end": 4003,
                "value": "#8080FFF",
                "raw": "'#8080FFF'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4041,
      "end": 4157,
      "id": {
        "type": "Identifier",
        "start": 4046,
        "end": 4050,
        "name": "Trim",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4050,
        "end": 4068,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4051,
            "end": 4067,
            "name": {
              "type": "Identifier",
              "start": 4051,
              "end": 4052,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4061,
              "end": 4067
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4075,
        "end": 4156,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4075,
          "end": 4076,
          "typeName": {
            "type": "Identifier",
            "start": 4075,
            "end": 4076,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 4085,
          "end": 4098,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 4085,
              "end": 4089,
              "value": {
                "cooked": " ",
                "raw": " "
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 4096,
              "end": 4098,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 4089,
              "end": 4096,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 4095,
                "end": 4096,
                "name": {
                  "type": "Identifier",
                  "start": 4095,
                  "end": 4096,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 4101,
          "end": 4108,
          "typeName": {
            "type": "Identifier",
            "start": 4101,
            "end": 4105,
            "name": "Trim",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4105,
            "end": 4108,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4106,
                "end": 4107,
                "typeName": {
                  "type": "Identifier",
                  "start": 4106,
                  "end": 4107,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 4115,
          "end": 4156,
          "checkType": {
            "type": "TSTypeReference",
            "start": 4115,
            "end": 4116,
            "typeName": {
              "type": "Identifier",
              "start": 4115,
              "end": 4116,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 4125,
            "end": 4138,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 4125,
                "end": 4128,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 4135,
                "end": 4138,
                "value": {
                  "cooked": " ",
                  "raw": " "
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "start": 4128,
                "end": 4135,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 4134,
                  "end": 4135,
                  "name": {
                    "type": "Identifier",
                    "start": 4134,
                    "end": 4135,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 4141,
            "end": 4148,
            "typeName": {
              "type": "Identifier",
              "start": 4141,
              "end": 4145,
              "name": "Trim",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 4145,
              "end": 4148,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 4146,
                  "end": 4147,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4146,
                    "end": 4147,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 4155,
            "end": 4156,
            "typeName": {
              "type": "Identifier",
              "start": 4155,
              "end": 4156,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4159,
      "end": 4184,
      "id": {
        "type": "Identifier",
        "start": 4164,
        "end": 4167,
        "name": "TR1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4170,
        "end": 4183,
        "typeName": {
          "type": "Identifier",
          "start": 4170,
          "end": 4174,
          "name": "Trim",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4174,
          "end": 4183,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 4175,
              "end": 4182,
              "literal": {
                "type": "Literal",
                "start": 4175,
                "end": 4182,
                "value": "xx   ",
                "raw": "'xx   '"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4194,
      "end": 4219,
      "id": {
        "type": "Identifier",
        "start": 4199,
        "end": 4202,
        "name": "TR2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4205,
        "end": 4218,
        "typeName": {
          "type": "Identifier",
          "start": 4205,
          "end": 4209,
          "name": "Trim",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4209,
          "end": 4218,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 4210,
              "end": 4217,
              "literal": {
                "type": "Literal",
                "start": 4210,
                "end": 4217,
                "value": "   xx",
                "raw": "'   xx'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4229,
      "end": 4257,
      "id": {
        "type": "Identifier",
        "start": 4234,
        "end": 4237,
        "name": "TR3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4240,
        "end": 4256,
        "typeName": {
          "type": "Identifier",
          "start": 4240,
          "end": 4244,
          "name": "Trim",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4244,
          "end": 4256,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 4245,
              "end": 4255,
              "literal": {
                "type": "Literal",
                "start": 4245,
                "end": 4255,
                "value": "   xx   ",
                "raw": "'   xx   '"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4268,
      "end": 4448,
      "id": {
        "type": "Identifier",
        "start": 4273,
        "end": 4278,
        "name": "Split",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4278,
        "end": 4314,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4279,
            "end": 4295,
            "name": {
              "type": "Identifier",
              "start": 4279,
              "end": 4280,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4289,
              "end": 4295
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4297,
            "end": 4313,
            "name": {
              "type": "Identifier",
              "start": 4297,
              "end": 4298,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4307,
              "end": 4313
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4321,
        "end": 4447,
        "checkType": {
          "type": "TSStringKeyword",
          "start": 4321,
          "end": 4327
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 4336,
          "end": 4337,
          "typeName": {
            "type": "Identifier",
            "start": 4336,
            "end": 4337,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSArrayType",
          "start": 4340,
          "end": 4348,
          "elementType": {
            "type": "TSStringKeyword",
            "start": 4340,
            "end": 4346
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 4355,
          "end": 4447,
          "checkType": {
            "type": "TSTypeReference",
            "start": 4355,
            "end": 4356,
            "typeName": {
              "type": "Identifier",
              "start": 4355,
              "end": 4356,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSLiteralType",
            "start": 4365,
            "end": 4367,
            "literal": {
              "type": "Literal",
              "start": 4365,
              "end": 4367,
              "value": "",
              "raw": "''"
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 4370,
            "end": 4372,
            "elementTypes": []
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 4379,
            "end": 4447,
            "checkType": {
              "type": "TSTypeReference",
              "start": 4379,
              "end": 4380,
              "typeName": {
                "type": "Identifier",
                "start": 4379,
                "end": 4380,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "start": 4389,
              "end": 4415,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 4389,
                  "end": 4392,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4399,
                  "end": 4402,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4403,
                  "end": 4406,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4413,
                  "end": 4415,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "start": 4392,
                  "end": 4399,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 4398,
                    "end": 4399,
                    "name": {
                      "type": "Identifier",
                      "start": 4398,
                      "end": 4399,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 4402,
                  "end": 4403,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4402,
                    "end": 4403,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSInferType",
                  "start": 4406,
                  "end": 4413,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 4412,
                    "end": 4413,
                    "name": {
                      "type": "Identifier",
                      "start": 4412,
                      "end": 4413,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              ]
            },
            "trueType": {
              "type": "TSTupleType",
              "start": 4418,
              "end": 4437,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 4419,
                  "end": 4420,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4419,
                    "end": 4420,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSRestType",
                  "start": 4422,
                  "end": 4436,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4425,
                    "end": 4436,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4425,
                      "end": 4430,
                      "name": "Split",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4430,
                      "end": 4436,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4431,
                          "end": 4432,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4431,
                            "end": 4432,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 4434,
                          "end": 4435,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4434,
                            "end": 4435,
                            "name": "D",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "falseType": {
              "type": "TSTupleType",
              "start": 4444,
              "end": 4447,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 4445,
                  "end": 4446,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4445,
                    "end": 4446,
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4450,
      "end": 4479,
      "id": {
        "type": "Identifier",
        "start": 4455,
        "end": 4458,
        "name": "T40",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4461,
        "end": 4478,
        "typeName": {
          "type": "Identifier",
          "start": 4461,
          "end": 4466,
          "name": "Split",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4466,
          "end": 4478,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 4467,
              "end": 4472,
              "literal": {
                "type": "Literal",
                "start": 4467,
                "end": 4472,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 4474,
              "end": 4477,
              "literal": {
                "type": "Literal",
                "start": 4474,
                "end": 4477,
                "value": ".",
                "raw": "'.'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4492,
      "end": 4529,
      "id": {
        "type": "Identifier",
        "start": 4497,
        "end": 4500,
        "name": "T41",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4503,
        "end": 4528,
        "typeName": {
          "type": "Identifier",
          "start": 4503,
          "end": 4508,
          "name": "Split",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4508,
          "end": 4528,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 4509,
              "end": 4522,
              "literal": {
                "type": "Literal",
                "start": 4509,
                "end": 4522,
                "value": "foo.bar.baz",
                "raw": "'foo.bar.baz'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 4524,
              "end": 4527,
              "literal": {
                "type": "Literal",
                "start": 4524,
                "end": 4527,
                "value": ".",
                "raw": "'.'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4556,
      "end": 4588,
      "id": {
        "type": "Identifier",
        "start": 4561,
        "end": 4564,
        "name": "T42",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4567,
        "end": 4587,
        "typeName": {
          "type": "Identifier",
          "start": 4567,
          "end": 4572,
          "name": "Split",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4572,
          "end": 4587,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 4573,
              "end": 4582,
              "literal": {
                "type": "Literal",
                "start": 4573,
                "end": 4582,
                "value": "foo.bar",
                "raw": "'foo.bar'"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 4584,
              "end": 4586,
              "literal": {
                "type": "Literal",
                "start": 4584,
                "end": 4586,
                "value": "",
                "raw": "''"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4629,
      "end": 4656,
      "id": {
        "type": "Identifier",
        "start": 4634,
        "end": 4637,
        "name": "T43",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4640,
        "end": 4655,
        "typeName": {
          "type": "Identifier",
          "start": 4640,
          "end": 4645,
          "name": "Split",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4645,
          "end": 4655,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 4646,
              "end": 4649
            },
            {
              "type": "TSLiteralType",
              "start": 4651,
              "end": 4654,
              "literal": {
                "type": "Literal",
                "start": 4651,
                "end": 4654,
                "value": ".",
                "raw": "'.'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 4709,
      "end": 4886,
      "id": {
        "type": "Identifier",
        "start": 4726,
        "end": 4733,
        "name": "getProp",
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
          "start": 4836,
          "end": 4842,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4839,
            "end": 4842,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4841,
              "end": 4842,
              "typeName": {
                "type": "Identifier",
                "start": 4841,
                "end": 4842,
                "name": "T",
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
          "start": 4844,
          "end": 4869,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4848,
            "end": 4869,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 4850,
              "end": 4869,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 4850,
                  "end": 4853,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4855,
                  "end": 4859,
                  "value": {
                    "cooked": ".",
                    "raw": "."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4861,
                  "end": 4865,
                  "value": {
                    "cooked": ".",
                    "raw": "."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4867,
                  "end": 4869,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4853,
                  "end": 4855,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4853,
                    "end": 4855,
                    "name": "P0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 4859,
                  "end": 4861,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4859,
                    "end": 4861,
                    "name": "P1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 4865,
                  "end": 4867,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4865,
                    "end": 4867,
                    "name": "P2",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4733,
        "end": 4835,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4734,
            "end": 4735,
            "name": {
              "type": "Identifier",
              "start": 4734,
              "end": 4735,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4737,
            "end": 4764,
            "name": {
              "type": "Identifier",
              "start": 4737,
              "end": 4739,
              "name": "P0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSIntersectionType",
              "start": 4748,
              "end": 4764,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 4748,
                  "end": 4755,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4754,
                    "end": 4755,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4754,
                      "end": 4755,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4758,
                  "end": 4764
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4766,
            "end": 4797,
            "name": {
              "type": "Identifier",
              "start": 4766,
              "end": 4768,
              "name": "P1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSIntersectionType",
              "start": 4777,
              "end": 4797,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 4777,
                  "end": 4788,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 4783,
                    "end": 4788,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 4783,
                      "end": 4784,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4783,
                        "end": 4784,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 4785,
                      "end": 4787,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4785,
                        "end": 4787,
                        "name": "P0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4791,
                  "end": 4797
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4799,
            "end": 4834,
            "name": {
              "type": "Identifier",
              "start": 4799,
              "end": 4801,
              "name": "P2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSIntersectionType",
              "start": 4810,
              "end": 4834,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 4810,
                  "end": 4825,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 4816,
                    "end": 4825,
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "start": 4816,
                      "end": 4821,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 4816,
                        "end": 4817,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4816,
                          "end": 4817,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 4818,
                        "end": 4820,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4818,
                          "end": 4820,
                          "name": "P0",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 4822,
                      "end": 4824,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4822,
                        "end": 4824,
                        "name": "P1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4828,
                  "end": 4834
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4870,
        "end": 4885,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 4872,
          "end": 4885,
          "objectType": {
            "type": "TSIndexedAccessType",
            "start": 4872,
            "end": 4881,
            "objectType": {
              "type": "TSIndexedAccessType",
              "start": 4872,
              "end": 4877,
              "objectType": {
                "type": "TSTypeReference",
                "start": 4872,
                "end": 4873,
                "typeName": {
                  "type": "Identifier",
                  "start": 4872,
                  "end": 4873,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 4874,
                "end": 4876,
                "typeName": {
                  "type": "Identifier",
                  "start": 4874,
                  "end": 4876,
                  "name": "P0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 4878,
              "end": 4880,
              "typeName": {
                "type": "Identifier",
                "start": 4878,
                "end": 4880,
                "name": "P1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 4882,
            "end": 4884,
            "typeName": {
              "type": "Identifier",
              "start": 4882,
              "end": 4884,
              "name": "P2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4887,
      "end": 5017,
      "id": {
        "type": "Identifier",
        "start": 4904,
        "end": 4911,
        "name": "getProp",
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
          "start": 4977,
          "end": 4983,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4980,
            "end": 4983,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4982,
              "end": 4983,
              "typeName": {
                "type": "Identifier",
                "start": 4982,
                "end": 4983,
                "name": "T",
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
          "start": 4985,
          "end": 5004,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4989,
            "end": 5004,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 4991,
              "end": 5004,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 4991,
                  "end": 4994,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4996,
                  "end": 5000,
                  "value": {
                    "cooked": ".",
                    "raw": "."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 5002,
                  "end": 5004,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4994,
                  "end": 4996,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4994,
                    "end": 4996,
                    "name": "P0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 5000,
                  "end": 5002,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5000,
                    "end": 5002,
                    "name": "P1",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4911,
        "end": 4976,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4912,
            "end": 4913,
            "name": {
              "type": "Identifier",
              "start": 4912,
              "end": 4913,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4915,
            "end": 4942,
            "name": {
              "type": "Identifier",
              "start": 4915,
              "end": 4917,
              "name": "P0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSIntersectionType",
              "start": 4926,
              "end": 4942,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 4926,
                  "end": 4933,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4932,
                    "end": 4933,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4932,
                      "end": 4933,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4936,
                  "end": 4942
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4944,
            "end": 4975,
            "name": {
              "type": "Identifier",
              "start": 4944,
              "end": 4946,
              "name": "P1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSIntersectionType",
              "start": 4955,
              "end": 4975,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 4955,
                  "end": 4966,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 4961,
                    "end": 4966,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 4961,
                      "end": 4962,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4961,
                        "end": 4962,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 4963,
                      "end": 4965,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4963,
                        "end": 4965,
                        "name": "P0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4969,
                  "end": 4975
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5005,
        "end": 5016,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 5007,
          "end": 5016,
          "objectType": {
            "type": "TSIndexedAccessType",
            "start": 5007,
            "end": 5012,
            "objectType": {
              "type": "TSTypeReference",
              "start": 5007,
              "end": 5008,
              "typeName": {
                "type": "Identifier",
                "start": 5007,
                "end": 5008,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 5009,
              "end": 5011,
              "typeName": {
                "type": "Identifier",
                "start": 5009,
                "end": 5011,
                "name": "P0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 5013,
            "end": 5015,
            "typeName": {
              "type": "Identifier",
              "start": 5013,
              "end": 5015,
              "name": "P1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 5018,
      "end": 5100,
      "id": {
        "type": "Identifier",
        "start": 5035,
        "end": 5042,
        "name": "getProp",
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
          "start": 5075,
          "end": 5081,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5078,
            "end": 5081,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5080,
              "end": 5081,
              "typeName": {
                "type": "Identifier",
                "start": 5080,
                "end": 5081,
                "name": "T",
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
          "start": 5083,
          "end": 5091,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5087,
            "end": 5091,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5089,
              "end": 5091,
              "typeName": {
                "type": "Identifier",
                "start": 5089,
                "end": 5091,
                "name": "P0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5042,
        "end": 5074,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5043,
            "end": 5044,
            "name": {
              "type": "Identifier",
              "start": 5043,
              "end": 5044,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5046,
            "end": 5073,
            "name": {
              "type": "Identifier",
              "start": 5046,
              "end": 5048,
              "name": "P0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSIntersectionType",
              "start": 5057,
              "end": 5073,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 5057,
                  "end": 5064,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5063,
                    "end": 5064,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5063,
                      "end": 5064,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 5067,
                  "end": 5073
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5092,
        "end": 5099,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 5094,
          "end": 5099,
          "objectType": {
            "type": "TSTypeReference",
            "start": 5094,
            "end": 5095,
            "typeName": {
              "type": "Identifier",
              "start": 5094,
              "end": 5095,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 5096,
            "end": 5098,
            "typeName": {
              "type": "Identifier",
              "start": 5096,
              "end": 5098,
              "name": "P0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 5101,
      "end": 5162,
      "id": {
        "type": "Identifier",
        "start": 5118,
        "end": 5125,
        "name": "getProp",
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
          "start": 5126,
          "end": 5137,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5129,
            "end": 5137,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 5131,
              "end": 5137
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 5139,
          "end": 5151,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5143,
            "end": 5151,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 5145,
              "end": 5151
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5152,
        "end": 5161,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 5154,
          "end": 5161
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5164,
      "end": 5229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5168,
          "end": 5228,
          "id": {
            "type": "Identifier",
            "start": 5168,
            "end": 5170,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5173,
            "end": 5228,
            "callee": {
              "type": "Identifier",
              "start": 5173,
              "end": 5180,
              "name": "getProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 5181,
                "end": 5222,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 5181,
                  "end": 5213,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 5183,
                      "end": 5212,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5183,
                        "end": 5184,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 5186,
                        "end": 5212,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 5188,
                            "end": 5211,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5188,
                              "end": 5189,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 5191,
                              "end": 5211,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 5192,
                                  "end": 5197,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5192,
                                    "end": 5193,
                                    "name": "c",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5195,
                                    "end": 5197,
                                    "value": 42,
                                    "raw": "42"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 5199,
                                  "end": 5209,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5199,
                                    "end": 5200,
                                    "name": "d",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5202,
                                    "end": 5209,
                                    "value": "hello",
                                    "raw": "'hello'"
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5217,
                  "end": 5222,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5217,
                    "end": 5222,
                    "name": "const",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "Literal",
                "start": 5224,
                "end": 5227,
                "value": "a",
                "raw": "'a'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5230,
      "end": 5297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5234,
          "end": 5296,
          "id": {
            "type": "Identifier",
            "start": 5234,
            "end": 5236,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5239,
            "end": 5296,
            "callee": {
              "type": "Identifier",
              "start": 5239,
              "end": 5246,
              "name": "getProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 5247,
                "end": 5288,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 5247,
                  "end": 5279,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 5249,
                      "end": 5278,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5249,
                        "end": 5250,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 5252,
                        "end": 5278,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 5254,
                            "end": 5277,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5254,
                              "end": 5255,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 5257,
                              "end": 5277,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 5258,
                                  "end": 5263,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5258,
                                    "end": 5259,
                                    "name": "c",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5261,
                                    "end": 5263,
                                    "value": 42,
                                    "raw": "42"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 5265,
                                  "end": 5275,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5265,
                                    "end": 5266,
                                    "name": "d",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5268,
                                    "end": 5275,
                                    "value": "hello",
                                    "raw": "'hello'"
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5283,
                  "end": 5288,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5283,
                    "end": 5288,
                    "name": "const",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "Literal",
                "start": 5290,
                "end": 5295,
                "value": "a.b",
                "raw": "'a.b'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5298,
      "end": 5367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5302,
          "end": 5366,
          "id": {
            "type": "Identifier",
            "start": 5302,
            "end": 5304,
            "name": "p3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5307,
            "end": 5366,
            "callee": {
              "type": "Identifier",
              "start": 5307,
              "end": 5314,
              "name": "getProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 5315,
                "end": 5356,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 5315,
                  "end": 5347,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 5317,
                      "end": 5346,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5317,
                        "end": 5318,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 5320,
                        "end": 5346,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 5322,
                            "end": 5345,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5322,
                              "end": 5323,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 5325,
                              "end": 5345,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 5326,
                                  "end": 5331,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5326,
                                    "end": 5327,
                                    "name": "c",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5329,
                                    "end": 5331,
                                    "value": 42,
                                    "raw": "42"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 5333,
                                  "end": 5343,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5333,
                                    "end": 5334,
                                    "name": "d",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5336,
                                    "end": 5343,
                                    "value": "hello",
                                    "raw": "'hello'"
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5351,
                  "end": 5356,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5351,
                    "end": 5356,
                    "name": "const",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "Literal",
                "start": 5358,
                "end": 5365,
                "value": "a.b.d",
                "raw": "'a.b.d'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5369,
      "end": 5587,
      "id": {
        "type": "Identifier",
        "start": 5374,
        "end": 5382,
        "name": "PropType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5382,
        "end": 5406,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5383,
            "end": 5384,
            "name": {
              "type": "Identifier",
              "start": 5383,
              "end": 5384,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5386,
            "end": 5405,
            "name": {
              "type": "Identifier",
              "start": 5386,
              "end": 5390,
              "name": "Path",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5399,
              "end": 5405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 5413,
        "end": 5586,
        "checkType": {
          "type": "TSStringKeyword",
          "start": 5413,
          "end": 5419
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 5428,
          "end": 5432,
          "typeName": {
            "type": "Identifier",
            "start": 5428,
            "end": 5432,
            "name": "Path",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSUnknownKeyword",
          "start": 5435,
          "end": 5442
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 5449,
          "end": 5586,
          "checkType": {
            "type": "TSTypeReference",
            "start": 5449,
            "end": 5453,
            "typeName": {
              "type": "Identifier",
              "start": 5449,
              "end": 5453,
              "name": "Path",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "start": 5462,
            "end": 5469,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5468,
              "end": 5469,
              "typeName": {
                "type": "Identifier",
                "start": 5468,
                "end": 5469,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 5472,
            "end": 5479,
            "objectType": {
              "type": "TSTypeReference",
              "start": 5472,
              "end": 5473,
              "typeName": {
                "type": "Identifier",
                "start": 5472,
                "end": 5473,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 5474,
              "end": 5478,
              "typeName": {
                "type": "Identifier",
                "start": 5474,
                "end": 5478,
                "name": "Path",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 5486,
            "end": 5586,
            "checkType": {
              "type": "TSTypeReference",
              "start": 5486,
              "end": 5490,
              "typeName": {
                "type": "Identifier",
                "start": 5486,
                "end": 5490,
                "name": "Path",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "start": 5499,
              "end": 5522,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 5499,
                  "end": 5502,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 5509,
                  "end": 5513,
                  "value": {
                    "cooked": ".",
                    "raw": "."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 5520,
                  "end": 5522,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "start": 5502,
                  "end": 5509,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 5508,
                    "end": 5509,
                    "name": {
                      "type": "Identifier",
                      "start": 5508,
                      "end": 5509,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                },
                {
                  "type": "TSInferType",
                  "start": 5513,
                  "end": 5520,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 5519,
                    "end": 5520,
                    "name": {
                      "type": "Identifier",
                      "start": 5519,
                      "end": 5520,
                      "name": "R",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              ]
            },
            "trueType": {
              "type": "TSConditionalType",
              "start": 5525,
              "end": 5572,
              "checkType": {
                "type": "TSTypeReference",
                "start": 5525,
                "end": 5526,
                "typeName": {
                  "type": "Identifier",
                  "start": 5525,
                  "end": 5526,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "start": 5535,
                "end": 5542,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5541,
                  "end": 5542,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5541,
                    "end": 5542,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 5545,
                "end": 5562,
                "typeName": {
                  "type": "Identifier",
                  "start": 5545,
                  "end": 5553,
                  "name": "PropType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5553,
                  "end": 5562,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 5554,
                      "end": 5558,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 5554,
                        "end": 5555,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5554,
                          "end": 5555,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 5556,
                        "end": 5557,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5556,
                          "end": 5557,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 5560,
                      "end": 5561,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5560,
                        "end": 5561,
                        "name": "R",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "falseType": {
                "type": "TSUnknownKeyword",
                "start": 5565,
                "end": 5572
              }
            },
            "falseType": {
              "type": "TSUnknownKeyword",
              "start": 5579,
              "end": 5586
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 5589,
      "end": 5673,
      "id": {
        "type": "Identifier",
        "start": 5606,
        "end": 5618,
        "name": "getPropValue",
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
          "start": 5640,
          "end": 5646,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5643,
            "end": 5646,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5645,
              "end": 5646,
              "typeName": {
                "type": "Identifier",
                "start": 5645,
                "end": 5646,
                "name": "T",
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
          "start": 5648,
          "end": 5655,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5652,
            "end": 5655,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5654,
              "end": 5655,
              "typeName": {
                "type": "Identifier",
                "start": 5654,
                "end": 5655,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5618,
        "end": 5639,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5619,
            "end": 5620,
            "name": {
              "type": "Identifier",
              "start": 5619,
              "end": 5620,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5622,
            "end": 5638,
            "name": {
              "type": "Identifier",
              "start": 5622,
              "end": 5623,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5632,
              "end": 5638
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5656,
        "end": 5672,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 5658,
          "end": 5672,
          "typeName": {
            "type": "Identifier",
            "start": 5658,
            "end": 5666,
            "name": "PropType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5666,
            "end": 5672,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 5667,
                "end": 5668,
                "typeName": {
                  "type": "Identifier",
                  "start": 5667,
                  "end": 5668,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5670,
                "end": 5671,
                "typeName": {
                  "type": "Identifier",
                  "start": 5670,
                  "end": 5671,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5674,
      "end": 5698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5688,
          "end": 5697,
          "id": {
            "type": "Identifier",
            "start": 5688,
            "end": 5697,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5689,
              "end": 5697,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5691,
                "end": 5697
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 5700,
      "end": 5745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5706,
          "end": 5744,
          "id": {
            "type": "Identifier",
            "start": 5706,
            "end": 5709,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 5712,
            "end": 5744,
            "properties": [
              {
                "type": "Property",
                "start": 5714,
                "end": 5743,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5714,
                  "end": 5715,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 5717,
                  "end": 5743,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 5719,
                      "end": 5742,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5719,
                        "end": 5720,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 5722,
                        "end": 5742,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 5723,
                            "end": 5728,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5723,
                              "end": 5724,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 5726,
                              "end": 5728,
                              "value": 42,
                              "raw": "42"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 5730,
                            "end": 5740,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5730,
                              "end": 5731,
                              "name": "d",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 5733,
                              "end": 5740,
                              "value": "hello",
                              "raw": "'hello'"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 5747,
      "end": 5770,
      "expression": {
        "type": "CallExpression",
        "start": 5747,
        "end": 5769,
        "callee": {
          "type": "Identifier",
          "start": 5747,
          "end": 5759,
          "name": "getPropValue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 5760,
            "end": 5763,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 5765,
            "end": 5768,
            "value": "a",
            "raw": "'a'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5806,
      "end": 5831,
      "expression": {
        "type": "CallExpression",
        "start": 5806,
        "end": 5830,
        "callee": {
          "type": "Identifier",
          "start": 5806,
          "end": 5818,
          "name": "getPropValue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 5819,
            "end": 5822,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 5824,
            "end": 5829,
            "value": "a.b",
            "raw": "'a.b'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5860,
      "end": 5887,
      "expression": {
        "type": "CallExpression",
        "start": 5860,
        "end": 5886,
        "callee": {
          "type": "Identifier",
          "start": 5860,
          "end": 5872,
          "name": "getPropValue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 5873,
            "end": 5876,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 5878,
            "end": 5885,
            "value": "a.b.d",
            "raw": "'a.b.d'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5899,
      "end": 5926,
      "expression": {
        "type": "CallExpression",
        "start": 5899,
        "end": 5925,
        "callee": {
          "type": "Identifier",
          "start": 5899,
          "end": 5911,
          "name": "getPropValue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 5912,
            "end": 5915,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 5917,
            "end": 5924,
            "value": "a.b.x",
            "raw": "'a.b.x'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5939,
      "end": 5960,
      "expression": {
        "type": "CallExpression",
        "start": 5939,
        "end": 5959,
        "callee": {
          "type": "Identifier",
          "start": 5939,
          "end": 5951,
          "name": "getPropValue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 5952,
            "end": 5955,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 5957,
            "end": 5958,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6043,
      "end": 6101,
      "id": {
        "type": "Identifier",
        "start": 6048,
        "end": 6050,
        "name": "S1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6050,
        "end": 6053,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6051,
            "end": 6052,
            "name": {
              "type": "Identifier",
              "start": 6051,
              "end": 6052,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 6056,
        "end": 6100,
        "checkType": {
          "type": "TSTypeReference",
          "start": 6056,
          "end": 6057,
          "typeName": {
            "type": "Identifier",
            "start": 6056,
            "end": 6057,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 6066,
          "end": 6084,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 6066,
              "end": 6072,
              "value": {
                "cooked": "foo",
                "raw": "foo"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 6079,
              "end": 6084,
              "value": {
                "cooked": "bar",
                "raw": "bar"
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 6072,
              "end": 6079,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 6078,
                "end": 6079,
                "name": {
                  "type": "Identifier",
                  "start": 6078,
                  "end": 6079,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 6087,
          "end": 6092,
          "typeName": {
            "type": "Identifier",
            "start": 6087,
            "end": 6089,
            "name": "S2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 6089,
            "end": 6092,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 6090,
                "end": 6091,
                "typeName": {
                  "type": "Identifier",
                  "start": 6090,
                  "end": 6091,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6095,
          "end": 6100
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6102,
      "end": 6132,
      "id": {
        "type": "Identifier",
        "start": 6107,
        "end": 6109,
        "name": "S2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6109,
        "end": 6127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6110,
            "end": 6126,
            "name": {
              "type": "Identifier",
              "start": 6110,
              "end": 6111,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 6120,
              "end": 6126
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6130,
        "end": 6131,
        "typeName": {
          "type": "Identifier",
          "start": 6130,
          "end": 6131,
          "name": "S",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6184,
      "end": 6208,
      "id": {
        "type": "Identifier",
        "start": 6189,
        "end": 6192,
        "name": "TV1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 6195,
        "end": 6207,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 6195,
            "end": 6198,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 6205,
            "end": 6207,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSInferType",
            "start": 6198,
            "end": 6205,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 6204,
              "end": 6205,
              "name": {
                "type": "Identifier",
                "start": 6204,
                "end": 6205,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6276,
      "end": 6628,
      "id": {
        "type": "Identifier",
        "start": 6281,
        "end": 6286,
        "name": "Chars",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6286,
        "end": 6304,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6287,
            "end": 6303,
            "name": {
              "type": "Identifier",
              "start": 6287,
              "end": 6288,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 6297,
              "end": 6303
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 6311,
        "end": 6627,
        "checkType": {
          "type": "TSStringKeyword",
          "start": 6311,
          "end": 6317
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 6326,
          "end": 6327,
          "typeName": {
            "type": "Identifier",
            "start": 6326,
            "end": 6327,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSArrayType",
          "start": 6330,
          "end": 6338,
          "elementType": {
            "type": "TSStringKeyword",
            "start": 6330,
            "end": 6336
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 6345,
          "end": 6627,
          "checkType": {
            "type": "TSTypeReference",
            "start": 6345,
            "end": 6346,
            "typeName": {
              "type": "Identifier",
              "start": 6345,
              "end": 6346,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 6355,
            "end": 6477,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 6355,
                "end": 6358,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6366,
                "end": 6369,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6377,
                "end": 6380,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6388,
                "end": 6391,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6399,
                "end": 6402,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6410,
                "end": 6413,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6421,
                "end": 6424,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6432,
                "end": 6435,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6443,
                "end": 6446,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6454,
                "end": 6457,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6465,
                "end": 6468,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6475,
                "end": 6477,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "start": 6358,
                "end": 6366,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6364,
                  "end": 6366,
                  "name": {
                    "type": "Identifier",
                    "start": 6364,
                    "end": 6366,
                    "name": "C0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 6369,
                "end": 6377,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6375,
                  "end": 6377,
                  "name": {
                    "type": "Identifier",
                    "start": 6375,
                    "end": 6377,
                    "name": "C1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 6380,
                "end": 6388,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6386,
                  "end": 6388,
                  "name": {
                    "type": "Identifier",
                    "start": 6386,
                    "end": 6388,
                    "name": "C2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 6391,
                "end": 6399,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6397,
                  "end": 6399,
                  "name": {
                    "type": "Identifier",
                    "start": 6397,
                    "end": 6399,
                    "name": "C3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 6402,
                "end": 6410,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6408,
                  "end": 6410,
                  "name": {
                    "type": "Identifier",
                    "start": 6408,
                    "end": 6410,
                    "name": "C4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 6413,
                "end": 6421,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6419,
                  "end": 6421,
                  "name": {
                    "type": "Identifier",
                    "start": 6419,
                    "end": 6421,
                    "name": "C5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 6424,
                "end": 6432,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6430,
                  "end": 6432,
                  "name": {
                    "type": "Identifier",
                    "start": 6430,
                    "end": 6432,
                    "name": "C6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 6435,
                "end": 6443,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6441,
                  "end": 6443,
                  "name": {
                    "type": "Identifier",
                    "start": 6441,
                    "end": 6443,
                    "name": "C7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 6446,
                "end": 6454,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6452,
                  "end": 6454,
                  "name": {
                    "type": "Identifier",
                    "start": 6452,
                    "end": 6454,
                    "name": "C8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 6457,
                "end": 6465,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6463,
                  "end": 6465,
                  "name": {
                    "type": "Identifier",
                    "start": 6463,
                    "end": 6465,
                    "name": "C9",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 6468,
                "end": 6475,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 6474,
                  "end": 6475,
                  "name": {
                    "type": "Identifier",
                    "start": 6474,
                    "end": 6475,
                    "name": "R",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 6480,
            "end": 6533,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 6481,
                "end": 6483,
                "typeName": {
                  "type": "Identifier",
                  "start": 6481,
                  "end": 6483,
                  "name": "C0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 6485,
                "end": 6487,
                "typeName": {
                  "type": "Identifier",
                  "start": 6485,
                  "end": 6487,
                  "name": "C1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 6489,
                "end": 6491,
                "typeName": {
                  "type": "Identifier",
                  "start": 6489,
                  "end": 6491,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 6493,
                "end": 6495,
                "typeName": {
                  "type": "Identifier",
                  "start": 6493,
                  "end": 6495,
                  "name": "C3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 6497,
                "end": 6499,
                "typeName": {
                  "type": "Identifier",
                  "start": 6497,
                  "end": 6499,
                  "name": "C4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 6501,
                "end": 6503,
                "typeName": {
                  "type": "Identifier",
                  "start": 6501,
                  "end": 6503,
                  "name": "C5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 6505,
                "end": 6507,
                "typeName": {
                  "type": "Identifier",
                  "start": 6505,
                  "end": 6507,
                  "name": "C6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 6509,
                "end": 6511,
                "typeName": {
                  "type": "Identifier",
                  "start": 6509,
                  "end": 6511,
                  "name": "C7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 6513,
                "end": 6515,
                "typeName": {
                  "type": "Identifier",
                  "start": 6513,
                  "end": 6515,
                  "name": "C8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 6517,
                "end": 6519,
                "typeName": {
                  "type": "Identifier",
                  "start": 6517,
                  "end": 6519,
                  "name": "C9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSRestType",
                "start": 6521,
                "end": 6532,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6524,
                  "end": 6532,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6524,
                    "end": 6529,
                    "name": "Chars",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6529,
                    "end": 6532,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6530,
                        "end": 6531,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6530,
                          "end": 6531,
                          "name": "R",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            ]
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 6540,
            "end": 6627,
            "checkType": {
              "type": "TSTypeReference",
              "start": 6540,
              "end": 6541,
              "typeName": {
                "type": "Identifier",
                "start": 6540,
                "end": 6541,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "start": 6550,
              "end": 6572,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 6550,
                  "end": 6553,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 6560,
                  "end": 6563,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 6570,
                  "end": 6572,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "start": 6553,
                  "end": 6560,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 6559,
                    "end": 6560,
                    "name": {
                      "type": "Identifier",
                      "start": 6559,
                      "end": 6560,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                },
                {
                  "type": "TSInferType",
                  "start": 6563,
                  "end": 6570,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 6569,
                    "end": 6570,
                    "name": {
                      "type": "Identifier",
                      "start": 6569,
                      "end": 6570,
                      "name": "R",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              ]
            },
            "trueType": {
              "type": "TSTupleType",
              "start": 6575,
              "end": 6591,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 6576,
                  "end": 6577,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6576,
                    "end": 6577,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSRestType",
                  "start": 6579,
                  "end": 6590,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6582,
                    "end": 6590,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6582,
                      "end": 6587,
                      "name": "Chars",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6587,
                      "end": 6590,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 6588,
                          "end": 6589,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6588,
                            "end": 6589,
                            "name": "R",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "falseType": {
              "type": "TSConditionalType",
              "start": 6598,
              "end": 6627,
              "checkType": {
                "type": "TSTypeReference",
                "start": 6598,
                "end": 6599,
                "typeName": {
                  "type": "Identifier",
                  "start": 6598,
                  "end": 6599,
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSLiteralType",
                "start": 6608,
                "end": 6610,
                "literal": {
                  "type": "Literal",
                  "start": 6608,
                  "end": 6610,
                  "value": "",
                  "raw": "''"
                }
              },
              "trueType": {
                "type": "TSTupleType",
                "start": 6613,
                "end": 6615,
                "elementTypes": []
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 6622,
                "end": 6627
              }
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6630,
      "end": 6678,
      "id": {
        "type": "Identifier",
        "start": 6635,
        "end": 6637,
        "name": "L1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6640,
        "end": 6677,
        "typeName": {
          "type": "Identifier",
          "start": 6640,
          "end": 6645,
          "name": "Chars",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6645,
          "end": 6677,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 6646,
              "end": 6676,
              "literal": {
                "type": "Literal",
                "start": 6646,
                "end": 6676,
                "value": "FooBarBazThisIsALongerString",
                "raw": "'FooBarBazThisIsALongerString'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6794,
      "end": 6845,
      "id": {
        "type": "Identifier",
        "start": 6799,
        "end": 6802,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6802,
        "end": 6805,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6803,
            "end": 6804,
            "name": {
              "type": "Identifier",
              "start": 6803,
              "end": 6804,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 6808,
        "end": 6844,
        "checkType": {
          "type": "TSTypeReference",
          "start": 6808,
          "end": 6809,
          "typeName": {
            "type": "Identifier",
            "start": 6808,
            "end": 6809,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 6818,
          "end": 6832,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 6818,
              "end": 6822,
              "value": {
                "cooked": "*",
                "raw": "*"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 6829,
              "end": 6832,
              "value": {
                "cooked": "*",
                "raw": "*"
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 6822,
              "end": 6829,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 6828,
                "end": 6829,
                "name": {
                  "type": "Identifier",
                  "start": 6828,
                  "end": 6829,
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 6835,
          "end": 6836,
          "typeName": {
            "type": "Identifier",
            "start": 6835,
            "end": 6836,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6839,
          "end": 6844
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6847,
      "end": 6867,
      "id": {
        "type": "Identifier",
        "start": 6852,
        "end": 6855,
        "name": "TF1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6858,
        "end": 6866,
        "typeName": {
          "type": "Identifier",
          "start": 6858,
          "end": 6861,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6861,
          "end": 6866,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 6862,
              "end": 6865
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6882,
      "end": 6905,
      "id": {
        "type": "Identifier",
        "start": 6887,
        "end": 6890,
        "name": "TF2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6893,
        "end": 6904,
        "typeName": {
          "type": "Identifier",
          "start": 6893,
          "end": 6896,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6896,
          "end": 6904,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 6897,
              "end": 6903
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6917,
      "end": 6939,
      "id": {
        "type": "Identifier",
        "start": 6922,
        "end": 6925,
        "name": "TF3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6928,
        "end": 6938,
        "typeName": {
          "type": "Identifier",
          "start": 6928,
          "end": 6931,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6931,
          "end": 6938,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 6932,
              "end": 6937,
              "literal": {
                "type": "Literal",
                "start": 6932,
                "end": 6937,
                "value": "abc",
                "raw": "'abc'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6952,
      "end": 6976,
      "id": {
        "type": "Identifier",
        "start": 6957,
        "end": 6960,
        "name": "TF4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6963,
        "end": 6975,
        "typeName": {
          "type": "Identifier",
          "start": 6963,
          "end": 6966,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6966,
          "end": 6975,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 6967,
              "end": 6974,
              "literal": {
                "type": "Literal",
                "start": 6967,
                "end": 6974,
                "value": "*abc*",
                "raw": "'*abc*'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7045,
      "end": 7058,
      "id": {
        "type": "Identifier",
        "start": 7050,
        "end": 7051,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 7054,
        "end": 7057
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7060,
      "end": 7158,
      "id": {
        "type": "Identifier",
        "start": 7065,
        "end": 7067,
        "name": "U1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 7070,
        "end": 7157,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 7070,
            "end": 7076,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7071,
                "end": 7075,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7071,
                  "end": 7073,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7073,
                  "end": 7075,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7074,
                    "end": 7075,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7074,
                      "end": 7075,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7079,
            "end": 7085,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7080,
                "end": 7084,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7080,
                  "end": 7082,
                  "name": "b1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7082,
                  "end": 7084,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7083,
                    "end": 7084,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7083,
                      "end": 7084,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7088,
            "end": 7094,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7089,
                "end": 7093,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7089,
                  "end": 7091,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7091,
                  "end": 7093,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7092,
                    "end": 7093,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7092,
                      "end": 7093,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7097,
            "end": 7103,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7098,
                "end": 7102,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7098,
                  "end": 7100,
                  "name": "d1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7100,
                  "end": 7102,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7101,
                    "end": 7102,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7101,
                      "end": 7102,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7106,
            "end": 7112,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7107,
                "end": 7111,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7107,
                  "end": 7109,
                  "name": "e1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7109,
                  "end": 7111,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7110,
                    "end": 7111,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7110,
                      "end": 7111,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7115,
            "end": 7121,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7116,
                "end": 7120,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7116,
                  "end": 7118,
                  "name": "f1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7118,
                  "end": 7120,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7119,
                    "end": 7120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7119,
                      "end": 7120,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7124,
            "end": 7130,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7125,
                "end": 7129,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7125,
                  "end": 7127,
                  "name": "g1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7127,
                  "end": 7129,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7128,
                    "end": 7129,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7128,
                      "end": 7129,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7133,
            "end": 7139,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7134,
                "end": 7138,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7134,
                  "end": 7136,
                  "name": "h1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7136,
                  "end": 7138,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7137,
                    "end": 7138,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7137,
                      "end": 7138,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7142,
            "end": 7148,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7143,
                "end": 7147,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7143,
                  "end": 7145,
                  "name": "i1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7145,
                  "end": 7147,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7146,
                    "end": 7147,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7146,
                      "end": 7147,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7151,
            "end": 7157,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7152,
                "end": 7156,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7152,
                  "end": 7154,
                  "name": "j1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7154,
                  "end": 7156,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7155,
                    "end": 7156,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7155,
                      "end": 7156,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7159,
      "end": 7257,
      "id": {
        "type": "Identifier",
        "start": 7164,
        "end": 7166,
        "name": "U2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 7169,
        "end": 7256,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 7169,
            "end": 7175,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7170,
                "end": 7174,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7170,
                  "end": 7172,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7172,
                  "end": 7174,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7173,
                    "end": 7174,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7173,
                      "end": 7174,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7178,
            "end": 7184,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7179,
                "end": 7183,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7179,
                  "end": 7181,
                  "name": "b2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7181,
                  "end": 7183,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7182,
                    "end": 7183,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7182,
                      "end": 7183,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7187,
            "end": 7193,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7188,
                "end": 7192,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7188,
                  "end": 7190,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7190,
                  "end": 7192,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7191,
                    "end": 7192,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7191,
                      "end": 7192,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7196,
            "end": 7202,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7197,
                "end": 7201,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7197,
                  "end": 7199,
                  "name": "d2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7199,
                  "end": 7201,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7200,
                    "end": 7201,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7200,
                      "end": 7201,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7205,
            "end": 7211,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7206,
                "end": 7210,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7206,
                  "end": 7208,
                  "name": "e2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7208,
                  "end": 7210,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7209,
                    "end": 7210,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7209,
                      "end": 7210,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7214,
            "end": 7220,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7215,
                "end": 7219,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7215,
                  "end": 7217,
                  "name": "f2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7217,
                  "end": 7219,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7218,
                    "end": 7219,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7218,
                      "end": 7219,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7223,
            "end": 7229,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7224,
                "end": 7228,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7224,
                  "end": 7226,
                  "name": "g2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7226,
                  "end": 7228,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7227,
                    "end": 7228,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7227,
                      "end": 7228,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7232,
            "end": 7238,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7233,
                "end": 7237,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7233,
                  "end": 7235,
                  "name": "h2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7235,
                  "end": 7237,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7236,
                    "end": 7237,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7236,
                      "end": 7237,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7241,
            "end": 7247,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7242,
                "end": 7246,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7242,
                  "end": 7244,
                  "name": "i2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7244,
                  "end": 7246,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7245,
                    "end": 7246,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7245,
                      "end": 7246,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7250,
            "end": 7256,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7251,
                "end": 7255,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7251,
                  "end": 7253,
                  "name": "j2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7253,
                  "end": 7255,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7254,
                    "end": 7255,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7254,
                      "end": 7255,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7258,
      "end": 7356,
      "id": {
        "type": "Identifier",
        "start": 7263,
        "end": 7265,
        "name": "U3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 7268,
        "end": 7355,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 7268,
            "end": 7274,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7269,
                "end": 7273,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7269,
                  "end": 7271,
                  "name": "a3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7271,
                  "end": 7273,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7272,
                    "end": 7273,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7272,
                      "end": 7273,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7277,
            "end": 7283,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7278,
                "end": 7282,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7278,
                  "end": 7280,
                  "name": "b3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7280,
                  "end": 7282,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7281,
                    "end": 7282,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7281,
                      "end": 7282,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7286,
            "end": 7292,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7287,
                "end": 7291,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7287,
                  "end": 7289,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7289,
                  "end": 7291,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7290,
                    "end": 7291,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7290,
                      "end": 7291,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7295,
            "end": 7301,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7296,
                "end": 7300,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7296,
                  "end": 7298,
                  "name": "d3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7298,
                  "end": 7300,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7299,
                    "end": 7300,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7299,
                      "end": 7300,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7304,
            "end": 7310,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7305,
                "end": 7309,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7305,
                  "end": 7307,
                  "name": "e3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7307,
                  "end": 7309,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7308,
                    "end": 7309,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7308,
                      "end": 7309,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7313,
            "end": 7319,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7314,
                "end": 7318,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7314,
                  "end": 7316,
                  "name": "f3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7316,
                  "end": 7318,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7317,
                    "end": 7318,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7317,
                      "end": 7318,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7322,
            "end": 7328,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7323,
                "end": 7327,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7323,
                  "end": 7325,
                  "name": "g3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7325,
                  "end": 7327,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7326,
                    "end": 7327,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7326,
                      "end": 7327,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7331,
            "end": 7337,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7332,
                "end": 7336,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7332,
                  "end": 7334,
                  "name": "h3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7334,
                  "end": 7336,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7335,
                    "end": 7336,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7335,
                      "end": 7336,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7340,
            "end": 7346,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7341,
                "end": 7345,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7341,
                  "end": 7343,
                  "name": "i3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7343,
                  "end": 7345,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7344,
                    "end": 7345,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7344,
                      "end": 7345,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7349,
            "end": 7355,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7350,
                "end": 7354,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7350,
                  "end": 7352,
                  "name": "j3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7352,
                  "end": 7354,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7353,
                    "end": 7354,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7353,
                      "end": 7354,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7357,
      "end": 7455,
      "id": {
        "type": "Identifier",
        "start": 7362,
        "end": 7364,
        "name": "U4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 7367,
        "end": 7454,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 7367,
            "end": 7373,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7368,
                "end": 7372,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7368,
                  "end": 7370,
                  "name": "a4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7370,
                  "end": 7372,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7371,
                    "end": 7372,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7371,
                      "end": 7372,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7376,
            "end": 7382,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7377,
                "end": 7381,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7377,
                  "end": 7379,
                  "name": "b4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7379,
                  "end": 7381,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7380,
                    "end": 7381,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7380,
                      "end": 7381,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7385,
            "end": 7391,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7386,
                "end": 7390,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7386,
                  "end": 7388,
                  "name": "c4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7388,
                  "end": 7390,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7389,
                    "end": 7390,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7389,
                      "end": 7390,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7394,
            "end": 7400,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7395,
                "end": 7399,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7395,
                  "end": 7397,
                  "name": "d4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7397,
                  "end": 7399,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7398,
                    "end": 7399,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7398,
                      "end": 7399,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7403,
            "end": 7409,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7404,
                "end": 7408,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7404,
                  "end": 7406,
                  "name": "e4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7406,
                  "end": 7408,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7407,
                    "end": 7408,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7407,
                      "end": 7408,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7412,
            "end": 7418,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7413,
                "end": 7417,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7413,
                  "end": 7415,
                  "name": "f4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7415,
                  "end": 7417,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7416,
                    "end": 7417,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7416,
                      "end": 7417,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7421,
            "end": 7427,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7422,
                "end": 7426,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7422,
                  "end": 7424,
                  "name": "g4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7424,
                  "end": 7426,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7425,
                    "end": 7426,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7425,
                      "end": 7426,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7430,
            "end": 7436,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7431,
                "end": 7435,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7431,
                  "end": 7433,
                  "name": "h4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7433,
                  "end": 7435,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7434,
                    "end": 7435,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7434,
                      "end": 7435,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7439,
            "end": 7445,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7440,
                "end": 7444,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7440,
                  "end": 7442,
                  "name": "i4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7442,
                  "end": 7444,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7443,
                    "end": 7444,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7443,
                      "end": 7444,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7448,
            "end": 7454,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7449,
                "end": 7453,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7449,
                  "end": 7451,
                  "name": "j4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7451,
                  "end": 7453,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7452,
                    "end": 7453,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7452,
                      "end": 7453,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7456,
      "end": 7554,
      "id": {
        "type": "Identifier",
        "start": 7461,
        "end": 7463,
        "name": "U5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 7466,
        "end": 7553,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 7466,
            "end": 7472,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7467,
                "end": 7471,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7467,
                  "end": 7469,
                  "name": "a5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7469,
                  "end": 7471,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7470,
                    "end": 7471,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7470,
                      "end": 7471,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7475,
            "end": 7481,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7476,
                "end": 7480,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7476,
                  "end": 7478,
                  "name": "b5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7478,
                  "end": 7480,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7479,
                    "end": 7480,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7479,
                      "end": 7480,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7484,
            "end": 7490,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7485,
                "end": 7489,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7485,
                  "end": 7487,
                  "name": "c5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7487,
                  "end": 7489,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7488,
                    "end": 7489,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7488,
                      "end": 7489,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7493,
            "end": 7499,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7494,
                "end": 7498,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7494,
                  "end": 7496,
                  "name": "d5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7496,
                  "end": 7498,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7497,
                    "end": 7498,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7497,
                      "end": 7498,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7502,
            "end": 7508,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7503,
                "end": 7507,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7503,
                  "end": 7505,
                  "name": "e5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7505,
                  "end": 7507,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7506,
                    "end": 7507,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7506,
                      "end": 7507,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7511,
            "end": 7517,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7512,
                "end": 7516,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7512,
                  "end": 7514,
                  "name": "f5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7514,
                  "end": 7516,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7515,
                    "end": 7516,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7515,
                      "end": 7516,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7520,
            "end": 7526,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7521,
                "end": 7525,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7521,
                  "end": 7523,
                  "name": "g5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7523,
                  "end": 7525,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7524,
                    "end": 7525,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7524,
                      "end": 7525,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7529,
            "end": 7535,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7530,
                "end": 7534,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7530,
                  "end": 7532,
                  "name": "h5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7532,
                  "end": 7534,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7533,
                    "end": 7534,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7533,
                      "end": 7534,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7538,
            "end": 7544,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7539,
                "end": 7543,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7539,
                  "end": 7541,
                  "name": "i5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7541,
                  "end": 7543,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7542,
                    "end": 7543,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7542,
                      "end": 7543,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 7547,
            "end": 7553,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 7548,
                "end": 7552,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 7548,
                  "end": 7550,
                  "name": "j5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7550,
                  "end": 7552,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7551,
                    "end": 7552,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7551,
                      "end": 7552,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7556,
      "end": 7594,
      "id": {
        "type": "Identifier",
        "start": 7561,
        "end": 7568,
        "name": "U100000",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 7571,
        "end": 7593,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 7571,
            "end": 7573,
            "typeName": {
              "type": "Identifier",
              "start": 7571,
              "end": 7573,
              "name": "U1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 7576,
            "end": 7578,
            "typeName": {
              "type": "Identifier",
              "start": 7576,
              "end": 7578,
              "name": "U2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 7581,
            "end": 7583,
            "typeName": {
              "type": "Identifier",
              "start": 7581,
              "end": 7583,
              "name": "U3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 7586,
            "end": 7588,
            "typeName": {
              "type": "Identifier",
              "start": 7586,
              "end": 7588,
              "name": "U4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 7591,
            "end": 7593,
            "typeName": {
              "type": "Identifier",
              "start": 7591,
              "end": 7593,
              "name": "U5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7606,
      "end": 7658,
      "id": {
        "type": "Identifier",
        "start": 7611,
        "end": 7617,
        "name": "Digits",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 7620,
        "end": 7657,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 7620,
            "end": 7621,
            "literal": {
              "type": "Literal",
              "start": 7620,
              "end": 7621,
              "value": 0,
              "raw": "0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 7624,
            "end": 7625,
            "literal": {
              "type": "Literal",
              "start": 7624,
              "end": 7625,
              "value": 1,
              "raw": "1"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 7628,
            "end": 7629,
            "literal": {
              "type": "Literal",
              "start": 7628,
              "end": 7629,
              "value": 2,
              "raw": "2"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 7632,
            "end": 7633,
            "literal": {
              "type": "Literal",
              "start": 7632,
              "end": 7633,
              "value": 3,
              "raw": "3"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 7636,
            "end": 7637,
            "literal": {
              "type": "Literal",
              "start": 7636,
              "end": 7637,
              "value": 4,
              "raw": "4"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 7640,
            "end": 7641,
            "literal": {
              "type": "Literal",
              "start": 7640,
              "end": 7641,
              "value": 5,
              "raw": "5"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 7644,
            "end": 7645,
            "literal": {
              "type": "Literal",
              "start": 7644,
              "end": 7645,
              "value": 6,
              "raw": "6"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 7648,
            "end": 7649,
            "literal": {
              "type": "Literal",
              "start": 7648,
              "end": 7649,
              "value": 7,
              "raw": "7"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 7652,
            "end": 7653,
            "literal": {
              "type": "Literal",
              "start": 7652,
              "end": 7653,
              "value": 8,
              "raw": "8"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 7656,
            "end": 7657,
            "literal": {
              "type": "Literal",
              "start": 7656,
              "end": 7657,
              "value": 9,
              "raw": "9"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7660,
      "end": 7723,
      "id": {
        "type": "Identifier",
        "start": 7665,
        "end": 7672,
        "name": "D100000",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 7675,
        "end": 7722,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 7675,
            "end": 7678,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 7684,
            "end": 7687,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 7693,
            "end": 7696,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 7702,
            "end": 7705,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 7711,
            "end": 7714,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 7720,
            "end": 7722,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 7678,
            "end": 7684,
            "typeName": {
              "type": "Identifier",
              "start": 7678,
              "end": 7684,
              "name": "Digits",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 7687,
            "end": 7693,
            "typeName": {
              "type": "Identifier",
              "start": 7687,
              "end": 7693,
              "name": "Digits",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 7696,
            "end": 7702,
            "typeName": {
              "type": "Identifier",
              "start": 7696,
              "end": 7702,
              "name": "Digits",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 7705,
            "end": 7711,
            "typeName": {
              "type": "Identifier",
              "start": 7705,
              "end": 7711,
              "name": "Digits",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 7714,
            "end": 7720,
            "typeName": {
              "type": "Identifier",
              "start": 7714,
              "end": 7720,
              "name": "Digits",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7735,
      "end": 7808,
      "id": {
        "type": "Identifier",
        "start": 7740,
        "end": 7747,
        "name": "TDigits",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 7750,
        "end": 7807,
        "types": [
          {
            "type": "TSTupleType",
            "start": 7750,
            "end": 7753,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 7751,
                "end": 7752,
                "literal": {
                  "type": "Literal",
                  "start": 7751,
                  "end": 7752,
                  "value": 0,
                  "raw": "0"
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 7756,
            "end": 7759,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 7757,
                "end": 7758,
                "literal": {
                  "type": "Literal",
                  "start": 7757,
                  "end": 7758,
                  "value": 1,
                  "raw": "1"
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 7762,
            "end": 7765,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 7763,
                "end": 7764,
                "literal": {
                  "type": "Literal",
                  "start": 7763,
                  "end": 7764,
                  "value": 2,
                  "raw": "2"
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 7768,
            "end": 7771,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 7769,
                "end": 7770,
                "literal": {
                  "type": "Literal",
                  "start": 7769,
                  "end": 7770,
                  "value": 3,
                  "raw": "3"
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 7774,
            "end": 7777,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 7775,
                "end": 7776,
                "literal": {
                  "type": "Literal",
                  "start": 7775,
                  "end": 7776,
                  "value": 4,
                  "raw": "4"
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 7780,
            "end": 7783,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 7781,
                "end": 7782,
                "literal": {
                  "type": "Literal",
                  "start": 7781,
                  "end": 7782,
                  "value": 5,
                  "raw": "5"
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 7786,
            "end": 7789,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 7787,
                "end": 7788,
                "literal": {
                  "type": "Literal",
                  "start": 7787,
                  "end": 7788,
                  "value": 6,
                  "raw": "6"
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 7792,
            "end": 7795,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 7793,
                "end": 7794,
                "literal": {
                  "type": "Literal",
                  "start": 7793,
                  "end": 7794,
                  "value": 7,
                  "raw": "7"
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 7798,
            "end": 7801,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 7799,
                "end": 7800,
                "literal": {
                  "type": "Literal",
                  "start": 7799,
                  "end": 7800,
                  "value": 8,
                  "raw": "8"
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 7804,
            "end": 7807,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 7805,
                "end": 7806,
                "literal": {
                  "type": "Literal",
                  "start": 7805,
                  "end": 7806,
                  "value": 9,
                  "raw": "9"
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7810,
      "end": 7886,
      "id": {
        "type": "Identifier",
        "start": 7815,
        "end": 7822,
        "name": "T100000",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 7825,
        "end": 7885,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 7826,
            "end": 7836,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7829,
              "end": 7836,
              "typeName": {
                "type": "Identifier",
                "start": 7829,
                "end": 7836,
                "name": "TDigits",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 7838,
            "end": 7848,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7841,
              "end": 7848,
              "typeName": {
                "type": "Identifier",
                "start": 7841,
                "end": 7848,
                "name": "TDigits",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 7850,
            "end": 7860,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7853,
              "end": 7860,
              "typeName": {
                "type": "Identifier",
                "start": 7853,
                "end": 7860,
                "name": "TDigits",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 7862,
            "end": 7872,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7865,
              "end": 7872,
              "typeName": {
                "type": "Identifier",
                "start": 7865,
                "end": 7872,
                "name": "TDigits",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 7874,
            "end": 7884,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7877,
              "end": 7884,
              "typeName": {
                "type": "Identifier",
                "start": 7877,
                "end": 7884,
                "name": "TDigits",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7920,
      "end": 7999,
      "id": {
        "type": "Identifier",
        "start": 7925,
        "end": 7935,
        "name": "IsNegative",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7935,
        "end": 7953,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 7936,
            "end": 7952,
            "name": {
              "type": "Identifier",
              "start": 7936,
              "end": 7937,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 7946,
              "end": 7952
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 7956,
        "end": 7998,
        "checkType": {
          "type": "TSTemplateLiteralType",
          "start": 7956,
          "end": 7962,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 7956,
              "end": 7959,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 7960,
              "end": 7962,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 7959,
              "end": 7960,
              "typeName": {
                "type": "Identifier",
                "start": 7959,
                "end": 7960,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 7971,
          "end": 7983,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 7971,
              "end": 7975,
              "value": {
                "cooked": "-",
                "raw": "-"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 7981,
              "end": 7983,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 7975,
              "end": 7981
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 7986,
          "end": 7990,
          "literal": {
            "type": "Literal",
            "start": 7986,
            "end": 7990,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 7993,
          "end": 7998,
          "literal": {
            "type": "Literal",
            "start": 7993,
            "end": 7998,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 8001,
      "end": 8170,
      "id": {
        "type": "Identifier",
        "start": 8006,
        "end": 8008,
        "name": "AA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8008,
        "end": 8044,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8009,
            "end": 8025,
            "name": {
              "type": "Identifier",
              "start": 8009,
              "end": 8010,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 8019,
              "end": 8025
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 8027,
            "end": 8043,
            "name": {
              "type": "Identifier",
              "start": 8027,
              "end": 8028,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 8037,
              "end": 8043
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 8051,
        "end": 8169,
        "checkType": {
          "type": "TSTupleType",
          "start": 8051,
          "end": 8063,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 8052,
              "end": 8056,
              "literal": {
                "type": "Literal",
                "start": 8052,
                "end": 8056,
                "value": true,
                "raw": "true"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 8058,
              "end": 8062,
              "literal": {
                "type": "Literal",
                "start": 8058,
                "end": 8062,
                "value": true,
                "raw": "true"
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 8072,
          "end": 8102,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 8073,
              "end": 8086,
              "typeName": {
                "type": "Identifier",
                "start": 8073,
                "end": 8083,
                "name": "IsNegative",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 8083,
                "end": 8086,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 8084,
                    "end": 8085,
                    "typeName": {
                      "type": "Identifier",
                      "start": 8084,
                      "end": 8085,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 8088,
              "end": 8101,
              "typeName": {
                "type": "Identifier",
                "start": 8088,
                "end": 8098,
                "name": "IsNegative",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 8098,
                "end": 8101,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 8099,
                    "end": 8100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 8099,
                      "end": 8100,
                      "name": "Q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 8105,
          "end": 8125,
          "literal": {
            "type": "Literal",
            "start": 8105,
            "end": 8125,
            "value": "Every thing is ok!",
            "raw": "'Every thing is ok!'"
          }
        },
        "falseType": {
          "type": "TSTupleType",
          "start": 8128,
          "end": 8169,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 8129,
              "end": 8138,
              "literal": {
                "type": "Literal",
                "start": 8129,
                "end": 8138,
                "value": "strange",
                "raw": "'strange'"
              }
            },
            {
              "type": "TSTypeReference",
              "start": 8140,
              "end": 8153,
              "typeName": {
                "type": "Identifier",
                "start": 8140,
                "end": 8150,
                "name": "IsNegative",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 8150,
                "end": 8153,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 8151,
                    "end": 8152,
                    "typeName": {
                      "type": "Identifier",
                      "start": 8151,
                      "end": 8152,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 8155,
              "end": 8168,
              "typeName": {
                "type": "Identifier",
                "start": 8155,
                "end": 8165,
                "name": "IsNegative",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 8165,
                "end": 8168,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 8166,
                    "end": 8167,
                    "typeName": {
                      "type": "Identifier",
                      "start": 8166,
                      "end": 8167,
                      "name": "Q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 8172,
      "end": 8193,
      "id": {
        "type": "Identifier",
        "start": 8177,
        "end": 8179,
        "name": "BB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 8182,
        "end": 8192,
        "typeName": {
          "type": "Identifier",
          "start": 8182,
          "end": 8184,
          "name": "AA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 8184,
          "end": 8192,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 8185,
              "end": 8187,
              "literal": {
                "type": "UnaryExpression",
                "start": 8185,
                "end": 8187,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 8186,
                  "end": 8187,
                  "value": 2,
                  "raw": "2"
                }
              }
            },
            {
              "type": "TSLiteralType",
              "start": 8189,
              "end": 8191,
              "literal": {
                "type": "UnaryExpression",
                "start": 8189,
                "end": 8191,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 8190,
                  "end": 8191,
                  "value": 2,
                  "raw": "2"
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 8217,
      "end": 8474,
      "id": {
        "type": "Identifier",
        "start": 8222,
        "end": 8230,
        "name": "PathKeys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8230,
        "end": 8233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8231,
            "end": 8232,
            "name": {
              "type": "Identifier",
              "start": 8231,
              "end": 8232,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 8240,
        "end": 8473,
        "checkType": {
          "type": "TSUnknownKeyword",
          "start": 8240,
          "end": 8247
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 8256,
          "end": 8257,
          "typeName": {
            "type": "Identifier",
            "start": 8256,
            "end": 8257,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 8260,
          "end": 8265
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 8272,
          "end": 8473,
          "checkType": {
            "type": "TSTypeReference",
            "start": 8272,
            "end": 8273,
            "typeName": {
              "type": "Identifier",
              "start": 8272,
              "end": 8273,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "start": 8282,
            "end": 8296,
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 8291,
              "end": 8296,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 8291,
                "end": 8294
              }
            }
          },
          "trueType": {
            "type": "TSUnionType",
            "start": 8299,
            "end": 8372,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 8299,
                "end": 8328,
                "typeName": {
                  "type": "Identifier",
                  "start": 8299,
                  "end": 8306,
                  "name": "Extract",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 8306,
                  "end": 8328,
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "start": 8307,
                      "end": 8314,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 8313,
                        "end": 8314,
                        "typeName": {
                          "type": "Identifier",
                          "start": 8313,
                          "end": 8314,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTemplateLiteralType",
                      "start": 8316,
                      "end": 8327,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 8316,
                          "end": 8319,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 8325,
                          "end": 8327,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 8319,
                          "end": 8325
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 8331,
                "end": 8372,
                "typeName": {
                  "type": "Identifier",
                  "start": 8331,
                  "end": 8338,
                  "name": "SubKeys",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 8338,
                  "end": 8372,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 8339,
                      "end": 8340,
                      "typeName": {
                        "type": "Identifier",
                        "start": 8339,
                        "end": 8340,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 8342,
                      "end": 8371,
                      "typeName": {
                        "type": "Identifier",
                        "start": 8342,
                        "end": 8349,
                        "name": "Extract",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 8349,
                        "end": 8371,
                        "params": [
                          {
                            "type": "TSTypeOperator",
                            "start": 8350,
                            "end": 8357,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 8356,
                              "end": 8357,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8356,
                                "end": 8357,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "TSTemplateLiteralType",
                            "start": 8359,
                            "end": 8370,
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 8359,
                                "end": 8362,
                                "value": {
                                  "cooked": "",
                                  "raw": ""
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 8368,
                                "end": 8370,
                                "value": {
                                  "cooked": "",
                                  "raw": ""
                                },
                                "tail": true
                              }
                            ],
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 8362,
                                "end": 8368
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 8379,
            "end": 8473,
            "checkType": {
              "type": "TSTypeReference",
              "start": 8379,
              "end": 8380,
              "typeName": {
                "type": "Identifier",
                "start": 8379,
                "end": 8380,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSObjectKeyword",
              "start": 8389,
              "end": 8395
            },
            "trueType": {
              "type": "TSUnionType",
              "start": 8398,
              "end": 8461,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 8398,
                  "end": 8422,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8398,
                    "end": 8405,
                    "name": "Extract",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 8405,
                    "end": 8422,
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "start": 8406,
                        "end": 8413,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8412,
                          "end": 8413,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8412,
                            "end": 8413,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 8415,
                        "end": 8421
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 8425,
                  "end": 8461,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8425,
                    "end": 8432,
                    "name": "SubKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 8432,
                    "end": 8461,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 8433,
                        "end": 8434,
                        "typeName": {
                          "type": "Identifier",
                          "start": 8433,
                          "end": 8434,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 8436,
                        "end": 8460,
                        "typeName": {
                          "type": "Identifier",
                          "start": 8436,
                          "end": 8443,
                          "name": "Extract",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 8443,
                          "end": 8460,
                          "params": [
                            {
                              "type": "TSTypeOperator",
                              "start": 8444,
                              "end": 8451,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8450,
                                "end": 8451,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8450,
                                  "end": 8451,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 8453,
                              "end": 8459
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 8468,
              "end": 8473
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 8476,
      "end": 8565,
      "id": {
        "type": "Identifier",
        "start": 8481,
        "end": 8488,
        "name": "SubKeys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8488,
        "end": 8509,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8489,
            "end": 8490,
            "name": {
              "type": "Identifier",
              "start": 8489,
              "end": 8490,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 8492,
            "end": 8508,
            "name": {
              "type": "Identifier",
              "start": 8492,
              "end": 8493,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 8502,
              "end": 8508
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 8512,
        "end": 8564,
        "checkType": {
          "type": "TSTypeReference",
          "start": 8512,
          "end": 8513,
          "typeName": {
            "type": "Identifier",
            "start": 8512,
            "end": 8513,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 8522,
          "end": 8529,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 8528,
            "end": 8529,
            "typeName": {
              "type": "Identifier",
              "start": 8528,
              "end": 8529,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "trueType": {
          "type": "TSTemplateLiteralType",
          "start": 8532,
          "end": 8556,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 8532,
              "end": 8535,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 8536,
              "end": 8540,
              "value": {
                "cooked": ".",
                "raw": "."
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 8554,
              "end": 8556,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 8535,
              "end": 8536,
              "typeName": {
                "type": "Identifier",
                "start": 8535,
                "end": 8536,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 8540,
              "end": 8554,
              "typeName": {
                "type": "Identifier",
                "start": 8540,
                "end": 8548,
                "name": "PathKeys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 8548,
                "end": 8554,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 8549,
                    "end": 8553,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 8549,
                      "end": 8550,
                      "typeName": {
                        "type": "Identifier",
                        "start": 8549,
                        "end": 8550,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 8551,
                      "end": 8552,
                      "typeName": {
                        "type": "Identifier",
                        "start": 8551,
                        "end": 8552,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 8559,
          "end": 8564
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 8567,
      "end": 8652,
      "id": {
        "type": "Identifier",
        "start": 8584,
        "end": 8592,
        "name": "getProp2",
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
          "start": 8619,
          "end": 8625,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8622,
            "end": 8625,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 8624,
              "end": 8625,
              "typeName": {
                "type": "Identifier",
                "start": 8624,
                "end": 8625,
                "name": "T",
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
          "start": 8627,
          "end": 8634,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8631,
            "end": 8634,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 8633,
              "end": 8634,
              "typeName": {
                "type": "Identifier",
                "start": 8633,
                "end": 8634,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8592,
        "end": 8618,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8593,
            "end": 8594,
            "name": {
              "type": "Identifier",
              "start": 8593,
              "end": 8594,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 8596,
            "end": 8617,
            "name": {
              "type": "Identifier",
              "start": 8596,
              "end": 8597,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 8606,
              "end": 8617,
              "typeName": {
                "type": "Identifier",
                "start": 8606,
                "end": 8614,
                "name": "PathKeys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 8614,
                "end": 8617,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 8615,
                    "end": 8616,
                    "typeName": {
                      "type": "Identifier",
                      "start": 8615,
                      "end": 8616,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 8635,
        "end": 8651,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 8637,
          "end": 8651,
          "typeName": {
            "type": "Identifier",
            "start": 8637,
            "end": 8645,
            "name": "PropType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 8645,
            "end": 8651,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 8646,
                "end": 8647,
                "typeName": {
                  "type": "Identifier",
                  "start": 8646,
                  "end": 8647,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 8649,
                "end": 8650,
                "typeName": {
                  "type": "Identifier",
                  "start": 8649,
                  "end": 8650,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 8654,
      "end": 8801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8660,
          "end": 8800,
          "id": {
            "type": "Identifier",
            "start": 8660,
            "end": 8664,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 8667,
            "end": 8800,
            "expression": {
              "type": "ObjectExpression",
              "start": 8667,
              "end": 8791,
              "properties": [
                {
                  "type": "Property",
                  "start": 8673,
                  "end": 8685,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8673,
                    "end": 8677,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 8679,
                    "end": 8685,
                    "value": "John",
                    "raw": "'John'"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 8691,
                  "end": 8698,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8691,
                    "end": 8694,
                    "name": "age",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 8696,
                    "end": 8698,
                    "value": 42,
                    "raw": "42"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 8704,
                  "end": 8789,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8704,
                    "end": 8708,
                    "name": "cars",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "start": 8710,
                    "end": 8789,
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "start": 8720,
                        "end": 8745,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 8722,
                            "end": 8734,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 8722,
                              "end": 8726,
                              "name": "make",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 8728,
                              "end": 8734,
                              "value": "Ford",
                              "raw": "'Ford'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 8736,
                            "end": 8743,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 8736,
                              "end": 8739,
                              "name": "age",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 8741,
                              "end": 8743,
                              "value": 10,
                              "raw": "10"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      {
                        "type": "ObjectExpression",
                        "start": 8755,
                        "end": 8783,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 8757,
                            "end": 8772,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 8757,
                              "end": 8761,
                              "name": "make",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 8763,
                              "end": 8772,
                              "value": "Trabant",
                              "raw": "'Trabant'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 8774,
                            "end": 8781,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 8774,
                              "end": 8777,
                              "name": "age",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 8779,
                              "end": 8781,
                              "value": 35,
                              "raw": "35"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ]
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 8795,
              "end": 8800,
              "typeName": {
                "type": "Identifier",
                "start": 8795,
                "end": 8800,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8803,
      "end": 8844,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8807,
          "end": 8843,
          "id": {
            "type": "Identifier",
            "start": 8807,
            "end": 8811,
            "name": "make",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8814,
            "end": 8843,
            "callee": {
              "type": "Identifier",
              "start": 8814,
              "end": 8822,
              "name": "getProp2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8823,
                "end": 8827,
                "name": "obj2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 8829,
                "end": 8842,
                "value": "cars.1.make",
                "raw": "'cars.1.make'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8882,
      "end": 9056,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 8889,
        "end": 9056,
        "id": {
          "type": "Identifier",
          "start": 8894,
          "end": 8901,
          "name": "Spacing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 8908,
          "end": 9055,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 8910,
              "end": 8913,
              "literal": {
                "type": "TemplateLiteral",
                "start": 8910,
                "end": 8913,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 8910,
                    "end": 8913,
                    "value": {
                      "cooked": "0",
                      "raw": "0"
                    },
                    "tail": true
                  }
                ]
              }
            },
            {
              "type": "TSTemplateLiteralType",
              "start": 8920,
              "end": 8933,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 8920,
                  "end": 8923,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 8929,
                  "end": 8933,
                  "value": {
                    "cooked": "px",
                    "raw": "px"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 8923,
                  "end": 8929
                }
              ]
            },
            {
              "type": "TSTemplateLiteralType",
              "start": 8940,
              "end": 8954,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 8940,
                  "end": 8943,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 8949,
                  "end": 8954,
                  "value": {
                    "cooked": "rem",
                    "raw": "rem"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 8943,
                  "end": 8949
                }
              ]
            },
            {
              "type": "TSTemplateLiteralType",
              "start": 8961,
              "end": 9055,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 8961,
                  "end": 8965,
                  "value": {
                    "cooked": "s",
                    "raw": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9053,
                  "end": 9055,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSUnionType",
                  "start": 8965,
                  "end": 9053,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 8965,
                      "end": 8966,
                      "literal": {
                        "type": "Literal",
                        "start": 8965,
                        "end": 8966,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8969,
                      "end": 8970,
                      "literal": {
                        "type": "Literal",
                        "start": 8969,
                        "end": 8970,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8973,
                      "end": 8974,
                      "literal": {
                        "type": "Literal",
                        "start": 8973,
                        "end": 8974,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8977,
                      "end": 8978,
                      "literal": {
                        "type": "Literal",
                        "start": 8977,
                        "end": 8978,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8981,
                      "end": 8982,
                      "literal": {
                        "type": "Literal",
                        "start": 8981,
                        "end": 8982,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8985,
                      "end": 8986,
                      "literal": {
                        "type": "Literal",
                        "start": 8985,
                        "end": 8986,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8989,
                      "end": 8990,
                      "literal": {
                        "type": "Literal",
                        "start": 8989,
                        "end": 8990,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8993,
                      "end": 8994,
                      "literal": {
                        "type": "Literal",
                        "start": 8993,
                        "end": 8994,
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8997,
                      "end": 8998,
                      "literal": {
                        "type": "Literal",
                        "start": 8997,
                        "end": 8998,
                        "value": 9,
                        "raw": "9"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9001,
                      "end": 9003,
                      "literal": {
                        "type": "Literal",
                        "start": 9001,
                        "end": 9003,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9006,
                      "end": 9008,
                      "literal": {
                        "type": "Literal",
                        "start": 9006,
                        "end": 9008,
                        "value": 11,
                        "raw": "11"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9011,
                      "end": 9013,
                      "literal": {
                        "type": "Literal",
                        "start": 9011,
                        "end": 9013,
                        "value": 12,
                        "raw": "12"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9016,
                      "end": 9018,
                      "literal": {
                        "type": "Literal",
                        "start": 9016,
                        "end": 9018,
                        "value": 13,
                        "raw": "13"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9021,
                      "end": 9023,
                      "literal": {
                        "type": "Literal",
                        "start": 9021,
                        "end": 9023,
                        "value": 14,
                        "raw": "14"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9026,
                      "end": 9028,
                      "literal": {
                        "type": "Literal",
                        "start": 9026,
                        "end": 9028,
                        "value": 15,
                        "raw": "15"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9031,
                      "end": 9033,
                      "literal": {
                        "type": "Literal",
                        "start": 9031,
                        "end": 9033,
                        "value": 16,
                        "raw": "16"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9036,
                      "end": 9038,
                      "literal": {
                        "type": "Literal",
                        "start": 9036,
                        "end": 9038,
                        "value": 17,
                        "raw": "17"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9041,
                      "end": 9043,
                      "literal": {
                        "type": "Literal",
                        "start": 9041,
                        "end": 9043,
                        "value": 18,
                        "raw": "18"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9046,
                      "end": 9048,
                      "literal": {
                        "type": "Literal",
                        "start": 9046,
                        "end": 9048,
                        "value": 19,
                        "raw": "19"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9051,
                      "end": 9053,
                      "literal": {
                        "type": "Literal",
                        "start": 9051,
                        "end": 9053,
                        "value": 20,
                        "raw": "20"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 9058,
      "end": 9088,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9064,
          "end": 9088,
          "id": {
            "type": "Identifier",
            "start": 9064,
            "end": 9080,
            "name": "spacing",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9071,
              "end": 9080,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9073,
                "end": 9080,
                "typeName": {
                  "type": "Identifier",
                  "start": 9073,
                  "end": 9080,
                  "name": "Spacing",
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
          "init": {
            "type": "Literal",
            "start": 9083,
            "end": 9088,
            "value": "s12",
            "raw": "\"s12\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 9090,
      "end": 9244,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 9097,
        "end": 9244,
        "id": {
          "type": "Identifier",
          "start": 9102,
          "end": 9118,
          "name": "SpacingShorthand",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 9125,
          "end": 9243,
          "types": [
            {
              "type": "TSTemplateLiteralType",
              "start": 9127,
              "end": 9150,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 9127,
                  "end": 9130,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9137,
                  "end": 9141,
                  "value": {
                    "cooked": " ",
                    "raw": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9148,
                  "end": 9150,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 9130,
                  "end": 9137,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9130,
                    "end": 9137,
                    "name": "Spacing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 9141,
                  "end": 9148,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9141,
                    "end": 9148,
                    "name": "Spacing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            {
              "type": "TSTemplateLiteralType",
              "start": 9157,
              "end": 9191,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 9157,
                  "end": 9160,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9167,
                  "end": 9171,
                  "value": {
                    "cooked": " ",
                    "raw": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9178,
                  "end": 9182,
                  "value": {
                    "cooked": " ",
                    "raw": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9189,
                  "end": 9191,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 9160,
                  "end": 9167,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9160,
                    "end": 9167,
                    "name": "Spacing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 9171,
                  "end": 9178,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9171,
                    "end": 9178,
                    "name": "Spacing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 9182,
                  "end": 9189,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9182,
                    "end": 9189,
                    "name": "Spacing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            {
              "type": "TSTemplateLiteralType",
              "start": 9198,
              "end": 9243,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 9198,
                  "end": 9201,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9208,
                  "end": 9212,
                  "value": {
                    "cooked": " ",
                    "raw": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9219,
                  "end": 9223,
                  "value": {
                    "cooked": " ",
                    "raw": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9230,
                  "end": 9234,
                  "value": {
                    "cooked": " ",
                    "raw": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9241,
                  "end": 9243,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 9201,
                  "end": 9208,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9201,
                    "end": 9208,
                    "name": "Spacing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 9212,
                  "end": 9219,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9212,
                    "end": 9219,
                    "name": "Spacing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 9223,
                  "end": 9230,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9223,
                    "end": 9230,
                    "name": "Spacing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 9234,
                  "end": 9241,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9234,
                    "end": 9241,
                    "name": "Spacing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 9246,
      "end": 9286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9252,
          "end": 9285,
          "id": {
            "type": "Identifier",
            "start": 9252,
            "end": 9275,
            "name": "test1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9257,
              "end": 9275,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9259,
                "end": 9275,
                "typeName": {
                  "type": "Identifier",
                  "start": 9259,
                  "end": 9275,
                  "name": "SpacingShorthand",
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
          "init": {
            "type": "Literal",
            "start": 9278,
            "end": 9285,
            "value": "0 0 0",
            "raw": "\"0 0 0\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
