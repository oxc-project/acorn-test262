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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "accessibility": null,
            "static": false,
            "start": 13,
            "end": 24
          }
        ],
        "start": 11,
        "end": 26
      },
      "declare": false,
      "start": 0,
      "end": 27
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
            "name": "boo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 42
                },
                "typeArguments": null,
                "start": 39,
                "end": 42
              },
              "start": 37,
              "end": 42
            },
            "start": 34,
            "end": 42
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 50
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 52,
                  "end": 57
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 47,
                "end": 57
              }
            ],
            "start": 45,
            "end": 59
          },
          "definite": false,
          "start": 34,
          "end": 59
        }
      ],
      "declare": false,
      "start": 28,
      "end": 60
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 72
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aboo1",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 84
              },
              "typeArguments": null,
              "start": 81,
              "end": 84
            },
            "start": 79,
            "end": 84
          },
          "start": 73,
          "end": 84
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "aboo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 102
              },
              "prefix": true,
              "start": 96,
              "end": 102
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 104,
              "end": 111
            },
            "alternate": null,
            "start": 92,
            "end": 111
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
                  "name": "aboo2",
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
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 137,
                                  "end": 143
                                },
                                "start": 135,
                                "end": 143
                              },
                              "start": 132,
                              "end": 143
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "aboo1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 153,
                                  "end": 158
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 159,
                                  "end": 162
                                },
                                "start": 153,
                                "end": 162
                              },
                              "typeArguments": null,
                              "start": 146,
                              "end": 162
                            },
                            "start": 144,
                            "end": 162
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 131,
                          "end": 162
                        }
                      ],
                      "start": 129,
                      "end": 164
                    },
                    "start": 127,
                    "end": 164
                  },
                  "start": 122,
                  "end": 164
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 170
                },
                "definite": false,
                "start": 122,
                "end": 170
              }
            ],
            "declare": false,
            "start": 116,
            "end": 171
          }
        ],
        "start": 86,
        "end": 173
      },
      "expression": false,
      "start": 62,
      "end": 173
    },
    {
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 193
                    },
                    "typeArguments": null,
                    "start": 190,
                    "end": 193
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 196,
                    "end": 205
                  }
                ],
                "start": 190,
                "end": 205
              },
              "start": 188,
              "end": 205
            },
            "start": 187,
            "end": 205
          },
          "init": null,
          "definite": false,
          "start": 187,
          "end": 205
        }
      ],
      "declare": true,
      "start": 175,
      "end": 206
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 212
      },
      "consequent": {
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
                  "name": "bboo",
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
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 240,
                                  "end": 246
                                },
                                "start": 238,
                                "end": 246
                              },
                              "start": 235,
                              "end": 246
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 256,
                                  "end": 257
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 258,
                                  "end": 261
                                },
                                "start": 256,
                                "end": 261
                              },
                              "typeArguments": null,
                              "start": 249,
                              "end": 261
                            },
                            "start": 247,
                            "end": 261
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 234,
                          "end": 261
                        }
                      ],
                      "start": 232,
                      "end": 263
                    },
                    "start": 230,
                    "end": 263
                  },
                  "start": 226,
                  "end": 263
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 269
                },
                "definite": false,
                "start": 226,
                "end": 269
              }
            ],
            "declare": false,
            "start": 220,
            "end": 270
          }
        ],
        "start": 214,
        "end": 272
      },
      "alternate": null,
      "start": 207,
      "end": 272
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
          "start": 273,
          "end": 274
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "boo",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 280
        },
        "start": 273,
        "end": 280
      },
      "directive": null,
      "start": 273,
      "end": 281
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
            "name": "bboo",
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 302,
                            "end": 308
                          },
                          "start": 300,
                          "end": 308
                        },
                        "start": 297,
                        "end": 308
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 318,
                            "end": 319
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 320,
                            "end": 323
                          },
                          "start": 318,
                          "end": 323
                        },
                        "typeArguments": null,
                        "start": 311,
                        "end": 323
                      },
                      "start": 309,
                      "end": 323
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 296,
                    "end": 323
                  }
                ],
                "start": 294,
                "end": 325
              },
              "start": 292,
              "end": 325
            },
            "start": 288,
            "end": 325
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "boo",
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 331
          },
          "definite": false,
          "start": 288,
          "end": 331
        }
      ],
      "declare": false,
      "start": 282,
      "end": 332
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 349,
                    "end": 355
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 358,
                    "end": 364
                  }
                ],
                "start": 349,
                "end": 364
              },
              "start": 347,
              "end": 364
            },
            "start": 346,
            "end": 364
          },
          "init": null,
          "definite": false,
          "start": 346,
          "end": 364
        }
      ],
      "declare": true,
      "start": 334,
      "end": 365
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 378
          },
          "prefix": true,
          "start": 370,
          "end": 378
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "'string'",
          "start": 383,
          "end": 391
        },
        "start": 370,
        "end": 391
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 416,
                          "end": 422
                        },
                        "start": 414,
                        "end": 422
                      },
                      "start": 411,
                      "end": 422
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 432,
                        "end": 433
                      },
                      "typeArguments": null,
                      "start": 425,
                      "end": 433
                    },
                    "start": 423,
                    "end": 433
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 410,
                  "end": 433
                }
              ],
              "start": 408,
              "end": 435
            },
            "declare": false,
            "start": 399,
            "end": 436
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
                  "name": "boo1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 454
                      },
                      "typeArguments": null,
                      "start": 453,
                      "end": 454
                    },
                    "start": 451,
                    "end": 454
                  },
                  "start": 447,
                  "end": 454
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 462
                      },
                      "value": {
                        "type": "Literal",
                        "value": "works",
                        "raw": "'works'",
                        "start": 464,
                        "end": 471
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 459,
                      "end": 471
                    }
                  ],
                  "start": 457,
                  "end": 473
                },
                "definite": false,
                "start": 447,
                "end": 473
              }
            ],
            "declare": false,
            "start": 441,
            "end": 474
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
                  "name": "boo2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 492
                      },
                      "typeArguments": null,
                      "start": 491,
                      "end": 492
                    },
                    "start": 489,
                    "end": 492
                  },
                  "start": 485,
                  "end": 492
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 497,
                        "end": 500
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 502,
                        "end": 503
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 497,
                      "end": 503
                    }
                  ],
                  "start": 495,
                  "end": 505
                },
                "definite": false,
                "start": 485,
                "end": 505
              }
            ],
            "declare": false,
            "start": 479,
            "end": 506
          }
        ],
        "start": 393,
        "end": 524
      },
      "alternate": null,
      "start": 366,
      "end": 524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 524
}
```
