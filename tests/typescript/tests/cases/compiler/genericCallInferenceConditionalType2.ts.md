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
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 76
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
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          }
        ],
        "start": 76,
        "end": 79
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
            "start": 82,
            "end": 83
          },
          "typeArguments": null,
          "start": 82,
          "end": 83
        },
        "extendsType": {
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
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 106,
                    "end": 107
                  },
                  "start": 100,
                  "end": 107
                },
                "start": 98,
                "end": 107
              },
              "start": 93,
              "end": 107
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 112,
              "end": 119
            },
            "start": 109,
            "end": 119
          },
          "start": 92,
          "end": 119
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "typeArguments": null,
          "start": 122,
          "end": 123
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 126,
          "end": 131
        },
        "start": 82,
        "end": 131
      },
      "declare": false,
      "start": 57,
      "end": 132
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrapComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 164
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 166
          }
        ],
        "start": 164,
        "end": 167
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
                        "start": 190,
                        "end": 191
                      },
                      "typeArguments": null,
                      "start": 190,
                      "end": 191
                    },
                    "start": 188,
                    "end": 191
                  },
                  "start": 183,
                  "end": 191
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 196,
                  "end": 203
                },
                "start": 193,
                "end": 203
              },
              "start": 182,
              "end": 203
            },
            "start": 180,
            "end": 203
          },
          "start": 171,
          "end": 203
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "typeArguments": null,
                  "start": 216,
                  "end": 217
                },
                "start": 214,
                "end": 217
              },
              "start": 209,
              "end": 217
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 222,
              "end": 229
            },
            "start": 219,
            "end": 229
          },
          "start": 208,
          "end": 229
        },
        "start": 206,
        "end": 229
      },
      "body": null,
      "expression": false,
      "start": 134,
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
            "name": "WrappedComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 254
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrapComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 270
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
                        "start": 275,
                        "end": 276
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 285,
                        "end": 291
                      },
                      "default": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "span",
                          "raw": "\"span\"",
                          "start": 294,
                          "end": 300
                        },
                        "start": 294,
                        "end": 300
                      },
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 275,
                      "end": 300
                    }
                  ],
                  "start": 274,
                  "end": 301
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
                              "name": "as",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 315,
                              "end": 317
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
                                      "start": 320,
                                      "end": 321
                                    },
                                    "typeArguments": null,
                                    "start": 320,
                                    "end": 321
                                  },
                                  {
                                    "type": "TSUndefinedKeyword",
                                    "start": 324,
                                    "end": 333
                                  }
                                ],
                                "start": 320,
                                "end": 333
                              },
                              "start": 318,
                              "end": 333
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 315,
                            "end": 334
                          },
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
                              "start": 339,
                              "end": 348
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 351,
                                "end": 357
                              },
                              "start": 349,
                              "end": 357
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 339,
                            "end": 358
                          }
                        ],
                        "start": 309,
                        "end": 362
                      },
                      "start": 307,
                      "end": 362
                    },
                    "start": 302,
                    "end": 362
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
                        "start": 380,
                        "end": 384
                      },
                      "start": 373,
                      "end": 385
                    }
                  ],
                  "start": 367,
                  "end": 389
                },
                "id": null,
                "generator": false,
                "start": 274,
                "end": 389
              }
            ],
            "optional": false,
            "start": 257,
            "end": 392
          },
          "definite": false,
          "start": 238,
          "end": 392
        }
      ],
      "declare": false,
      "start": 232,
      "end": 393
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RetrievedProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 414
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
          "start": 417,
          "end": 431
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 439,
                "end": 455
              },
              "typeArguments": null,
              "start": 432,
              "end": 455
            }
          ],
          "start": 431,
          "end": 456
        },
        "start": 417,
        "end": 456
      },
      "declare": false,
      "start": 395,
      "end": 457
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
            "name": "f",
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
                        "start": 477,
                        "end": 478
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 477,
                      "end": 478
                    }
                  ],
                  "start": 476,
                  "end": 479
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
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
                                  "start": 487,
                                  "end": 488
                                },
                                "typeArguments": null,
                                "start": 487,
                                "end": 488
                              },
                              "start": 485,
                              "end": 488
                            },
                            "start": 484,
                            "end": 488
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 493,
                            "end": 500
                          },
                          "start": 490,
                          "end": 500
                        },
                        "start": 483,
                        "end": 500
                      },
                      "start": 481,
                      "end": 500
                    },
                    "start": 480,
                    "end": 500
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
                              "start": 509,
                              "end": 510
                            },
                            "typeArguments": null,
                            "start": 509,
                            "end": 510
                          },
                          "start": 507,
                          "end": 510
                        },
                        "start": 506,
                        "end": 510
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 515,
                        "end": 522
                      },
                      "start": 512,
                      "end": 522
                    },
                    "start": 505,
                    "end": 522
                  },
                  "start": 502,
                  "end": 522
                },
                "start": 476,
                "end": 522
              },
              "start": 474,
              "end": 522
            },
            "start": 473,
            "end": 522
          },
          "init": null,
          "definite": false,
          "start": 473,
          "end": 522
        }
      ],
      "declare": true,
      "start": 459,
      "end": 522
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
            "name": "g",
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
                        "start": 541,
                        "end": 542
                      },
                      "constraint": {
                        "type": "TSUnknownKeyword",
                        "start": 551,
                        "end": 558
                      },
                      "default": {
                        "type": "TSStringKeyword",
                        "start": 561,
                        "end": 567
                      },
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 541,
                      "end": 567
                    }
                  ],
                  "start": 540,
                  "end": 568
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 574,
                              "end": 577
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
                                  "start": 579,
                                  "end": 580
                                },
                                "typeArguments": null,
                                "start": 579,
                                "end": 580
                              },
                              "start": 577,
                              "end": 580
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 574,
                            "end": 580
                          }
                        ],
                        "start": 572,
                        "end": 582
                      },
                      "start": 570,
                      "end": 582
                    },
                    "start": 569,
                    "end": 582
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 587,
                    "end": 594
                  },
                  "start": 584,
                  "end": 594
                },
                "start": 540,
                "end": 594
              },
              "start": 538,
              "end": 594
            },
            "start": 537,
            "end": 594
          },
          "init": null,
          "definite": false,
          "start": 537,
          "end": 594
        }
      ],
      "declare": true,
      "start": 523,
      "end": 594
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 602,
            "end": 603
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 607
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 609
              }
            ],
            "optional": false,
            "start": 606,
            "end": 610
          },
          "definite": false,
          "start": 602,
          "end": 610
        }
      ],
      "declare": false,
      "start": 596,
      "end": 610
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FirstParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 631
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
              "start": 632,
              "end": 633
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 632,
            "end": 633
          }
        ],
        "start": 631,
        "end": 634
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
            "start": 637,
            "end": 638
          },
          "typeArguments": null,
          "start": 637,
          "end": 638
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 658
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 657,
                    "end": 658
                  },
                  "start": 651,
                  "end": 658
                },
                "start": 649,
                "end": 658
              },
              "start": 648,
              "end": 658
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 663,
              "end": 670
            },
            "start": 660,
            "end": 670
          },
          "start": 647,
          "end": 670
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 673,
            "end": 674
          },
          "typeArguments": null,
          "start": 673,
          "end": 674
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 677,
          "end": 684
        },
        "start": 637,
        "end": 684
      },
      "declare": false,
      "start": 612,
      "end": 684
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 690,
        "end": 691
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FirstParameter",
            "optional": false,
            "typeAnnotation": null,
            "start": 694,
            "end": 708
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 717
                },
                "typeArguments": null,
                "start": 709,
                "end": 717
              }
            ],
            "start": 708,
            "end": 718
          },
          "start": 694,
          "end": 718
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 719,
            "end": 724
          },
          "start": 719,
          "end": 724
        },
        "start": 694,
        "end": 725
      },
      "declare": false,
      "start": 685,
      "end": 725
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 725
}
```
