__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 32,
                          "end": 33
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 35,
                            "end": 41
                          },
                          "start": 33,
                          "end": 41
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 32,
                        "end": 41
                      }
                    ],
                    "start": 30,
                    "end": 43
                  }
                ],
                "start": 18,
                "end": 43
              },
              "start": 16,
              "end": 43
            },
            "start": 14,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 47
          },
          "property": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 50,
            "end": 53
          },
          "optional": true,
          "computed": true,
          "start": 45,
          "end": 54
        },
        "start": 45,
        "end": 54
      },
      "directive": null,
      "start": 45,
      "end": 55
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 75,
                    "end": 84
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 89,
                          "end": 90
                        },
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
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 94,
                                  "end": 95
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 97,
                                    "end": 103
                                  },
                                  "start": 95,
                                  "end": 103
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 94,
                                "end": 103
                              }
                            ],
                            "start": 92,
                            "end": 105
                          },
                          "start": 90,
                          "end": 105
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 89,
                        "end": 105
                      }
                    ],
                    "start": 87,
                    "end": 107
                  }
                ],
                "start": 75,
                "end": 107
              },
              "start": 73,
              "end": 107
            },
            "start": 71,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 107
        }
      ],
      "declare": true,
      "start": 57,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 111
            },
            "property": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 114,
              "end": 117
            },
            "optional": true,
            "computed": true,
            "start": 109,
            "end": 118
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
          },
          "optional": false,
          "computed": false,
          "start": 109,
          "end": 120
        },
        "start": 109,
        "end": 120
      },
      "directive": null,
      "start": 109,
      "end": 121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 124
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 127
            },
            "optional": true,
            "computed": false,
            "start": 122,
            "end": 127
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 128,
            "end": 131
          },
          "optional": false,
          "computed": true,
          "start": 122,
          "end": 132
        },
        "start": 122,
        "end": 132
      },
      "directive": null,
      "start": 122,
      "end": 133
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
            "name": "o3",
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 156
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 158,
                            "end": 167
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
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 172,
                                  "end": 173
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 175,
                                    "end": 181
                                  },
                                  "start": 173,
                                  "end": 181
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 172,
                                "end": 181
                              }
                            ],
                            "start": 170,
                            "end": 183
                          }
                        ],
                        "start": 158,
                        "end": 183
                      },
                      "start": 156,
                      "end": 183
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 155,
                    "end": 183
                  }
                ],
                "start": 153,
                "end": 185
              },
              "start": 151,
              "end": 185
            },
            "start": 149,
            "end": 185
          },
          "init": null,
          "definite": false,
          "start": 149,
          "end": 185
        }
      ],
      "declare": true,
      "start": 135,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 189
            },
            "property": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 190,
              "end": 193
            },
            "optional": false,
            "computed": true,
            "start": 187,
            "end": 194
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "optional": true,
          "computed": false,
          "start": 187,
          "end": 197
        },
        "start": 187,
        "end": 197
      },
      "directive": null,
      "start": 187,
      "end": 198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 201
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "optional": false,
            "computed": false,
            "start": 199,
            "end": 203
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 206,
            "end": 209
          },
          "optional": true,
          "computed": true,
          "start": 199,
          "end": 210
        },
        "start": 199,
        "end": 210
      },
      "directive": null,
      "start": 199,
      "end": 211
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
            "name": "o4",
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 234
                    },
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 239,
                              "end": 240
                            },
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
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 244,
                                      "end": 245
                                    },
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
                                              "name": "e",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 250,
                                              "end": 251
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 253,
                                                "end": 259
                                              },
                                              "start": 251,
                                              "end": 259
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 250,
                                            "end": 259
                                          }
                                        ],
                                        "start": 248,
                                        "end": 261
                                      },
                                      "start": 246,
                                      "end": 261
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 244,
                                    "end": 261
                                  }
                                ],
                                "start": 242,
                                "end": 263
                              },
                              "start": 240,
                              "end": 263
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 239,
                            "end": 263
                          }
                        ],
                        "start": 237,
                        "end": 265
                      },
                      "start": 235,
                      "end": 265
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 233,
                    "end": 265
                  }
                ],
                "start": 231,
                "end": 267
              },
              "start": 229,
              "end": 267
            },
            "start": 227,
            "end": 267
          },
          "init": null,
          "definite": false,
          "start": 227,
          "end": 267
        }
      ],
      "declare": true,
      "start": 213,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 271
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 273
                },
                "optional": false,
                "computed": false,
                "start": 269,
                "end": 273
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 276,
                "end": 279
              },
              "optional": true,
              "computed": true,
              "start": 269,
              "end": 280
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 282
            },
            "optional": false,
            "computed": false,
            "start": 269,
            "end": 282
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "optional": true,
          "computed": false,
          "start": 269,
          "end": 285
        },
        "start": 269,
        "end": 285
      },
      "directive": null,
      "start": 269,
      "end": 286
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 289
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 291
                },
                "optional": false,
                "computed": false,
                "start": 287,
                "end": 291
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 294,
                "end": 297
              },
              "optional": true,
              "computed": true,
              "start": 287,
              "end": 298
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "optional": false,
            "computed": false,
            "start": 287,
            "end": 300
          },
          "property": {
            "type": "Literal",
            "value": "e",
            "raw": "\"e\"",
            "start": 303,
            "end": 306
          },
          "optional": true,
          "computed": true,
          "start": 287,
          "end": 307
        },
        "start": 287,
        "end": 307
      },
      "directive": null,
      "start": 287,
      "end": 308
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
            "name": "o5",
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 330,
                      "end": 331
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 338,
                              "end": 339
                            },
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
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 343,
                                      "end": 344
                                    },
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
                                              "name": "e",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 349,
                                              "end": 350
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 352,
                                                "end": 358
                                              },
                                              "start": 350,
                                              "end": 358
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 349,
                                            "end": 358
                                          }
                                        ],
                                        "start": 347,
                                        "end": 360
                                      },
                                      "start": 345,
                                      "end": 360
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 343,
                                    "end": 360
                                  }
                                ],
                                "start": 341,
                                "end": 362
                              },
                              "start": 339,
                              "end": 362
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 338,
                            "end": 362
                          }
                        ],
                        "start": 336,
                        "end": 364
                      },
                      "start": 334,
                      "end": 364
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 330,
                    "end": 364
                  }
                ],
                "start": 328,
                "end": 366
              },
              "start": 326,
              "end": 366
            },
            "start": 324,
            "end": 366
          },
          "init": null,
          "definite": false,
          "start": 324,
          "end": 366
        }
      ],
      "declare": true,
      "start": 310,
      "end": 367
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 370
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 371,
                    "end": 372
                  },
                  "optional": false,
                  "computed": false,
                  "start": 368,
                  "end": 372
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 368,
                "end": 376
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 377,
                "end": 380
              },
              "optional": false,
              "computed": true,
              "start": 368,
              "end": 381
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
            },
            "optional": false,
            "computed": false,
            "start": 368,
            "end": 383
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 386
          },
          "optional": true,
          "computed": false,
          "start": 368,
          "end": 386
        },
        "start": 368,
        "end": 386
      },
      "directive": null,
      "start": 368,
      "end": 387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 390
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 392
                  },
                  "optional": false,
                  "computed": false,
                  "start": 388,
                  "end": 392
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 388,
                "end": 396
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 397,
                "end": 400
              },
              "optional": false,
              "computed": true,
              "start": 388,
              "end": 401
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "optional": false,
            "computed": false,
            "start": 388,
            "end": 403
          },
          "property": {
            "type": "Literal",
            "value": "e",
            "raw": "\"e\"",
            "start": 406,
            "end": 409
          },
          "optional": true,
          "computed": true,
          "start": 388,
          "end": 410
        },
        "start": 388,
        "end": 410
      },
      "directive": null,
      "start": 388,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 412,
                    "end": 414
                  },
                  "property": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 415,
                    "end": 418
                  },
                  "optional": false,
                  "computed": true,
                  "start": 412,
                  "end": 419
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 412,
                "end": 423
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 424,
                "end": 427
              },
              "optional": false,
              "computed": true,
              "start": 412,
              "end": 428
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 430
            },
            "optional": false,
            "computed": false,
            "start": 412,
            "end": 430
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 433
          },
          "optional": true,
          "computed": false,
          "start": 412,
          "end": 433
        },
        "start": 412,
        "end": 433
      },
      "directive": null,
      "start": 412,
      "end": 434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 437
                  },
                  "property": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 438,
                    "end": 441
                  },
                  "optional": false,
                  "computed": true,
                  "start": 435,
                  "end": 442
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 435,
                "end": 446
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 447,
                "end": 450
              },
              "optional": false,
              "computed": true,
              "start": 435,
              "end": 451
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "optional": false,
            "computed": false,
            "start": 435,
            "end": 453
          },
          "property": {
            "type": "Literal",
            "value": "e",
            "raw": "\"e\"",
            "start": 456,
            "end": 459
          },
          "optional": true,
          "computed": true,
          "start": 435,
          "end": 460
        },
        "start": 435,
        "end": 460
      },
      "directive": null,
      "start": 435,
      "end": 461
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
            "name": "o6",
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
                        "start": 494,
                        "end": 495
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 494,
                      "end": 495
                    }
                  ],
                  "start": 493,
                  "end": 496
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 502,
                        "end": 511
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 517,
                              "end": 518
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 520,
                                "end": 526
                              },
                              "start": 518,
                              "end": 526
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 517,
                            "end": 526
                          }
                        ],
                        "start": 515,
                        "end": 528
                      }
                    ],
                    "start": 502,
                    "end": 529
                  },
                  "start": 499,
                  "end": 529
                },
                "start": 493,
                "end": 529
              },
              "start": 491,
              "end": 529
            },
            "start": 489,
            "end": 529
          },
          "init": null,
          "definite": false,
          "start": 489,
          "end": 529
        }
      ],
      "declare": true,
      "start": 475,
      "end": 530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 533
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 534,
                  "end": 540
                }
              ],
              "start": 533,
              "end": 541
            },
            "arguments": [],
            "optional": false,
            "start": 531,
            "end": 543
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 546,
            "end": 549
          },
          "optional": true,
          "computed": true,
          "start": 531,
          "end": 550
        },
        "start": 531,
        "end": 550
      },
      "directive": null,
      "start": 531,
      "end": 551
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o2",
                "optional": false,
                "typeAnnotation": null,
                "start": 565,
                "end": 567
              },
              "property": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 570,
                "end": 573
              },
              "optional": true,
              "computed": true,
              "start": 565,
              "end": 574
            },
            "start": 565,
            "end": 575
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 577
          },
          "optional": false,
          "computed": false,
          "start": 565,
          "end": 577
        },
        "start": 565,
        "end": 577
      },
      "directive": null,
      "start": 565,
      "end": 578
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o2",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 581
              },
              "property": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 584,
                "end": 587
              },
              "optional": true,
              "computed": true,
              "start": 579,
              "end": 588
            },
            "start": 579,
            "end": 589
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 590,
            "end": 593
          },
          "optional": false,
          "computed": true,
          "start": 579,
          "end": 594
        },
        "start": 579,
        "end": 594
      },
      "directive": null,
      "start": 579,
      "end": 595
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 596,
                  "end": 598
                },
                "property": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 601,
                  "end": 604
                },
                "optional": true,
                "computed": true,
                "start": 596,
                "end": 605
              },
              "start": 596,
              "end": 606
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 608
            },
            "optional": false,
            "computed": false,
            "start": 596,
            "end": 608
          },
          "start": 596,
          "end": 609
        },
        "start": 596,
        "end": 609
      },
      "directive": null,
      "start": 596,
      "end": 610
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 611,
                  "end": 613
                },
                "property": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 616,
                  "end": 619
                },
                "optional": true,
                "computed": true,
                "start": 611,
                "end": 620
              },
              "start": 611,
              "end": 621
            },
            "property": {
              "type": "Literal",
              "value": "c",
              "raw": "\"c\"",
              "start": 622,
              "end": 625
            },
            "optional": false,
            "computed": true,
            "start": 611,
            "end": 626
          },
          "start": 611,
          "end": 627
        },
        "start": 611,
        "end": 627
      },
      "directive": null,
      "start": 611,
      "end": 628
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 628
}
```
