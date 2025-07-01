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
        "name": "test",
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
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 21,
        "end": 24
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
                          "start": 36,
                          "end": 42
                        },
                        "start": 34,
                        "end": 42
                      },
                      "start": 31,
                      "end": 42
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
                        "start": 45,
                        "end": 46
                      },
                      "typeArguments": null,
                      "start": 45,
                      "end": 46
                    },
                    "start": 43,
                    "end": 46
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 30,
                  "end": 46
                }
              ],
              "start": 28,
              "end": 48
            },
            "start": 26,
            "end": 48
          },
          "start": 25,
          "end": 48
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
            "start": 51,
            "end": 52
          },
          "typeArguments": null,
          "start": 51,
          "end": 52
        },
        "start": 49,
        "end": 52
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 53
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
            "name": "x1",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 74
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      },
                      "start": 75,
                      "end": 83
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 73,
                    "end": 84
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 86
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 89,
                        "end": 95
                      },
                      "start": 87,
                      "end": 95
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 85,
                    "end": 95
                  }
                ],
                "start": 71,
                "end": 97
              },
              "start": 69,
              "end": 97
            },
            "start": 67,
            "end": 97
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 97
        }
      ],
      "declare": true,
      "start": 55,
      "end": 98
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
            "name": "x2",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 118
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
                      "start": 119,
                      "end": 127
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 117,
                    "end": 128
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 130
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 133,
                            "end": 139
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 142,
                            "end": 151
                          }
                        ],
                        "start": 133,
                        "end": 151
                      },
                      "start": 131,
                      "end": 151
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 129,
                    "end": 151
                  }
                ],
                "start": 115,
                "end": 153
              },
              "start": 113,
              "end": 153
            },
            "start": 111,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 111,
          "end": 153
        }
      ],
      "declare": true,
      "start": 99,
      "end": 154
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 164
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 171
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 174
              }
            ],
            "optional": false,
            "start": 167,
            "end": 175
          },
          "definite": false,
          "start": 162,
          "end": 175
        }
      ],
      "declare": false,
      "start": 156,
      "end": 176
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 185
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 192
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 195
              }
            ],
            "optional": false,
            "start": 188,
            "end": 196
          },
          "definite": false,
          "start": 183,
          "end": 196
        }
      ],
      "declare": false,
      "start": 177,
      "end": 197
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 215
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
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 219
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 222,
                              "end": 228
                            },
                            "start": 220,
                            "end": 228
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 218,
                          "end": 229
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 230,
                            "end": 231
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 234,
                              "end": 240
                            },
                            "start": 232,
                            "end": 240
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 230,
                          "end": 240
                        }
                      ],
                      "start": 216,
                      "end": 242
                    }
                  ],
                  "start": 215,
                  "end": 243
                },
                "start": 207,
                "end": 243
              },
              "start": 205,
              "end": 243
            },
            "start": 203,
            "end": 243
          },
          "init": null,
          "definite": false,
          "start": 203,
          "end": 243
        }
      ],
      "declare": false,
      "start": 199,
      "end": 244
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
            "name": "v1",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 256
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 258,
                        "end": 264
                      },
                      "start": 256,
                      "end": 264
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 255,
                    "end": 265
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 269,
                        "end": 275
                      },
                      "start": 267,
                      "end": 275
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 266,
                    "end": 275
                  }
                ],
                "start": 253,
                "end": 277
              },
              "start": 251,
              "end": 277
            },
            "start": 249,
            "end": 277
          },
          "init": null,
          "definite": false,
          "start": 249,
          "end": 277
        }
      ],
      "declare": false,
      "start": 245,
      "end": 278
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 296
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
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 299,
                            "end": 300
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 303,
                              "end": 309
                            },
                            "start": 301,
                            "end": 309
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 299,
                          "end": 310
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 311,
                            "end": 312
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 315,
                                  "end": 321
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 324,
                                  "end": 333
                                }
                              ],
                              "start": 315,
                              "end": 333
                            },
                            "start": 313,
                            "end": 333
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 311,
                          "end": 333
                        }
                      ],
                      "start": 297,
                      "end": 335
                    }
                  ],
                  "start": 296,
                  "end": 336
                },
                "start": 288,
                "end": 336
              },
              "start": 286,
              "end": 336
            },
            "start": 284,
            "end": 336
          },
          "init": null,
          "definite": false,
          "start": 284,
          "end": 336
        }
      ],
      "declare": false,
      "start": 280,
      "end": 337
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
            "name": "v2",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 348,
                      "end": 349
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
                    "start": 348,
                    "end": 358
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 360
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 362,
                            "end": 368
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 371,
                            "end": 380
                          }
                        ],
                        "start": 362,
                        "end": 380
                      },
                      "start": 360,
                      "end": 380
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 359,
                    "end": 380
                  }
                ],
                "start": 346,
                "end": 382
              },
              "start": 344,
              "end": 382
            },
            "start": 342,
            "end": 382
          },
          "init": null,
          "definite": false,
          "start": 342,
          "end": 382
        }
      ],
      "declare": false,
      "start": 338,
      "end": 383
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 400
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 403,
                            "end": 404
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 406,
                              "end": 412
                            },
                            "start": 404,
                            "end": 412
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 403,
                          "end": 413
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 414,
                            "end": 415
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 417,
                              "end": 423
                            },
                            "start": 415,
                            "end": 423
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 414,
                          "end": 423
                        }
                      ],
                      "start": 401,
                      "end": 425
                    }
                  ],
                  "start": 400,
                  "end": 426
                },
                "start": 393,
                "end": 426
              },
              "start": 391,
              "end": 426
            },
            "start": 389,
            "end": 426
          },
          "init": null,
          "definite": false,
          "start": 389,
          "end": 426
        }
      ],
      "declare": false,
      "start": 385,
      "end": 427
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
            "name": "v3",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 438,
                      "end": 439
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
                    "start": 438,
                    "end": 449
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 450,
                      "end": 451
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 454,
                        "end": 460
                      },
                      "start": 452,
                      "end": 460
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 450,
                    "end": 460
                  }
                ],
                "start": 436,
                "end": 462
              },
              "start": 434,
              "end": 462
            },
            "start": 432,
            "end": 462
          },
          "init": null,
          "definite": false,
          "start": 432,
          "end": 462
        }
      ],
      "declare": false,
      "start": 428,
      "end": 463
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
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 480
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 483,
                            "end": 484
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 486,
                              "end": 492
                            },
                            "start": 484,
                            "end": 492
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 483,
                          "end": 493
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 494,
                            "end": 495
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 497,
                                  "end": 503
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 506,
                                  "end": 515
                                }
                              ],
                              "start": 497,
                              "end": 515
                            },
                            "start": 495,
                            "end": 515
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 494,
                          "end": 515
                        }
                      ],
                      "start": 481,
                      "end": 517
                    }
                  ],
                  "start": 480,
                  "end": 518
                },
                "start": 473,
                "end": 518
              },
              "start": 471,
              "end": 518
            },
            "start": 469,
            "end": 518
          },
          "init": null,
          "definite": false,
          "start": 469,
          "end": 518
        }
      ],
      "declare": false,
      "start": 465,
      "end": 519
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
            "name": "v4",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 530,
                      "end": 531
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 534,
                        "end": 540
                      },
                      "start": 532,
                      "end": 540
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 530,
                    "end": 541
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 542,
                      "end": 543
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 546,
                            "end": 552
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 555,
                            "end": 564
                          }
                        ],
                        "start": 546,
                        "end": 564
                      },
                      "start": 544,
                      "end": 564
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 542,
                    "end": 564
                  }
                ],
                "start": 528,
                "end": 566
              },
              "start": 526,
              "end": 566
            },
            "start": 524,
            "end": 566
          },
          "init": null,
          "definite": false,
          "start": 524,
          "end": 566
        }
      ],
      "declare": false,
      "start": 520,
      "end": 567
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
            "name": "v5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 585
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 593
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 596,
                                  "end": 597
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 599,
                                    "end": 605
                                  },
                                  "start": 597,
                                  "end": 605
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 596,
                                "end": 606
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 607,
                                  "end": 608
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 610,
                                    "end": 616
                                  },
                                  "start": 608,
                                  "end": 616
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 607,
                                "end": 616
                              }
                            ],
                            "start": 594,
                            "end": 618
                          }
                        ],
                        "start": 593,
                        "end": 619
                      },
                      "start": 586,
                      "end": 619
                    }
                  ],
                  "start": 585,
                  "end": 620
                },
                "start": 577,
                "end": 620
              },
              "start": 575,
              "end": 620
            },
            "start": 573,
            "end": 620
          },
          "init": null,
          "definite": false,
          "start": 573,
          "end": 620
        }
      ],
      "declare": false,
      "start": 569,
      "end": 621
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
            "name": "v5",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 632,
                      "end": 633
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 635,
                        "end": 641
                      },
                      "start": 633,
                      "end": 641
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 632,
                    "end": 642
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 643,
                      "end": 644
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 646,
                        "end": 652
                      },
                      "start": 644,
                      "end": 652
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 643,
                    "end": 652
                  }
                ],
                "start": 630,
                "end": 654
              },
              "start": 628,
              "end": 654
            },
            "start": 626,
            "end": 654
          },
          "init": null,
          "definite": false,
          "start": 626,
          "end": 654
        }
      ],
      "declare": false,
      "start": 622,
      "end": 655
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
            "name": "v6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 673
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 674,
                        "end": 681
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 684,
                                  "end": 685
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 687,
                                    "end": 693
                                  },
                                  "start": 685,
                                  "end": 693
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 684,
                                "end": 694
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 695,
                                  "end": 696
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 698,
                                        "end": 704
                                      },
                                      {
                                        "type": "TSUndefinedKeyword",
                                        "start": 707,
                                        "end": 716
                                      }
                                    ],
                                    "start": 698,
                                    "end": 716
                                  },
                                  "start": 696,
                                  "end": 716
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 695,
                                "end": 716
                              }
                            ],
                            "start": 682,
                            "end": 718
                          }
                        ],
                        "start": 681,
                        "end": 719
                      },
                      "start": 674,
                      "end": 719
                    }
                  ],
                  "start": 673,
                  "end": 720
                },
                "start": 665,
                "end": 720
              },
              "start": 663,
              "end": 720
            },
            "start": 661,
            "end": 720
          },
          "init": null,
          "definite": false,
          "start": 661,
          "end": 720
        }
      ],
      "declare": false,
      "start": 657,
      "end": 721
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
            "name": "v6",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 732,
                      "end": 733
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 735,
                        "end": 741
                      },
                      "start": 733,
                      "end": 741
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 732,
                    "end": 742
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 744
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 746,
                            "end": 752
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 755,
                            "end": 764
                          }
                        ],
                        "start": 746,
                        "end": 764
                      },
                      "start": 744,
                      "end": 764
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 743,
                    "end": 764
                  }
                ],
                "start": 730,
                "end": 766
              },
              "start": 728,
              "end": 766
            },
            "start": 726,
            "end": 766
          },
          "init": null,
          "definite": false,
          "start": 726,
          "end": 766
        }
      ],
      "declare": false,
      "start": 722,
      "end": 767
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 767
}
```
