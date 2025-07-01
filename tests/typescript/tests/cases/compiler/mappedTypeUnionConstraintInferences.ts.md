__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 24
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
                "start": 25,
                "end": 26
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 25,
              "end": 26
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
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
                    "start": 44,
                    "end": 45
                  },
                  "typeArguments": null,
                  "start": 44,
                  "end": 45
                },
                "start": 38,
                "end": 45
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 28,
              "end": 45
            }
          ],
          "start": 24,
          "end": 46
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 53
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
                  "start": 54,
                  "end": 55
                },
                "typeArguments": null,
                "start": 54,
                "end": 55
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
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
                          "start": 71,
                          "end": 72
                        },
                        "typeArguments": null,
                        "start": 71,
                        "end": 72
                      },
                      "start": 65,
                      "end": 72
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 74,
                        "end": 75
                      },
                      "typeArguments": null,
                      "start": 74,
                      "end": 75
                    }
                  ],
                  "start": 64,
                  "end": 76
                },
                "start": 57,
                "end": 76
              }
            ],
            "start": 53,
            "end": 77
          },
          "start": 49,
          "end": 77
        },
        "declare": true,
        "start": 7,
        "end": 78
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 78
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PartialProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 116
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
                "start": 117,
                "end": 118
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 117,
              "end": 118
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 121
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
                    "start": 136,
                    "end": 137
                  },
                  "typeArguments": null,
                  "start": 136,
                  "end": 137
                },
                "start": 130,
                "end": 137
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 120,
              "end": 137
            }
          ],
          "start": 116,
          "end": 138
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 148
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 153
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
                            "start": 154,
                            "end": 155
                          },
                          "typeArguments": null,
                          "start": 154,
                          "end": 155
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 158
                          },
                          "typeArguments": null,
                          "start": 157,
                          "end": 158
                        }
                      ],
                      "start": 153,
                      "end": 159
                    },
                    "start": 149,
                    "end": 159
                  }
                ],
                "start": 148,
                "end": 160
              },
              "start": 141,
              "end": 160
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 167
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
                      "start": 168,
                      "end": 169
                    },
                    "typeArguments": null,
                    "start": 168,
                    "end": 169
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 172
                    },
                    "typeArguments": null,
                    "start": 171,
                    "end": 172
                  }
                ],
                "start": 167,
                "end": 173
              },
              "start": 163,
              "end": 173
            }
          ],
          "start": 141,
          "end": 173
        },
        "declare": true,
        "start": 86,
        "end": 174
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 79,
      "end": 174
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething_Actual",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 209
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
                "start": 210,
                "end": 211
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 230
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 232,
                        "end": 238
                      },
                      "start": 230,
                      "end": 238
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 226,
                    "end": 239
                  }
                ],
                "start": 220,
                "end": 241
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 210,
              "end": 241
            }
          ],
          "start": 209,
          "end": 242
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
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
                  "start": 246,
                  "end": 247
                },
                "typeArguments": null,
                "start": 246,
                "end": 247
              },
              "start": 244,
              "end": 247
            },
            "start": 243,
            "end": 247
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                          "start": 267,
                          "end": 268
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PartialProperties",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 278,
                              "end": 295
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
                                    "start": 296,
                                    "end": 297
                                  },
                                  "typeArguments": null,
                                  "start": 296,
                                  "end": 297
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "prop",
                                    "raw": "\"prop\"",
                                    "start": 299,
                                    "end": 305
                                  },
                                  "start": 299,
                                  "end": 305
                                }
                              ],
                              "start": 295,
                              "end": 306
                            },
                            "start": 278,
                            "end": 306
                          },
                          "start": 272,
                          "end": 306
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PartialProperties",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 309,
                              "end": 326
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
                                    "start": 327,
                                    "end": 328
                                  },
                                  "typeArguments": null,
                                  "start": 327,
                                  "end": 328
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "prop",
                                    "raw": "\"prop\"",
                                    "start": 330,
                                    "end": 336
                                  },
                                  "start": 330,
                                  "end": 336
                                }
                              ],
                              "start": 326,
                              "end": 337
                            },
                            "start": 309,
                            "end": 337
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 338,
                              "end": 339
                            },
                            "typeArguments": null,
                            "start": 338,
                            "end": 339
                          },
                          "start": 309,
                          "end": 340
                        },
                        "optional": false,
                        "readonly": null,
                        "start": 264,
                        "end": 343
                      },
                      "start": 262,
                      "end": 343
                    },
                    "start": 261,
                    "end": 343
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 346,
                      "end": 350
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 354,
                      "end": 357
                    },
                    "start": 346,
                    "end": 357
                  },
                  "definite": false,
                  "start": 261,
                  "end": 357
                }
              ],
              "declare": false,
              "start": 255,
              "end": 358
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 371
              },
              "start": 363,
              "end": 372
            }
          ],
          "start": 249,
          "end": 374
        },
        "expression": false,
        "start": 182,
        "end": 374
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 175,
      "end": 374
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething_Expected",
          "optional": false,
          "typeAnnotation": null,
          "start": 399,
          "end": 419
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
                "start": 420,
                "end": 421
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 440
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 442,
                        "end": 448
                      },
                      "start": 440,
                      "end": 448
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 436,
                    "end": 449
                  }
                ],
                "start": 430,
                "end": 451
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 420,
              "end": 451
            }
          ],
          "start": 419,
          "end": 452
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
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
                  "start": 456,
                  "end": 457
                },
                "typeArguments": null,
                "start": 456,
                "end": 457
              },
              "start": 454,
              "end": 457
            },
            "start": 453,
            "end": 457
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PartialProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 491
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
                        "start": 492,
                        "end": 493
                      },
                      "typeArguments": null,
                      "start": 492,
                      "end": 493
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "prop",
                        "raw": "\"prop\"",
                        "start": 495,
                        "end": 501
                      },
                      "start": 495,
                      "end": 501
                    }
                  ],
                  "start": 491,
                  "end": 502
                },
                "start": 474,
                "end": 502
              },
              "start": 468,
              "end": 502
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PartialProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 522
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
                        "start": 523,
                        "end": 524
                      },
                      "typeArguments": null,
                      "start": 523,
                      "end": 524
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "prop",
                        "raw": "\"prop\"",
                        "start": 526,
                        "end": 532
                      },
                      "start": 526,
                      "end": 532
                    }
                  ],
                  "start": 522,
                  "end": 533
                },
                "start": 505,
                "end": 533
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 535
                },
                "typeArguments": null,
                "start": 534,
                "end": 535
              },
              "start": 505,
              "end": 536
            },
            "optional": false,
            "readonly": null,
            "start": 460,
            "end": 539
          },
          "start": 458,
          "end": 539
        },
        "body": null,
        "expression": false,
        "start": 382,
        "end": 540
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 375,
      "end": 540
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 554
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething_Actual",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 575
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 578,
                        "end": 582
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 584,
                        "end": 590
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 578,
                      "end": 590
                    }
                  ],
                  "start": 576,
                  "end": 592
                }
              ],
              "optional": false,
              "start": 557,
              "end": 593
            },
            "definite": false,
            "start": 553,
            "end": 593
          }
        ],
        "declare": false,
        "start": 549,
        "end": 594
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 542,
      "end": 594
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 596
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 599,
          "end": 601
        },
        "start": 595,
        "end": 601
      },
      "directive": null,
      "start": 595,
      "end": 601
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 654
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething_Expected",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 677
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 684
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 686,
                        "end": 692
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 680,
                      "end": 692
                    }
                  ],
                  "start": 678,
                  "end": 694
                }
              ],
              "optional": false,
              "start": 657,
              "end": 695
            },
            "definite": false,
            "start": 653,
            "end": 695
          }
        ],
        "declare": false,
        "start": 649,
        "end": 696
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 642,
      "end": 696
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 697,
          "end": 698
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 701,
          "end": 703
        },
        "start": 697,
        "end": 703
      },
      "directive": null,
      "start": 697,
      "end": 703
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 711
}
```
