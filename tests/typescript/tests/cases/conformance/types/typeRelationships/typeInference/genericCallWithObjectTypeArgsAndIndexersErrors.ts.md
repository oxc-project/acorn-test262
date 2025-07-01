__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 80
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
              "start": 81,
              "end": 82
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 81,
            "end": 82
          }
        ],
        "start": 80,
        "end": 83
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "typeArguments": null,
              "start": 87,
              "end": 88
            },
            "start": 85,
            "end": 88
          },
          "start": 84,
          "end": 88
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "start": 96,
            "end": 105
          }
        ],
        "start": 90,
        "end": 107
      },
      "expression": false,
      "start": 68,
      "end": 107
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 123
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
              "start": 124,
              "end": 125
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 124,
            "end": 125
          }
        ],
        "start": 123,
        "end": 126
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
                "start": 132,
                "end": 133
              },
              "typeArguments": null,
              "start": 132,
              "end": 133
            },
            "start": 130,
            "end": 133
          },
          "start": 127,
          "end": 133
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 162,
                                  "end": 168
                                },
                                "start": 160,
                                "end": 168
                              },
                              "start": 159,
                              "end": 168
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 171,
                                "end": 177
                              },
                              "typeArguments": null,
                              "start": 171,
                              "end": 177
                            },
                            "start": 169,
                            "end": 177
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 158,
                          "end": 178
                        },
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 191,
                                  "end": 197
                                },
                                "start": 189,
                                "end": 197
                              },
                              "start": 188,
                              "end": 197
                            }
                          ],
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
                                "start": 200,
                                "end": 201
                              },
                              "typeArguments": null,
                              "start": 200,
                              "end": 201
                            },
                            "start": 198,
                            "end": 201
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 187,
                          "end": 202
                        }
                      ],
                      "start": 148,
                      "end": 272
                    },
                    "start": 146,
                    "end": 272
                  },
                  "start": 145,
                  "end": 272
                },
                "init": null,
                "definite": false,
                "start": 145,
                "end": 272
              }
            ],
            "declare": false,
            "start": 141,
            "end": 273
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 284
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 290
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    }
                  ],
                  "optional": false,
                  "start": 287,
                  "end": 293
                },
                "definite": false,
                "start": 282,
                "end": 293
              }
            ],
            "declare": false,
            "start": 278,
            "end": 294
          }
        ],
        "start": 135,
        "end": 301
      },
      "expression": false,
      "start": 109,
      "end": 301
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other3",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 318
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
              "start": 319,
              "end": 320
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 330
              },
              "typeArguments": null,
              "start": 329,
              "end": 330
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 319,
            "end": 330
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 333
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 346
              },
              "typeArguments": null,
              "start": 342,
              "end": 346
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 346
          }
        ],
        "start": 318,
        "end": 347
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
                "start": 353,
                "end": 354
              },
              "typeArguments": null,
              "start": 353,
              "end": 354
            },
            "start": 351,
            "end": 354
          },
          "start": 348,
          "end": 354
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 383,
                                  "end": 389
                                },
                                "start": 381,
                                "end": 389
                              },
                              "start": 380,
                              "end": 389
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 392,
                                "end": 398
                              },
                              "typeArguments": null,
                              "start": 392,
                              "end": 398
                            },
                            "start": 390,
                            "end": 398
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 379,
                          "end": 399
                        },
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 412,
                                  "end": 418
                                },
                                "start": 410,
                                "end": 418
                              },
                              "start": 409,
                              "end": 418
                            }
                          ],
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
                                "start": 421,
                                "end": 422
                              },
                              "typeArguments": null,
                              "start": 421,
                              "end": 422
                            },
                            "start": 419,
                            "end": 422
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 408,
                          "end": 423
                        }
                      ],
                      "start": 369,
                      "end": 429
                    },
                    "start": 367,
                    "end": 429
                  },
                  "start": 366,
                  "end": 429
                },
                "init": null,
                "definite": false,
                "start": 366,
                "end": 429
              }
            ],
            "declare": false,
            "start": 362,
            "end": 430
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 441
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 447
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 448,
                      "end": 449
                    }
                  ],
                  "optional": false,
                  "start": 444,
                  "end": 450
                },
                "definite": false,
                "start": 439,
                "end": 450
              }
            ],
            "declare": false,
            "start": 435,
            "end": 451
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 461
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 466
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 467,
                    "end": 468
                  },
                  "optional": false,
                  "computed": true,
                  "start": 464,
                  "end": 469
                },
                "definite": false,
                "start": 460,
                "end": 469
              }
            ],
            "declare": false,
            "start": 456,
            "end": 470
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 480
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 485
                  },
                  "property": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 486,
                    "end": 489
                  },
                  "optional": false,
                  "computed": true,
                  "start": 483,
                  "end": 490
                },
                "definite": false,
                "start": 479,
                "end": 490
              }
            ],
            "declare": false,
            "start": 475,
            "end": 491
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 504
                      },
                      "typeArguments": null,
                      "start": 503,
                      "end": 504
                    },
                    "start": 501,
                    "end": 504
                  },
                  "start": 500,
                  "end": 504
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 507,
                    "end": 509
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 510,
                    "end": 511
                  },
                  "optional": false,
                  "computed": true,
                  "start": 507,
                  "end": 512
                },
                "definite": false,
                "start": 500,
                "end": 512
              }
            ],
            "declare": false,
            "start": 496,
            "end": 513
          }
        ],
        "start": 356,
        "end": 521
      },
      "expression": false,
      "start": 303,
      "end": 521
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 521
}
```
