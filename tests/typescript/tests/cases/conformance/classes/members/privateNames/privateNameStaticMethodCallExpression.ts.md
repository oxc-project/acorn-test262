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
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
              "name": "method",
              "start": 22,
              "end": 29
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
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 34,
                          "end": 38
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 39,
                          "end": 40
                        },
                        "optional": false,
                        "computed": false,
                        "start": 34,
                        "end": 40
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 43,
                        "end": 45
                      },
                      "start": 34,
                      "end": 45
                    },
                    "directive": null,
                    "start": 34,
                    "end": 46
                  }
                ],
                "start": 32,
                "end": 48
              },
              "expression": false,
              "start": 29,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method2",
              "start": 61,
              "end": 69
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
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 71
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 77
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 73,
                  "end": 77
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 79,
                "end": 81
              },
              "expression": false,
              "start": 69,
              "end": 81
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 54,
            "end": 81
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
              "start": 94,
              "end": 95
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 98,
              "end": 99
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 87,
            "end": 100
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 109
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
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 124
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 125,
                          "end": 132
                        },
                        "optional": false,
                        "computed": false,
                        "start": 122,
                        "end": 132
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 122,
                      "end": 134
                    },
                    "directive": null,
                    "start": 122,
                    "end": 135
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
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 154
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 159
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 160,
                            "end": 167
                          },
                          "optional": false,
                          "computed": false,
                          "start": 157,
                          "end": 167
                        },
                        "definite": false,
                        "start": 150,
                        "end": 167
                      }
                    ],
                    "declare": false,
                    "start": 144,
                    "end": 168
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 181
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 177,
                      "end": 183
                    },
                    "directive": null,
                    "start": 177,
                    "end": 184
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 199
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 200,
                          "end": 207
                        },
                        "optional": false,
                        "computed": false,
                        "start": 197,
                        "end": 207
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 193,
                      "end": 209
                    },
                    "directive": null,
                    "start": 193,
                    "end": 210
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
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 226,
                          "end": 229
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 234,
                              "end": 235
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 237,
                              "end": 238
                            }
                          ],
                          "start": 232,
                          "end": 240
                        },
                        "definite": false,
                        "start": 226,
                        "end": 240
                      }
                    ],
                    "declare": false,
                    "start": 220,
                    "end": 241
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
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 252
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 253,
                          "end": 261
                        },
                        "optional": false,
                        "computed": false,
                        "start": 250,
                        "end": 261
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 262,
                          "end": 263
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 268,
                            "end": 271
                          },
                          "start": 265,
                          "end": 271
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 273,
                          "end": 274
                        }
                      ],
                      "optional": false,
                      "start": 250,
                      "end": 275
                    },
                    "directive": null,
                    "start": 250,
                    "end": 276
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 292,
                          "end": 293
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 300,
                              "end": 302
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 303,
                              "end": 311
                            },
                            "optional": false,
                            "computed": false,
                            "start": 300,
                            "end": 311
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 312,
                              "end": 313
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 318,
                                "end": 321
                              },
                              "start": 315,
                              "end": 321
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 323,
                              "end": 324
                            }
                          ],
                          "start": 296,
                          "end": 325
                        },
                        "definite": false,
                        "start": 292,
                        "end": 325
                      }
                    ],
                    "declare": false,
                    "start": 286,
                    "end": 326
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
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 353
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 356,
                              "end": 358
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 359,
                              "end": 367
                            },
                            "optional": false,
                            "computed": false,
                            "start": 356,
                            "end": 367
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "head",
                                  "cooked": "head"
                                },
                                "tail": false,
                                "start": 367,
                                "end": 374
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false,
                                "start": 375,
                                "end": 384
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true,
                                "start": 385,
                                "end": 391
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 374,
                                "end": 375
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 384,
                                "end": 385
                              }
                            ],
                            "start": 367,
                            "end": 391
                          },
                          "start": 356,
                          "end": 391
                        },
                        "definite": false,
                        "start": 350,
                        "end": 391
                      }
                    ],
                    "declare": false,
                    "start": 344,
                    "end": 392
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 401,
                              "end": 403
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 404,
                              "end": 412
                            },
                            "optional": false,
                            "computed": false,
                            "start": 401,
                            "end": 412
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 401,
                          "end": 414
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 415,
                          "end": 423
                        },
                        "optional": false,
                        "computed": false,
                        "start": 401,
                        "end": 423
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "test",
                              "cooked": "test"
                            },
                            "tail": false,
                            "start": 423,
                            "end": 430
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 431,
                            "end": 437
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 438,
                            "end": 440
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 430,
                            "end": 431
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 437,
                            "end": 438
                          }
                        ],
                        "start": 423,
                        "end": 440
                      },
                      "start": 401,
                      "end": 440
                    },
                    "directive": null,
                    "start": 401,
                    "end": 441
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 451,
                              "end": 453
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 454,
                              "end": 462
                            },
                            "optional": false,
                            "computed": false,
                            "start": 451,
                            "end": 462
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 451,
                          "end": 464
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method2",
                          "start": 465,
                          "end": 473
                        },
                        "optional": false,
                        "computed": false,
                        "start": 451,
                        "end": 473
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 474,
                          "end": 475
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 480,
                            "end": 483
                          },
                          "start": 477,
                          "end": 483
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 485,
                          "end": 486
                        }
                      ],
                      "optional": false,
                      "start": 451,
                      "end": 487
                    },
                    "directive": null,
                    "start": 451,
                    "end": 488
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
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 504,
                          "end": 506
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 514,
                                  "end": 516
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 517,
                                  "end": 525
                                },
                                "optional": false,
                                "computed": false,
                                "start": 514,
                                "end": 525
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 514,
                              "end": 527
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 528,
                              "end": 536
                            },
                            "optional": false,
                            "computed": false,
                            "start": 514,
                            "end": 536
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 538,
                              "end": 539
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 544,
                                "end": 547
                              },
                              "start": 541,
                              "end": 547
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 549,
                              "end": 550
                            }
                          ],
                          "start": 509,
                          "end": 551
                        },
                        "definite": false,
                        "start": 504,
                        "end": 551
                      }
                    ],
                    "declare": false,
                    "start": 498,
                    "end": 552
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
                          "name": "str2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 576,
                          "end": 580
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 583,
                                  "end": 585
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 586,
                                  "end": 594
                                },
                                "optional": false,
                                "computed": false,
                                "start": 583,
                                "end": 594
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 583,
                              "end": 596
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "method2",
                              "start": 597,
                              "end": 605
                            },
                            "optional": false,
                            "computed": false,
                            "start": 583,
                            "end": 605
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "head",
                                  "cooked": "head"
                                },
                                "tail": false,
                                "start": 605,
                                "end": 612
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false,
                                "start": 613,
                                "end": 622
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true,
                                "start": 623,
                                "end": 629
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 612,
                                "end": 613
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 622,
                                "end": 623
                              }
                            ],
                            "start": 605,
                            "end": 629
                          },
                          "start": 583,
                          "end": 629
                        },
                        "definite": false,
                        "start": 576,
                        "end": 629
                      }
                    ],
                    "declare": false,
                    "start": 570,
                    "end": 630
                  }
                ],
                "start": 112,
                "end": 636
              },
              "expression": false,
              "start": 109,
              "end": 636
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 105,
            "end": 636
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 656
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 668,
                      "end": 670
                    },
                    "start": 661,
                    "end": 671
                  }
                ],
                "start": 659,
                "end": 673
              },
              "expression": false,
              "start": 656,
              "end": 673
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 641,
            "end": 673
          }
        ],
        "start": 9,
        "end": 675
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 675
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 675
}
```
