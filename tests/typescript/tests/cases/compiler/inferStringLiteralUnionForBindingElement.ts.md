__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
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
              "start": 22,
              "end": 23
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 32,
              "end": 38
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 38
          }
        ],
        "start": 21,
        "end": 39
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
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 51
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 53,
                          "end": 54
                        },
                        "typeArguments": null,
                        "start": 53,
                        "end": 54
                      },
                      "start": 53,
                      "end": 56
                    },
                    "start": 51,
                    "end": 56
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 47,
                  "end": 56
                }
              ],
              "start": 45,
              "end": 58
            },
            "start": 43,
            "end": 58
          },
          "start": 40,
          "end": 58
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 76
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 79
                    },
                    "typeArguments": null,
                    "start": 78,
                    "end": 79
                  },
                  "start": 78,
                  "end": 81
                },
                "start": 76,
                "end": 81
              },
              "accessibility": null,
              "static": false,
              "start": 63,
              "end": 82
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "firstKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 100
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
                    "start": 102,
                    "end": 103
                  },
                  "typeArguments": null,
                  "start": 102,
                  "end": 103
                },
                "start": 100,
                "end": 103
              },
              "accessibility": null,
              "static": false,
              "start": 83,
              "end": 104
            }
          ],
          "start": 61,
          "end": 106
        },
        "start": 59,
        "end": 106
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 107
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 123
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 148
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 148
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 140,
                      "end": 148
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 150
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 157
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
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 159,
                            "end": 163
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "aa",
                                "raw": "\"aa\"",
                                "start": 166,
                                "end": 170
                              },
                              {
                                "type": "Literal",
                                "value": "bb",
                                "raw": "\"bb\"",
                                "start": 172,
                                "end": 176
                              }
                            ],
                            "start": 165,
                            "end": 177
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 159,
                          "end": 177
                        }
                      ],
                      "start": 158,
                      "end": 178
                    }
                  ],
                  "optional": false,
                  "start": 153,
                  "end": 179
                },
                "definite": false,
                "start": 138,
                "end": 179
              }
            ],
            "declare": false,
            "start": 132,
            "end": 179
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "aa",
                            "raw": "\"aa\"",
                            "start": 193,
                            "end": 197
                          },
                          "start": 193,
                          "end": 197
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bb",
                            "raw": "\"bb\"",
                            "start": 200,
                            "end": 204
                          },
                          "start": 200,
                          "end": 204
                        }
                      ],
                      "start": 193,
                      "end": 204
                    },
                    "start": 191,
                    "end": 204
                  },
                  "start": 190,
                  "end": 204
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "firstKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 215
                },
                "definite": false,
                "start": 190,
                "end": 215
              }
            ],
            "declare": false,
            "start": 184,
            "end": 216
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 234
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 234
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 230,
                      "end": 234
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 236
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 243
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
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 245,
                            "end": 249
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "aa",
                                "raw": "\"aa\"",
                                "start": 252,
                                "end": 256
                              },
                              {
                                "type": "Literal",
                                "value": "bb",
                                "raw": "\"bb\"",
                                "start": 258,
                                "end": 262
                              }
                            ],
                            "start": 251,
                            "end": 263
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 245,
                          "end": 263
                        }
                      ],
                      "start": 244,
                      "end": 264
                    }
                  ],
                  "optional": false,
                  "start": 239,
                  "end": 265
                },
                "definite": false,
                "start": 228,
                "end": 265
              }
            ],
            "declare": false,
            "start": 222,
            "end": 265
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "aa",
                              "raw": "\"aa\"",
                              "start": 280,
                              "end": 284
                            },
                            "start": 280,
                            "end": 284
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bb",
                              "raw": "\"bb\"",
                              "start": 287,
                              "end": 291
                            },
                            "start": 287,
                            "end": 291
                          }
                        ],
                        "start": 280,
                        "end": 291
                      },
                      "start": 279,
                      "end": 294
                    },
                    "start": 277,
                    "end": 294
                  },
                  "start": 276,
                  "end": 294
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 301
                },
                "definite": false,
                "start": 276,
                "end": 301
              }
            ],
            "declare": false,
            "start": 270,
            "end": 302
          }
        ],
        "start": 126,
        "end": 304
      },
      "expression": false,
      "start": 109,
      "end": 304
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 322
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 339,
                        "end": 343
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 339,
                        "end": 343
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 339,
                      "end": 343
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 353
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 353
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 345,
                      "end": 353
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 355
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 362
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
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 364,
                            "end": 368
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "aa",
                                "raw": "\"aa\"",
                                "start": 371,
                                "end": 375
                              },
                              {
                                "type": "Literal",
                                "value": "bb",
                                "raw": "\"bb\"",
                                "start": 377,
                                "end": 381
                              }
                            ],
                            "start": 370,
                            "end": 382
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 364,
                          "end": 382
                        }
                      ],
                      "start": 363,
                      "end": 383
                    }
                  ],
                  "optional": false,
                  "start": 358,
                  "end": 384
                },
                "definite": false,
                "start": 337,
                "end": 384
              }
            ],
            "declare": false,
            "start": 331,
            "end": 384
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "aa",
                            "raw": "\"aa\"",
                            "start": 398,
                            "end": 402
                          },
                          "start": 398,
                          "end": 402
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bb",
                            "raw": "\"bb\"",
                            "start": 405,
                            "end": 409
                          },
                          "start": 405,
                          "end": 409
                        }
                      ],
                      "start": 398,
                      "end": 409
                    },
                    "start": 396,
                    "end": 409
                  },
                  "start": 395,
                  "end": 409
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "firstKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 420
                },
                "definite": false,
                "start": 395,
                "end": 420
              }
            ],
            "declare": false,
            "start": 389,
            "end": 421
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "aa",
                              "raw": "\"aa\"",
                              "start": 436,
                              "end": 440
                            },
                            "start": 436,
                            "end": 440
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bb",
                              "raw": "\"bb\"",
                              "start": 443,
                              "end": 447
                            },
                            "start": 443,
                            "end": 447
                          }
                        ],
                        "start": 436,
                        "end": 447
                      },
                      "start": 435,
                      "end": 450
                    },
                    "start": 433,
                    "end": 450
                  },
                  "start": 432,
                  "end": 450
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 457
                },
                "definite": false,
                "start": 432,
                "end": 457
              }
            ],
            "declare": false,
            "start": 426,
            "end": 458
          }
        ],
        "start": 325,
        "end": 460
      },
      "expression": false,
      "start": 308,
      "end": 460
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 476
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 492
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 495,
                    "end": 499
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
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 501,
                            "end": 505
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "aa",
                                "raw": "\"aa\"",
                                "start": 508,
                                "end": 512
                              },
                              {
                                "type": "Literal",
                                "value": "bb",
                                "raw": "\"bb\"",
                                "start": 514,
                                "end": 518
                              }
                            ],
                            "start": 507,
                            "end": 519
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 501,
                          "end": 519
                        }
                      ],
                      "start": 500,
                      "end": 520
                    }
                  ],
                  "optional": false,
                  "start": 495,
                  "end": 521
                },
                "definite": false,
                "start": 491,
                "end": 521
              }
            ],
            "declare": false,
            "start": 485,
            "end": 521
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "aa",
                            "raw": "\"aa\"",
                            "start": 535,
                            "end": 539
                          },
                          "start": 535,
                          "end": 539
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bb",
                            "raw": "\"bb\"",
                            "start": 542,
                            "end": 546
                          },
                          "start": 542,
                          "end": 546
                        }
                      ],
                      "start": 535,
                      "end": 546
                    },
                    "start": 533,
                    "end": 546
                  },
                  "start": 532,
                  "end": 546
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 550
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "firstKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 551,
                    "end": 559
                  },
                  "optional": false,
                  "computed": false,
                  "start": 549,
                  "end": 559
                },
                "definite": false,
                "start": 532,
                "end": 559
              }
            ],
            "declare": false,
            "start": 526,
            "end": 560
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "aa",
                              "raw": "\"aa\"",
                              "start": 575,
                              "end": 579
                            },
                            "start": 575,
                            "end": 579
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bb",
                              "raw": "\"bb\"",
                              "start": 582,
                              "end": 586
                            },
                            "start": 582,
                            "end": 586
                          }
                        ],
                        "start": 575,
                        "end": 586
                      },
                      "start": 574,
                      "end": 589
                    },
                    "start": 572,
                    "end": 589
                  },
                  "start": 571,
                  "end": 589
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 593
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 598
                  },
                  "optional": false,
                  "computed": false,
                  "start": 592,
                  "end": 598
                },
                "definite": false,
                "start": 571,
                "end": 598
              }
            ],
            "declare": false,
            "start": 565,
            "end": 599
          }
        ],
        "start": 479,
        "end": 601
      },
      "expression": false,
      "start": 462,
      "end": 601
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 601
}
```
