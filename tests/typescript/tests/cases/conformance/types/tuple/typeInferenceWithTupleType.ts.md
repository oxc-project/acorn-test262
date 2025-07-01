__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "combine",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
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
        "start": 16,
        "end": 22
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
                "start": 26,
                "end": 27
              },
              "typeArguments": null,
              "start": 26,
              "end": 27
            },
            "start": 24,
            "end": 27
          },
          "start": 23,
          "end": 27
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
              },
              "typeArguments": null,
              "start": 32,
              "end": 33
            },
            "start": 30,
            "end": 33
          },
          "start": 29,
          "end": 33
        }
      ],
      "returnType": {
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
                "start": 37,
                "end": 38
              },
              "typeArguments": null,
              "start": 37,
              "end": 38
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "typeArguments": null,
              "start": 40,
              "end": 41
            }
          ],
          "start": 36,
          "end": 42
        },
        "start": 34,
        "end": 42
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 58
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                }
              ],
              "start": 56,
              "end": 62
            },
            "start": 49,
            "end": 63
          }
        ],
        "start": 43,
        "end": 65
      },
      "expression": false,
      "start": 0,
      "end": 65
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
            "name": "combineResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 84
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "combine",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 94
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 95,
                "end": 103
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 105,
                "end": 107
              }
            ],
            "optional": false,
            "start": 87,
            "end": 108
          },
          "definite": false,
          "start": 71,
          "end": 108
        }
      ],
      "declare": false,
      "start": 67,
      "end": 109
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
            "name": "combineEle1",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 125
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combineResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 141
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 142,
              "end": 143
            },
            "optional": false,
            "computed": true,
            "start": 128,
            "end": 144
          },
          "definite": false,
          "start": 114,
          "end": 144
        }
      ],
      "declare": false,
      "start": 110,
      "end": 145
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
            "name": "combineEle2",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 171
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combineResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 187
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 188,
              "end": 189
            },
            "optional": false,
            "computed": true,
            "start": 174,
            "end": 190
          },
          "definite": false,
          "start": 160,
          "end": 190
        }
      ],
      "declare": false,
      "start": 156,
      "end": 191
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "zip",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 215
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 216,
              "end": 217
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 216,
            "end": 217
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 219,
            "end": 220
          }
        ],
        "start": 215,
        "end": 221
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array1",
          "optional": false,
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
                  "start": 230,
                  "end": 231
                },
                "typeArguments": null,
                "start": 230,
                "end": 231
              },
              "start": 230,
              "end": 233
            },
            "start": 228,
            "end": 233
          },
          "start": 222,
          "end": 233
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 244
                },
                "typeArguments": null,
                "start": 243,
                "end": 244
              },
              "start": 243,
              "end": 246
            },
            "start": 241,
            "end": 246
          },
          "start": 235,
          "end": 246
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
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
                    "start": 251,
                    "end": 252
                  },
                  "typeArguments": null,
                  "start": 251,
                  "end": 252
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 255
                  },
                  "typeArguments": null,
                  "start": 254,
                  "end": 255
                }
              ],
              "start": 250,
              "end": 256
            }
          ],
          "start": 249,
          "end": 257
        },
        "start": 247,
        "end": 257
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 274
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 281
                },
                "optional": false,
                "computed": false,
                "start": 268,
                "end": 281
              },
              "operator": "!=",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 291
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 298
                },
                "optional": false,
                "computed": false,
                "start": 285,
                "end": 298
              },
              "start": 268,
              "end": 298
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 319,
                            "end": 328
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 330,
                            "end": 339
                          }
                        ],
                        "start": 318,
                        "end": 340
                      }
                    ],
                    "start": 317,
                    "end": 341
                  },
                  "start": 310,
                  "end": 342
                }
              ],
              "start": 300,
              "end": 348
            },
            "alternate": null,
            "start": 264,
            "end": 348
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
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 363
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 372
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 379
                  },
                  "optional": false,
                  "computed": false,
                  "start": 366,
                  "end": 379
                },
                "definite": false,
                "start": 357,
                "end": 379
              }
            ],
            "declare": false,
            "start": 353,
            "end": 380
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
                  "name": "zipResult",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
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
                                "start": 402,
                                "end": 403
                              },
                              "typeArguments": null,
                              "start": 402,
                              "end": 403
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 405,
                                "end": 406
                              },
                              "typeArguments": null,
                              "start": 405,
                              "end": 406
                            }
                          ],
                          "start": 401,
                          "end": 407
                        }
                      ],
                      "start": 400,
                      "end": 408
                    },
                    "start": 398,
                    "end": 408
                  },
                  "start": 389,
                  "end": 408
                },
                "init": null,
                "definite": false,
                "start": 389,
                "end": 408
              }
            ],
            "declare": false,
            "start": 385,
            "end": 409
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 424
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 427,
                    "end": 428
                  },
                  "definite": false,
                  "start": 423,
                  "end": 428
                }
              ],
              "declare": false,
              "start": 419,
              "end": 428
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 431
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 440
              },
              "start": 430,
              "end": 440
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 445
              },
              "start": 442,
              "end": 445
            },
            "body": {
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
                        "name": "zipResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 457,
                        "end": 466
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 467,
                        "end": 471
                      },
                      "optional": false,
                      "computed": false,
                      "start": 457,
                      "end": 471
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "array1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 473,
                              "end": 479
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 480,
                              "end": 481
                            },
                            "optional": false,
                            "computed": true,
                            "start": 473,
                            "end": 482
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "array2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 484,
                              "end": 490
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 491,
                              "end": 492
                            },
                            "optional": false,
                            "computed": true,
                            "start": 484,
                            "end": 493
                          }
                        ],
                        "start": 472,
                        "end": 494
                      }
                    ],
                    "optional": false,
                    "start": 457,
                    "end": 495
                  },
                  "directive": null,
                  "start": 457,
                  "end": 496
                }
              ],
              "start": 447,
              "end": 502
            },
            "start": 414,
            "end": 502
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "zipResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 523
            },
            "start": 507,
            "end": 524
          }
        ],
        "start": 258,
        "end": 526
      },
      "expression": false,
      "start": 203,
      "end": 526
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
            "name": "zipResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 541
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 547
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 549,
                    "end": 554
                  },
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 556,
                    "end": 561
                  }
                ],
                "start": 548,
                "end": 562
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 565,
                    "end": 566
                  },
                  {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 568,
                    "end": 569
                  }
                ],
                "start": 564,
                "end": 570
              }
            ],
            "optional": false,
            "start": 544,
            "end": 571
          },
          "definite": false,
          "start": 532,
          "end": 571
        }
      ],
      "declare": false,
      "start": 528,
      "end": 572
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
            "name": "zipResultEle",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 589
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "zipResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 601
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 602,
              "end": 603
            },
            "optional": false,
            "computed": true,
            "start": 592,
            "end": 604
          },
          "definite": false,
          "start": 577,
          "end": 604
        }
      ],
      "declare": false,
      "start": 573,
      "end": 605
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
            "name": "zipResultEleEle",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 645
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "zipResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 657
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 658,
                "end": 659
              },
              "optional": false,
              "computed": true,
              "start": 648,
              "end": 660
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 661,
              "end": 662
            },
            "optional": false,
            "computed": true,
            "start": 648,
            "end": 663
          },
          "definite": false,
          "start": 630,
          "end": 663
        }
      ],
      "declare": false,
      "start": 626,
      "end": 664
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 717
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 720
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 718,
            "end": 720
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 724
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 722,
            "end": 724
          }
        ],
        "start": 717,
        "end": 725
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 735,
                      "end": 737
                    },
                    "typeArguments": null,
                    "start": 735,
                    "end": 737
                  },
                  "start": 735,
                  "end": 739
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 741,
                      "end": 743
                    },
                    "typeArguments": null,
                    "start": 741,
                    "end": 743
                  },
                  "start": 741,
                  "end": 745
                }
              ],
              "start": 734,
              "end": 746
            },
            "start": 732,
            "end": 746
          },
          "start": 726,
          "end": 746
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 751
          },
          "typeArguments": null,
          "start": 749,
          "end": 751
        },
        "start": 747,
        "end": 751
      },
      "body": null,
      "expression": false,
      "start": 698,
      "end": 752
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 770,
        "end": 772
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 773,
              "end": 775
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 773,
            "end": 775
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 779
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 777,
            "end": 779
          }
        ],
        "start": 772,
        "end": 780
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 799,
                        "end": 801
                      },
                      "typeArguments": null,
                      "start": 799,
                      "end": 801
                    },
                    "start": 799,
                    "end": 803
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 805,
                        "end": 807
                      },
                      "typeArguments": null,
                      "start": 805,
                      "end": 807
                    },
                    "start": 805,
                    "end": 809
                  }
                ],
                "start": 798,
                "end": 810
              },
              "start": 789,
              "end": 810
            },
            "start": 787,
            "end": 810
          },
          "start": 781,
          "end": 810
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 813,
            "end": 815
          },
          "typeArguments": null,
          "start": 813,
          "end": 815
        },
        "start": 811,
        "end": 815
      },
      "body": null,
      "expression": false,
      "start": 753,
      "end": 816
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
            "name": "expected",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 832,
                  "end": 835
                },
                "start": 832,
                "end": 835
              },
              "start": 830,
              "end": 835
            },
            "start": 822,
            "end": 835
          },
          "init": null,
          "definite": false,
          "start": 822,
          "end": 835
        }
      ],
      "declare": false,
      "start": 818,
      "end": 836
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "expected",
          "optional": false,
          "typeAnnotation": null,
          "start": 837,
          "end": 845
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 848,
            "end": 850
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 860
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 865,
                        "end": 868
                      },
                      "start": 865,
                      "end": 868
                    },
                    "start": 865,
                    "end": 870
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 872,
                        "end": 875
                      },
                      "start": 872,
                      "end": 875
                    },
                    "start": 872,
                    "end": 877
                  }
                ],
                "start": 864,
                "end": 878
              },
              "start": 851,
              "end": 878
            }
          ],
          "optional": false,
          "start": 848,
          "end": 879
        },
        "start": 837,
        "end": 879
      },
      "directive": null,
      "start": 837,
      "end": 880
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "expected",
          "optional": false,
          "typeAnnotation": null,
          "start": 881,
          "end": 889
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 894
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 895,
                "end": 904
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 909,
                        "end": 912
                      },
                      "start": 909,
                      "end": 912
                    },
                    "start": 909,
                    "end": 914
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 916,
                        "end": 919
                      },
                      "start": 916,
                      "end": 919
                    },
                    "start": 916,
                    "end": 921
                  }
                ],
                "start": 908,
                "end": 922
              },
              "start": 895,
              "end": 922
            }
          ],
          "optional": false,
          "start": 892,
          "end": 923
        },
        "start": 881,
        "end": 923
      },
      "directive": null,
      "start": 881,
      "end": 924
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 924
}
```
