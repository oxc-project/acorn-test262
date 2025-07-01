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
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 99
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 114
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 125
                  },
                  "typeArguments": null,
                  "start": 124,
                  "end": 125
                },
                "start": 118,
                "end": 125
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 135
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
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 136,
                            "end": 137
                          },
                          "typeArguments": null,
                          "start": 136,
                          "end": 137
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 138,
                            "end": 145
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
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 152,
                                    "end": 153
                                  },
                                  "typeArguments": null,
                                  "start": 152,
                                  "end": 153
                                },
                                "start": 146,
                                "end": 153
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 155,
                                  "end": 156
                                },
                                "typeArguments": null,
                                "start": 155,
                                "end": 156
                              }
                            ],
                            "start": 145,
                            "end": 157
                          },
                          "start": 138,
                          "end": 157
                        },
                        "start": 136,
                        "end": 158
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
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 162,
                              "end": 165
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 167,
                                "end": 173
                              },
                              "start": 165,
                              "end": 173
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 162,
                            "end": 173
                          }
                        ],
                        "start": 160,
                        "end": 175
                      }
                    ],
                    "start": 135,
                    "end": 176
                  },
                  "start": 128,
                  "end": 176
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 177,
                    "end": 182
                  },
                  "start": 177,
                  "end": 182
                },
                "start": 128,
                "end": 183
              },
              "optional": false,
              "readonly": null,
              "start": 110,
              "end": 185
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 100,
            "end": 185
          }
        ],
        "start": 99,
        "end": 186
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 190
        },
        "typeArguments": null,
        "start": 189,
        "end": 190
      },
      "declare": false,
      "start": 92,
      "end": 191
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 199
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 201
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 214
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 225
                  },
                  "typeArguments": null,
                  "start": 224,
                  "end": 225
                },
                "start": 218,
                "end": 225
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 229
                    },
                    "typeArguments": null,
                    "start": 228,
                    "end": 229
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 237
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
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 244,
                              "end": 245
                            },
                            "typeArguments": null,
                            "start": 244,
                            "end": 245
                          },
                          "start": 238,
                          "end": 245
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 247,
                            "end": 248
                          },
                          "typeArguments": null,
                          "start": 247,
                          "end": 248
                        }
                      ],
                      "start": 237,
                      "end": 249
                    },
                    "start": 230,
                    "end": 249
                  },
                  "start": 228,
                  "end": 250
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "val",
                    "raw": "\"val\"",
                    "start": 251,
                    "end": 256
                  },
                  "start": 251,
                  "end": 256
                },
                "start": 228,
                "end": 257
              },
              "optional": false,
              "readonly": null,
              "start": 210,
              "end": 259
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 200,
            "end": 259
          }
        ],
        "start": 199,
        "end": 260
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 264
        },
        "typeArguments": null,
        "start": 263,
        "end": 264
      },
      "declare": false,
      "start": 192,
      "end": 265
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 300
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
              "start": 301,
              "end": 302
            },
            "constraint": {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 314
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 316,
                      "end": 322
                    },
                    "start": 314,
                    "end": 322
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 313,
                  "end": 322
                }
              ],
              "start": 311,
              "end": 324
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 301,
            "end": 324
          }
        ],
        "start": 300,
        "end": 325
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 328,
          "end": 329
        },
        "typeArguments": null,
        "start": 328,
        "end": 329
      },
      "declare": false,
      "start": 290,
      "end": 329
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myBug",
        "optional": false,
        "typeAnnotation": null,
        "start": 348,
        "end": 353
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
              "start": 357,
              "end": 358
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 371
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
                    "start": 381,
                    "end": 382
                  },
                  "typeArguments": null,
                  "start": 381,
                  "end": 382
                },
                "start": 375,
                "end": 382
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 385,
                      "end": 386
                    },
                    "typeArguments": null,
                    "start": 385,
                    "end": 386
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 387,
                      "end": 388
                    },
                    "typeArguments": null,
                    "start": 387,
                    "end": 388
                  },
                  "start": 385,
                  "end": 389
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 403
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 410,
                            "end": 411
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 410,
                          "end": 411
                        },
                        "start": 404,
                        "end": 411
                      }
                    ],
                    "start": 403,
                    "end": 412
                  },
                  "start": 398,
                  "end": 412
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 416
                  },
                  "typeArguments": null,
                  "start": 415,
                  "end": 416
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 419,
                  "end": 424
                },
                "start": 385,
                "end": 424
              },
              "optional": false,
              "readonly": null,
              "start": 367,
              "end": 426
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 357,
            "end": 426
          }
        ],
        "start": 353,
        "end": 428
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 434,
                "end": 435
              },
              "typeArguments": null,
              "start": 434,
              "end": 435
            },
            "start": 432,
            "end": 435
          },
          "start": 429,
          "end": 435
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 439
          },
          "typeArguments": null,
          "start": 438,
          "end": 439
        },
        "start": 436,
        "end": 439
      },
      "body": null,
      "expression": false,
      "start": 331,
      "end": 439
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
            "name": "out",
            "optional": false,
            "typeAnnotation": null,
            "start": 447,
            "end": 450
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "myBug",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 458
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 464
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 467,
                            "end": 468
                          },
                          "value": {
                            "type": "Literal",
                            "value": "test",
                            "raw": "\"test\"",
                            "start": 470,
                            "end": 476
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 467,
                          "end": 476
                        }
                      ],
                      "start": 466,
                      "end": 477
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 460,
                    "end": 477
                  }
                ],
                "start": 459,
                "end": 478
              }
            ],
            "optional": false,
            "start": 453,
            "end": 479
          },
          "definite": false,
          "start": 447,
          "end": 479
        }
      ],
      "declare": false,
      "start": 441,
      "end": 479
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Value",
        "optional": false,
        "typeAnnotation": null,
        "start": 486,
        "end": 491
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 493
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 502,
              "end": 508
            },
            "default": {
              "type": "TSStringKeyword",
              "start": 511,
              "end": 517
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 492,
            "end": 517
          }
        ],
        "start": 491,
        "end": 518
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 521,
          "end": 527
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "val",
                "raw": "\"val\"",
                "start": 528,
                "end": 533
              },
              "start": 528,
              "end": 533
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 536
              },
              "typeArguments": null,
              "start": 535,
              "end": 536
            }
          ],
          "start": 527,
          "end": 537
        },
        "start": 521,
        "end": 537
      },
      "declare": false,
      "start": 481,
      "end": 538
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "value",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 561
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
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 563
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 572,
              "end": 578
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 562,
            "end": 578
          }
        ],
        "start": 561,
        "end": 579
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 586
              },
              "typeArguments": null,
              "start": 585,
              "end": 586
            },
            "start": 583,
            "end": 586
          },
          "start": 580,
          "end": 586
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Value",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 594
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 596
                },
                "typeArguments": null,
                "start": 595,
                "end": 596
              }
            ],
            "start": 594,
            "end": 597
          },
          "start": 589,
          "end": 597
        },
        "start": 587,
        "end": 597
      },
      "body": null,
      "expression": false,
      "start": 539,
      "end": 598
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ensureNoDuplicates",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 635
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
              "start": 639,
              "end": 640
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 657
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
                    "start": 667,
                    "end": 668
                  },
                  "typeArguments": null,
                  "start": 667,
                  "end": 668
                },
                "start": 661,
                "end": 668
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 678
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
                              "start": 679,
                              "end": 680
                            },
                            "typeArguments": null,
                            "start": 679,
                            "end": 680
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 681,
                              "end": 682
                            },
                            "typeArguments": null,
                            "start": 681,
                            "end": 682
                          },
                          "start": 679,
                          "end": 683
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 685,
                            "end": 690
                          },
                          "typeArguments": null,
                          "start": 685,
                          "end": 690
                        }
                      ],
                      "start": 678,
                      "end": 691
                    },
                    "start": 671,
                    "end": 691
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "val",
                      "raw": "\"val\"",
                      "start": 692,
                      "end": 697
                    },
                    "start": 692,
                    "end": 697
                  },
                  "start": 671,
                  "end": 698
                },
                "extendsType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 707,
                      "end": 714
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
                              "start": 715,
                              "end": 716
                            },
                            "typeArguments": null,
                            "start": 715,
                            "end": 716
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Exclude",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 717,
                              "end": 724
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
                                      "start": 731,
                                      "end": 732
                                    },
                                    "typeArguments": null,
                                    "start": 731,
                                    "end": 732
                                  },
                                  "start": 725,
                                  "end": 732
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 734,
                                    "end": 735
                                  },
                                  "typeArguments": null,
                                  "start": 734,
                                  "end": 735
                                }
                              ],
                              "start": 724,
                              "end": 736
                            },
                            "start": 717,
                            "end": 736
                          },
                          "start": 715,
                          "end": 737
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 739,
                            "end": 744
                          },
                          "typeArguments": null,
                          "start": 739,
                          "end": 744
                        }
                      ],
                      "start": 714,
                      "end": 745
                    },
                    "start": 707,
                    "end": 745
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "val",
                      "raw": "\"val\"",
                      "start": 746,
                      "end": 751
                    },
                    "start": 746,
                    "end": 751
                  },
                  "start": 707,
                  "end": 752
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 761,
                  "end": 766
                },
                "falseType": {
                  "type": "TSAnyKeyword",
                  "start": 775,
                  "end": 778
                },
                "start": 671,
                "end": 778
              },
              "optional": false,
              "readonly": null,
              "start": 649,
              "end": 782
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 639,
            "end": 782
          }
        ],
        "start": 635,
        "end": 784
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "vals",
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
                "start": 791,
                "end": 792
              },
              "typeArguments": null,
              "start": 791,
              "end": 792
            },
            "start": 789,
            "end": 792
          },
          "start": 785,
          "end": 792
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 795,
          "end": 799
        },
        "start": 793,
        "end": 799
      },
      "body": null,
      "expression": false,
      "start": 600,
      "end": 800
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
            "name": "noError",
            "optional": false,
            "typeAnnotation": null,
            "start": 808,
            "end": 815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ensureNoDuplicates",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 836
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "main",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 838,
                      "end": 842
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 844,
                        "end": 849
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "test",
                          "raw": "\"test\"",
                          "start": 850,
                          "end": 856
                        }
                      ],
                      "optional": false,
                      "start": 844,
                      "end": 857
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 838,
                    "end": 857
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alternate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 859,
                      "end": 868
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 870,
                        "end": 875
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "test2",
                          "raw": "\"test2\"",
                          "start": 876,
                          "end": 883
                        }
                      ],
                      "optional": false,
                      "start": 870,
                      "end": 884
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 859,
                    "end": 884
                  }
                ],
                "start": 837,
                "end": 885
              }
            ],
            "optional": false,
            "start": 818,
            "end": 886
          },
          "definite": false,
          "start": 808,
          "end": 886
        }
      ],
      "declare": false,
      "start": 802,
      "end": 887
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
            "name": "shouldBeNoError",
            "optional": false,
            "typeAnnotation": null,
            "start": 895,
            "end": 910
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ensureNoDuplicates",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 931
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "main",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 933,
                      "end": 937
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 939,
                        "end": 944
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "test",
                          "raw": "\"test\"",
                          "start": 945,
                          "end": 951
                        }
                      ],
                      "optional": false,
                      "start": 939,
                      "end": 952
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 933,
                    "end": 952
                  }
                ],
                "start": 932,
                "end": 953
              }
            ],
            "optional": false,
            "start": 913,
            "end": 954
          },
          "definite": false,
          "start": 895,
          "end": 954
        }
      ],
      "declare": false,
      "start": 889,
      "end": 955
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
            "name": "shouldBeError",
            "optional": false,
            "typeAnnotation": null,
            "start": 963,
            "end": 976
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ensureNoDuplicates",
              "optional": false,
              "typeAnnotation": null,
              "start": 979,
              "end": 997
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "main",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1003
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1005,
                        "end": 1010
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "dup",
                          "raw": "\"dup\"",
                          "start": 1011,
                          "end": 1016
                        }
                      ],
                      "optional": false,
                      "start": 1005,
                      "end": 1017
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 999,
                    "end": 1017
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alternate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1019,
                      "end": 1028
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1035
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "dup",
                          "raw": "\"dup\"",
                          "start": 1036,
                          "end": 1041
                        }
                      ],
                      "optional": false,
                      "start": 1030,
                      "end": 1042
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1019,
                    "end": 1042
                  }
                ],
                "start": 998,
                "end": 1043
              }
            ],
            "optional": false,
            "start": 979,
            "end": 1044
          },
          "definite": false,
          "start": 963,
          "end": 1044
        }
      ],
      "declare": false,
      "start": 957,
      "end": 1045
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 1074,
        "end": 1078
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
              "start": 1079,
              "end": 1080
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1079,
            "end": 1080
          }
        ],
        "start": 1078,
        "end": 1081
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
            "start": 1084,
            "end": 1085
          },
          "typeArguments": null,
          "start": 1084,
          "end": 1085
        },
        "extendsType": {
          "type": "TSNumberKeyword",
          "start": 1094,
          "end": 1100
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 1103,
          "end": 1109
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1112,
          "end": 1117
        },
        "start": 1084,
        "end": 1117
      },
      "declare": false,
      "start": 1069,
      "end": 1118
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "function1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1136,
        "end": 1145
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
              "start": 1146,
              "end": 1147
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1158,
                "end": 1159
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
                    "start": 1169,
                    "end": 1170
                  },
                  "typeArguments": null,
                  "start": 1169,
                  "end": 1170
                },
                "start": 1163,
                "end": 1170
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cond",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1177
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
                          "start": 1178,
                          "end": 1179
                        },
                        "typeArguments": null,
                        "start": 1178,
                        "end": 1179
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1180,
                          "end": 1181
                        },
                        "typeArguments": null,
                        "start": 1180,
                        "end": 1181
                      },
                      "start": 1178,
                      "end": 1182
                    }
                  ],
                  "start": 1177,
                  "end": 1183
                },
                "start": 1173,
                "end": 1183
              },
              "optional": false,
              "readonly": null,
              "start": 1156,
              "end": 1184
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1146,
            "end": 1184
          }
        ],
        "start": 1145,
        "end": 1185
      },
      "params": [],
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
                "start": 1189,
                "end": 1190
              },
              "typeArguments": null,
              "start": 1189,
              "end": 1190
            },
            "indexType": {
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
                  "start": 1197,
                  "end": 1198
                },
                "typeArguments": null,
                "start": 1197,
                "end": 1198
              },
              "start": 1191,
              "end": 1198
            },
            "start": 1189,
            "end": 1199
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 1200,
              "end": 1205
            },
            "start": 1200,
            "end": 1205
          },
          "start": 1189,
          "end": 1206
        },
        "start": 1187,
        "end": 1206
      },
      "body": null,
      "expression": false,
      "start": 1119,
      "end": 1207
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prepend",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1250
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Elm",
                "optional": false,
                "typeAnnotation": null,
                "start": 1251,
                "end": 1254
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1251,
              "end": 1254
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1256,
                "end": 1257
              },
              "constraint": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1266,
                  "end": 1273
                },
                "start": 1266,
                "end": 1275
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1256,
              "end": 1275
            }
          ],
          "start": 1250,
          "end": 1276
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
              "start": 1281,
              "end": 1282
            },
            "typeArguments": null,
            "start": 1281,
            "end": 1282
          },
          "extendsType": {
            "type": "TSUnknownKeyword",
            "start": 1291,
            "end": 1298
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Elm",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1310,
                        "end": 1313
                      },
                      "typeArguments": null,
                      "start": 1310,
                      "end": 1313
                    },
                    "start": 1308,
                    "end": 1313
                  },
                  "start": 1305,
                  "end": 1313
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1318,
                    "end": 1322
                  },
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
                        "start": 1324,
                        "end": 1325
                      },
                      "typeArguments": null,
                      "start": 1324,
                      "end": 1325
                    },
                    "start": 1322,
                    "end": 1325
                  },
                  "value": null,
                  "start": 1315,
                  "end": 1325
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1330,
                  "end": 1334
                },
                "start": 1327,
                "end": 1334
              },
              "start": 1304,
              "end": 1334
            },
            "extendsType": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1349,
                    "end": 1353
                  },
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
                          "name": "T2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1361,
                          "end": 1363
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1361,
                        "end": 1363
                      },
                      "start": 1355,
                      "end": 1363
                    },
                    "start": 1353,
                    "end": 1363
                  },
                  "value": null,
                  "start": 1346,
                  "end": 1363
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1368,
                  "end": 1372
                },
                "start": 1365,
                "end": 1372
              },
              "start": 1345,
              "end": 1372
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1378
              },
              "typeArguments": null,
              "start": 1376,
              "end": 1378
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1383,
              "end": 1388
            },
            "start": 1303,
            "end": 1388
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1393,
            "end": 1398
          },
          "start": 1281,
          "end": 1398
        },
        "declare": false,
        "start": 1238,
        "end": 1399
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1231,
      "end": 1399
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExactExtract",
          "optional": false,
          "typeAnnotation": null,
          "start": 1412,
          "end": 1424
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
                "start": 1425,
                "end": 1426
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1425,
              "end": 1426
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1428,
                "end": 1429
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1428,
              "end": 1429
            }
          ],
          "start": 1424,
          "end": 1430
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
              "start": 1433,
              "end": 1434
            },
            "typeArguments": null,
            "start": 1433,
            "end": 1434
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1444
            },
            "typeArguments": null,
            "start": 1443,
            "end": 1444
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1447,
                "end": 1448
              },
              "typeArguments": null,
              "start": 1447,
              "end": 1448
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1457,
                "end": 1458
              },
              "typeArguments": null,
              "start": 1457,
              "end": 1458
            },
            "trueType": {
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
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1465,
              "end": 1470
            },
            "start": 1447,
            "end": 1470
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1473,
            "end": 1478
          },
          "start": 1433,
          "end": 1478
        },
        "declare": false,
        "start": 1407,
        "end": 1479
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1400,
      "end": 1479
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Conv",
        "optional": false,
        "typeAnnotation": null,
        "start": 1486,
        "end": 1490
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
              "start": 1491,
              "end": 1492
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1491,
            "end": 1492
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1494,
              "end": 1495
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1498,
                "end": 1499
              },
              "typeArguments": null,
              "start": 1498,
              "end": 1499
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1494,
            "end": 1499
          }
        ],
        "start": 1490,
        "end": 1500
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1507,
                "end": 1508
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                        "start": 1511,
                        "end": 1512
                      },
                      "typeArguments": null,
                      "start": 1511,
                      "end": 1512
                    }
                  ],
                  "start": 1510,
                  "end": 1513
                },
                "start": 1508,
                "end": 1513
              },
              "accessibility": null,
              "static": false,
              "start": 1507,
              "end": 1514
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1515,
                "end": 1516
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prepend",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1518,
                    "end": 1525
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
                          "start": 1526,
                          "end": 1527
                        },
                        "typeArguments": null,
                        "start": 1526,
                        "end": 1527
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Conv",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1529,
                          "end": 1533
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExactExtract",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1534,
                                "end": 1546
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
                                      "start": 1547,
                                      "end": 1548
                                    },
                                    "typeArguments": null,
                                    "start": 1547,
                                    "end": 1548
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1550,
                                      "end": 1551
                                    },
                                    "typeArguments": null,
                                    "start": 1550,
                                    "end": 1551
                                  }
                                ],
                                "start": 1546,
                                "end": 1552
                              },
                              "start": 1534,
                              "end": 1552
                            }
                          ],
                          "start": 1533,
                          "end": 1553
                        },
                        "start": 1529,
                        "end": 1553
                      }
                    ],
                    "start": 1525,
                    "end": 1554
                  },
                  "start": 1518,
                  "end": 1554
                },
                "start": 1516,
                "end": 1554
              },
              "accessibility": null,
              "static": false,
              "start": 1515,
              "end": 1555
            }
          ],
          "start": 1505,
          "end": 1556
        },
        "indexType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1557,
              "end": 1558
            },
            "typeArguments": null,
            "start": 1557,
            "end": 1558
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1567,
              "end": 1568
            },
            "typeArguments": null,
            "start": 1567,
            "end": 1568
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1571,
              "end": 1572
            },
            "start": 1571,
            "end": 1572
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1575,
              "end": 1576
            },
            "start": 1575,
            "end": 1576
          },
          "start": 1557,
          "end": 1576
        },
        "start": 1505,
        "end": 1577
      },
      "declare": false,
      "start": 1481,
      "end": 1578
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 92,
  "end": 1578
}
```
