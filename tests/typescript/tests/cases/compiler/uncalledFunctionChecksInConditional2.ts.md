__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
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
                "name": "perf",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 14
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 23
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "performance",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 35
                },
                "optional": false,
                "computed": false,
                "start": 17,
                "end": 35
              },
              "definite": false,
              "start": 10,
              "end": 35
            }
          ],
          "declare": false,
          "start": 4,
          "end": 35
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 68
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 80
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 88
                  },
                  "optional": false,
                  "computed": false,
                  "start": 76,
                  "end": 88
                },
                "start": 64,
                "end": 88
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 100
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "clearMarks",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 111
                },
                "optional": false,
                "computed": false,
                "start": 96,
                "end": 111
              },
              "start": 64,
              "end": 111
            },
            "operator": "&&",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "perf",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 123
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearMeasures",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 137
              },
              "optional": false,
              "computed": false,
              "start": 119,
              "end": 137
            },
            "start": 64,
            "end": 137
          },
          "consequent": {
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
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 152
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "measure",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 160
                    },
                    "optional": false,
                    "computed": false,
                    "start": 148,
                    "end": 160
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 161,
                      "end": 163
                    }
                  ],
                  "optional": false,
                  "start": 148,
                  "end": 164
                },
                "directive": null,
                "start": 148,
                "end": 165
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
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 174
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "clearMarks",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 185
                    },
                    "optional": false,
                    "computed": false,
                    "start": 170,
                    "end": 185
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 186,
                      "end": 188
                    }
                  ],
                  "optional": false,
                  "start": 170,
                  "end": 189
                },
                "directive": null,
                "start": 170,
                "end": 189
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
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 198
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "clearMeasures",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 212
                    },
                    "optional": false,
                    "computed": false,
                    "start": 194,
                    "end": 212
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 213,
                      "end": 215
                    }
                  ],
                  "optional": false,
                  "start": 194,
                  "end": 216
                },
                "directive": null,
                "start": 194,
                "end": 216
              }
            ],
            "start": 142,
            "end": 220
          },
          "alternate": null,
          "start": 55,
          "end": 220
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 250
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 262
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mark",
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
                "start": 246,
                "end": 267
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 279
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "measure",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 287
                },
                "optional": false,
                "computed": false,
                "start": 275,
                "end": 287
              },
              "start": 246,
              "end": 287
            },
            "operator": "||",
            "right": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 293,
                  "end": 297
                },
                "prefix": true,
                "start": 292,
                "end": 297
              },
              "prefix": true,
              "start": 291,
              "end": 297
            },
            "start": 246,
            "end": 297
          },
          "consequent": {
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
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 312
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mark",
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
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 318,
                      "end": 320
                    }
                  ],
                  "optional": false,
                  "start": 308,
                  "end": 321
                },
                "directive": null,
                "start": 308,
                "end": 322
              }
            ],
            "start": 302,
            "end": 326
          },
          "alternate": null,
          "start": 237,
          "end": 326
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 360,
                  "end": 364
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 374,
                    "end": 378
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mark",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 379,
                    "end": 383
                  },
                  "optional": false,
                  "computed": false,
                  "start": 374,
                  "end": 383
                },
                "start": 360,
                "end": 383
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 397
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "measure",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 405
                },
                "optional": false,
                "computed": false,
                "start": 393,
                "end": 405
              },
              "start": 360,
              "end": 405
            },
            "operator": "??",
            "right": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 417,
                  "end": 421
                },
                "prefix": true,
                "start": 416,
                "end": 421
              },
              "prefix": true,
              "start": 415,
              "end": 421
            },
            "start": 352,
            "end": 421
          },
          "consequent": {
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
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 432,
                      "end": 436
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mark",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 441
                    },
                    "optional": false,
                    "computed": false,
                    "start": 432,
                    "end": 441
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 442,
                      "end": 444
                    }
                  ],
                  "optional": false,
                  "start": 432,
                  "end": 445
                },
                "directive": null,
                "start": 432,
                "end": 446
              }
            ],
            "start": 426,
            "end": 450
          },
          "alternate": null,
          "start": 343,
          "end": 450
        }
      ],
      "start": 0,
      "end": 452
    },
    {
      "type": "EmptyStatement",
      "start": 452,
      "end": 453
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
            "name": "inBrowser",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 497,
                "end": 504
              },
              "start": 495,
              "end": 504
            },
            "start": 486,
            "end": 504
          },
          "init": null,
          "definite": false,
          "start": 486,
          "end": 504
        }
      ],
      "declare": true,
      "start": 474,
      "end": 505
    },
    {
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
                "name": "mark",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 518
              },
              "init": null,
              "definite": false,
              "start": 514,
              "end": 518
            }
          ],
          "declare": false,
          "start": 510,
          "end": 519
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
                "name": "measure",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 533
              },
              "init": null,
              "definite": false,
              "start": 526,
              "end": 533
            }
          ],
          "declare": false,
          "start": 522,
          "end": 534
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
                "name": "perf",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 547
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inBrowser",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 559
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 563,
                    "end": 569
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "performance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 581
                  },
                  "optional": false,
                  "computed": false,
                  "start": 563,
                  "end": 581
                },
                "start": 550,
                "end": 581
              },
              "definite": false,
              "start": 543,
              "end": 581
            }
          ],
          "declare": false,
          "start": 537,
          "end": 581
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 624
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 632,
                      "end": 636
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mark",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 641
                    },
                    "optional": false,
                    "computed": false,
                    "start": 632,
                    "end": 641
                  },
                  "start": 620,
                  "end": 641
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 653
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 654,
                    "end": 661
                  },
                  "optional": false,
                  "computed": false,
                  "start": 649,
                  "end": 661
                },
                "start": 620,
                "end": 661
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 673
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "clearMarks",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 684
                },
                "optional": false,
                "computed": false,
                "start": 669,
                "end": 684
              },
              "start": 620,
              "end": 684
            },
            "operator": "&&",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "perf",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 696
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearMeasures",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 710
              },
              "optional": false,
              "computed": false,
              "start": 692,
              "end": 710
            },
            "start": 620,
            "end": 710
          },
          "consequent": {
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
                    "name": "mark",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 721,
                    "end": 725
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 729,
                        "end": 732
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
                          "name": "perf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 737,
                          "end": 741
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mark",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 746
                        },
                        "optional": false,
                        "computed": false,
                        "start": 737,
                        "end": 746
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tag",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 747,
                          "end": 750
                        }
                      ],
                      "optional": false,
                      "start": 737,
                      "end": 751
                    },
                    "id": null,
                    "generator": false,
                    "start": 728,
                    "end": 751
                  },
                  "start": 721,
                  "end": 751
                },
                "directive": null,
                "start": 721,
                "end": 751
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 756,
                    "end": 763
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 767,
                        "end": 771
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "startTag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 773,
                        "end": 781
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "endTag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 783,
                        "end": 789
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
                                "name": "perf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 802,
                                "end": 806
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "measure",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 807,
                                "end": 814
                              },
                              "optional": false,
                              "computed": false,
                              "start": 802,
                              "end": 814
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 815,
                                "end": 819
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "startTag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 821,
                                "end": 829
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "endTag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 831,
                                "end": 837
                              }
                            ],
                            "optional": false,
                            "start": 802,
                            "end": 838
                          },
                          "directive": null,
                          "start": 802,
                          "end": 838
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
                                "name": "perf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 845,
                                "end": 849
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "clearMarks",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 850,
                                "end": 860
                              },
                              "optional": false,
                              "computed": false,
                              "start": 845,
                              "end": 860
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "startTag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 861,
                                "end": 869
                              }
                            ],
                            "optional": false,
                            "start": 845,
                            "end": 870
                          },
                          "directive": null,
                          "start": 845,
                          "end": 870
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
                                "name": "perf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 877,
                                "end": 881
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "clearMarks",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 882,
                                "end": 892
                              },
                              "optional": false,
                              "computed": false,
                              "start": 877,
                              "end": 892
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "endTag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 893,
                                "end": 899
                              }
                            ],
                            "optional": false,
                            "start": 877,
                            "end": 900
                          },
                          "directive": null,
                          "start": 877,
                          "end": 900
                        }
                      ],
                      "start": 794,
                      "end": 940
                    },
                    "id": null,
                    "generator": false,
                    "start": 766,
                    "end": 940
                  },
                  "start": 756,
                  "end": 940
                },
                "directive": null,
                "start": 756,
                "end": 940
              }
            ],
            "start": 715,
            "end": 944
          },
          "alternate": null,
          "start": 611,
          "end": 944
        }
      ],
      "start": 506,
      "end": 946
    },
    {
      "type": "EmptyStatement",
      "start": 946,
      "end": 947
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
            "name": "_isMobile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 964,
                "end": 971
              },
              "start": 962,
              "end": 971
            },
            "start": 953,
            "end": 971
          },
          "init": null,
          "definite": false,
          "start": 953,
          "end": 971
        }
      ],
      "declare": false,
      "start": 949,
      "end": 972
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isMobile",
        "optional": false,
        "typeAnnotation": null,
        "start": 982,
        "end": 990
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
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_isMobile",
                "optional": false,
                "typeAnnotation": null,
                "start": 1001,
                "end": 1010
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1015,
                "end": 1024
              },
              "start": 1001,
              "end": 1024
            },
            "consequent": {
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
                        "name": "isMobileMatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1038,
                        "end": 1051
                      },
                      "init": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "window",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1067,
                                "end": 1073
                              },
                              "prefix": true,
                              "start": 1060,
                              "end": 1073
                            },
                            "operator": "!==",
                            "right": {
                              "type": "Literal",
                              "value": "undefined",
                              "raw": "'undefined'",
                              "start": 1078,
                              "end": 1089
                            },
                            "start": 1060,
                            "end": 1089
                          },
                          "operator": "&&",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "window",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1099,
                              "end": 1105
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "matchMedia",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1106,
                              "end": 1116
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1099,
                            "end": 1116
                          },
                          "start": 1060,
                          "end": 1116
                        },
                        "operator": "&&",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "window",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1138,
                              "end": 1144
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "matchMedia",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1145,
                              "end": 1155
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1138,
                            "end": 1155
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "(max-device-width: 680px)",
                              "raw": "'(max-device-width: 680px)'",
                              "start": 1156,
                              "end": 1183
                            }
                          ],
                          "optional": false,
                          "start": 1138,
                          "end": 1184
                        },
                        "start": 1060,
                        "end": 1184
                      },
                      "definite": false,
                      "start": 1038,
                      "end": 1184
                    }
                  ],
                  "declare": false,
                  "start": 1032,
                  "end": 1185
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_isMobile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1190,
                      "end": 1199
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isMobileMatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1202,
                        "end": 1215
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMobileMatch",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1219,
                          "end": 1232
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "matches",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1233,
                          "end": 1240
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1219,
                        "end": 1240
                      },
                      "start": 1202,
                      "end": 1240
                    },
                    "start": 1190,
                    "end": 1240
                  },
                  "directive": null,
                  "start": 1190,
                  "end": 1241
                }
              ],
              "start": 1026,
              "end": 1245
            },
            "alternate": null,
            "start": 997,
            "end": 1245
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "_isMobile",
              "optional": false,
              "typeAnnotation": null,
              "start": 1255,
              "end": 1264
            },
            "start": 1248,
            "end": 1265
          }
        ],
        "start": 993,
        "end": 1267
      },
      "expression": false,
      "start": 973,
      "end": 1267
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1267
}
```
