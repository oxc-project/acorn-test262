__ESTREE_TEST__:PASS:
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
