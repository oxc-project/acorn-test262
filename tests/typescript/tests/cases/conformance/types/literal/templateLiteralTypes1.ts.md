__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 9286,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 167,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 67,
            "decorators": [],
            "name": "createScopedActionType",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 70,
            "end": 166,
            "expression": true,
            "async": false,
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
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
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
            "params": [
              {
                "type": "Identifier",
                "start": 89,
                "end": 97,
                "decorators": [],
                "name": "scope",
                "optional": false,
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
              "type": "ArrowFunctionExpression",
              "start": 102,
              "end": 166,
              "expression": true,
              "async": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 121,
                  "end": 128,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
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
                "type": "TSAsExpression",
                "start": 133,
                "end": 166,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 133,
                  "end": 151,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 133,
                      "end": 136,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 141,
                      "end": 145,
                      "value": {
                        "raw": "/",
                        "cooked": "/"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 149,
                      "end": 151,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 136,
                      "end": 141,
                      "decorators": [],
                      "name": "scope",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 145,
                      "end": 149,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
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
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 159,
                      "end": 163,
                      "value": {
                        "raw": "/",
                        "cooked": "/"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 164,
                      "end": 166,
                      "value": {
                        "raw": "",
                        "cooked": ""
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
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 232,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 195,
            "decorators": [],
            "name": "createActionInMyScope",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 198,
            "end": 231,
            "callee": {
              "type": "Identifier",
              "start": 198,
              "end": 220,
              "decorators": [],
              "name": "createScopedActionType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 221,
                "end": 230,
                "value": "MyScope",
                "raw": "\"MyScope\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 283,
      "end": 336,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 335,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 298,
            "decorators": [],
            "name": "MY_ACTION",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 301,
            "end": 335,
            "callee": {
              "type": "Identifier",
              "start": 301,
              "end": 322,
              "decorators": [],
              "name": "createActionInMyScope",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 323,
                "end": 334,
                "value": "MY_ACTION",
                "raw": "\"MY_ACTION\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "EventName",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 453,
            "end": 462,
            "value": {
              "raw": "Changed",
              "cooked": "Changed"
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "EN1",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "EventName",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "Loc",
        "optional": false,
        "typeAnnotation": null
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
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 550,
            "end": 554,
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 581,
            "end": 583,
            "value": {
              "raw": "",
              "cooked": ""
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
        "decorators": [],
        "name": "ToString",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 709,
            "end": 711,
            "value": {
              "raw": "",
              "cooked": ""
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "TS1",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "ToString",
          "optional": false,
          "typeAnnotation": null
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
                    "argument": {
                      "type": "Literal",
                      "start": 754,
                      "end": 759,
                      "value": null,
                      "raw": "1234n",
                      "bigint": "1234"
                    },
                    "prefix": true
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
        "decorators": [],
        "name": "TL1",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "raw": "a",
              "cooked": "a"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 844,
            "end": 848,
            "value": {
              "raw": "b",
              "cooked": "b"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 849,
            "end": 852,
            "value": {
              "raw": "c",
              "cooked": "c"
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "TL2",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
          "decorators": [],
          "name": "TL1",
          "optional": false,
          "typeAnnotation": null
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
                    "raw": "x",
                    "cooked": "x"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 892,
                  "end": 895,
                  "value": {
                    "raw": "y",
                    "cooked": "y"
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
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
        "decorators": [],
        "name": "TL3",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "TL2",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "Cases",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 1026,
            "end": 1030,
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 1042,
            "end": 1046,
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 1059,
            "end": 1063,
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 1078,
            "end": 1080,
            "value": {
              "raw": "",
              "cooked": ""
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
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "Uncapitalize",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
        "decorators": [],
        "name": "TCA1",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Cases",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TCA2",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Cases",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 1237,
          "end": 1264,
          "decorators": [],
          "name": "name",
          "optional": false,
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
                    "raw": "get",
                    "cooked": "get"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1262,
                  "end": 1264,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                    "decorators": [],
                    "name": "Capitalize",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1266,
        "end": 1336,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1272,
            "end": 1294,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1276,
                "end": 1293,
                "id": {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1286,
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1278,
                    "end": 1286,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1280,
                      "end": 1286
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1289,
                  "end": 1293,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1299,
            "end": 1334,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1303,
                "end": 1333,
                "id": {
                  "type": "Identifier",
                  "start": 1303,
                  "end": 1326,
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
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
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1329,
                  "end": 1333,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1338,
      "end": 1474,
      "id": {
        "type": "Identifier",
        "start": 1347,
        "end": 1350,
        "decorators": [],
        "name": "fa1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 1354,
          "end": 1358,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1360,
          "end": 1387,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1361,
            "end": 1387,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1363,
              "end": 1387,
              "key": {
                "type": "Identifier",
                "start": 1366,
                "end": 1367,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1389,
          "end": 1437,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1390,
            "end": 1437,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1392,
              "end": 1437,
              "key": {
                "type": "Identifier",
                "start": 1395,
                "end": 1396,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                      "raw": "p_",
                      "cooked": "p_"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1426,
                    "end": 1428,
                    "value": {
                      "raw": "",
                      "cooked": ""
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
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1449,
                "end": 1450,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1460,
                "end": 1461,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1476,
      "end": 1635,
      "id": {
        "type": "Identifier",
        "start": 1485,
        "end": 1488,
        "decorators": [],
        "name": "fa2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1502,
              "end": 1503,
              "typeName": {
                "type": "Identifier",
                "start": 1502,
                "end": 1503,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1533,
              "end": 1534,
              "typeName": {
                "type": "Identifier",
                "start": 1533,
                "end": 1534,
                "decorators": [],
                "name": "A",
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
          "start": 1536,
          "end": 1566,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1537,
            "end": 1566,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1539,
              "end": 1566,
              "key": {
                "type": "Identifier",
                "start": 1542,
                "end": 1543,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1547,
                "end": 1548,
                "typeName": {
                  "type": "Identifier",
                  "start": 1547,
                  "end": 1548,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                      "raw": "p_",
                      "cooked": "p_"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1558,
                    "end": 1560,
                    "value": {
                      "raw": "",
                      "cooked": ""
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
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1568,
          "end": 1598,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1569,
            "end": 1598,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1571,
              "end": 1598,
              "key": {
                "type": "Identifier",
                "start": 1574,
                "end": 1575,
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1579,
                "end": 1580,
                "typeName": {
                  "type": "Identifier",
                  "start": 1579,
                  "end": 1580,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                      "raw": "p_",
                      "cooked": "p_"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1590,
                    "end": 1592,
                    "value": {
                      "raw": "",
                      "cooked": ""
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
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1610,
                "end": 1611,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1621,
                "end": 1622,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1698,
      "end": 1943,
      "id": {
        "type": "Identifier",
        "start": 1703,
        "end": 1707,
        "decorators": [],
        "name": "Join",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 1833,
                "end": 1835,
                "value": {
                  "raw": "",
                  "cooked": ""
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1910,
                  "end": 1913,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1914,
                  "end": 1917,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1927,
                  "end": 1929,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Join",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
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
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
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
        "decorators": [],
        "name": "TJ1",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Join",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TJ2",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Join",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TJ3",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Join",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "MatchPair",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "[",
                "cooked": "["
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2141,
              "end": 2145,
              "value": {
                "raw": ",",
                "cooked": ","
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2152,
              "end": 2155,
              "value": {
                "raw": "]",
                "cooked": "]"
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "T24",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "MatchPair",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "SnakeToCamelCase",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2485,
              "end": 2489,
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2496,
              "end": 2498,
              "value": {
                "raw": "",
                "cooked": ""
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2516,
              "end": 2519,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2539,
              "end": 2541,
              "value": {
                "raw": "",
                "cooked": ""
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
                "decorators": [],
                "name": "Lowercase",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                "decorators": [],
                "name": "SnakeToPascalCase",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2568,
                "end": 2570,
                "value": {
                  "raw": "",
                  "cooked": ""
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2588,
                "end": 2590,
                "value": {
                  "raw": "",
                  "cooked": ""
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
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
              "decorators": [],
              "name": "SnakeToPascalCase",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
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
        "decorators": [],
        "name": "SnakeToPascalCase",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2719,
                "end": 2723,
                "value": {
                  "raw": "_",
                  "cooked": "_"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2730,
                "end": 2732,
                "value": {
                  "raw": "",
                  "cooked": ""
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2762,
                "end": 2765,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2785,
                "end": 2787,
                "value": {
                  "raw": "",
                  "cooked": ""
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
                  "decorators": [],
                  "name": "Capitalize",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Lowercase",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "SnakeToPascalCase",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 2814,
                  "end": 2816,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 2846,
                  "end": 2848,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                    "decorators": [],
                    "name": "Capitalize",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Lowercase",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
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
        "decorators": [],
        "name": "RR0",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "SnakeToPascalCase",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "RR1",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "SnakeToPascalCase",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "RR2",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "SnakeToCamelCase",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "RR3",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "SnakeToCamelCase",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "FirstTwoAndRest",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3214,
              "end": 3217,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3224,
              "end": 3227,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3234,
              "end": 3236,
              "value": {
                "raw": "",
                "cooked": ""
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3244,
                  "end": 3247,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3248,
                  "end": 3250,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
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
        "decorators": [],
        "name": "T25",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "FirstTwoAndRest",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "T26",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "FirstTwoAndRest",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "T27",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "FirstTwoAndRest",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "HexDigit",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "HexColor",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "#",
                "cooked": "#"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3624,
              "end": 3627,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3635,
              "end": 3638,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3646,
              "end": 3649,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3657,
              "end": 3660,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3668,
              "end": 3671,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3679,
              "end": 3681,
              "value": {
                "raw": "",
                "cooked": ""
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
                  "decorators": [],
                  "name": "R1",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "R2",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "G1",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "G2",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "R1",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "R2",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "G1",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "G2",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "HexDigit",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "TH1",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TH2",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TH3",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TH4",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "HexColor",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "Trim",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
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
                "raw": " ",
                "cooked": " "
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 4096,
              "end": 4098,
              "value": {
                "raw": "",
                "cooked": ""
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "name": "Trim",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 4135,
                "end": 4138,
                "value": {
                  "raw": " ",
                  "cooked": " "
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "Trim",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "TR1",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TR2",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TR3",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "Split",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4399,
                  "end": 4402,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4403,
                  "end": 4406,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4413,
                  "end": 4415,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Split",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
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
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "T42",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "T43",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "P0",
                        "optional": false,
                        "typeAnnotation": null
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
              "decorators": [],
              "name": "P2",
              "optional": false,
              "typeAnnotation": null
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "typeAnnotation": null
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
                        "decorators": [],
                        "name": "P1",
                        "optional": false,
                        "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 4836,
          "end": 4842,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4844,
          "end": 4869,
          "decorators": [],
          "name": "path",
          "optional": false,
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4855,
                  "end": 4859,
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4861,
                  "end": 4865,
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4867,
                  "end": 4869,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                    "decorators": [],
                    "name": "P0",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "P2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "P0",
                  "optional": false,
                  "typeAnnotation": null
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
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "P2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 4887,
      "end": 5017,
      "id": {
        "type": "Identifier",
        "start": 4904,
        "end": 4911,
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "P0",
                        "optional": false,
                        "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 4977,
          "end": 4983,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4985,
          "end": 5004,
          "decorators": [],
          "name": "path",
          "optional": false,
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4996,
                  "end": 5000,
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 5002,
                  "end": 5004,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                    "decorators": [],
                    "name": "P0",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 5018,
      "end": 5100,
      "id": {
        "type": "Identifier",
        "start": 5035,
        "end": 5042,
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 5075,
          "end": 5081,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 5083,
          "end": 5091,
          "decorators": [],
          "name": "path",
          "optional": false,
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
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 5101,
      "end": 5162,
      "id": {
        "type": "Identifier",
        "start": 5118,
        "end": 5125,
        "decorators": [],
        "name": "getProp",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 5126,
          "end": 5137,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5129,
            "end": 5137,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 5131,
              "end": 5137
            }
          }
        },
        {
          "type": "Identifier",
          "start": 5139,
          "end": 5151,
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5143,
            "end": 5151,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 5145,
              "end": 5151
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5152,
        "end": 5161,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 5154,
          "end": 5161
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5164,
      "end": 5229,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5168,
          "end": 5228,
          "id": {
            "type": "Identifier",
            "start": 5168,
            "end": 5170,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5173,
            "end": 5228,
            "callee": {
              "type": "Identifier",
              "start": 5173,
              "end": 5180,
              "decorators": [],
              "name": "getProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 5183,
                        "end": 5184,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 5188,
                              "end": 5189,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
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
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5192,
                                    "end": 5193,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5195,
                                    "end": 5197,
                                    "value": 42,
                                    "raw": "42"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 5199,
                                  "end": 5209,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5199,
                                    "end": 5200,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5202,
                                    "end": 5209,
                                    "value": "hello",
                                    "raw": "'hello'"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
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
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5230,
      "end": 5297,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5234,
          "end": 5296,
          "id": {
            "type": "Identifier",
            "start": 5234,
            "end": 5236,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5239,
            "end": 5296,
            "callee": {
              "type": "Identifier",
              "start": 5239,
              "end": 5246,
              "decorators": [],
              "name": "getProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 5249,
                        "end": 5250,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 5254,
                              "end": 5255,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
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
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5258,
                                    "end": 5259,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5261,
                                    "end": 5263,
                                    "value": 42,
                                    "raw": "42"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 5265,
                                  "end": 5275,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5265,
                                    "end": 5266,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5268,
                                    "end": 5275,
                                    "value": "hello",
                                    "raw": "'hello'"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
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
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5298,
      "end": 5367,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5302,
          "end": 5366,
          "id": {
            "type": "Identifier",
            "start": 5302,
            "end": 5304,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5307,
            "end": 5366,
            "callee": {
              "type": "Identifier",
              "start": 5307,
              "end": 5314,
              "decorators": [],
              "name": "getProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 5317,
                        "end": 5318,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 5322,
                              "end": 5323,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
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
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5326,
                                    "end": 5327,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5329,
                                    "end": 5331,
                                    "value": 42,
                                    "raw": "42"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 5333,
                                  "end": 5343,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 5333,
                                    "end": 5334,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 5336,
                                    "end": 5343,
                                    "value": "hello",
                                    "raw": "'hello'"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
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
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
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
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "PropType",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "Path",
            "optional": false,
            "typeAnnotation": null
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
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "Path",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "Path",
                "optional": false,
                "typeAnnotation": null
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 5509,
                  "end": 5513,
                  "value": {
                    "raw": ".",
                    "cooked": "."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 5520,
                  "end": 5522,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                  "decorators": [],
                  "name": "PropType",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
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
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
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
        "decorators": [],
        "name": "getPropValue",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 5640,
          "end": 5646,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 5648,
          "end": 5655,
          "decorators": [],
          "name": "path",
          "optional": false,
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
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "PropType",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5674,
      "end": 5698,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5688,
          "end": 5697,
          "id": {
            "type": "Identifier",
            "start": 5688,
            "end": 5697,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5689,
              "end": 5697,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5691,
                "end": 5697
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 5700,
      "end": 5745,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5706,
          "end": 5744,
          "id": {
            "type": "Identifier",
            "start": 5706,
            "end": 5709,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 5714,
                  "end": 5715,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 5719,
                        "end": 5720,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 5723,
                              "end": 5724,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 5726,
                              "end": 5728,
                              "value": 42,
                              "raw": "42"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 5730,
                            "end": 5740,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 5730,
                              "end": 5731,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 5733,
                              "end": 5740,
                              "value": "hello",
                              "raw": "'hello'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 5760,
            "end": 5763,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 5765,
            "end": 5768,
            "value": "a",
            "raw": "'a'"
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 5819,
            "end": 5822,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 5824,
            "end": 5829,
            "value": "a.b",
            "raw": "'a.b'"
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 5873,
            "end": 5876,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 5878,
            "end": 5885,
            "value": "a.b.d",
            "raw": "'a.b.d'"
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 5912,
            "end": 5915,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 5917,
            "end": 5924,
            "value": "a.b.x",
            "raw": "'a.b.x'"
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "getPropValue",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 5952,
            "end": 5955,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 5957,
            "end": 5958,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
        "decorators": [],
        "name": "S1",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "foo",
                "cooked": "foo"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 6079,
              "end": 6084,
              "value": {
                "raw": "bar",
                "cooked": "bar"
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "name": "S2",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
          "decorators": [],
          "name": "S",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TV1",
        "optional": false,
        "typeAnnotation": null
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
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 6205,
            "end": 6207,
            "value": {
              "raw": "",
              "cooked": ""
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
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
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
        "decorators": [],
        "name": "Chars",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6366,
                "end": 6369,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6377,
                "end": 6380,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6388,
                "end": 6391,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6399,
                "end": 6402,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6410,
                "end": 6413,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6421,
                "end": 6424,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6432,
                "end": 6435,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6443,
                "end": 6446,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6454,
                "end": 6457,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6465,
                "end": 6468,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 6475,
                "end": 6477,
                "value": {
                  "raw": "",
                  "cooked": ""
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
                    "decorators": [],
                    "name": "C0",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "C4",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "C5",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "C6",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "C7",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "C8",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "C9",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C0",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C4",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C5",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C6",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C7",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C8",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C9",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Chars",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
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
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 6560,
                  "end": 6563,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 6570,
                  "end": 6572,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
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
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Chars",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "L1",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Chars",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "*",
                "cooked": "*"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 6829,
              "end": 6832,
              "value": {
                "raw": "*",
                "cooked": "*"
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
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "TF1",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TF2",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TF3",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "TF4",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "U1",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "e1",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "h1",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "j1",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "U2",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "e2",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "h2",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "j2",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "U3",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "e3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "g3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "h3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "j3",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "U4",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "d4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "e4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "f4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "g4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "h4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "i4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "j4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "U5",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "d5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "e5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "f5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "g5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "h5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "i5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "j5",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "U100000",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "U1",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U2",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U3",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U4",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U5",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "Digits",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "D100000",
        "optional": false,
        "typeAnnotation": null
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
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 7684,
            "end": 7687,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 7693,
            "end": 7696,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 7702,
            "end": 7705,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 7711,
            "end": 7714,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 7720,
            "end": 7722,
            "value": {
              "raw": "",
              "cooked": ""
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
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Digits",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "TDigits",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "T100000",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TDigits",
                "optional": false,
                "typeAnnotation": null
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
        "decorators": [],
        "name": "IsNegative",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 7960,
              "end": 7962,
              "value": {
                "raw": "",
                "cooked": ""
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "raw": "-",
                "cooked": "-"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 7981,
              "end": 7983,
              "value": {
                "raw": "",
                "cooked": ""
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
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
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
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                "decorators": [],
                "name": "IsNegative",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null
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
                "argument": {
                  "type": "Literal",
                  "start": 8186,
                  "end": 8187,
                  "value": 2,
                  "raw": "2"
                },
                "prefix": true
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
                "argument": {
                  "type": "Literal",
                  "start": 8190,
                  "end": 8191,
                  "value": 2,
                  "raw": "2"
                },
                "prefix": true
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
        "decorators": [],
        "name": "PathKeys",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Extract",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 8325,
                          "end": 8327,
                          "value": {
                            "raw": "",
                            "cooked": ""
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
                  "decorators": [],
                  "name": "SubKeys",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null
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
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
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
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 8368,
                                "end": 8370,
                                "value": {
                                  "raw": "",
                                  "cooked": ""
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "SubKeys",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Extract",
                          "optional": false,
                          "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
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
        "decorators": [],
        "name": "SubKeys",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 8536,
              "end": 8540,
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 8554,
              "end": 8556,
              "value": {
                "raw": "",
                "cooked": ""
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
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "PathKeys",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
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
        "decorators": [],
        "name": "getProp2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 8606,
              "end": 8617,
              "typeName": {
                "type": "Identifier",
                "start": 8606,
                "end": 8614,
                "decorators": [],
                "name": "PathKeys",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 8619,
          "end": 8625,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 8627,
          "end": 8634,
          "decorators": [],
          "name": "path",
          "optional": false,
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
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "PropType",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8654,
      "end": 8801,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8660,
          "end": 8800,
          "id": {
            "type": "Identifier",
            "start": 8660,
            "end": 8664,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 8673,
                    "end": 8677,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 8679,
                    "end": 8685,
                    "value": "John",
                    "raw": "'John'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 8691,
                  "end": 8698,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 8691,
                    "end": 8694,
                    "decorators": [],
                    "name": "age",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 8696,
                    "end": 8698,
                    "value": 42,
                    "raw": "42"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 8704,
                  "end": 8789,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 8704,
                    "end": 8708,
                    "decorators": [],
                    "name": "cars",
                    "optional": false,
                    "typeAnnotation": null
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 8722,
                              "end": 8726,
                              "decorators": [],
                              "name": "make",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 8728,
                              "end": 8734,
                              "value": "Ford",
                              "raw": "'Ford'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 8736,
                            "end": 8743,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 8736,
                              "end": 8739,
                              "decorators": [],
                              "name": "age",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 8741,
                              "end": 8743,
                              "value": 10,
                              "raw": "10"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 8757,
                              "end": 8761,
                              "decorators": [],
                              "name": "make",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 8763,
                              "end": 8772,
                              "value": "Trabant",
                              "raw": "'Trabant'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 8774,
                            "end": 8781,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 8774,
                              "end": 8777,
                              "decorators": [],
                              "name": "age",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 8779,
                              "end": 8781,
                              "value": 35,
                              "raw": "35"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
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
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8803,
      "end": 8844,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8807,
          "end": 8843,
          "id": {
            "type": "Identifier",
            "start": 8807,
            "end": 8811,
            "decorators": [],
            "name": "make",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8814,
            "end": 8843,
            "callee": {
              "type": "Identifier",
              "start": 8814,
              "end": 8822,
              "decorators": [],
              "name": "getProp2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8823,
                "end": 8827,
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 8829,
                "end": 8842,
                "value": "cars.1.make",
                "raw": "'cars.1.make'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "Spacing",
          "optional": false,
          "typeAnnotation": null
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
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 8910,
                    "end": 8913,
                    "value": {
                      "raw": "0",
                      "cooked": "0"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 8929,
                  "end": 8933,
                  "value": {
                    "raw": "px",
                    "cooked": "px"
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 8949,
                  "end": 8954,
                  "value": {
                    "raw": "rem",
                    "cooked": "rem"
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
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9053,
                  "end": 9055,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 9058,
      "end": 9088,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9064,
          "end": 9088,
          "id": {
            "type": "Identifier",
            "start": 9064,
            "end": 9080,
            "decorators": [],
            "name": "spacing",
            "optional": false,
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
                  "decorators": [],
                  "name": "Spacing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
          "decorators": [],
          "name": "SpacingShorthand",
          "optional": false,
          "typeAnnotation": null
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9137,
                  "end": 9141,
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9148,
                  "end": 9150,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9167,
                  "end": 9171,
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9178,
                  "end": 9182,
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9189,
                  "end": 9191,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null
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
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9208,
                  "end": 9212,
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9219,
                  "end": 9223,
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9230,
                  "end": 9234,
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 9241,
                  "end": 9243,
                  "value": {
                    "raw": "",
                    "cooked": ""
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
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Spacing",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 9246,
      "end": 9286,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9252,
          "end": 9285,
          "id": {
            "type": "Identifier",
            "start": 9252,
            "end": 9275,
            "decorators": [],
            "name": "test1",
            "optional": false,
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
                  "decorators": [],
                  "name": "SpacingShorthand",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
