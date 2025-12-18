__ESTREE_TEST__:AST:
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 54,
                    "end": 63
                  },
                  {
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
                                "start": 78,
                                "end": 84
                              },
                              "start": 76,
                              "end": 84
                            },
                            "start": 73,
                            "end": 84
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 87,
                            "end": 90
                          },
                          "start": 85,
                          "end": 90
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 72,
                        "end": 91
                      },
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
                                "type": "TSNumberKeyword",
                                "start": 102,
                                "end": 108
                              },
                              "start": 100,
                              "end": 108
                            },
                            "start": 97,
                            "end": 108
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 111,
                            "end": 114
                          },
                          "start": 109,
                          "end": 114
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 96,
                        "end": 115
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                              "start": 124,
                              "end": 128
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 130,
                                  "end": 133
                                },
                                "start": 130,
                                "end": 135
                              },
                              "start": 128,
                              "end": 135
                            },
                            "value": null,
                            "start": 121,
                            "end": 135
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 138,
                            "end": 141
                          },
                          "start": 136,
                          "end": 141
                        },
                        "start": 120,
                        "end": 142
                      }
                    ],
                    "start": 66,
                    "end": 144
                  }
                ],
                "start": 54,
                "end": 144
              },
              "start": 52,
              "end": 144
            },
            "start": 51,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 144
        }
      ],
      "declare": true,
      "start": 37,
      "end": 145
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
            },
            "start": 151,
            "end": 160
          },
          "init": null,
          "definite": false,
          "start": 151,
          "end": 160
        }
      ],
      "declare": false,
      "start": 147,
      "end": 161
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "property": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 167
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 170,
              "end": 171
            },
            "start": 166,
            "end": 171
          },
          "optional": true,
          "computed": true,
          "start": 162,
          "end": 172
        },
        "start": 162,
        "end": 172
      },
      "directive": null,
      "start": 162,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 184
          },
          "optional": false,
          "computed": false,
          "start": 174,
          "end": 184
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 174,
        "end": 186
      },
      "directive": null,
      "start": 174,
      "end": 187
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
                "type": "TSNumberKeyword",
                "start": 196,
                "end": 202
              },
              "start": 194,
              "end": 202
            },
            "start": 193,
            "end": 202
          },
          "init": null,
          "definite": false,
          "start": 193,
          "end": 202
        }
      ],
      "declare": false,
      "start": 189,
      "end": 203
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
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
            },
            "optional": true,
            "computed": false,
            "start": 204,
            "end": 208
          },
          "property": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 213,
              "end": 214
            },
            "start": 209,
            "end": 214
          },
          "optional": false,
          "computed": true,
          "start": 204,
          "end": 215
        },
        "start": 204,
        "end": 215
      },
      "directive": null,
      "start": 204,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 218
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 227
          },
          "optional": false,
          "computed": false,
          "start": 217,
          "end": 227
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 217,
        "end": 229
      },
      "directive": null,
      "start": 217,
      "end": 230
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
                "type": "TSNumberKeyword",
                "start": 239,
                "end": 245
              },
              "start": 237,
              "end": 245
            },
            "start": 236,
            "end": 245
          },
          "init": null,
          "definite": false,
          "start": 236,
          "end": 245
        }
      ],
      "declare": false,
      "start": 232,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 248
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 252
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 255,
                "end": 256
              },
              "start": 251,
              "end": 256
            }
          ],
          "optional": true,
          "start": 247,
          "end": 257
        },
        "start": 247,
        "end": 257
      },
      "directive": null,
      "start": 247,
      "end": 257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 259
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 268
          },
          "optional": false,
          "computed": false,
          "start": 258,
          "end": 268
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 258,
        "end": 270
      },
      "directive": null,
      "start": 258,
      "end": 271
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 280,
                "end": 286
              },
              "start": 278,
              "end": 286
            },
            "start": 277,
            "end": 286
          },
          "init": null,
          "definite": false,
          "start": 277,
          "end": 286
        }
      ],
      "declare": false,
      "start": 273,
      "end": 287
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
            },
            "optional": true,
            "computed": false,
            "start": 288,
            "end": 292
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 294
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 297,
                "end": 298
              },
              "start": 293,
              "end": 298
            }
          ],
          "optional": false,
          "start": 288,
          "end": 299
        },
        "start": 288,
        "end": 299
      },
      "directive": null,
      "start": 288,
      "end": 300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 302
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 311
          },
          "optional": false,
          "computed": false,
          "start": 301,
          "end": 311
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 301,
        "end": 313
      },
      "directive": null,
      "start": 301,
      "end": 314
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 352,
                    "end": 361
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 369,
                            "end": 372
                          },
                          "start": 367,
                          "end": 372
                        },
                        "start": 366,
                        "end": 372
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 378
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 382,
                            "end": 388
                          },
                          "start": 382,
                          "end": 388
                        },
                        "start": 377,
                        "end": 388
                      },
                      "start": 374,
                      "end": 388
                    },
                    "start": 365,
                    "end": 388
                  }
                ],
                "start": 352,
                "end": 389
              },
              "start": 350,
              "end": 389
            },
            "start": 349,
            "end": 389
          },
          "init": null,
          "definite": false,
          "start": 349,
          "end": 389
        }
      ],
      "declare": true,
      "start": 335,
      "end": 390
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 408,
                    "end": 414
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 417,
                    "end": 423
                  }
                ],
                "start": 408,
                "end": 423
              },
              "start": 406,
              "end": 423
            },
            "start": 405,
            "end": 423
          },
          "init": null,
          "definite": false,
          "start": 405,
          "end": 423
        }
      ],
      "declare": true,
      "start": 391,
      "end": 424
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 430
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 434
            }
          ],
          "optional": true,
          "start": 429,
          "end": 435
        },
        "start": 429,
        "end": 435
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "directive": null,
            "start": 443,
            "end": 445
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 461
            },
            "directive": null,
            "start": 460,
            "end": 462
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 494,
                "end": 495
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 497
                }
              ],
              "optional": false,
              "start": 494,
              "end": 498
            },
            "directive": null,
            "start": 494,
            "end": 499
          }
        ],
        "start": 437,
        "end": 501
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 514
            },
            "directive": null,
            "start": 513,
            "end": 515
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 520,
              "end": 521
            },
            "directive": null,
            "start": 520,
            "end": 522
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 528
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 530
                }
              ],
              "optional": false,
              "start": 527,
              "end": 531
            },
            "directive": null,
            "start": 527,
            "end": 532
          }
        ],
        "start": 507,
        "end": 534
      },
      "start": 425,
      "end": 534
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 535,
        "end": 536
      },
      "directive": null,
      "start": 535,
      "end": 537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 539
      },
      "directive": null,
      "start": 538,
      "end": 540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 541,
          "end": 542
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 544
          }
        ],
        "optional": false,
        "start": 541,
        "end": 545
      },
      "directive": null,
      "start": 541,
      "end": 546
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
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 568,
                          "end": 569
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 573,
                                "end": 576
                              },
                              "start": 571,
                              "end": 576
                            },
                            "start": 570,
                            "end": 576
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypePredicate",
                            "parameterName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 579,
                              "end": 580
                            },
                            "asserts": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 584,
                                "end": 590
                              },
                              "start": 584,
                              "end": 590
                            },
                            "start": 579,
                            "end": 590
                          },
                          "start": 577,
                          "end": 590
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 568,
                        "end": 591
                      }
                    ],
                    "start": 566,
                    "end": 593
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 596,
                    "end": 605
                  }
                ],
                "start": 566,
                "end": 605
              },
              "start": 564,
              "end": 605
            },
            "start": 562,
            "end": 605
          },
          "init": null,
          "definite": false,
          "start": 562,
          "end": 605
        }
      ],
      "declare": true,
      "start": 548,
      "end": 606
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
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
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "optional": true,
            "computed": false,
            "start": 611,
            "end": 616
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 618
            }
          ],
          "optional": false,
          "start": 611,
          "end": 619
        },
        "start": 611,
        "end": 619
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 628
            },
            "directive": null,
            "start": 627,
            "end": 629
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o2",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 646
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 648
              },
              "optional": false,
              "computed": false,
              "start": 644,
              "end": 648
            },
            "directive": null,
            "start": 644,
            "end": 649
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
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 681,
                  "end": 683
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 686
                },
                "optional": true,
                "computed": false,
                "start": 681,
                "end": 686
              },
              "start": 681,
              "end": 686
            },
            "directive": null,
            "start": 681,
            "end": 687
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 692,
                    "end": 694
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 696,
                    "end": 697
                  },
                  "optional": true,
                  "computed": false,
                  "start": 692,
                  "end": 697
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 698,
                    "end": 699
                  }
                ],
                "optional": false,
                "start": 692,
                "end": 700
              },
              "start": 692,
              "end": 700
            },
            "directive": null,
            "start": 692,
            "end": 701
          }
        ],
        "start": 621,
        "end": 703
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 716
            },
            "directive": null,
            "start": 715,
            "end": 717
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 724
            },
            "directive": null,
            "start": 722,
            "end": 725
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
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 730,
                  "end": 732
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 734,
                  "end": 735
                },
                "optional": true,
                "computed": false,
                "start": 730,
                "end": 735
              },
              "start": 730,
              "end": 735
            },
            "directive": null,
            "start": 730,
            "end": 736
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o2",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 743
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 744,
                "end": 745
              },
              "optional": false,
              "computed": false,
              "start": 741,
              "end": 745
            },
            "directive": null,
            "start": 741,
            "end": 746
          }
        ],
        "start": 709,
        "end": 748
      },
      "start": 607,
      "end": 748
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 749,
        "end": 750
      },
      "directive": null,
      "start": 749,
      "end": 751
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "o2",
        "optional": false,
        "typeAnnotation": null,
        "start": 752,
        "end": 754
      },
      "directive": null,
      "start": 752,
      "end": 755
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 756,
            "end": 758
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 760,
            "end": 761
          },
          "optional": true,
          "computed": false,
          "start": 756,
          "end": 761
        },
        "start": 756,
        "end": 761
      },
      "directive": null,
      "start": 756,
      "end": 762
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 763,
          "end": 765
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 767
        },
        "optional": false,
        "computed": false,
        "start": 763,
        "end": 767
      },
      "directive": null,
      "start": 763,
      "end": 768
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
                "type": "TSUnionType",
                "types": [
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
                          "start": 790,
                          "end": 791
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 793,
                              "end": 794
                            },
                            "start": 793,
                            "end": 794
                          },
                          "start": 791,
                          "end": 794
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 790,
                        "end": 795
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 796,
                          "end": 797
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 799,
                            "end": 805
                          },
                          "start": 797,
                          "end": 805
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 796,
                        "end": 805
                      }
                    ],
                    "start": 788,
                    "end": 807
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
                          "start": 812,
                          "end": 813
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 815,
                              "end": 816
                            },
                            "start": 815,
                            "end": 816
                          },
                          "start": 813,
                          "end": 816
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 812,
                        "end": 817
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 818,
                          "end": 819
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 821,
                            "end": 827
                          },
                          "start": 819,
                          "end": 827
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 818,
                        "end": 827
                      }
                    ],
                    "start": 810,
                    "end": 829
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 832,
                    "end": 841
                  }
                ],
                "start": 788,
                "end": 841
              },
              "start": 786,
              "end": 841
            },
            "start": 784,
            "end": 841
          },
          "init": null,
          "definite": false,
          "start": 784,
          "end": 841
        }
      ],
      "declare": true,
      "start": 770,
      "end": 842
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 847,
              "end": 849
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 852
            },
            "optional": true,
            "computed": false,
            "start": 847,
            "end": 852
          },
          "start": 847,
          "end": 852
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 857,
          "end": 858
        },
        "start": 847,
        "end": 858
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 866,
              "end": 868
            },
            "directive": null,
            "start": 866,
            "end": 869
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 874,
                "end": 876
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 878
              },
              "optional": false,
              "computed": false,
              "start": 874,
              "end": 878
            },
            "directive": null,
            "start": 874,
            "end": 879
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
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 884,
                  "end": 886
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 888,
                  "end": 889
                },
                "optional": true,
                "computed": false,
                "start": 884,
                "end": 889
              },
              "start": 884,
              "end": 889
            },
            "directive": null,
            "start": 884,
            "end": 890
          }
        ],
        "start": 860,
        "end": 892
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 904,
              "end": 906
            },
            "directive": null,
            "start": 904,
            "end": 907
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
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 912,
                  "end": 914
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 916,
                  "end": 917
                },
                "optional": true,
                "computed": false,
                "start": 912,
                "end": 917
              },
              "start": 912,
              "end": 917
            },
            "directive": null,
            "start": 912,
            "end": 918
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 923,
                "end": 925
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 926,
                "end": 927
              },
              "optional": false,
              "computed": false,
              "start": 923,
              "end": 927
            },
            "directive": null,
            "start": 923,
            "end": 928
          }
        ],
        "start": 898,
        "end": 930
      },
      "start": 843,
      "end": 930
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "o3",
        "optional": false,
        "typeAnnotation": null,
        "start": 931,
        "end": 933
      },
      "directive": null,
      "start": 931,
      "end": 934
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 935,
            "end": 937
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 939,
            "end": 940
          },
          "optional": true,
          "computed": false,
          "start": 935,
          "end": 940
        },
        "start": 935,
        "end": 940
      },
      "directive": null,
      "start": 935,
      "end": 941
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 942,
          "end": 944
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 945,
          "end": 946
        },
        "optional": false,
        "computed": false,
        "start": 942,
        "end": 946
      },
      "directive": null,
      "start": 942,
      "end": 947
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 969,
                      "end": 970
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 975,
                              "end": 976
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 978,
                                "end": 985
                              },
                              "start": 976,
                              "end": 985
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 975,
                            "end": 985
                          }
                        ],
                        "start": 973,
                        "end": 987
                      },
                      "start": 971,
                      "end": 987
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 969,
                    "end": 987
                  }
                ],
                "start": 967,
                "end": 989
              },
              "start": 965,
              "end": 989
            },
            "start": 963,
            "end": 989
          },
          "init": null,
          "definite": false,
          "start": 963,
          "end": 989
        }
      ],
      "declare": true,
      "start": 949,
      "end": 990
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o4",
              "optional": false,
              "typeAnnotation": null,
              "start": 995,
              "end": 997
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 998,
              "end": 999
            },
            "optional": false,
            "computed": false,
            "start": 995,
            "end": 999
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1001,
            "end": 1002
          },
          "optional": true,
          "computed": false,
          "start": 995,
          "end": 1002
        },
        "start": 995,
        "end": 1002
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1010,
                "end": 1012
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1013,
                "end": 1014
              },
              "optional": false,
              "computed": false,
              "start": 1010,
              "end": 1014
            },
            "directive": null,
            "start": 1010,
            "end": 1015
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1038,
                  "end": 1040
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1042
                },
                "optional": false,
                "computed": false,
                "start": 1038,
                "end": 1042
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1044
              },
              "optional": false,
              "computed": false,
              "start": 1038,
              "end": 1044
            },
            "directive": null,
            "start": 1038,
            "end": 1045
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
                    "name": "o4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1058,
                    "end": 1060
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1062
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1058,
                  "end": 1062
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1064,
                  "end": 1065
                },
                "optional": true,
                "computed": false,
                "start": 1058,
                "end": 1065
              },
              "start": 1058,
              "end": 1065
            },
            "directive": null,
            "start": 1058,
            "end": 1066
          }
        ],
        "start": 1004,
        "end": 1076
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1088,
                "end": 1090
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1091,
                "end": 1092
              },
              "optional": false,
              "computed": false,
              "start": 1088,
              "end": 1092
            },
            "directive": null,
            "start": 1088,
            "end": 1093
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
                    "name": "o4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1098,
                    "end": 1100
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1101,
                    "end": 1102
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1098,
                  "end": 1102
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1104,
                  "end": 1105
                },
                "optional": true,
                "computed": false,
                "start": 1098,
                "end": 1105
              },
              "start": 1098,
              "end": 1105
            },
            "directive": null,
            "start": 1098,
            "end": 1106
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1111,
                  "end": 1113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1114,
                  "end": 1115
                },
                "optional": false,
                "computed": false,
                "start": 1111,
                "end": 1115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1117
              },
              "optional": false,
              "computed": false,
              "start": 1111,
              "end": 1117
            },
            "directive": null,
            "start": 1111,
            "end": 1118
          }
        ],
        "start": 1082,
        "end": 1120
      },
      "start": 991,
      "end": 1120
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1121,
          "end": 1123
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1124,
          "end": 1125
        },
        "optional": false,
        "computed": false,
        "start": 1121,
        "end": 1125
      },
      "directive": null,
      "start": 1121,
      "end": 1126
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
              "name": "o4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1127,
              "end": 1129
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1130,
              "end": 1131
            },
            "optional": false,
            "computed": false,
            "start": 1127,
            "end": 1131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1133,
            "end": 1134
          },
          "optional": true,
          "computed": false,
          "start": 1127,
          "end": 1134
        },
        "start": 1127,
        "end": 1134
      },
      "directive": null,
      "start": 1127,
      "end": 1135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1136,
            "end": 1138
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1139,
            "end": 1140
          },
          "optional": false,
          "computed": false,
          "start": 1136,
          "end": 1140
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1141,
          "end": 1142
        },
        "optional": false,
        "computed": false,
        "start": 1136,
        "end": 1142
      },
      "directive": null,
      "start": 1136,
      "end": 1143
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
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1165,
                      "end": 1166
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1171,
                              "end": 1172
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
                                      "name": "z",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1176,
                                      "end": 1177
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
                                              "name": "w",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1182,
                                              "end": 1183
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1185,
                                                "end": 1192
                                              },
                                              "start": 1183,
                                              "end": 1192
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 1182,
                                            "end": 1192
                                          }
                                        ],
                                        "start": 1180,
                                        "end": 1194
                                      },
                                      "start": 1178,
                                      "end": 1194
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 1176,
                                    "end": 1194
                                  }
                                ],
                                "start": 1174,
                                "end": 1196
                              },
                              "start": 1172,
                              "end": 1196
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1171,
                            "end": 1196
                          }
                        ],
                        "start": 1169,
                        "end": 1198
                      },
                      "start": 1167,
                      "end": 1198
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1165,
                    "end": 1198
                  }
                ],
                "start": 1163,
                "end": 1200
              },
              "start": 1161,
              "end": 1200
            },
            "start": 1159,
            "end": 1200
          },
          "init": null,
          "definite": false,
          "start": 1159,
          "end": 1200
        }
      ],
      "declare": true,
      "start": 1145,
      "end": 1201
    },
    {
      "type": "IfStatement",
      "test": {
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
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1206,
                  "end": 1208
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1209,
                  "end": 1210
                },
                "optional": false,
                "computed": false,
                "start": 1206,
                "end": 1210
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1212,
                "end": 1213
              },
              "optional": true,
              "computed": false,
              "start": 1206,
              "end": 1213
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1215
            },
            "optional": false,
            "computed": false,
            "start": 1206,
            "end": 1215
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 1217,
            "end": 1218
          },
          "optional": true,
          "computed": false,
          "start": 1206,
          "end": 1218
        },
        "start": 1206,
        "end": 1218
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1228
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1229,
                "end": 1230
              },
              "optional": false,
              "computed": false,
              "start": 1226,
              "end": 1230
            },
            "directive": null,
            "start": 1226,
            "end": 1231
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1236,
                  "end": 1238
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1239,
                  "end": 1240
                },
                "optional": false,
                "computed": false,
                "start": 1236,
                "end": 1240
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1241,
                "end": 1242
              },
              "optional": false,
              "computed": false,
              "start": 1236,
              "end": 1242
            },
            "directive": null,
            "start": 1236,
            "end": 1243
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1248,
                    "end": 1250
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1251,
                    "end": 1252
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1248,
                  "end": 1252
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1253,
                  "end": 1254
                },
                "optional": false,
                "computed": false,
                "start": 1248,
                "end": 1254
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1255,
                "end": 1256
              },
              "optional": false,
              "computed": false,
              "start": 1248,
              "end": 1256
            },
            "directive": null,
            "start": 1248,
            "end": 1257
          },
          {
            "type": "ExpressionStatement",
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
                      "name": "o5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1262,
                      "end": 1264
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1265,
                      "end": 1266
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1262,
                    "end": 1266
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1267,
                    "end": 1268
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1262,
                  "end": 1268
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1269,
                  "end": 1270
                },
                "optional": false,
                "computed": false,
                "start": 1262,
                "end": 1270
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "w",
                "optional": false,
                "typeAnnotation": null,
                "start": 1271,
                "end": 1272
              },
              "optional": false,
              "computed": false,
              "start": 1262,
              "end": 1272
            },
            "directive": null,
            "start": 1262,
            "end": 1273
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
                        "name": "o5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1286,
                        "end": 1288
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1289,
                        "end": 1290
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1286,
                      "end": 1290
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1291,
                      "end": 1292
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1286,
                    "end": 1292
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1293,
                    "end": 1294
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1286,
                  "end": 1294
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1296,
                  "end": 1297
                },
                "optional": true,
                "computed": false,
                "start": 1286,
                "end": 1297
              },
              "start": 1286,
              "end": 1297
            },
            "directive": null,
            "start": 1286,
            "end": 1298
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
                        "name": "o5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1311,
                        "end": 1313
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1314,
                        "end": 1315
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1311,
                      "end": 1315
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1317,
                      "end": 1318
                    },
                    "optional": true,
                    "computed": false,
                    "start": 1311,
                    "end": 1318
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1319,
                    "end": 1320
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1311,
                  "end": 1320
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1322
                },
                "optional": false,
                "computed": false,
                "start": 1311,
                "end": 1322
              },
              "start": 1311,
              "end": 1322
            },
            "directive": null,
            "start": 1311,
            "end": 1323
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
                        "name": "o5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1336,
                        "end": 1338
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1339,
                        "end": 1340
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1336,
                      "end": 1340
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1342,
                      "end": 1343
                    },
                    "optional": true,
                    "computed": false,
                    "start": 1336,
                    "end": 1343
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1344,
                    "end": 1345
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1336,
                  "end": 1345
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1348
                },
                "optional": true,
                "computed": false,
                "start": 1336,
                "end": 1348
              },
              "start": 1336,
              "end": 1348
            },
            "directive": null,
            "start": 1336,
            "end": 1349
          }
        ],
        "start": 1220,
        "end": 1359
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1371,
                "end": 1373
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1374,
                "end": 1375
              },
              "optional": false,
              "computed": false,
              "start": 1371,
              "end": 1375
            },
            "directive": null,
            "start": 1371,
            "end": 1376
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
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1381,
                    "end": 1383
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1384,
                    "end": 1385
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1381,
                  "end": 1385
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1387,
                  "end": 1388
                },
                "optional": true,
                "computed": false,
                "start": 1381,
                "end": 1388
              },
              "start": 1381,
              "end": 1388
            },
            "directive": null,
            "start": 1381,
            "end": 1389
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1394,
                      "end": 1396
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1397,
                      "end": 1398
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1394,
                    "end": 1398
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1400,
                    "end": 1401
                  },
                  "optional": true,
                  "computed": false,
                  "start": 1394,
                  "end": 1401
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1402,
                  "end": 1403
                },
                "optional": false,
                "computed": false,
                "start": 1394,
                "end": 1403
              },
              "start": 1394,
              "end": 1403
            },
            "directive": null,
            "start": 1394,
            "end": 1404
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
                        "name": "o5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1409,
                        "end": 1411
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1412,
                        "end": 1413
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1409,
                      "end": 1413
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1415,
                      "end": 1416
                    },
                    "optional": true,
                    "computed": false,
                    "start": 1409,
                    "end": 1416
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1417,
                    "end": 1418
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1409,
                  "end": 1418
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1420,
                  "end": 1421
                },
                "optional": true,
                "computed": false,
                "start": 1409,
                "end": 1421
              },
              "start": 1409,
              "end": 1421
            },
            "directive": null,
            "start": 1409,
            "end": 1422
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1427,
                  "end": 1429
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1430,
                  "end": 1431
                },
                "optional": false,
                "computed": false,
                "start": 1427,
                "end": 1431
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1432,
                "end": 1433
              },
              "optional": false,
              "computed": false,
              "start": 1427,
              "end": 1433
            },
            "directive": null,
            "start": 1427,
            "end": 1434
          },
          {
            "type": "ExpressionStatement",
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
                      "name": "o5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1439,
                      "end": 1441
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1442,
                      "end": 1443
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1439,
                    "end": 1443
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1444,
                    "end": 1445
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1439,
                  "end": 1445
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1446,
                  "end": 1447
                },
                "optional": false,
                "computed": false,
                "start": 1439,
                "end": 1447
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "w",
                "optional": false,
                "typeAnnotation": null,
                "start": 1448,
                "end": 1449
              },
              "optional": false,
              "computed": false,
              "start": 1439,
              "end": 1449
            },
            "directive": null,
            "start": 1439,
            "end": 1450
          }
        ],
        "start": 1365,
        "end": 1452
      },
      "start": 1202,
      "end": 1452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1453,
          "end": 1455
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1456,
          "end": 1457
        },
        "optional": false,
        "computed": false,
        "start": 1453,
        "end": 1457
      },
      "directive": null,
      "start": 1453,
      "end": 1458
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
              "name": "o5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1459,
              "end": 1461
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1462,
              "end": 1463
            },
            "optional": false,
            "computed": false,
            "start": 1459,
            "end": 1463
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1465,
            "end": 1466
          },
          "optional": true,
          "computed": false,
          "start": 1459,
          "end": 1466
        },
        "start": 1459,
        "end": 1466
      },
      "directive": null,
      "start": 1459,
      "end": 1467
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
                "type": "Identifier",
                "decorators": [],
                "name": "o5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1468,
                "end": 1470
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1471,
                "end": 1472
              },
              "optional": false,
              "computed": false,
              "start": 1468,
              "end": 1472
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1474,
              "end": 1475
            },
            "optional": true,
            "computed": false,
            "start": 1468,
            "end": 1475
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 1476,
            "end": 1477
          },
          "optional": false,
          "computed": false,
          "start": 1468,
          "end": 1477
        },
        "start": 1468,
        "end": 1477
      },
      "directive": null,
      "start": 1468,
      "end": 1478
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
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1479,
                  "end": 1481
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1482,
                  "end": 1483
                },
                "optional": false,
                "computed": false,
                "start": 1479,
                "end": 1483
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1485,
                "end": 1486
              },
              "optional": true,
              "computed": false,
              "start": 1479,
              "end": 1486
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1487,
              "end": 1488
            },
            "optional": false,
            "computed": false,
            "start": 1479,
            "end": 1488
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 1490,
            "end": 1491
          },
          "optional": true,
          "computed": false,
          "start": 1479,
          "end": 1491
        },
        "start": 1479,
        "end": 1491
      },
      "directive": null,
      "start": 1479,
      "end": 1492
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1493,
            "end": 1495
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1496,
            "end": 1497
          },
          "optional": false,
          "computed": false,
          "start": 1493,
          "end": 1497
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1498,
          "end": 1499
        },
        "optional": false,
        "computed": false,
        "start": 1493,
        "end": 1499
      },
      "directive": null,
      "start": 1493,
      "end": 1500
    },
    {
      "type": "ExpressionStatement",
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
                "name": "o5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1501,
                "end": 1503
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1504,
                "end": 1505
              },
              "optional": false,
              "computed": false,
              "start": 1501,
              "end": 1505
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1506,
              "end": 1507
            },
            "optional": false,
            "computed": false,
            "start": 1501,
            "end": 1507
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 1508,
            "end": 1509
          },
          "optional": false,
          "computed": false,
          "start": 1501,
          "end": 1509
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "w",
          "optional": false,
          "typeAnnotation": null,
          "start": 1510,
          "end": 1511
        },
        "optional": false,
        "computed": false,
        "start": 1501,
        "end": 1511
      },
      "directive": null,
      "start": 1501,
      "end": 1512
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1524,
        "end": 1528
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1535,
              "end": 1536
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 1540,
                  "end": 1544
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1548,
                      "end": 1555
                    },
                    "typeArguments": null,
                    "start": 1548,
                    "end": 1555
                  },
                  "start": 1548,
                  "end": 1555
                },
                "start": 1540,
                "end": 1555
              },
              "start": 1538,
              "end": 1555
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1535,
            "end": 1556
          }
        ],
        "start": 1529,
        "end": 1558
      },
      "declare": false,
      "start": 1514,
      "end": 1558
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 1570,
        "end": 1577
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 1586,
            "end": 1590
          },
          "typeArguments": null,
          "start": 1586,
          "end": 1590
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 1597,
              "end": 1598
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1600,
                "end": 1606
              },
              "start": 1598,
              "end": 1606
            },
            "accessibility": null,
            "static": false,
            "start": 1597,
            "end": 1607
          }
        ],
        "start": 1591,
        "end": 1609
      },
      "declare": false,
      "start": 1560,
      "end": 1609
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1629,
                      "end": 1633
                    },
                    "typeArguments": null,
                    "start": 1629,
                    "end": 1633
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1636,
                    "end": 1645
                  }
                ],
                "start": 1629,
                "end": 1645
              },
              "start": 1627,
              "end": 1645
            },
            "start": 1625,
            "end": 1645
          },
          "init": null,
          "definite": false,
          "start": 1625,
          "end": 1645
        }
      ],
      "declare": true,
      "start": 1611,
      "end": 1646
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1651,
              "end": 1653
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1655,
              "end": 1656
            },
            "optional": true,
            "computed": false,
            "start": 1651,
            "end": 1656
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1651,
          "end": 1658
        },
        "start": 1651,
        "end": 1658
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1666,
              "end": 1668
            },
            "directive": null,
            "start": 1666,
            "end": 1669
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1685,
                "end": 1687
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1688,
                "end": 1689
              },
              "optional": false,
              "computed": false,
              "start": 1685,
              "end": 1689
            },
            "directive": null,
            "start": 1685,
            "end": 1690
          }
        ],
        "start": 1660,
        "end": 1692
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1704,
              "end": 1706
            },
            "directive": null,
            "start": 1704,
            "end": 1707
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
                  "name": "o6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1712,
                  "end": 1714
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1716,
                  "end": 1717
                },
                "optional": true,
                "computed": false,
                "start": 1712,
                "end": 1717
              },
              "start": 1712,
              "end": 1717
            },
            "directive": null,
            "start": 1712,
            "end": 1718
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1723,
                "end": 1725
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1726,
                "end": 1727
              },
              "optional": false,
              "computed": false,
              "start": 1723,
              "end": 1727
            },
            "directive": null,
            "start": 1723,
            "end": 1728
          }
        ],
        "start": 1698,
        "end": 1730
      },
      "start": 1647,
      "end": 1730
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "o6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1731,
        "end": 1733
      },
      "directive": null,
      "start": 1731,
      "end": 1734
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
            "name": "o6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1735,
            "end": 1737
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1739,
            "end": 1740
          },
          "optional": true,
          "computed": false,
          "start": 1735,
          "end": 1740
        },
        "start": 1735,
        "end": 1740
      },
      "directive": null,
      "start": 1735,
      "end": 1741
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1742,
          "end": 1744
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 1745,
          "end": 1746
        },
        "optional": false,
        "computed": false,
        "start": 1742,
        "end": 1746
      },
      "directive": null,
      "start": 1742,
      "end": 1747
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
            "name": "isDefined",
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
                        "start": 1786,
                        "end": 1787
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1786,
                      "end": 1787
                    }
                  ],
                  "start": 1785,
                  "end": 1788
                },
                "params": [
                  {
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1796,
                          "end": 1797
                        },
                        "typeArguments": null,
                        "start": 1796,
                        "end": 1797
                      },
                      "start": 1794,
                      "end": 1797
                    },
                    "start": 1789,
                    "end": 1797
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1810,
                      "end": 1815
                    },
                    "asserts": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NonNullable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1819,
                          "end": 1830
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
                                "start": 1831,
                                "end": 1832
                              },
                              "typeArguments": null,
                              "start": 1831,
                              "end": 1832
                            }
                          ],
                          "start": 1830,
                          "end": 1833
                        },
                        "start": 1819,
                        "end": 1833
                      },
                      "start": 1819,
                      "end": 1833
                    },
                    "start": 1802,
                    "end": 1833
                  },
                  "start": 1799,
                  "end": 1833
                },
                "start": 1785,
                "end": 1833
              },
              "start": 1783,
              "end": 1833
            },
            "start": 1774,
            "end": 1833
          },
          "init": null,
          "definite": false,
          "start": 1774,
          "end": 1833
        }
      ],
      "declare": true,
      "start": 1760,
      "end": 1834
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
            "name": "isString",
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 1867,
                        "end": 1874
                      },
                      "start": 1865,
                      "end": 1874
                    },
                    "start": 1860,
                    "end": 1874
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1887,
                      "end": 1892
                    },
                    "asserts": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1896,
                        "end": 1902
                      },
                      "start": 1896,
                      "end": 1902
                    },
                    "start": 1879,
                    "end": 1902
                  },
                  "start": 1876,
                  "end": 1902
                },
                "start": 1859,
                "end": 1902
              },
              "start": 1857,
              "end": 1902
            },
            "start": 1849,
            "end": 1902
          },
          "init": null,
          "definite": false,
          "start": 1849,
          "end": 1902
        }
      ],
      "declare": true,
      "start": 1835,
      "end": 1903
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
            "name": "maybeIsString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1933,
                    "end": 1942
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 1954,
                            "end": 1961
                          },
                          "start": 1952,
                          "end": 1961
                        },
                        "start": 1947,
                        "end": 1961
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1974,
                          "end": 1979
                        },
                        "asserts": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1983,
                            "end": 1989
                          },
                          "start": 1983,
                          "end": 1989
                        },
                        "start": 1966,
                        "end": 1989
                      },
                      "start": 1963,
                      "end": 1989
                    },
                    "start": 1946,
                    "end": 1989
                  }
                ],
                "start": 1933,
                "end": 1990
              },
              "start": 1931,
              "end": 1990
            },
            "start": 1918,
            "end": 1990
          },
          "init": null,
          "definite": false,
          "start": 1918,
          "end": 1990
        }
      ],
      "declare": true,
      "start": 1904,
      "end": 1991
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
            "name": "maybeNever",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2018,
                    "end": 2027
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNeverKeyword",
                        "start": 2037,
                        "end": 2042
                      },
                      "start": 2034,
                      "end": 2042
                    },
                    "start": 2031,
                    "end": 2042
                  }
                ],
                "start": 2018,
                "end": 2043
              },
              "start": 2016,
              "end": 2043
            },
            "start": 2006,
            "end": 2043
          },
          "init": null,
          "definite": false,
          "start": 2006,
          "end": 2043
        }
      ],
      "declare": true,
      "start": 1992,
      "end": 2044
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f01",
        "optional": false,
        "typeAnnotation": null,
        "start": 2055,
        "end": 2058
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2062,
              "end": 2069
            },
            "start": 2060,
            "end": 2069
          },
          "start": 2059,
          "end": 2069
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
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2083,
                  "end": 2087
                },
                "prefix": true,
                "start": 2082,
                "end": 2087
              },
              "prefix": true,
              "start": 2081,
              "end": 2087
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ChainExpression",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2099,
                        "end": 2107
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2110,
                          "end": 2111
                        }
                      ],
                      "optional": true,
                      "start": 2099,
                      "end": 2112
                    },
                    "start": 2099,
                    "end": 2112
                  },
                  "directive": null,
                  "start": 2099,
                  "end": 2113
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2122,
                    "end": 2123
                  },
                  "directive": null,
                  "start": 2122,
                  "end": 2124
                }
              ],
              "start": 2089,
              "end": 2130
            },
            "alternate": null,
            "start": 2077,
            "end": 2130
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2141,
                  "end": 2145
                },
                "prefix": true,
                "start": 2140,
                "end": 2145
              },
              "prefix": true,
              "start": 2139,
              "end": 2145
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ChainExpression",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maybeIsString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2157,
                        "end": 2170
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2173,
                          "end": 2174
                        }
                      ],
                      "optional": true,
                      "start": 2157,
                      "end": 2175
                    },
                    "start": 2157,
                    "end": 2175
                  },
                  "directive": null,
                  "start": 2157,
                  "end": 2176
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2185,
                    "end": 2186
                  },
                  "directive": null,
                  "start": 2185,
                  "end": 2187
                }
              ],
              "start": 2147,
              "end": 2193
            },
            "alternate": null,
            "start": 2135,
            "end": 2193
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2204,
                  "end": 2208
                },
                "prefix": true,
                "start": 2203,
                "end": 2208
              },
              "prefix": true,
              "start": 2202,
              "end": 2208
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isDefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2220,
                      "end": 2229
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maybeIsString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2230,
                        "end": 2243
                      }
                    ],
                    "optional": false,
                    "start": 2220,
                    "end": 2244
                  },
                  "directive": null,
                  "start": 2220,
                  "end": 2245
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ChainExpression",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maybeIsString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2254,
                        "end": 2267
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2270,
                          "end": 2271
                        }
                      ],
                      "optional": true,
                      "start": 2254,
                      "end": 2272
                    },
                    "start": 2254,
                    "end": 2272
                  },
                  "directive": null,
                  "start": 2254,
                  "end": 2273
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2282,
                    "end": 2283
                  },
                  "directive": null,
                  "start": 2282,
                  "end": 2284
                }
              ],
              "start": 2210,
              "end": 2290
            },
            "alternate": null,
            "start": 2198,
            "end": 2290
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2301,
                  "end": 2305
                },
                "prefix": true,
                "start": 2300,
                "end": 2305
              },
              "prefix": true,
              "start": 2299,
              "end": 2305
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ChainExpression",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maybeNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2317,
                        "end": 2327
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": true,
                      "start": 2317,
                      "end": 2331
                    },
                    "start": 2317,
                    "end": 2331
                  },
                  "directive": null,
                  "start": 2317,
                  "end": 2332
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2341,
                    "end": 2342
                  },
                  "directive": null,
                  "start": 2341,
                  "end": 2343
                }
              ],
              "start": 2307,
              "end": 2349
            },
            "alternate": null,
            "start": 2295,
            "end": 2349
          }
        ],
        "start": 2071,
        "end": 2351
      },
      "expression": false,
      "start": 2046,
      "end": 2351
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 2358,
        "end": 2363
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2368,
              "end": 2371
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2373,
                    "end": 2379
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2382,
                    "end": 2388
                  }
                ],
                "start": 2373,
                "end": 2388
              },
              "start": 2371,
              "end": 2388
            },
            "accessibility": null,
            "static": false,
            "start": 2368,
            "end": 2389
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2390,
              "end": 2393
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2397,
                "end": 2403
              },
              "start": 2395,
              "end": 2403
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2390,
            "end": 2404
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 2405,
              "end": 2408
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 2410,
                "end": 2416
              },
              "start": 2408,
              "end": 2416
            },
            "accessibility": null,
            "static": false,
            "start": 2405,
            "end": 2416
          }
        ],
        "start": 2366,
        "end": 2418
      },
      "declare": false,
      "start": 2353,
      "end": 2419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2430,
        "end": 2433
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2437,
                    "end": 2442
                  },
                  "typeArguments": null,
                  "start": 2437,
                  "end": 2442
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2445,
                  "end": 2454
                }
              ],
              "start": 2437,
              "end": 2454
            },
            "start": 2435,
            "end": 2454
          },
          "start": 2434,
          "end": 2454
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2463,
              "end": 2469
            },
            "start": 2461,
            "end": 2469
          },
          "start": 2456,
          "end": 2469
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2481,
                    "end": 2482
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2484,
                    "end": 2487
                  },
                  "optional": true,
                  "computed": false,
                  "start": 2481,
                  "end": 2487
                },
                "start": 2481,
                "end": 2487
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2492,
                "end": 2497
              },
              "start": 2481,
              "end": 2497
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2509,
                      "end": 2510
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2511,
                      "end": 2514
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2509,
                    "end": 2514
                  },
                  "directive": null,
                  "start": 2509,
                  "end": 2515
                }
              ],
              "start": 2499,
              "end": 2521
            },
            "alternate": null,
            "start": 2477,
            "end": 2521
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2530,
                    "end": 2531
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 2534,
                    "end": 2539
                  },
                  "optional": true,
                  "computed": true,
                  "start": 2530,
                  "end": 2540
                },
                "start": 2530,
                "end": 2540
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2545,
                "end": 2550
              },
              "start": 2530,
              "end": 2550
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2562,
                      "end": 2563
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 2564,
                      "end": 2569
                    },
                    "optional": false,
                    "computed": true,
                    "start": 2562,
                    "end": 2570
                  },
                  "directive": null,
                  "start": 2562,
                  "end": 2571
                }
              ],
              "start": 2552,
              "end": 2577
            },
            "alternate": null,
            "start": 2526,
            "end": 2577
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2586,
                      "end": 2587
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2589,
                      "end": 2592
                    },
                    "optional": true,
                    "computed": false,
                    "start": 2586,
                    "end": 2592
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2586,
                  "end": 2594
                },
                "start": 2586,
                "end": 2594
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2599,
                "end": 2604
              },
              "start": 2586,
              "end": 2604
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2616,
                      "end": 2617
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2618,
                      "end": 2621
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2616,
                    "end": 2621
                  },
                  "directive": null,
                  "start": 2616,
                  "end": 2622
                }
              ],
              "start": 2606,
              "end": 2628
            },
            "alternate": null,
            "start": 2582,
            "end": 2628
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2637,
                    "end": 2638
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2640,
                    "end": 2643
                  },
                  "optional": true,
                  "computed": false,
                  "start": 2637,
                  "end": 2643
                },
                "start": 2637,
                "end": 2643
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2647,
                "end": 2652
              },
              "start": 2637,
              "end": 2652
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2664,
                      "end": 2665
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2666,
                      "end": 2669
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2664,
                    "end": 2669
                  },
                  "directive": null,
                  "start": 2664,
                  "end": 2670
                }
              ],
              "start": 2654,
              "end": 2676
            },
            "alternate": null,
            "start": 2633,
            "end": 2676
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2685,
                    "end": 2686
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 2689,
                    "end": 2694
                  },
                  "optional": true,
                  "computed": true,
                  "start": 2685,
                  "end": 2695
                },
                "start": 2685,
                "end": 2695
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2699,
                "end": 2704
              },
              "start": 2685,
              "end": 2704
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2716,
                      "end": 2717
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 2718,
                      "end": 2723
                    },
                    "optional": false,
                    "computed": true,
                    "start": 2716,
                    "end": 2724
                  },
                  "directive": null,
                  "start": 2716,
                  "end": 2725
                }
              ],
              "start": 2706,
              "end": 2731
            },
            "alternate": null,
            "start": 2681,
            "end": 2731
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2740,
                      "end": 2741
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2743,
                      "end": 2746
                    },
                    "optional": true,
                    "computed": false,
                    "start": 2740,
                    "end": 2746
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2740,
                  "end": 2748
                },
                "start": 2740,
                "end": 2748
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2752,
                "end": 2757
              },
              "start": 2740,
              "end": 2757
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2769,
                      "end": 2770
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2771,
                      "end": 2774
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2769,
                    "end": 2774
                  },
                  "directive": null,
                  "start": 2769,
                  "end": 2775
                }
              ],
              "start": 2759,
              "end": 2781
            },
            "alternate": null,
            "start": 2736,
            "end": 2781
          }
        ],
        "start": 2471,
        "end": 2783
      },
      "expression": false,
      "start": 2421,
      "end": 2783
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2794,
        "end": 2797
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2801,
                    "end": 2806
                  },
                  "typeArguments": null,
                  "start": 2801,
                  "end": 2806
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2809,
                  "end": 2813
                }
              ],
              "start": 2801,
              "end": 2813
            },
            "start": 2799,
            "end": 2813
          },
          "start": 2798,
          "end": 2813
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2822,
              "end": 2828
            },
            "start": 2820,
            "end": 2828
          },
          "start": 2815,
          "end": 2828
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2840,
                    "end": 2841
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2843,
                    "end": 2846
                  },
                  "optional": true,
                  "computed": false,
                  "start": 2840,
                  "end": 2846
                },
                "start": 2840,
                "end": 2846
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2851,
                "end": 2856
              },
              "start": 2840,
              "end": 2856
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2868,
                      "end": 2869
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2870,
                      "end": 2873
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2868,
                    "end": 2873
                  },
                  "directive": null,
                  "start": 2868,
                  "end": 2874
                }
              ],
              "start": 2858,
              "end": 2880
            },
            "alternate": null,
            "start": 2836,
            "end": 2880
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2889,
                    "end": 2890
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 2893,
                    "end": 2898
                  },
                  "optional": true,
                  "computed": true,
                  "start": 2889,
                  "end": 2899
                },
                "start": 2889,
                "end": 2899
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2904,
                "end": 2909
              },
              "start": 2889,
              "end": 2909
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2921,
                      "end": 2922
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 2923,
                      "end": 2928
                    },
                    "optional": false,
                    "computed": true,
                    "start": 2921,
                    "end": 2929
                  },
                  "directive": null,
                  "start": 2921,
                  "end": 2930
                }
              ],
              "start": 2911,
              "end": 2936
            },
            "alternate": null,
            "start": 2885,
            "end": 2936
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2945,
                      "end": 2946
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2948,
                      "end": 2951
                    },
                    "optional": true,
                    "computed": false,
                    "start": 2945,
                    "end": 2951
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2945,
                  "end": 2953
                },
                "start": 2945,
                "end": 2953
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2958,
                "end": 2963
              },
              "start": 2945,
              "end": 2963
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2975,
                      "end": 2976
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2977,
                      "end": 2980
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2975,
                    "end": 2980
                  },
                  "directive": null,
                  "start": 2975,
                  "end": 2981
                }
              ],
              "start": 2965,
              "end": 2987
            },
            "alternate": null,
            "start": 2941,
            "end": 2987
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2996,
                    "end": 2997
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2999,
                    "end": 3002
                  },
                  "optional": true,
                  "computed": false,
                  "start": 2996,
                  "end": 3002
                },
                "start": 2996,
                "end": 3002
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3006,
                "end": 3011
              },
              "start": 2996,
              "end": 3011
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3023,
                      "end": 3024
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3025,
                      "end": 3028
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3023,
                    "end": 3028
                  },
                  "directive": null,
                  "start": 3023,
                  "end": 3029
                }
              ],
              "start": 3013,
              "end": 3035
            },
            "alternate": null,
            "start": 2992,
            "end": 3035
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3044,
                    "end": 3045
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 3048,
                    "end": 3053
                  },
                  "optional": true,
                  "computed": true,
                  "start": 3044,
                  "end": 3054
                },
                "start": 3044,
                "end": 3054
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3058,
                "end": 3063
              },
              "start": 3044,
              "end": 3063
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3075,
                      "end": 3076
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 3077,
                      "end": 3082
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3075,
                    "end": 3083
                  },
                  "directive": null,
                  "start": 3075,
                  "end": 3084
                }
              ],
              "start": 3065,
              "end": 3090
            },
            "alternate": null,
            "start": 3040,
            "end": 3090
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3099,
                      "end": 3100
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3102,
                      "end": 3105
                    },
                    "optional": true,
                    "computed": false,
                    "start": 3099,
                    "end": 3105
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3099,
                  "end": 3107
                },
                "start": 3099,
                "end": 3107
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3111,
                "end": 3116
              },
              "start": 3099,
              "end": 3116
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3128,
                      "end": 3129
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3130,
                      "end": 3133
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3128,
                    "end": 3133
                  },
                  "directive": null,
                  "start": 3128,
                  "end": 3134
                }
              ],
              "start": 3118,
              "end": 3140
            },
            "alternate": null,
            "start": 3095,
            "end": 3140
          }
        ],
        "start": 2830,
        "end": 3142
      },
      "expression": false,
      "start": 2785,
      "end": 3142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 3153,
        "end": 3156
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3160,
                    "end": 3165
                  },
                  "typeArguments": null,
                  "start": 3160,
                  "end": 3165
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3168,
                  "end": 3177
                }
              ],
              "start": 3160,
              "end": 3177
            },
            "start": 3158,
            "end": 3177
          },
          "start": 3157,
          "end": 3177
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 3186,
                  "end": 3192
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3195,
                  "end": 3204
                }
              ],
              "start": 3186,
              "end": 3204
            },
            "start": 3184,
            "end": 3204
          },
          "start": 3179,
          "end": 3204
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3216,
                    "end": 3217
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3219,
                    "end": 3222
                  },
                  "optional": true,
                  "computed": false,
                  "start": 3216,
                  "end": 3222
                },
                "start": 3216,
                "end": 3222
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3227,
                "end": 3232
              },
              "start": 3216,
              "end": 3232
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3244,
                      "end": 3245
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3246,
                      "end": 3249
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3244,
                    "end": 3249
                  },
                  "directive": null,
                  "start": 3244,
                  "end": 3250
                }
              ],
              "start": 3234,
              "end": 3266
            },
            "alternate": null,
            "start": 3212,
            "end": 3266
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3275,
                    "end": 3276
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 3279,
                    "end": 3284
                  },
                  "optional": true,
                  "computed": true,
                  "start": 3275,
                  "end": 3285
                },
                "start": 3275,
                "end": 3285
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3290,
                "end": 3295
              },
              "start": 3275,
              "end": 3295
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3307,
                      "end": 3308
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 3309,
                      "end": 3314
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3307,
                    "end": 3315
                  },
                  "directive": null,
                  "start": 3307,
                  "end": 3316
                }
              ],
              "start": 3297,
              "end": 3332
            },
            "alternate": null,
            "start": 3271,
            "end": 3332
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3341,
                      "end": 3342
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3344,
                      "end": 3347
                    },
                    "optional": true,
                    "computed": false,
                    "start": 3341,
                    "end": 3347
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3341,
                  "end": 3349
                },
                "start": 3341,
                "end": 3349
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3354,
                "end": 3359
              },
              "start": 3341,
              "end": 3359
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3371,
                      "end": 3372
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3373,
                      "end": 3376
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3371,
                    "end": 3376
                  },
                  "directive": null,
                  "start": 3371,
                  "end": 3377
                }
              ],
              "start": 3361,
              "end": 3393
            },
            "alternate": null,
            "start": 3337,
            "end": 3393
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3402,
                    "end": 3403
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3405,
                    "end": 3408
                  },
                  "optional": true,
                  "computed": false,
                  "start": 3402,
                  "end": 3408
                },
                "start": 3402,
                "end": 3408
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3412,
                "end": 3417
              },
              "start": 3402,
              "end": 3417
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3429,
                      "end": 3430
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3431,
                      "end": 3434
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3429,
                    "end": 3434
                  },
                  "directive": null,
                  "start": 3429,
                  "end": 3435
                }
              ],
              "start": 3419,
              "end": 3451
            },
            "alternate": null,
            "start": 3398,
            "end": 3451
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3460,
                    "end": 3461
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 3464,
                    "end": 3469
                  },
                  "optional": true,
                  "computed": true,
                  "start": 3460,
                  "end": 3470
                },
                "start": 3460,
                "end": 3470
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3474,
                "end": 3479
              },
              "start": 3460,
              "end": 3479
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3491,
                      "end": 3492
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 3493,
                      "end": 3498
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3491,
                    "end": 3499
                  },
                  "directive": null,
                  "start": 3491,
                  "end": 3500
                }
              ],
              "start": 3481,
              "end": 3516
            },
            "alternate": null,
            "start": 3456,
            "end": 3516
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3525,
                      "end": 3526
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3528,
                      "end": 3531
                    },
                    "optional": true,
                    "computed": false,
                    "start": 3525,
                    "end": 3531
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3525,
                  "end": 3533
                },
                "start": 3525,
                "end": 3533
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3537,
                "end": 3542
              },
              "start": 3525,
              "end": 3542
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3554,
                      "end": 3555
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3556,
                      "end": 3559
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3554,
                    "end": 3559
                  },
                  "directive": null,
                  "start": 3554,
                  "end": 3560
                }
              ],
              "start": 3544,
              "end": 3576
            },
            "alternate": null,
            "start": 3521,
            "end": 3576
          }
        ],
        "start": 3206,
        "end": 3578
      },
      "expression": false,
      "start": 3144,
      "end": 3578
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12a",
        "optional": false,
        "typeAnnotation": null,
        "start": 3589,
        "end": 3593
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3597,
                    "end": 3602
                  },
                  "typeArguments": null,
                  "start": 3597,
                  "end": 3602
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3605,
                  "end": 3614
                }
              ],
              "start": 3597,
              "end": 3614
            },
            "start": 3595,
            "end": 3614
          },
          "start": 3594,
          "end": 3614
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 3623,
                  "end": 3629
                },
                {
                  "type": "TSNullKeyword",
                  "start": 3632,
                  "end": 3636
                }
              ],
              "start": 3623,
              "end": 3636
            },
            "start": 3621,
            "end": 3636
          },
          "start": 3616,
          "end": 3636
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3648,
                    "end": 3649
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3651,
                    "end": 3654
                  },
                  "optional": true,
                  "computed": false,
                  "start": 3648,
                  "end": 3654
                },
                "start": 3648,
                "end": 3654
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3659,
                "end": 3664
              },
              "start": 3648,
              "end": 3664
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3676,
                      "end": 3677
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3678,
                      "end": 3681
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3676,
                    "end": 3681
                  },
                  "directive": null,
                  "start": 3676,
                  "end": 3682
                }
              ],
              "start": 3666,
              "end": 3688
            },
            "alternate": null,
            "start": 3644,
            "end": 3688
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3697,
                    "end": 3698
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 3701,
                    "end": 3706
                  },
                  "optional": true,
                  "computed": true,
                  "start": 3697,
                  "end": 3707
                },
                "start": 3697,
                "end": 3707
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3712,
                "end": 3717
              },
              "start": 3697,
              "end": 3717
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3729,
                      "end": 3730
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 3731,
                      "end": 3736
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3729,
                    "end": 3737
                  },
                  "directive": null,
                  "start": 3729,
                  "end": 3738
                }
              ],
              "start": 3719,
              "end": 3744
            },
            "alternate": null,
            "start": 3693,
            "end": 3744
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3753,
                      "end": 3754
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3756,
                      "end": 3759
                    },
                    "optional": true,
                    "computed": false,
                    "start": 3753,
                    "end": 3759
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3753,
                  "end": 3761
                },
                "start": 3753,
                "end": 3761
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3766,
                "end": 3771
              },
              "start": 3753,
              "end": 3771
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3783,
                      "end": 3784
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3785,
                      "end": 3788
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3783,
                    "end": 3788
                  },
                  "directive": null,
                  "start": 3783,
                  "end": 3789
                }
              ],
              "start": 3773,
              "end": 3795
            },
            "alternate": null,
            "start": 3749,
            "end": 3795
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3804,
                    "end": 3805
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3807,
                    "end": 3810
                  },
                  "optional": true,
                  "computed": false,
                  "start": 3804,
                  "end": 3810
                },
                "start": 3804,
                "end": 3810
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3814,
                "end": 3819
              },
              "start": 3804,
              "end": 3819
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3831,
                      "end": 3832
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3833,
                      "end": 3836
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3831,
                    "end": 3836
                  },
                  "directive": null,
                  "start": 3831,
                  "end": 3837
                }
              ],
              "start": 3821,
              "end": 3853
            },
            "alternate": null,
            "start": 3800,
            "end": 3853
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3862,
                    "end": 3863
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 3866,
                    "end": 3871
                  },
                  "optional": true,
                  "computed": true,
                  "start": 3862,
                  "end": 3872
                },
                "start": 3862,
                "end": 3872
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3876,
                "end": 3881
              },
              "start": 3862,
              "end": 3881
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3893,
                      "end": 3894
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 3895,
                      "end": 3900
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3893,
                    "end": 3901
                  },
                  "directive": null,
                  "start": 3893,
                  "end": 3902
                }
              ],
              "start": 3883,
              "end": 3918
            },
            "alternate": null,
            "start": 3858,
            "end": 3918
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3927,
                      "end": 3928
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3930,
                      "end": 3933
                    },
                    "optional": true,
                    "computed": false,
                    "start": 3927,
                    "end": 3933
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3927,
                  "end": 3935
                },
                "start": 3927,
                "end": 3935
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3939,
                "end": 3944
              },
              "start": 3927,
              "end": 3944
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3956,
                      "end": 3957
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3958,
                      "end": 3961
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3956,
                    "end": 3961
                  },
                  "directive": null,
                  "start": 3956,
                  "end": 3962
                }
              ],
              "start": 3946,
              "end": 3978
            },
            "alternate": null,
            "start": 3923,
            "end": 3978
          }
        ],
        "start": 3638,
        "end": 3980
      },
      "expression": false,
      "start": 3580,
      "end": 3980
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3991,
        "end": 3994
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3998,
                    "end": 4003
                  },
                  "typeArguments": null,
                  "start": 3998,
                  "end": 4003
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4006,
                  "end": 4015
                }
              ],
              "start": 3998,
              "end": 4015
            },
            "start": 3996,
            "end": 4015
          },
          "start": 3995,
          "end": 4015
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4027,
                    "end": 4028
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4030,
                    "end": 4033
                  },
                  "optional": true,
                  "computed": false,
                  "start": 4027,
                  "end": 4033
                },
                "start": 4027,
                "end": 4033
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4038,
                "end": 4047
              },
              "start": 4027,
              "end": 4047
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4059,
                      "end": 4060
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4061,
                      "end": 4064
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4059,
                    "end": 4064
                  },
                  "directive": null,
                  "start": 4059,
                  "end": 4065
                }
              ],
              "start": 4049,
              "end": 4071
            },
            "alternate": null,
            "start": 4023,
            "end": 4071
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4080,
                    "end": 4081
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 4084,
                    "end": 4089
                  },
                  "optional": true,
                  "computed": true,
                  "start": 4080,
                  "end": 4090
                },
                "start": 4080,
                "end": 4090
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4095,
                "end": 4104
              },
              "start": 4080,
              "end": 4104
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4116,
                      "end": 4117
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 4118,
                      "end": 4123
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4116,
                    "end": 4124
                  },
                  "directive": null,
                  "start": 4116,
                  "end": 4125
                }
              ],
              "start": 4106,
              "end": 4131
            },
            "alternate": null,
            "start": 4076,
            "end": 4131
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4140,
                      "end": 4141
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4143,
                      "end": 4146
                    },
                    "optional": true,
                    "computed": false,
                    "start": 4140,
                    "end": 4146
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4140,
                  "end": 4148
                },
                "start": 4140,
                "end": 4148
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4153,
                "end": 4162
              },
              "start": 4140,
              "end": 4162
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4174,
                      "end": 4175
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4176,
                      "end": 4179
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4174,
                    "end": 4179
                  },
                  "directive": null,
                  "start": 4174,
                  "end": 4180
                }
              ],
              "start": 4164,
              "end": 4186
            },
            "alternate": null,
            "start": 4136,
            "end": 4186
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4195,
                    "end": 4196
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4198,
                    "end": 4201
                  },
                  "optional": true,
                  "computed": false,
                  "start": 4195,
                  "end": 4201
                },
                "start": 4195,
                "end": 4201
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4205,
                "end": 4214
              },
              "start": 4195,
              "end": 4214
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4226,
                      "end": 4227
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4228,
                      "end": 4231
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4226,
                    "end": 4231
                  },
                  "directive": null,
                  "start": 4226,
                  "end": 4232
                }
              ],
              "start": 4216,
              "end": 4238
            },
            "alternate": null,
            "start": 4191,
            "end": 4238
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4247,
                    "end": 4248
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 4251,
                    "end": 4256
                  },
                  "optional": true,
                  "computed": true,
                  "start": 4247,
                  "end": 4257
                },
                "start": 4247,
                "end": 4257
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4261,
                "end": 4270
              },
              "start": 4247,
              "end": 4270
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4282,
                      "end": 4283
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 4284,
                      "end": 4289
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4282,
                    "end": 4290
                  },
                  "directive": null,
                  "start": 4282,
                  "end": 4291
                }
              ],
              "start": 4272,
              "end": 4297
            },
            "alternate": null,
            "start": 4243,
            "end": 4297
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4306,
                      "end": 4307
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4309,
                      "end": 4312
                    },
                    "optional": true,
                    "computed": false,
                    "start": 4306,
                    "end": 4312
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4306,
                  "end": 4314
                },
                "start": 4306,
                "end": 4314
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4318,
                "end": 4327
              },
              "start": 4306,
              "end": 4327
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4339,
                      "end": 4340
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4341,
                      "end": 4344
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4339,
                    "end": 4344
                  },
                  "directive": null,
                  "start": 4339,
                  "end": 4345
                }
              ],
              "start": 4329,
              "end": 4351
            },
            "alternate": null,
            "start": 4302,
            "end": 4351
          }
        ],
        "start": 4017,
        "end": 4353
      },
      "expression": false,
      "start": 3982,
      "end": 4353
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13a",
        "optional": false,
        "typeAnnotation": null,
        "start": 4364,
        "end": 4368
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4372,
                    "end": 4377
                  },
                  "typeArguments": null,
                  "start": 4372,
                  "end": 4377
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4380,
                  "end": 4389
                }
              ],
              "start": 4372,
              "end": 4389
            },
            "start": 4370,
            "end": 4389
          },
          "start": 4369,
          "end": 4389
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4401,
                    "end": 4402
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4404,
                    "end": 4407
                  },
                  "optional": true,
                  "computed": false,
                  "start": 4401,
                  "end": 4407
                },
                "start": 4401,
                "end": 4407
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4412,
                "end": 4416
              },
              "start": 4401,
              "end": 4416
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4428,
                      "end": 4429
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4430,
                      "end": 4433
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4428,
                    "end": 4433
                  },
                  "directive": null,
                  "start": 4428,
                  "end": 4434
                }
              ],
              "start": 4418,
              "end": 4450
            },
            "alternate": null,
            "start": 4397,
            "end": 4450
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4459,
                    "end": 4460
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 4463,
                    "end": 4468
                  },
                  "optional": true,
                  "computed": true,
                  "start": 4459,
                  "end": 4469
                },
                "start": 4459,
                "end": 4469
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4474,
                "end": 4478
              },
              "start": 4459,
              "end": 4478
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4490,
                      "end": 4491
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 4492,
                      "end": 4497
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4490,
                    "end": 4498
                  },
                  "directive": null,
                  "start": 4490,
                  "end": 4499
                }
              ],
              "start": 4480,
              "end": 4515
            },
            "alternate": null,
            "start": 4455,
            "end": 4515
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4524,
                      "end": 4525
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4527,
                      "end": 4530
                    },
                    "optional": true,
                    "computed": false,
                    "start": 4524,
                    "end": 4530
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4524,
                  "end": 4532
                },
                "start": 4524,
                "end": 4532
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4537,
                "end": 4541
              },
              "start": 4524,
              "end": 4541
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4553,
                      "end": 4554
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4555,
                      "end": 4558
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4553,
                    "end": 4558
                  },
                  "directive": null,
                  "start": 4553,
                  "end": 4559
                }
              ],
              "start": 4543,
              "end": 4575
            },
            "alternate": null,
            "start": 4520,
            "end": 4575
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4584,
                    "end": 4585
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4587,
                    "end": 4590
                  },
                  "optional": true,
                  "computed": false,
                  "start": 4584,
                  "end": 4590
                },
                "start": 4584,
                "end": 4590
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4594,
                "end": 4598
              },
              "start": 4584,
              "end": 4598
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4610,
                      "end": 4611
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4612,
                      "end": 4615
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4610,
                    "end": 4615
                  },
                  "directive": null,
                  "start": 4610,
                  "end": 4616
                }
              ],
              "start": 4600,
              "end": 4622
            },
            "alternate": null,
            "start": 4580,
            "end": 4622
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4631,
                    "end": 4632
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 4635,
                    "end": 4640
                  },
                  "optional": true,
                  "computed": true,
                  "start": 4631,
                  "end": 4641
                },
                "start": 4631,
                "end": 4641
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4645,
                "end": 4649
              },
              "start": 4631,
              "end": 4649
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4661,
                      "end": 4662
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 4663,
                      "end": 4668
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4661,
                    "end": 4669
                  },
                  "directive": null,
                  "start": 4661,
                  "end": 4670
                }
              ],
              "start": 4651,
              "end": 4676
            },
            "alternate": null,
            "start": 4627,
            "end": 4676
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4685,
                      "end": 4686
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4688,
                      "end": 4691
                    },
                    "optional": true,
                    "computed": false,
                    "start": 4685,
                    "end": 4691
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4685,
                  "end": 4693
                },
                "start": 4685,
                "end": 4693
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4697,
                "end": 4701
              },
              "start": 4685,
              "end": 4701
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4713,
                      "end": 4714
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4715,
                      "end": 4718
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4713,
                    "end": 4718
                  },
                  "directive": null,
                  "start": 4713,
                  "end": 4719
                }
              ],
              "start": 4703,
              "end": 4725
            },
            "alternate": null,
            "start": 4681,
            "end": 4725
          }
        ],
        "start": 4391,
        "end": 4727
      },
      "expression": false,
      "start": 4355,
      "end": 4727
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 4738,
        "end": 4741
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4745,
                    "end": 4750
                  },
                  "typeArguments": null,
                  "start": 4745,
                  "end": 4750
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4753,
                  "end": 4757
                }
              ],
              "start": 4745,
              "end": 4757
            },
            "start": 4743,
            "end": 4757
          },
          "start": 4742,
          "end": 4757
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4769,
                    "end": 4770
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4772,
                    "end": 4775
                  },
                  "optional": true,
                  "computed": false,
                  "start": 4769,
                  "end": 4775
                },
                "start": 4769,
                "end": 4775
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4780,
                "end": 4789
              },
              "start": 4769,
              "end": 4789
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4801,
                      "end": 4802
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4803,
                      "end": 4806
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4801,
                    "end": 4806
                  },
                  "directive": null,
                  "start": 4801,
                  "end": 4807
                }
              ],
              "start": 4791,
              "end": 4813
            },
            "alternate": null,
            "start": 4765,
            "end": 4813
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4822,
                    "end": 4823
                  },
                  "property": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 4826,
                    "end": 4831
                  },
                  "optional": true,
                  "computed": true,
                  "start": 4822,
                  "end": 4832
                },
                "start": 4822,
                "end": 4832
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4837,
                "end": 4846
              },
              "start": 4822,
              "end": 4846
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4858,
                      "end": 4859
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 4860,
                      "end": 4865
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4858,
                    "end": 4866
                  },
                  "directive": null,
                  "start": 4858,
                  "end": 4867
                }
              ],
              "start": 4848,
              "end": 4873
            },
            "alternate": null,
            "start": 4818,
            "end": 4873
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4882,
                      "end": 4883
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4885,
                      "end": 4888
                    },
                    "optional": true,
                    "computed": false,
                    "start": 4882,
                    "end": 4888
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4882,
                  "end": 4890
                },
                "start": 4882,
                "end": 4890
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4895,
                "end": 4904
              },
              "start": 4882,
              "end": 4904
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4916,
                      "end": 4917
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4918,
                      "end": 4921
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4916,
                    "end": 4921
                  },
                  "directive": null,
                  "start": 4916,
                  "end": 4922
                }
              ],
              "start": 4906,
              "end": 4928
            },
            "alternate": null,
            "start": 4878,
            "end": 4928
          }
        ],
        "start": 4759,
        "end": 4930
      },
      "expression": false,
      "start": 4729,
      "end": 4930
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 4941,
        "end": 4944
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4948,
                    "end": 4953
                  },
                  "typeArguments": null,
                  "start": 4948,
                  "end": 4953
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4956,
                  "end": 4965
                }
              ],
              "start": 4948,
              "end": 4965
            },
            "start": 4946,
            "end": 4965
          },
          "start": 4945,
          "end": 4965
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4974,
              "end": 4980
            },
            "start": 4972,
            "end": 4980
          },
          "start": 4967,
          "end": 4980
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4992,
                    "end": 4993
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4995,
                    "end": 4998
                  },
                  "optional": true,
                  "computed": false,
                  "start": 4992,
                  "end": 4998
                },
                "start": 4992,
                "end": 4998
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 5003,
                "end": 5008
              },
              "start": 4992,
              "end": 5008
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5020,
                      "end": 5021
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5022,
                      "end": 5025
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5020,
                    "end": 5025
                  },
                  "directive": null,
                  "start": 5020,
                  "end": 5026
                }
              ],
              "start": 5010,
              "end": 5032
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5052,
                      "end": 5053
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5054,
                      "end": 5057
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5052,
                    "end": 5057
                  },
                  "directive": null,
                  "start": 5052,
                  "end": 5058
                }
              ],
              "start": 5042,
              "end": 5074
            },
            "start": 4988,
            "end": 5074
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5083,
                    "end": 5084
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5086,
                    "end": 5089
                  },
                  "optional": true,
                  "computed": false,
                  "start": 5083,
                  "end": 5089
                },
                "start": 5083,
                "end": 5089
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 5094,
                "end": 5099
              },
              "start": 5083,
              "end": 5099
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5111,
                      "end": 5112
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5113,
                      "end": 5116
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5111,
                    "end": 5116
                  },
                  "directive": null,
                  "start": 5111,
                  "end": 5117
                }
              ],
              "start": 5101,
              "end": 5133
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5153,
                      "end": 5154
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5155,
                      "end": 5158
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5153,
                    "end": 5158
                  },
                  "directive": null,
                  "start": 5153,
                  "end": 5159
                }
              ],
              "start": 5143,
              "end": 5165
            },
            "start": 5079,
            "end": 5165
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5174,
                    "end": 5175
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5177,
                    "end": 5180
                  },
                  "optional": true,
                  "computed": false,
                  "start": 5174,
                  "end": 5180
                },
                "start": 5174,
                "end": 5180
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 5184,
                "end": 5189
              },
              "start": 5174,
              "end": 5189
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5201,
                      "end": 5202
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5203,
                      "end": 5206
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5201,
                    "end": 5206
                  },
                  "directive": null,
                  "start": 5201,
                  "end": 5207
                }
              ],
              "start": 5191,
              "end": 5213
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5233,
                      "end": 5234
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5235,
                      "end": 5238
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5233,
                    "end": 5238
                  },
                  "directive": null,
                  "start": 5233,
                  "end": 5239
                }
              ],
              "start": 5223,
              "end": 5255
            },
            "start": 5170,
            "end": 5255
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5264,
                    "end": 5265
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5267,
                    "end": 5270
                  },
                  "optional": true,
                  "computed": false,
                  "start": 5264,
                  "end": 5270
                },
                "start": 5264,
                "end": 5270
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 5274,
                "end": 5279
              },
              "start": 5264,
              "end": 5279
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5291,
                      "end": 5292
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5293,
                      "end": 5296
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5291,
                    "end": 5296
                  },
                  "directive": null,
                  "start": 5291,
                  "end": 5297
                }
              ],
              "start": 5281,
              "end": 5313
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5333,
                      "end": 5334
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5335,
                      "end": 5338
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5333,
                    "end": 5338
                  },
                  "directive": null,
                  "start": 5333,
                  "end": 5339
                }
              ],
              "start": 5323,
              "end": 5345
            },
            "start": 5260,
            "end": 5345
          }
        ],
        "start": 4982,
        "end": 5347
      },
      "expression": false,
      "start": 4932,
      "end": 5347
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15a",
        "optional": false,
        "typeAnnotation": null,
        "start": 5358,
        "end": 5362
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5366,
                    "end": 5371
                  },
                  "typeArguments": null,
                  "start": 5366,
                  "end": 5371
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 5374,
                  "end": 5383
                }
              ],
              "start": 5366,
              "end": 5383
            },
            "start": 5364,
            "end": 5383
          },
          "start": 5363,
          "end": 5383
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5392,
              "end": 5399
            },
            "start": 5390,
            "end": 5399
          },
          "start": 5385,
          "end": 5399
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5411,
                    "end": 5412
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5414,
                    "end": 5417
                  },
                  "optional": true,
                  "computed": false,
                  "start": 5411,
                  "end": 5417
                },
                "start": 5411,
                "end": 5417
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 5422,
                "end": 5427
              },
              "start": 5411,
              "end": 5427
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5439,
                      "end": 5440
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5441,
                      "end": 5444
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5439,
                    "end": 5444
                  },
                  "directive": null,
                  "start": 5439,
                  "end": 5445
                }
              ],
              "start": 5429,
              "end": 5461
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5481,
                      "end": 5482
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5483,
                      "end": 5486
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5481,
                    "end": 5486
                  },
                  "directive": null,
                  "start": 5481,
                  "end": 5487
                }
              ],
              "start": 5471,
              "end": 5503
            },
            "start": 5407,
            "end": 5503
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5512,
                    "end": 5513
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5515,
                    "end": 5518
                  },
                  "optional": true,
                  "computed": false,
                  "start": 5512,
                  "end": 5518
                },
                "start": 5512,
                "end": 5518
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 5523,
                "end": 5528
              },
              "start": 5512,
              "end": 5528
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5540,
                      "end": 5541
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5542,
                      "end": 5545
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5540,
                    "end": 5545
                  },
                  "directive": null,
                  "start": 5540,
                  "end": 5546
                }
              ],
              "start": 5530,
              "end": 5562
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5582,
                      "end": 5583
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5584,
                      "end": 5587
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5582,
                    "end": 5587
                  },
                  "directive": null,
                  "start": 5582,
                  "end": 5588
                }
              ],
              "start": 5572,
              "end": 5604
            },
            "start": 5508,
            "end": 5604
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5613,
                    "end": 5614
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5616,
                    "end": 5619
                  },
                  "optional": true,
                  "computed": false,
                  "start": 5613,
                  "end": 5619
                },
                "start": 5613,
                "end": 5619
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 5623,
                "end": 5628
              },
              "start": 5613,
              "end": 5628
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5640,
                      "end": 5641
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5642,
                      "end": 5645
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5640,
                    "end": 5645
                  },
                  "directive": null,
                  "start": 5640,
                  "end": 5646
                }
              ],
              "start": 5630,
              "end": 5662
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5682,
                      "end": 5683
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5684,
                      "end": 5687
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5682,
                    "end": 5687
                  },
                  "directive": null,
                  "start": 5682,
                  "end": 5688
                }
              ],
              "start": 5672,
              "end": 5704
            },
            "start": 5609,
            "end": 5704
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5713,
                    "end": 5714
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5716,
                    "end": 5719
                  },
                  "optional": true,
                  "computed": false,
                  "start": 5713,
                  "end": 5719
                },
                "start": 5713,
                "end": 5719
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 5723,
                "end": 5728
              },
              "start": 5713,
              "end": 5728
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5740,
                      "end": 5741
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5742,
                      "end": 5745
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5740,
                    "end": 5745
                  },
                  "directive": null,
                  "start": 5740,
                  "end": 5746
                }
              ],
              "start": 5730,
              "end": 5762
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5782,
                      "end": 5783
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5784,
                      "end": 5787
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5782,
                    "end": 5787
                  },
                  "directive": null,
                  "start": 5782,
                  "end": 5788
                }
              ],
              "start": 5772,
              "end": 5804
            },
            "start": 5709,
            "end": 5804
          }
        ],
        "start": 5401,
        "end": 5806
      },
      "expression": false,
      "start": 5349,
      "end": 5806
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null,
        "start": 5817,
        "end": 5820
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5824,
                    "end": 5829
                  },
                  "typeArguments": null,
                  "start": 5824,
                  "end": 5829
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 5832,
                  "end": 5841
                }
              ],
              "start": 5824,
              "end": 5841
            },
            "start": 5822,
            "end": 5841
          },
          "start": 5821,
          "end": 5841
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5853,
                    "end": 5854
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5856,
                    "end": 5859
                  },
                  "optional": true,
                  "computed": false,
                  "start": 5853,
                  "end": 5859
                },
                "start": 5853,
                "end": 5859
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 5864,
                "end": 5873
              },
              "start": 5853,
              "end": 5873
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5885,
                      "end": 5886
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5887,
                      "end": 5890
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5885,
                    "end": 5890
                  },
                  "directive": null,
                  "start": 5885,
                  "end": 5891
                }
              ],
              "start": 5875,
              "end": 5907
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5927,
                      "end": 5928
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5929,
                      "end": 5932
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5927,
                    "end": 5932
                  },
                  "directive": null,
                  "start": 5927,
                  "end": 5933
                }
              ],
              "start": 5917,
              "end": 5939
            },
            "start": 5849,
            "end": 5939
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5948,
                    "end": 5949
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5951,
                    "end": 5954
                  },
                  "optional": true,
                  "computed": false,
                  "start": 5948,
                  "end": 5954
                },
                "start": 5948,
                "end": 5954
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 5959,
                "end": 5968
              },
              "start": 5948,
              "end": 5968
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5980,
                      "end": 5981
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5982,
                      "end": 5985
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5980,
                    "end": 5985
                  },
                  "directive": null,
                  "start": 5980,
                  "end": 5986
                }
              ],
              "start": 5970,
              "end": 5992
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6012,
                      "end": 6013
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6014,
                      "end": 6017
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6012,
                    "end": 6017
                  },
                  "directive": null,
                  "start": 6012,
                  "end": 6018
                }
              ],
              "start": 6002,
              "end": 6034
            },
            "start": 5944,
            "end": 6034
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6043,
                    "end": 6044
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6046,
                    "end": 6049
                  },
                  "optional": true,
                  "computed": false,
                  "start": 6043,
                  "end": 6049
                },
                "start": 6043,
                "end": 6049
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 6053,
                "end": 6062
              },
              "start": 6043,
              "end": 6062
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6074,
                      "end": 6075
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6076,
                      "end": 6079
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6074,
                    "end": 6079
                  },
                  "directive": null,
                  "start": 6074,
                  "end": 6080
                }
              ],
              "start": 6064,
              "end": 6096
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6116,
                      "end": 6117
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6118,
                      "end": 6121
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6116,
                    "end": 6121
                  },
                  "directive": null,
                  "start": 6116,
                  "end": 6122
                }
              ],
              "start": 6106,
              "end": 6128
            },
            "start": 6039,
            "end": 6128
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6137,
                    "end": 6138
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6140,
                    "end": 6143
                  },
                  "optional": true,
                  "computed": false,
                  "start": 6137,
                  "end": 6143
                },
                "start": 6137,
                "end": 6143
              },
              "operator": "!=",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 6147,
                "end": 6156
              },
              "start": 6137,
              "end": 6156
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6168,
                      "end": 6169
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6170,
                      "end": 6173
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6168,
                    "end": 6173
                  },
                  "directive": null,
                  "start": 6168,
                  "end": 6174
                }
              ],
              "start": 6158,
              "end": 6180
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6200,
                      "end": 6201
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6202,
                      "end": 6205
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6200,
                    "end": 6205
                  },
                  "directive": null,
                  "start": 6200,
                  "end": 6206
                }
              ],
              "start": 6190,
              "end": 6222
            },
            "start": 6133,
            "end": 6222
          }
        ],
        "start": 5843,
        "end": 6224
      },
      "expression": false,
      "start": 5808,
      "end": 6224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 6235,
        "end": 6238
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6242,
                    "end": 6247
                  },
                  "typeArguments": null,
                  "start": 6242,
                  "end": 6247
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 6250,
                  "end": 6259
                }
              ],
              "start": 6242,
              "end": 6259
            },
            "start": 6240,
            "end": 6259
          },
          "start": 6239,
          "end": 6259
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6278,
                      "end": 6279
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6281,
                      "end": 6284
                    },
                    "optional": true,
                    "computed": false,
                    "start": 6278,
                    "end": 6284
                  },
                  "start": 6278,
                  "end": 6284
                },
                "prefix": true,
                "start": 6271,
                "end": 6284
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 6289,
                "end": 6297
              },
              "start": 6271,
              "end": 6297
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6309,
                      "end": 6310
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6311,
                      "end": 6314
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6309,
                    "end": 6314
                  },
                  "directive": null,
                  "start": 6309,
                  "end": 6315
                }
              ],
              "start": 6299,
              "end": 6321
            },
            "alternate": null,
            "start": 6267,
            "end": 6321
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6337,
                      "end": 6338
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 6341,
                      "end": 6346
                    },
                    "optional": true,
                    "computed": true,
                    "start": 6337,
                    "end": 6347
                  },
                  "start": 6337,
                  "end": 6347
                },
                "prefix": true,
                "start": 6330,
                "end": 6347
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 6352,
                "end": 6360
              },
              "start": 6330,
              "end": 6360
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6372,
                      "end": 6373
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 6374,
                      "end": 6379
                    },
                    "optional": false,
                    "computed": true,
                    "start": 6372,
                    "end": 6380
                  },
                  "directive": null,
                  "start": 6372,
                  "end": 6381
                }
              ],
              "start": 6362,
              "end": 6387
            },
            "alternate": null,
            "start": 6326,
            "end": 6387
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6403,
                        "end": 6404
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6406,
                        "end": 6409
                      },
                      "optional": true,
                      "computed": false,
                      "start": 6403,
                      "end": 6409
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 6403,
                    "end": 6411
                  },
                  "start": 6403,
                  "end": 6411
                },
                "prefix": true,
                "start": 6396,
                "end": 6411
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 6416,
                "end": 6424
              },
              "start": 6396,
              "end": 6424
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6436,
                      "end": 6437
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6438,
                      "end": 6441
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6436,
                    "end": 6441
                  },
                  "directive": null,
                  "start": 6436,
                  "end": 6442
                }
              ],
              "start": 6426,
              "end": 6448
            },
            "alternate": null,
            "start": 6392,
            "end": 6448
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6457,
                    "end": 6458
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6460,
                    "end": 6463
                  },
                  "optional": true,
                  "computed": false,
                  "start": 6457,
                  "end": 6463
                },
                "start": 6457,
                "end": 6463
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 6475,
                "end": 6480
              },
              "start": 6457,
              "end": 6480
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6492,
                      "end": 6493
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6494,
                      "end": 6497
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6492,
                    "end": 6497
                  },
                  "directive": null,
                  "start": 6492,
                  "end": 6498
                }
              ],
              "start": 6482,
              "end": 6504
            },
            "alternate": null,
            "start": 6453,
            "end": 6504
          }
        ],
        "start": 6261,
        "end": 6506
      },
      "expression": false,
      "start": 6226,
      "end": 6506
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 6517,
        "end": 6520
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6524,
                    "end": 6529
                  },
                  "typeArguments": null,
                  "start": 6524,
                  "end": 6529
                },
                {
                  "type": "TSNullKeyword",
                  "start": 6532,
                  "end": 6536
                }
              ],
              "start": 6524,
              "end": 6536
            },
            "start": 6522,
            "end": 6536
          },
          "start": 6521,
          "end": 6536
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6555,
                      "end": 6556
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6558,
                      "end": 6561
                    },
                    "optional": true,
                    "computed": false,
                    "start": 6555,
                    "end": 6561
                  },
                  "start": 6555,
                  "end": 6561
                },
                "prefix": true,
                "start": 6548,
                "end": 6561
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 6566,
                "end": 6574
              },
              "start": 6548,
              "end": 6574
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6586,
                      "end": 6587
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6588,
                      "end": 6591
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6586,
                    "end": 6591
                  },
                  "directive": null,
                  "start": 6586,
                  "end": 6592
                }
              ],
              "start": 6576,
              "end": 6598
            },
            "alternate": null,
            "start": 6544,
            "end": 6598
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6614,
                      "end": 6615
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 6618,
                      "end": 6623
                    },
                    "optional": true,
                    "computed": true,
                    "start": 6614,
                    "end": 6624
                  },
                  "start": 6614,
                  "end": 6624
                },
                "prefix": true,
                "start": 6607,
                "end": 6624
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 6629,
                "end": 6637
              },
              "start": 6607,
              "end": 6637
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6649,
                      "end": 6650
                    },
                    "property": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 6651,
                      "end": 6656
                    },
                    "optional": false,
                    "computed": true,
                    "start": 6649,
                    "end": 6657
                  },
                  "directive": null,
                  "start": 6649,
                  "end": 6658
                }
              ],
              "start": 6639,
              "end": 6664
            },
            "alternate": null,
            "start": 6603,
            "end": 6664
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6680,
                        "end": 6681
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6683,
                        "end": 6686
                      },
                      "optional": true,
                      "computed": false,
                      "start": 6680,
                      "end": 6686
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 6680,
                    "end": 6688
                  },
                  "start": 6680,
                  "end": 6688
                },
                "prefix": true,
                "start": 6673,
                "end": 6688
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 6693,
                "end": 6701
              },
              "start": 6673,
              "end": 6701
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6713,
                      "end": 6714
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6715,
                      "end": 6718
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6713,
                    "end": 6718
                  },
                  "directive": null,
                  "start": 6713,
                  "end": 6719
                }
              ],
              "start": 6703,
              "end": 6725
            },
            "alternate": null,
            "start": 6669,
            "end": 6725
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6734,
                    "end": 6735
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6737,
                    "end": 6740
                  },
                  "optional": true,
                  "computed": false,
                  "start": 6734,
                  "end": 6740
                },
                "start": 6734,
                "end": 6740
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 6752,
                "end": 6757
              },
              "start": 6734,
              "end": 6757
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6769,
                      "end": 6770
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6771,
                      "end": 6774
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6769,
                    "end": 6774
                  },
                  "directive": null,
                  "start": 6769,
                  "end": 6775
                }
              ],
              "start": 6759,
              "end": 6781
            },
            "alternate": null,
            "start": 6730,
            "end": 6781
          }
        ],
        "start": 6538,
        "end": 6783
      },
      "expression": false,
      "start": 6508,
      "end": 6783
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null,
        "start": 6794,
        "end": 6797
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6801,
                    "end": 6806
                  },
                  "typeArguments": null,
                  "start": 6801,
                  "end": 6806
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 6809,
                  "end": 6818
                }
              ],
              "start": 6801,
              "end": 6818
            },
            "start": 6799,
            "end": 6818
          },
          "start": 6798,
          "end": 6818
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6837,
                      "end": 6838
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6840,
                      "end": 6843
                    },
                    "optional": true,
                    "computed": false,
                    "start": 6837,
                    "end": 6843
                  },
                  "start": 6837,
                  "end": 6843
                },
                "prefix": true,
                "start": 6830,
                "end": 6843
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 6848,
                "end": 6856
              },
              "start": 6830,
              "end": 6856
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6868,
                      "end": 6869
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6870,
                      "end": 6873
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6868,
                    "end": 6873
                  },
                  "directive": null,
                  "start": 6868,
                  "end": 6874
                }
              ],
              "start": 6858,
              "end": 6880
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6900,
                      "end": 6901
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6902,
                      "end": 6905
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6900,
                    "end": 6905
                  },
                  "directive": null,
                  "start": 6900,
                  "end": 6906
                }
              ],
              "start": 6890,
              "end": 6922
            },
            "start": 6826,
            "end": 6922
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6938,
                      "end": 6939
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6941,
                      "end": 6944
                    },
                    "optional": true,
                    "computed": false,
                    "start": 6938,
                    "end": 6944
                  },
                  "start": 6938,
                  "end": 6944
                },
                "prefix": true,
                "start": 6931,
                "end": 6944
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 6949,
                "end": 6957
              },
              "start": 6931,
              "end": 6957
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6969,
                      "end": 6970
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6971,
                      "end": 6974
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6969,
                    "end": 6974
                  },
                  "directive": null,
                  "start": 6969,
                  "end": 6975
                }
              ],
              "start": 6959,
              "end": 6991
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7011,
                      "end": 7012
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7013,
                      "end": 7016
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7011,
                    "end": 7016
                  },
                  "directive": null,
                  "start": 7011,
                  "end": 7017
                }
              ],
              "start": 7001,
              "end": 7023
            },
            "start": 6927,
            "end": 7023
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7039,
                      "end": 7040
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7042,
                      "end": 7045
                    },
                    "optional": true,
                    "computed": false,
                    "start": 7039,
                    "end": 7045
                  },
                  "start": 7039,
                  "end": 7045
                },
                "prefix": true,
                "start": 7032,
                "end": 7045
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 7049,
                "end": 7057
              },
              "start": 7032,
              "end": 7057
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7069,
                      "end": 7070
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7071,
                      "end": 7074
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7069,
                    "end": 7074
                  },
                  "directive": null,
                  "start": 7069,
                  "end": 7075
                }
              ],
              "start": 7059,
              "end": 7081
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7101,
                      "end": 7102
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7103,
                      "end": 7106
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7101,
                    "end": 7106
                  },
                  "directive": null,
                  "start": 7101,
                  "end": 7107
                }
              ],
              "start": 7091,
              "end": 7123
            },
            "start": 7028,
            "end": 7123
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7139,
                      "end": 7140
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7142,
                      "end": 7145
                    },
                    "optional": true,
                    "computed": false,
                    "start": 7139,
                    "end": 7145
                  },
                  "start": 7139,
                  "end": 7145
                },
                "prefix": true,
                "start": 7132,
                "end": 7145
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 7149,
                "end": 7157
              },
              "start": 7132,
              "end": 7157
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7169,
                      "end": 7170
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7171,
                      "end": 7174
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7169,
                    "end": 7174
                  },
                  "directive": null,
                  "start": 7169,
                  "end": 7175
                }
              ],
              "start": 7159,
              "end": 7191
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7211,
                      "end": 7212
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7213,
                      "end": 7216
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7211,
                    "end": 7216
                  },
                  "directive": null,
                  "start": 7211,
                  "end": 7217
                }
              ],
              "start": 7201,
              "end": 7223
            },
            "start": 7128,
            "end": 7223
          }
        ],
        "start": 6820,
        "end": 7225
      },
      "expression": false,
      "start": 6785,
      "end": 7225
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null,
        "start": 7236,
        "end": 7239
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7243,
                    "end": 7248
                  },
                  "typeArguments": null,
                  "start": 7243,
                  "end": 7248
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 7251,
                  "end": 7260
                }
              ],
              "start": 7243,
              "end": 7260
            },
            "start": 7241,
            "end": 7260
          },
          "start": 7240,
          "end": 7260
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7279,
                      "end": 7280
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7282,
                      "end": 7285
                    },
                    "optional": true,
                    "computed": false,
                    "start": 7279,
                    "end": 7285
                  },
                  "start": 7279,
                  "end": 7285
                },
                "prefix": true,
                "start": 7272,
                "end": 7285
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 7290,
                "end": 7301
              },
              "start": 7272,
              "end": 7301
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7313,
                      "end": 7314
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7315,
                      "end": 7318
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7313,
                    "end": 7318
                  },
                  "directive": null,
                  "start": 7313,
                  "end": 7319
                }
              ],
              "start": 7303,
              "end": 7335
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7355,
                      "end": 7356
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7357,
                      "end": 7360
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7355,
                    "end": 7360
                  },
                  "directive": null,
                  "start": 7355,
                  "end": 7361
                }
              ],
              "start": 7345,
              "end": 7367
            },
            "start": 7268,
            "end": 7367
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7383,
                      "end": 7384
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7386,
                      "end": 7389
                    },
                    "optional": true,
                    "computed": false,
                    "start": 7383,
                    "end": 7389
                  },
                  "start": 7383,
                  "end": 7389
                },
                "prefix": true,
                "start": 7376,
                "end": 7389
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 7394,
                "end": 7405
              },
              "start": 7376,
              "end": 7405
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7417,
                      "end": 7418
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7419,
                      "end": 7422
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7417,
                    "end": 7422
                  },
                  "directive": null,
                  "start": 7417,
                  "end": 7423
                }
              ],
              "start": 7407,
              "end": 7429
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7449,
                      "end": 7450
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7451,
                      "end": 7454
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7449,
                    "end": 7454
                  },
                  "directive": null,
                  "start": 7449,
                  "end": 7455
                }
              ],
              "start": 7439,
              "end": 7471
            },
            "start": 7372,
            "end": 7471
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7487,
                      "end": 7488
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7490,
                      "end": 7493
                    },
                    "optional": true,
                    "computed": false,
                    "start": 7487,
                    "end": 7493
                  },
                  "start": 7487,
                  "end": 7493
                },
                "prefix": true,
                "start": 7480,
                "end": 7493
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 7497,
                "end": 7508
              },
              "start": 7480,
              "end": 7508
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7520,
                      "end": 7521
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7522,
                      "end": 7525
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7520,
                    "end": 7525
                  },
                  "directive": null,
                  "start": 7520,
                  "end": 7526
                }
              ],
              "start": 7510,
              "end": 7542
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7562,
                      "end": 7563
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7564,
                      "end": 7567
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7562,
                    "end": 7567
                  },
                  "directive": null,
                  "start": 7562,
                  "end": 7568
                }
              ],
              "start": 7552,
              "end": 7574
            },
            "start": 7476,
            "end": 7574
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7590,
                      "end": 7591
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7593,
                      "end": 7596
                    },
                    "optional": true,
                    "computed": false,
                    "start": 7590,
                    "end": 7596
                  },
                  "start": 7590,
                  "end": 7596
                },
                "prefix": true,
                "start": 7583,
                "end": 7596
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 7600,
                "end": 7611
              },
              "start": 7583,
              "end": 7611
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7623,
                      "end": 7624
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7625,
                      "end": 7628
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7623,
                    "end": 7628
                  },
                  "directive": null,
                  "start": 7623,
                  "end": 7629
                }
              ],
              "start": 7613,
              "end": 7635
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7655,
                      "end": 7656
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7657,
                      "end": 7660
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7655,
                    "end": 7660
                  },
                  "directive": null,
                  "start": 7655,
                  "end": 7661
                }
              ],
              "start": 7645,
              "end": 7677
            },
            "start": 7579,
            "end": 7677
          }
        ],
        "start": 7262,
        "end": 7679
      },
      "expression": false,
      "start": 7227,
      "end": 7679
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 7698,
        "end": 7704
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 7708,
              "end": 7715
            },
            "start": 7706,
            "end": 7715
          },
          "start": 7705,
          "end": 7715
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 7726,
            "end": 7727
          },
          "asserts": true,
          "typeAnnotation": null,
          "start": 7718,
          "end": 7727
        },
        "start": 7716,
        "end": 7727
      },
      "body": null,
      "expression": false,
      "start": 7681,
      "end": 7728
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNonNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 7746,
        "end": 7759
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
              "start": 7760,
              "end": 7761
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7760,
            "end": 7761
          }
        ],
        "start": 7759,
        "end": 7762
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
                "start": 7766,
                "end": 7767
              },
              "typeArguments": null,
              "start": 7766,
              "end": 7767
            },
            "start": 7764,
            "end": 7767
          },
          "start": 7763,
          "end": 7767
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 7778,
            "end": 7779
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonNullable",
                "optional": false,
                "typeAnnotation": null,
                "start": 7783,
                "end": 7794
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
                      "start": 7795,
                      "end": 7796
                    },
                    "typeArguments": null,
                    "start": 7795,
                    "end": 7796
                  }
                ],
                "start": 7794,
                "end": 7797
              },
              "start": 7783,
              "end": 7797
            },
            "start": 7783,
            "end": 7797
          },
          "start": 7770,
          "end": 7797
        },
        "start": 7768,
        "end": 7797
      },
      "body": null,
      "expression": false,
      "start": 7729,
      "end": 7798
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 7809,
        "end": 7812
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7816,
                    "end": 7821
                  },
                  "typeArguments": null,
                  "start": 7816,
                  "end": 7821
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 7824,
                  "end": 7833
                }
              ],
              "start": 7816,
              "end": 7833
            },
            "start": 7814,
            "end": 7833
          },
          "start": 7813,
          "end": 7833
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
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 7847,
                  "end": 7851
                },
                "prefix": true,
                "start": 7846,
                "end": 7851
              },
              "prefix": true,
              "start": 7845,
              "end": 7851
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7863,
                      "end": 7869
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ChainExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7870,
                            "end": 7871
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7873,
                            "end": 7876
                          },
                          "optional": true,
                          "computed": false,
                          "start": 7870,
                          "end": 7876
                        },
                        "start": 7870,
                        "end": 7876
                      }
                    ],
                    "optional": false,
                    "start": 7863,
                    "end": 7877
                  },
                  "directive": null,
                  "start": 7863,
                  "end": 7878
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7887,
                      "end": 7888
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7889,
                      "end": 7892
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7887,
                    "end": 7892
                  },
                  "directive": null,
                  "start": 7887,
                  "end": 7893
                }
              ],
              "start": 7853,
              "end": 7899
            },
            "alternate": null,
            "start": 7841,
            "end": 7899
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 7910,
                  "end": 7914
                },
                "prefix": true,
                "start": 7909,
                "end": 7914
              },
              "prefix": true,
              "start": 7908,
              "end": 7914
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7926,
                      "end": 7932
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7933,
                              "end": 7934
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7936,
                              "end": 7939
                            },
                            "optional": true,
                            "computed": false,
                            "start": 7933,
                            "end": 7939
                          },
                          "start": 7933,
                          "end": 7939
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 7944,
                          "end": 7946
                        },
                        "start": 7933,
                        "end": 7946
                      }
                    ],
                    "optional": false,
                    "start": 7926,
                    "end": 7947
                  },
                  "directive": null,
                  "start": 7926,
                  "end": 7948
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7957,
                      "end": 7958
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7959,
                      "end": 7962
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7957,
                    "end": 7962
                  },
                  "directive": null,
                  "start": 7957,
                  "end": 7963
                }
              ],
              "start": 7916,
              "end": 7969
            },
            "alternate": null,
            "start": 7904,
            "end": 7969
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 7980,
                  "end": 7984
                },
                "prefix": true,
                "start": 7979,
                "end": 7984
              },
              "prefix": true,
              "start": 7978,
              "end": 7984
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7996,
                      "end": 8002
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "ChainExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "o",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8010,
                                "end": 8011
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8013,
                                "end": 8016
                              },
                              "optional": true,
                              "computed": false,
                              "start": 8010,
                              "end": 8016
                            },
                            "start": 8010,
                            "end": 8016
                          },
                          "prefix": true,
                          "start": 8003,
                          "end": 8016
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "number",
                          "raw": "\"number\"",
                          "start": 8021,
                          "end": 8029
                        },
                        "start": 8003,
                        "end": 8029
                      }
                    ],
                    "optional": false,
                    "start": 7996,
                    "end": 8030
                  },
                  "directive": null,
                  "start": 7996,
                  "end": 8031
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8040,
                      "end": 8041
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8042,
                      "end": 8045
                    },
                    "optional": false,
                    "computed": false,
                    "start": 8040,
                    "end": 8045
                  },
                  "directive": null,
                  "start": 8040,
                  "end": 8046
                }
              ],
              "start": 7986,
              "end": 8052
            },
            "alternate": null,
            "start": 7974,
            "end": 8052
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 8063,
                  "end": 8067
                },
                "prefix": true,
                "start": 8062,
                "end": 8067
              },
              "prefix": true,
              "start": 8061,
              "end": 8067
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assertNonNull",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8079,
                      "end": 8092
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ChainExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8093,
                            "end": 8094
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8096,
                            "end": 8099
                          },
                          "optional": true,
                          "computed": false,
                          "start": 8093,
                          "end": 8099
                        },
                        "start": 8093,
                        "end": 8099
                      }
                    ],
                    "optional": false,
                    "start": 8079,
                    "end": 8100
                  },
                  "directive": null,
                  "start": 8079,
                  "end": 8101
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8110,
                      "end": 8111
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8112,
                      "end": 8115
                    },
                    "optional": false,
                    "computed": false,
                    "start": 8110,
                    "end": 8115
                  },
                  "directive": null,
                  "start": 8110,
                  "end": 8116
                }
              ],
              "start": 8069,
              "end": 8122
            },
            "alternate": null,
            "start": 8057,
            "end": 8122
          }
        ],
        "start": 7835,
        "end": 8124
      },
      "expression": false,
      "start": 7800,
      "end": 8124
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null,
        "start": 8135,
        "end": 8138
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8142,
                    "end": 8147
                  },
                  "typeArguments": null,
                  "start": 8142,
                  "end": 8147
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 8150,
                  "end": 8159
                }
              ],
              "start": 8142,
              "end": 8159
            },
            "start": 8140,
            "end": 8159
          },
          "start": 8139,
          "end": 8159
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8175,
                  "end": 8176
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8178,
                  "end": 8181
                },
                "optional": true,
                "computed": false,
                "start": 8175,
                "end": 8181
              },
              "start": 8175,
              "end": 8181
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 8198,
                  "end": 8203
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8217,
                        "end": 8218
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8219,
                        "end": 8222
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8217,
                      "end": 8222
                    },
                    "directive": null,
                    "start": 8217,
                    "end": 8223
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 8236,
                    "end": 8242
                  }
                ],
                "start": 8193,
                "end": 8242
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 8256,
                  "end": 8258
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8272,
                        "end": 8273
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8274,
                        "end": 8277
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8272,
                      "end": 8277
                    },
                    "directive": null,
                    "start": 8272,
                    "end": 8278
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 8291,
                    "end": 8297
                  }
                ],
                "start": 8251,
                "end": 8297
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8311,
                  "end": 8320
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8334,
                        "end": 8335
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8336,
                        "end": 8339
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8334,
                      "end": 8339
                    },
                    "directive": null,
                    "start": 8334,
                    "end": 8340
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 8363,
                    "end": 8369
                  }
                ],
                "start": 8306,
                "end": 8369
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8399,
                        "end": 8400
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8401,
                        "end": 8404
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8399,
                      "end": 8404
                    },
                    "directive": null,
                    "start": 8399,
                    "end": 8405
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 8428,
                    "end": 8434
                  }
                ],
                "start": 8378,
                "end": 8434
              }
            ],
            "start": 8167,
            "end": 8440
          }
        ],
        "start": 8161,
        "end": 8442
      },
      "expression": false,
      "start": 8126,
      "end": 8442
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f41",
        "optional": false,
        "typeAnnotation": null,
        "start": 8453,
        "end": 8456
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8460,
                    "end": 8465
                  },
                  "typeArguments": null,
                  "start": 8460,
                  "end": 8465
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 8468,
                  "end": 8477
                }
              ],
              "start": 8460,
              "end": 8477
            },
            "start": 8458,
            "end": 8477
          },
          "start": 8457,
          "end": 8477
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8500,
                    "end": 8501
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8503,
                    "end": 8506
                  },
                  "optional": true,
                  "computed": false,
                  "start": 8500,
                  "end": 8506
                },
                "start": 8500,
                "end": 8506
              },
              "prefix": true,
              "start": 8493,
              "end": 8506
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 8523,
                  "end": 8531
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8545,
                        "end": 8546
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8547,
                        "end": 8550
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8545,
                      "end": 8550
                    },
                    "directive": null,
                    "start": 8545,
                    "end": 8551
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 8564,
                    "end": 8570
                  }
                ],
                "start": 8518,
                "end": 8570
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 8584,
                  "end": 8592
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8606,
                        "end": 8607
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8608,
                        "end": 8611
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8606,
                      "end": 8611
                    },
                    "directive": null,
                    "start": 8606,
                    "end": 8612
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 8625,
                    "end": 8631
                  }
                ],
                "start": 8579,
                "end": 8631
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "\"undefined\"",
                  "start": 8645,
                  "end": 8656
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8670,
                        "end": 8671
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8672,
                        "end": 8675
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8670,
                      "end": 8675
                    },
                    "directive": null,
                    "start": 8670,
                    "end": 8676
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 8699,
                    "end": 8705
                  }
                ],
                "start": 8640,
                "end": 8705
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8735,
                        "end": 8736
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8737,
                        "end": 8740
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8735,
                      "end": 8740
                    },
                    "directive": null,
                    "start": 8735,
                    "end": 8741
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 8764,
                    "end": 8770
                  }
                ],
                "start": 8714,
                "end": 8770
              }
            ],
            "start": 8485,
            "end": 8776
          }
        ],
        "start": 8479,
        "end": 8778
      },
      "expression": false,
      "start": 8444,
      "end": 8778
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 8808,
        "end": 8813
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8824,
                  "end": 8828
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "rectangle",
                      "raw": "'rectangle'",
                      "start": 8830,
                      "end": 8841
                    },
                    "start": 8830,
                    "end": 8841
                  },
                  "start": 8828,
                  "end": 8841
                },
                "accessibility": null,
                "static": false,
                "start": 8824,
                "end": 8842
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "width",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8843,
                  "end": 8848
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8850,
                    "end": 8856
                  },
                  "start": 8848,
                  "end": 8856
                },
                "accessibility": null,
                "static": false,
                "start": 8843,
                "end": 8857
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "height",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8858,
                  "end": 8864
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8866,
                    "end": 8872
                  },
                  "start": 8864,
                  "end": 8872
                },
                "accessibility": null,
                "static": false,
                "start": 8858,
                "end": 8872
              }
            ],
            "start": 8822,
            "end": 8874
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8883,
                  "end": 8887
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "circle",
                      "raw": "'circle'",
                      "start": 8889,
                      "end": 8897
                    },
                    "start": 8889,
                    "end": 8897
                  },
                  "start": 8887,
                  "end": 8897
                },
                "accessibility": null,
                "static": false,
                "start": 8883,
                "end": 8898
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "radius",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8899,
                  "end": 8905
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8907,
                    "end": 8913
                  },
                  "start": 8905,
                  "end": 8913
                },
                "accessibility": null,
                "static": false,
                "start": 8899,
                "end": 8913
              }
            ],
            "start": 8881,
            "end": 8915
          }
        ],
        "start": 8820,
        "end": 8915
      },
      "declare": false,
      "start": 8803,
      "end": 8915
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getArea",
        "optional": false,
        "typeAnnotation": null,
        "start": 8926,
        "end": 8933
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 8942,
                "end": 8947
              },
              "typeArguments": null,
              "start": 8942,
              "end": 8947
            },
            "start": 8940,
            "end": 8947
          },
          "start": 8934,
          "end": 8947
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8963,
                  "end": 8968
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8970,
                  "end": 8974
                },
                "optional": true,
                "computed": false,
                "start": 8963,
                "end": 8974
              },
              "start": 8963,
              "end": 8974
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "'circle'",
                  "start": 8991,
                  "end": 8999
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9020,
                          "end": 9024
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PI",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9025,
                          "end": 9027
                        },
                        "optional": false,
                        "computed": false,
                        "start": 9020,
                        "end": 9027
                      },
                      "operator": "*",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9030,
                            "end": 9035
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9036,
                            "end": 9042
                          },
                          "optional": false,
                          "computed": false,
                          "start": 9030,
                          "end": 9042
                        },
                        "operator": "**",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 9046,
                          "end": 9047
                        },
                        "start": 9030,
                        "end": 9047
                      },
                      "start": 9020,
                      "end": 9047
                    },
                    "start": 9013,
                    "end": 9047
                  }
                ],
                "start": 8986,
                "end": 9047
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "'rectangle'",
                  "start": 9061,
                  "end": 9072
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9093,
                          "end": 9098
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "width",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9099,
                          "end": 9104
                        },
                        "optional": false,
                        "computed": false,
                        "start": 9093,
                        "end": 9104
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9107,
                          "end": 9112
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "height",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9113,
                          "end": 9119
                        },
                        "optional": false,
                        "computed": false,
                        "start": 9107,
                        "end": 9119
                      },
                      "start": 9093,
                      "end": 9119
                    },
                    "start": 9086,
                    "end": 9119
                  }
                ],
                "start": 9056,
                "end": 9119
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 9156,
                      "end": 9157
                    },
                    "start": 9149,
                    "end": 9157
                  }
                ],
                "start": 9128,
                "end": 9157
              }
            ],
            "start": 8955,
            "end": 9163
          }
        ],
        "start": 8949,
        "end": 9165
      },
      "expression": false,
      "start": 8917,
      "end": 9165
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Feature",
        "optional": false,
        "typeAnnotation": null,
        "start": 9172,
        "end": 9179
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 9186,
              "end": 9188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9190,
                "end": 9196
              },
              "start": 9188,
              "end": 9196
            },
            "accessibility": null,
            "static": false,
            "start": 9186,
            "end": 9197
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "geometry",
              "optional": false,
              "typeAnnotation": null,
              "start": 9200,
              "end": 9208
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9217,
                      "end": 9221
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 9223,
                        "end": 9229
                      },
                      "start": 9221,
                      "end": 9229
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 9217,
                    "end": 9230
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "coordinates",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9235,
                      "end": 9246
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 9248,
                          "end": 9254
                        },
                        "start": 9248,
                        "end": 9256
                      },
                      "start": 9246,
                      "end": 9256
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 9235,
                    "end": 9257
                  }
                ],
                "start": 9211,
                "end": 9261
              },
              "start": 9209,
              "end": 9261
            },
            "accessibility": null,
            "static": false,
            "start": 9200,
            "end": 9262
          }
        ],
        "start": 9182,
        "end": 9264
      },
      "declare": false,
      "start": 9167,
      "end": 9265
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extractCoordinates",
        "optional": false,
        "typeAnnotation": null,
        "start": 9277,
        "end": 9295
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Feature",
                "optional": false,
                "typeAnnotation": null,
                "start": 9299,
                "end": 9306
              },
              "typeArguments": null,
              "start": 9299,
              "end": 9306
            },
            "start": 9297,
            "end": 9306
          },
          "start": 9296,
          "end": 9306
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSNumberKeyword",
            "start": 9309,
            "end": 9315
          },
          "start": 9309,
          "end": 9317
        },
        "start": 9307,
        "end": 9317
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9328,
                      "end": 9329
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "geometry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9330,
                      "end": 9338
                    },
                    "optional": false,
                    "computed": false,
                    "start": 9328,
                    "end": 9338
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9340,
                    "end": 9344
                  },
                  "optional": true,
                  "computed": false,
                  "start": 9328,
                  "end": 9344
                },
                "start": 9328,
                "end": 9344
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "test",
                "raw": "'test'",
                "start": 9349,
                "end": 9355
              },
              "start": 9328,
              "end": 9355
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 9374,
                    "end": 9376
                  },
                  "start": 9367,
                  "end": 9377
                }
              ],
              "start": 9357,
              "end": 9383
            },
            "alternate": null,
            "start": 9324,
            "end": 9383
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9395,
                  "end": 9396
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "geometry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9397,
                  "end": 9405
                },
                "optional": false,
                "computed": false,
                "start": 9395,
                "end": 9405
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "coordinates",
                "optional": false,
                "typeAnnotation": null,
                "start": 9406,
                "end": 9417
              },
              "optional": false,
              "computed": false,
              "start": 9395,
              "end": 9417
            },
            "start": 9388,
            "end": 9418
          }
        ],
        "start": 9318,
        "end": 9420
      },
      "expression": false,
      "start": 9268,
      "end": 9420
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 9454,
        "end": 9464
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 9471,
              "end": 9483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 9485,
                "end": 9492
              },
              "start": 9483,
              "end": 9492
            },
            "accessibility": null,
            "static": false,
            "start": 9471,
            "end": 9493
          }
        ],
        "start": 9465,
        "end": 9495
      },
      "declare": false,
      "start": 9444,
      "end": 9495
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
            "name": "lastSomeProperty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 9519,
                    "end": 9526
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 9529,
                    "end": 9538
                  }
                ],
                "start": 9519,
                "end": 9538
              },
              "start": 9517,
              "end": 9538
            },
            "start": 9501,
            "end": 9538
          },
          "init": null,
          "definite": false,
          "start": 9501,
          "end": 9538
        }
      ],
      "declare": false,
      "start": 9497,
      "end": 9539
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 9550,
        "end": 9562
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "someOptionalObject",
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
                    "name": "SomeObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9583,
                    "end": 9593
                  },
                  "typeArguments": null,
                  "start": 9583,
                  "end": 9593
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 9596,
                  "end": 9605
                }
              ],
              "start": 9583,
              "end": 9605
            },
            "start": 9581,
            "end": 9605
          },
          "start": 9563,
          "end": 9605
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 9608,
          "end": 9612
        },
        "start": 9606,
        "end": 9612
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someOptionalObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9623,
                    "end": 9641
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9643,
                    "end": 9655
                  },
                  "optional": true,
                  "computed": false,
                  "start": 9623,
                  "end": 9655
                },
                "start": 9623,
                "end": 9655
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "lastSomeProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 9660,
                "end": 9676
              },
              "start": 9623,
              "end": 9676
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9688,
                        "end": 9695
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9696,
                        "end": 9699
                      },
                      "optional": false,
                      "computed": false,
                      "start": 9688,
                      "end": 9699
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someOptionalObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9700,
                        "end": 9718
                      }
                    ],
                    "optional": false,
                    "start": 9688,
                    "end": 9719
                  },
                  "directive": null,
                  "start": 9688,
                  "end": 9720
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9729,
                        "end": 9736
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9737,
                        "end": 9740
                      },
                      "optional": false,
                      "computed": false,
                      "start": 9729,
                      "end": 9740
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someOptionalObject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9741,
                          "end": 9759
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9760,
                          "end": 9772
                        },
                        "optional": false,
                        "computed": false,
                        "start": 9741,
                        "end": 9772
                      }
                    ],
                    "optional": false,
                    "start": 9729,
                    "end": 9773
                  },
                  "directive": null,
                  "start": 9729,
                  "end": 9774
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "lastSomeProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9793,
                      "end": 9809
                    },
                    "right": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someOptionalObject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9812,
                          "end": 9830
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9832,
                          "end": 9844
                        },
                        "optional": true,
                        "computed": false,
                        "start": 9812,
                        "end": 9844
                      },
                      "start": 9812,
                      "end": 9844
                    },
                    "start": 9793,
                    "end": 9844
                  },
                  "directive": null,
                  "start": 9793,
                  "end": 9845
                }
              ],
              "start": 9678,
              "end": 9851
            },
            "alternate": null,
            "start": 9619,
            "end": 9851
          }
        ],
        "start": 9613,
        "end": 9853
      },
      "expression": false,
      "start": 9541,
      "end": 9853
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
            "name": "someObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9873,
                  "end": 9883
                },
                "typeArguments": null,
                "start": 9873,
                "end": 9883
              },
              "start": 9871,
              "end": 9883
            },
            "start": 9861,
            "end": 9883
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
                  "name": "someProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9892,
                  "end": 9904
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 9906,
                  "end": 9908
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 9892,
                "end": 9908
              }
            ],
            "start": 9886,
            "end": 9910
          },
          "definite": false,
          "start": 9861,
          "end": 9910
        }
      ],
      "declare": false,
      "start": 9855,
      "end": 9911
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 9913,
          "end": 9925
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "someObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 9926,
            "end": 9936
          }
        ],
        "optional": false,
        "start": 9913,
        "end": 9937
      },
      "directive": null,
      "start": 9913,
      "end": 9938
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 9939,
          "end": 9951
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 9952,
            "end": 9961
          }
        ],
        "optional": false,
        "start": 9939,
        "end": 9962
      },
      "directive": null,
      "start": 9939,
      "end": 9963
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 9991,
            "end": 9992
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 9995,
            "end": 9996
          },
          "definite": false,
          "start": 9991,
          "end": 9996
        }
      ],
      "declare": false,
      "start": 9987,
      "end": 9997
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
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
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10019,
                        "end": 10022
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "left",
                                "raw": "\"left\"",
                                "start": 10025,
                                "end": 10031
                              },
                              "start": 10025,
                              "end": 10031
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "right",
                                "raw": "\"right\"",
                                "start": 10034,
                                "end": 10041
                              },
                              "start": 10034,
                              "end": 10041
                            }
                          ],
                          "start": 10025,
                          "end": 10041
                        },
                        "start": 10022,
                        "end": 10042
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 10019,
                      "end": 10042
                    }
                  ],
                  "start": 10017,
                  "end": 10044
                },
                "start": 10017,
                "end": 10046
              },
              "start": 10015,
              "end": 10046
            },
            "start": 10012,
            "end": 10046
          },
          "init": null,
          "definite": false,
          "start": 10012,
          "end": 10046
        }
      ],
      "declare": true,
      "start": 9998,
      "end": 10047
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 10056,
                "end": 10059
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 10060,
                "end": 10061
              },
              "optional": false,
              "computed": true,
              "start": 10056,
              "end": 10062
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 10064,
              "end": 10067
            },
            "optional": true,
            "computed": false,
            "start": 10056,
            "end": 10067
          },
          "start": 10056,
          "end": 10067
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "left",
          "raw": "\"left\"",
          "start": 10072,
          "end": 10078
        },
        "start": 10056,
        "end": 10078
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 10086,
                "end": 10087
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 10091,
                "end": 10092
              },
              "start": 10086,
              "end": 10092
            },
            "directive": null,
            "start": 10086,
            "end": 10093
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10102,
                      "end": 10105
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10106,
                      "end": 10107
                    },
                    "optional": false,
                    "computed": true,
                    "start": 10102,
                    "end": 10108
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10110,
                    "end": 10113
                  },
                  "optional": true,
                  "computed": false,
                  "start": 10102,
                  "end": 10113
                },
                "start": 10102,
                "end": 10113
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "right",
                "raw": "\"right\"",
                "start": 10118,
                "end": 10125
              },
              "start": 10102,
              "end": 10125
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10137,
                        "end": 10144
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10145,
                        "end": 10148
                      },
                      "optional": false,
                      "computed": false,
                      "start": 10137,
                      "end": 10148
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "I should ALSO be reachable",
                        "raw": "\"I should ALSO be reachable\"",
                        "start": 10149,
                        "end": 10177
                      }
                    ],
                    "optional": false,
                    "start": 10137,
                    "end": 10178
                  },
                  "directive": null,
                  "start": 10137,
                  "end": 10179
                }
              ],
              "start": 10127,
              "end": 10185
            },
            "alternate": null,
            "start": 10098,
            "end": 10185
          }
        ],
        "start": 10080,
        "end": 10187
      },
      "start": 10049,
      "end": 10187
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 10217,
        "end": 10222
      },
      "typeParameters": null,
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
              "name": "main",
              "optional": false,
              "typeAnnotation": null,
              "start": 10229,
              "end": 10233
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
                      "name": "childs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10242,
                      "end": 10248
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10250,
                          "end": 10256
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 10257,
                              "end": 10263
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Test5",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10265,
                                "end": 10270
                              },
                              "typeArguments": null,
                              "start": 10265,
                              "end": 10270
                            }
                          ],
                          "start": 10256,
                          "end": 10271
                        },
                        "start": 10250,
                        "end": 10271
                      },
                      "start": 10248,
                      "end": 10271
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 10242,
                    "end": 10272
                  }
                ],
                "start": 10236,
                "end": 10276
              },
              "start": 10234,
              "end": 10276
            },
            "accessibility": null,
            "static": false,
            "start": 10229,
            "end": 10277
          }
        ],
        "start": 10225,
        "end": 10279
      },
      "declare": false,
      "start": 10212,
      "end": 10280
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f50",
        "optional": false,
        "typeAnnotation": null,
        "start": 10291,
        "end": 10294
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test5",
                "optional": false,
                "typeAnnotation": null,
                "start": 10300,
                "end": 10305
              },
              "typeArguments": null,
              "start": 10300,
              "end": 10305
            },
            "start": 10298,
            "end": 10305
          },
          "start": 10295,
          "end": 10305
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10323,
                    "end": 10326
                  },
                  "init": null,
                  "definite": false,
                  "start": 10323,
                  "end": 10326
                }
              ],
              "declare": false,
              "start": 10317,
              "end": 10326
            },
            "right": {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10330,
                    "end": 10333
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "main",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10334,
                    "end": 10338
                  },
                  "optional": false,
                  "computed": false,
                  "start": 10330,
                  "end": 10338
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "childs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10340,
                  "end": 10346
                },
                "optional": true,
                "computed": false,
                "start": 10330,
                "end": 10346
              },
              "start": 10330,
              "end": 10346
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10360,
                            "end": 10363
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "main",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10364,
                            "end": 10368
                          },
                          "optional": false,
                          "computed": false,
                          "start": 10360,
                          "end": 10368
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "childs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10369,
                          "end": 10375
                        },
                        "optional": false,
                        "computed": false,
                        "start": 10360,
                        "end": 10375
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10376,
                        "end": 10379
                      },
                      "optional": false,
                      "computed": true,
                      "start": 10360,
                      "end": 10380
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10385,
                      "end": 10388
                    },
                    "start": 10360,
                    "end": 10388
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10407,
                          "end": 10410
                        },
                        "start": 10400,
                        "end": 10411
                      }
                    ],
                    "start": 10390,
                    "end": 10419
                  },
                  "alternate": null,
                  "start": 10356,
                  "end": 10419
                }
              ],
              "start": 10348,
              "end": 10424
            },
            "start": 10312,
            "end": 10424
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 10435,
              "end": 10439
            },
            "start": 10428,
            "end": 10440
          }
        ],
        "start": 10307,
        "end": 10442
      },
      "expression": false,
      "start": 10282,
      "end": 10442
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 37,
  "end": 10442
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 37,
    "end": 44,
    "range": [
      37,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 45,
    "end": 50,
    "range": [
      45,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 54,
    "end": 63,
    "range": [
      54,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 73,
    "end": 76,
    "range": [
      73,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90,
    "range": [
      87,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 97,
    "end": 100,
    "range": [
      97,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108,
    "range": [
      102,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 111,
    "end": 114,
    "range": [
      111,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 121,
    "end": 124,
    "range": [
      121,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 124,
    "end": 128,
    "range": [
      124,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 130,
    "end": 133,
    "range": [
      130,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 138,
    "end": 141,
    "range": [
      138,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 147,
    "end": 150,
    "range": [
      147,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 154,
    "end": 160,
    "range": [
      154,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 163,
    "end": 165,
    "range": [
      163,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 176,
    "end": 184,
    "range": [
      176,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 196,
    "end": 202,
    "range": [
      196,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 205,
    "end": 207,
    "range": [
      205,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 219,
    "end": 227,
    "range": [
      219,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 232,
    "end": 235,
    "range": [
      232,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 239,
    "end": 245,
    "range": [
      239,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 248,
    "end": 250,
    "range": [
      248,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 260,
    "end": 268,
    "range": [
      260,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 273,
    "end": 276,
    "range": [
      273,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286,
    "range": [
      280,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 289,
    "end": 291,
    "range": [
      289,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 303,
    "end": 311,
    "range": [
      303,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 335,
    "end": 342,
    "range": [
      335,
      342
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 343,
    "end": 348,
    "range": [
      343,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 352,
    "end": 361,
    "range": [
      352,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 369,
    "end": 372,
    "range": [
      369,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 374,
    "end": 376,
    "range": [
      374,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 379,
    "end": 381,
    "range": [
      379,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 382,
    "end": 388,
    "range": [
      382,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 391,
    "end": 398,
    "range": [
      391,
      398
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 399,
    "end": 404,
    "range": [
      399,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 408,
    "end": 414,
    "range": [
      408,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 417,
    "end": 423,
    "range": [
      417,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 425,
    "end": 427,
    "range": [
      425,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 430,
    "end": 432,
    "range": [
      430,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 502,
    "end": 506,
    "range": [
      502,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 548,
    "end": 555,
    "range": [
      548,
      555
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 556,
    "end": 561,
    "range": [
      556,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 562,
    "end": 564,
    "range": [
      562,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 573,
    "end": 576,
    "range": [
      573,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 581,
    "end": 583,
    "range": [
      581,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 584,
    "end": 590,
    "range": [
      584,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 596,
    "end": 605,
    "range": [
      596,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 607,
    "end": 609,
    "range": [
      607,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 611,
    "end": 613,
    "range": [
      611,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 613,
    "end": 615,
    "range": [
      613,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ")",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 644,
    "end": 646,
    "range": [
      644,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 681,
    "end": 683,
    "range": [
      681,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 683,
    "end": 685,
    "range": [
      683,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 692,
    "end": 694,
    "range": [
      692,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 694,
    "end": 696,
    "range": [
      694,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 704,
    "end": 708,
    "range": [
      704,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 722,
    "end": 724,
    "range": [
      722,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 730,
    "end": 732,
    "range": [
      730,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 732,
    "end": 734,
    "range": [
      732,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 741,
    "end": 743,
    "range": [
      741,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 752,
    "end": 754,
    "range": [
      752,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 756,
    "end": 758,
    "range": [
      756,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 758,
    "end": 760,
    "range": [
      758,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 763,
    "end": 765,
    "range": [
      763,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 770,
    "end": 777,
    "range": [
      770,
      777
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 778,
    "end": 783,
    "range": [
      778,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 784,
    "end": 786,
    "range": [
      784,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 799,
    "end": 805,
    "range": [
      799,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 821,
    "end": 827,
    "range": [
      821,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 832,
    "end": 841,
    "range": [
      832,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 843,
    "end": 845,
    "range": [
      843,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 847,
    "end": 849,
    "range": [
      847,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 849,
    "end": 851,
    "range": [
      849,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 853,
    "end": 856,
    "range": [
      853,
      856
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 866,
    "end": 868,
    "range": [
      866,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 874,
    "end": 876,
    "range": [
      874,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 884,
    "end": 886,
    "range": [
      884,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 886,
    "end": 888,
    "range": [
      886,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 893,
    "end": 897,
    "range": [
      893,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 904,
    "end": 906,
    "range": [
      904,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 912,
    "end": 914,
    "range": [
      912,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 914,
    "end": 916,
    "range": [
      914,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 923,
    "end": 925,
    "range": [
      923,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 931,
    "end": 933,
    "range": [
      931,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 935,
    "end": 937,
    "range": [
      935,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 937,
    "end": 939,
    "range": [
      937,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 942,
    "end": 944,
    "range": [
      942,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 949,
    "end": 956,
    "range": [
      949,
      956
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 957,
    "end": 962,
    "range": [
      957,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 963,
    "end": 965,
    "range": [
      963,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 978,
    "end": 985,
    "range": [
      978,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 991,
    "end": 993,
    "range": [
      991,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 995,
    "end": 997,
    "range": [
      995,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 999,
    "end": 1001,
    "range": [
      999,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1010,
    "end": 1012,
    "range": [
      1010,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1038,
    "end": 1040,
    "range": [
      1038,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1058,
    "end": 1060,
    "range": [
      1058,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1062,
    "end": 1064,
    "range": [
      1062,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1077,
    "end": 1081,
    "range": [
      1077,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1088,
    "end": 1090,
    "range": [
      1088,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1098,
    "end": 1100,
    "range": [
      1098,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1102,
    "end": 1104,
    "range": [
      1102,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1111,
    "end": 1113,
    "range": [
      1111,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1121,
    "end": 1123,
    "range": [
      1121,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1127,
    "end": 1129,
    "range": [
      1127,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1131,
    "end": 1133,
    "range": [
      1131,
      1133
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1136,
    "end": 1138,
    "range": [
      1136,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1145,
    "end": 1152,
    "range": [
      1145,
      1152
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1153,
    "end": 1158,
    "range": [
      1153,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1159,
    "end": 1161,
    "range": [
      1159,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1185,
    "end": 1192,
    "range": [
      1185,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1202,
    "end": 1204,
    "range": [
      1202,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1206,
    "end": 1208,
    "range": [
      1206,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1210,
    "end": 1212,
    "range": [
      1210,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1215,
    "end": 1217,
    "range": [
      1215,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1226,
    "end": 1228,
    "range": [
      1226,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1236,
    "end": 1238,
    "range": [
      1236,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1248,
    "end": 1250,
    "range": [
      1248,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1262,
    "end": 1264,
    "range": [
      1262,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1286,
    "end": 1288,
    "range": [
      1286,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1294,
    "end": 1296,
    "range": [
      1294,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1311,
    "end": 1313,
    "range": [
      1311,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1315,
    "end": 1317,
    "range": [
      1315,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1336,
    "end": 1338,
    "range": [
      1336,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1340,
    "end": 1342,
    "range": [
      1340,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1345,
    "end": 1347,
    "range": [
      1345,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1360,
    "end": 1364,
    "range": [
      1360,
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
    "type": "Identifier",
    "value": "o5",
    "start": 1371,
    "end": 1373,
    "range": [
      1371,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1381,
    "end": 1383,
    "range": [
      1381,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1385,
    "end": 1387,
    "range": [
      1385,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1394,
    "end": 1396,
    "range": [
      1394,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1398,
    "end": 1400,
    "range": [
      1398,
      1400
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1409,
    "end": 1411,
    "range": [
      1409,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1413,
    "end": 1415,
    "range": [
      1413,
      1415
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1418,
    "end": 1420,
    "range": [
      1418,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1427,
    "end": 1429,
    "range": [
      1427,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1439,
    "end": 1441,
    "range": [
      1439,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1453,
    "end": 1455,
    "range": [
      1453,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1459,
    "end": 1461,
    "range": [
      1459,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1463,
    "end": 1465,
    "range": [
      1463,
      1465
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1468,
    "end": 1470,
    "range": [
      1468,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1472,
    "end": 1474,
    "range": [
      1472,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1479,
    "end": 1481,
    "range": [
      1479,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1483,
    "end": 1485,
    "range": [
      1483,
      1485
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1488,
    "end": 1490,
    "range": [
      1488,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1493,
    "end": 1495,
    "range": [
      1493,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 1501,
    "end": 1503,
    "range": [
      1501,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1514,
    "end": 1523,
    "range": [
      1514,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1524,
    "end": 1528,
    "range": [
      1524,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1540,
    "end": 1544,
    "range": [
      1540,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1545,
    "end": 1547,
    "range": [
      1545,
      1547
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1548,
    "end": 1555,
    "range": [
      1548,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1560,
    "end": 1569,
    "range": [
      1560,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1570,
    "end": 1577,
    "range": [
      1570,
      1577
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1578,
    "end": 1585,
    "range": [
      1578,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1586,
    "end": 1590,
    "range": [
      1586,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1600,
    "end": 1606,
    "range": [
      1600,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1611,
    "end": 1618,
    "range": [
      1611,
      1618
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1619,
    "end": 1624,
    "range": [
      1619,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1625,
    "end": 1627,
    "range": [
      1625,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1629,
    "end": 1633,
    "range": [
      1629,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1636,
    "end": 1645,
    "range": [
      1636,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1647,
    "end": 1649,
    "range": [
      1647,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1651,
    "end": 1653,
    "range": [
      1651,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1653,
    "end": 1655,
    "range": [
      1653,
      1655
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1666,
    "end": 1668,
    "range": [
      1666,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1685,
    "end": 1687,
    "range": [
      1685,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1693,
    "end": 1697,
    "range": [
      1693,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1704,
    "end": 1706,
    "range": [
      1704,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1712,
    "end": 1714,
    "range": [
      1712,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1714,
    "end": 1716,
    "range": [
      1714,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1723,
    "end": 1725,
    "range": [
      1723,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1731,
    "end": 1733,
    "range": [
      1731,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1735,
    "end": 1737,
    "range": [
      1735,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1737,
    "end": 1739,
    "range": [
      1737,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 1742,
    "end": 1744,
    "range": [
      1742,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1760,
    "end": 1767,
    "range": [
      1760,
      1767
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1768,
    "end": 1773,
    "range": [
      1768,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "isDefined",
    "start": 1774,
    "end": 1783,
    "range": [
      1774,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1789,
    "end": 1794,
    "range": [
      1789,
      1794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1799,
    "end": 1801,
    "range": [
      1799,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1802,
    "end": 1809,
    "range": [
      1802,
      1809
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1810,
    "end": 1815,
    "range": [
      1810,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1816,
    "end": 1818,
    "range": [
      1816,
      1818
    ]
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 1819,
    "end": 1830,
    "range": [
      1819,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1835,
    "end": 1842,
    "range": [
      1835,
      1842
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1843,
    "end": 1848,
    "range": [
      1843,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 1849,
    "end": 1857,
    "range": [
      1849,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1860,
    "end": 1865,
    "range": [
      1860,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1867,
    "end": 1874,
    "range": [
      1867,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1876,
    "end": 1878,
    "range": [
      1876,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1879,
    "end": 1886,
    "range": [
      1879,
      1886
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1887,
    "end": 1892,
    "range": [
      1887,
      1892
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1893,
    "end": 1895,
    "range": [
      1893,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1896,
    "end": 1902,
    "range": [
      1896,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1904,
    "end": 1911,
    "range": [
      1904,
      1911
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1912,
    "end": 1917,
    "range": [
      1912,
      1917
    ]
  },
  {
    "type": "Identifier",
    "value": "maybeIsString",
    "start": 1918,
    "end": 1931,
    "range": [
      1918,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1933,
    "end": 1942,
    "range": [
      1933,
      1942
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1947,
    "end": 1952,
    "range": [
      1947,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1954,
    "end": 1961,
    "range": [
      1954,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1963,
    "end": 1965,
    "range": [
      1963,
      1965
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1966,
    "end": 1973,
    "range": [
      1966,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1974,
    "end": 1979,
    "range": [
      1974,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1980,
    "end": 1982,
    "range": [
      1980,
      1982
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1983,
    "end": 1989,
    "range": [
      1983,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1992,
    "end": 1999,
    "range": [
      1992,
      1999
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2000,
    "end": 2005,
    "range": [
      2000,
      2005
    ]
  },
  {
    "type": "Identifier",
    "value": "maybeNever",
    "start": 2006,
    "end": 2016,
    "range": [
      2006,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2018,
    "end": 2027,
    "range": [
      2018,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2034,
    "end": 2036,
    "range": [
      2034,
      2036
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2037,
    "end": 2042,
    "range": [
      2037,
      2042
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2046,
    "end": 2054,
    "range": [
      2046,
      2054
    ]
  },
  {
    "type": "Identifier",
    "value": "f01",
    "start": 2055,
    "end": 2058,
    "range": [
      2055,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2062,
    "end": 2069,
    "range": [
      2062,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2077,
    "end": 2079,
    "range": [
      2077,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2083,
    "end": 2087,
    "range": [
      2083,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 2099,
    "end": 2107,
    "range": [
      2099,
      2107
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2107,
    "end": 2109,
    "range": [
      2107,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2135,
    "end": 2137,
    "range": [
      2135,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2138,
    "end": 2139,
    "range": [
      2138,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2140,
    "end": 2141,
    "range": [
      2140,
      2141
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2141,
    "end": 2145,
    "range": [
      2141,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Identifier",
    "value": "maybeIsString",
    "start": 2157,
    "end": 2170,
    "range": [
      2157,
      2170
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2170,
    "end": 2172,
    "range": [
      2170,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2186,
    "end": 2187,
    "range": [
      2186,
      2187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2192,
    "end": 2193,
    "range": [
      2192,
      2193
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2198,
    "end": 2200,
    "range": [
      2198,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2202,
    "end": 2203,
    "range": [
      2202,
      2203
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2204,
    "end": 2208,
    "range": [
      2204,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "isDefined",
    "start": 2220,
    "end": 2229,
    "range": [
      2220,
      2229
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Identifier",
    "value": "maybeIsString",
    "start": 2230,
    "end": 2243,
    "range": [
      2230,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "maybeIsString",
    "start": 2254,
    "end": 2267,
    "range": [
      2254,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2267,
    "end": 2269,
    "range": [
      2267,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2282,
    "end": 2283,
    "range": [
      2282,
      2283
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2283,
    "end": 2284,
    "range": [
      2283,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2295,
    "end": 2297,
    "range": [
      2295,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2301,
    "end": 2305,
    "range": [
      2301,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Identifier",
    "value": "maybeNever",
    "start": 2317,
    "end": 2327,
    "range": [
      2317,
      2327
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2327,
    "end": 2329,
    "range": [
      2327,
      2329
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2329,
    "end": 2330,
    "range": [
      2329,
      2330
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2330,
    "end": 2331,
    "range": [
      2330,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2341,
    "end": 2342,
    "range": [
      2341,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2348,
    "end": 2349,
    "range": [
      2348,
      2349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2353,
    "end": 2357,
    "range": [
      2353,
      2357
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 2358,
    "end": 2363,
    "range": [
      2358,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2368,
    "end": 2371,
    "range": [
      2368,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2373,
    "end": 2379,
    "range": [
      2373,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2382,
    "end": 2388,
    "range": [
      2382,
      2388
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2390,
    "end": 2393,
    "range": [
      2390,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2394,
    "end": 2395,
    "range": [
      2394,
      2395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2395,
    "end": 2396,
    "range": [
      2395,
      2396
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2397,
    "end": 2403,
    "range": [
      2397,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2405,
    "end": 2408,
    "range": [
      2405,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2410,
    "end": 2416,
    "range": [
      2410,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2421,
    "end": 2429,
    "range": [
      2421,
      2429
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 2430,
    "end": 2433,
    "range": [
      2430,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 2437,
    "end": 2442,
    "range": [
      2437,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2443,
    "end": 2444,
    "range": [
      2443,
      2444
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2445,
    "end": 2454,
    "range": [
      2445,
      2454
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2454,
    "end": 2455,
    "range": [
      2454,
      2455
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2456,
    "end": 2461,
    "range": [
      2456,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2463,
    "end": 2469,
    "range": [
      2463,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2477,
    "end": 2479,
    "range": [
      2477,
      2479
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2480,
    "end": 2481,
    "range": [
      2480,
      2481
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2482,
    "end": 2484,
    "range": [
      2482,
      2484
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2484,
    "end": 2487,
    "range": [
      2484,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2488,
    "end": 2491,
    "range": [
      2488,
      2491
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2492,
    "end": 2497,
    "range": [
      2492,
      2497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2509,
    "end": 2510,
    "range": [
      2509,
      2510
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2511,
    "end": 2514,
    "range": [
      2511,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2526,
    "end": 2528,
    "range": [
      2526,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2530,
    "end": 2531,
    "range": [
      2530,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2531,
    "end": 2533,
    "range": [
      2531,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2534,
    "end": 2539,
    "range": [
      2534,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2541,
    "end": 2544,
    "range": [
      2541,
      2544
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2545,
    "end": 2550,
    "range": [
      2545,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2552,
    "end": 2553,
    "range": [
      2552,
      2553
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2564,
    "end": 2569,
    "range": [
      2564,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2582,
    "end": 2584,
    "range": [
      2582,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2587,
    "end": 2589,
    "range": [
      2587,
      2589
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2589,
    "end": 2592,
    "range": [
      2589,
      2592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2595,
    "end": 2598,
    "range": [
      2595,
      2598
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2599,
    "end": 2604,
    "range": [
      2599,
      2604
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2616,
    "end": 2617,
    "range": [
      2616,
      2617
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2618,
    "end": 2621,
    "range": [
      2618,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2627,
    "end": 2628,
    "range": [
      2627,
      2628
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2633,
    "end": 2635,
    "range": [
      2633,
      2635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2636,
    "end": 2637,
    "range": [
      2636,
      2637
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2638,
    "end": 2640,
    "range": [
      2638,
      2640
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2640,
    "end": 2643,
    "range": [
      2640,
      2643
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2644,
    "end": 2646,
    "range": [
      2644,
      2646
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2647,
    "end": 2652,
    "range": [
      2647,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2664,
    "end": 2665,
    "range": [
      2664,
      2665
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2666,
    "end": 2669,
    "range": [
      2666,
      2669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2669,
    "end": 2670,
    "range": [
      2669,
      2670
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2675,
    "end": 2676,
    "range": [
      2675,
      2676
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2681,
    "end": 2683,
    "range": [
      2681,
      2683
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2684,
    "end": 2685,
    "range": [
      2684,
      2685
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2685,
    "end": 2686,
    "range": [
      2685,
      2686
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2686,
    "end": 2688,
    "range": [
      2686,
      2688
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2689,
    "end": 2694,
    "range": [
      2689,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2696,
    "end": 2698,
    "range": [
      2696,
      2698
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2699,
    "end": 2704,
    "range": [
      2699,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2718,
    "end": 2723,
    "range": [
      2718,
      2723
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2723,
    "end": 2724,
    "range": [
      2723,
      2724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2730,
    "end": 2731,
    "range": [
      2730,
      2731
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2736,
    "end": 2738,
    "range": [
      2736,
      2738
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2739,
    "end": 2740,
    "range": [
      2739,
      2740
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2741,
    "end": 2743,
    "range": [
      2741,
      2743
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2743,
    "end": 2746,
    "range": [
      2743,
      2746
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2749,
    "end": 2751,
    "range": [
      2749,
      2751
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2752,
    "end": 2757,
    "range": [
      2752,
      2757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2759,
    "end": 2760,
    "range": [
      2759,
      2760
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2771,
    "end": 2774,
    "range": [
      2771,
      2774
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2782,
    "end": 2783,
    "range": [
      2782,
      2783
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2785,
    "end": 2793,
    "range": [
      2785,
      2793
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2794,
    "end": 2797,
    "range": [
      2794,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 2801,
    "end": 2806,
    "range": [
      2801,
      2806
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2807,
    "end": 2808,
    "range": [
      2807,
      2808
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2809,
    "end": 2813,
    "range": [
      2809,
      2813
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2815,
    "end": 2820,
    "range": [
      2815,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2820,
    "end": 2821,
    "range": [
      2820,
      2821
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2822,
    "end": 2828,
    "range": [
      2822,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2836,
    "end": 2838,
    "range": [
      2836,
      2838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2841,
    "end": 2843,
    "range": [
      2841,
      2843
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2843,
    "end": 2846,
    "range": [
      2843,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2847,
    "end": 2850,
    "range": [
      2847,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2851,
    "end": 2856,
    "range": [
      2851,
      2856
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2868,
    "end": 2869,
    "range": [
      2868,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2870,
    "end": 2873,
    "range": [
      2870,
      2873
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2873,
    "end": 2874,
    "range": [
      2873,
      2874
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2885,
    "end": 2887,
    "range": [
      2885,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2888,
    "end": 2889,
    "range": [
      2888,
      2889
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2890,
    "end": 2892,
    "range": [
      2890,
      2892
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2892,
    "end": 2893,
    "range": [
      2892,
      2893
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2893,
    "end": 2898,
    "range": [
      2893,
      2898
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2898,
    "end": 2899,
    "range": [
      2898,
      2899
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2900,
    "end": 2903,
    "range": [
      2900,
      2903
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2904,
    "end": 2909,
    "range": [
      2904,
      2909
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2921,
    "end": 2922,
    "range": [
      2921,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2923,
    "end": 2928,
    "range": [
      2923,
      2928
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2941,
    "end": 2943,
    "range": [
      2941,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2946,
    "end": 2948,
    "range": [
      2946,
      2948
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2948,
    "end": 2951,
    "range": [
      2948,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2954,
    "end": 2957,
    "range": [
      2954,
      2957
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2958,
    "end": 2963,
    "range": [
      2958,
      2963
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2963,
    "end": 2964,
    "range": [
      2963,
      2964
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2975,
    "end": 2976,
    "range": [
      2975,
      2976
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2976,
    "end": 2977,
    "range": [
      2976,
      2977
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2977,
    "end": 2980,
    "range": [
      2977,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2980,
    "end": 2981,
    "range": [
      2980,
      2981
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2986,
    "end": 2987,
    "range": [
      2986,
      2987
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2992,
    "end": 2994,
    "range": [
      2992,
      2994
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2995,
    "end": 2996,
    "range": [
      2995,
      2996
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 2997,
    "end": 2999,
    "range": [
      2997,
      2999
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2999,
    "end": 3002,
    "range": [
      2999,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3003,
    "end": 3005,
    "range": [
      3003,
      3005
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3006,
    "end": 3011,
    "range": [
      3006,
      3011
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3011,
    "end": 3012,
    "range": [
      3011,
      3012
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3013,
    "end": 3014,
    "range": [
      3013,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3023,
    "end": 3024,
    "range": [
      3023,
      3024
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3024,
    "end": 3025,
    "range": [
      3024,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3025,
    "end": 3028,
    "range": [
      3025,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3028,
    "end": 3029,
    "range": [
      3028,
      3029
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3040,
    "end": 3042,
    "range": [
      3040,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3043,
    "end": 3044,
    "range": [
      3043,
      3044
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3045,
    "end": 3047,
    "range": [
      3045,
      3047
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3047,
    "end": 3048,
    "range": [
      3047,
      3048
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3048,
    "end": 3053,
    "range": [
      3048,
      3053
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3053,
    "end": 3054,
    "range": [
      3053,
      3054
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3055,
    "end": 3057,
    "range": [
      3055,
      3057
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3058,
    "end": 3063,
    "range": [
      3058,
      3063
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3063,
    "end": 3064,
    "range": [
      3063,
      3064
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3076,
    "end": 3077,
    "range": [
      3076,
      3077
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3077,
    "end": 3082,
    "range": [
      3077,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3082,
    "end": 3083,
    "range": [
      3082,
      3083
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3083,
    "end": 3084,
    "range": [
      3083,
      3084
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3089,
    "end": 3090,
    "range": [
      3089,
      3090
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3095,
    "end": 3097,
    "range": [
      3095,
      3097
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3098,
    "end": 3099,
    "range": [
      3098,
      3099
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3099,
    "end": 3100,
    "range": [
      3099,
      3100
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3100,
    "end": 3102,
    "range": [
      3100,
      3102
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3102,
    "end": 3105,
    "range": [
      3102,
      3105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3105,
    "end": 3106,
    "range": [
      3105,
      3106
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3106,
    "end": 3107,
    "range": [
      3106,
      3107
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3108,
    "end": 3110,
    "range": [
      3108,
      3110
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3111,
    "end": 3116,
    "range": [
      3111,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3128,
    "end": 3129,
    "range": [
      3128,
      3129
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3129,
    "end": 3130,
    "range": [
      3129,
      3130
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3130,
    "end": 3133,
    "range": [
      3130,
      3133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3133,
    "end": 3134,
    "range": [
      3133,
      3134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3139,
    "end": 3140,
    "range": [
      3139,
      3140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3141,
    "end": 3142,
    "range": [
      3141,
      3142
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3144,
    "end": 3152,
    "range": [
      3144,
      3152
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 3153,
    "end": 3156,
    "range": [
      3153,
      3156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3156,
    "end": 3157,
    "range": [
      3156,
      3157
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3157,
    "end": 3158,
    "range": [
      3157,
      3158
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3158,
    "end": 3159,
    "range": [
      3158,
      3159
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 3160,
    "end": 3165,
    "range": [
      3160,
      3165
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3166,
    "end": 3167,
    "range": [
      3166,
      3167
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3168,
    "end": 3177,
    "range": [
      3168,
      3177
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3179,
    "end": 3184,
    "range": [
      3179,
      3184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3184,
    "end": 3185,
    "range": [
      3184,
      3185
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3186,
    "end": 3192,
    "range": [
      3186,
      3192
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3193,
    "end": 3194,
    "range": [
      3193,
      3194
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3195,
    "end": 3204,
    "range": [
      3195,
      3204
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3204,
    "end": 3205,
    "range": [
      3204,
      3205
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3206,
    "end": 3207,
    "range": [
      3206,
      3207
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3212,
    "end": 3214,
    "range": [
      3212,
      3214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3215,
    "end": 3216,
    "range": [
      3215,
      3216
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3216,
    "end": 3217,
    "range": [
      3216,
      3217
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3217,
    "end": 3219,
    "range": [
      3217,
      3219
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3219,
    "end": 3222,
    "range": [
      3219,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3223,
    "end": 3226,
    "range": [
      3223,
      3226
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3227,
    "end": 3232,
    "range": [
      3227,
      3232
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3234,
    "end": 3235,
    "range": [
      3234,
      3235
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3245,
    "end": 3246,
    "range": [
      3245,
      3246
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3246,
    "end": 3249,
    "range": [
      3246,
      3249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3265,
    "end": 3266,
    "range": [
      3265,
      3266
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3271,
    "end": 3273,
    "range": [
      3271,
      3273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3275,
    "end": 3276,
    "range": [
      3275,
      3276
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3276,
    "end": 3278,
    "range": [
      3276,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3279,
    "end": 3284,
    "range": [
      3279,
      3284
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3284,
    "end": 3285,
    "range": [
      3284,
      3285
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3286,
    "end": 3289,
    "range": [
      3286,
      3289
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3290,
    "end": 3295,
    "range": [
      3290,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3295,
    "end": 3296,
    "range": [
      3295,
      3296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3297,
    "end": 3298,
    "range": [
      3297,
      3298
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3307,
    "end": 3308,
    "range": [
      3307,
      3308
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3308,
    "end": 3309,
    "range": [
      3308,
      3309
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3309,
    "end": 3314,
    "range": [
      3309,
      3314
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3331,
    "end": 3332,
    "range": [
      3331,
      3332
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3337,
    "end": 3339,
    "range": [
      3337,
      3339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3340,
    "end": 3341,
    "range": [
      3340,
      3341
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3341,
    "end": 3342,
    "range": [
      3341,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3342,
    "end": 3344,
    "range": [
      3342,
      3344
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3344,
    "end": 3347,
    "range": [
      3344,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3347,
    "end": 3348,
    "range": [
      3347,
      3348
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3348,
    "end": 3349,
    "range": [
      3348,
      3349
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3350,
    "end": 3353,
    "range": [
      3350,
      3353
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3354,
    "end": 3359,
    "range": [
      3354,
      3359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3359,
    "end": 3360,
    "range": [
      3359,
      3360
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3361,
    "end": 3362,
    "range": [
      3361,
      3362
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3371,
    "end": 3372,
    "range": [
      3371,
      3372
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3373,
    "end": 3376,
    "range": [
      3373,
      3376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3376,
    "end": 3377,
    "range": [
      3376,
      3377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3398,
    "end": 3400,
    "range": [
      3398,
      3400
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3401,
    "end": 3402,
    "range": [
      3401,
      3402
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3402,
    "end": 3403,
    "range": [
      3402,
      3403
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3403,
    "end": 3405,
    "range": [
      3403,
      3405
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3405,
    "end": 3408,
    "range": [
      3405,
      3408
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3409,
    "end": 3411,
    "range": [
      3409,
      3411
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3412,
    "end": 3417,
    "range": [
      3412,
      3417
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3417,
    "end": 3418,
    "range": [
      3417,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3419,
    "end": 3420,
    "range": [
      3419,
      3420
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3429,
    "end": 3430,
    "range": [
      3429,
      3430
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3431,
    "end": 3434,
    "range": [
      3431,
      3434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3456,
    "end": 3458,
    "range": [
      3456,
      3458
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3461,
    "end": 3463,
    "range": [
      3461,
      3463
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3463,
    "end": 3464,
    "range": [
      3463,
      3464
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3464,
    "end": 3469,
    "range": [
      3464,
      3469
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3471,
    "end": 3473,
    "range": [
      3471,
      3473
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3474,
    "end": 3479,
    "range": [
      3474,
      3479
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3479,
    "end": 3480,
    "range": [
      3479,
      3480
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3481,
    "end": 3482,
    "range": [
      3481,
      3482
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3491,
    "end": 3492,
    "range": [
      3491,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3493,
    "end": 3498,
    "range": [
      3493,
      3498
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3498,
    "end": 3499,
    "range": [
      3498,
      3499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3499,
    "end": 3500,
    "range": [
      3499,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3515,
    "end": 3516,
    "range": [
      3515,
      3516
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3521,
    "end": 3523,
    "range": [
      3521,
      3523
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3524,
    "end": 3525,
    "range": [
      3524,
      3525
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3525,
    "end": 3526,
    "range": [
      3525,
      3526
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3526,
    "end": 3528,
    "range": [
      3526,
      3528
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3528,
    "end": 3531,
    "range": [
      3528,
      3531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3531,
    "end": 3532,
    "range": [
      3531,
      3532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3532,
    "end": 3533,
    "range": [
      3532,
      3533
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3534,
    "end": 3536,
    "range": [
      3534,
      3536
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3537,
    "end": 3542,
    "range": [
      3537,
      3542
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3542,
    "end": 3543,
    "range": [
      3542,
      3543
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3544,
    "end": 3545,
    "range": [
      3544,
      3545
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3554,
    "end": 3555,
    "range": [
      3554,
      3555
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3555,
    "end": 3556,
    "range": [
      3555,
      3556
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3556,
    "end": 3559,
    "range": [
      3556,
      3559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3559,
    "end": 3560,
    "range": [
      3559,
      3560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3577,
    "end": 3578,
    "range": [
      3577,
      3578
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3580,
    "end": 3588,
    "range": [
      3580,
      3588
    ]
  },
  {
    "type": "Identifier",
    "value": "f12a",
    "start": 3589,
    "end": 3593,
    "range": [
      3589,
      3593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3593,
    "end": 3594,
    "range": [
      3593,
      3594
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3594,
    "end": 3595,
    "range": [
      3594,
      3595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3595,
    "end": 3596,
    "range": [
      3595,
      3596
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 3597,
    "end": 3602,
    "range": [
      3597,
      3602
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3603,
    "end": 3604,
    "range": [
      3603,
      3604
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3605,
    "end": 3614,
    "range": [
      3605,
      3614
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3614,
    "end": 3615,
    "range": [
      3614,
      3615
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3616,
    "end": 3621,
    "range": [
      3616,
      3621
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3621,
    "end": 3622,
    "range": [
      3621,
      3622
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3623,
    "end": 3629,
    "range": [
      3623,
      3629
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3630,
    "end": 3631,
    "range": [
      3630,
      3631
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3632,
    "end": 3636,
    "range": [
      3632,
      3636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3636,
    "end": 3637,
    "range": [
      3636,
      3637
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3638,
    "end": 3639,
    "range": [
      3638,
      3639
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3644,
    "end": 3646,
    "range": [
      3644,
      3646
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3647,
    "end": 3648,
    "range": [
      3647,
      3648
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3648,
    "end": 3649,
    "range": [
      3648,
      3649
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3649,
    "end": 3651,
    "range": [
      3649,
      3651
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3651,
    "end": 3654,
    "range": [
      3651,
      3654
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3655,
    "end": 3658,
    "range": [
      3655,
      3658
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3659,
    "end": 3664,
    "range": [
      3659,
      3664
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3664,
    "end": 3665,
    "range": [
      3664,
      3665
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3666,
    "end": 3667,
    "range": [
      3666,
      3667
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3676,
    "end": 3677,
    "range": [
      3676,
      3677
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3677,
    "end": 3678,
    "range": [
      3677,
      3678
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3678,
    "end": 3681,
    "range": [
      3678,
      3681
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3681,
    "end": 3682,
    "range": [
      3681,
      3682
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3687,
    "end": 3688,
    "range": [
      3687,
      3688
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3693,
    "end": 3695,
    "range": [
      3693,
      3695
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3696,
    "end": 3697,
    "range": [
      3696,
      3697
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3697,
    "end": 3698,
    "range": [
      3697,
      3698
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3698,
    "end": 3700,
    "range": [
      3698,
      3700
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3701,
    "end": 3706,
    "range": [
      3701,
      3706
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3706,
    "end": 3707,
    "range": [
      3706,
      3707
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3708,
    "end": 3711,
    "range": [
      3708,
      3711
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3712,
    "end": 3717,
    "range": [
      3712,
      3717
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3717,
    "end": 3718,
    "range": [
      3717,
      3718
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3719,
    "end": 3720,
    "range": [
      3719,
      3720
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3729,
    "end": 3730,
    "range": [
      3729,
      3730
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3730,
    "end": 3731,
    "range": [
      3730,
      3731
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3731,
    "end": 3736,
    "range": [
      3731,
      3736
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3736,
    "end": 3737,
    "range": [
      3736,
      3737
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3743,
    "end": 3744,
    "range": [
      3743,
      3744
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3749,
    "end": 3751,
    "range": [
      3749,
      3751
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3752,
    "end": 3753,
    "range": [
      3752,
      3753
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3753,
    "end": 3754,
    "range": [
      3753,
      3754
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3754,
    "end": 3756,
    "range": [
      3754,
      3756
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3756,
    "end": 3759,
    "range": [
      3756,
      3759
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3759,
    "end": 3760,
    "range": [
      3759,
      3760
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3760,
    "end": 3761,
    "range": [
      3760,
      3761
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3762,
    "end": 3765,
    "range": [
      3762,
      3765
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3766,
    "end": 3771,
    "range": [
      3766,
      3771
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3771,
    "end": 3772,
    "range": [
      3771,
      3772
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3773,
    "end": 3774,
    "range": [
      3773,
      3774
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3783,
    "end": 3784,
    "range": [
      3783,
      3784
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3784,
    "end": 3785,
    "range": [
      3784,
      3785
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3785,
    "end": 3788,
    "range": [
      3785,
      3788
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3788,
    "end": 3789,
    "range": [
      3788,
      3789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3794,
    "end": 3795,
    "range": [
      3794,
      3795
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3800,
    "end": 3802,
    "range": [
      3800,
      3802
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3803,
    "end": 3804,
    "range": [
      3803,
      3804
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3804,
    "end": 3805,
    "range": [
      3804,
      3805
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3805,
    "end": 3807,
    "range": [
      3805,
      3807
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3807,
    "end": 3810,
    "range": [
      3807,
      3810
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3811,
    "end": 3813,
    "range": [
      3811,
      3813
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3814,
    "end": 3819,
    "range": [
      3814,
      3819
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3819,
    "end": 3820,
    "range": [
      3819,
      3820
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3821,
    "end": 3822,
    "range": [
      3821,
      3822
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3831,
    "end": 3832,
    "range": [
      3831,
      3832
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3832,
    "end": 3833,
    "range": [
      3832,
      3833
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3833,
    "end": 3836,
    "range": [
      3833,
      3836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3836,
    "end": 3837,
    "range": [
      3836,
      3837
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3852,
    "end": 3853,
    "range": [
      3852,
      3853
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3858,
    "end": 3860,
    "range": [
      3858,
      3860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3861,
    "end": 3862,
    "range": [
      3861,
      3862
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3862,
    "end": 3863,
    "range": [
      3862,
      3863
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3863,
    "end": 3865,
    "range": [
      3863,
      3865
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3865,
    "end": 3866,
    "range": [
      3865,
      3866
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3866,
    "end": 3871,
    "range": [
      3866,
      3871
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3871,
    "end": 3872,
    "range": [
      3871,
      3872
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3873,
    "end": 3875,
    "range": [
      3873,
      3875
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3876,
    "end": 3881,
    "range": [
      3876,
      3881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3881,
    "end": 3882,
    "range": [
      3881,
      3882
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3883,
    "end": 3884,
    "range": [
      3883,
      3884
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3893,
    "end": 3894,
    "range": [
      3893,
      3894
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3894,
    "end": 3895,
    "range": [
      3894,
      3895
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3895,
    "end": 3900,
    "range": [
      3895,
      3900
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3900,
    "end": 3901,
    "range": [
      3900,
      3901
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3901,
    "end": 3902,
    "range": [
      3901,
      3902
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3917,
    "end": 3918,
    "range": [
      3917,
      3918
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3923,
    "end": 3925,
    "range": [
      3923,
      3925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3926,
    "end": 3927,
    "range": [
      3926,
      3927
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3927,
    "end": 3928,
    "range": [
      3927,
      3928
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 3928,
    "end": 3930,
    "range": [
      3928,
      3930
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3930,
    "end": 3933,
    "range": [
      3930,
      3933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3933,
    "end": 3934,
    "range": [
      3933,
      3934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3934,
    "end": 3935,
    "range": [
      3934,
      3935
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3936,
    "end": 3938,
    "range": [
      3936,
      3938
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3939,
    "end": 3944,
    "range": [
      3939,
      3944
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3944,
    "end": 3945,
    "range": [
      3944,
      3945
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3946,
    "end": 3947,
    "range": [
      3946,
      3947
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3956,
    "end": 3957,
    "range": [
      3956,
      3957
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3957,
    "end": 3958,
    "range": [
      3957,
      3958
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3958,
    "end": 3961,
    "range": [
      3958,
      3961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3961,
    "end": 3962,
    "range": [
      3961,
      3962
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3977,
    "end": 3978,
    "range": [
      3977,
      3978
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3979,
    "end": 3980,
    "range": [
      3979,
      3980
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3982,
    "end": 3990,
    "range": [
      3982,
      3990
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3991,
    "end": 3994,
    "range": [
      3991,
      3994
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3994,
    "end": 3995,
    "range": [
      3994,
      3995
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3995,
    "end": 3996,
    "range": [
      3995,
      3996
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3996,
    "end": 3997,
    "range": [
      3996,
      3997
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 3998,
    "end": 4003,
    "range": [
      3998,
      4003
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4004,
    "end": 4005,
    "range": [
      4004,
      4005
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4006,
    "end": 4015,
    "range": [
      4006,
      4015
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4015,
    "end": 4016,
    "range": [
      4015,
      4016
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4017,
    "end": 4018,
    "range": [
      4017,
      4018
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4023,
    "end": 4025,
    "range": [
      4023,
      4025
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4026,
    "end": 4027,
    "range": [
      4026,
      4027
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4027,
    "end": 4028,
    "range": [
      4027,
      4028
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4028,
    "end": 4030,
    "range": [
      4028,
      4030
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4030,
    "end": 4033,
    "range": [
      4030,
      4033
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4034,
    "end": 4037,
    "range": [
      4034,
      4037
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4038,
    "end": 4047,
    "range": [
      4038,
      4047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4047,
    "end": 4048,
    "range": [
      4047,
      4048
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4049,
    "end": 4050,
    "range": [
      4049,
      4050
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4059,
    "end": 4060,
    "range": [
      4059,
      4060
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4060,
    "end": 4061,
    "range": [
      4060,
      4061
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4061,
    "end": 4064,
    "range": [
      4061,
      4064
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4064,
    "end": 4065,
    "range": [
      4064,
      4065
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4070,
    "end": 4071,
    "range": [
      4070,
      4071
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4076,
    "end": 4078,
    "range": [
      4076,
      4078
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4079,
    "end": 4080,
    "range": [
      4079,
      4080
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4080,
    "end": 4081,
    "range": [
      4080,
      4081
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4081,
    "end": 4083,
    "range": [
      4081,
      4083
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4083,
    "end": 4084,
    "range": [
      4083,
      4084
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 4084,
    "end": 4089,
    "range": [
      4084,
      4089
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4089,
    "end": 4090,
    "range": [
      4089,
      4090
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4091,
    "end": 4094,
    "range": [
      4091,
      4094
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4095,
    "end": 4104,
    "range": [
      4095,
      4104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4104,
    "end": 4105,
    "range": [
      4104,
      4105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4106,
    "end": 4107,
    "range": [
      4106,
      4107
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4116,
    "end": 4117,
    "range": [
      4116,
      4117
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4117,
    "end": 4118,
    "range": [
      4117,
      4118
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 4118,
    "end": 4123,
    "range": [
      4118,
      4123
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4123,
    "end": 4124,
    "range": [
      4123,
      4124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4124,
    "end": 4125,
    "range": [
      4124,
      4125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4130,
    "end": 4131,
    "range": [
      4130,
      4131
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4136,
    "end": 4138,
    "range": [
      4136,
      4138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4139,
    "end": 4140,
    "range": [
      4139,
      4140
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4140,
    "end": 4141,
    "range": [
      4140,
      4141
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4141,
    "end": 4143,
    "range": [
      4141,
      4143
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4143,
    "end": 4146,
    "range": [
      4143,
      4146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4146,
    "end": 4147,
    "range": [
      4146,
      4147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4147,
    "end": 4148,
    "range": [
      4147,
      4148
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4149,
    "end": 4152,
    "range": [
      4149,
      4152
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4153,
    "end": 4162,
    "range": [
      4153,
      4162
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4162,
    "end": 4163,
    "range": [
      4162,
      4163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4164,
    "end": 4165,
    "range": [
      4164,
      4165
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4174,
    "end": 4175,
    "range": [
      4174,
      4175
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4175,
    "end": 4176,
    "range": [
      4175,
      4176
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4176,
    "end": 4179,
    "range": [
      4176,
      4179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4179,
    "end": 4180,
    "range": [
      4179,
      4180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4185,
    "end": 4186,
    "range": [
      4185,
      4186
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4191,
    "end": 4193,
    "range": [
      4191,
      4193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4194,
    "end": 4195,
    "range": [
      4194,
      4195
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4195,
    "end": 4196,
    "range": [
      4195,
      4196
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4196,
    "end": 4198,
    "range": [
      4196,
      4198
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4198,
    "end": 4201,
    "range": [
      4198,
      4201
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 4202,
    "end": 4204,
    "range": [
      4202,
      4204
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4205,
    "end": 4214,
    "range": [
      4205,
      4214
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4214,
    "end": 4215,
    "range": [
      4214,
      4215
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4216,
    "end": 4217,
    "range": [
      4216,
      4217
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4226,
    "end": 4227,
    "range": [
      4226,
      4227
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4227,
    "end": 4228,
    "range": [
      4227,
      4228
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4228,
    "end": 4231,
    "range": [
      4228,
      4231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4231,
    "end": 4232,
    "range": [
      4231,
      4232
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4237,
    "end": 4238,
    "range": [
      4237,
      4238
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4243,
    "end": 4245,
    "range": [
      4243,
      4245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4246,
    "end": 4247,
    "range": [
      4246,
      4247
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4247,
    "end": 4248,
    "range": [
      4247,
      4248
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4248,
    "end": 4250,
    "range": [
      4248,
      4250
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4250,
    "end": 4251,
    "range": [
      4250,
      4251
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 4251,
    "end": 4256,
    "range": [
      4251,
      4256
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4256,
    "end": 4257,
    "range": [
      4256,
      4257
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 4258,
    "end": 4260,
    "range": [
      4258,
      4260
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4261,
    "end": 4270,
    "range": [
      4261,
      4270
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4270,
    "end": 4271,
    "range": [
      4270,
      4271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4272,
    "end": 4273,
    "range": [
      4272,
      4273
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4282,
    "end": 4283,
    "range": [
      4282,
      4283
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4283,
    "end": 4284,
    "range": [
      4283,
      4284
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 4284,
    "end": 4289,
    "range": [
      4284,
      4289
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4289,
    "end": 4290,
    "range": [
      4289,
      4290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4290,
    "end": 4291,
    "range": [
      4290,
      4291
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4296,
    "end": 4297,
    "range": [
      4296,
      4297
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4302,
    "end": 4304,
    "range": [
      4302,
      4304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4305,
    "end": 4306,
    "range": [
      4305,
      4306
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4306,
    "end": 4307,
    "range": [
      4306,
      4307
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4307,
    "end": 4309,
    "range": [
      4307,
      4309
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4309,
    "end": 4312,
    "range": [
      4309,
      4312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4312,
    "end": 4313,
    "range": [
      4312,
      4313
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4313,
    "end": 4314,
    "range": [
      4313,
      4314
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 4315,
    "end": 4317,
    "range": [
      4315,
      4317
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4318,
    "end": 4327,
    "range": [
      4318,
      4327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4327,
    "end": 4328,
    "range": [
      4327,
      4328
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4329,
    "end": 4330,
    "range": [
      4329,
      4330
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4339,
    "end": 4340,
    "range": [
      4339,
      4340
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4340,
    "end": 4341,
    "range": [
      4340,
      4341
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4341,
    "end": 4344,
    "range": [
      4341,
      4344
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4344,
    "end": 4345,
    "range": [
      4344,
      4345
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4350,
    "end": 4351,
    "range": [
      4350,
      4351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4352,
    "end": 4353,
    "range": [
      4352,
      4353
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4355,
    "end": 4363,
    "range": [
      4355,
      4363
    ]
  },
  {
    "type": "Identifier",
    "value": "f13a",
    "start": 4364,
    "end": 4368,
    "range": [
      4364,
      4368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4368,
    "end": 4369,
    "range": [
      4368,
      4369
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4369,
    "end": 4370,
    "range": [
      4369,
      4370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4370,
    "end": 4371,
    "range": [
      4370,
      4371
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 4372,
    "end": 4377,
    "range": [
      4372,
      4377
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4378,
    "end": 4379,
    "range": [
      4378,
      4379
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4380,
    "end": 4389,
    "range": [
      4380,
      4389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4389,
    "end": 4390,
    "range": [
      4389,
      4390
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4391,
    "end": 4392,
    "range": [
      4391,
      4392
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4397,
    "end": 4399,
    "range": [
      4397,
      4399
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4400,
    "end": 4401,
    "range": [
      4400,
      4401
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4401,
    "end": 4402,
    "range": [
      4401,
      4402
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4402,
    "end": 4404,
    "range": [
      4402,
      4404
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4404,
    "end": 4407,
    "range": [
      4404,
      4407
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4408,
    "end": 4411,
    "range": [
      4408,
      4411
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4412,
    "end": 4416,
    "range": [
      4412,
      4416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4416,
    "end": 4417,
    "range": [
      4416,
      4417
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4418,
    "end": 4419,
    "range": [
      4418,
      4419
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4428,
    "end": 4429,
    "range": [
      4428,
      4429
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4429,
    "end": 4430,
    "range": [
      4429,
      4430
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4430,
    "end": 4433,
    "range": [
      4430,
      4433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4433,
    "end": 4434,
    "range": [
      4433,
      4434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4449,
    "end": 4450,
    "range": [
      4449,
      4450
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4455,
    "end": 4457,
    "range": [
      4455,
      4457
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4458,
    "end": 4459,
    "range": [
      4458,
      4459
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4459,
    "end": 4460,
    "range": [
      4459,
      4460
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4460,
    "end": 4462,
    "range": [
      4460,
      4462
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4462,
    "end": 4463,
    "range": [
      4462,
      4463
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 4463,
    "end": 4468,
    "range": [
      4463,
      4468
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4468,
    "end": 4469,
    "range": [
      4468,
      4469
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4470,
    "end": 4473,
    "range": [
      4470,
      4473
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4474,
    "end": 4478,
    "range": [
      4474,
      4478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4478,
    "end": 4479,
    "range": [
      4478,
      4479
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4480,
    "end": 4481,
    "range": [
      4480,
      4481
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4490,
    "end": 4491,
    "range": [
      4490,
      4491
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4491,
    "end": 4492,
    "range": [
      4491,
      4492
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 4492,
    "end": 4497,
    "range": [
      4492,
      4497
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4497,
    "end": 4498,
    "range": [
      4497,
      4498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4498,
    "end": 4499,
    "range": [
      4498,
      4499
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4514,
    "end": 4515,
    "range": [
      4514,
      4515
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4520,
    "end": 4522,
    "range": [
      4520,
      4522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4523,
    "end": 4524,
    "range": [
      4523,
      4524
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4524,
    "end": 4525,
    "range": [
      4524,
      4525
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4525,
    "end": 4527,
    "range": [
      4525,
      4527
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4527,
    "end": 4530,
    "range": [
      4527,
      4530
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4530,
    "end": 4531,
    "range": [
      4530,
      4531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4531,
    "end": 4532,
    "range": [
      4531,
      4532
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4533,
    "end": 4536,
    "range": [
      4533,
      4536
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4537,
    "end": 4541,
    "range": [
      4537,
      4541
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4541,
    "end": 4542,
    "range": [
      4541,
      4542
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4543,
    "end": 4544,
    "range": [
      4543,
      4544
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4553,
    "end": 4554,
    "range": [
      4553,
      4554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4554,
    "end": 4555,
    "range": [
      4554,
      4555
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4555,
    "end": 4558,
    "range": [
      4555,
      4558
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4558,
    "end": 4559,
    "range": [
      4558,
      4559
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4574,
    "end": 4575,
    "range": [
      4574,
      4575
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4580,
    "end": 4582,
    "range": [
      4580,
      4582
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4583,
    "end": 4584,
    "range": [
      4583,
      4584
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4584,
    "end": 4585,
    "range": [
      4584,
      4585
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4585,
    "end": 4587,
    "range": [
      4585,
      4587
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4587,
    "end": 4590,
    "range": [
      4587,
      4590
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 4591,
    "end": 4593,
    "range": [
      4591,
      4593
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4594,
    "end": 4598,
    "range": [
      4594,
      4598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4598,
    "end": 4599,
    "range": [
      4598,
      4599
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4600,
    "end": 4601,
    "range": [
      4600,
      4601
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4610,
    "end": 4611,
    "range": [
      4610,
      4611
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4611,
    "end": 4612,
    "range": [
      4611,
      4612
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4612,
    "end": 4615,
    "range": [
      4612,
      4615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4615,
    "end": 4616,
    "range": [
      4615,
      4616
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4621,
    "end": 4622,
    "range": [
      4621,
      4622
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4627,
    "end": 4629,
    "range": [
      4627,
      4629
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4630,
    "end": 4631,
    "range": [
      4630,
      4631
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4631,
    "end": 4632,
    "range": [
      4631,
      4632
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4632,
    "end": 4634,
    "range": [
      4632,
      4634
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4634,
    "end": 4635,
    "range": [
      4634,
      4635
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 4635,
    "end": 4640,
    "range": [
      4635,
      4640
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4640,
    "end": 4641,
    "range": [
      4640,
      4641
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 4642,
    "end": 4644,
    "range": [
      4642,
      4644
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4645,
    "end": 4649,
    "range": [
      4645,
      4649
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4649,
    "end": 4650,
    "range": [
      4649,
      4650
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4651,
    "end": 4652,
    "range": [
      4651,
      4652
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4661,
    "end": 4662,
    "range": [
      4661,
      4662
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4662,
    "end": 4663,
    "range": [
      4662,
      4663
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 4663,
    "end": 4668,
    "range": [
      4663,
      4668
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4668,
    "end": 4669,
    "range": [
      4668,
      4669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4669,
    "end": 4670,
    "range": [
      4669,
      4670
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4675,
    "end": 4676,
    "range": [
      4675,
      4676
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4681,
    "end": 4683,
    "range": [
      4681,
      4683
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4684,
    "end": 4685,
    "range": [
      4684,
      4685
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4685,
    "end": 4686,
    "range": [
      4685,
      4686
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4686,
    "end": 4688,
    "range": [
      4686,
      4688
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4688,
    "end": 4691,
    "range": [
      4688,
      4691
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4691,
    "end": 4692,
    "range": [
      4691,
      4692
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4692,
    "end": 4693,
    "range": [
      4692,
      4693
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 4694,
    "end": 4696,
    "range": [
      4694,
      4696
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4697,
    "end": 4701,
    "range": [
      4697,
      4701
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4701,
    "end": 4702,
    "range": [
      4701,
      4702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4703,
    "end": 4704,
    "range": [
      4703,
      4704
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4713,
    "end": 4714,
    "range": [
      4713,
      4714
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4714,
    "end": 4715,
    "range": [
      4714,
      4715
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4715,
    "end": 4718,
    "range": [
      4715,
      4718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4718,
    "end": 4719,
    "range": [
      4718,
      4719
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4724,
    "end": 4725,
    "range": [
      4724,
      4725
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4726,
    "end": 4727,
    "range": [
      4726,
      4727
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4729,
    "end": 4737,
    "range": [
      4729,
      4737
    ]
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 4738,
    "end": 4741,
    "range": [
      4738,
      4741
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4741,
    "end": 4742,
    "range": [
      4741,
      4742
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4742,
    "end": 4743,
    "range": [
      4742,
      4743
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4743,
    "end": 4744,
    "range": [
      4743,
      4744
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 4745,
    "end": 4750,
    "range": [
      4745,
      4750
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4751,
    "end": 4752,
    "range": [
      4751,
      4752
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4753,
    "end": 4757,
    "range": [
      4753,
      4757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4757,
    "end": 4758,
    "range": [
      4757,
      4758
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4759,
    "end": 4760,
    "range": [
      4759,
      4760
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4765,
    "end": 4767,
    "range": [
      4765,
      4767
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4768,
    "end": 4769,
    "range": [
      4768,
      4769
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4769,
    "end": 4770,
    "range": [
      4769,
      4770
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4770,
    "end": 4772,
    "range": [
      4770,
      4772
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4772,
    "end": 4775,
    "range": [
      4772,
      4775
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4776,
    "end": 4779,
    "range": [
      4776,
      4779
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4780,
    "end": 4789,
    "range": [
      4780,
      4789
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4789,
    "end": 4790,
    "range": [
      4789,
      4790
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4791,
    "end": 4792,
    "range": [
      4791,
      4792
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4801,
    "end": 4802,
    "range": [
      4801,
      4802
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4802,
    "end": 4803,
    "range": [
      4802,
      4803
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4803,
    "end": 4806,
    "range": [
      4803,
      4806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4806,
    "end": 4807,
    "range": [
      4806,
      4807
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4812,
    "end": 4813,
    "range": [
      4812,
      4813
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4818,
    "end": 4820,
    "range": [
      4818,
      4820
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4821,
    "end": 4822,
    "range": [
      4821,
      4822
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4822,
    "end": 4823,
    "range": [
      4822,
      4823
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4823,
    "end": 4825,
    "range": [
      4823,
      4825
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4825,
    "end": 4826,
    "range": [
      4825,
      4826
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 4826,
    "end": 4831,
    "range": [
      4826,
      4831
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4831,
    "end": 4832,
    "range": [
      4831,
      4832
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4833,
    "end": 4836,
    "range": [
      4833,
      4836
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4837,
    "end": 4846,
    "range": [
      4837,
      4846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4846,
    "end": 4847,
    "range": [
      4846,
      4847
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4848,
    "end": 4849,
    "range": [
      4848,
      4849
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4858,
    "end": 4859,
    "range": [
      4858,
      4859
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4859,
    "end": 4860,
    "range": [
      4859,
      4860
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 4860,
    "end": 4865,
    "range": [
      4860,
      4865
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4865,
    "end": 4866,
    "range": [
      4865,
      4866
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4866,
    "end": 4867,
    "range": [
      4866,
      4867
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4872,
    "end": 4873,
    "range": [
      4872,
      4873
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4878,
    "end": 4880,
    "range": [
      4878,
      4880
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4881,
    "end": 4882,
    "range": [
      4881,
      4882
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4882,
    "end": 4883,
    "range": [
      4882,
      4883
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4883,
    "end": 4885,
    "range": [
      4883,
      4885
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4885,
    "end": 4888,
    "range": [
      4885,
      4888
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4888,
    "end": 4889,
    "range": [
      4888,
      4889
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4889,
    "end": 4890,
    "range": [
      4889,
      4890
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4891,
    "end": 4894,
    "range": [
      4891,
      4894
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4895,
    "end": 4904,
    "range": [
      4895,
      4904
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4904,
    "end": 4905,
    "range": [
      4904,
      4905
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4906,
    "end": 4907,
    "range": [
      4906,
      4907
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4916,
    "end": 4917,
    "range": [
      4916,
      4917
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4917,
    "end": 4918,
    "range": [
      4917,
      4918
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4918,
    "end": 4921,
    "range": [
      4918,
      4921
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4921,
    "end": 4922,
    "range": [
      4921,
      4922
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4927,
    "end": 4928,
    "range": [
      4927,
      4928
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4929,
    "end": 4930,
    "range": [
      4929,
      4930
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4932,
    "end": 4940,
    "range": [
      4932,
      4940
    ]
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 4941,
    "end": 4944,
    "range": [
      4941,
      4944
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4944,
    "end": 4945,
    "range": [
      4944,
      4945
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4945,
    "end": 4946,
    "range": [
      4945,
      4946
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4946,
    "end": 4947,
    "range": [
      4946,
      4947
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 4948,
    "end": 4953,
    "range": [
      4948,
      4953
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4954,
    "end": 4955,
    "range": [
      4954,
      4955
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4956,
    "end": 4965,
    "range": [
      4956,
      4965
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4965,
    "end": 4966,
    "range": [
      4965,
      4966
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4967,
    "end": 4972,
    "range": [
      4967,
      4972
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4972,
    "end": 4973,
    "range": [
      4972,
      4973
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4974,
    "end": 4980,
    "range": [
      4974,
      4980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4980,
    "end": 4981,
    "range": [
      4980,
      4981
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4982,
    "end": 4983,
    "range": [
      4982,
      4983
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4988,
    "end": 4990,
    "range": [
      4988,
      4990
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4991,
    "end": 4992,
    "range": [
      4991,
      4992
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4992,
    "end": 4993,
    "range": [
      4992,
      4993
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4993,
    "end": 4995,
    "range": [
      4993,
      4995
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4995,
    "end": 4998,
    "range": [
      4995,
      4998
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4999,
    "end": 5002,
    "range": [
      4999,
      5002
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5003,
    "end": 5008,
    "range": [
      5003,
      5008
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5008,
    "end": 5009,
    "range": [
      5008,
      5009
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5010,
    "end": 5011,
    "range": [
      5010,
      5011
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5020,
    "end": 5021,
    "range": [
      5020,
      5021
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5021,
    "end": 5022,
    "range": [
      5021,
      5022
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5022,
    "end": 5025,
    "range": [
      5022,
      5025
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5025,
    "end": 5026,
    "range": [
      5025,
      5026
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5031,
    "end": 5032,
    "range": [
      5031,
      5032
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5037,
    "end": 5041,
    "range": [
      5037,
      5041
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5042,
    "end": 5043,
    "range": [
      5042,
      5043
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5052,
    "end": 5053,
    "range": [
      5052,
      5053
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5053,
    "end": 5054,
    "range": [
      5053,
      5054
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5054,
    "end": 5057,
    "range": [
      5054,
      5057
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5057,
    "end": 5058,
    "range": [
      5057,
      5058
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5073,
    "end": 5074,
    "range": [
      5073,
      5074
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5079,
    "end": 5081,
    "range": [
      5079,
      5081
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5082,
    "end": 5083,
    "range": [
      5082,
      5083
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5083,
    "end": 5084,
    "range": [
      5083,
      5084
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 5084,
    "end": 5086,
    "range": [
      5084,
      5086
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5086,
    "end": 5089,
    "range": [
      5086,
      5089
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5090,
    "end": 5093,
    "range": [
      5090,
      5093
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5094,
    "end": 5099,
    "range": [
      5094,
      5099
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5099,
    "end": 5100,
    "range": [
      5099,
      5100
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5101,
    "end": 5102,
    "range": [
      5101,
      5102
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5111,
    "end": 5112,
    "range": [
      5111,
      5112
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5112,
    "end": 5113,
    "range": [
      5112,
      5113
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5113,
    "end": 5116,
    "range": [
      5113,
      5116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5116,
    "end": 5117,
    "range": [
      5116,
      5117
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5132,
    "end": 5133,
    "range": [
      5132,
      5133
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5138,
    "end": 5142,
    "range": [
      5138,
      5142
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5143,
    "end": 5144,
    "range": [
      5143,
      5144
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5153,
    "end": 5154,
    "range": [
      5153,
      5154
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5154,
    "end": 5155,
    "range": [
      5154,
      5155
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5155,
    "end": 5158,
    "range": [
      5155,
      5158
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5158,
    "end": 5159,
    "range": [
      5158,
      5159
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5164,
    "end": 5165,
    "range": [
      5164,
      5165
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5170,
    "end": 5172,
    "range": [
      5170,
      5172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5173,
    "end": 5174,
    "range": [
      5173,
      5174
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5174,
    "end": 5175,
    "range": [
      5174,
      5175
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 5175,
    "end": 5177,
    "range": [
      5175,
      5177
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5177,
    "end": 5180,
    "range": [
      5177,
      5180
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 5181,
    "end": 5183,
    "range": [
      5181,
      5183
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5184,
    "end": 5189,
    "range": [
      5184,
      5189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5189,
    "end": 5190,
    "range": [
      5189,
      5190
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5191,
    "end": 5192,
    "range": [
      5191,
      5192
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5201,
    "end": 5202,
    "range": [
      5201,
      5202
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5202,
    "end": 5203,
    "range": [
      5202,
      5203
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5203,
    "end": 5206,
    "range": [
      5203,
      5206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5206,
    "end": 5207,
    "range": [
      5206,
      5207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5212,
    "end": 5213,
    "range": [
      5212,
      5213
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5218,
    "end": 5222,
    "range": [
      5218,
      5222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5223,
    "end": 5224,
    "range": [
      5223,
      5224
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5233,
    "end": 5234,
    "range": [
      5233,
      5234
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5234,
    "end": 5235,
    "range": [
      5234,
      5235
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5235,
    "end": 5238,
    "range": [
      5235,
      5238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5238,
    "end": 5239,
    "range": [
      5238,
      5239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5254,
    "end": 5255,
    "range": [
      5254,
      5255
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5260,
    "end": 5262,
    "range": [
      5260,
      5262
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5263,
    "end": 5264,
    "range": [
      5263,
      5264
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5264,
    "end": 5265,
    "range": [
      5264,
      5265
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 5265,
    "end": 5267,
    "range": [
      5265,
      5267
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5267,
    "end": 5270,
    "range": [
      5267,
      5270
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 5271,
    "end": 5273,
    "range": [
      5271,
      5273
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5274,
    "end": 5279,
    "range": [
      5274,
      5279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5279,
    "end": 5280,
    "range": [
      5279,
      5280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5281,
    "end": 5282,
    "range": [
      5281,
      5282
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5291,
    "end": 5292,
    "range": [
      5291,
      5292
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5292,
    "end": 5293,
    "range": [
      5292,
      5293
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5293,
    "end": 5296,
    "range": [
      5293,
      5296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5296,
    "end": 5297,
    "range": [
      5296,
      5297
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5312,
    "end": 5313,
    "range": [
      5312,
      5313
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5318,
    "end": 5322,
    "range": [
      5318,
      5322
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5323,
    "end": 5324,
    "range": [
      5323,
      5324
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5333,
    "end": 5334,
    "range": [
      5333,
      5334
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5334,
    "end": 5335,
    "range": [
      5334,
      5335
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5335,
    "end": 5338,
    "range": [
      5335,
      5338
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5338,
    "end": 5339,
    "range": [
      5338,
      5339
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5344,
    "end": 5345,
    "range": [
      5344,
      5345
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5346,
    "end": 5347,
    "range": [
      5346,
      5347
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5349,
    "end": 5357,
    "range": [
      5349,
      5357
    ]
  },
  {
    "type": "Identifier",
    "value": "f15a",
    "start": 5358,
    "end": 5362,
    "range": [
      5358,
      5362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5362,
    "end": 5363,
    "range": [
      5362,
      5363
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5363,
    "end": 5364,
    "range": [
      5363,
      5364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5364,
    "end": 5365,
    "range": [
      5364,
      5365
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 5366,
    "end": 5371,
    "range": [
      5366,
      5371
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5372,
    "end": 5373,
    "range": [
      5372,
      5373
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5374,
    "end": 5383,
    "range": [
      5374,
      5383
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5383,
    "end": 5384,
    "range": [
      5383,
      5384
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5385,
    "end": 5390,
    "range": [
      5385,
      5390
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5390,
    "end": 5391,
    "range": [
      5390,
      5391
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5392,
    "end": 5399,
    "range": [
      5392,
      5399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5399,
    "end": 5400,
    "range": [
      5399,
      5400
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5401,
    "end": 5402,
    "range": [
      5401,
      5402
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5407,
    "end": 5409,
    "range": [
      5407,
      5409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5410,
    "end": 5411,
    "range": [
      5410,
      5411
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5411,
    "end": 5412,
    "range": [
      5411,
      5412
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 5412,
    "end": 5414,
    "range": [
      5412,
      5414
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5414,
    "end": 5417,
    "range": [
      5414,
      5417
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5418,
    "end": 5421,
    "range": [
      5418,
      5421
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5422,
    "end": 5427,
    "range": [
      5422,
      5427
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5427,
    "end": 5428,
    "range": [
      5427,
      5428
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5429,
    "end": 5430,
    "range": [
      5429,
      5430
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5439,
    "end": 5440,
    "range": [
      5439,
      5440
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5440,
    "end": 5441,
    "range": [
      5440,
      5441
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5441,
    "end": 5444,
    "range": [
      5441,
      5444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5444,
    "end": 5445,
    "range": [
      5444,
      5445
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5460,
    "end": 5461,
    "range": [
      5460,
      5461
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5466,
    "end": 5470,
    "range": [
      5466,
      5470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5471,
    "end": 5472,
    "range": [
      5471,
      5472
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5481,
    "end": 5482,
    "range": [
      5481,
      5482
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5482,
    "end": 5483,
    "range": [
      5482,
      5483
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5483,
    "end": 5486,
    "range": [
      5483,
      5486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5486,
    "end": 5487,
    "range": [
      5486,
      5487
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5502,
    "end": 5503,
    "range": [
      5502,
      5503
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5508,
    "end": 5510,
    "range": [
      5508,
      5510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5511,
    "end": 5512,
    "range": [
      5511,
      5512
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5512,
    "end": 5513,
    "range": [
      5512,
      5513
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 5513,
    "end": 5515,
    "range": [
      5513,
      5515
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5515,
    "end": 5518,
    "range": [
      5515,
      5518
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5519,
    "end": 5522,
    "range": [
      5519,
      5522
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5523,
    "end": 5528,
    "range": [
      5523,
      5528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5528,
    "end": 5529,
    "range": [
      5528,
      5529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5530,
    "end": 5531,
    "range": [
      5530,
      5531
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5540,
    "end": 5541,
    "range": [
      5540,
      5541
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5541,
    "end": 5542,
    "range": [
      5541,
      5542
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5542,
    "end": 5545,
    "range": [
      5542,
      5545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5545,
    "end": 5546,
    "range": [
      5545,
      5546
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5561,
    "end": 5562,
    "range": [
      5561,
      5562
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5567,
    "end": 5571,
    "range": [
      5567,
      5571
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5572,
    "end": 5573,
    "range": [
      5572,
      5573
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5582,
    "end": 5583,
    "range": [
      5582,
      5583
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5583,
    "end": 5584,
    "range": [
      5583,
      5584
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5584,
    "end": 5587,
    "range": [
      5584,
      5587
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5587,
    "end": 5588,
    "range": [
      5587,
      5588
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5603,
    "end": 5604,
    "range": [
      5603,
      5604
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5609,
    "end": 5611,
    "range": [
      5609,
      5611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5612,
    "end": 5613,
    "range": [
      5612,
      5613
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5613,
    "end": 5614,
    "range": [
      5613,
      5614
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 5614,
    "end": 5616,
    "range": [
      5614,
      5616
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5616,
    "end": 5619,
    "range": [
      5616,
      5619
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 5620,
    "end": 5622,
    "range": [
      5620,
      5622
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5623,
    "end": 5628,
    "range": [
      5623,
      5628
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5628,
    "end": 5629,
    "range": [
      5628,
      5629
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5630,
    "end": 5631,
    "range": [
      5630,
      5631
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5640,
    "end": 5641,
    "range": [
      5640,
      5641
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5641,
    "end": 5642,
    "range": [
      5641,
      5642
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5642,
    "end": 5645,
    "range": [
      5642,
      5645
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5645,
    "end": 5646,
    "range": [
      5645,
      5646
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5661,
    "end": 5662,
    "range": [
      5661,
      5662
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5667,
    "end": 5671,
    "range": [
      5667,
      5671
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5672,
    "end": 5673,
    "range": [
      5672,
      5673
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5682,
    "end": 5683,
    "range": [
      5682,
      5683
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5683,
    "end": 5684,
    "range": [
      5683,
      5684
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5684,
    "end": 5687,
    "range": [
      5684,
      5687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5687,
    "end": 5688,
    "range": [
      5687,
      5688
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5703,
    "end": 5704,
    "range": [
      5703,
      5704
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5709,
    "end": 5711,
    "range": [
      5709,
      5711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5712,
    "end": 5713,
    "range": [
      5712,
      5713
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5713,
    "end": 5714,
    "range": [
      5713,
      5714
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 5714,
    "end": 5716,
    "range": [
      5714,
      5716
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5716,
    "end": 5719,
    "range": [
      5716,
      5719
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 5720,
    "end": 5722,
    "range": [
      5720,
      5722
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5723,
    "end": 5728,
    "range": [
      5723,
      5728
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5728,
    "end": 5729,
    "range": [
      5728,
      5729
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5730,
    "end": 5731,
    "range": [
      5730,
      5731
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5740,
    "end": 5741,
    "range": [
      5740,
      5741
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5741,
    "end": 5742,
    "range": [
      5741,
      5742
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5742,
    "end": 5745,
    "range": [
      5742,
      5745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5745,
    "end": 5746,
    "range": [
      5745,
      5746
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5761,
    "end": 5762,
    "range": [
      5761,
      5762
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5767,
    "end": 5771,
    "range": [
      5767,
      5771
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5772,
    "end": 5773,
    "range": [
      5772,
      5773
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5782,
    "end": 5783,
    "range": [
      5782,
      5783
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5783,
    "end": 5784,
    "range": [
      5783,
      5784
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5784,
    "end": 5787,
    "range": [
      5784,
      5787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5787,
    "end": 5788,
    "range": [
      5787,
      5788
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5803,
    "end": 5804,
    "range": [
      5803,
      5804
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5805,
    "end": 5806,
    "range": [
      5805,
      5806
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5808,
    "end": 5816,
    "range": [
      5808,
      5816
    ]
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 5817,
    "end": 5820,
    "range": [
      5817,
      5820
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5820,
    "end": 5821,
    "range": [
      5820,
      5821
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5821,
    "end": 5822,
    "range": [
      5821,
      5822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5822,
    "end": 5823,
    "range": [
      5822,
      5823
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 5824,
    "end": 5829,
    "range": [
      5824,
      5829
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5830,
    "end": 5831,
    "range": [
      5830,
      5831
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5832,
    "end": 5841,
    "range": [
      5832,
      5841
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5841,
    "end": 5842,
    "range": [
      5841,
      5842
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5843,
    "end": 5844,
    "range": [
      5843,
      5844
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5849,
    "end": 5851,
    "range": [
      5849,
      5851
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5852,
    "end": 5853,
    "range": [
      5852,
      5853
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5853,
    "end": 5854,
    "range": [
      5853,
      5854
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 5854,
    "end": 5856,
    "range": [
      5854,
      5856
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5856,
    "end": 5859,
    "range": [
      5856,
      5859
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5860,
    "end": 5863,
    "range": [
      5860,
      5863
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5864,
    "end": 5873,
    "range": [
      5864,
      5873
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5873,
    "end": 5874,
    "range": [
      5873,
      5874
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5875,
    "end": 5876,
    "range": [
      5875,
      5876
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5885,
    "end": 5886,
    "range": [
      5885,
      5886
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5886,
    "end": 5887,
    "range": [
      5886,
      5887
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5887,
    "end": 5890,
    "range": [
      5887,
      5890
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5890,
    "end": 5891,
    "range": [
      5890,
      5891
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5906,
    "end": 5907,
    "range": [
      5906,
      5907
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5912,
    "end": 5916,
    "range": [
      5912,
      5916
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5917,
    "end": 5918,
    "range": [
      5917,
      5918
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5927,
    "end": 5928,
    "range": [
      5927,
      5928
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5928,
    "end": 5929,
    "range": [
      5928,
      5929
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5929,
    "end": 5932,
    "range": [
      5929,
      5932
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5932,
    "end": 5933,
    "range": [
      5932,
      5933
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5938,
    "end": 5939,
    "range": [
      5938,
      5939
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5944,
    "end": 5946,
    "range": [
      5944,
      5946
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5947,
    "end": 5948,
    "range": [
      5947,
      5948
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5948,
    "end": 5949,
    "range": [
      5948,
      5949
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 5949,
    "end": 5951,
    "range": [
      5949,
      5951
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5951,
    "end": 5954,
    "range": [
      5951,
      5954
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5955,
    "end": 5958,
    "range": [
      5955,
      5958
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5959,
    "end": 5968,
    "range": [
      5959,
      5968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5968,
    "end": 5969,
    "range": [
      5968,
      5969
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5970,
    "end": 5971,
    "range": [
      5970,
      5971
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5980,
    "end": 5981,
    "range": [
      5980,
      5981
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5981,
    "end": 5982,
    "range": [
      5981,
      5982
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5982,
    "end": 5985,
    "range": [
      5982,
      5985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5985,
    "end": 5986,
    "range": [
      5985,
      5986
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5991,
    "end": 5992,
    "range": [
      5991,
      5992
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5997,
    "end": 6001,
    "range": [
      5997,
      6001
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6002,
    "end": 6003,
    "range": [
      6002,
      6003
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6012,
    "end": 6013,
    "range": [
      6012,
      6013
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6013,
    "end": 6014,
    "range": [
      6013,
      6014
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6014,
    "end": 6017,
    "range": [
      6014,
      6017
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6017,
    "end": 6018,
    "range": [
      6017,
      6018
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6033,
    "end": 6034,
    "range": [
      6033,
      6034
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6039,
    "end": 6041,
    "range": [
      6039,
      6041
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6042,
    "end": 6043,
    "range": [
      6042,
      6043
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6043,
    "end": 6044,
    "range": [
      6043,
      6044
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6044,
    "end": 6046,
    "range": [
      6044,
      6046
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6046,
    "end": 6049,
    "range": [
      6046,
      6049
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 6050,
    "end": 6052,
    "range": [
      6050,
      6052
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 6053,
    "end": 6062,
    "range": [
      6053,
      6062
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6062,
    "end": 6063,
    "range": [
      6062,
      6063
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6064,
    "end": 6065,
    "range": [
      6064,
      6065
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6074,
    "end": 6075,
    "range": [
      6074,
      6075
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6075,
    "end": 6076,
    "range": [
      6075,
      6076
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6076,
    "end": 6079,
    "range": [
      6076,
      6079
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6079,
    "end": 6080,
    "range": [
      6079,
      6080
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6095,
    "end": 6096,
    "range": [
      6095,
      6096
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6101,
    "end": 6105,
    "range": [
      6101,
      6105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6106,
    "end": 6107,
    "range": [
      6106,
      6107
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6116,
    "end": 6117,
    "range": [
      6116,
      6117
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6117,
    "end": 6118,
    "range": [
      6117,
      6118
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6118,
    "end": 6121,
    "range": [
      6118,
      6121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6121,
    "end": 6122,
    "range": [
      6121,
      6122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6127,
    "end": 6128,
    "range": [
      6127,
      6128
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6133,
    "end": 6135,
    "range": [
      6133,
      6135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6136,
    "end": 6137,
    "range": [
      6136,
      6137
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6137,
    "end": 6138,
    "range": [
      6137,
      6138
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6138,
    "end": 6140,
    "range": [
      6138,
      6140
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6140,
    "end": 6143,
    "range": [
      6140,
      6143
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 6144,
    "end": 6146,
    "range": [
      6144,
      6146
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 6147,
    "end": 6156,
    "range": [
      6147,
      6156
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6156,
    "end": 6157,
    "range": [
      6156,
      6157
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6158,
    "end": 6159,
    "range": [
      6158,
      6159
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6168,
    "end": 6169,
    "range": [
      6168,
      6169
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6169,
    "end": 6170,
    "range": [
      6169,
      6170
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6170,
    "end": 6173,
    "range": [
      6170,
      6173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6173,
    "end": 6174,
    "range": [
      6173,
      6174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6179,
    "end": 6180,
    "range": [
      6179,
      6180
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6185,
    "end": 6189,
    "range": [
      6185,
      6189
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6190,
    "end": 6191,
    "range": [
      6190,
      6191
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6200,
    "end": 6201,
    "range": [
      6200,
      6201
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6201,
    "end": 6202,
    "range": [
      6201,
      6202
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6202,
    "end": 6205,
    "range": [
      6202,
      6205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6205,
    "end": 6206,
    "range": [
      6205,
      6206
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6221,
    "end": 6222,
    "range": [
      6221,
      6222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6223,
    "end": 6224,
    "range": [
      6223,
      6224
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6226,
    "end": 6234,
    "range": [
      6226,
      6234
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 6235,
    "end": 6238,
    "range": [
      6235,
      6238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6238,
    "end": 6239,
    "range": [
      6238,
      6239
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6239,
    "end": 6240,
    "range": [
      6239,
      6240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6240,
    "end": 6241,
    "range": [
      6240,
      6241
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 6242,
    "end": 6247,
    "range": [
      6242,
      6247
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6248,
    "end": 6249,
    "range": [
      6248,
      6249
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 6250,
    "end": 6259,
    "range": [
      6250,
      6259
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6259,
    "end": 6260,
    "range": [
      6259,
      6260
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6261,
    "end": 6262,
    "range": [
      6261,
      6262
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6267,
    "end": 6269,
    "range": [
      6267,
      6269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6270,
    "end": 6271,
    "range": [
      6270,
      6271
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6271,
    "end": 6277,
    "range": [
      6271,
      6277
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6278,
    "end": 6279,
    "range": [
      6278,
      6279
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6279,
    "end": 6281,
    "range": [
      6279,
      6281
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6281,
    "end": 6284,
    "range": [
      6281,
      6284
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6285,
    "end": 6288,
    "range": [
      6285,
      6288
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 6289,
    "end": 6297,
    "range": [
      6289,
      6297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6297,
    "end": 6298,
    "range": [
      6297,
      6298
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6299,
    "end": 6300,
    "range": [
      6299,
      6300
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6309,
    "end": 6310,
    "range": [
      6309,
      6310
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6310,
    "end": 6311,
    "range": [
      6310,
      6311
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6311,
    "end": 6314,
    "range": [
      6311,
      6314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6314,
    "end": 6315,
    "range": [
      6314,
      6315
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6320,
    "end": 6321,
    "range": [
      6320,
      6321
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6326,
    "end": 6328,
    "range": [
      6326,
      6328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6329,
    "end": 6330,
    "range": [
      6329,
      6330
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6330,
    "end": 6336,
    "range": [
      6330,
      6336
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6337,
    "end": 6338,
    "range": [
      6337,
      6338
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6338,
    "end": 6340,
    "range": [
      6338,
      6340
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6340,
    "end": 6341,
    "range": [
      6340,
      6341
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 6341,
    "end": 6346,
    "range": [
      6341,
      6346
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6346,
    "end": 6347,
    "range": [
      6346,
      6347
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6348,
    "end": 6351,
    "range": [
      6348,
      6351
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 6352,
    "end": 6360,
    "range": [
      6352,
      6360
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6360,
    "end": 6361,
    "range": [
      6360,
      6361
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6362,
    "end": 6363,
    "range": [
      6362,
      6363
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6372,
    "end": 6373,
    "range": [
      6372,
      6373
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6373,
    "end": 6374,
    "range": [
      6373,
      6374
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 6374,
    "end": 6379,
    "range": [
      6374,
      6379
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6379,
    "end": 6380,
    "range": [
      6379,
      6380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6380,
    "end": 6381,
    "range": [
      6380,
      6381
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6386,
    "end": 6387,
    "range": [
      6386,
      6387
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6392,
    "end": 6394,
    "range": [
      6392,
      6394
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6395,
    "end": 6396,
    "range": [
      6395,
      6396
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6396,
    "end": 6402,
    "range": [
      6396,
      6402
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6403,
    "end": 6404,
    "range": [
      6403,
      6404
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6404,
    "end": 6406,
    "range": [
      6404,
      6406
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 6406,
    "end": 6409,
    "range": [
      6406,
      6409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6409,
    "end": 6410,
    "range": [
      6409,
      6410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6410,
    "end": 6411,
    "range": [
      6410,
      6411
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6412,
    "end": 6415,
    "range": [
      6412,
      6415
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 6416,
    "end": 6424,
    "range": [
      6416,
      6424
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6424,
    "end": 6425,
    "range": [
      6424,
      6425
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6426,
    "end": 6427,
    "range": [
      6426,
      6427
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6436,
    "end": 6437,
    "range": [
      6436,
      6437
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6437,
    "end": 6438,
    "range": [
      6437,
      6438
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 6438,
    "end": 6441,
    "range": [
      6438,
      6441
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6441,
    "end": 6442,
    "range": [
      6441,
      6442
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6447,
    "end": 6448,
    "range": [
      6447,
      6448
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6453,
    "end": 6455,
    "range": [
      6453,
      6455
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6456,
    "end": 6457,
    "range": [
      6456,
      6457
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6457,
    "end": 6458,
    "range": [
      6457,
      6458
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6458,
    "end": 6460,
    "range": [
      6458,
      6460
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 6460,
    "end": 6463,
    "range": [
      6460,
      6463
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 6464,
    "end": 6474,
    "range": [
      6464,
      6474
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 6475,
    "end": 6480,
    "range": [
      6475,
      6480
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6480,
    "end": 6481,
    "range": [
      6480,
      6481
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6482,
    "end": 6483,
    "range": [
      6482,
      6483
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6492,
    "end": 6493,
    "range": [
      6492,
      6493
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6493,
    "end": 6494,
    "range": [
      6493,
      6494
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 6494,
    "end": 6497,
    "range": [
      6494,
      6497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6497,
    "end": 6498,
    "range": [
      6497,
      6498
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6503,
    "end": 6504,
    "range": [
      6503,
      6504
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6505,
    "end": 6506,
    "range": [
      6505,
      6506
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6508,
    "end": 6516,
    "range": [
      6508,
      6516
    ]
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 6517,
    "end": 6520,
    "range": [
      6517,
      6520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6520,
    "end": 6521,
    "range": [
      6520,
      6521
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6521,
    "end": 6522,
    "range": [
      6521,
      6522
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6522,
    "end": 6523,
    "range": [
      6522,
      6523
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 6524,
    "end": 6529,
    "range": [
      6524,
      6529
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6530,
    "end": 6531,
    "range": [
      6530,
      6531
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 6532,
    "end": 6536,
    "range": [
      6532,
      6536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6536,
    "end": 6537,
    "range": [
      6536,
      6537
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6538,
    "end": 6539,
    "range": [
      6538,
      6539
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6544,
    "end": 6546,
    "range": [
      6544,
      6546
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6547,
    "end": 6548,
    "range": [
      6547,
      6548
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6548,
    "end": 6554,
    "range": [
      6548,
      6554
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6555,
    "end": 6556,
    "range": [
      6555,
      6556
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6556,
    "end": 6558,
    "range": [
      6556,
      6558
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6558,
    "end": 6561,
    "range": [
      6558,
      6561
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6562,
    "end": 6565,
    "range": [
      6562,
      6565
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 6566,
    "end": 6574,
    "range": [
      6566,
      6574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6574,
    "end": 6575,
    "range": [
      6574,
      6575
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6576,
    "end": 6577,
    "range": [
      6576,
      6577
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6586,
    "end": 6587,
    "range": [
      6586,
      6587
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6587,
    "end": 6588,
    "range": [
      6587,
      6588
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6588,
    "end": 6591,
    "range": [
      6588,
      6591
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6591,
    "end": 6592,
    "range": [
      6591,
      6592
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6597,
    "end": 6598,
    "range": [
      6597,
      6598
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6603,
    "end": 6605,
    "range": [
      6603,
      6605
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6606,
    "end": 6607,
    "range": [
      6606,
      6607
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6607,
    "end": 6613,
    "range": [
      6607,
      6613
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6614,
    "end": 6615,
    "range": [
      6614,
      6615
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6615,
    "end": 6617,
    "range": [
      6615,
      6617
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6617,
    "end": 6618,
    "range": [
      6617,
      6618
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 6618,
    "end": 6623,
    "range": [
      6618,
      6623
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6623,
    "end": 6624,
    "range": [
      6623,
      6624
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6625,
    "end": 6628,
    "range": [
      6625,
      6628
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 6629,
    "end": 6637,
    "range": [
      6629,
      6637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6637,
    "end": 6638,
    "range": [
      6637,
      6638
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6639,
    "end": 6640,
    "range": [
      6639,
      6640
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6649,
    "end": 6650,
    "range": [
      6649,
      6650
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6650,
    "end": 6651,
    "range": [
      6650,
      6651
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 6651,
    "end": 6656,
    "range": [
      6651,
      6656
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6656,
    "end": 6657,
    "range": [
      6656,
      6657
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6657,
    "end": 6658,
    "range": [
      6657,
      6658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6663,
    "end": 6664,
    "range": [
      6663,
      6664
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6669,
    "end": 6671,
    "range": [
      6669,
      6671
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6672,
    "end": 6673,
    "range": [
      6672,
      6673
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6673,
    "end": 6679,
    "range": [
      6673,
      6679
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6680,
    "end": 6681,
    "range": [
      6680,
      6681
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6681,
    "end": 6683,
    "range": [
      6681,
      6683
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 6683,
    "end": 6686,
    "range": [
      6683,
      6686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6686,
    "end": 6687,
    "range": [
      6686,
      6687
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6687,
    "end": 6688,
    "range": [
      6687,
      6688
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6689,
    "end": 6692,
    "range": [
      6689,
      6692
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 6693,
    "end": 6701,
    "range": [
      6693,
      6701
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6701,
    "end": 6702,
    "range": [
      6701,
      6702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6703,
    "end": 6704,
    "range": [
      6703,
      6704
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6713,
    "end": 6714,
    "range": [
      6713,
      6714
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6714,
    "end": 6715,
    "range": [
      6714,
      6715
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 6715,
    "end": 6718,
    "range": [
      6715,
      6718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6718,
    "end": 6719,
    "range": [
      6718,
      6719
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6724,
    "end": 6725,
    "range": [
      6724,
      6725
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6730,
    "end": 6732,
    "range": [
      6730,
      6732
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6733,
    "end": 6734,
    "range": [
      6733,
      6734
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6734,
    "end": 6735,
    "range": [
      6734,
      6735
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6735,
    "end": 6737,
    "range": [
      6735,
      6737
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 6737,
    "end": 6740,
    "range": [
      6737,
      6740
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 6741,
    "end": 6751,
    "range": [
      6741,
      6751
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 6752,
    "end": 6757,
    "range": [
      6752,
      6757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6757,
    "end": 6758,
    "range": [
      6757,
      6758
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6759,
    "end": 6760,
    "range": [
      6759,
      6760
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6769,
    "end": 6770,
    "range": [
      6769,
      6770
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6770,
    "end": 6771,
    "range": [
      6770,
      6771
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 6771,
    "end": 6774,
    "range": [
      6771,
      6774
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6774,
    "end": 6775,
    "range": [
      6774,
      6775
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6780,
    "end": 6781,
    "range": [
      6780,
      6781
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6782,
    "end": 6783,
    "range": [
      6782,
      6783
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6785,
    "end": 6793,
    "range": [
      6785,
      6793
    ]
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 6794,
    "end": 6797,
    "range": [
      6794,
      6797
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6797,
    "end": 6798,
    "range": [
      6797,
      6798
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6798,
    "end": 6799,
    "range": [
      6798,
      6799
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6799,
    "end": 6800,
    "range": [
      6799,
      6800
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 6801,
    "end": 6806,
    "range": [
      6801,
      6806
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6807,
    "end": 6808,
    "range": [
      6807,
      6808
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 6809,
    "end": 6818,
    "range": [
      6809,
      6818
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6818,
    "end": 6819,
    "range": [
      6818,
      6819
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6820,
    "end": 6821,
    "range": [
      6820,
      6821
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6826,
    "end": 6828,
    "range": [
      6826,
      6828
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6829,
    "end": 6830,
    "range": [
      6829,
      6830
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6830,
    "end": 6836,
    "range": [
      6830,
      6836
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6837,
    "end": 6838,
    "range": [
      6837,
      6838
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6838,
    "end": 6840,
    "range": [
      6838,
      6840
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6840,
    "end": 6843,
    "range": [
      6840,
      6843
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6844,
    "end": 6847,
    "range": [
      6844,
      6847
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 6848,
    "end": 6856,
    "range": [
      6848,
      6856
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6856,
    "end": 6857,
    "range": [
      6856,
      6857
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6858,
    "end": 6859,
    "range": [
      6858,
      6859
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6868,
    "end": 6869,
    "range": [
      6868,
      6869
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6869,
    "end": 6870,
    "range": [
      6869,
      6870
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6870,
    "end": 6873,
    "range": [
      6870,
      6873
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6873,
    "end": 6874,
    "range": [
      6873,
      6874
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6879,
    "end": 6880,
    "range": [
      6879,
      6880
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6885,
    "end": 6889,
    "range": [
      6885,
      6889
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6890,
    "end": 6891,
    "range": [
      6890,
      6891
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6900,
    "end": 6901,
    "range": [
      6900,
      6901
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6901,
    "end": 6902,
    "range": [
      6901,
      6902
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6902,
    "end": 6905,
    "range": [
      6902,
      6905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6905,
    "end": 6906,
    "range": [
      6905,
      6906
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6921,
    "end": 6922,
    "range": [
      6921,
      6922
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6927,
    "end": 6929,
    "range": [
      6927,
      6929
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6930,
    "end": 6931,
    "range": [
      6930,
      6931
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6931,
    "end": 6937,
    "range": [
      6931,
      6937
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6938,
    "end": 6939,
    "range": [
      6938,
      6939
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 6939,
    "end": 6941,
    "range": [
      6939,
      6941
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6941,
    "end": 6944,
    "range": [
      6941,
      6944
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 6945,
    "end": 6948,
    "range": [
      6945,
      6948
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 6949,
    "end": 6957,
    "range": [
      6949,
      6957
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6957,
    "end": 6958,
    "range": [
      6957,
      6958
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6959,
    "end": 6960,
    "range": [
      6959,
      6960
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 6969,
    "end": 6970,
    "range": [
      6969,
      6970
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6970,
    "end": 6971,
    "range": [
      6970,
      6971
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6971,
    "end": 6974,
    "range": [
      6971,
      6974
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6974,
    "end": 6975,
    "range": [
      6974,
      6975
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6990,
    "end": 6991,
    "range": [
      6990,
      6991
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6996,
    "end": 7000,
    "range": [
      6996,
      7000
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7001,
    "end": 7002,
    "range": [
      7001,
      7002
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7011,
    "end": 7012,
    "range": [
      7011,
      7012
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7012,
    "end": 7013,
    "range": [
      7012,
      7013
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7013,
    "end": 7016,
    "range": [
      7013,
      7016
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7016,
    "end": 7017,
    "range": [
      7016,
      7017
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7022,
    "end": 7023,
    "range": [
      7022,
      7023
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7028,
    "end": 7030,
    "range": [
      7028,
      7030
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7031,
    "end": 7032,
    "range": [
      7031,
      7032
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7032,
    "end": 7038,
    "range": [
      7032,
      7038
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7039,
    "end": 7040,
    "range": [
      7039,
      7040
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 7040,
    "end": 7042,
    "range": [
      7040,
      7042
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7042,
    "end": 7045,
    "range": [
      7042,
      7045
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 7046,
    "end": 7048,
    "range": [
      7046,
      7048
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 7049,
    "end": 7057,
    "range": [
      7049,
      7057
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7057,
    "end": 7058,
    "range": [
      7057,
      7058
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7059,
    "end": 7060,
    "range": [
      7059,
      7060
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7069,
    "end": 7070,
    "range": [
      7069,
      7070
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7070,
    "end": 7071,
    "range": [
      7070,
      7071
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7071,
    "end": 7074,
    "range": [
      7071,
      7074
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7074,
    "end": 7075,
    "range": [
      7074,
      7075
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7080,
    "end": 7081,
    "range": [
      7080,
      7081
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 7086,
    "end": 7090,
    "range": [
      7086,
      7090
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7091,
    "end": 7092,
    "range": [
      7091,
      7092
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7101,
    "end": 7102,
    "range": [
      7101,
      7102
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7102,
    "end": 7103,
    "range": [
      7102,
      7103
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7103,
    "end": 7106,
    "range": [
      7103,
      7106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7106,
    "end": 7107,
    "range": [
      7106,
      7107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7122,
    "end": 7123,
    "range": [
      7122,
      7123
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7128,
    "end": 7130,
    "range": [
      7128,
      7130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7131,
    "end": 7132,
    "range": [
      7131,
      7132
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7132,
    "end": 7138,
    "range": [
      7132,
      7138
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7139,
    "end": 7140,
    "range": [
      7139,
      7140
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 7140,
    "end": 7142,
    "range": [
      7140,
      7142
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7142,
    "end": 7145,
    "range": [
      7142,
      7145
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 7146,
    "end": 7148,
    "range": [
      7146,
      7148
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 7149,
    "end": 7157,
    "range": [
      7149,
      7157
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7157,
    "end": 7158,
    "range": [
      7157,
      7158
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7159,
    "end": 7160,
    "range": [
      7159,
      7160
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7169,
    "end": 7170,
    "range": [
      7169,
      7170
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7170,
    "end": 7171,
    "range": [
      7170,
      7171
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7171,
    "end": 7174,
    "range": [
      7171,
      7174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7174,
    "end": 7175,
    "range": [
      7174,
      7175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7190,
    "end": 7191,
    "range": [
      7190,
      7191
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 7196,
    "end": 7200,
    "range": [
      7196,
      7200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7201,
    "end": 7202,
    "range": [
      7201,
      7202
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7211,
    "end": 7212,
    "range": [
      7211,
      7212
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7212,
    "end": 7213,
    "range": [
      7212,
      7213
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7213,
    "end": 7216,
    "range": [
      7213,
      7216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7216,
    "end": 7217,
    "range": [
      7216,
      7217
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7222,
    "end": 7223,
    "range": [
      7222,
      7223
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7224,
    "end": 7225,
    "range": [
      7224,
      7225
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7227,
    "end": 7235,
    "range": [
      7227,
      7235
    ]
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 7236,
    "end": 7239,
    "range": [
      7236,
      7239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7239,
    "end": 7240,
    "range": [
      7239,
      7240
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7240,
    "end": 7241,
    "range": [
      7240,
      7241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7241,
    "end": 7242,
    "range": [
      7241,
      7242
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 7243,
    "end": 7248,
    "range": [
      7243,
      7248
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7249,
    "end": 7250,
    "range": [
      7249,
      7250
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 7251,
    "end": 7260,
    "range": [
      7251,
      7260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7260,
    "end": 7261,
    "range": [
      7260,
      7261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7262,
    "end": 7263,
    "range": [
      7262,
      7263
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7268,
    "end": 7270,
    "range": [
      7268,
      7270
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7271,
    "end": 7272,
    "range": [
      7271,
      7272
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7272,
    "end": 7278,
    "range": [
      7272,
      7278
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7279,
    "end": 7280,
    "range": [
      7279,
      7280
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 7280,
    "end": 7282,
    "range": [
      7280,
      7282
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7282,
    "end": 7285,
    "range": [
      7282,
      7285
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 7286,
    "end": 7289,
    "range": [
      7286,
      7289
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 7290,
    "end": 7301,
    "range": [
      7290,
      7301
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7301,
    "end": 7302,
    "range": [
      7301,
      7302
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7303,
    "end": 7304,
    "range": [
      7303,
      7304
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7313,
    "end": 7314,
    "range": [
      7313,
      7314
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7314,
    "end": 7315,
    "range": [
      7314,
      7315
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7315,
    "end": 7318,
    "range": [
      7315,
      7318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7318,
    "end": 7319,
    "range": [
      7318,
      7319
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7334,
    "end": 7335,
    "range": [
      7334,
      7335
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 7340,
    "end": 7344,
    "range": [
      7340,
      7344
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7345,
    "end": 7346,
    "range": [
      7345,
      7346
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7355,
    "end": 7356,
    "range": [
      7355,
      7356
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7356,
    "end": 7357,
    "range": [
      7356,
      7357
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7357,
    "end": 7360,
    "range": [
      7357,
      7360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7360,
    "end": 7361,
    "range": [
      7360,
      7361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7366,
    "end": 7367,
    "range": [
      7366,
      7367
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7372,
    "end": 7374,
    "range": [
      7372,
      7374
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7375,
    "end": 7376,
    "range": [
      7375,
      7376
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7376,
    "end": 7382,
    "range": [
      7376,
      7382
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7383,
    "end": 7384,
    "range": [
      7383,
      7384
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 7384,
    "end": 7386,
    "range": [
      7384,
      7386
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7386,
    "end": 7389,
    "range": [
      7386,
      7389
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 7390,
    "end": 7393,
    "range": [
      7390,
      7393
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 7394,
    "end": 7405,
    "range": [
      7394,
      7405
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7405,
    "end": 7406,
    "range": [
      7405,
      7406
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7407,
    "end": 7408,
    "range": [
      7407,
      7408
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7417,
    "end": 7418,
    "range": [
      7417,
      7418
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7418,
    "end": 7419,
    "range": [
      7418,
      7419
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7419,
    "end": 7422,
    "range": [
      7419,
      7422
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7422,
    "end": 7423,
    "range": [
      7422,
      7423
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7428,
    "end": 7429,
    "range": [
      7428,
      7429
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 7434,
    "end": 7438,
    "range": [
      7434,
      7438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7439,
    "end": 7440,
    "range": [
      7439,
      7440
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7449,
    "end": 7450,
    "range": [
      7449,
      7450
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7450,
    "end": 7451,
    "range": [
      7450,
      7451
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7451,
    "end": 7454,
    "range": [
      7451,
      7454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7454,
    "end": 7455,
    "range": [
      7454,
      7455
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7470,
    "end": 7471,
    "range": [
      7470,
      7471
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7476,
    "end": 7478,
    "range": [
      7476,
      7478
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7479,
    "end": 7480,
    "range": [
      7479,
      7480
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7480,
    "end": 7486,
    "range": [
      7480,
      7486
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7487,
    "end": 7488,
    "range": [
      7487,
      7488
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 7488,
    "end": 7490,
    "range": [
      7488,
      7490
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7490,
    "end": 7493,
    "range": [
      7490,
      7493
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 7494,
    "end": 7496,
    "range": [
      7494,
      7496
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 7497,
    "end": 7508,
    "range": [
      7497,
      7508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7508,
    "end": 7509,
    "range": [
      7508,
      7509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7510,
    "end": 7511,
    "range": [
      7510,
      7511
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7520,
    "end": 7521,
    "range": [
      7520,
      7521
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7521,
    "end": 7522,
    "range": [
      7521,
      7522
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7522,
    "end": 7525,
    "range": [
      7522,
      7525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7525,
    "end": 7526,
    "range": [
      7525,
      7526
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7541,
    "end": 7542,
    "range": [
      7541,
      7542
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 7547,
    "end": 7551,
    "range": [
      7547,
      7551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7552,
    "end": 7553,
    "range": [
      7552,
      7553
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7562,
    "end": 7563,
    "range": [
      7562,
      7563
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7563,
    "end": 7564,
    "range": [
      7563,
      7564
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7564,
    "end": 7567,
    "range": [
      7564,
      7567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7567,
    "end": 7568,
    "range": [
      7567,
      7568
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7573,
    "end": 7574,
    "range": [
      7573,
      7574
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7579,
    "end": 7581,
    "range": [
      7579,
      7581
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7582,
    "end": 7583,
    "range": [
      7582,
      7583
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7583,
    "end": 7589,
    "range": [
      7583,
      7589
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7590,
    "end": 7591,
    "range": [
      7590,
      7591
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 7591,
    "end": 7593,
    "range": [
      7591,
      7593
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7593,
    "end": 7596,
    "range": [
      7593,
      7596
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 7597,
    "end": 7599,
    "range": [
      7597,
      7599
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 7600,
    "end": 7611,
    "range": [
      7600,
      7611
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7611,
    "end": 7612,
    "range": [
      7611,
      7612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7613,
    "end": 7614,
    "range": [
      7613,
      7614
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7623,
    "end": 7624,
    "range": [
      7623,
      7624
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7624,
    "end": 7625,
    "range": [
      7624,
      7625
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7625,
    "end": 7628,
    "range": [
      7625,
      7628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7628,
    "end": 7629,
    "range": [
      7628,
      7629
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7634,
    "end": 7635,
    "range": [
      7634,
      7635
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 7640,
    "end": 7644,
    "range": [
      7640,
      7644
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7645,
    "end": 7646,
    "range": [
      7645,
      7646
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7655,
    "end": 7656,
    "range": [
      7655,
      7656
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7656,
    "end": 7657,
    "range": [
      7656,
      7657
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7657,
    "end": 7660,
    "range": [
      7657,
      7660
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7660,
    "end": 7661,
    "range": [
      7660,
      7661
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7676,
    "end": 7677,
    "range": [
      7676,
      7677
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7678,
    "end": 7679,
    "range": [
      7678,
      7679
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7681,
    "end": 7688,
    "range": [
      7681,
      7688
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7689,
    "end": 7697,
    "range": [
      7689,
      7697
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 7698,
    "end": 7704,
    "range": [
      7698,
      7704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7704,
    "end": 7705,
    "range": [
      7704,
      7705
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7705,
    "end": 7706,
    "range": [
      7705,
      7706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7706,
    "end": 7707,
    "range": [
      7706,
      7707
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 7708,
    "end": 7715,
    "range": [
      7708,
      7715
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7715,
    "end": 7716,
    "range": [
      7715,
      7716
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7716,
    "end": 7717,
    "range": [
      7716,
      7717
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 7718,
    "end": 7725,
    "range": [
      7718,
      7725
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7726,
    "end": 7727,
    "range": [
      7726,
      7727
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7727,
    "end": 7728,
    "range": [
      7727,
      7728
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7729,
    "end": 7736,
    "range": [
      7729,
      7736
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7737,
    "end": 7745,
    "range": [
      7737,
      7745
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNonNull",
    "start": 7746,
    "end": 7759,
    "range": [
      7746,
      7759
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7759,
    "end": 7760,
    "range": [
      7759,
      7760
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7760,
    "end": 7761,
    "range": [
      7760,
      7761
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7761,
    "end": 7762,
    "range": [
      7761,
      7762
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7762,
    "end": 7763,
    "range": [
      7762,
      7763
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7763,
    "end": 7764,
    "range": [
      7763,
      7764
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7764,
    "end": 7765,
    "range": [
      7764,
      7765
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7766,
    "end": 7767,
    "range": [
      7766,
      7767
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7767,
    "end": 7768,
    "range": [
      7767,
      7768
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7768,
    "end": 7769,
    "range": [
      7768,
      7769
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 7770,
    "end": 7777,
    "range": [
      7770,
      7777
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7778,
    "end": 7779,
    "range": [
      7778,
      7779
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 7780,
    "end": 7782,
    "range": [
      7780,
      7782
    ]
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 7783,
    "end": 7794,
    "range": [
      7783,
      7794
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7794,
    "end": 7795,
    "range": [
      7794,
      7795
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7795,
    "end": 7796,
    "range": [
      7795,
      7796
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7796,
    "end": 7797,
    "range": [
      7796,
      7797
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7797,
    "end": 7798,
    "range": [
      7797,
      7798
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7800,
    "end": 7808,
    "range": [
      7800,
      7808
    ]
  },
  {
    "type": "Identifier",
    "value": "f30",
    "start": 7809,
    "end": 7812,
    "range": [
      7809,
      7812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7812,
    "end": 7813,
    "range": [
      7812,
      7813
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7813,
    "end": 7814,
    "range": [
      7813,
      7814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7814,
    "end": 7815,
    "range": [
      7814,
      7815
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 7816,
    "end": 7821,
    "range": [
      7816,
      7821
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7822,
    "end": 7823,
    "range": [
      7822,
      7823
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 7824,
    "end": 7833,
    "range": [
      7824,
      7833
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7833,
    "end": 7834,
    "range": [
      7833,
      7834
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7835,
    "end": 7836,
    "range": [
      7835,
      7836
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7841,
    "end": 7843,
    "range": [
      7841,
      7843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7844,
    "end": 7845,
    "range": [
      7844,
      7845
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7845,
    "end": 7846,
    "range": [
      7845,
      7846
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7846,
    "end": 7847,
    "range": [
      7846,
      7847
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7847,
    "end": 7851,
    "range": [
      7847,
      7851
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7851,
    "end": 7852,
    "range": [
      7851,
      7852
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7853,
    "end": 7854,
    "range": [
      7853,
      7854
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 7863,
    "end": 7869,
    "range": [
      7863,
      7869
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7869,
    "end": 7870,
    "range": [
      7869,
      7870
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7870,
    "end": 7871,
    "range": [
      7870,
      7871
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 7871,
    "end": 7873,
    "range": [
      7871,
      7873
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7873,
    "end": 7876,
    "range": [
      7873,
      7876
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7876,
    "end": 7877,
    "range": [
      7876,
      7877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7877,
    "end": 7878,
    "range": [
      7877,
      7878
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7887,
    "end": 7888,
    "range": [
      7887,
      7888
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7888,
    "end": 7889,
    "range": [
      7888,
      7889
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7889,
    "end": 7892,
    "range": [
      7889,
      7892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7892,
    "end": 7893,
    "range": [
      7892,
      7893
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7898,
    "end": 7899,
    "range": [
      7898,
      7899
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7904,
    "end": 7906,
    "range": [
      7904,
      7906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7907,
    "end": 7908,
    "range": [
      7907,
      7908
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7908,
    "end": 7909,
    "range": [
      7908,
      7909
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7909,
    "end": 7910,
    "range": [
      7909,
      7910
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7910,
    "end": 7914,
    "range": [
      7910,
      7914
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7914,
    "end": 7915,
    "range": [
      7914,
      7915
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7916,
    "end": 7917,
    "range": [
      7916,
      7917
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 7926,
    "end": 7932,
    "range": [
      7926,
      7932
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7932,
    "end": 7933,
    "range": [
      7932,
      7933
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7933,
    "end": 7934,
    "range": [
      7933,
      7934
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 7934,
    "end": 7936,
    "range": [
      7934,
      7936
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7936,
    "end": 7939,
    "range": [
      7936,
      7939
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 7940,
    "end": 7943,
    "range": [
      7940,
      7943
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 7944,
    "end": 7946,
    "range": [
      7944,
      7946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7946,
    "end": 7947,
    "range": [
      7946,
      7947
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7947,
    "end": 7948,
    "range": [
      7947,
      7948
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7957,
    "end": 7958,
    "range": [
      7957,
      7958
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7958,
    "end": 7959,
    "range": [
      7958,
      7959
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7959,
    "end": 7962,
    "range": [
      7959,
      7962
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7962,
    "end": 7963,
    "range": [
      7962,
      7963
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7968,
    "end": 7969,
    "range": [
      7968,
      7969
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7974,
    "end": 7976,
    "range": [
      7974,
      7976
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7977,
    "end": 7978,
    "range": [
      7977,
      7978
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7978,
    "end": 7979,
    "range": [
      7978,
      7979
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7979,
    "end": 7980,
    "range": [
      7979,
      7980
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7980,
    "end": 7984,
    "range": [
      7980,
      7984
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7984,
    "end": 7985,
    "range": [
      7984,
      7985
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7986,
    "end": 7987,
    "range": [
      7986,
      7987
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 7996,
    "end": 8002,
    "range": [
      7996,
      8002
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8002,
    "end": 8003,
    "range": [
      8002,
      8003
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 8003,
    "end": 8009,
    "range": [
      8003,
      8009
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8010,
    "end": 8011,
    "range": [
      8010,
      8011
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 8011,
    "end": 8013,
    "range": [
      8011,
      8013
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8013,
    "end": 8016,
    "range": [
      8013,
      8016
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 8017,
    "end": 8020,
    "range": [
      8017,
      8020
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 8021,
    "end": 8029,
    "range": [
      8021,
      8029
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8029,
    "end": 8030,
    "range": [
      8029,
      8030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8030,
    "end": 8031,
    "range": [
      8030,
      8031
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8040,
    "end": 8041,
    "range": [
      8040,
      8041
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8041,
    "end": 8042,
    "range": [
      8041,
      8042
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8042,
    "end": 8045,
    "range": [
      8042,
      8045
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8045,
    "end": 8046,
    "range": [
      8045,
      8046
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8051,
    "end": 8052,
    "range": [
      8051,
      8052
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8057,
    "end": 8059,
    "range": [
      8057,
      8059
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8060,
    "end": 8061,
    "range": [
      8060,
      8061
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 8061,
    "end": 8062,
    "range": [
      8061,
      8062
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 8062,
    "end": 8063,
    "range": [
      8062,
      8063
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 8063,
    "end": 8067,
    "range": [
      8063,
      8067
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8067,
    "end": 8068,
    "range": [
      8067,
      8068
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8069,
    "end": 8070,
    "range": [
      8069,
      8070
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNonNull",
    "start": 8079,
    "end": 8092,
    "range": [
      8079,
      8092
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8092,
    "end": 8093,
    "range": [
      8092,
      8093
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8093,
    "end": 8094,
    "range": [
      8093,
      8094
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 8094,
    "end": 8096,
    "range": [
      8094,
      8096
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8096,
    "end": 8099,
    "range": [
      8096,
      8099
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8099,
    "end": 8100,
    "range": [
      8099,
      8100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8100,
    "end": 8101,
    "range": [
      8100,
      8101
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8110,
    "end": 8111,
    "range": [
      8110,
      8111
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8111,
    "end": 8112,
    "range": [
      8111,
      8112
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8112,
    "end": 8115,
    "range": [
      8112,
      8115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8115,
    "end": 8116,
    "range": [
      8115,
      8116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8121,
    "end": 8122,
    "range": [
      8121,
      8122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8123,
    "end": 8124,
    "range": [
      8123,
      8124
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8126,
    "end": 8134,
    "range": [
      8126,
      8134
    ]
  },
  {
    "type": "Identifier",
    "value": "f40",
    "start": 8135,
    "end": 8138,
    "range": [
      8135,
      8138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8138,
    "end": 8139,
    "range": [
      8138,
      8139
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8139,
    "end": 8140,
    "range": [
      8139,
      8140
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8140,
    "end": 8141,
    "range": [
      8140,
      8141
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 8142,
    "end": 8147,
    "range": [
      8142,
      8147
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8148,
    "end": 8149,
    "range": [
      8148,
      8149
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 8150,
    "end": 8159,
    "range": [
      8150,
      8159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8159,
    "end": 8160,
    "range": [
      8159,
      8160
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8161,
    "end": 8162,
    "range": [
      8161,
      8162
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 8167,
    "end": 8173,
    "range": [
      8167,
      8173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8174,
    "end": 8175,
    "range": [
      8174,
      8175
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8175,
    "end": 8176,
    "range": [
      8175,
      8176
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 8176,
    "end": 8178,
    "range": [
      8176,
      8178
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8178,
    "end": 8181,
    "range": [
      8178,
      8181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8181,
    "end": 8182,
    "range": [
      8181,
      8182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8183,
    "end": 8184,
    "range": [
      8183,
      8184
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8193,
    "end": 8197,
    "range": [
      8193,
      8197
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 8198,
    "end": 8203,
    "range": [
      8198,
      8203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8203,
    "end": 8204,
    "range": [
      8203,
      8204
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8217,
    "end": 8218,
    "range": [
      8217,
      8218
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8218,
    "end": 8219,
    "range": [
      8218,
      8219
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8219,
    "end": 8222,
    "range": [
      8219,
      8222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8222,
    "end": 8223,
    "range": [
      8222,
      8223
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8236,
    "end": 8241,
    "range": [
      8236,
      8241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8241,
    "end": 8242,
    "range": [
      8241,
      8242
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8251,
    "end": 8255,
    "range": [
      8251,
      8255
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 8256,
    "end": 8258,
    "range": [
      8256,
      8258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8258,
    "end": 8259,
    "range": [
      8258,
      8259
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8272,
    "end": 8273,
    "range": [
      8272,
      8273
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8273,
    "end": 8274,
    "range": [
      8273,
      8274
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8274,
    "end": 8277,
    "range": [
      8274,
      8277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8277,
    "end": 8278,
    "range": [
      8277,
      8278
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8291,
    "end": 8296,
    "range": [
      8291,
      8296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8296,
    "end": 8297,
    "range": [
      8296,
      8297
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8306,
    "end": 8310,
    "range": [
      8306,
      8310
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 8311,
    "end": 8320,
    "range": [
      8311,
      8320
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8320,
    "end": 8321,
    "range": [
      8320,
      8321
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8334,
    "end": 8335,
    "range": [
      8334,
      8335
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8335,
    "end": 8336,
    "range": [
      8335,
      8336
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8336,
    "end": 8339,
    "range": [
      8336,
      8339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8339,
    "end": 8340,
    "range": [
      8339,
      8340
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8363,
    "end": 8368,
    "range": [
      8363,
      8368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8368,
    "end": 8369,
    "range": [
      8368,
      8369
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 8378,
    "end": 8385,
    "range": [
      8378,
      8385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8385,
    "end": 8386,
    "range": [
      8385,
      8386
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8399,
    "end": 8400,
    "range": [
      8399,
      8400
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8400,
    "end": 8401,
    "range": [
      8400,
      8401
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8401,
    "end": 8404,
    "range": [
      8401,
      8404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8404,
    "end": 8405,
    "range": [
      8404,
      8405
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8428,
    "end": 8433,
    "range": [
      8428,
      8433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8433,
    "end": 8434,
    "range": [
      8433,
      8434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8439,
    "end": 8440,
    "range": [
      8439,
      8440
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8441,
    "end": 8442,
    "range": [
      8441,
      8442
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8444,
    "end": 8452,
    "range": [
      8444,
      8452
    ]
  },
  {
    "type": "Identifier",
    "value": "f41",
    "start": 8453,
    "end": 8456,
    "range": [
      8453,
      8456
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8456,
    "end": 8457,
    "range": [
      8456,
      8457
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8457,
    "end": 8458,
    "range": [
      8457,
      8458
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8458,
    "end": 8459,
    "range": [
      8458,
      8459
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 8460,
    "end": 8465,
    "range": [
      8460,
      8465
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8466,
    "end": 8467,
    "range": [
      8466,
      8467
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 8468,
    "end": 8477,
    "range": [
      8468,
      8477
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8477,
    "end": 8478,
    "range": [
      8477,
      8478
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8479,
    "end": 8480,
    "range": [
      8479,
      8480
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 8485,
    "end": 8491,
    "range": [
      8485,
      8491
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8492,
    "end": 8493,
    "range": [
      8492,
      8493
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 8493,
    "end": 8499,
    "range": [
      8493,
      8499
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8500,
    "end": 8501,
    "range": [
      8500,
      8501
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 8501,
    "end": 8503,
    "range": [
      8501,
      8503
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8503,
    "end": 8506,
    "range": [
      8503,
      8506
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8506,
    "end": 8507,
    "range": [
      8506,
      8507
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8508,
    "end": 8509,
    "range": [
      8508,
      8509
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8518,
    "end": 8522,
    "range": [
      8518,
      8522
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 8523,
    "end": 8531,
    "range": [
      8523,
      8531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8531,
    "end": 8532,
    "range": [
      8531,
      8532
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8545,
    "end": 8546,
    "range": [
      8545,
      8546
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8546,
    "end": 8547,
    "range": [
      8546,
      8547
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8547,
    "end": 8550,
    "range": [
      8547,
      8550
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8550,
    "end": 8551,
    "range": [
      8550,
      8551
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8564,
    "end": 8569,
    "range": [
      8564,
      8569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8569,
    "end": 8570,
    "range": [
      8569,
      8570
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8579,
    "end": 8583,
    "range": [
      8579,
      8583
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 8584,
    "end": 8592,
    "range": [
      8584,
      8592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8592,
    "end": 8593,
    "range": [
      8592,
      8593
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8606,
    "end": 8607,
    "range": [
      8606,
      8607
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8607,
    "end": 8608,
    "range": [
      8607,
      8608
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8608,
    "end": 8611,
    "range": [
      8608,
      8611
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8611,
    "end": 8612,
    "range": [
      8611,
      8612
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8625,
    "end": 8630,
    "range": [
      8625,
      8630
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8630,
    "end": 8631,
    "range": [
      8630,
      8631
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8640,
    "end": 8644,
    "range": [
      8640,
      8644
    ]
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 8645,
    "end": 8656,
    "range": [
      8645,
      8656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8656,
    "end": 8657,
    "range": [
      8656,
      8657
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8670,
    "end": 8671,
    "range": [
      8670,
      8671
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8671,
    "end": 8672,
    "range": [
      8671,
      8672
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8672,
    "end": 8675,
    "range": [
      8672,
      8675
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8675,
    "end": 8676,
    "range": [
      8675,
      8676
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8699,
    "end": 8704,
    "range": [
      8699,
      8704
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8704,
    "end": 8705,
    "range": [
      8704,
      8705
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 8714,
    "end": 8721,
    "range": [
      8714,
      8721
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8721,
    "end": 8722,
    "range": [
      8721,
      8722
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 8735,
    "end": 8736,
    "range": [
      8735,
      8736
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8736,
    "end": 8737,
    "range": [
      8736,
      8737
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 8737,
    "end": 8740,
    "range": [
      8737,
      8740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8740,
    "end": 8741,
    "range": [
      8740,
      8741
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8764,
    "end": 8769,
    "range": [
      8764,
      8769
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8769,
    "end": 8770,
    "range": [
      8769,
      8770
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8775,
    "end": 8776,
    "range": [
      8775,
      8776
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8777,
    "end": 8778,
    "range": [
      8777,
      8778
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8803,
    "end": 8807,
    "range": [
      8803,
      8807
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 8808,
    "end": 8813,
    "range": [
      8808,
      8813
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8814,
    "end": 8815,
    "range": [
      8814,
      8815
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8820,
    "end": 8821,
    "range": [
      8820,
      8821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8822,
    "end": 8823,
    "range": [
      8822,
      8823
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8824,
    "end": 8828,
    "range": [
      8824,
      8828
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8828,
    "end": 8829,
    "range": [
      8828,
      8829
    ]
  },
  {
    "type": "String",
    "value": "'rectangle'",
    "start": 8830,
    "end": 8841,
    "range": [
      8830,
      8841
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8841,
    "end": 8842,
    "range": [
      8841,
      8842
    ]
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 8843,
    "end": 8848,
    "range": [
      8843,
      8848
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8848,
    "end": 8849,
    "range": [
      8848,
      8849
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8850,
    "end": 8856,
    "range": [
      8850,
      8856
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8856,
    "end": 8857,
    "range": [
      8856,
      8857
    ]
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 8858,
    "end": 8864,
    "range": [
      8858,
      8864
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8864,
    "end": 8865,
    "range": [
      8864,
      8865
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8866,
    "end": 8872,
    "range": [
      8866,
      8872
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8873,
    "end": 8874,
    "range": [
      8873,
      8874
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8879,
    "end": 8880,
    "range": [
      8879,
      8880
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8881,
    "end": 8882,
    "range": [
      8881,
      8882
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8883,
    "end": 8887,
    "range": [
      8883,
      8887
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8887,
    "end": 8888,
    "range": [
      8887,
      8888
    ]
  },
  {
    "type": "String",
    "value": "'circle'",
    "start": 8889,
    "end": 8897,
    "range": [
      8889,
      8897
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8897,
    "end": 8898,
    "range": [
      8897,
      8898
    ]
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 8899,
    "end": 8905,
    "range": [
      8899,
      8905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8905,
    "end": 8906,
    "range": [
      8905,
      8906
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8907,
    "end": 8913,
    "range": [
      8907,
      8913
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8914,
    "end": 8915,
    "range": [
      8914,
      8915
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8917,
    "end": 8925,
    "range": [
      8917,
      8925
    ]
  },
  {
    "type": "Identifier",
    "value": "getArea",
    "start": 8926,
    "end": 8933,
    "range": [
      8926,
      8933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8933,
    "end": 8934,
    "range": [
      8933,
      8934
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 8934,
    "end": 8939,
    "range": [
      8934,
      8939
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8939,
    "end": 8940,
    "range": [
      8939,
      8940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8940,
    "end": 8941,
    "range": [
      8940,
      8941
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 8942,
    "end": 8947,
    "range": [
      8942,
      8947
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8947,
    "end": 8948,
    "range": [
      8947,
      8948
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8949,
    "end": 8950,
    "range": [
      8949,
      8950
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 8955,
    "end": 8961,
    "range": [
      8955,
      8961
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8962,
    "end": 8963,
    "range": [
      8962,
      8963
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 8963,
    "end": 8968,
    "range": [
      8963,
      8968
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 8968,
    "end": 8970,
    "range": [
      8968,
      8970
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8970,
    "end": 8974,
    "range": [
      8970,
      8974
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8974,
    "end": 8975,
    "range": [
      8974,
      8975
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8976,
    "end": 8977,
    "range": [
      8976,
      8977
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8986,
    "end": 8990,
    "range": [
      8986,
      8990
    ]
  },
  {
    "type": "String",
    "value": "'circle'",
    "start": 8991,
    "end": 8999,
    "range": [
      8991,
      8999
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8999,
    "end": 9000,
    "range": [
      8999,
      9000
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9013,
    "end": 9019,
    "range": [
      9013,
      9019
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 9020,
    "end": 9024,
    "range": [
      9020,
      9024
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9024,
    "end": 9025,
    "range": [
      9024,
      9025
    ]
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 9025,
    "end": 9027,
    "range": [
      9025,
      9027
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 9028,
    "end": 9029,
    "range": [
      9028,
      9029
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 9030,
    "end": 9035,
    "range": [
      9030,
      9035
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9035,
    "end": 9036,
    "range": [
      9035,
      9036
    ]
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 9036,
    "end": 9042,
    "range": [
      9036,
      9042
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 9043,
    "end": 9045,
    "range": [
      9043,
      9045
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 9046,
    "end": 9047,
    "range": [
      9046,
      9047
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 9056,
    "end": 9060,
    "range": [
      9056,
      9060
    ]
  },
  {
    "type": "String",
    "value": "'rectangle'",
    "start": 9061,
    "end": 9072,
    "range": [
      9061,
      9072
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9072,
    "end": 9073,
    "range": [
      9072,
      9073
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9086,
    "end": 9092,
    "range": [
      9086,
      9092
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 9093,
    "end": 9098,
    "range": [
      9093,
      9098
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9098,
    "end": 9099,
    "range": [
      9098,
      9099
    ]
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 9099,
    "end": 9104,
    "range": [
      9099,
      9104
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 9105,
    "end": 9106,
    "range": [
      9105,
      9106
    ]
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 9107,
    "end": 9112,
    "range": [
      9107,
      9112
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9112,
    "end": 9113,
    "range": [
      9112,
      9113
    ]
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 9113,
    "end": 9119,
    "range": [
      9113,
      9119
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 9128,
    "end": 9135,
    "range": [
      9128,
      9135
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9135,
    "end": 9136,
    "range": [
      9135,
      9136
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9149,
    "end": 9155,
    "range": [
      9149,
      9155
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 9156,
    "end": 9157,
    "range": [
      9156,
      9157
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9162,
    "end": 9163,
    "range": [
      9162,
      9163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9164,
    "end": 9165,
    "range": [
      9164,
      9165
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9167,
    "end": 9171,
    "range": [
      9167,
      9171
    ]
  },
  {
    "type": "Identifier",
    "value": "Feature",
    "start": 9172,
    "end": 9179,
    "range": [
      9172,
      9179
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9180,
    "end": 9181,
    "range": [
      9180,
      9181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9182,
    "end": 9183,
    "range": [
      9182,
      9183
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 9186,
    "end": 9188,
    "range": [
      9186,
      9188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9188,
    "end": 9189,
    "range": [
      9188,
      9189
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9190,
    "end": 9196,
    "range": [
      9190,
      9196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9196,
    "end": 9197,
    "range": [
      9196,
      9197
    ]
  },
  {
    "type": "Identifier",
    "value": "geometry",
    "start": 9200,
    "end": 9208,
    "range": [
      9200,
      9208
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9208,
    "end": 9209,
    "range": [
      9208,
      9209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9209,
    "end": 9210,
    "range": [
      9209,
      9210
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9211,
    "end": 9212,
    "range": [
      9211,
      9212
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9217,
    "end": 9221,
    "range": [
      9217,
      9221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9221,
    "end": 9222,
    "range": [
      9221,
      9222
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9223,
    "end": 9229,
    "range": [
      9223,
      9229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9229,
    "end": 9230,
    "range": [
      9229,
      9230
    ]
  },
  {
    "type": "Identifier",
    "value": "coordinates",
    "start": 9235,
    "end": 9246,
    "range": [
      9235,
      9246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9246,
    "end": 9247,
    "range": [
      9246,
      9247
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9248,
    "end": 9254,
    "range": [
      9248,
      9254
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9254,
    "end": 9255,
    "range": [
      9254,
      9255
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9255,
    "end": 9256,
    "range": [
      9255,
      9256
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9256,
    "end": 9257,
    "range": [
      9256,
      9257
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9260,
    "end": 9261,
    "range": [
      9260,
      9261
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9261,
    "end": 9262,
    "range": [
      9261,
      9262
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9263,
    "end": 9264,
    "range": [
      9263,
      9264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9264,
    "end": 9265,
    "range": [
      9264,
      9265
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9268,
    "end": 9276,
    "range": [
      9268,
      9276
    ]
  },
  {
    "type": "Identifier",
    "value": "extractCoordinates",
    "start": 9277,
    "end": 9295,
    "range": [
      9277,
      9295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9295,
    "end": 9296,
    "range": [
      9295,
      9296
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9296,
    "end": 9297,
    "range": [
      9296,
      9297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9297,
    "end": 9298,
    "range": [
      9297,
      9298
    ]
  },
  {
    "type": "Identifier",
    "value": "Feature",
    "start": 9299,
    "end": 9306,
    "range": [
      9299,
      9306
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9306,
    "end": 9307,
    "range": [
      9306,
      9307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9307,
    "end": 9308,
    "range": [
      9307,
      9308
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9309,
    "end": 9315,
    "range": [
      9309,
      9315
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9315,
    "end": 9316,
    "range": [
      9315,
      9316
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9316,
    "end": 9317,
    "range": [
      9316,
      9317
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9318,
    "end": 9319,
    "range": [
      9318,
      9319
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 9324,
    "end": 9326,
    "range": [
      9324,
      9326
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9327,
    "end": 9328,
    "range": [
      9327,
      9328
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9328,
    "end": 9329,
    "range": [
      9328,
      9329
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9329,
    "end": 9330,
    "range": [
      9329,
      9330
    ]
  },
  {
    "type": "Identifier",
    "value": "geometry",
    "start": 9330,
    "end": 9338,
    "range": [
      9330,
      9338
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 9338,
    "end": 9340,
    "range": [
      9338,
      9340
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9340,
    "end": 9344,
    "range": [
      9340,
      9344
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 9345,
    "end": 9348,
    "range": [
      9345,
      9348
    ]
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 9349,
    "end": 9355,
    "range": [
      9349,
      9355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9355,
    "end": 9356,
    "range": [
      9355,
      9356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9357,
    "end": 9358,
    "range": [
      9357,
      9358
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9367,
    "end": 9373,
    "range": [
      9367,
      9373
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9374,
    "end": 9375,
    "range": [
      9374,
      9375
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9375,
    "end": 9376,
    "range": [
      9375,
      9376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9376,
    "end": 9377,
    "range": [
      9376,
      9377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9382,
    "end": 9383,
    "range": [
      9382,
      9383
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9388,
    "end": 9394,
    "range": [
      9388,
      9394
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9395,
    "end": 9396,
    "range": [
      9395,
      9396
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9396,
    "end": 9397,
    "range": [
      9396,
      9397
    ]
  },
  {
    "type": "Identifier",
    "value": "geometry",
    "start": 9397,
    "end": 9405,
    "range": [
      9397,
      9405
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9405,
    "end": 9406,
    "range": [
      9405,
      9406
    ]
  },
  {
    "type": "Identifier",
    "value": "coordinates",
    "start": 9406,
    "end": 9417,
    "range": [
      9406,
      9417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9417,
    "end": 9418,
    "range": [
      9417,
      9418
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9419,
    "end": 9420,
    "range": [
      9419,
      9420
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9444,
    "end": 9453,
    "range": [
      9444,
      9453
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeObject",
    "start": 9454,
    "end": 9464,
    "range": [
      9454,
      9464
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9465,
    "end": 9466,
    "range": [
      9465,
      9466
    ]
  },
  {
    "type": "Identifier",
    "value": "someProperty",
    "start": 9471,
    "end": 9483,
    "range": [
      9471,
      9483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9483,
    "end": 9484,
    "range": [
      9483,
      9484
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 9485,
    "end": 9492,
    "range": [
      9485,
      9492
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9492,
    "end": 9493,
    "range": [
      9492,
      9493
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9494,
    "end": 9495,
    "range": [
      9494,
      9495
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 9497,
    "end": 9500,
    "range": [
      9497,
      9500
    ]
  },
  {
    "type": "Identifier",
    "value": "lastSomeProperty",
    "start": 9501,
    "end": 9517,
    "range": [
      9501,
      9517
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9517,
    "end": 9518,
    "range": [
      9517,
      9518
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 9519,
    "end": 9526,
    "range": [
      9519,
      9526
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9527,
    "end": 9528,
    "range": [
      9527,
      9528
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 9529,
    "end": 9538,
    "range": [
      9529,
      9538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9538,
    "end": 9539,
    "range": [
      9538,
      9539
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9541,
    "end": 9549,
    "range": [
      9541,
      9549
    ]
  },
  {
    "type": "Identifier",
    "value": "someFunction",
    "start": 9550,
    "end": 9562,
    "range": [
      9550,
      9562
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9562,
    "end": 9563,
    "range": [
      9562,
      9563
    ]
  },
  {
    "type": "Identifier",
    "value": "someOptionalObject",
    "start": 9563,
    "end": 9581,
    "range": [
      9563,
      9581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9581,
    "end": 9582,
    "range": [
      9581,
      9582
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeObject",
    "start": 9583,
    "end": 9593,
    "range": [
      9583,
      9593
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9594,
    "end": 9595,
    "range": [
      9594,
      9595
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 9596,
    "end": 9605,
    "range": [
      9596,
      9605
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9605,
    "end": 9606,
    "range": [
      9605,
      9606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9606,
    "end": 9607,
    "range": [
      9606,
      9607
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 9608,
    "end": 9612,
    "range": [
      9608,
      9612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9613,
    "end": 9614,
    "range": [
      9613,
      9614
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 9619,
    "end": 9621,
    "range": [
      9619,
      9621
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9622,
    "end": 9623,
    "range": [
      9622,
      9623
    ]
  },
  {
    "type": "Identifier",
    "value": "someOptionalObject",
    "start": 9623,
    "end": 9641,
    "range": [
      9623,
      9641
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 9641,
    "end": 9643,
    "range": [
      9641,
      9643
    ]
  },
  {
    "type": "Identifier",
    "value": "someProperty",
    "start": 9643,
    "end": 9655,
    "range": [
      9643,
      9655
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 9656,
    "end": 9659,
    "range": [
      9656,
      9659
    ]
  },
  {
    "type": "Identifier",
    "value": "lastSomeProperty",
    "start": 9660,
    "end": 9676,
    "range": [
      9660,
      9676
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9676,
    "end": 9677,
    "range": [
      9676,
      9677
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9678,
    "end": 9679,
    "range": [
      9678,
      9679
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 9688,
    "end": 9695,
    "range": [
      9688,
      9695
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9695,
    "end": 9696,
    "range": [
      9695,
      9696
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 9696,
    "end": 9699,
    "range": [
      9696,
      9699
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9699,
    "end": 9700,
    "range": [
      9699,
      9700
    ]
  },
  {
    "type": "Identifier",
    "value": "someOptionalObject",
    "start": 9700,
    "end": 9718,
    "range": [
      9700,
      9718
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9718,
    "end": 9719,
    "range": [
      9718,
      9719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9719,
    "end": 9720,
    "range": [
      9719,
      9720
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 9729,
    "end": 9736,
    "range": [
      9729,
      9736
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9736,
    "end": 9737,
    "range": [
      9736,
      9737
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 9737,
    "end": 9740,
    "range": [
      9737,
      9740
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9740,
    "end": 9741,
    "range": [
      9740,
      9741
    ]
  },
  {
    "type": "Identifier",
    "value": "someOptionalObject",
    "start": 9741,
    "end": 9759,
    "range": [
      9741,
      9759
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9759,
    "end": 9760,
    "range": [
      9759,
      9760
    ]
  },
  {
    "type": "Identifier",
    "value": "someProperty",
    "start": 9760,
    "end": 9772,
    "range": [
      9760,
      9772
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9772,
    "end": 9773,
    "range": [
      9772,
      9773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9773,
    "end": 9774,
    "range": [
      9773,
      9774
    ]
  },
  {
    "type": "Identifier",
    "value": "lastSomeProperty",
    "start": 9793,
    "end": 9809,
    "range": [
      9793,
      9809
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9810,
    "end": 9811,
    "range": [
      9810,
      9811
    ]
  },
  {
    "type": "Identifier",
    "value": "someOptionalObject",
    "start": 9812,
    "end": 9830,
    "range": [
      9812,
      9830
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 9830,
    "end": 9832,
    "range": [
      9830,
      9832
    ]
  },
  {
    "type": "Identifier",
    "value": "someProperty",
    "start": 9832,
    "end": 9844,
    "range": [
      9832,
      9844
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9844,
    "end": 9845,
    "range": [
      9844,
      9845
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9850,
    "end": 9851,
    "range": [
      9850,
      9851
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9852,
    "end": 9853,
    "range": [
      9852,
      9853
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 9855,
    "end": 9860,
    "range": [
      9855,
      9860
    ]
  },
  {
    "type": "Identifier",
    "value": "someObject",
    "start": 9861,
    "end": 9871,
    "range": [
      9861,
      9871
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9871,
    "end": 9872,
    "range": [
      9871,
      9872
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeObject",
    "start": 9873,
    "end": 9883,
    "range": [
      9873,
      9883
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9884,
    "end": 9885,
    "range": [
      9884,
      9885
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9886,
    "end": 9887,
    "range": [
      9886,
      9887
    ]
  },
  {
    "type": "Identifier",
    "value": "someProperty",
    "start": 9892,
    "end": 9904,
    "range": [
      9892,
      9904
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9904,
    "end": 9905,
    "range": [
      9904,
      9905
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 9906,
    "end": 9908,
    "range": [
      9906,
      9908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9909,
    "end": 9910,
    "range": [
      9909,
      9910
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9910,
    "end": 9911,
    "range": [
      9910,
      9911
    ]
  },
  {
    "type": "Identifier",
    "value": "someFunction",
    "start": 9913,
    "end": 9925,
    "range": [
      9913,
      9925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9925,
    "end": 9926,
    "range": [
      9925,
      9926
    ]
  },
  {
    "type": "Identifier",
    "value": "someObject",
    "start": 9926,
    "end": 9936,
    "range": [
      9926,
      9936
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9936,
    "end": 9937,
    "range": [
      9936,
      9937
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9937,
    "end": 9938,
    "range": [
      9937,
      9938
    ]
  },
  {
    "type": "Identifier",
    "value": "someFunction",
    "start": 9939,
    "end": 9951,
    "range": [
      9939,
      9951
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9951,
    "end": 9952,
    "range": [
      9951,
      9952
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 9952,
    "end": 9961,
    "range": [
      9952,
      9961
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9961,
    "end": 9962,
    "range": [
      9961,
      9962
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9962,
    "end": 9963,
    "range": [
      9962,
      9963
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 9987,
    "end": 9990,
    "range": [
      9987,
      9990
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 9991,
    "end": 9992,
    "range": [
      9991,
      9992
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9993,
    "end": 9994,
    "range": [
      9993,
      9994
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 9995,
    "end": 9996,
    "range": [
      9995,
      9996
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9996,
    "end": 9997,
    "range": [
      9996,
      9997
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9998,
    "end": 10005,
    "range": [
      9998,
      10005
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 10006,
    "end": 10011,
    "range": [
      10006,
      10011
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 10012,
    "end": 10015,
    "range": [
      10012,
      10015
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10015,
    "end": 10016,
    "range": [
      10015,
      10016
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10017,
    "end": 10018,
    "range": [
      10017,
      10018
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 10019,
    "end": 10022,
    "range": [
      10019,
      10022
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10022,
    "end": 10023,
    "range": [
      10022,
      10023
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10024,
    "end": 10025,
    "range": [
      10024,
      10025
    ]
  },
  {
    "type": "String",
    "value": "\"left\"",
    "start": 10025,
    "end": 10031,
    "range": [
      10025,
      10031
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10032,
    "end": 10033,
    "range": [
      10032,
      10033
    ]
  },
  {
    "type": "String",
    "value": "\"right\"",
    "start": 10034,
    "end": 10041,
    "range": [
      10034,
      10041
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10041,
    "end": 10042,
    "range": [
      10041,
      10042
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10043,
    "end": 10044,
    "range": [
      10043,
      10044
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10044,
    "end": 10045,
    "range": [
      10044,
      10045
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10045,
    "end": 10046,
    "range": [
      10045,
      10046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10046,
    "end": 10047,
    "range": [
      10046,
      10047
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 10049,
    "end": 10054,
    "range": [
      10049,
      10054
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10055,
    "end": 10056,
    "range": [
      10055,
      10056
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 10056,
    "end": 10059,
    "range": [
      10056,
      10059
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10059,
    "end": 10060,
    "range": [
      10059,
      10060
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 10060,
    "end": 10061,
    "range": [
      10060,
      10061
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10061,
    "end": 10062,
    "range": [
      10061,
      10062
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 10062,
    "end": 10064,
    "range": [
      10062,
      10064
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 10064,
    "end": 10067,
    "range": [
      10064,
      10067
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 10068,
    "end": 10071,
    "range": [
      10068,
      10071
    ]
  },
  {
    "type": "String",
    "value": "\"left\"",
    "start": 10072,
    "end": 10078,
    "range": [
      10072,
      10078
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10078,
    "end": 10079,
    "range": [
      10078,
      10079
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10080,
    "end": 10081,
    "range": [
      10080,
      10081
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 10086,
    "end": 10087,
    "range": [
      10086,
      10087
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 10088,
    "end": 10090,
    "range": [
      10088,
      10090
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 10091,
    "end": 10092,
    "range": [
      10091,
      10092
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10092,
    "end": 10093,
    "range": [
      10092,
      10093
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 10098,
    "end": 10100,
    "range": [
      10098,
      10100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10101,
    "end": 10102,
    "range": [
      10101,
      10102
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 10102,
    "end": 10105,
    "range": [
      10102,
      10105
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10105,
    "end": 10106,
    "range": [
      10105,
      10106
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 10106,
    "end": 10107,
    "range": [
      10106,
      10107
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10107,
    "end": 10108,
    "range": [
      10107,
      10108
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 10108,
    "end": 10110,
    "range": [
      10108,
      10110
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 10110,
    "end": 10113,
    "range": [
      10110,
      10113
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 10114,
    "end": 10117,
    "range": [
      10114,
      10117
    ]
  },
  {
    "type": "String",
    "value": "\"right\"",
    "start": 10118,
    "end": 10125,
    "range": [
      10118,
      10125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10125,
    "end": 10126,
    "range": [
      10125,
      10126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10127,
    "end": 10128,
    "range": [
      10127,
      10128
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 10137,
    "end": 10144,
    "range": [
      10137,
      10144
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10144,
    "end": 10145,
    "range": [
      10144,
      10145
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 10145,
    "end": 10148,
    "range": [
      10145,
      10148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10148,
    "end": 10149,
    "range": [
      10148,
      10149
    ]
  },
  {
    "type": "String",
    "value": "\"I should ALSO be reachable\"",
    "start": 10149,
    "end": 10177,
    "range": [
      10149,
      10177
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10177,
    "end": 10178,
    "range": [
      10177,
      10178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10178,
    "end": 10179,
    "range": [
      10178,
      10179
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10184,
    "end": 10185,
    "range": [
      10184,
      10185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10186,
    "end": 10187,
    "range": [
      10186,
      10187
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10212,
    "end": 10216,
    "range": [
      10212,
      10216
    ]
  },
  {
    "type": "Identifier",
    "value": "Test5",
    "start": 10217,
    "end": 10222,
    "range": [
      10217,
      10222
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10223,
    "end": 10224,
    "range": [
      10223,
      10224
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10225,
    "end": 10226,
    "range": [
      10225,
      10226
    ]
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 10229,
    "end": 10233,
    "range": [
      10229,
      10233
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10233,
    "end": 10234,
    "range": [
      10233,
      10234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10234,
    "end": 10235,
    "range": [
      10234,
      10235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10236,
    "end": 10237,
    "range": [
      10236,
      10237
    ]
  },
  {
    "type": "Identifier",
    "value": "childs",
    "start": 10242,
    "end": 10248,
    "range": [
      10242,
      10248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10248,
    "end": 10249,
    "range": [
      10248,
      10249
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 10250,
    "end": 10256,
    "range": [
      10250,
      10256
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10256,
    "end": 10257,
    "range": [
      10256,
      10257
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10257,
    "end": 10263,
    "range": [
      10257,
      10263
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10263,
    "end": 10264,
    "range": [
      10263,
      10264
    ]
  },
  {
    "type": "Identifier",
    "value": "Test5",
    "start": 10265,
    "end": 10270,
    "range": [
      10265,
      10270
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10270,
    "end": 10271,
    "range": [
      10270,
      10271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10271,
    "end": 10272,
    "range": [
      10271,
      10272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10275,
    "end": 10276,
    "range": [
      10275,
      10276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10276,
    "end": 10277,
    "range": [
      10276,
      10277
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10278,
    "end": 10279,
    "range": [
      10278,
      10279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10279,
    "end": 10280,
    "range": [
      10279,
      10280
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10282,
    "end": 10290,
    "range": [
      10282,
      10290
    ]
  },
  {
    "type": "Identifier",
    "value": "f50",
    "start": 10291,
    "end": 10294,
    "range": [
      10291,
      10294
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10294,
    "end": 10295,
    "range": [
      10294,
      10295
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 10295,
    "end": 10298,
    "range": [
      10295,
      10298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10298,
    "end": 10299,
    "range": [
      10298,
      10299
    ]
  },
  {
    "type": "Identifier",
    "value": "Test5",
    "start": 10300,
    "end": 10305,
    "range": [
      10300,
      10305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10305,
    "end": 10306,
    "range": [
      10305,
      10306
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10307,
    "end": 10308,
    "range": [
      10307,
      10308
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 10312,
    "end": 10315,
    "range": [
      10312,
      10315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10316,
    "end": 10317,
    "range": [
      10316,
      10317
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 10317,
    "end": 10322,
    "range": [
      10317,
      10322
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 10323,
    "end": 10326,
    "range": [
      10323,
      10326
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 10327,
    "end": 10329,
    "range": [
      10327,
      10329
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 10330,
    "end": 10333,
    "range": [
      10330,
      10333
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10333,
    "end": 10334,
    "range": [
      10333,
      10334
    ]
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 10334,
    "end": 10338,
    "range": [
      10334,
      10338
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 10338,
    "end": 10340,
    "range": [
      10338,
      10340
    ]
  },
  {
    "type": "Identifier",
    "value": "childs",
    "start": 10340,
    "end": 10346,
    "range": [
      10340,
      10346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10346,
    "end": 10347,
    "range": [
      10346,
      10347
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10348,
    "end": 10349,
    "range": [
      10348,
      10349
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 10356,
    "end": 10358,
    "range": [
      10356,
      10358
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10359,
    "end": 10360,
    "range": [
      10359,
      10360
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 10360,
    "end": 10363,
    "range": [
      10360,
      10363
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10363,
    "end": 10364,
    "range": [
      10363,
      10364
    ]
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 10364,
    "end": 10368,
    "range": [
      10364,
      10368
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10368,
    "end": 10369,
    "range": [
      10368,
      10369
    ]
  },
  {
    "type": "Identifier",
    "value": "childs",
    "start": 10369,
    "end": 10375,
    "range": [
      10369,
      10375
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10375,
    "end": 10376,
    "range": [
      10375,
      10376
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 10376,
    "end": 10379,
    "range": [
      10376,
      10379
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10379,
    "end": 10380,
    "range": [
      10379,
      10380
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 10381,
    "end": 10384,
    "range": [
      10381,
      10384
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 10385,
    "end": 10388,
    "range": [
      10385,
      10388
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10388,
    "end": 10389,
    "range": [
      10388,
      10389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10390,
    "end": 10391,
    "range": [
      10390,
      10391
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10400,
    "end": 10406,
    "range": [
      10400,
      10406
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 10407,
    "end": 10410,
    "range": [
      10407,
      10410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10410,
    "end": 10411,
    "range": [
      10410,
      10411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10418,
    "end": 10419,
    "range": [
      10418,
      10419
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10423,
    "end": 10424,
    "range": [
      10423,
      10424
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10428,
    "end": 10434,
    "range": [
      10428,
      10434
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 10435,
    "end": 10439,
    "range": [
      10435,
      10439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10439,
    "end": 10440,
    "range": [
      10439,
      10440
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10441,
    "end": 10442,
    "range": [
      10441,
      10442
    ]
  }
]
```
