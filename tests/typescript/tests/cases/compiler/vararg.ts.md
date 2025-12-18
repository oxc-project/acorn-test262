__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
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
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 51
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 54,
                              "end": 60
                            },
                            "start": 53,
                            "end": 60
                          },
                          "start": 52,
                          "end": 60
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 64,
                            "end": 68
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSNumberKeyword",
                                "start": 69,
                                "end": 75
                              },
                              "start": 69,
                              "end": 77
                            },
                            "start": 68,
                            "end": 77
                          },
                          "value": null,
                          "start": 61,
                          "end": 77
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sum",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 97,
                                  "end": 100
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 101,
                                  "end": 102
                                },
                                "definite": false,
                                "start": 97,
                                "end": 102
                              }
                            ],
                            "declare": false,
                            "start": 93,
                            "end": 103
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
                                    "start": 125,
                                    "end": 126
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 127,
                                    "end": 128
                                  },
                                  "definite": false,
                                  "start": 125,
                                  "end": 128
                                }
                              ],
                              "declare": false,
                              "start": 121,
                              "end": 128
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 129,
                                "end": 130
                              },
                              "operator": "<",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 131,
                                  "end": 135
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 136,
                                  "end": 142
                                },
                                "optional": false,
                                "computed": false,
                                "start": 131,
                                "end": 142
                              },
                              "start": 129,
                              "end": 142
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
                                "start": 143,
                                "end": 144
                              },
                              "start": 143,
                              "end": 146
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
                                      "name": "sum",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 166,
                                      "end": 169
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "rest",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 171,
                                        "end": 175
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 176,
                                        "end": 177
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 171,
                                      "end": 178
                                    },
                                    "start": 166,
                                    "end": 178
                                  },
                                  "directive": null,
                                  "start": 166,
                                  "end": 179
                                }
                              ],
                              "start": 148,
                              "end": 193
                            },
                            "start": 116,
                            "end": 193
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "+=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 206,
                                "end": 212
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 215,
                                    "end": 216
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "value": ": ",
                                    "raw": "\": \"",
                                    "start": 217,
                                    "end": 221
                                  },
                                  "start": 215,
                                  "end": 221
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sum",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 222,
                                  "end": 225
                                },
                                "start": 215,
                                "end": 225
                              },
                              "start": 206,
                              "end": 226
                            },
                            "directive": null,
                            "start": 206,
                            "end": 227
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 247,
                              "end": 253
                            },
                            "start": 240,
                            "end": 254
                          }
                        ],
                        "start": 79,
                        "end": 264
                      },
                      "expression": false,
                      "start": 51,
                      "end": 264
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 43,
                    "end": 264
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fnope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 286
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 289,
                              "end": 295
                            },
                            "start": 288,
                            "end": 295
                          },
                          "start": 287,
                          "end": 295
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 299,
                            "end": 303
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 304,
                              "end": 310
                            },
                            "start": 303,
                            "end": 310
                          },
                          "value": null,
                          "start": 296,
                          "end": 310
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 312,
                        "end": 328
                      },
                      "expression": false,
                      "start": 286,
                      "end": 328
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 274,
                    "end": 328
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 350
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
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 354,
                            "end": 358
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSStringKeyword",
                                "start": 359,
                                "end": 365
                              },
                              "start": 359,
                              "end": 367
                            },
                            "start": 358,
                            "end": 367
                          },
                          "value": null,
                          "start": 351,
                          "end": 367
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "builder",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 383,
                                "end": 390
                              },
                              "right": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 391,
                                "end": 393
                              },
                              "start": 383,
                              "end": 393
                            },
                            "directive": null,
                            "start": 383,
                            "end": 394
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
                                    "start": 416,
                                    "end": 417
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 418,
                                    "end": 419
                                  },
                                  "definite": false,
                                  "start": 416,
                                  "end": 419
                                }
                              ],
                              "declare": false,
                              "start": 412,
                              "end": 419
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 420,
                                "end": 421
                              },
                              "operator": "<",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 422,
                                  "end": 426
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 427,
                                  "end": 433
                                },
                                "optional": false,
                                "computed": false,
                                "start": 422,
                                "end": 433
                              },
                              "start": 420,
                              "end": 433
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
                                "start": 434,
                                "end": 435
                              },
                              "start": 434,
                              "end": 437
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
                                      "name": "builder",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 457,
                                      "end": 464
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "rest",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 466,
                                        "end": 470
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 471,
                                        "end": 472
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 466,
                                      "end": 473
                                    },
                                    "start": 457,
                                    "end": 473
                                  },
                                  "directive": null,
                                  "start": 457,
                                  "end": 474
                                }
                              ],
                              "start": 439,
                              "end": 488
                            },
                            "start": 407,
                            "end": 488
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "builder",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 508,
                              "end": 515
                            },
                            "start": 501,
                            "end": 516
                          }
                        ],
                        "start": 369,
                        "end": 526
                      },
                      "expression": false,
                      "start": 350,
                      "end": 526
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 338,
                    "end": 526
                  }
                ],
                "start": 33,
                "end": 532
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 532
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 532
          }
        ],
        "start": 12,
        "end": 534
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 534
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
            "start": 540,
            "end": 541
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 547
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 549
              },
              "optional": false,
              "computed": false,
              "start": 546,
              "end": 549
            },
            "typeArguments": null,
            "arguments": [],
            "start": 542,
            "end": 551
          },
          "definite": false,
          "start": 540,
          "end": 551
        }
      ],
      "declare": false,
      "start": 536,
      "end": 552
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 563
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 564,
            "end": 566
          },
          "definite": false,
          "start": 557,
          "end": 566
        }
      ],
      "declare": false,
      "start": 553,
      "end": 567
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null,
          "start": 568,
          "end": 574
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 577
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 579
            },
            "optional": false,
            "computed": false,
            "start": 576,
            "end": 579
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 581
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 582,
              "end": 583
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 584,
              "end": 585
            }
          ],
          "optional": false,
          "start": 576,
          "end": 586
        },
        "start": 568,
        "end": 586
      },
      "directive": null,
      "start": 568,
      "end": 587
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null,
          "start": 607,
          "end": 613
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 618
            },
            "optional": false,
            "computed": false,
            "start": 615,
            "end": 618
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 619,
              "end": 620
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 621,
              "end": 628
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 629,
              "end": 630
            }
          ],
          "optional": false,
          "start": 615,
          "end": 631
        },
        "start": 607,
        "end": 631
      },
      "directive": null,
      "start": 607,
      "end": 632
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null,
          "start": 653,
          "end": 659
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 661,
              "end": 662
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 664
            },
            "optional": false,
            "computed": false,
            "start": 661,
            "end": 664
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 665,
              "end": 672
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 673,
              "end": 674
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 675,
              "end": 676
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 677,
              "end": 678
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 679,
              "end": 680
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 681,
              "end": 682
            }
          ],
          "optional": false,
          "start": 661,
          "end": 683
        },
        "start": 653,
        "end": 683
      },
      "directive": null,
      "start": 653,
      "end": 684
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null,
          "start": 691,
          "end": 697
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 700
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 702
            },
            "optional": false,
            "computed": false,
            "start": 699,
            "end": 702
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 703,
              "end": 710
            }
          ],
          "optional": false,
          "start": 699,
          "end": 711
        },
        "start": 691,
        "end": 711
      },
      "directive": null,
      "start": 691,
      "end": 712
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null,
          "start": 736,
          "end": 742
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 745
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 751
            },
            "optional": false,
            "computed": false,
            "start": 744,
            "end": 751
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 752,
              "end": 753
            }
          ],
          "optional": false,
          "start": 744,
          "end": 754
        },
        "start": 736,
        "end": 754
      },
      "directive": null,
      "start": 736,
      "end": 755
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null,
          "start": 773,
          "end": 779
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 781,
              "end": 782
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 788
            },
            "optional": false,
            "computed": false,
            "start": 781,
            "end": 788
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 790
            }
          ],
          "optional": false,
          "start": 781,
          "end": 791
        },
        "start": 773,
        "end": 791
      },
      "directive": null,
      "start": 773,
      "end": 792
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null,
          "start": 806,
          "end": 812
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 815
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 821
            },
            "optional": false,
            "computed": false,
            "start": 814,
            "end": 821
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 822,
              "end": 825
            }
          ],
          "optional": false,
          "start": 814,
          "end": 826
        },
        "start": 806,
        "end": 826
      },
      "directive": null,
      "start": 806,
      "end": 827
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null,
          "start": 835,
          "end": 841
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 844
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 845,
              "end": 850
            },
            "optional": false,
            "computed": false,
            "start": 843,
            "end": 850
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 851,
              "end": 854
            },
            {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 855,
              "end": 858
            },
            {
              "type": "Literal",
              "value": "c",
              "raw": "\"c\"",
              "start": 859,
              "end": 862
            },
            {
              "type": "Literal",
              "value": "d",
              "raw": "\"d\"",
              "start": 863,
              "end": 866
            }
          ],
          "optional": false,
          "start": 843,
          "end": 867
        },
        "start": 835,
        "end": 867
      },
      "directive": null,
      "start": 835,
      "end": 868
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 876
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24,
    "range": [
      18,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30,
    "range": [
      25,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 64,
    "end": 68,
    "range": [
      64,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 69,
    "end": 75,
    "range": [
      69,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 93,
    "end": 96,
    "range": [
      93,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 97,
    "end": 100,
    "range": [
      97,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 116,
    "end": 119,
    "range": [
      116,
      119
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
    "type": "Keyword",
    "value": "var",
    "start": 121,
    "end": 124,
    "range": [
      121,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 131,
    "end": 135,
    "range": [
      131,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 144,
    "end": 146,
    "range": [
      144,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 169,
    "end": 171,
    "range": [
      169,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 171,
    "end": 175,
    "range": [
      171,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 206,
    "end": 212,
    "range": [
      206,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 212,
    "end": 214,
    "range": [
      212,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "String",
    "value": "\": \"",
    "start": 217,
    "end": 221,
    "range": [
      217,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 240,
    "end": 246,
    "range": [
      240,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 274,
    "end": 280,
    "range": [
      274,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "fnope",
    "start": 281,
    "end": 286,
    "range": [
      281,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 289,
    "end": 295,
    "range": [
      289,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 296,
    "end": 299,
    "range": [
      296,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 299,
    "end": 303,
    "range": [
      299,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 304,
    "end": 310,
    "range": [
      304,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 338,
    "end": 344,
    "range": [
      338,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "fonly",
    "start": 345,
    "end": 350,
    "range": [
      345,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 351,
    "end": 354,
    "range": [
      351,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 354,
    "end": 358,
    "range": [
      354,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 359,
    "end": 365,
    "range": [
      359,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 383,
    "end": 390,
    "range": [
      383,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 391,
    "end": 393,
    "range": [
      391,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 407,
    "end": 410,
    "range": [
      407,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 412,
    "end": 415,
    "range": [
      412,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 422,
    "end": 426,
    "range": [
      422,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 427,
    "end": 433,
    "range": [
      427,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 435,
    "end": 437,
    "range": [
      435,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 457,
    "end": 464,
    "range": [
      457,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 464,
    "end": 466,
    "range": [
      464,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 466,
    "end": 470,
    "range": [
      466,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 501,
    "end": 507,
    "range": [
      501,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 508,
    "end": 515,
    "range": [
      508,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "var",
    "start": 536,
    "end": 539,
    "range": [
      536,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 542,
    "end": 545,
    "range": [
      542,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 553,
    "end": 556,
    "range": [
      553,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 557,
    "end": 563,
    "range": [
      557,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 564,
    "end": 566,
    "range": [
      564,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 568,
    "end": 574,
    "range": [
      568,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 574,
    "end": 576,
    "range": [
      574,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 607,
    "end": 613,
    "range": [
      607,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 613,
    "end": 615,
    "range": [
      613,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 621,
    "end": 628,
    "range": [
      621,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 653,
    "end": 659,
    "range": [
      653,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 659,
    "end": 661,
    "range": [
      659,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 665,
    "end": 672,
    "range": [
      665,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 691,
    "end": 697,
    "range": [
      691,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 697,
    "end": 699,
    "range": [
      697,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 703,
    "end": 710,
    "range": [
      703,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 736,
    "end": 742,
    "range": [
      736,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 742,
    "end": 744,
    "range": [
      742,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "fonly",
    "start": 746,
    "end": 751,
    "range": [
      746,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754,
    "range": [
      753,
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
    "value": "result",
    "start": 773,
    "end": 779,
    "range": [
      773,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 779,
    "end": 781,
    "range": [
      779,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "fonly",
    "start": 783,
    "end": 788,
    "range": [
      783,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 806,
    "end": 812,
    "range": [
      806,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 812,
    "end": 814,
    "range": [
      812,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "fonly",
    "start": 816,
    "end": 821,
    "range": [
      816,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 822,
    "end": 825,
    "range": [
      822,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 835,
    "end": 841,
    "range": [
      835,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 841,
    "end": 843,
    "range": [
      841,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "fonly",
    "start": 845,
    "end": 850,
    "range": [
      845,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 851,
    "end": 854,
    "range": [
      851,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 855,
    "end": 858,
    "range": [
      855,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 859,
    "end": 862,
    "range": [
      859,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "String",
    "value": "\"d\"",
    "start": 863,
    "end": 866,
    "range": [
      863,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  }
]
```
