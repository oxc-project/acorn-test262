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
        "start": 20,
        "end": 21
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 28,
            "end": 46
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
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
                        "start": 76,
                        "end": 80
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 82
                      },
                      "optional": false,
                      "computed": false,
                      "start": 76,
                      "end": 82
                    },
                    "start": 69,
                    "end": 83
                  }
                ],
                "start": 67,
                "end": 85
              },
              "expression": false,
              "start": 64,
              "end": 85
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 51,
            "end": 85
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 105
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
                          "start": 109,
                          "end": 113
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 114,
                          "end": 115
                        },
                        "optional": false,
                        "computed": false,
                        "start": 109,
                        "end": 115
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 118,
                          "end": 122
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 124
                        },
                        "optional": false,
                        "computed": false,
                        "start": 118,
                        "end": 124
                      },
                      "start": 109,
                      "end": 124
                    },
                    "directive": null,
                    "start": 109,
                    "end": 125
                  }
                ],
                "start": 107,
                "end": 127
              },
              "expression": false,
              "start": 103,
              "end": 127
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 90,
            "end": 127
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 143
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
                        "start": 155,
                        "end": 159
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 163
                      },
                      "optional": false,
                      "computed": false,
                      "start": 155,
                      "end": 163
                    },
                    "start": 148,
                    "end": 164
                  }
                ],
                "start": 146,
                "end": 166
              },
              "expression": false,
              "start": 143,
              "end": 166
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 132,
            "end": 166
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              },
              "start": 188,
              "end": 196
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 172,
            "end": 197
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
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
                        "start": 234,
                        "end": 238
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 239,
                        "end": 240
                      },
                      "optional": false,
                      "computed": false,
                      "start": 234,
                      "end": 240
                    },
                    "start": 227,
                    "end": 241
                  }
                ],
                "start": 225,
                "end": 243
              },
              "expression": false,
              "start": 222,
              "end": 243
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 202,
            "end": 243
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 270
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
                          "start": 274,
                          "end": 278
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 280
                        },
                        "optional": false,
                        "computed": false,
                        "start": 274,
                        "end": 280
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 289
                        },
                        "optional": false,
                        "computed": false,
                        "start": 283,
                        "end": 289
                      },
                      "start": 274,
                      "end": 289
                    },
                    "directive": null,
                    "start": 274,
                    "end": 290
                  }
                ],
                "start": 272,
                "end": 292
              },
              "expression": false,
              "start": 268,
              "end": 292
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 248,
            "end": 292
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 315
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
                        "start": 327,
                        "end": 331
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 332,
                        "end": 335
                      },
                      "optional": false,
                      "computed": false,
                      "start": 327,
                      "end": 335
                    },
                    "start": 320,
                    "end": 336
                  }
                ],
                "start": 318,
                "end": 338
              },
              "expression": false,
              "start": 315,
              "end": 338
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 297,
            "end": 338
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 361
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
                          "type": "ThisExpression",
                          "start": 366,
                          "end": 370
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 371,
                          "end": 374
                        },
                        "optional": false,
                        "computed": false,
                        "start": 366,
                        "end": 374
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 366,
                      "end": 376
                    },
                    "directive": null,
                    "start": 366,
                    "end": 377
                  }
                ],
                "start": 364,
                "end": 379
              },
              "expression": false,
              "start": 361,
              "end": 379
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 343,
            "end": 379
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 396
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 415,
                      "end": 417
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 440,
                            "end": 443
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
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 471,
                                              "end": 472
                                            },
                                            "typeArguments": null,
                                            "start": 471,
                                            "end": 472
                                          },
                                          "start": 469,
                                          "end": 472
                                        },
                                        "start": 468,
                                        "end": 472
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 468,
                                      "end": 472
                                    }
                                  ],
                                  "declare": false,
                                  "start": 464,
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
                                        "name": "x1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 494,
                                        "end": 496
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 499,
                                          "end": 500
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 501,
                                          "end": 504
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 499,
                                        "end": 504
                                      },
                                      "definite": false,
                                      "start": 494,
                                      "end": 504
                                    }
                                  ],
                                  "declare": false,
                                  "start": 490,
                                  "end": 505
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
                                        "name": "x2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 526,
                                        "end": 528
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 531,
                                          "end": 532
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 533,
                                          "end": 536
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 531,
                                        "end": 536
                                      },
                                      "definite": false,
                                      "start": 526,
                                      "end": 536
                                    }
                                  ],
                                  "declare": false,
                                  "start": 522,
                                  "end": 537
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
                                        "name": "x3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 558,
                                        "end": 560
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 563,
                                          "end": 564
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 565,
                                          "end": 566
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 563,
                                        "end": 566
                                      },
                                      "definite": false,
                                      "start": 558,
                                      "end": 566
                                    }
                                  ],
                                  "declare": false,
                                  "start": 554,
                                  "end": 567
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
                                        "name": "x4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 588,
                                        "end": 590
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 593,
                                          "end": 594
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 595,
                                          "end": 596
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 593,
                                        "end": 596
                                      },
                                      "definite": false,
                                      "start": 588,
                                      "end": 596
                                    }
                                  ],
                                  "declare": false,
                                  "start": 584,
                                  "end": 597
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
                                        "name": "sx1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 619,
                                        "end": 622
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 625,
                                          "end": 626
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 627,
                                          "end": 628
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 625,
                                        "end": 628
                                      },
                                      "definite": false,
                                      "start": 619,
                                      "end": 628
                                    }
                                  ],
                                  "declare": false,
                                  "start": 615,
                                  "end": 629
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
                                        "name": "sx2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 650,
                                        "end": 653
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 656,
                                          "end": 657
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 658,
                                          "end": 659
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 656,
                                        "end": 659
                                      },
                                      "definite": false,
                                      "start": 650,
                                      "end": 659
                                    }
                                  ],
                                  "declare": false,
                                  "start": 646,
                                  "end": 660
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
                                        "name": "sx3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 681,
                                        "end": 684
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 687,
                                          "end": 688
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 689,
                                          "end": 692
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 687,
                                        "end": 692
                                      },
                                      "definite": false,
                                      "start": 681,
                                      "end": 692
                                    }
                                  ],
                                  "declare": false,
                                  "start": 677,
                                  "end": 693
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
                                        "name": "sx4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 714,
                                        "end": 717
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 720,
                                          "end": 721
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 722,
                                          "end": 725
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 720,
                                        "end": 725
                                      },
                                      "definite": false,
                                      "start": 714,
                                      "end": 725
                                    }
                                  ],
                                  "declare": false,
                                  "start": 710,
                                  "end": 726
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
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 748,
                                        "end": 749
                                      },
                                      "init": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 756,
                                          "end": 757
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 752,
                                        "end": 759
                                      },
                                      "definite": false,
                                      "start": 748,
                                      "end": 759
                                    }
                                  ],
                                  "declare": false,
                                  "start": 744,
                                  "end": 760
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
                                        "name": "y1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 781,
                                        "end": 783
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 786,
                                          "end": 787
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 788,
                                          "end": 791
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 786,
                                        "end": 791
                                      },
                                      "definite": false,
                                      "start": 781,
                                      "end": 791
                                    }
                                  ],
                                  "declare": false,
                                  "start": 777,
                                  "end": 792
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
                                        "name": "y2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 813,
                                        "end": 815
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 818,
                                          "end": 819
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 820,
                                          "end": 823
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 818,
                                        "end": 823
                                      },
                                      "definite": false,
                                      "start": 813,
                                      "end": 823
                                    }
                                  ],
                                  "declare": false,
                                  "start": 809,
                                  "end": 824
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
                                        "name": "y3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 845,
                                        "end": 847
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 850,
                                          "end": 851
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 852,
                                          "end": 853
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 850,
                                        "end": 853
                                      },
                                      "definite": false,
                                      "start": 845,
                                      "end": 853
                                    }
                                  ],
                                  "declare": false,
                                  "start": 841,
                                  "end": 854
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
                                        "name": "y4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 875,
                                        "end": 877
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 880,
                                          "end": 881
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 882,
                                          "end": 883
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 880,
                                        "end": 883
                                      },
                                      "definite": false,
                                      "start": 875,
                                      "end": 883
                                    }
                                  ],
                                  "declare": false,
                                  "start": 871,
                                  "end": 884
                                }
                              ],
                              "start": 446,
                              "end": 898
                            },
                            "expression": false,
                            "start": 443,
                            "end": 898
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 432,
                          "end": 898
                        }
                      ],
                      "start": 418,
                      "end": 908
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 409,
                    "end": 908
                  }
                ],
                "start": 399,
                "end": 914
              },
              "expression": false,
              "start": 396,
              "end": 914
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 385,
            "end": 914
          }
        ],
        "start": 22,
        "end": 916
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 916
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 916
}
```
