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
