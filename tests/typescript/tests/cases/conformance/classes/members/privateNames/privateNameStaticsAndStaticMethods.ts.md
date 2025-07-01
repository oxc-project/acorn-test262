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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 21,
              "end": 25
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    },
                    "start": 27,
                    "end": 35
                  },
                  "start": 26,
                  "end": 35
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 37,
                "end": 39
              },
              "expression": false,
              "start": 25,
              "end": 39
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 39
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 57,
              "end": 61
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 65,
                      "end": 71
                    },
                    "start": 63,
                    "end": 71
                  },
                  "start": 62,
                  "end": 71
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 73,
                "end": 75
              },
              "expression": false,
              "start": 61,
              "end": 75
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 44,
            "end": 75
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "baz",
              "start": 94,
              "end": 98
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
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
                  "start": 99,
                  "end": 108
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 127,
                      "end": 128
                    },
                    "start": 120,
                    "end": 129
                  }
                ],
                "start": 110,
                "end": 135
              },
              "expression": false,
              "start": 98,
              "end": 135
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 135
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "_quux",
              "start": 147,
              "end": 153
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 155,
                "end": 161
              },
              "start": 153,
              "end": 161
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 140,
            "end": 162
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "quux",
              "start": 178,
              "end": 183
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 188,
                  "end": 194
                },
                "start": 186,
                "end": 194
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 212,
                        "end": 216
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "_quux",
                        "start": 217,
                        "end": 223
                      },
                      "optional": false,
                      "computed": false,
                      "start": 212,
                      "end": 223
                    },
                    "start": 205,
                    "end": 224
                  }
                ],
                "start": 195,
                "end": 230
              },
              "expression": false,
              "start": 184,
              "end": 230
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 167,
            "end": 230
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "quux",
              "start": 246,
              "end": 251
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 258,
                      "end": 264
                    },
                    "start": 256,
                    "end": 264
                  },
                  "start": 253,
                  "end": 264
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 276,
                          "end": 280
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "_quux",
                          "start": 281,
                          "end": 287
                        },
                        "optional": false,
                        "computed": false,
                        "start": 276,
                        "end": 287
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 293
                      },
                      "start": 276,
                      "end": 293
                    },
                    "directive": null,
                    "start": 276,
                    "end": 294
                  }
                ],
                "start": 266,
                "end": 300
              },
              "expression": false,
              "start": 252,
              "end": 300
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 235,
            "end": 300
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
              "start": 305,
              "end": 316
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 330,
                          "end": 331
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 332,
                          "end": 336
                        },
                        "optional": false,
                        "computed": false,
                        "start": 330,
                        "end": 336
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 337,
                          "end": 339
                        }
                      ],
                      "optional": false,
                      "start": 330,
                      "end": 340
                    },
                    "directive": null,
                    "start": 330,
                    "end": 341
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 351
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "bar",
                          "start": 352,
                          "end": 356
                        },
                        "optional": false,
                        "computed": false,
                        "start": 350,
                        "end": 356
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 357,
                          "end": 359
                        }
                      ],
                      "optional": false,
                      "start": 350,
                      "end": 360
                    },
                    "directive": null,
                    "start": 350,
                    "end": 361
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 370,
                          "end": 371
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "bar",
                          "start": 372,
                          "end": 376
                        },
                        "optional": false,
                        "computed": false,
                        "start": 370,
                        "end": 376
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 377,
                          "end": 379
                        }
                      ],
                      "optional": false,
                      "start": 370,
                      "end": 380
                    },
                    "directive": null,
                    "start": 370,
                    "end": 381
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 391
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "quux",
                          "start": 392,
                          "end": 397
                        },
                        "optional": false,
                        "computed": false,
                        "start": 390,
                        "end": 397
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 400,
                            "end": 401
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "quux",
                            "start": 402,
                            "end": 407
                          },
                          "optional": false,
                          "computed": false,
                          "start": 400,
                          "end": 407
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 410,
                          "end": 411
                        },
                        "start": 400,
                        "end": 411
                      },
                      "start": 390,
                      "end": 411
                    },
                    "directive": null,
                    "start": 390,
                    "end": 412
                  },
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 421,
                          "end": 422
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "quux",
                          "start": 423,
                          "end": 428
                        },
                        "optional": false,
                        "computed": false,
                        "start": 421,
                        "end": 428
                      },
                      "start": 421,
                      "end": 430
                    },
                    "directive": null,
                    "start": 421,
                    "end": 431
                  }
                ],
                "start": 320,
                "end": 434
              },
              "expression": false,
              "start": 317,
              "end": 434
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 305,
            "end": 434
          }
        ],
        "start": 8,
        "end": 436
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 436
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 444,
        "end": 445
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 455
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 469,
              "end": 473
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 477,
                      "end": 483
                    },
                    "start": 475,
                    "end": 483
                  },
                  "start": 474,
                  "end": 483
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 485,
                "end": 487
              },
              "expression": false,
              "start": 473,
              "end": 487
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 462,
            "end": 487
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
              "start": 492,
              "end": 503
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
                        "type": "Super",
                        "start": 517,
                        "end": 522
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 517,
                      "end": 524
                    },
                    "directive": null,
                    "start": 517,
                    "end": 525
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
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 535
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 536,
                          "end": 540
                        },
                        "optional": false,
                        "computed": false,
                        "start": 534,
                        "end": 540
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "str",
                          "raw": "\"str\"",
                          "start": 541,
                          "end": 546
                        }
                      ],
                      "optional": false,
                      "start": 534,
                      "end": 547
                    },
                    "directive": null,
                    "start": 534,
                    "end": 548
                  }
                ],
                "start": 507,
                "end": 554
              },
              "expression": false,
              "start": 504,
              "end": 554
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 492,
            "end": 554
          }
        ],
        "start": 456,
        "end": 556
      },
      "abstract": false,
      "declare": false,
      "start": 438,
      "end": 556
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 556
}
```
