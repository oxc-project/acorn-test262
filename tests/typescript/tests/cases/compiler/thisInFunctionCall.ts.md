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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 21,
                  "end": 27
                },
                "start": 21,
                "end": 29
              },
              "start": 19,
              "end": 29
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 15,
            "end": 29
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
              "start": 33,
              "end": 44
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 53,
                          "end": 57
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 58,
                          "end": 62
                        },
                        "optional": false,
                        "computed": false,
                        "start": 53,
                        "end": 62
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 66,
                            "end": 67
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 69,
                            "end": 70
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 72,
                            "end": 73
                          }
                        ],
                        "start": 65,
                        "end": 74
                      },
                      "start": 53,
                      "end": 74
                    },
                    "directive": null,
                    "start": 53,
                    "end": 74
                  }
                ],
                "start": 47,
                "end": 78
              },
              "expression": false,
              "start": 44,
              "end": 78
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 33,
            "end": 78
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "finderRaw",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 91
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 100,
                            "end": 104
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 105,
                            "end": 109
                          },
                          "optional": false,
                          "computed": false,
                          "start": 100,
                          "end": 109
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "find",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 110,
                          "end": 114
                        },
                        "optional": false,
                        "computed": false,
                        "start": 100,
                        "end": 114
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 125,
                              "end": 126
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 143,
                                    "end": 144
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 149,
                                        "end": 153
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "data",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 154,
                                        "end": 158
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 149,
                                      "end": 158
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 159,
                                      "end": 165
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 149,
                                    "end": 165
                                  },
                                  "start": 143,
                                  "end": 165
                                },
                                "start": 136,
                                "end": 165
                              }
                            ],
                            "start": 128,
                            "end": 171
                          },
                          "expression": false,
                          "start": 115,
                          "end": 171
                        }
                      ],
                      "optional": false,
                      "start": 100,
                      "end": 172
                    },
                    "directive": null,
                    "start": 100,
                    "end": 172
                  }
                ],
                "start": 94,
                "end": 176
              },
              "expression": false,
              "start": 91,
              "end": 176
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 82,
            "end": 176
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEacherRaw",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 192
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 201,
                            "end": 205
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 206,
                            "end": 210
                          },
                          "optional": false,
                          "computed": false,
                          "start": 201,
                          "end": 210
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 218
                        },
                        "optional": false,
                        "computed": false,
                        "start": 201,
                        "end": 218
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 229,
                              "end": 230
                            }
                          ],
                          "returnType": null,
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
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 240,
                                      "end": 247
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 248,
                                      "end": 251
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 240,
                                    "end": 251
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "d",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 252,
                                        "end": 253
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 258,
                                            "end": 262
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "data",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 263,
                                            "end": 267
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 258,
                                          "end": 267
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 268,
                                          "end": 274
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 258,
                                        "end": 274
                                      },
                                      "start": 252,
                                      "end": 274
                                    }
                                  ],
                                  "optional": false,
                                  "start": 240,
                                  "end": 275
                                },
                                "directive": null,
                                "start": 240,
                                "end": 275
                              }
                            ],
                            "start": 232,
                            "end": 281
                          },
                          "expression": false,
                          "start": 219,
                          "end": 281
                        }
                      ],
                      "optional": false,
                      "start": 201,
                      "end": 282
                    },
                    "directive": null,
                    "start": 201,
                    "end": 282
                  }
                ],
                "start": 195,
                "end": 286
              },
              "expression": false,
              "start": 192,
              "end": 286
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 180,
            "end": 286
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEacher",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 299
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 308,
                            "end": 312
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 313,
                            "end": 317
                          },
                          "optional": false,
                          "computed": false,
                          "start": 308,
                          "end": 317
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 318,
                          "end": 325
                        },
                        "optional": false,
                        "computed": false,
                        "start": 308,
                        "end": 325
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 365,
                              "end": 366
                            }
                          ],
                          "returnType": null,
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
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 376,
                                      "end": 383
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 384,
                                      "end": 387
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 376,
                                    "end": 387
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "d",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 388,
                                        "end": 389
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 394,
                                            "end": 398
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "data",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 399,
                                            "end": 403
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 394,
                                          "end": 403
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 404,
                                          "end": 410
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 394,
                                        "end": 410
                                      },
                                      "start": 388,
                                      "end": 410
                                    }
                                  ],
                                  "optional": false,
                                  "start": 376,
                                  "end": 411
                                },
                                "directive": null,
                                "start": 376,
                                "end": 411
                              }
                            ],
                            "start": 368,
                            "end": 417
                          },
                          "expression": false,
                          "start": 355,
                          "end": 417
                        },
                        {
                          "type": "ThisExpression",
                          "start": 419,
                          "end": 423
                        }
                      ],
                      "optional": false,
                      "start": 308,
                      "end": 424
                    },
                    "directive": null,
                    "start": 308,
                    "end": 424
                  }
                ],
                "start": 302,
                "end": 428
              },
              "expression": false,
              "start": 299,
              "end": 428
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 290,
            "end": 428
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "finder",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 438
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 447,
                            "end": 451
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 452,
                            "end": 456
                          },
                          "optional": false,
                          "computed": false,
                          "start": 447,
                          "end": 456
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "find",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 457,
                          "end": 461
                        },
                        "optional": false,
                        "computed": false,
                        "start": 447,
                        "end": 461
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 501,
                              "end": 502
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 519,
                                    "end": 520
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 525,
                                        "end": 529
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "data",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 530,
                                        "end": 534
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 525,
                                      "end": 534
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 535,
                                      "end": 541
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 525,
                                    "end": 541
                                  },
                                  "start": 519,
                                  "end": 541
                                },
                                "start": 512,
                                "end": 541
                              }
                            ],
                            "start": 504,
                            "end": 547
                          },
                          "expression": false,
                          "start": 491,
                          "end": 547
                        },
                        {
                          "type": "ThisExpression",
                          "start": 549,
                          "end": 553
                        }
                      ],
                      "optional": false,
                      "start": 447,
                      "end": 554
                    },
                    "directive": null,
                    "start": 447,
                    "end": 554
                  }
                ],
                "start": 441,
                "end": 558
              },
              "expression": false,
              "start": 438,
              "end": 558
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 432,
            "end": 558
          }
        ],
        "start": 11,
        "end": 560
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 560
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 560
}
```
