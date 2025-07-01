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
