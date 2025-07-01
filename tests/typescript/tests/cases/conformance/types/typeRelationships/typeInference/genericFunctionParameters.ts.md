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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 28,
                      "end": 29
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 28,
                    "end": 29
                  }
                ],
                "start": 27,
                "end": 30
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
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 34,
                        "end": 35
                      },
                      "typeArguments": null,
                      "start": 34,
                      "end": 35
                    },
                    "start": 32,
                    "end": 35
                  },
                  "start": 31,
                  "end": 35
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
                    "start": 40,
                    "end": 41
                  },
                  "typeArguments": null,
                  "start": 40,
                  "end": 41
                },
                "start": 37,
                "end": 41
              },
              "start": 27,
              "end": 41
            },
            "start": 25,
            "end": 41
          },
          "start": 23,
          "end": 41
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
            "start": 44,
            "end": 45
          },
          "typeArguments": null,
          "start": 44,
          "end": 45
        },
        "start": 42,
        "end": 45
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 66
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
              "start": 67,
              "end": 68
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 68
          }
        ],
        "start": 66,
        "end": 69
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 76
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 75,
                    "end": 91
                  }
                ],
                "start": 74,
                "end": 92
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
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 96,
                        "end": 97
                      },
                      "typeArguments": null,
                      "start": 96,
                      "end": 97
                    },
                    "start": 94,
                    "end": 97
                  },
                  "start": 93,
                  "end": 97
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
                    "start": 102,
                    "end": 103
                  },
                  "typeArguments": null,
                  "start": 102,
                  "end": 103
                },
                "start": 99,
                "end": 103
              },
              "start": 74,
              "end": 103
            },
            "start": 72,
            "end": 103
          },
          "start": 70,
          "end": 103
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
            "start": 106,
            "end": 107
          },
          "typeArguments": null,
          "start": 106,
          "end": 107
        },
        "start": 104,
        "end": 107
      },
      "body": null,
      "expression": false,
      "start": 47,
      "end": 108
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 128
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
              "start": 129,
              "end": 130
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 129,
            "end": 130
          }
        ],
        "start": 128,
        "end": 131
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 138
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 152
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 153,
                              "end": 154
                            },
                            "typeArguments": null,
                            "start": 153,
                            "end": 154
                          }
                        ],
                        "start": 152,
                        "end": 155
                      },
                      "start": 147,
                      "end": 155
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 137,
                    "end": 155
                  }
                ],
                "start": 136,
                "end": 156
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
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 161
                      },
                      "typeArguments": null,
                      "start": 160,
                      "end": 161
                    },
                    "start": 158,
                    "end": 161
                  },
                  "start": 157,
                  "end": 161
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
                    "start": 166,
                    "end": 167
                  },
                  "typeArguments": null,
                  "start": 166,
                  "end": 167
                },
                "start": 163,
                "end": 167
              },
              "start": 136,
              "end": 167
            },
            "start": 134,
            "end": 167
          },
          "start": 132,
          "end": 167
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
            "start": 170,
            "end": 171
          },
          "typeArguments": null,
          "start": 170,
          "end": 171
        },
        "start": 168,
        "end": 171
      },
      "body": null,
      "expression": false,
      "start": 109,
      "end": 172
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
            "typeAnnotation": null,
            "start": 178,
            "end": 180
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 185
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 187
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 192
                },
                "id": null,
                "generator": false,
                "start": 186,
                "end": 192
              }
            ],
            "optional": false,
            "start": 183,
            "end": 193
          },
          "definite": false,
          "start": 178,
          "end": 193
        }
      ],
      "declare": false,
      "start": 174,
      "end": 194
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
            "typeAnnotation": null,
            "start": 206,
            "end": 208
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 213
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 215
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 220
                },
                "id": null,
                "generator": false,
                "start": 214,
                "end": 220
              }
            ],
            "optional": false,
            "start": 211,
            "end": 221
          },
          "definite": false,
          "start": 206,
          "end": 221
        }
      ],
      "declare": false,
      "start": 202,
      "end": 222
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 240
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 245
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 247
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 252
                },
                "id": null,
                "generator": false,
                "start": 246,
                "end": 252
              }
            ],
            "optional": false,
            "start": 243,
            "end": 253
          },
          "definite": false,
          "start": 238,
          "end": 253
        }
      ],
      "declare": false,
      "start": 234,
      "end": 254
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
            "name": "s",
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 311,
                        "end": 312
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 311,
                      "end": 312
                    }
                  ],
                  "start": 310,
                  "end": 313
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "go",
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
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 319,
                                "end": 320
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 319,
                              "end": 320
                            }
                          ],
                          "start": 318,
                          "end": 321
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ops",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSMethodSignature",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "init",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 329,
                                      "end": 333
                                    },
                                    "computed": false,
                                    "optional": false,
                                    "kind": "method",
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 337,
                                          "end": 338
                                        },
                                        "typeArguments": null,
                                        "start": 337,
                                        "end": 338
                                      },
                                      "start": 335,
                                      "end": 338
                                    },
                                    "accessibility": null,
                                    "readonly": false,
                                    "static": false,
                                    "start": 329,
                                    "end": 339
                                  }
                                ],
                                "start": 327,
                                "end": 341
                              },
                              "start": 325,
                              "end": 341
                            },
                            "start": 322,
                            "end": 341
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 346,
                              "end": 347
                            },
                            "typeArguments": null,
                            "start": 346,
                            "end": 347
                          },
                          "start": 343,
                          "end": 347
                        },
                        "start": 318,
                        "end": 347
                      },
                      "start": 316,
                      "end": 347
                    },
                    "start": 314,
                    "end": 347
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 353
                    },
                    "typeArguments": null,
                    "start": 352,
                    "end": 353
                  },
                  "start": 349,
                  "end": 353
                },
                "start": 310,
                "end": 353
              },
              "start": 308,
              "end": 353
            },
            "start": 307,
            "end": 353
          },
          "init": null,
          "definite": false,
          "start": 307,
          "end": 353
        }
      ],
      "declare": true,
      "start": 293,
      "end": 354
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 362
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 366
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 368
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 372,
                      "end": 373
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "init",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 374,
                      "end": 378
                    },
                    "optional": false,
                    "computed": false,
                    "start": 372,
                    "end": 378
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 372,
                  "end": 380
                },
                "id": null,
                "generator": false,
                "start": 367,
                "end": 380
              }
            ],
            "optional": false,
            "start": 365,
            "end": 381
          },
          "definite": false,
          "start": 361,
          "end": 381
        }
      ],
      "declare": false,
      "start": 355,
      "end": 382
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 416
}
```
