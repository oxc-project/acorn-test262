__ESTREE_TEST__:AST:
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
        "name": "NumberOrUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 23
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
              "name": "_x",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 34,
                    "end": 40
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 43,
                    "end": 52
                  }
                ],
                "start": 34,
                "end": 52
              },
              "start": 32,
              "end": 52
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
            "start": 30,
            "end": 53
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
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
                  "start": 67,
                  "end": 73
                },
                "start": 65,
                "end": 73
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 83,
                          "end": 87
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 90
                        },
                        "optional": false,
                        "computed": false,
                        "start": 83,
                        "end": 90
                      },
                      "operator": "??",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 94,
                        "end": 95
                      },
                      "start": 83,
                      "end": 95
                    },
                    "start": 76,
                    "end": 96
                  }
                ],
                "start": 74,
                "end": 98
              },
              "expression": false,
              "start": 63,
              "end": 98
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 98
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 116,
                          "end": 122
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 125,
                          "end": 134
                        }
                      ],
                      "start": 116,
                      "end": 134
                    },
                    "start": 114,
                    "end": 134
                  },
                  "start": 109,
                  "end": 134
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
                          "start": 138,
                          "end": 142
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 143,
                          "end": 145
                        },
                        "optional": false,
                        "computed": false,
                        "start": 138,
                        "end": 145
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 153
                      },
                      "start": 138,
                      "end": 153
                    },
                    "directive": null,
                    "start": 138,
                    "end": 154
                  }
                ],
                "start": 136,
                "end": 156
              },
              "expression": false,
              "start": 108,
              "end": 156
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 103,
            "end": 156
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "additionAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 180
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
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 193,
                          "end": 197
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 198,
                          "end": 199
                        },
                        "optional": false,
                        "computed": false,
                        "start": 193,
                        "end": 199
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 203,
                        "end": 204
                      },
                      "start": 193,
                      "end": 204
                    },
                    "directive": null,
                    "start": 193,
                    "end": 205
                  }
                ],
                "start": 183,
                "end": 211
              },
              "expression": false,
              "start": 180,
              "end": 211
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 162,
            "end": 211
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "subtractionAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 238
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
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 251,
                          "end": 255
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 256,
                          "end": 257
                        },
                        "optional": false,
                        "computed": false,
                        "start": 251,
                        "end": 257
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 261,
                        "end": 262
                      },
                      "start": 251,
                      "end": 262
                    },
                    "directive": null,
                    "start": 251,
                    "end": 263
                  }
                ],
                "start": 241,
                "end": 269
              },
              "expression": false,
              "start": 238,
              "end": 269
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 217,
            "end": 269
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiplicationAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
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
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 312,
                          "end": 316
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 317,
                          "end": 318
                        },
                        "optional": false,
                        "computed": false,
                        "start": 312,
                        "end": 318
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 322,
                        "end": 323
                      },
                      "start": 312,
                      "end": 323
                    },
                    "directive": null,
                    "start": 312,
                    "end": 324
                  }
                ],
                "start": 302,
                "end": 330
              },
              "expression": false,
              "start": 299,
              "end": 330
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 275,
            "end": 330
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "divisionAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 354
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
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 367,
                          "end": 371
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 372,
                          "end": 373
                        },
                        "optional": false,
                        "computed": false,
                        "start": 367,
                        "end": 373
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 377,
                        "end": 378
                      },
                      "start": 367,
                      "end": 378
                    },
                    "directive": null,
                    "start": 367,
                    "end": 379
                  }
                ],
                "start": 357,
                "end": 385
              },
              "expression": false,
              "start": 354,
              "end": 385
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 336,
            "end": 385
          }
        ],
        "start": 24,
        "end": 387
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 387
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
            "name": "numberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 411
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberOrUndefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 435
            },
            "typeArguments": null,
            "arguments": [],
            "start": 414,
            "end": 437
          },
          "definite": false,
          "start": 394,
          "end": 437
        }
      ],
      "declare": false,
      "start": 388,
      "end": 438
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 456
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 458
          },
          "optional": false,
          "computed": false,
          "start": 439,
          "end": 458
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 462,
          "end": 463
        },
        "start": 439,
        "end": 463
      },
      "directive": null,
      "start": 439,
      "end": 464
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 482
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 484
          },
          "optional": false,
          "computed": false,
          "start": 465,
          "end": 484
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 488,
          "end": 489
        },
        "start": 465,
        "end": 489
      },
      "directive": null,
      "start": 465,
      "end": 490
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 508
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 510
          },
          "optional": false,
          "computed": false,
          "start": 491,
          "end": 510
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 514,
          "end": 515
        },
        "start": 491,
        "end": 515
      },
      "directive": null,
      "start": 491,
      "end": 516
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 534
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 535,
            "end": 536
          },
          "optional": false,
          "computed": false,
          "start": 517,
          "end": 536
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 540,
          "end": 541
        },
        "start": 517,
        "end": 541
      },
      "directive": null,
      "start": 517,
      "end": 542
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberOrString",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 564
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
              "name": "_x",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 573
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 575,
                    "end": 581
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 584,
                    "end": 590
                  }
                ],
                "start": 575,
                "end": 590
              },
              "start": 573,
              "end": 590
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 593,
              "end": 594
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 571,
            "end": 595
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
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
                  "start": 609,
                  "end": 615
                },
                "start": 607,
                "end": 615
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 632,
                              "end": 636
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 637,
                              "end": 639
                            },
                            "optional": false,
                            "computed": false,
                            "start": 632,
                            "end": 639
                          },
                          "prefix": true,
                          "start": 625,
                          "end": 639
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "number",
                          "raw": "'number'",
                          "start": 644,
                          "end": 652
                        },
                        "start": 625,
                        "end": 652
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 655,
                          "end": 659
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 660,
                          "end": 662
                        },
                        "optional": false,
                        "computed": false,
                        "start": 655,
                        "end": 662
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Number",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 671
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 672,
                              "end": 676
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 677,
                              "end": 679
                            },
                            "optional": false,
                            "computed": false,
                            "start": 672,
                            "end": 679
                          }
                        ],
                        "optional": false,
                        "start": 665,
                        "end": 680
                      },
                      "start": 625,
                      "end": 680
                    },
                    "start": 618,
                    "end": 681
                  }
                ],
                "start": 616,
                "end": 683
              },
              "expression": false,
              "start": 605,
              "end": 683
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 600,
            "end": 683
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 693
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 701,
                          "end": 707
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 710,
                          "end": 716
                        }
                      ],
                      "start": 701,
                      "end": 716
                    },
                    "start": 699,
                    "end": 716
                  },
                  "start": 694,
                  "end": 716
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
                          "start": 720,
                          "end": 724
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 725,
                          "end": 727
                        },
                        "optional": false,
                        "computed": false,
                        "start": 720,
                        "end": 727
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 730,
                        "end": 735
                      },
                      "start": 720,
                      "end": 735
                    },
                    "directive": null,
                    "start": 720,
                    "end": 736
                  }
                ],
                "start": 718,
                "end": 738
              },
              "expression": false,
              "start": 693,
              "end": 738
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 688,
            "end": 738
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "additionAssignmentNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 768
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
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 781,
                          "end": 785
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 786,
                          "end": 787
                        },
                        "optional": false,
                        "computed": false,
                        "start": 781,
                        "end": 787
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 791,
                        "end": 792
                      },
                      "start": 781,
                      "end": 792
                    },
                    "directive": null,
                    "start": 781,
                    "end": 793
                  }
                ],
                "start": 771,
                "end": 799
              },
              "expression": false,
              "start": 768,
              "end": 799
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 744,
            "end": 799
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "additionAssignmentString",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 828
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
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 841,
                          "end": 845
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 846,
                          "end": 847
                        },
                        "optional": false,
                        "computed": false,
                        "start": 841,
                        "end": 847
                      },
                      "right": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 851,
                        "end": 854
                      },
                      "start": 841,
                      "end": 854
                    },
                    "directive": null,
                    "start": 841,
                    "end": 855
                  }
                ],
                "start": 831,
                "end": 861
              },
              "expression": false,
              "start": 828,
              "end": 861
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 804,
            "end": 861
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "subtractionAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 888
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
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 901,
                          "end": 905
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 906,
                          "end": 907
                        },
                        "optional": false,
                        "computed": false,
                        "start": 901,
                        "end": 907
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 911,
                        "end": 912
                      },
                      "start": 901,
                      "end": 912
                    },
                    "directive": null,
                    "start": 901,
                    "end": 913
                  }
                ],
                "start": 891,
                "end": 919
              },
              "expression": false,
              "start": 888,
              "end": 919
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 867,
            "end": 919
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiplicationAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 925,
              "end": 949
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
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 962,
                          "end": 966
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 967,
                          "end": 968
                        },
                        "optional": false,
                        "computed": false,
                        "start": 962,
                        "end": 968
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 972,
                        "end": 973
                      },
                      "start": 962,
                      "end": 973
                    },
                    "directive": null,
                    "start": 962,
                    "end": 974
                  }
                ],
                "start": 952,
                "end": 980
              },
              "expression": false,
              "start": 949,
              "end": 980
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 925,
            "end": 980
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "divisionAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 1004
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
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1017,
                          "end": 1021
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1022,
                          "end": 1023
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1017,
                        "end": 1023
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1027,
                        "end": 1028
                      },
                      "start": 1017,
                      "end": 1028
                    },
                    "directive": null,
                    "start": 1017,
                    "end": 1029
                  }
                ],
                "start": 1007,
                "end": 1035
              },
              "expression": false,
              "start": 1004,
              "end": 1035
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 986,
            "end": 1035
          }
        ],
        "start": 565,
        "end": 1037
      },
      "abstract": false,
      "declare": false,
      "start": 544,
      "end": 1037
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
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null,
            "start": 1044,
            "end": 1058
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberOrString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1079
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1061,
            "end": 1081
          },
          "definite": false,
          "start": 1044,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 1038,
      "end": 1082
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null,
            "start": 1083,
            "end": 1097
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1098,
            "end": 1099
          },
          "optional": false,
          "computed": false,
          "start": 1083,
          "end": 1099
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1103,
          "end": 1104
        },
        "start": 1083,
        "end": 1104
      },
      "directive": null,
      "start": 1083,
      "end": 1105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1120
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1121,
            "end": 1122
          },
          "optional": false,
          "computed": false,
          "start": 1106,
          "end": 1122
        },
        "right": {
          "type": "Literal",
          "value": "1",
          "raw": "'1'",
          "start": 1126,
          "end": 1129
        },
        "start": 1106,
        "end": 1129
      },
      "directive": null,
      "start": 1106,
      "end": 1130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null,
            "start": 1131,
            "end": 1145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1146,
            "end": 1147
          },
          "optional": false,
          "computed": false,
          "start": 1131,
          "end": 1147
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1151,
          "end": 1152
        },
        "start": 1131,
        "end": 1152
      },
      "directive": null,
      "start": 1131,
      "end": 1153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null,
            "start": 1154,
            "end": 1168
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1169,
            "end": 1170
          },
          "optional": false,
          "computed": false,
          "start": 1154,
          "end": 1170
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1174,
          "end": 1175
        },
        "start": 1154,
        "end": 1175
      },
      "directive": null,
      "start": 1154,
      "end": 1176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "typeAnnotation": null,
            "start": 1177,
            "end": 1191
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1192,
            "end": 1193
          },
          "optional": false,
          "computed": false,
          "start": 1177,
          "end": 1193
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1197,
          "end": 1198
        },
        "start": 1177,
        "end": 1198
      },
      "directive": null,
      "start": 1177,
      "end": 1199
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1206,
        "end": 1209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1219,
                "end": 1225
              },
              "start": 1217,
              "end": 1225
            },
            "accessibility": null,
            "static": false,
            "start": 1214,
            "end": 1226
          }
        ],
        "start": 1212,
        "end": 1228
      },
      "declare": false,
      "start": 1201,
      "end": 1229
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberOrObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 1236,
        "end": 1250
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
              "name": "_x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1259
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1261,
                    "end": 1267
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1270,
                      "end": 1273
                    },
                    "typeArguments": null,
                    "start": 1270,
                    "end": 1273
                  }
                ],
                "start": 1261,
                "end": 1273
              },
              "start": 1259,
              "end": 1273
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1276,
              "end": 1277
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1257,
            "end": 1278
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1287,
              "end": 1288
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
                  "start": 1292,
                  "end": 1298
                },
                "start": 1290,
                "end": 1298
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1315,
                              "end": 1319
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1320,
                              "end": 1322
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1315,
                            "end": 1322
                          },
                          "prefix": true,
                          "start": 1308,
                          "end": 1322
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "number",
                          "raw": "'number'",
                          "start": 1327,
                          "end": 1335
                        },
                        "start": 1308,
                        "end": 1335
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1338,
                          "end": 1342
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1343,
                          "end": 1345
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1338,
                        "end": 1345
                      },
                      "alternate": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1348,
                            "end": 1352
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1353,
                            "end": 1355
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1348,
                          "end": 1355
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1356,
                          "end": 1359
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1348,
                        "end": 1359
                      },
                      "start": 1308,
                      "end": 1359
                    },
                    "start": 1301,
                    "end": 1360
                  }
                ],
                "start": 1299,
                "end": 1362
              },
              "expression": false,
              "start": 1288,
              "end": 1362
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1283,
            "end": 1362
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1371,
              "end": 1372
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1380,
                          "end": 1386
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1389,
                            "end": 1392
                          },
                          "typeArguments": null,
                          "start": 1389,
                          "end": 1392
                        }
                      ],
                      "start": 1380,
                      "end": 1392
                    },
                    "start": 1378,
                    "end": 1392
                  },
                  "start": 1373,
                  "end": 1392
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
                          "start": 1396,
                          "end": 1400
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1401,
                          "end": 1403
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1396,
                        "end": 1403
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1406,
                        "end": 1411
                      },
                      "start": 1396,
                      "end": 1411
                    },
                    "directive": null,
                    "start": 1396,
                    "end": 1412
                  }
                ],
                "start": 1394,
                "end": 1414
              },
              "expression": false,
              "start": 1372,
              "end": 1414
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1367,
            "end": 1414
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "additionAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 1420,
              "end": 1438
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
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1451,
                          "end": 1455
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1456,
                          "end": 1457
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1451,
                        "end": 1457
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1461,
                        "end": 1462
                      },
                      "start": 1451,
                      "end": 1462
                    },
                    "directive": null,
                    "start": 1451,
                    "end": 1463
                  }
                ],
                "start": 1441,
                "end": 1469
              },
              "expression": false,
              "start": 1438,
              "end": 1469
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1420,
            "end": 1469
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "subtractionAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 1475,
              "end": 1496
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
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1509,
                          "end": 1513
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1514,
                          "end": 1515
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1509,
                        "end": 1515
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1519,
                        "end": 1520
                      },
                      "start": 1509,
                      "end": 1520
                    },
                    "directive": null,
                    "start": 1509,
                    "end": 1521
                  }
                ],
                "start": 1499,
                "end": 1527
              },
              "expression": false,
              "start": 1496,
              "end": 1527
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1475,
            "end": 1527
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiplicationAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 1533,
              "end": 1557
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
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1570,
                          "end": 1574
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1575,
                          "end": 1576
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1570,
                        "end": 1576
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1580,
                        "end": 1581
                      },
                      "start": 1570,
                      "end": 1581
                    },
                    "directive": null,
                    "start": 1570,
                    "end": 1582
                  }
                ],
                "start": 1560,
                "end": 1588
              },
              "expression": false,
              "start": 1557,
              "end": 1588
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1533,
            "end": 1588
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "divisionAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 1594,
              "end": 1612
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
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1625,
                          "end": 1629
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1630,
                          "end": 1631
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1625,
                        "end": 1631
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1635,
                        "end": 1636
                      },
                      "start": 1625,
                      "end": 1636
                    },
                    "directive": null,
                    "start": 1625,
                    "end": 1637
                  }
                ],
                "start": 1615,
                "end": 1643
              },
              "expression": false,
              "start": 1612,
              "end": 1643
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1594,
            "end": 1643
          }
        ],
        "start": 1251,
        "end": 1645
      },
      "abstract": false,
      "declare": false,
      "start": 1230,
      "end": 1645
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
            "name": "numberOrObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1652,
            "end": 1666
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberOrObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 1673,
              "end": 1687
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1669,
            "end": 1689
          },
          "definite": false,
          "start": 1652,
          "end": 1689
        }
      ],
      "declare": false,
      "start": 1646,
      "end": 1690
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1691,
            "end": 1705
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1706,
            "end": 1707
          },
          "optional": false,
          "computed": false,
          "start": 1691,
          "end": 1707
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1711,
          "end": 1712
        },
        "start": 1691,
        "end": 1712
      },
      "directive": null,
      "start": 1691,
      "end": 1713
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1714,
            "end": 1728
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1729,
            "end": 1730
          },
          "optional": false,
          "computed": false,
          "start": 1714,
          "end": 1730
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1734,
          "end": 1735
        },
        "start": 1714,
        "end": 1735
      },
      "directive": null,
      "start": 1714,
      "end": 1736
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1737,
            "end": 1751
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1752,
            "end": 1753
          },
          "optional": false,
          "computed": false,
          "start": 1737,
          "end": 1753
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1757,
          "end": 1758
        },
        "start": 1737,
        "end": 1758
      },
      "directive": null,
      "start": 1737,
      "end": 1759
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1760,
            "end": 1774
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1775,
            "end": 1776
          },
          "optional": false,
          "computed": false,
          "start": 1760,
          "end": 1776
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1780,
          "end": 1781
        },
        "start": 1760,
        "end": 1781
      },
      "directive": null,
      "start": 1760,
      "end": 1782
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1782
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberOrUndefined",
    "start": 6,
    "end": 23,
    "range": [
      6,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 30,
    "end": 32,
    "range": [
      30,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 43,
    "end": 52,
    "range": [
      43,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 58,
    "end": 61,
    "range": [
      58,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 67,
    "end": 73,
    "range": [
      67,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 76,
    "end": 82,
    "range": [
      76,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 83,
    "end": 87,
    "range": [
      83,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 88,
    "end": 90,
    "range": [
      88,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 109,
    "end": 114,
    "range": [
      109,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 116,
    "end": 122,
    "range": [
      116,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 125,
    "end": 134,
    "range": [
      125,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 138,
    "end": 142,
    "range": [
      138,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 143,
    "end": 145,
    "range": [
      143,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 148,
    "end": 153,
    "range": [
      148,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "additionAssignment",
    "start": 162,
    "end": 180,
    "range": [
      162,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 193,
    "end": 197,
    "range": [
      193,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 200,
    "end": 202,
    "range": [
      200,
      202
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "subtractionAssignment",
    "start": 217,
    "end": 238,
    "range": [
      217,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 251,
    "end": 255,
    "range": [
      251,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 258,
    "end": 260,
    "range": [
      258,
      260
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "multiplicationAssignment",
    "start": 275,
    "end": 299,
    "range": [
      275,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 312,
    "end": 316,
    "range": [
      312,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 319,
    "end": 321,
    "range": [
      319,
      321
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "divisionAssignment",
    "start": 336,
    "end": 354,
    "range": [
      336,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 367,
    "end": 371,
    "range": [
      367,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 374,
    "end": 376,
    "range": [
      374,
      376
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 388,
    "end": 393,
    "range": [
      388,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrUndefined",
    "start": 394,
    "end": 411,
    "range": [
      394,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 414,
    "end": 417,
    "range": [
      414,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberOrUndefined",
    "start": 418,
    "end": 435,
    "range": [
      418,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrUndefined",
    "start": 439,
    "end": 456,
    "range": [
      439,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 459,
    "end": 461,
    "range": [
      459,
      461
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrUndefined",
    "start": 465,
    "end": 482,
    "range": [
      465,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 485,
    "end": 487,
    "range": [
      485,
      487
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrUndefined",
    "start": 491,
    "end": 508,
    "range": [
      491,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 511,
    "end": 513,
    "range": [
      511,
      513
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 514,
    "end": 515,
    "range": [
      514,
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
    "type": "Identifier",
    "value": "numberOrUndefined",
    "start": 517,
    "end": 534,
    "range": [
      517,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 537,
    "end": 539,
    "range": [
      537,
      539
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 544,
    "end": 549,
    "range": [
      544,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberOrString",
    "start": 550,
    "end": 564,
    "range": [
      550,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 571,
    "end": 573,
    "range": [
      571,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 575,
    "end": 581,
    "range": [
      575,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 584,
    "end": 590,
    "range": [
      584,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 600,
    "end": 603,
    "range": [
      600,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 609,
    "end": 615,
    "range": [
      609,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 618,
    "end": 624,
    "range": [
      618,
      624
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 625,
    "end": 631,
    "range": [
      625,
      631
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 632,
    "end": 636,
    "range": [
      632,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 637,
    "end": 639,
    "range": [
      637,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 640,
    "end": 643,
    "range": [
      640,
      643
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 644,
    "end": 652,
    "range": [
      644,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 655,
    "end": 659,
    "range": [
      655,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 660,
    "end": 662,
    "range": [
      660,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 665,
    "end": 671,
    "range": [
      665,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 672,
    "end": 676,
    "range": [
      672,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 677,
    "end": 679,
    "range": [
      677,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 688,
    "end": 691,
    "range": [
      688,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 694,
    "end": 699,
    "range": [
      694,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 701,
    "end": 707,
    "range": [
      701,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 710,
    "end": 716,
    "range": [
      710,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 720,
    "end": 724,
    "range": [
      720,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 725,
    "end": 727,
    "range": [
      725,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 730,
    "end": 735,
    "range": [
      730,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "additionAssignmentNumber",
    "start": 744,
    "end": 768,
    "range": [
      744,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 781,
    "end": 785,
    "range": [
      781,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 788,
    "end": 790,
    "range": [
      788,
      790
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "additionAssignmentString",
    "start": 804,
    "end": 828,
    "range": [
      804,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 841,
    "end": 845,
    "range": [
      841,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 848,
    "end": 850,
    "range": [
      848,
      850
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 851,
    "end": 854,
    "range": [
      851,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "subtractionAssignment",
    "start": 867,
    "end": 888,
    "range": [
      867,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 901,
    "end": 905,
    "range": [
      901,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 908,
    "end": 910,
    "range": [
      908,
      910
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "multiplicationAssignment",
    "start": 925,
    "end": 949,
    "range": [
      925,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 962,
    "end": 966,
    "range": [
      962,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 969,
    "end": 971,
    "range": [
      969,
      971
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "divisionAssignment",
    "start": 986,
    "end": 1004,
    "range": [
      986,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1017,
    "end": 1021,
    "range": [
      1017,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 1024,
    "end": 1026,
    "range": [
      1024,
      1026
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1038,
    "end": 1043,
    "range": [
      1038,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrString",
    "start": 1044,
    "end": 1058,
    "range": [
      1044,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1061,
    "end": 1064,
    "range": [
      1061,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberOrString",
    "start": 1065,
    "end": 1079,
    "range": [
      1065,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrString",
    "start": 1083,
    "end": 1097,
    "range": [
      1083,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1100,
    "end": 1102,
    "range": [
      1100,
      1102
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrString",
    "start": 1106,
    "end": 1120,
    "range": [
      1106,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1123,
    "end": 1125,
    "range": [
      1123,
      1125
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1126,
    "end": 1129,
    "range": [
      1126,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrString",
    "start": 1131,
    "end": 1145,
    "range": [
      1131,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 1148,
    "end": 1150,
    "range": [
      1148,
      1150
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrString",
    "start": 1154,
    "end": 1168,
    "range": [
      1154,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 1171,
    "end": 1173,
    "range": [
      1171,
      1173
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrString",
    "start": 1177,
    "end": 1191,
    "range": [
      1177,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 1194,
    "end": 1196,
    "range": [
      1194,
      1196
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1201,
    "end": 1205,
    "range": [
      1201,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1206,
    "end": 1209,
    "range": [
      1206,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1214,
    "end": 1217,
    "range": [
      1214,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1219,
    "end": 1225,
    "range": [
      1219,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1230,
    "end": 1235,
    "range": [
      1230,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberOrObject",
    "start": 1236,
    "end": 1250,
    "range": [
      1236,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 1257,
    "end": 1259,
    "range": [
      1257,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1261,
    "end": 1267,
    "range": [
      1261,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1270,
    "end": 1273,
    "range": [
      1270,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1283,
    "end": 1286,
    "range": [
      1283,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1292,
    "end": 1298,
    "range": [
      1292,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1301,
    "end": 1307,
    "range": [
      1301,
      1307
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1308,
    "end": 1314,
    "range": [
      1308,
      1314
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1315,
    "end": 1319,
    "range": [
      1315,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 1320,
    "end": 1322,
    "range": [
      1320,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1323,
    "end": 1326,
    "range": [
      1323,
      1326
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 1327,
    "end": 1335,
    "range": [
      1327,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1338,
    "end": 1342,
    "range": [
      1338,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 1343,
    "end": 1345,
    "range": [
      1343,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1348,
    "end": 1352,
    "range": [
      1348,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 1353,
    "end": 1355,
    "range": [
      1353,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1356,
    "end": 1359,
    "range": [
      1356,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1367,
    "end": 1370,
    "range": [
      1367,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1373,
    "end": 1378,
    "range": [
      1373,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1380,
    "end": 1386,
    "range": [
      1380,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1389,
    "end": 1392,
    "range": [
      1389,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1396,
    "end": 1400,
    "range": [
      1396,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "_x",
    "start": 1401,
    "end": 1403,
    "range": [
      1401,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1406,
    "end": 1411,
    "range": [
      1406,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "additionAssignment",
    "start": 1420,
    "end": 1438,
    "range": [
      1420,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1451,
    "end": 1455,
    "range": [
      1451,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1458,
    "end": 1460,
    "range": [
      1458,
      1460
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Identifier",
    "value": "subtractionAssignment",
    "start": 1475,
    "end": 1496,
    "range": [
      1475,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1509,
    "end": 1513,
    "range": [
      1509,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 1516,
    "end": 1518,
    "range": [
      1516,
      1518
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Identifier",
    "value": "multiplicationAssignment",
    "start": 1533,
    "end": 1557,
    "range": [
      1533,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1570,
    "end": 1574,
    "range": [
      1570,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 1577,
    "end": 1579,
    "range": [
      1577,
      1579
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "divisionAssignment",
    "start": 1594,
    "end": 1612,
    "range": [
      1594,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1625,
    "end": 1629,
    "range": [
      1625,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 1632,
    "end": 1634,
    "range": [
      1632,
      1634
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1646,
    "end": 1651,
    "range": [
      1646,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrObject",
    "start": 1652,
    "end": 1666,
    "range": [
      1652,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1669,
    "end": 1672,
    "range": [
      1669,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberOrObject",
    "start": 1673,
    "end": 1687,
    "range": [
      1673,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrObject",
    "start": 1691,
    "end": 1705,
    "range": [
      1691,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1708,
    "end": 1710,
    "range": [
      1708,
      1710
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrObject",
    "start": 1714,
    "end": 1728,
    "range": [
      1714,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 1731,
    "end": 1733,
    "range": [
      1731,
      1733
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrObject",
    "start": 1737,
    "end": 1751,
    "range": [
      1737,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 1754,
    "end": 1756,
    "range": [
      1754,
      1756
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOrObject",
    "start": 1760,
    "end": 1774,
    "range": [
      1760,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 1777,
    "end": 1779,
    "range": [
      1777,
      1779
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  }
]
```
