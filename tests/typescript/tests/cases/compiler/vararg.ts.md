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
        "start": 7,
        "end": 8
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
                "start": 28,
                "end": 29
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
                      "start": 47,
                      "end": 48
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
                              "start": 51,
                              "end": 57
                            },
                            "start": 50,
                            "end": 57
                          },
                          "start": 49,
                          "end": 57
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
                            "start": 61,
                            "end": 65
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSNumberKeyword",
                                "start": 66,
                                "end": 72
                              },
                              "start": 66,
                              "end": 74
                            },
                            "start": 65,
                            "end": 74
                          },
                          "value": null,
                          "start": 58,
                          "end": 74
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
                                  "start": 94,
                                  "end": 97
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 98,
                                  "end": 99
                                },
                                "definite": false,
                                "start": 94,
                                "end": 99
                              }
                            ],
                            "declare": false,
                            "start": 90,
                            "end": 100
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
                                    "start": 122,
                                    "end": 123
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 124,
                                    "end": 125
                                  },
                                  "definite": false,
                                  "start": 122,
                                  "end": 125
                                }
                              ],
                              "declare": false,
                              "start": 118,
                              "end": 125
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 126,
                                "end": 127
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
                                  "start": 128,
                                  "end": 132
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 133,
                                  "end": 139
                                },
                                "optional": false,
                                "computed": false,
                                "start": 128,
                                "end": 139
                              },
                              "start": 126,
                              "end": 139
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
                                "start": 140,
                                "end": 141
                              },
                              "start": 140,
                              "end": 143
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
                                      "start": 163,
                                      "end": 166
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "rest",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 168,
                                        "end": 172
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 173,
                                        "end": 174
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 168,
                                      "end": 175
                                    },
                                    "start": 163,
                                    "end": 175
                                  },
                                  "directive": null,
                                  "start": 163,
                                  "end": 176
                                }
                              ],
                              "start": 145,
                              "end": 190
                            },
                            "start": 113,
                            "end": 190
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
                                "start": 203,
                                "end": 209
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
                                    "start": 212,
                                    "end": 213
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "value": ": ",
                                    "raw": "\": \"",
                                    "start": 214,
                                    "end": 218
                                  },
                                  "start": 212,
                                  "end": 218
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sum",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 219,
                                  "end": 222
                                },
                                "start": 212,
                                "end": 222
                              },
                              "start": 203,
                              "end": 223
                            },
                            "directive": null,
                            "start": 203,
                            "end": 224
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 244,
                              "end": 250
                            },
                            "start": 237,
                            "end": 251
                          }
                        ],
                        "start": 76,
                        "end": 261
                      },
                      "expression": false,
                      "start": 48,
                      "end": 261
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 40,
                    "end": 261
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
                      "start": 278,
                      "end": 283
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
                              "start": 286,
                              "end": 292
                            },
                            "start": 285,
                            "end": 292
                          },
                          "start": 284,
                          "end": 292
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
                            "start": 296,
                            "end": 300
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 301,
                              "end": 307
                            },
                            "start": 300,
                            "end": 307
                          },
                          "value": null,
                          "start": 293,
                          "end": 307
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 309,
                        "end": 325
                      },
                      "expression": false,
                      "start": 283,
                      "end": 325
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 271,
                    "end": 325
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
                      "start": 342,
                      "end": 347
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
                            "start": 351,
                            "end": 355
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSStringKeyword",
                                "start": 356,
                                "end": 362
                              },
                              "start": 356,
                              "end": 364
                            },
                            "start": 355,
                            "end": 364
                          },
                          "value": null,
                          "start": 348,
                          "end": 364
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
                                "start": 380,
                                "end": 387
                              },
                              "right": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 388,
                                "end": 390
                              },
                              "start": 380,
                              "end": 390
                            },
                            "directive": null,
                            "start": 380,
                            "end": 391
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
                                    "start": 413,
                                    "end": 414
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 415,
                                    "end": 416
                                  },
                                  "definite": false,
                                  "start": 413,
                                  "end": 416
                                }
                              ],
                              "declare": false,
                              "start": 409,
                              "end": 416
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 417,
                                "end": 418
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
                                  "start": 419,
                                  "end": 423
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 424,
                                  "end": 430
                                },
                                "optional": false,
                                "computed": false,
                                "start": 419,
                                "end": 430
                              },
                              "start": 417,
                              "end": 430
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
                                "start": 431,
                                "end": 432
                              },
                              "start": 431,
                              "end": 434
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
                                      "start": 454,
                                      "end": 461
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "rest",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 463,
                                        "end": 467
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 468,
                                        "end": 469
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 463,
                                      "end": 470
                                    },
                                    "start": 454,
                                    "end": 470
                                  },
                                  "directive": null,
                                  "start": 454,
                                  "end": 471
                                }
                              ],
                              "start": 436,
                              "end": 485
                            },
                            "start": 404,
                            "end": 485
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "builder",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 505,
                              "end": 512
                            },
                            "start": 498,
                            "end": 513
                          }
                        ],
                        "start": 366,
                        "end": 523
                      },
                      "expression": false,
                      "start": 347,
                      "end": 523
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 335,
                    "end": 523
                  }
                ],
                "start": 30,
                "end": 529
              },
              "abstract": false,
              "declare": false,
              "start": 22,
              "end": 529
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 529
          }
        ],
        "start": 9,
        "end": 531
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 531
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
            "start": 537,
            "end": 538
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
                "start": 543,
                "end": 544
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 546
              },
              "optional": false,
              "computed": false,
              "start": 543,
              "end": 546
            },
            "typeArguments": null,
            "arguments": [],
            "start": 539,
            "end": 548
          },
          "definite": false,
          "start": 537,
          "end": 548
        }
      ],
      "declare": false,
      "start": 533,
      "end": 549
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
            "start": 554,
            "end": 560
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 561,
            "end": 563
          },
          "definite": false,
          "start": 554,
          "end": 563
        }
      ],
      "declare": false,
      "start": 550,
      "end": 564
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
          "start": 565,
          "end": 571
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
              "start": 573,
              "end": 574
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 576
            },
            "optional": false,
            "computed": false,
            "start": 573,
            "end": 576
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 578
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 579,
              "end": 580
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 581,
              "end": 582
            }
          ],
          "optional": false,
          "start": 573,
          "end": 583
        },
        "start": 565,
        "end": 583
      },
      "directive": null,
      "start": 565,
      "end": 584
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
          "start": 604,
          "end": 610
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
              "start": 612,
              "end": 613
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 615
            },
            "optional": false,
            "computed": false,
            "start": 612,
            "end": 615
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 616,
              "end": 617
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 618,
              "end": 625
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 626,
              "end": 627
            }
          ],
          "optional": false,
          "start": 612,
          "end": 628
        },
        "start": 604,
        "end": 628
      },
      "directive": null,
      "start": 604,
      "end": 629
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
          "start": 650,
          "end": 656
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
              "start": 658,
              "end": 659
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 661
            },
            "optional": false,
            "computed": false,
            "start": 658,
            "end": 661
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 662,
              "end": 669
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 670,
              "end": 671
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 672,
              "end": 673
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 674,
              "end": 675
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 676,
              "end": 677
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 678,
              "end": 679
            }
          ],
          "optional": false,
          "start": 658,
          "end": 680
        },
        "start": 650,
        "end": 680
      },
      "directive": null,
      "start": 650,
      "end": 681
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
          "start": 688,
          "end": 694
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
              "start": 696,
              "end": 697
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 698,
              "end": 699
            },
            "optional": false,
            "computed": false,
            "start": 696,
            "end": 699
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 700,
              "end": 707
            }
          ],
          "optional": false,
          "start": 696,
          "end": 708
        },
        "start": 688,
        "end": 708
      },
      "directive": null,
      "start": 688,
      "end": 709
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
          "start": 733,
          "end": 739
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
              "start": 741,
              "end": 742
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 748
            },
            "optional": false,
            "computed": false,
            "start": 741,
            "end": 748
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 749,
              "end": 750
            }
          ],
          "optional": false,
          "start": 741,
          "end": 751
        },
        "start": 733,
        "end": 751
      },
      "directive": null,
      "start": 733,
      "end": 752
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
          "start": 770,
          "end": 776
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
              "start": 778,
              "end": 779
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 785
            },
            "optional": false,
            "computed": false,
            "start": 778,
            "end": 785
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 787
            }
          ],
          "optional": false,
          "start": 778,
          "end": 788
        },
        "start": 770,
        "end": 788
      },
      "directive": null,
      "start": 770,
      "end": 789
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
          "start": 803,
          "end": 809
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
              "start": 811,
              "end": 812
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 813,
              "end": 818
            },
            "optional": false,
            "computed": false,
            "start": 811,
            "end": 818
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 819,
              "end": 822
            }
          ],
          "optional": false,
          "start": 811,
          "end": 823
        },
        "start": 803,
        "end": 823
      },
      "directive": null,
      "start": 803,
      "end": 824
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
          "start": 832,
          "end": 838
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
              "start": 840,
              "end": 841
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 842,
              "end": 847
            },
            "optional": false,
            "computed": false,
            "start": 840,
            "end": 847
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 848,
              "end": 851
            },
            {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 852,
              "end": 855
            },
            {
              "type": "Literal",
              "value": "c",
              "raw": "\"c\"",
              "start": 856,
              "end": 859
            },
            {
              "type": "Literal",
              "value": "d",
              "raw": "\"d\"",
              "start": 860,
              "end": 863
            }
          ],
          "optional": false,
          "start": 840,
          "end": 864
        },
        "start": 832,
        "end": 864
      },
      "directive": null,
      "start": 832,
      "end": 865
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 873
}
```
