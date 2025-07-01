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
        "name": "A",
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
              "name": "field",
              "start": 14,
              "end": 20
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 23,
              "end": 24
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 25
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "otherObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 41
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "typeArguments": null,
              "arguments": [],
              "start": 44,
              "end": 51
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 30,
            "end": 52
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 67
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 90
                          },
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 92,
                            "end": 94
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 89,
                          "end": 94
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 96,
                            "end": 97
                          },
                          "value": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 99,
                            "end": 100
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 96,
                          "end": 100
                        }
                      ],
                      "start": 87,
                      "end": 102
                    },
                    "start": 80,
                    "end": 103
                  }
                ],
                "start": 70,
                "end": 109
              },
              "expression": false,
              "start": 67,
              "end": 109
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 57,
            "end": 109
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 123
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
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 144,
                          "end": 146
                        },
                        {
                          "type": "Literal",
                          "value": 11,
                          "raw": "11",
                          "start": 148,
                          "end": 150
                        }
                      ],
                      "start": 143,
                      "end": 151
                    },
                    "start": 136,
                    "end": 152
                  }
                ],
                "start": 126,
                "end": 158
              },
              "expression": false,
              "start": 123,
              "end": 158
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 114,
            "end": 158
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
              "start": 163,
              "end": 174
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 194,
                              "end": 200
                            },
                            "start": 192,
                            "end": 200
                          },
                          "start": 191,
                          "end": 200
                        },
                        "init": null,
                        "definite": false,
                        "start": 191,
                        "end": 200
                      }
                    ],
                    "declare": false,
                    "start": 187,
                    "end": 201
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 213,
                              "end": 214
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 216,
                                "end": 220
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 221,
                                "end": 227
                              },
                              "optional": false,
                              "computed": false,
                              "start": 216,
                              "end": 227
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 213,
                            "end": 227
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 229,
                              "end": 230
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 229,
                              "end": 230
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 229,
                            "end": 230
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 232
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 235,
                            "end": 239
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testObject",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 240,
                            "end": 250
                          },
                          "optional": false,
                          "computed": false,
                          "start": 235,
                          "end": 250
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 235,
                        "end": 252
                      },
                      "start": 211,
                      "end": 252
                    },
                    "directive": null,
                    "start": 210,
                    "end": 254
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 265,
                              "end": 269
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 270,
                              "end": 276
                            },
                            "optional": false,
                            "computed": false,
                            "start": 265,
                            "end": 276
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 279
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 264,
                        "end": 280
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 283,
                            "end": 287
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 288,
                            "end": 297
                          },
                          "optional": false,
                          "computed": false,
                          "start": 283,
                          "end": 297
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 283,
                        "end": 299
                      },
                      "start": 264,
                      "end": 299
                    },
                    "directive": null,
                    "start": 263,
                    "end": 301
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 313,
                              "end": 314
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 316,
                                "end": 320
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 321,
                                "end": 327
                              },
                              "optional": false,
                              "computed": false,
                              "start": 316,
                              "end": 327
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 313,
                            "end": 327
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 329,
                              "end": 330
                            },
                            "value": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 333,
                                    "end": 337
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "field",
                                    "start": 338,
                                    "end": 344
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 333,
                                  "end": 344
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 332,
                              "end": 345
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 329,
                            "end": 345
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 311,
                        "end": 347
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 352,
                              "end": 353
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 355,
                              "end": 356
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 352,
                            "end": 356
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 358,
                              "end": 359
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 362,
                                  "end": 363
                                }
                              ],
                              "start": 361,
                              "end": 364
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 358,
                            "end": 364
                          }
                        ],
                        "start": 350,
                        "end": 366
                      },
                      "start": 311,
                      "end": 366
                    },
                    "directive": null,
                    "start": 310,
                    "end": 368
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 378,
                              "end": 382
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 383,
                              "end": 389
                            },
                            "optional": false,
                            "computed": false,
                            "start": 378,
                            "end": 389
                          },
                          {
                            "type": "ArrayPattern",
                            "decorators": [],
                            "elements": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 392,
                                  "end": 396
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "field",
                                  "start": 397,
                                  "end": 403
                                },
                                "optional": false,
                                "computed": false,
                                "start": 392,
                                "end": 403
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 391,
                            "end": 404
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 377,
                        "end": 405
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 409,
                            "end": 410
                          },
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 413,
                                "end": 414
                              }
                            ],
                            "start": 412,
                            "end": 415
                          }
                        ],
                        "start": 408,
                        "end": 416
                      },
                      "start": 377,
                      "end": 416
                    },
                    "directive": null,
                    "start": 377,
                    "end": 417
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 429,
                              "end": 430
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 432,
                                  "end": 436
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "field",
                                  "start": 437,
                                  "end": 443
                                },
                                "optional": false,
                                "computed": false,
                                "start": 432,
                                "end": 443
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 446,
                                "end": 447
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 432,
                              "end": 447
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 429,
                            "end": 447
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 449,
                              "end": 450
                            },
                            "value": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "AssignmentPattern",
                                  "decorators": [],
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 453,
                                      "end": 457
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "field",
                                      "start": 458,
                                      "end": 464
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 453,
                                    "end": 464
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 467,
                                    "end": 468
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 453,
                                  "end": 468
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 452,
                              "end": 469
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 449,
                            "end": 469
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 427,
                        "end": 471
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 476,
                              "end": 477
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 479,
                              "end": 481
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 476,
                            "end": 481
                          }
                        ],
                        "start": 474,
                        "end": 483
                      },
                      "start": 427,
                      "end": 483
                    },
                    "directive": null,
                    "start": 426,
                    "end": 485
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 495,
                                "end": 499
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 500,
                                "end": 506
                              },
                              "optional": false,
                              "computed": false,
                              "start": 495,
                              "end": 506
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 509,
                              "end": 510
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 495,
                            "end": 510
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 494,
                        "end": 511
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 514,
                        "end": 516
                      },
                      "start": 494,
                      "end": 516
                    },
                    "directive": null,
                    "start": 494,
                    "end": 517
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 527,
                                  "end": 531
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "otherObject",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 532,
                                  "end": 543
                                },
                                "optional": false,
                                "computed": false,
                                "start": 527,
                                "end": 543
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 544,
                                "end": 550
                              },
                              "optional": false,
                              "computed": false,
                              "start": 527,
                              "end": 550
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 553,
                              "end": 554
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 527,
                            "end": 554
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 526,
                        "end": 555
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 558,
                        "end": 560
                      },
                      "start": 526,
                      "end": 560
                    },
                    "directive": null,
                    "start": 526,
                    "end": 561
                  }
                ],
                "start": 177,
                "end": 567
              },
              "expression": false,
              "start": 174,
              "end": 567
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 163,
            "end": 567
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
              "start": 579,
              "end": 583
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
                  "name": "_a",
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
                        "start": 588,
                        "end": 589
                      },
                      "typeArguments": null,
                      "start": 588,
                      "end": 589
                    },
                    "start": 586,
                    "end": 589
                  },
                  "start": 584,
                  "end": 589
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 602,
                              "end": 604
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 605,
                              "end": 611
                            },
                            "optional": false,
                            "computed": false,
                            "start": 602,
                            "end": 611
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 601,
                        "end": 612
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 616,
                            "end": 617
                          }
                        ],
                        "start": 615,
                        "end": 618
                      },
                      "start": 601,
                      "end": 618
                    },
                    "directive": null,
                    "start": 601,
                    "end": 619
                  }
                ],
                "start": 591,
                "end": 625
              },
              "expression": false,
              "start": 583,
              "end": 625
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 572,
            "end": 625
          }
        ],
        "start": 8,
        "end": 627
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 627
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 627
}
```
