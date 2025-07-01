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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 141
      },
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 145,
                  "end": 151
                },
                {
                  "type": "TSStringKeyword",
                  "start": 154,
                  "end": 160
                }
              ],
              "start": 145,
              "end": 160
            },
            "start": 143,
            "end": 160
          },
          "start": 142,
          "end": 160
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 192
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 195,
                      "end": 197
                    },
                    "start": 191,
                    "end": 197
                  },
                  "directive": null,
                  "start": 191,
                  "end": 198
                }
              ],
              "start": 181,
              "end": 204
            },
            "expression": false,
            "start": 168,
            "end": 204
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 221
                },
                "prefix": true,
                "start": 213,
                "end": 221
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 226,
                "end": 234
              },
              "start": 213,
              "end": 234
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 247
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 246,
                    "end": 249
                  },
                  "directive": null,
                  "start": 246,
                  "end": 250
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
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
                    "start": 266,
                    "end": 274
                  },
                  "start": 259,
                  "end": 275
                }
              ],
              "start": 236,
              "end": 291
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    },
                    "start": 318,
                    "end": 321
                  },
                  "start": 311,
                  "end": 322
                }
              ],
              "start": 301,
              "end": 338
            },
            "start": 209,
            "end": 338
          }
        ],
        "start": 162,
        "end": 340
      },
      "expression": false,
      "start": 129,
      "end": 340
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 354
      },
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 358,
                  "end": 364
                },
                {
                  "type": "TSStringKeyword",
                  "start": 367,
                  "end": 373
                }
              ],
              "start": 358,
              "end": 373
            },
            "start": 356,
            "end": 373
          },
          "start": 355,
          "end": 373
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 393
                },
                "prefix": true,
                "start": 385,
                "end": 393
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 398,
                "end": 406
              },
              "start": 385,
              "end": 406
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
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
                    "start": 425,
                    "end": 433
                  },
                  "start": 418,
                  "end": 434
                }
              ],
              "start": 408,
              "end": 450
            },
            "alternate": {
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
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 474,
                        "end": 475
                      },
                      "init": {
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
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 511,
                                  "end": 512
                                },
                                "operator": "*",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 515,
                                  "end": 516
                                },
                                "start": 511,
                                "end": 516
                              },
                              "start": 504,
                              "end": 517
                            }
                          ],
                          "start": 490,
                          "end": 527
                        },
                        "expression": false,
                        "start": 478,
                        "end": 527
                      },
                      "definite": false,
                      "start": 474,
                      "end": 527
                    }
                  ],
                  "declare": false,
                  "start": 470,
                  "end": 528
                }
              ],
              "start": 460,
              "end": 534
            },
            "start": 381,
            "end": 534
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 540
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 543,
                "end": 550
              },
              "start": 539,
              "end": 550
            },
            "directive": null,
            "start": 539,
            "end": 551
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 557
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 556,
              "end": 559
            },
            "directive": null,
            "start": 556,
            "end": 560
          }
        ],
        "start": 375,
        "end": 562
      },
      "expression": false,
      "start": 341,
      "end": 562
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 576
      },
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 580,
                  "end": 586
                },
                {
                  "type": "TSStringKeyword",
                  "start": 589,
                  "end": 595
                }
              ],
              "start": 580,
              "end": 595
            },
            "start": 578,
            "end": 595
          },
          "start": 577,
          "end": 595
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 615
                },
                "prefix": true,
                "start": 607,
                "end": 615
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 620,
                "end": 628
              },
              "start": 607,
              "end": 628
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 648
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 655
                    },
                    "optional": false,
                    "computed": false,
                    "start": 647,
                    "end": 655
                  },
                  "start": 640,
                  "end": 656
                }
              ],
              "start": 630,
              "end": 672
            },
            "alternate": {
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
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 696,
                        "end": 697
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 706,
                            "end": 707
                          },
                          "operator": "*",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 710,
                            "end": 711
                          },
                          "start": 706,
                          "end": 711
                        },
                        "id": null,
                        "generator": false,
                        "start": 700,
                        "end": 711
                      },
                      "definite": false,
                      "start": 696,
                      "end": 711
                    }
                  ],
                  "declare": false,
                  "start": 692,
                  "end": 712
                }
              ],
              "start": 682,
              "end": 718
            },
            "start": 603,
            "end": 718
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 724
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 727,
                "end": 734
              },
              "start": 723,
              "end": 734
            },
            "directive": null,
            "start": 723,
            "end": 735
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 741
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 740,
              "end": 743
            },
            "directive": null,
            "start": 740,
            "end": 744
          }
        ],
        "start": 597,
        "end": 746
      },
      "expression": false,
      "start": 563,
      "end": 746
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 129,
  "end": 746
}
```
