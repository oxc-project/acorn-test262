__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
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
              "type": "PrivateIdentifier",
              "name": "test",
              "start": 21,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "value": {
              "type": "Literal",
              "value": 24,
              "raw": "24",
              "start": 37,
              "end": 39
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 40
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
              "start": 45,
              "end": 56
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 69,
                          "end": 70
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 71,
                          "end": 76
                        },
                        "optional": false,
                        "computed": false,
                        "start": 69,
                        "end": 76
                      },
                      "start": 69,
                      "end": 78
                    },
                    "directive": null,
                    "start": 69,
                    "end": 79
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 89
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 90,
                          "end": 95
                        },
                        "optional": false,
                        "computed": false,
                        "start": 88,
                        "end": 95
                      },
                      "start": 88,
                      "end": 97
                    },
                    "directive": null,
                    "start": 88,
                    "end": 98
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 110
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 111,
                          "end": 116
                        },
                        "optional": false,
                        "computed": false,
                        "start": 109,
                        "end": 116
                      },
                      "start": 107,
                      "end": 116
                    },
                    "directive": null,
                    "start": 107,
                    "end": 117
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 128,
                          "end": 129
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 130,
                          "end": 135
                        },
                        "optional": false,
                        "computed": false,
                        "start": 128,
                        "end": 135
                      },
                      "start": 126,
                      "end": 135
                    },
                    "directive": null,
                    "start": 126,
                    "end": 136
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
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 152
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 155,
                              "end": 156
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 157,
                              "end": 162
                            },
                            "optional": false,
                            "computed": false,
                            "start": 155,
                            "end": 162
                          },
                          "start": 155,
                          "end": 164
                        },
                        "definite": false,
                        "start": 151,
                        "end": 164
                      }
                    ],
                    "declare": false,
                    "start": 145,
                    "end": 165
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
                          "typeAnnotation": null,
                          "start": 180,
                          "end": 181
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 184,
                              "end": 185
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 186,
                              "end": 191
                            },
                            "optional": false,
                            "computed": false,
                            "start": 184,
                            "end": 191
                          },
                          "start": 184,
                          "end": 193
                        },
                        "definite": false,
                        "start": 180,
                        "end": 193
                      }
                    ],
                    "declare": false,
                    "start": 174,
                    "end": 194
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 209,
                          "end": 210
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 215,
                              "end": 216
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 217,
                              "end": 222
                            },
                            "optional": false,
                            "computed": false,
                            "start": 215,
                            "end": 222
                          },
                          "start": 213,
                          "end": 222
                        },
                        "definite": false,
                        "start": 209,
                        "end": 222
                      }
                    ],
                    "declare": false,
                    "start": 203,
                    "end": 223
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 238,
                          "end": 239
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 244,
                              "end": 245
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 246,
                              "end": 251
                            },
                            "optional": false,
                            "computed": false,
                            "start": 244,
                            "end": 251
                          },
                          "start": 242,
                          "end": 251
                        },
                        "definite": false,
                        "start": 238,
                        "end": 251
                      }
                    ],
                    "declare": false,
                    "start": 232,
                    "end": 252
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 266,
                          "end": 267
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 268,
                          "end": 273
                        },
                        "optional": false,
                        "computed": false,
                        "start": 266,
                        "end": 273
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 276,
                        "end": 277
                      },
                      "start": 266,
                      "end": 277
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 280
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 281,
                          "end": 286
                        },
                        "optional": false,
                        "computed": false,
                        "start": 279,
                        "end": 286
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 289,
                        "end": 291
                      },
                      "start": 279,
                      "end": 291
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 295,
                          "end": 296
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 297,
                          "end": 302
                        },
                        "optional": false,
                        "computed": false,
                        "start": 295,
                        "end": 302
                      },
                      "start": 293,
                      "end": 302
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 304,
                      "end": 306
                    },
                    "start": 261,
                    "end": 306
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 321
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 322,
                          "end": 327
                        },
                        "optional": false,
                        "computed": false,
                        "start": 320,
                        "end": 327
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 330,
                        "end": 331
                      },
                      "start": 320,
                      "end": 331
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 333,
                          "end": 334
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 335,
                          "end": 340
                        },
                        "optional": false,
                        "computed": false,
                        "start": 333,
                        "end": 340
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 343,
                        "end": 345
                      },
                      "start": 333,
                      "end": 345
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 347,
                          "end": 348
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 349,
                          "end": 354
                        },
                        "optional": false,
                        "computed": false,
                        "start": 347,
                        "end": 354
                      },
                      "start": 347,
                      "end": 356
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 358,
                      "end": 360
                    },
                    "start": 315,
                    "end": 360
                  }
                ],
                "start": 59,
                "end": 366
              },
              "expression": false,
              "start": 56,
              "end": 366
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 45,
            "end": 366
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 375
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 388,
                              "end": 392
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 393,
                              "end": 401
                            },
                            "optional": false,
                            "computed": false,
                            "start": 388,
                            "end": 401
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 388,
                          "end": 403
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 404,
                          "end": 409
                        },
                        "optional": false,
                        "computed": false,
                        "start": 388,
                        "end": 409
                      },
                      "start": 388,
                      "end": 411
                    },
                    "directive": null,
                    "start": 388,
                    "end": 412
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 421,
                              "end": 425
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 426,
                              "end": 434
                            },
                            "optional": false,
                            "computed": false,
                            "start": 421,
                            "end": 434
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 421,
                          "end": 436
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 437,
                          "end": 442
                        },
                        "optional": false,
                        "computed": false,
                        "start": 421,
                        "end": 442
                      },
                      "start": 421,
                      "end": 444
                    },
                    "directive": null,
                    "start": 421,
                    "end": 445
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 456,
                              "end": 460
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 461,
                              "end": 469
                            },
                            "optional": false,
                            "computed": false,
                            "start": 456,
                            "end": 469
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 456,
                          "end": 471
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 472,
                          "end": 477
                        },
                        "optional": false,
                        "computed": false,
                        "start": 456,
                        "end": 477
                      },
                      "start": 454,
                      "end": 477
                    },
                    "directive": null,
                    "start": 454,
                    "end": 478
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 489,
                              "end": 493
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 494,
                              "end": 502
                            },
                            "optional": false,
                            "computed": false,
                            "start": 489,
                            "end": 502
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 489,
                          "end": 504
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 505,
                          "end": 510
                        },
                        "optional": false,
                        "computed": false,
                        "start": 489,
                        "end": 510
                      },
                      "start": 487,
                      "end": 510
                    },
                    "directive": null,
                    "start": 487,
                    "end": 511
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
                          "typeAnnotation": null,
                          "start": 526,
                          "end": 527
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 530,
                                  "end": 534
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 535,
                                  "end": 543
                                },
                                "optional": false,
                                "computed": false,
                                "start": 530,
                                "end": 543
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 530,
                              "end": 545
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 546,
                              "end": 551
                            },
                            "optional": false,
                            "computed": false,
                            "start": 530,
                            "end": 551
                          },
                          "start": 530,
                          "end": 553
                        },
                        "definite": false,
                        "start": 526,
                        "end": 553
                      }
                    ],
                    "declare": false,
                    "start": 520,
                    "end": 554
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
                          "typeAnnotation": null,
                          "start": 569,
                          "end": 570
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 573,
                                  "end": 577
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 578,
                                  "end": 586
                                },
                                "optional": false,
                                "computed": false,
                                "start": 573,
                                "end": 586
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 573,
                              "end": 588
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 589,
                              "end": 594
                            },
                            "optional": false,
                            "computed": false,
                            "start": 573,
                            "end": 594
                          },
                          "start": 573,
                          "end": 596
                        },
                        "definite": false,
                        "start": 569,
                        "end": 596
                      }
                    ],
                    "declare": false,
                    "start": 563,
                    "end": 597
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 612,
                          "end": 613
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 618,
                                  "end": 622
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 623,
                                  "end": 631
                                },
                                "optional": false,
                                "computed": false,
                                "start": 618,
                                "end": 631
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 618,
                              "end": 633
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 634,
                              "end": 639
                            },
                            "optional": false,
                            "computed": false,
                            "start": 618,
                            "end": 639
                          },
                          "start": 616,
                          "end": 639
                        },
                        "definite": false,
                        "start": 612,
                        "end": 639
                      }
                    ],
                    "declare": false,
                    "start": 606,
                    "end": 640
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 655,
                          "end": 656
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 661,
                                  "end": 665
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 666,
                                  "end": 674
                                },
                                "optional": false,
                                "computed": false,
                                "start": 661,
                                "end": 674
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 661,
                              "end": 676
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 677,
                              "end": 682
                            },
                            "optional": false,
                            "computed": false,
                            "start": 661,
                            "end": 682
                          },
                          "start": 659,
                          "end": 682
                        },
                        "definite": false,
                        "start": 655,
                        "end": 682
                      }
                    ],
                    "declare": false,
                    "start": 649,
                    "end": 683
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 697,
                              "end": 701
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 702,
                              "end": 710
                            },
                            "optional": false,
                            "computed": false,
                            "start": 697,
                            "end": 710
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 697,
                          "end": 712
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 713,
                          "end": 718
                        },
                        "optional": false,
                        "computed": false,
                        "start": 697,
                        "end": 718
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 721,
                        "end": 722
                      },
                      "start": 697,
                      "end": 722
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 724,
                              "end": 728
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 729,
                              "end": 737
                            },
                            "optional": false,
                            "computed": false,
                            "start": 724,
                            "end": 737
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 724,
                          "end": 739
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 740,
                          "end": 745
                        },
                        "optional": false,
                        "computed": false,
                        "start": 724,
                        "end": 745
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 748,
                        "end": 750
                      },
                      "start": 724,
                      "end": 750
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 754,
                              "end": 758
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 759,
                              "end": 767
                            },
                            "optional": false,
                            "computed": false,
                            "start": 754,
                            "end": 767
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 754,
                          "end": 769
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 770,
                          "end": 775
                        },
                        "optional": false,
                        "computed": false,
                        "start": 754,
                        "end": 775
                      },
                      "start": 752,
                      "end": 775
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 777,
                      "end": 779
                    },
                    "start": 692,
                    "end": 779
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 793,
                              "end": 797
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 798,
                              "end": 806
                            },
                            "optional": false,
                            "computed": false,
                            "start": 793,
                            "end": 806
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 793,
                          "end": 808
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 809,
                          "end": 814
                        },
                        "optional": false,
                        "computed": false,
                        "start": 793,
                        "end": 814
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 817,
                        "end": 818
                      },
                      "start": 793,
                      "end": 818
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 820,
                              "end": 824
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 825,
                              "end": 833
                            },
                            "optional": false,
                            "computed": false,
                            "start": 820,
                            "end": 833
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 820,
                          "end": 835
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 836,
                          "end": 841
                        },
                        "optional": false,
                        "computed": false,
                        "start": 820,
                        "end": 841
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 844,
                        "end": 846
                      },
                      "start": 820,
                      "end": 846
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 848,
                              "end": 852
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 853,
                              "end": 861
                            },
                            "optional": false,
                            "computed": false,
                            "start": 848,
                            "end": 861
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 848,
                          "end": 863
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 864,
                          "end": 869
                        },
                        "optional": false,
                        "computed": false,
                        "start": 848,
                        "end": 869
                      },
                      "start": 848,
                      "end": 871
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 873,
                      "end": 875
                    },
                    "start": 788,
                    "end": 875
                  }
                ],
                "start": 378,
                "end": 881
              },
              "expression": false,
              "start": 375,
              "end": 881
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 371,
            "end": 881
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 894
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 906,
                      "end": 907
                    },
                    "start": 899,
                    "end": 908
                  }
                ],
                "start": 897,
                "end": 910
              },
              "expression": false,
              "start": 894,
              "end": 910
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 886,
            "end": 910
          }
        ],
        "start": 8,
        "end": 912
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 912
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 912
}
```
