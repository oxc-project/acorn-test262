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
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
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
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 8,
        "end": 17
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 35
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
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
                          "start": 47,
                          "end": 48
                        },
                        "typeArguments": null,
                        "start": 47,
                        "end": 48
                      },
                      "start": 45,
                      "end": 48
                    },
                    "start": 44,
                    "end": 48
                  },
                  "readonly": false,
                  "static": false,
                  "start": 36,
                  "end": 48
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 59,
                        "end": 60
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 63
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 65,
                        "end": 66
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 71
                            },
                            "typeArguments": null,
                            "start": 70,
                            "end": 71
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 72,
                              "end": 73
                            },
                            "typeArguments": null,
                            "start": 72,
                            "end": 73
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 74,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 74,
                            "end": 75
                          }
                        ],
                        "start": 69,
                        "end": 76
                      },
                      "start": 67,
                      "end": 76
                    },
                    "start": 58,
                    "end": 76
                  },
                  "readonly": false,
                  "static": false,
                  "start": 50,
                  "end": 76
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 93,
                            "end": 94
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 99,
                            "end": 108
                          },
                          "start": 93,
                          "end": 108
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 112,
                            "end": 113
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 127
                          },
                          "start": 112,
                          "end": 127
                        },
                        "start": 93,
                        "end": 127
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 133,
                              "end": 137
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 138,
                              "end": 139
                            },
                            "optional": false,
                            "computed": false,
                            "start": 133,
                            "end": 139
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 153
                          },
                          "start": 133,
                          "end": 153
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 157,
                              "end": 161
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 162,
                              "end": 163
                            },
                            "optional": false,
                            "computed": false,
                            "start": 157,
                            "end": 163
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 168,
                            "end": 177
                          },
                          "start": 157,
                          "end": 177
                        },
                        "start": 133,
                        "end": 177
                      },
                      "start": 92,
                      "end": 178
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 194,
                                "end": 198
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 199,
                                "end": 200
                              },
                              "optional": false,
                              "computed": false,
                              "start": 194,
                              "end": 200
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 203,
                                "end": 204
                              },
                              "operator": "||",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 208,
                                "end": 209
                              },
                              "start": 203,
                              "end": 209
                            },
                            "start": 194,
                            "end": 209
                          },
                          "directive": null,
                          "start": 194,
                          "end": 210
                        }
                      ],
                      "start": 180,
                      "end": 220
                    },
                    "alternate": null,
                    "start": 88,
                    "end": 220
                  }
                ],
                "start": 78,
                "end": 226
              },
              "expression": false,
              "start": 35,
              "end": 226
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 24,
            "end": 226
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getA",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 243
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 263,
                        "end": 267
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 269
                      },
                      "optional": false,
                      "computed": false,
                      "start": 263,
                      "end": 269
                    },
                    "start": 256,
                    "end": 269
                  }
                ],
                "start": 246,
                "end": 275
              },
              "expression": false,
              "start": 243,
              "end": 275
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 232,
            "end": 275
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getB",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 292
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 312,
                        "end": 316
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 317,
                        "end": 318
                      },
                      "optional": false,
                      "computed": false,
                      "start": 312,
                      "end": 318
                    },
                    "start": 305,
                    "end": 318
                  }
                ],
                "start": 295,
                "end": 324
              },
              "expression": false,
              "start": 292,
              "end": 324
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 281,
            "end": 324
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getC",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 341
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 361,
                        "end": 365
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 367
                      },
                      "optional": false,
                      "computed": false,
                      "start": 361,
                      "end": 367
                    },
                    "start": 354,
                    "end": 368
                  }
                ],
                "start": 344,
                "end": 374
              },
              "expression": false,
              "start": 341,
              "end": 374
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 330,
            "end": 374
          }
        ],
        "start": 18,
        "end": 376
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 376
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 383
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 392
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 402
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 405,
                    "end": 406
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 408,
                    "end": 412
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 414,
                    "end": 416
                  }
                ],
                "start": 404,
                "end": 417
              }
            ],
            "start": 386,
            "end": 418
          },
          "definite": false,
          "start": 382,
          "end": 418
        }
      ],
      "declare": false,
      "start": 378,
      "end": 419
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x_a",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 428
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 433
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x_c",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 438
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 439
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 444
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 449
                  },
                  "optional": false,
                  "computed": false,
                  "start": 443,
                  "end": 449
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 443,
                "end": 451
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 454
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 459
                  },
                  "optional": false,
                  "computed": false,
                  "start": 453,
                  "end": 459
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 453,
                "end": 461
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 464
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 469
                  },
                  "optional": false,
                  "computed": false,
                  "start": 463,
                  "end": 469
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 463,
                "end": 471
              }
            ],
            "start": 442,
            "end": 472
          },
          "definite": false,
          "start": 424,
          "end": 472
        }
      ],
      "declare": false,
      "start": 420,
      "end": 473
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 480
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 489
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 490,
                "end": 492
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 495,
                    "end": 496
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 498,
                    "end": 502
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 504,
                    "end": 508
                  }
                ],
                "start": 494,
                "end": 509
              }
            ],
            "start": 483,
            "end": 510
          },
          "definite": false,
          "start": 479,
          "end": 510
        }
      ],
      "declare": false,
      "start": 475,
      "end": 511
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y_a",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 520
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 525
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y_c",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 530
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 531
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 536
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 537,
                    "end": 541
                  },
                  "optional": false,
                  "computed": false,
                  "start": 535,
                  "end": 541
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 535,
                "end": 543
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 546
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 551
                  },
                  "optional": false,
                  "computed": false,
                  "start": 545,
                  "end": 551
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 545,
                "end": 553
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 555,
                    "end": 556
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 557,
                    "end": 561
                  },
                  "optional": false,
                  "computed": false,
                  "start": 555,
                  "end": 561
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 555,
                "end": 563
              }
            ],
            "start": 534,
            "end": 564
          },
          "definite": false,
          "start": 516,
          "end": 564
        }
      ],
      "declare": false,
      "start": 512,
      "end": 565
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 571,
            "end": 572
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 581
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 582,
                "end": 584
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 587,
                    "end": 596
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 598,
                    "end": 600
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 602,
                    "end": 604
                  }
                ],
                "start": 586,
                "end": 605
              }
            ],
            "start": 575,
            "end": 606
          },
          "definite": false,
          "start": 571,
          "end": 606
        }
      ],
      "declare": false,
      "start": 567,
      "end": 607
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_a",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 616
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 621
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_c",
                "optional": false,
                "typeAnnotation": null,
                "start": 623,
                "end": 626
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 612,
            "end": 627
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 631,
                    "end": 632
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 637
                  },
                  "optional": false,
                  "computed": false,
                  "start": 631,
                  "end": 637
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 631,
                "end": 639
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 641,
                    "end": 642
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 643,
                    "end": 647
                  },
                  "optional": false,
                  "computed": false,
                  "start": 641,
                  "end": 647
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 641,
                "end": 649
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 651,
                    "end": 652
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 653,
                    "end": 657
                  },
                  "optional": false,
                  "computed": false,
                  "start": 651,
                  "end": 657
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 651,
                "end": 659
              }
            ],
            "start": 630,
            "end": 660
          },
          "definite": false,
          "start": 612,
          "end": 660
        }
      ],
      "declare": false,
      "start": 608,
      "end": 661
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
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 667,
            "end": 668
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 677
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 678,
                "end": 680
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 683,
                    "end": 692
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 703
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 705,
                    "end": 714
                  }
                ],
                "start": 682,
                "end": 715
              }
            ],
            "start": 671,
            "end": 716
          },
          "definite": false,
          "start": 667,
          "end": 716
        }
      ],
      "declare": false,
      "start": 663,
      "end": 717
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_a",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 726
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 731
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z_c",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 736
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 737
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 741,
                    "end": 742
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 743,
                    "end": 747
                  },
                  "optional": false,
                  "computed": false,
                  "start": 741,
                  "end": 747
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 741,
                "end": 749
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 751,
                    "end": 752
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 753,
                    "end": 757
                  },
                  "optional": false,
                  "computed": false,
                  "start": 751,
                  "end": 757
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 751,
                "end": 759
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 761,
                    "end": 762
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 763,
                    "end": 767
                  },
                  "optional": false,
                  "computed": false,
                  "start": 761,
                  "end": 767
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 761,
                "end": 769
              }
            ],
            "start": 740,
            "end": 770
          },
          "definite": false,
          "start": 722,
          "end": 770
        }
      ],
      "declare": false,
      "start": 718,
      "end": 771
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 771
}
```
