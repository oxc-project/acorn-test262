__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 12,
        "raw": "12",
        "start": 15,
        "end": 17
      },
      "exportKind": "value",
      "start": 0,
      "end": 17
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 13,
        "raw": "13",
        "start": 33,
        "end": 35
      },
      "exportKind": "value",
      "start": 18,
      "end": 35
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
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 47
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 50,
            "end": 51
          },
          "definite": false,
          "start": 42,
          "end": 51
        }
      ],
      "declare": false,
      "start": 36,
      "end": 51
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
            "name": "yield",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 63
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 66,
            "end": 67
          },
          "definite": false,
          "start": 58,
          "end": 67
        }
      ],
      "declare": false,
      "start": 52,
      "end": 67
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 84
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "await",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 104
                },
                "init": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 107,
                  "end": 108
                },
                "definite": false,
                "start": 99,
                "end": 108
              }
            ],
            "declare": false,
            "start": 93,
            "end": 108
          }
        ],
        "start": 87,
        "end": 110
      },
      "expression": false,
      "start": 68,
      "end": 110
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 122
      },
      "generator": true,
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yield",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 142
                },
                "init": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 145,
                  "end": 146
                },
                "definite": false,
                "start": 137,
                "end": 146
              }
            ],
            "declare": false,
            "start": 131,
            "end": 146
          }
        ],
        "start": 125,
        "end": 148
      },
      "expression": false,
      "start": 111,
      "end": 148
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 156
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
              "type": "PrivateIdentifier",
              "name": "constructor",
              "start": 163,
              "end": 175
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 178,
              "end": 179
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 163,
            "end": 179
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "deleted",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 191
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "container",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 222
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 223,
                        "end": 224
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "UnaryExpression",
                            "operator": "delete",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 247,
                              "end": 248
                            },
                            "prefix": true,
                            "start": 240,
                            "end": 248
                          },
                          "directive": null,
                          "start": 240,
                          "end": 248
                        }
                      ],
                      "start": 226,
                      "end": 258
                    },
                    "expression": false,
                    "start": 204,
                    "end": 258
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
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 271,
                          "end": 272
                        },
                        "init": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 275,
                          "end": 276
                        },
                        "definite": false,
                        "start": 271,
                        "end": 276
                      }
                    ],
                    "declare": false,
                    "start": 267,
                    "end": 276
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UnaryExpression",
                      "operator": "delete",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 293
                      },
                      "prefix": true,
                      "start": 285,
                      "end": 293
                    },
                    "directive": null,
                    "start": 285,
                    "end": 293
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UnaryExpression",
                      "operator": "delete",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "container",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 318
                      },
                      "prefix": true,
                      "start": 302,
                      "end": 318
                    },
                    "directive": null,
                    "start": 302,
                    "end": 318
                  }
                ],
                "start": 194,
                "end": 324
              },
              "expression": false,
              "start": 191,
              "end": 324
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 184,
            "end": 324
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "evalArguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 342
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "eval",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 365
                        },
                        "init": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 368,
                          "end": 369
                        },
                        "definite": false,
                        "start": 361,
                        "end": 369
                      }
                    ],
                    "declare": false,
                    "start": 355,
                    "end": 369
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
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 393
                        },
                        "init": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 396,
                          "end": 397
                        },
                        "definite": false,
                        "start": 384,
                        "end": 397
                      }
                    ],
                    "declare": false,
                    "start": 378,
                    "end": 397
                  }
                ],
                "start": 345,
                "end": 403
              },
              "expression": false,
              "start": 342,
              "end": 403
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 329,
            "end": 403
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "withOctal",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 417
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "redundant",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 436,
                          "end": 445
                        },
                        "init": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "0o10",
                          "start": 448,
                          "end": 452
                        },
                        "definite": false,
                        "start": 436,
                        "end": 452
                      }
                    ],
                    "declare": false,
                    "start": 430,
                    "end": 452
                  },
                  {
                    "type": "WithStatement",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "redundant",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 476
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 499,
                              "end": 506
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 499,
                            "end": 508
                          },
                          "start": 492,
                          "end": 508
                        }
                      ],
                      "start": 478,
                      "end": 518
                    },
                    "start": 461,
                    "end": 518
                  }
                ],
                "start": 420,
                "end": 524
              },
              "expression": false,
              "start": 417,
              "end": 524
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 408,
            "end": 524
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 534
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
                    "type": "ForStatement",
                    "init": null,
                    "test": null,
                    "update": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "LabeledStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 569,
                            "end": 574
                          },
                          "body": {
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
                                  "start": 580,
                                  "end": 581
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 584,
                                  "end": 585
                                },
                                "definite": false,
                                "start": 580,
                                "end": 585
                              }
                            ],
                            "declare": false,
                            "start": 576,
                            "end": 585
                          },
                          "start": 569,
                          "end": 585
                        },
                        {
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 604,
                            "end": 609
                          },
                          "start": 598,
                          "end": 609
                        }
                      ],
                      "start": 555,
                      "end": 619
                    },
                    "start": 547,
                    "end": 619
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 635,
                      "end": 636
                    },
                    "start": 628,
                    "end": 636
                  }
                ],
                "start": 537,
                "end": 642
              },
              "expression": false,
              "start": 534,
              "end": 642
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 529,
            "end": 642
          }
        ],
        "start": 157,
        "end": 644
      },
      "abstract": false,
      "declare": false,
      "start": 149,
      "end": 644
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
            "name": "eval",
            "optional": false,
            "typeAnnotation": null,
            "start": 651,
            "end": 655
          },
          "init": {
            "type": "Literal",
            "value": 9,
            "raw": "9",
            "start": 658,
            "end": 659
          },
          "definite": false,
          "start": 651,
          "end": 659
        }
      ],
      "declare": false,
      "start": 645,
      "end": 659
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
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 666,
            "end": 675
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 678,
            "end": 680
          },
          "definite": false,
          "start": 666,
          "end": 680
        }
      ],
      "declare": false,
      "start": 660,
      "end": 680
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 680
}
```
