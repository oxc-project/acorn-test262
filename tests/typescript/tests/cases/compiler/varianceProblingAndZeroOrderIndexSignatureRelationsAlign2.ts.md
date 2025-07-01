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
