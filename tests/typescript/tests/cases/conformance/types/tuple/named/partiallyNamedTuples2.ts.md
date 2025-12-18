__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiKeyMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 77
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 82
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 100,
                  "end": 107
                },
                "start": 100,
                "end": 109
              },
              "start": 91,
              "end": 109
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 78,
            "end": 109
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 116
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 116
          }
        ],
        "start": 77,
        "end": 117
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 125
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 129
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetKeys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 145
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 146,
                            "end": 150
                          },
                          "typeArguments": null,
                          "start": 146,
                          "end": 150
                        }
                      ],
                      "start": 145,
                      "end": 151
                    },
                    "start": 138,
                    "end": 151
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 126,
                  "end": 151
                }
              ],
              "start": 125,
              "end": 152
            },
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 159
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 164
                    },
                    "typeArguments": null,
                    "start": 161,
                    "end": 164
                  },
                  "start": 159,
                  "end": 164
                },
                "value": null,
                "start": 153,
                "end": 164
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GetResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 176
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 181
                      },
                      "typeArguments": null,
                      "start": 177,
                      "end": 181
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 186
                      },
                      "typeArguments": null,
                      "start": 183,
                      "end": 186
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 193
                      },
                      "typeArguments": null,
                      "start": 188,
                      "end": 193
                    }
                  ],
                  "start": 176,
                  "end": 194
                },
                "start": 167,
                "end": 194
              },
              "start": 165,
              "end": 194
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 122,
            "end": 195
          }
        ],
        "start": 118,
        "end": 197
      },
      "declare": false,
      "start": 56,
      "end": 197
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 210
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 215
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 233,
                  "end": 240
                },
                "start": 233,
                "end": 242
              },
              "start": 224,
              "end": 242
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 211,
            "end": 242
          }
        ],
        "start": 210,
        "end": 243
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 250
          },
          "typeArguments": null,
          "start": 246,
          "end": 250
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Remain",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 278
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 272,
                  "end": 278
                },
                "start": 266,
                "end": 278
              },
              "start": 263,
              "end": 278
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 289
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 288,
                "end": 289
              },
              "start": 282,
              "end": 289
            }
          ],
          "start": 259,
          "end": 292
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 301
              },
              "typeArguments": null,
              "start": 297,
              "end": 301
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GetKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 311
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Remain",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 312,
                      "end": 318
                    },
                    "typeArguments": null,
                    "start": 312,
                    "end": 318
                  }
                ],
                "start": 311,
                "end": 319
              },
              "start": 304,
              "end": 319
            }
          ],
          "start": 297,
          "end": 319
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 328
          },
          "typeArguments": null,
          "start": 324,
          "end": 328
        },
        "start": 246,
        "end": 328
      },
      "declare": false,
      "start": 198,
      "end": 329
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 344
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 350
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 368,
                  "end": 375
                },
                "start": 368,
                "end": 377
              },
              "start": 359,
              "end": 377
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 348,
            "end": 377
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 385
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GetKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 401
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 404
                    },
                    "typeArguments": null,
                    "start": 402,
                    "end": 404
                  }
                ],
                "start": 401,
                "end": 405
              },
              "start": 394,
              "end": 405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 381,
            "end": 405
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 414
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 409,
            "end": 414
          }
        ],
        "start": 344,
        "end": 417
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Args",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 424
          },
          "typeArguments": null,
          "start": 420,
          "end": 424
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Id",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 435
          },
          "typeArguments": null,
          "start": 433,
          "end": 435
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 445
              },
              "typeArguments": null,
              "start": 440,
              "end": 445
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 448,
              "end": 457
            }
          ],
          "start": 440,
          "end": 457
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 464
            },
            "typeArguments": null,
            "start": 462,
            "end": 464
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 481
                  },
                  "typeArguments": null,
                  "start": 477,
                  "end": 481
                },
                "start": 474,
                "end": 481
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
                      "name": "Rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 496
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 492,
                    "end": 496
                  },
                  "start": 486,
                  "end": 496
                },
                "start": 483,
                "end": 496
              }
            ],
            "start": 473,
            "end": 497
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 510
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Rest",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 515,
                          "end": 519
                        },
                        "typeArguments": null,
                        "start": 515,
                        "end": 519
                      },
                      "start": 512,
                      "end": 519
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 521,
                        "end": 526
                      },
                      "typeArguments": null,
                      "start": 521,
                      "end": 526
                    }
                  ],
                  "start": 511,
                  "end": 527
                }
              ],
              "start": 510,
              "end": 528
            },
            "start": 502,
            "end": 528
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 533,
            "end": 538
          },
          "start": 462,
          "end": 538
        },
        "start": 420,
        "end": 538
      },
      "declare": false,
      "start": 330,
      "end": 539
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiKeyMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 560
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 562,
                            "end": 565
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 567,
                            "end": 573
                          },
                          "optional": false,
                          "start": 562,
                          "end": 573
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 575,
                            "end": 578
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 580,
                            "end": 586
                          },
                          "optional": false,
                          "start": 575,
                          "end": 586
                        }
                      ],
                      "start": 561,
                      "end": 587
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 589,
                      "end": 595
                    }
                  ],
                  "start": 560,
                  "end": 596
                },
                "start": 549,
                "end": 596
              },
              "start": 547,
              "end": 596
            },
            "start": 546,
            "end": 596
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 599,
              "end": 603
            },
            "start": 599,
            "end": 604
          },
          "definite": false,
          "start": 546,
          "end": 604
        }
      ],
      "declare": false,
      "start": 540,
      "end": 605
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
            "name": "id1",
            "optional": false,
            "typeAnnotation": null,
            "start": 612,
            "end": 615
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 618,
              "end": 623
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 627,
              "end": 633
            },
            "start": 618,
            "end": 633
          },
          "definite": false,
          "start": 612,
          "end": 633
        }
      ],
      "declare": false,
      "start": 606,
      "end": 634
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
            "name": "matches",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 648
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 651,
                "end": 652
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 653,
                "end": 656
              },
              "optional": false,
              "computed": false,
              "start": 651,
              "end": 656
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id1",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 660
              }
            ],
            "optional": false,
            "start": 651,
            "end": 661
          },
          "definite": false,
          "start": 641,
          "end": 661
        }
      ],
      "declare": false,
      "start": 635,
      "end": 662
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 662
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 56,
    "end": 65,
    "range": [
      56,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiKeyMap",
    "start": 66,
    "end": 77,
    "range": [
      66,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 78,
    "end": 82,
    "range": [
      78,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 83,
    "end": 90,
    "range": [
      83,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 91,
    "end": 99,
    "range": [
      91,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 100,
    "end": 107,
    "range": [
      100,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 111,
    "end": 116,
    "range": [
      111,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 122,
    "end": 125,
    "range": [
      122,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 126,
    "end": 129,
    "range": [
      126,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 130,
    "end": 137,
    "range": [
      130,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "GetKeys",
    "start": 138,
    "end": 145,
    "range": [
      138,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 146,
    "end": 150,
    "range": [
      146,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 153,
    "end": 156,
    "range": [
      153,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 156,
    "end": 159,
    "range": [
      156,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 161,
    "end": 164,
    "range": [
      161,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "GetResult",
    "start": 167,
    "end": 176,
    "range": [
      167,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 177,
    "end": 181,
    "range": [
      177,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 183,
    "end": 186,
    "range": [
      183,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 198,
    "end": 202,
    "range": [
      198,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "GetKeys",
    "start": 203,
    "end": 210,
    "range": [
      203,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 211,
    "end": 215,
    "range": [
      211,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 216,
    "end": 223,
    "range": [
      216,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 224,
    "end": 232,
    "range": [
      224,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 233,
    "end": 240,
    "range": [
      233,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 246,
    "end": 250,
    "range": [
      246,
      250
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 251,
    "end": 258,
    "range": [
      251,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 263,
    "end": 266,
    "range": [
      263,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 266,
    "end": 271,
    "range": [
      266,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "Remain",
    "start": 272,
    "end": 278,
    "range": [
      272,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 282,
    "end": 287,
    "range": [
      282,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 297,
    "end": 301,
    "range": [
      297,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "GetKeys",
    "start": 304,
    "end": 311,
    "range": [
      304,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "Remain",
    "start": 312,
    "end": 318,
    "range": [
      312,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 324,
    "end": 328,
    "range": [
      324,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 330,
    "end": 334,
    "range": [
      330,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "GetResult",
    "start": 335,
    "end": 344,
    "range": [
      335,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 348,
    "end": 350,
    "range": [
      348,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 351,
    "end": 358,
    "range": [
      351,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 359,
    "end": 367,
    "range": [
      359,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 368,
    "end": 375,
    "range": [
      368,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 381,
    "end": 385,
    "range": [
      381,
      385
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 386,
    "end": 393,
    "range": [
      386,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "GetKeys",
    "start": 394,
    "end": 401,
    "range": [
      394,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 402,
    "end": 404,
    "range": [
      402,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 409,
    "end": 414,
    "range": [
      409,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 420,
    "end": 424,
    "range": [
      420,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 425,
    "end": 432,
    "range": [
      425,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 433,
    "end": 435,
    "range": [
      433,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 440,
    "end": 445,
    "range": [
      440,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 448,
    "end": 457,
    "range": [
      448,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 462,
    "end": 464,
    "range": [
      462,
      464
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 465,
    "end": 472,
    "range": [
      465,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 474,
    "end": 477,
    "range": [
      474,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 477,
    "end": 481,
    "range": [
      477,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 483,
    "end": 486,
    "range": [
      483,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 486,
    "end": 491,
    "range": [
      486,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 492,
    "end": 496,
    "range": [
      492,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 502,
    "end": 510,
    "range": [
      502,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 512,
    "end": 515,
    "range": [
      512,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 515,
    "end": 519,
    "range": [
      515,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 521,
    "end": 526,
    "range": [
      521,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 533,
    "end": 538,
    "range": [
      533,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 540,
    "end": 545,
    "range": [
      540,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiKeyMap",
    "start": 549,
    "end": 560,
    "range": [
      549,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "id1",
    "start": 562,
    "end": 565,
    "range": [
      562,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 567,
    "end": 573,
    "range": [
      567,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 575,
    "end": 578,
    "range": [
      575,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 580,
    "end": 586,
    "range": [
      580,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 589,
    "end": 595,
    "range": [
      589,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 599,
    "end": 603,
    "range": [
      599,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 606,
    "end": 611,
    "range": [
      606,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "id1",
    "start": 612,
    "end": 615,
    "range": [
      612,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 618,
    "end": 623,
    "range": [
      618,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 624,
    "end": 626,
    "range": [
      624,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 627,
    "end": 633,
    "range": [
      627,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 635,
    "end": 640,
    "range": [
      635,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 641,
    "end": 648,
    "range": [
      641,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 653,
    "end": 656,
    "range": [
      653,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "id1",
    "start": 657,
    "end": 660,
    "range": [
      657,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  }
]
```
