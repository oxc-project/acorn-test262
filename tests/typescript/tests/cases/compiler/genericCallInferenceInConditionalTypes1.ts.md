__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ref",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
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
              "start": 66,
              "end": 67
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 66,
            "end": 67
          }
        ],
        "start": 65,
        "end": 68
      },
      "typeAnnotation": {
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
              "name": "current",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 82
            },
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
                  "start": 84,
                  "end": 85
                },
                "typeArguments": null,
                "start": 84,
                "end": 85
              },
              "start": 82,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 86
          }
        ],
        "start": 71,
        "end": 88
      },
      "declare": false,
      "start": 57,
      "end": 89
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 113
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 113,
        "end": 116
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
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
            "start": 120,
            "end": 128
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 133,
            "end": 140
          },
          "start": 130,
          "end": 140
        },
        "start": 119,
        "end": 140
      },
      "declare": false,
      "start": 91,
      "end": 141
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 162
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
              "start": 163,
              "end": 164
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 190
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 191,
                    "end": 194
                  }
                ],
                "start": 190,
                "end": 195
              },
              "start": 173,
              "end": 195
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 163,
            "end": 195
          }
        ],
        "start": 162,
        "end": 196
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
            "start": 201,
            "end": 202
          },
          "typeArguments": null,
          "start": 201,
          "end": 202
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 228
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 236
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 235,
                  "end": 236
                },
                "start": 229,
                "end": 236
              }
            ],
            "start": 228,
            "end": 237
          },
          "start": 211,
          "end": 237
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "typeArguments": null,
          "start": 240,
          "end": 241
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 244,
          "end": 246
        },
        "start": 201,
        "end": 246
      },
      "declare": false,
      "start": 143,
      "end": 247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsWithoutRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 269
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 270,
            "end": 271
          }
        ],
        "start": 269,
        "end": 272
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 276
          },
          "typeArguments": null,
          "start": 275,
          "end": 276
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 285,
          "end": 288
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "ref",
              "raw": "\"ref\"",
              "start": 293,
              "end": 298
            },
            "start": 293,
            "end": 298
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 314
              },
              "typeArguments": null,
              "start": 313,
              "end": 314
            },
            "start": 307,
            "end": 314
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 325
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 327
                  },
                  "typeArguments": null,
                  "start": 326,
                  "end": 327
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ref",
                    "raw": "\"ref\"",
                    "start": 329,
                    "end": 334
                  },
                  "start": 329,
                  "end": 334
                }
              ],
              "start": 325,
              "end": 335
            },
            "start": 321,
            "end": 335
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 343
            },
            "typeArguments": null,
            "start": 342,
            "end": 343
          },
          "start": 293,
          "end": 343
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 349
          },
          "typeArguments": null,
          "start": 348,
          "end": 349
        },
        "start": 275,
        "end": 349
      },
      "declare": false,
      "start": 249,
      "end": 350
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentPropsWithoutRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 381
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
              "start": 382,
              "end": 383
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 409
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 410,
                    "end": 413
                  }
                ],
                "start": 409,
                "end": 414
              },
              "start": 392,
              "end": 414
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 382,
            "end": 414
          }
        ],
        "start": 381,
        "end": 415
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropsWithoutRef",
          "optional": false,
          "typeAnnotation": null,
          "start": 420,
          "end": 435
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 450
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
                      "start": 451,
                      "end": 452
                    },
                    "typeArguments": null,
                    "start": 451,
                    "end": 452
                  }
                ],
                "start": 450,
                "end": 453
              },
              "start": 436,
              "end": 453
            }
          ],
          "start": 435,
          "end": 454
        },
        "start": 420,
        "end": 454
      },
      "declare": false,
      "start": 352,
      "end": 455
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forwardRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 484
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
              "start": 485,
              "end": 486
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 485,
            "end": 486
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 488,
            "end": 489
          }
        ],
        "start": 484,
        "end": 490
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
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
                        "start": 513,
                        "end": 514
                      },
                      "typeArguments": null,
                      "start": 513,
                      "end": 514
                    },
                    "start": 511,
                    "end": 514
                  },
                  "start": 506,
                  "end": 514
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ref",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ref",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 521,
                        "end": 524
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
                              "start": 525,
                              "end": 526
                            },
                            "typeArguments": null,
                            "start": 525,
                            "end": 526
                          }
                        ],
                        "start": 524,
                        "end": 527
                      },
                      "start": 521,
                      "end": 527
                    },
                    "start": 519,
                    "end": 527
                  },
                  "start": 516,
                  "end": 527
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 532,
                  "end": 539
                },
                "start": 529,
                "end": 539
              },
              "start": 505,
              "end": 539
            },
            "start": 503,
            "end": 539
          },
          "start": 494,
          "end": 539
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 553
                      },
                      "typeArguments": null,
                      "start": 552,
                      "end": 553
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 558,
                            "end": 561
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Ref",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 564,
                                "end": 567
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
                                      "start": 568,
                                      "end": 569
                                    },
                                    "typeArguments": null,
                                    "start": 568,
                                    "end": 569
                                  }
                                ],
                                "start": 567,
                                "end": 570
                              },
                              "start": 564,
                              "end": 570
                            },
                            "start": 562,
                            "end": 570
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 558,
                          "end": 570
                        }
                      ],
                      "start": 556,
                      "end": 572
                    }
                  ],
                  "start": 552,
                  "end": 572
                },
                "start": 550,
                "end": 572
              },
              "start": 545,
              "end": 572
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 577,
              "end": 584
            },
            "start": 574,
            "end": 584
          },
          "start": 544,
          "end": 584
        },
        "start": 542,
        "end": 584
      },
      "body": null,
      "expression": false,
      "start": 457,
      "end": 585
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
            "name": "ComponentWithForwardRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 593,
            "end": 616
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "forwardRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 619,
              "end": 629
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
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
                        "start": 634,
                        "end": 635
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FunctionComponent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 644,
                          "end": 661
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 662,
                              "end": 665
                            }
                          ],
                          "start": 661,
                          "end": 666
                        },
                        "start": 644,
                        "end": 666
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 634,
                      "end": 666
                    }
                  ],
                  "start": 633,
                  "end": 667
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ComponentPropsWithoutRef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 680,
                          "end": 704
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
                                "start": 705,
                                "end": 706
                              },
                              "typeArguments": null,
                              "start": 705,
                              "end": 706
                            }
                          ],
                          "start": 704,
                          "end": 707
                        },
                        "start": 680,
                        "end": 707
                      },
                      "start": 678,
                      "end": 707
                    },
                    "start": 673,
                    "end": 707
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ref",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Ref",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 718,
                          "end": 721
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "HTMLElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 722,
                                "end": 733
                              },
                              "typeArguments": null,
                              "start": 722,
                              "end": 733
                            }
                          ],
                          "start": 721,
                          "end": 734
                        },
                        "start": 718,
                        "end": 734
                      },
                      "start": 716,
                      "end": 734
                    },
                    "start": 713,
                    "end": 734
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 756,
                        "end": 760
                      },
                      "start": 749,
                      "end": 761
                    }
                  ],
                  "start": 743,
                  "end": 765
                },
                "id": null,
                "generator": false,
                "start": 633,
                "end": 765
              }
            ],
            "optional": false,
            "start": 619,
            "end": 768
          },
          "definite": false,
          "start": 593,
          "end": 768
        }
      ],
      "declare": false,
      "start": 587,
      "end": 769
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 776,
        "end": 780
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
              "start": 781,
              "end": 782
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 781,
            "end": 782
          }
        ],
        "start": 780,
        "end": 783
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
            "start": 786,
            "end": 787
          },
          "typeArguments": null,
          "start": 786,
          "end": 787
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "component",
                "optional": false,
                "typeAnnotation": null,
                "start": 798,
                "end": 807
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 825
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 816,
                    "end": 825
                  },
                  "start": 810,
                  "end": 825
                },
                "start": 808,
                "end": 825
              },
              "accessibility": null,
              "static": false,
              "start": 798,
              "end": 825
            }
          ],
          "start": 796,
          "end": 827
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 841
            },
            "typeArguments": null,
            "start": 832,
            "end": 841
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 867
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 868,
                  "end": 871
                }
              ],
              "start": 867,
              "end": 872
            },
            "start": 850,
            "end": 872
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 879,
              "end": 893
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 894,
                    "end": 903
                  },
                  "typeArguments": null,
                  "start": 894,
                  "end": 903
                }
              ],
              "start": 893,
              "end": 904
            },
            "start": 879,
            "end": 904
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 911,
            "end": 916
          },
          "start": 832,
          "end": 916
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 921,
          "end": 926
        },
        "start": 786,
        "end": 926
      },
      "declare": false,
      "start": 771,
      "end": 927
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "typeAnnotation": null,
        "start": 990,
        "end": 997
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 1000,
          "end": 1014
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentWithForwardRef",
                "optional": false,
                "typeAnnotation": null,
                "start": 1022,
                "end": 1045
              },
              "typeArguments": null,
              "start": 1015,
              "end": 1045
            }
          ],
          "start": 1014,
          "end": 1046
        },
        "start": 1000,
        "end": 1046
      },
      "declare": false,
      "start": 985,
      "end": 1047
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1101,
        "end": 1108
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1111,
          "end": 1115
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1127
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ComponentWithForwardRef",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1136,
                        "end": 1159
                      },
                      "typeArguments": null,
                      "start": 1129,
                      "end": 1159
                    },
                    "start": 1127,
                    "end": 1159
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1118,
                  "end": 1159
                }
              ],
              "start": 1116,
              "end": 1161
            }
          ],
          "start": 1115,
          "end": 1162
        },
        "start": 1111,
        "end": 1162
      },
      "declare": false,
      "start": 1096,
      "end": 1163
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
            "name": "ComponentWithForwardRef2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1345,
                        "end": 1346
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FunctionComponent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1355,
                          "end": 1372
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 1373,
                              "end": 1376
                            }
                          ],
                          "start": 1372,
                          "end": 1377
                        },
                        "start": 1355,
                        "end": 1377
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1345,
                      "end": 1377
                    }
                  ],
                  "start": 1344,
                  "end": 1378
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PropsWithoutRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1389,
                              "end": 1404
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentProps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1405,
                                    "end": 1419
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
                                          "start": 1420,
                                          "end": 1421
                                        },
                                        "typeArguments": null,
                                        "start": 1420,
                                        "end": 1421
                                      }
                                    ],
                                    "start": 1419,
                                    "end": 1422
                                  },
                                  "start": 1405,
                                  "end": 1422
                                }
                              ],
                              "start": 1404,
                              "end": 1423
                            },
                            "start": 1389,
                            "end": 1423
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "className",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1432,
                                  "end": 1441
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1444,
                                    "end": 1450
                                  },
                                  "start": 1442,
                                  "end": 1450
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1432,
                                "end": 1451
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "as",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1456,
                                  "end": 1458
                                },
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
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1461,
                                          "end": 1462
                                        },
                                        "typeArguments": null,
                                        "start": 1461,
                                        "end": 1462
                                      },
                                      {
                                        "type": "TSUndefinedKeyword",
                                        "start": 1465,
                                        "end": 1474
                                      }
                                    ],
                                    "start": 1461,
                                    "end": 1474
                                  },
                                  "start": 1459,
                                  "end": 1474
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1456,
                                "end": 1475
                              }
                            ],
                            "start": 1426,
                            "end": 1479
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1488,
                                  "end": 1491
                                },
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
                                          "name": "Ref",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1494,
                                          "end": 1497
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "HTMLElement",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1498,
                                                "end": 1509
                                              },
                                              "typeArguments": null,
                                              "start": 1498,
                                              "end": 1509
                                            }
                                          ],
                                          "start": 1497,
                                          "end": 1510
                                        },
                                        "start": 1494,
                                        "end": 1510
                                      },
                                      {
                                        "type": "TSUndefinedKeyword",
                                        "start": 1513,
                                        "end": 1522
                                      }
                                    ],
                                    "start": 1494,
                                    "end": 1522
                                  },
                                  "start": 1492,
                                  "end": 1522
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1488,
                                "end": 1523
                              }
                            ],
                            "start": 1482,
                            "end": 1527
                          }
                        ],
                        "start": 1389,
                        "end": 1527
                      },
                      "start": 1387,
                      "end": 1527
                    },
                    "start": 1382,
                    "end": 1527
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1534,
                    "end": 1541
                  },
                  "start": 1531,
                  "end": 1541
                },
                "start": 1344,
                "end": 1541
              },
              "start": 1342,
              "end": 1541
            },
            "start": 1318,
            "end": 1541
          },
          "init": null,
          "definite": false,
          "start": 1318,
          "end": 1541
        }
      ],
      "declare": true,
      "start": 1304,
      "end": 1542
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1549,
        "end": 1556
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 1559,
          "end": 1573
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentWithForwardRef2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1581,
                "end": 1605
              },
              "typeArguments": null,
              "start": 1574,
              "end": 1605
            }
          ],
          "start": 1573,
          "end": 1606
        },
        "start": 1559,
        "end": 1606
      },
      "declare": false,
      "start": 1544,
      "end": 1607
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1613,
        "end": 1620
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1623,
          "end": 1627
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1630,
                    "end": 1639
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ComponentWithForwardRef2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1648,
                        "end": 1672
                      },
                      "typeArguments": null,
                      "start": 1641,
                      "end": 1672
                    },
                    "start": 1639,
                    "end": 1672
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1630,
                  "end": 1672
                }
              ],
              "start": 1628,
              "end": 1674
            }
          ],
          "start": 1627,
          "end": 1675
        },
        "start": 1623,
        "end": 1675
      },
      "declare": false,
      "start": 1608,
      "end": 1676
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1676
}
```
