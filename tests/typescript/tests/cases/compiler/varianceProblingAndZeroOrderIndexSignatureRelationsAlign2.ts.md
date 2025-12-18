__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Either",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 11,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Left",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 24
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 26
                  },
                  "typeArguments": null,
                  "start": 25,
                  "end": 26
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 29
                  },
                  "typeArguments": null,
                  "start": 28,
                  "end": 29
                }
              ],
              "start": 24,
              "end": 30
            },
            "start": 20,
            "end": 30
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Right",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 38
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 40
                  },
                  "typeArguments": null,
                  "start": 39,
                  "end": 40
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 42,
                    "end": 43
                  },
                  "typeArguments": null,
                  "start": 42,
                  "end": 43
                }
              ],
              "start": 38,
              "end": 44
            },
            "start": 33,
            "end": 44
          }
        ],
        "start": 20,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Left",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 57
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 58,
            "end": 59
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 62
          }
        ],
        "start": 57,
        "end": 63
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 83
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Left",
                  "raw": "'Left'",
                  "start": 85,
                  "end": 91
                },
                "start": 85,
                "end": 91
              },
              "start": 83,
              "end": 91
            },
            "value": {
              "type": "Literal",
              "value": "Left",
              "raw": "'Left'",
              "start": 94,
              "end": 100
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 70,
            "end": 100
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 116
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
                  "start": 119,
                  "end": 120
                },
                "typeArguments": null,
                "start": 119,
                "end": 120
              },
              "start": 117,
              "end": 120
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": true,
            "accessibility": null,
            "start": 105,
            "end": 120
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_L",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                "typeArguments": null,
                "start": 139,
                "end": 140
              },
              "start": 137,
              "end": 140
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": true,
            "accessibility": null,
            "start": 125,
            "end": 140
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 156
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 173,
                          "end": 174
                        },
                        "typeArguments": null,
                        "start": 173,
                        "end": 174
                      },
                      "start": 171,
                      "end": 174
                    },
                    "start": 166,
                    "end": 174
                  },
                  "readonly": true,
                  "static": false,
                  "start": 157,
                  "end": 174
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 176,
                "end": 178
              },
              "expression": false,
              "start": 156,
              "end": 178
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 178
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 248
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 250
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 249,
                    "end": 250
                  }
                ],
                "start": 248,
                "end": 251
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
                          "name": "a",
                          "optional": false,
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
                                "start": 259,
                                "end": 260
                              },
                              "typeArguments": null,
                              "start": 259,
                              "end": 260
                            },
                            "start": 257,
                            "end": 260
                          },
                          "start": 256,
                          "end": 260
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 265,
                            "end": 266
                          },
                          "typeArguments": null,
                          "start": 265,
                          "end": 266
                        },
                        "start": 262,
                        "end": 266
                      },
                      "start": 255,
                      "end": 266
                    },
                    "start": 253,
                    "end": 266
                  },
                  "start": 252,
                  "end": 266
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 275
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 276,
                          "end": 277
                        },
                        "typeArguments": null,
                        "start": 276,
                        "end": 277
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 280
                        },
                        "typeArguments": null,
                        "start": 279,
                        "end": 280
                      }
                    ],
                    "start": 275,
                    "end": 281
                  },
                  "start": 269,
                  "end": 281
                },
                "start": 267,
                "end": 281
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ThisExpression",
                        "start": 297,
                        "end": 301
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 305,
                        "end": 308
                      },
                      "start": 297,
                      "end": 308
                    },
                    "start": 290,
                    "end": 308
                  }
                ],
                "start": 282,
                "end": 314
              },
              "expression": false,
              "start": 248,
              "end": 314
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 245,
            "end": 314
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ap",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 321
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 323
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 322,
                    "end": 323
                  }
                ],
                "start": 321,
                "end": 324
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Either",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 336
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "L",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 337,
                              "end": 338
                            },
                            "typeArguments": null,
                            "start": 337,
                            "end": 338
                          },
                          {
                            "type": "TSFunctionType",
                            "typeParameters": null,
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
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 344,
                                      "end": 345
                                    },
                                    "typeArguments": null,
                                    "start": 344,
                                    "end": 345
                                  },
                                  "start": 342,
                                  "end": 345
                                },
                                "start": 341,
                                "end": 345
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 350,
                                  "end": 351
                                },
                                "typeArguments": null,
                                "start": 350,
                                "end": 351
                              },
                              "start": 347,
                              "end": 351
                            },
                            "start": 340,
                            "end": 351
                          }
                        ],
                        "start": 336,
                        "end": 352
                      },
                      "start": 330,
                      "end": 352
                    },
                    "start": 328,
                    "end": 352
                  },
                  "start": 325,
                  "end": 352
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 361
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 362,
                          "end": 363
                        },
                        "typeArguments": null,
                        "start": 362,
                        "end": 363
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 365,
                          "end": 366
                        },
                        "typeArguments": null,
                        "start": 365,
                        "end": 366
                      }
                    ],
                    "start": 361,
                    "end": 367
                  },
                  "start": 355,
                  "end": 367
                },
                "start": 353,
                "end": 367
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 383,
                        "end": 387
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 391,
                        "end": 394
                      },
                      "start": 383,
                      "end": 394
                    },
                    "start": 376,
                    "end": 394
                  }
                ],
                "start": 368,
                "end": 400
              },
              "expression": false,
              "start": 321,
              "end": 400
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 319,
            "end": 400
          }
        ],
        "start": 64,
        "end": 402
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 402
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Right",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 415
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 417
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 416,
            "end": 417
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 420
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 419,
            "end": 420
          }
        ],
        "start": 415,
        "end": 421
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 441
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Right",
                  "raw": "'Right'",
                  "start": 443,
                  "end": 450
                },
                "start": 443,
                "end": 450
              },
              "start": 441,
              "end": 450
            },
            "value": {
              "type": "Literal",
              "value": "Right",
              "raw": "'Right'",
              "start": 453,
              "end": 460
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 428,
            "end": 460
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 476
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
                  "start": 479,
                  "end": 480
                },
                "typeArguments": null,
                "start": 479,
                "end": 480
              },
              "start": 477,
              "end": 480
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": true,
            "accessibility": null,
            "start": 465,
            "end": 480
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_L",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 496
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 500
                },
                "typeArguments": null,
                "start": 499,
                "end": 500
              },
              "start": 497,
              "end": 500
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": true,
            "accessibility": null,
            "start": 485,
            "end": 500
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 516
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
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
                          "start": 533,
                          "end": 534
                        },
                        "typeArguments": null,
                        "start": 533,
                        "end": 534
                      },
                      "start": 531,
                      "end": 534
                    },
                    "start": 526,
                    "end": 534
                  },
                  "readonly": true,
                  "static": false,
                  "start": 517,
                  "end": 534
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 536,
                "end": 538
              },
              "expression": false,
              "start": 516,
              "end": 538
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 505,
            "end": 538
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 546
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 547,
                      "end": 548
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 547,
                    "end": 548
                  }
                ],
                "start": 546,
                "end": 549
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
                          "name": "a",
                          "optional": false,
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
                                "start": 557,
                                "end": 558
                              },
                              "typeArguments": null,
                              "start": 557,
                              "end": 558
                            },
                            "start": 555,
                            "end": 558
                          },
                          "start": 554,
                          "end": 558
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 563,
                            "end": 564
                          },
                          "typeArguments": null,
                          "start": 563,
                          "end": 564
                        },
                        "start": 560,
                        "end": 564
                      },
                      "start": 553,
                      "end": 564
                    },
                    "start": 551,
                    "end": 564
                  },
                  "start": 550,
                  "end": 564
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 567,
                    "end": 573
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 575
                        },
                        "typeArguments": null,
                        "start": 574,
                        "end": 575
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 577,
                          "end": 578
                        },
                        "typeArguments": null,
                        "start": 577,
                        "end": 578
                      }
                    ],
                    "start": 573,
                    "end": 579
                  },
                  "start": 567,
                  "end": 579
                },
                "start": 565,
                "end": 579
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Right",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 604
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 605,
                            "end": 606
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 607,
                                "end": 611
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 612,
                                "end": 617
                              },
                              "optional": false,
                              "computed": false,
                              "start": 607,
                              "end": 617
                            }
                          ],
                          "optional": false,
                          "start": 605,
                          "end": 618
                        }
                      ],
                      "start": 595,
                      "end": 619
                    },
                    "start": 588,
                    "end": 619
                  }
                ],
                "start": 580,
                "end": 625
              },
              "expression": false,
              "start": 546,
              "end": 625
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 543,
            "end": 625
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ap",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 632
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 633,
                      "end": 634
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 633,
                    "end": 634
                  }
                ],
                "start": 632,
                "end": 635
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Either",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 641,
                        "end": 647
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "L",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 648,
                              "end": 649
                            },
                            "typeArguments": null,
                            "start": 648,
                            "end": 649
                          },
                          {
                            "type": "TSFunctionType",
                            "typeParameters": null,
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
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 655,
                                      "end": 656
                                    },
                                    "typeArguments": null,
                                    "start": 655,
                                    "end": 656
                                  },
                                  "start": 653,
                                  "end": 656
                                },
                                "start": 652,
                                "end": 656
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 661,
                                  "end": 662
                                },
                                "typeArguments": null,
                                "start": 661,
                                "end": 662
                              },
                              "start": 658,
                              "end": 662
                            },
                            "start": 651,
                            "end": 662
                          }
                        ],
                        "start": 647,
                        "end": 663
                      },
                      "start": 641,
                      "end": 663
                    },
                    "start": 639,
                    "end": 663
                  },
                  "start": 636,
                  "end": 663
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 666,
                    "end": 672
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "L",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 673,
                          "end": 674
                        },
                        "typeArguments": null,
                        "start": 673,
                        "end": 674
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 677
                        },
                        "typeArguments": null,
                        "start": 676,
                        "end": 677
                      }
                    ],
                    "start": 672,
                    "end": 678
                  },
                  "start": 666,
                  "end": 678
                },
                "start": 664,
                "end": 678
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 694,
                        "end": 698
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 702,
                        "end": 705
                      },
                      "start": 694,
                      "end": 705
                    },
                    "start": 687,
                    "end": 706
                  }
                ],
                "start": 679,
                "end": 712
              },
              "expression": false,
              "start": 632,
              "end": 712
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 630,
            "end": 712
          }
        ],
        "start": 422,
        "end": 714
      },
      "abstract": false,
      "declare": false,
      "start": 404,
      "end": 714
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 722,
        "end": 726
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 728
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 727,
            "end": 728
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 731
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 735
              },
              "typeArguments": null,
              "start": 734,
              "end": 735
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 730,
            "end": 735
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 738
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 741,
              "end": 748
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 737,
            "end": 748
          }
        ],
        "start": 726,
        "end": 749
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 763,
              "end": 765
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
                  "start": 768,
                  "end": 769
                },
                "typeArguments": null,
                "start": 768,
                "end": 769
              },
              "start": 766,
              "end": 769
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": true,
            "accessibility": null,
            "start": 754,
            "end": 770
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_O",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 784
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 787,
                  "end": 788
                },
                "typeArguments": null,
                "start": 787,
                "end": 788
              },
              "start": 785,
              "end": 788
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": true,
            "accessibility": null,
            "start": 773,
            "end": 789
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_I",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 803
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 806,
                  "end": 807
                },
                "typeArguments": null,
                "start": 806,
                "end": 807
              },
              "start": 804,
              "end": 807
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": true,
            "accessibility": null,
            "start": 792,
            "end": 808
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 822
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 883,
                        "end": 889
                      },
                      "start": 881,
                      "end": 889
                    },
                    "start": 877,
                    "end": 889
                  },
                  "readonly": true,
                  "static": false,
                  "start": 868,
                  "end": 889
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "is",
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
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 943,
                                "end": 950
                              },
                              "start": 941,
                              "end": 950
                            },
                            "start": 940,
                            "end": 950
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypePredicate",
                            "parameterName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 955,
                              "end": 956
                            },
                            "asserts": false,
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
                                  "start": 960,
                                  "end": 961
                                },
                                "typeArguments": null,
                                "start": 960,
                                "end": 961
                              },
                              "start": 960,
                              "end": 961
                            },
                            "start": 955,
                            "end": 961
                          },
                          "start": 952,
                          "end": 961
                        },
                        "start": 939,
                        "end": 961
                      },
                      "start": 937,
                      "end": 961
                    },
                    "start": 935,
                    "end": 961
                  },
                  "readonly": true,
                  "static": false,
                  "start": 926,
                  "end": 961
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "validate",
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
                            "name": "input",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1071,
                                  "end": 1072
                                },
                                "typeArguments": null,
                                "start": 1071,
                                "end": 1072
                              },
                              "start": 1069,
                              "end": 1072
                            },
                            "start": 1064,
                            "end": 1072
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeLiteral",
                                  "members": [],
                                  "start": 1083,
                                  "end": 1085
                                },
                                "start": 1083,
                                "end": 1087
                              },
                              "start": 1081,
                              "end": 1087
                            },
                            "start": 1074,
                            "end": 1087
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Either",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1092,
                              "end": 1098
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeLiteral",
                                    "members": [],
                                    "start": 1099,
                                    "end": 1101
                                  },
                                  "start": 1099,
                                  "end": 1103
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1105,
                                    "end": 1106
                                  },
                                  "typeArguments": null,
                                  "start": 1105,
                                  "end": 1106
                                }
                              ],
                              "start": 1098,
                              "end": 1107
                            },
                            "start": 1092,
                            "end": 1107
                          },
                          "start": 1089,
                          "end": 1107
                        },
                        "start": 1063,
                        "end": 1107
                      },
                      "start": 1061,
                      "end": 1107
                    },
                    "start": 1053,
                    "end": 1107
                  },
                  "readonly": true,
                  "static": false,
                  "start": 1044,
                  "end": 1107
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "encode",
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
                            "name": "a",
                            "optional": false,
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
                                  "start": 1193,
                                  "end": 1194
                                },
                                "typeArguments": null,
                                "start": 1193,
                                "end": 1194
                              },
                              "start": 1191,
                              "end": 1194
                            },
                            "start": 1190,
                            "end": 1194
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1199,
                              "end": 1200
                            },
                            "typeArguments": null,
                            "start": 1199,
                            "end": 1200
                          },
                          "start": 1196,
                          "end": 1200
                        },
                        "start": 1189,
                        "end": 1200
                      },
                      "start": 1187,
                      "end": 1200
                    },
                    "start": 1181,
                    "end": 1200
                  },
                  "readonly": true,
                  "static": false,
                  "start": 1172,
                  "end": 1200
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1205,
                "end": 1207
              },
              "expression": false,
              "start": 822,
              "end": 1207
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 811,
            "end": 1207
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "decode",
              "optional": false,
              "typeAnnotation": null,
              "start": 1266,
              "end": 1272
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1276,
                        "end": 1277
                      },
                      "typeArguments": null,
                      "start": 1276,
                      "end": 1277
                    },
                    "start": 1274,
                    "end": 1277
                  },
                  "start": 1273,
                  "end": 1277
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1280,
                    "end": 1286
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1287,
                          "end": 1289
                        },
                        "start": 1287,
                        "end": 1291
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1293,
                          "end": 1294
                        },
                        "typeArguments": null,
                        "start": 1293,
                        "end": 1294
                      }
                    ],
                    "start": 1286,
                    "end": 1295
                  },
                  "start": 1280,
                  "end": 1295
                },
                "start": 1278,
                "end": 1295
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 1305,
                        "end": 1309
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1313,
                        "end": 1316
                      },
                      "start": 1305,
                      "end": 1316
                    },
                    "start": 1298,
                    "end": 1317
                  }
                ],
                "start": 1296,
                "end": 1319
              },
              "expression": false,
              "start": 1272,
              "end": 1319
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1266,
            "end": 1319
          }
        ],
        "start": 750,
        "end": 1321
      },
      "abstract": false,
      "declare": false,
      "start": 716,
      "end": 1321
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Any",
        "optional": false,
        "typeAnnotation": null,
        "start": 1333,
        "end": 1336
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 1345,
            "end": 1349
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 1350,
                "end": 1353
              },
              {
                "type": "TSAnyKeyword",
                "start": 1355,
                "end": 1358
              },
              {
                "type": "TSAnyKeyword",
                "start": 1360,
                "end": 1363
              }
            ],
            "start": 1349,
            "end": 1364
          },
          "start": 1345,
          "end": 1364
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1365,
        "end": 1367
      },
      "declare": false,
      "start": 1323,
      "end": 1367
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 1374,
        "end": 1380
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1381,
              "end": 1382
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Any",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1394
              },
              "typeArguments": null,
              "start": 1391,
              "end": 1394
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1381,
            "end": 1394
          }
        ],
        "start": 1380,
        "end": 1395
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1398,
            "end": 1399
          },
          "typeArguments": null,
          "start": 1398,
          "end": 1399
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "_A",
            "raw": "\"_A\"",
            "start": 1400,
            "end": 1404
          },
          "start": 1400,
          "end": 1404
        },
        "start": 1398,
        "end": 1405
      },
      "declare": false,
      "start": 1369,
      "end": 1406
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1413,
        "end": 1416
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
              "start": 1417,
              "end": 1418
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 1429,
                "end": 1430
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1434,
                    "end": 1440
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1443,
                    "end": 1449
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 1452,
                    "end": 1458
                  }
                ],
                "start": 1434,
                "end": 1458
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Any",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1461,
                  "end": 1464
                },
                "typeArguments": null,
                "start": 1461,
                "end": 1464
              },
              "optional": false,
              "readonly": null,
              "start": 1427,
              "end": 1465
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1417,
            "end": 1465
          }
        ],
        "start": 1416,
        "end": 1466
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1472,
          "end": 1473
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1483,
              "end": 1484
            },
            "typeArguments": null,
            "start": 1483,
            "end": 1484
          },
          "start": 1477,
          "end": 1484
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1487,
            "end": 1493
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
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1494,
                    "end": 1495
                  },
                  "typeArguments": null,
                  "start": 1494,
                  "end": 1495
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1496,
                    "end": 1497
                  },
                  "typeArguments": null,
                  "start": 1496,
                  "end": 1497
                },
                "start": 1494,
                "end": 1498
              }
            ],
            "start": 1493,
            "end": 1499
          },
          "start": 1487,
          "end": 1499
        },
        "optional": false,
        "readonly": null,
        "start": 1469,
        "end": 1501
      },
      "declare": false,
      "start": 1408,
      "end": 1502
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToA",
        "optional": false,
        "typeAnnotation": null,
        "start": 1508,
        "end": 1511
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
              "start": 1512,
              "end": 1513
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1512,
            "end": 1513
          }
        ],
        "start": 1511,
        "end": 1514
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1520,
          "end": 1521
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1531,
              "end": 1532
            },
            "typeArguments": null,
            "start": 1531,
            "end": 1532
          },
          "start": 1525,
          "end": 1532
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 1535,
            "end": 1539
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
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1540,
                    "end": 1541
                  },
                  "typeArguments": null,
                  "start": 1540,
                  "end": 1541
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1542,
                    "end": 1543
                  },
                  "typeArguments": null,
                  "start": 1542,
                  "end": 1543
                },
                "start": 1540,
                "end": 1544
              }
            ],
            "start": 1539,
            "end": 1545
          },
          "start": 1535,
          "end": 1545
        },
        "optional": false,
        "readonly": null,
        "start": 1517,
        "end": 1547
      },
      "declare": false,
      "start": 1503,
      "end": 1548
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NeededInfo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1555,
        "end": 1565
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyNamespaceSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 1566,
              "end": 1583
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 1586,
              "end": 1588
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1566,
            "end": 1588
          }
        ],
        "start": 1565,
        "end": 1589
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
              "name": "ASchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 1596,
              "end": 1603
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ToA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1605,
                  "end": 1608
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyNamespaceSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1609,
                        "end": 1626
                      },
                      "typeArguments": null,
                      "start": 1609,
                      "end": 1626
                    }
                  ],
                  "start": 1608,
                  "end": 1627
                },
                "start": 1605,
                "end": 1627
              },
              "start": 1603,
              "end": 1627
            },
            "accessibility": null,
            "static": false,
            "start": 1596,
            "end": 1628
          }
        ],
        "start": 1592,
        "end": 1630
      },
      "declare": false,
      "start": 1550,
      "end": 1631
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyInfo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1645,
          "end": 1651
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NeededInfo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1654,
            "end": 1664
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ToB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1665,
                  "end": 1668
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
                            "name": "initialize",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1671,
                            "end": 1681
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1683,
                              "end": 1686
                            },
                            "start": 1681,
                            "end": 1686
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1671,
                          "end": 1686
                        }
                      ],
                      "start": 1669,
                      "end": 1688
                    }
                  ],
                  "start": 1668,
                  "end": 1689
                },
                "start": 1665,
                "end": 1689
              }
            ],
            "start": 1664,
            "end": 1690
          },
          "start": 1654,
          "end": 1690
        },
        "declare": false,
        "start": 1640,
        "end": 1691
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1633,
      "end": 1691
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
            "name": "tmp1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1705,
                  "end": 1711
                },
                "typeArguments": null,
                "start": 1705,
                "end": 1711
              },
              "start": 1703,
              "end": 1711
            },
            "start": 1699,
            "end": 1711
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1714,
              "end": 1718
            },
            "start": 1714,
            "end": 1719
          },
          "definite": false,
          "start": 1699,
          "end": 1719
        }
      ],
      "declare": false,
      "start": 1693,
      "end": 1720
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tmp2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1730,
        "end": 1734
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
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1735,
              "end": 1736
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NeededInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1745,
                "end": 1755
              },
              "typeArguments": null,
              "start": 1745,
              "end": 1755
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1735,
            "end": 1755
          }
        ],
        "start": 1734,
        "end": 1756
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 1760,
                "end": 1761
              },
              "typeArguments": null,
              "start": 1760,
              "end": 1761
            },
            "start": 1758,
            "end": 1761
          },
          "start": 1757,
          "end": 1761
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1763,
        "end": 1765
      },
      "expression": false,
      "start": 1721,
      "end": 1765
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Server",
        "optional": false,
        "typeAnnotation": null,
        "start": 1910,
        "end": 1916
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 1917,
              "end": 1918
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NeededInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1927,
                "end": 1937
              },
              "typeArguments": null,
              "start": 1927,
              "end": 1937
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1917,
            "end": 1937
          }
        ],
        "start": 1916,
        "end": 1938
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1939,
        "end": 1941
      },
      "abstract": false,
      "declare": false,
      "start": 1904,
      "end": 1941
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyServer",
          "optional": false,
          "typeAnnotation": null,
          "start": 1955,
          "end": 1963
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Server",
          "optional": false,
          "typeAnnotation": null,
          "start": 1972,
          "end": 1978
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1979,
                "end": 1985
              },
              "typeArguments": null,
              "start": 1979,
              "end": 1985
            }
          ],
          "start": 1978,
          "end": 1986
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 1987,
          "end": 1989
        },
        "abstract": false,
        "declare": false,
        "start": 1949,
        "end": 1989
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1942,
      "end": 1989
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2025
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 5,
    "end": 11,
    "range": [
      5,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "Left",
    "start": 20,
    "end": 24,
    "range": [
      20,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "Right",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52,
    "range": [
      47,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "Left",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 70,
    "end": 78,
    "range": [
      70,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 79,
    "end": 83,
    "range": [
      79,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "String",
    "value": "'Left'",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "String",
    "value": "'Left'",
    "start": 94,
    "end": 100,
    "range": [
      94,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 105,
    "end": 113,
    "range": [
      105,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 114,
    "end": 116,
    "range": [
      114,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 125,
    "end": 133,
    "range": [
      125,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "_L",
    "start": 134,
    "end": 136,
    "range": [
      134,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 145,
    "end": 156,
    "range": [
      145,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 157,
    "end": 165,
    "range": [
      157,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 166,
    "end": 171,
    "range": [
      166,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 245,
    "end": 248,
    "range": [
      245,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 262,
    "end": 264,
    "range": [
      262,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 269,
    "end": 275,
    "range": [
      269,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 290,
    "end": 296,
    "range": [
      290,
      296
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 297,
    "end": 301,
    "range": [
      297,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 302,
    "end": 304,
    "range": [
      302,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 305,
    "end": 308,
    "range": [
      305,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "ap",
    "start": 319,
    "end": 321,
    "range": [
      319,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "fab",
    "start": 325,
    "end": 328,
    "range": [
      325,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 330,
    "end": 336,
    "range": [
      330,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 347,
    "end": 349,
    "range": [
      347,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 355,
    "end": 361,
    "range": [
      355,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 376,
    "end": 382,
    "range": [
      376,
      382
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 383,
    "end": 387,
    "range": [
      383,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 388,
    "end": 390,
    "range": [
      388,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 391,
    "end": 394,
    "range": [
      391,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 404,
    "end": 409,
    "range": [
      404,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "Right",
    "start": 410,
    "end": 415,
    "range": [
      410,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 428,
    "end": 436,
    "range": [
      428,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 437,
    "end": 441,
    "range": [
      437,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "String",
    "value": "'Right'",
    "start": 443,
    "end": 450,
    "range": [
      443,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "String",
    "value": "'Right'",
    "start": 453,
    "end": 460,
    "range": [
      453,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 465,
    "end": 473,
    "range": [
      465,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 474,
    "end": 476,
    "range": [
      474,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 485,
    "end": 493,
    "range": [
      485,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "_L",
    "start": 494,
    "end": 496,
    "range": [
      494,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 505,
    "end": 516,
    "range": [
      505,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 517,
    "end": 525,
    "range": [
      517,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 526,
    "end": 531,
    "range": [
      526,
      531
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
    "value": "A",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 543,
    "end": 546,
    "range": [
      543,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 560,
    "end": 562,
    "range": [
      560,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565,
    "range": [
      564,
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
    "value": "Either",
    "start": 567,
    "end": 573,
    "range": [
      567,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 588,
    "end": 594,
    "range": [
      588,
      594
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 595,
    "end": 598,
    "range": [
      595,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "Right",
    "start": 599,
    "end": 604,
    "range": [
      599,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 607,
    "end": 611,
    "range": [
      607,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 612,
    "end": 617,
    "range": [
      612,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "ap",
    "start": 630,
    "end": 632,
    "range": [
      630,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "fab",
    "start": 636,
    "end": 639,
    "range": [
      636,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 641,
    "end": 647,
    "range": [
      641,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 658,
    "end": 660,
    "range": [
      658,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 666,
    "end": 672,
    "range": [
      666,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 687,
    "end": 693,
    "range": [
      687,
      693
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 694,
    "end": 698,
    "range": [
      694,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 699,
    "end": 701,
    "range": [
      699,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 702,
    "end": 705,
    "range": [
      702,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 716,
    "end": 721,
    "range": [
      716,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 722,
    "end": 726,
    "range": [
      722,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 741,
    "end": 748,
    "range": [
      741,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 754,
    "end": 762,
    "range": [
      754,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 763,
    "end": 765,
    "range": [
      763,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 773,
    "end": 781,
    "range": [
      773,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "_O",
    "start": 782,
    "end": 784,
    "range": [
      782,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 792,
    "end": 800,
    "range": [
      792,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "_I",
    "start": 801,
    "end": 803,
    "range": [
      801,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 811,
    "end": 822,
    "range": [
      811,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 868,
    "end": 876,
    "range": [
      868,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 877,
    "end": 881,
    "range": [
      877,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 883,
    "end": 889,
    "range": [
      883,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 926,
    "end": 934,
    "range": [
      926,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 935,
    "end": 937,
    "range": [
      935,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 943,
    "end": 950,
    "range": [
      943,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 952,
    "end": 954,
    "range": [
      952,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 957,
    "end": 959,
    "range": [
      957,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1044,
    "end": 1052,
    "range": [
      1044,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 1053,
    "end": 1061,
    "range": [
      1053,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1064,
    "end": 1069,
    "range": [
      1064,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1074,
    "end": 1081,
    "range": [
      1074,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1089,
    "end": 1091,
    "range": [
      1089,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 1092,
    "end": 1098,
    "range": [
      1092,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1172,
    "end": 1180,
    "range": [
      1172,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "encode",
    "start": 1181,
    "end": 1187,
    "range": [
      1181,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1196,
    "end": 1198,
    "range": [
      1196,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 1266,
    "end": 1272,
    "range": [
      1266,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 1280,
    "end": 1286,
    "range": [
      1280,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1298,
    "end": 1304,
    "range": [
      1298,
      1304
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1305,
    "end": 1309,
    "range": [
      1305,
      1309
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1310,
    "end": 1312,
    "range": [
      1310,
      1312
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1313,
    "end": 1316,
    "range": [
      1313,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1323,
    "end": 1332,
    "range": [
      1323,
      1332
    ]
  },
  {
    "type": "Identifier",
    "value": "Any",
    "start": 1333,
    "end": 1336,
    "range": [
      1333,
      1336
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1337,
    "end": 1344,
    "range": [
      1337,
      1344
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1345,
    "end": 1349,
    "range": [
      1345,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1350,
    "end": 1353,
    "range": [
      1350,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1355,
    "end": 1358,
    "range": [
      1355,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1360,
    "end": 1363,
    "range": [
      1360,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1369,
    "end": 1373,
    "range": [
      1369,
      1373
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeOf",
    "start": 1374,
    "end": 1380,
    "range": [
      1374,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1383,
    "end": 1390,
    "range": [
      1383,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "Any",
    "start": 1391,
    "end": 1394,
    "range": [
      1391,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "String",
    "value": "\"_A\"",
    "start": 1400,
    "end": 1404,
    "range": [
      1400,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1408,
    "end": 1412,
    "range": [
      1408,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "ToB",
    "start": 1413,
    "end": 1416,
    "range": [
      1413,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1419,
    "end": 1426,
    "range": [
      1419,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1431,
    "end": 1433,
    "range": [
      1431,
      1433
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1434,
    "end": 1440,
    "range": [
      1434,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1443,
    "end": 1449,
    "range": [
      1443,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1452,
    "end": 1458,
    "range": [
      1452,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Identifier",
    "value": "Any",
    "start": 1461,
    "end": 1464,
    "range": [
      1461,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1474,
    "end": 1476,
    "range": [
      1474,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1477,
    "end": 1482,
    "range": [
      1477,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeOf",
    "start": 1487,
    "end": 1493,
    "range": [
      1487,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1503,
    "end": 1507,
    "range": [
      1503,
      1507
    ]
  },
  {
    "type": "Identifier",
    "value": "ToA",
    "start": 1508,
    "end": 1511,
    "range": [
      1508,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1522,
    "end": 1524,
    "range": [
      1522,
      1524
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1525,
    "end": 1530,
    "range": [
      1525,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1535,
    "end": 1539,
    "range": [
      1535,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1550,
    "end": 1554,
    "range": [
      1550,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "NeededInfo",
    "start": 1555,
    "end": 1565,
    "range": [
      1555,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Identifier",
    "value": "MyNamespaceSchema",
    "start": 1566,
    "end": 1583,
    "range": [
      1566,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "ASchema",
    "start": 1596,
    "end": 1603,
    "range": [
      1596,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Identifier",
    "value": "ToA",
    "start": 1605,
    "end": 1608,
    "range": [
      1605,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "MyNamespaceSchema",
    "start": 1609,
    "end": 1626,
    "range": [
      1609,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1633,
    "end": 1639,
    "range": [
      1633,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1640,
    "end": 1644,
    "range": [
      1640,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "MyInfo",
    "start": 1645,
    "end": 1651,
    "range": [
      1645,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Identifier",
    "value": "NeededInfo",
    "start": 1654,
    "end": 1664,
    "range": [
      1654,
      1664
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Identifier",
    "value": "ToB",
    "start": 1665,
    "end": 1668,
    "range": [
      1665,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "initialize",
    "start": 1671,
    "end": 1681,
    "range": [
      1671,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1683,
    "end": 1686,
    "range": [
      1683,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1693,
    "end": 1698,
    "range": [
      1693,
      1698
    ]
  },
  {
    "type": "Identifier",
    "value": "tmp1",
    "start": 1699,
    "end": 1703,
    "range": [
      1699,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "MyInfo",
    "start": 1705,
    "end": 1711,
    "range": [
      1705,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1714,
    "end": 1718,
    "range": [
      1714,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1721,
    "end": 1729,
    "range": [
      1721,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "tmp2",
    "start": 1730,
    "end": 1734,
    "range": [
      1730,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1737,
    "end": 1744,
    "range": [
      1737,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "NeededInfo",
    "start": 1745,
    "end": 1755,
    "range": [
      1745,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1904,
    "end": 1909,
    "range": [
      1904,
      1909
    ]
  },
  {
    "type": "Identifier",
    "value": "Server",
    "start": 1910,
    "end": 1916,
    "range": [
      1910,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1919,
    "end": 1926,
    "range": [
      1919,
      1926
    ]
  },
  {
    "type": "Identifier",
    "value": "NeededInfo",
    "start": 1927,
    "end": 1937,
    "range": [
      1927,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1942,
    "end": 1948,
    "range": [
      1942,
      1948
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1949,
    "end": 1954,
    "range": [
      1949,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "MyServer",
    "start": 1955,
    "end": 1963,
    "range": [
      1955,
      1963
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1964,
    "end": 1971,
    "range": [
      1964,
      1971
    ]
  },
  {
    "type": "Identifier",
    "value": "Server",
    "start": 1972,
    "end": 1978,
    "range": [
      1972,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "MyInfo",
    "start": 1979,
    "end": 1985,
    "range": [
      1979,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  }
]
```
