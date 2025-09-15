__ESTREE_TEST__:PASS:
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
