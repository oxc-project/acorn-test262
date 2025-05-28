__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1445,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6,
        "end": 9,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 7,
            "end": 8,
            "name": {
              "type": "Identifier",
              "start": 7,
              "end": 8,
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
        "start": 12,
        "end": 58,
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 12,
          "end": 18
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 27,
          "end": 28,
          "typeName": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSFunctionType",
          "start": 31,
          "end": 50,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 32,
              "end": 41,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 35,
                  "end": 41
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 50,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 46,
              "end": 50
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 53,
          "end": 58
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 60,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 71,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
          "start": 75,
          "end": 84,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 84,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 80,
              "end": 84,
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 81,
                "end": 84,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 82,
                    "end": 83,
                    "typeName": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 163,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 153,
            "end": 161,
            "expression": {
              "type": "CallExpression",
              "start": 153,
              "end": 160,
              "callee": {
                "type": "Identifier",
                "start": 153,
                "end": 156,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 157,
                  "end": 159,
                  "value": 10,
                  "raw": "10"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 243,
      "expression": {
        "type": "CallExpression",
        "start": 205,
        "end": 242,
        "callee": {
          "type": "Identifier",
          "start": 205,
          "end": 207,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 207,
          "end": 224,
          "params": [
            {
              "type": "TSUnionType",
              "start": 208,
              "end": 223,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 208,
                  "end": 214
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 217,
                  "end": 223
                }
              ]
            }
          ]
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 225,
            "end": 241,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 225,
                "end": 226,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 230,
              "end": 241,
              "callee": {
                "type": "MemberExpression",
                "start": 230,
                "end": 239,
                "object": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 239,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 273,
      "expression": {
        "type": "CallExpression",
        "start": 244,
        "end": 272,
        "callee": {
          "type": "Identifier",
          "start": 244,
          "end": 246,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 246,
          "end": 254,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 247,
              "end": 253
            }
          ]
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 255,
            "end": 271,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 260,
              "end": 271,
              "callee": {
                "type": "MemberExpression",
                "start": 260,
                "end": 269,
                "object": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 269,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 358,
      "end": 646,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 380,
        "decorators": [],
        "name": "ExtractParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 380,
        "end": 383,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 381,
            "end": 382,
            "name": {
              "type": "Identifier",
              "start": 381,
              "end": 382,
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
        "start": 386,
        "end": 645,
        "checkType": {
          "type": "TSLiteralType",
          "start": 386,
          "end": 398,
          "literal": {
            "type": "Literal",
            "start": 386,
            "end": 398,
            "value": "parameters",
            "raw": "\"parameters\""
          }
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 407,
          "end": 414,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 413,
            "end": 414,
            "typeName": {
              "type": "Identifier",
              "start": 413,
              "end": 414,
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
          "start": 548,
          "end": 638,
          "objectType": {
            "type": "TSMappedType",
            "start": 548,
            "end": 615,
            "key": {
              "type": "Identifier",
              "start": 559,
              "end": 560,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 564,
              "end": 585,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 570,
                "end": 585,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 570,
                  "end": 571,
                  "typeName": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 571,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 572,
                  "end": 584,
                  "literal": {
                    "type": "Literal",
                    "start": 572,
                    "end": 584,
                    "value": "parameters",
                    "raw": "\"parameters\""
                  }
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 588,
              "end": 606,
              "objectType": {
                "type": "TSIndexedAccessType",
                "start": 588,
                "end": 603,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 588,
                  "end": 589,
                  "typeName": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 589,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 590,
                  "end": 602,
                  "literal": {
                    "type": "Literal",
                    "start": 590,
                    "end": 602,
                    "value": "parameters",
                    "raw": "\"parameters\""
                  }
                }
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 604,
                "end": 605,
                "typeName": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 605,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": false,
            "readonly": null
          },
          "indexType": {
            "type": "TSTypeOperator",
            "start": 616,
            "end": 637,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 622,
              "end": 637,
              "objectType": {
                "type": "TSTypeReference",
                "start": 622,
                "end": 623,
                "typeName": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 623,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 624,
                "end": 636,
                "literal": {
                  "type": "Literal",
                  "start": 624,
                  "end": 636,
                  "value": "parameters",
                  "raw": "\"parameters\""
                }
              }
            }
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 643,
          "end": 645,
          "members": []
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 696,
      "end": 770,
      "id": {
        "type": "Identifier",
        "start": 701,
        "end": 703,
        "decorators": [],
        "name": "Q2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 703,
        "end": 706,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 704,
            "end": 705,
            "name": {
              "type": "Identifier",
              "start": 704,
              "end": 705,
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
        "start": 709,
        "end": 769,
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 709,
          "end": 715
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 724,
          "end": 725,
          "typeName": {
            "type": "Identifier",
            "start": 724,
            "end": 725,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSFunctionType",
          "start": 728,
          "end": 761,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 729,
              "end": 752,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 731,
                "end": 752,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 733,
                  "end": 752,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 734,
                      "end": 743,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 735,
                        "end": 743,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 737,
                          "end": 743
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 745,
                    "end": 752,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 748,
                      "end": 752
                    }
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 754,
            "end": 761,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 757,
              "end": 761
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 764,
          "end": 769
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 771,
      "end": 879,
      "id": {
        "type": "Identifier",
        "start": 780,
        "end": 783,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 783,
        "end": 786,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 784,
            "end": 785,
            "name": {
              "type": "Identifier",
              "start": 784,
              "end": 785,
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
          "start": 787,
          "end": 797,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 790,
            "end": 797,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 792,
              "end": 797,
              "typeName": {
                "type": "Identifier",
                "start": 792,
                "end": 794,
                "decorators": [],
                "name": "Q2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 794,
                "end": 797,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 795,
                    "end": 796,
                    "typeName": {
                      "type": "Identifier",
                      "start": 795,
                      "end": 796,
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 799,
        "end": 879,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 803,
            "end": 834,
            "id": {
              "type": "Identifier",
              "start": 812,
              "end": 816,
              "decorators": [],
              "name": "useT",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 817,
                "end": 824,
                "decorators": [],
                "name": "_arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 821,
                  "end": 824,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 823,
                    "end": 824,
                    "typeName": {
                      "type": "Identifier",
                      "start": 823,
                      "end": 824,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 825,
              "end": 831,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 827,
                "end": 831
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 832,
              "end": 834,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 855,
            "end": 877,
            "expression": {
              "type": "CallExpression",
              "start": 855,
              "end": 876,
              "callee": {
                "type": "Identifier",
                "start": 855,
                "end": 858,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 859,
                  "end": 875,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 859,
                      "end": 862,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "start": 866,
                    "end": 875,
                    "callee": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 870,
                      "decorators": [],
                      "name": "useT",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 871,
                        "end": 874,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 921,
      "end": 954,
      "expression": {
        "type": "CallExpression",
        "start": 921,
        "end": 953,
        "callee": {
          "type": "Identifier",
          "start": 921,
          "end": 924,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 924,
          "end": 941,
          "params": [
            {
              "type": "TSUnionType",
              "start": 925,
              "end": 940,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 925,
                  "end": 931
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 934,
                  "end": 940
                }
              ]
            }
          ]
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 942,
            "end": 952,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 942,
                "end": 943,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 947,
              "end": 952,
              "callee": {
                "type": "Identifier",
                "start": 947,
                "end": 948,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 949,
                  "end": 951,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 955,
      "end": 979,
      "expression": {
        "type": "CallExpression",
        "start": 955,
        "end": 978,
        "callee": {
          "type": "Identifier",
          "start": 955,
          "end": 958,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 958,
          "end": 966,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 959,
              "end": 965
            }
          ]
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 967,
            "end": 977,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 967,
                "end": 968,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 972,
              "end": 977,
              "callee": {
                "type": "Identifier",
                "start": 972,
                "end": 973,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 974,
                  "end": 976,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1127,
      "end": 1219,
      "id": {
        "type": "Identifier",
        "start": 1132,
        "end": 1133,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1133,
        "end": 1136,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1134,
            "end": 1135,
            "name": {
              "type": "Identifier",
              "start": 1134,
              "end": 1135,
              "decorators": [],
              "name": "V",
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
        "start": 1139,
        "end": 1218,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1139,
          "end": 1140,
          "typeName": {
            "type": "Identifier",
            "start": 1139,
            "end": 1140,
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 1149,
          "end": 1172,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 1150,
              "end": 1164,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1153,
                "end": 1157,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1157,
                "end": 1164,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1159,
                  "end": 1164,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1159,
                    "end": 1162
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1166,
            "end": 1172,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1169,
              "end": 1172
            }
          }
        },
        "trueType": {
          "type": "TSFunctionType",
          "start": 1175,
          "end": 1207,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 1176,
              "end": 1198,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1179,
                "end": 1183,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1183,
                "end": 1198,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1185,
                  "end": 1198,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1185,
                    "end": 1195,
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1195,
                    "end": 1198,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1196,
                        "end": 1197,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1196,
                          "end": 1197,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1200,
            "end": 1207,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1203,
              "end": 1207
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1210,
          "end": 1218,
          "typeName": {
            "type": "Identifier",
            "start": 1210,
            "end": 1218,
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1262,
      "end": 1445,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1269,
        "end": 1445,
        "id": {
          "type": "Identifier",
          "start": 1274,
          "end": 1302,
          "decorators": [],
          "name": "AddFirstParameterToFunctions",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1302,
          "end": 1310,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1303,
              "end": 1309,
              "name": {
                "type": "Identifier",
                "start": 1303,
                "end": 1309,
                "decorators": [],
                "name": "Target",
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
          "type": "TSMappedType",
          "start": 1313,
          "end": 1444,
          "key": {
            "type": "Identifier",
            "start": 1318,
            "end": 1319,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1323,
            "end": 1335,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1329,
              "end": 1335,
              "typeName": {
                "type": "Identifier",
                "start": 1329,
                "end": 1335,
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 1338,
            "end": 1442,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 1338,
              "end": 1347,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1338,
                "end": 1344,
                "typeName": {
                  "type": "Identifier",
                  "start": 1338,
                  "end": 1344,
                  "decorators": [],
                  "name": "Target",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1345,
                "end": 1346,
                "typeName": {
                  "type": "Identifier",
                  "start": 1345,
                  "end": 1346,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "extendsType": {
              "type": "TSFunctionType",
              "start": 1356,
              "end": 1380,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1357,
                  "end": 1371,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1360,
                    "end": 1364,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1364,
                    "end": 1371,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1366,
                      "end": 1371,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1366,
                        "end": 1369
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1373,
                "end": 1380,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1376,
                  "end": 1380
                }
              }
            },
            "trueType": {
              "type": "TSFunctionType",
              "start": 1389,
              "end": 1429,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1390,
                  "end": 1420,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1393,
                    "end": 1397,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1397,
                    "end": 1420,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1399,
                      "end": 1420,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1399,
                        "end": 1409,
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1409,
                        "end": 1420,
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "start": 1410,
                            "end": 1419,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 1410,
                              "end": 1416,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1410,
                                "end": 1416,
                                "decorators": [],
                                "name": "Target",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 1417,
                              "end": 1418,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1417,
                                "end": 1418,
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
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1422,
                "end": 1429,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1425,
                  "end": 1429
                }
              }
            },
            "falseType": {
              "type": "TSVoidKeyword",
              "start": 1438,
              "end": 1442
            }
          },
          "optional": false,
          "readonly": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
