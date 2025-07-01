__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 11
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 37
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 40
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
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
                    "start": 57,
                    "end": 58
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 61,
                    "end": 62
                  },
                  "definite": false,
                  "start": 57,
                  "end": 62
                }
              ],
              "declare": false,
              "start": 53,
              "end": 62
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 65
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 69
              },
              "start": 64,
              "end": 69
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 72
              },
              "start": 71,
              "end": 74
            },
            "body": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "YieldExpression",
                "delegate": false,
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 89
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 92,
                    "end": 93
                  },
                  "start": 88,
                  "end": 93
                },
                "start": 82,
                "end": 93
              },
              "directive": null,
              "start": 82,
              "end": 94
            },
            "start": 48,
            "end": 94
          }
        ],
        "start": 42,
        "end": 98
      },
      "expression": false,
      "start": 12,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genPromises",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 122
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
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
                    "start": 142,
                    "end": 143
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 146,
                    "end": 147
                  },
                  "definite": false,
                  "start": 142,
                  "end": 147
                }
              ],
              "declare": false,
              "start": 138,
              "end": 147
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 154
              },
              "start": 149,
              "end": 154
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "start": 156,
              "end": 159
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 184
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 192
                        },
                        "optional": false,
                        "computed": false,
                        "start": 177,
                        "end": 192
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 193,
                            "end": 194
                          },
                          "operator": "*",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 197,
                            "end": 198
                          },
                          "start": 193,
                          "end": 198
                        }
                      ],
                      "optional": false,
                      "start": 177,
                      "end": 199
                    },
                    "start": 171,
                    "end": 199
                  },
                  "directive": null,
                  "start": 171,
                  "end": 200
                }
              ],
              "start": 161,
              "end": 206
            },
            "start": 133,
            "end": 206
          }
        ],
        "start": 127,
        "end": 208
      },
      "expression": false,
      "start": 100,
      "end": 208
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
            "name": "arrLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 223
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 232,
                  "end": 233
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 235,
                      "end": 242
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 250
                    },
                    "optional": false,
                    "computed": false,
                    "start": 235,
                    "end": 250
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 251,
                      "end": 252
                    }
                  ],
                  "optional": false,
                  "start": 235,
                  "end": 253
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 232,
                "end": 253
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 259,
                  "end": 260
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 269
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 277
                    },
                    "optional": false,
                    "computed": false,
                    "start": 262,
                    "end": 277
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 278,
                      "end": 279
                    }
                  ],
                  "optional": false,
                  "start": 262,
                  "end": 280
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 259,
                "end": 280
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 286,
                  "end": 287
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 296
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 304
                    },
                    "optional": false,
                    "computed": false,
                    "start": 289,
                    "end": 304
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 305,
                      "end": 306
                    }
                  ],
                  "optional": false,
                  "start": 289,
                  "end": 307
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 286,
                "end": 307
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 313,
                  "end": 314
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 323
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 324,
                      "end": 331
                    },
                    "optional": false,
                    "computed": false,
                    "start": 316,
                    "end": 331
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 332,
                      "end": 333
                    }
                  ],
                  "optional": false,
                  "start": 316,
                  "end": 334
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 313,
                "end": 334
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 346
                },
                "value": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 348,
                  "end": 349
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 340,
                "end": 349
              }
            ],
            "start": 226,
            "end": 352
          },
          "definite": false,
          "start": 216,
          "end": 352
        }
      ],
      "declare": false,
      "start": 210,
      "end": 352
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
                  "type": "TSNumberKeyword",
                  "start": 366,
                  "end": 372
                },
                "start": 366,
                "end": 374
              },
              "start": 364,
              "end": 374
            },
            "start": 360,
            "end": 374
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 377,
            "end": 379
          },
          "definite": false,
          "start": 360,
          "end": 379
        }
      ],
      "declare": false,
      "start": 354,
      "end": 380
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "init": null,
            "definite": false,
            "start": 398,
            "end": 399
          }
        ],
        "declare": false,
        "start": 392,
        "end": 399
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "asyncGen",
          "optional": false,
          "typeAnnotation": null,
          "start": 403,
          "end": 411
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 412,
            "end": 413
          }
        ],
        "optional": false,
        "start": 403,
        "end": 414
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 423
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 428
                },
                "optional": false,
                "computed": false,
                "start": 420,
                "end": 428
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 430
                }
              ],
              "optional": false,
              "start": 420,
              "end": 431
            },
            "directive": null,
            "start": 420,
            "end": 432
          }
        ],
        "start": 416,
        "end": 434
      },
      "start": 381,
      "end": 434
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
            "name": "sameArr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 450
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 464
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 474
                },
                "optional": false,
                "computed": false,
                "start": 459,
                "end": 474
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arrLike",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 482
                }
              ],
              "optional": false,
              "start": 459,
              "end": 483
            },
            "start": 453,
            "end": 483
          },
          "definite": false,
          "start": 442,
          "end": 483
        }
      ],
      "declare": false,
      "start": 436,
      "end": 484
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
            "name": "sameArr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 499
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 513
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 523
                },
                "optional": false,
                "computed": false,
                "start": 508,
                "end": 523
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 525,
                          "end": 532
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 533,
                          "end": 540
                        },
                        "optional": false,
                        "computed": false,
                        "start": 525,
                        "end": 540
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 541,
                          "end": 542
                        }
                      ],
                      "optional": false,
                      "start": 525,
                      "end": 543
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 545,
                          "end": 552
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 560
                        },
                        "optional": false,
                        "computed": false,
                        "start": 545,
                        "end": 560
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 561,
                          "end": 562
                        }
                      ],
                      "optional": false,
                      "start": 545,
                      "end": 563
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 565,
                          "end": 572
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 573,
                          "end": 580
                        },
                        "optional": false,
                        "computed": false,
                        "start": 565,
                        "end": 580
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 581,
                          "end": 582
                        }
                      ],
                      "optional": false,
                      "start": 565,
                      "end": 583
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 585,
                          "end": 592
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 593,
                          "end": 600
                        },
                        "optional": false,
                        "computed": false,
                        "start": 585,
                        "end": 600
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 601,
                          "end": 602
                        }
                      ],
                      "optional": false,
                      "start": 585,
                      "end": 603
                    }
                  ],
                  "start": 524,
                  "end": 604
                }
              ],
              "optional": false,
              "start": 508,
              "end": 605
            },
            "start": 502,
            "end": 605
          },
          "definite": false,
          "start": 491,
          "end": 605
        }
      ],
      "declare": false,
      "start": 485,
      "end": 606
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
            "name": "sameArr3",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 621
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 635
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 645
                },
                "optional": false,
                "computed": false,
                "start": 630,
                "end": 645
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "genPromises",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 657
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 658,
                      "end": 659
                    }
                  ],
                  "optional": false,
                  "start": 646,
                  "end": 660
                }
              ],
              "optional": false,
              "start": 630,
              "end": 661
            },
            "start": 624,
            "end": 661
          },
          "definite": false,
          "start": 613,
          "end": 661
        }
      ],
      "declare": false,
      "start": 607,
      "end": 662
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
            "name": "sameArr4",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 677
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 691
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 701
                },
                "optional": false,
                "computed": false,
                "start": 686,
                "end": 701
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 710
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 711,
                      "end": 712
                    }
                  ],
                  "optional": false,
                  "start": 702,
                  "end": 713
                }
              ],
              "optional": false,
              "start": 686,
              "end": 714
            },
            "start": 680,
            "end": 714
          },
          "definite": false,
          "start": 669,
          "end": 714
        }
      ],
      "declare": false,
      "start": 663,
      "end": 715
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null,
        "start": 726,
        "end": 730
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 732,
          "end": 733
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 735,
        "end": 737
      },
      "expression": false,
      "start": 717,
      "end": 737
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Data",
            "optional": false,
            "typeAnnotation": null,
            "start": 738,
            "end": 742
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromAsync",
            "optional": false,
            "typeAnnotation": null,
            "start": 743,
            "end": 752
          },
          "optional": false,
          "computed": false,
          "start": 738,
          "end": 752
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 755,
            "end": 760
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromAsync",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 770
          },
          "optional": false,
          "computed": false,
          "start": 755,
          "end": 770
        },
        "start": 738,
        "end": 770
      },
      "directive": null,
      "start": 738,
      "end": 771
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
            "name": "sameArr5",
            "optional": false,
            "typeAnnotation": null,
            "start": 778,
            "end": 786
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 795,
                  "end": 799
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 800,
                  "end": 809
                },
                "optional": false,
                "computed": false,
                "start": 795,
                "end": 809
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 810,
                    "end": 818
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 819,
                      "end": 820
                    }
                  ],
                  "optional": false,
                  "start": 810,
                  "end": 821
                }
              ],
              "optional": false,
              "start": 795,
              "end": 822
            },
            "start": 789,
            "end": 822
          },
          "definite": false,
          "start": 778,
          "end": 822
        }
      ],
      "declare": false,
      "start": 772,
      "end": 823
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
            "name": "mapArr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 831,
            "end": 838
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 847,
                  "end": 852
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 853,
                  "end": 862
                },
                "optional": false,
                "computed": false,
                "start": 847,
                "end": 862
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 871
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 872,
                      "end": 873
                    }
                  ],
                  "optional": false,
                  "start": 863,
                  "end": 874
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 877
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 881,
                      "end": 882
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 886,
                      "end": 887
                    },
                    "start": 881,
                    "end": 887
                  },
                  "id": null,
                  "generator": false,
                  "start": 876,
                  "end": 887
                }
              ],
              "optional": false,
              "start": 847,
              "end": 888
            },
            "start": 841,
            "end": 888
          },
          "definite": false,
          "start": 831,
          "end": 888
        }
      ],
      "declare": false,
      "start": 825,
      "end": 889
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
            "name": "mapArr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 896,
            "end": 903
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 912,
                  "end": 917
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 918,
                  "end": 927
                },
                "optional": false,
                "computed": false,
                "start": 912,
                "end": 927
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 929,
                      "end": 930
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 931,
                      "end": 932
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 933,
                      "end": 934
                    },
                    {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 935,
                      "end": 936
                    }
                  ],
                  "start": 928,
                  "end": 937
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 940
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
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 944,
                        "end": 951
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 952,
                        "end": 959
                      },
                      "optional": false,
                      "computed": false,
                      "start": 944,
                      "end": 959
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 960,
                          "end": 961
                        },
                        "operator": "**",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 965,
                          "end": 966
                        },
                        "start": 960,
                        "end": 966
                      }
                    ],
                    "optional": false,
                    "start": 944,
                    "end": 967
                  },
                  "id": null,
                  "generator": false,
                  "start": 939,
                  "end": 967
                }
              ],
              "optional": false,
              "start": 912,
              "end": 968
            },
            "start": 906,
            "end": 968
          },
          "definite": false,
          "start": 896,
          "end": 968
        }
      ],
      "declare": false,
      "start": 890,
      "end": 969
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
            "name": "mapArr3",
            "optional": false,
            "typeAnnotation": null,
            "start": 976,
            "end": 983
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 992,
                  "end": 997
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 998,
                  "end": 1007
                },
                "optional": false,
                "computed": false,
                "start": 992,
                "end": 1007
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1009,
                      "end": 1010
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1011,
                      "end": 1012
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1013,
                      "end": 1014
                    },
                    {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 1015,
                      "end": 1016
                    }
                  ],
                  "start": 1008,
                  "end": 1017
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1019,
                      "end": 1020
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1024,
                      "end": 1025
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1029,
                      "end": 1030
                    },
                    "start": 1024,
                    "end": 1030
                  },
                  "id": null,
                  "generator": false,
                  "start": 1019,
                  "end": 1030
                }
              ],
              "optional": false,
              "start": 992,
              "end": 1031
            },
            "start": 986,
            "end": 1031
          },
          "definite": false,
          "start": 976,
          "end": 1031
        }
      ],
      "declare": false,
      "start": 970,
      "end": 1032
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
            "name": "err",
            "optional": false,
            "typeAnnotation": null,
            "start": 1040,
            "end": 1043
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1055
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1046,
            "end": 1055
          },
          "definite": false,
          "start": 1040,
          "end": 1055
        }
      ],
      "declare": false,
      "start": 1034,
      "end": 1056
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
            "name": "badIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 1063,
            "end": 1074
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1080,
                    "end": 1086
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1087,
                    "end": 1095
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1080,
                  "end": 1095
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
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1108,
                          "end": 1111
                        },
                        "start": 1102,
                        "end": 1112
                      }
                    ],
                    "start": 1100,
                    "end": 1114
                  },
                  "expression": false,
                  "start": 1097,
                  "end": 1114
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1079,
                "end": 1114
              }
            ],
            "start": 1077,
            "end": 1116
          },
          "definite": false,
          "start": 1063,
          "end": 1116
        }
      ],
      "declare": false,
      "start": 1057,
      "end": 1117
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
            "name": "badArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1179,
            "end": 1187
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1201
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1202,
                  "end": 1211
                },
                "optional": false,
                "computed": false,
                "start": 1196,
                "end": 1211
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "badIterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1223
                }
              ],
              "optional": false,
              "start": 1196,
              "end": 1224
            },
            "start": 1190,
            "end": 1224
          },
          "definite": false,
          "start": 1179,
          "end": 1224
        }
      ],
      "declare": false,
      "start": 1173,
      "end": 1225
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
            "name": "withIndexResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 1233,
            "end": 1248
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1257,
                  "end": 1262
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1263,
                  "end": 1272
                },
                "optional": false,
                "computed": false,
                "start": 1257,
                "end": 1272
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 1274,
                      "end": 1277
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 1279,
                      "end": 1282
                    }
                  ],
                  "start": 1273,
                  "end": 1283
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1286,
                      "end": 1289
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1291,
                      "end": 1296
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1304,
                          "end": 1309
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1304,
                          "end": 1309
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1304,
                        "end": 1309
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1311,
                          "end": 1314
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1311,
                          "end": 1314
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1311,
                        "end": 1314
                      }
                    ],
                    "start": 1302,
                    "end": 1316
                  },
                  "id": null,
                  "generator": false,
                  "start": 1285,
                  "end": 1317
                }
              ],
              "optional": false,
              "start": 1257,
              "end": 1318
            },
            "start": 1251,
            "end": 1318
          },
          "definite": false,
          "start": 1233,
          "end": 1318
        }
      ],
      "declare": false,
      "start": 1227,
      "end": 1319
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1319
}
```
