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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "fieldFunc",
              "start": 14,
              "end": 24
            },
            "typeAnnotation": null,
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
                          "start": 40,
                          "end": 44
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 45,
                          "end": 46
                        },
                        "optional": false,
                        "computed": false,
                        "start": 40,
                        "end": 46
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 49,
                        "end": 51
                      },
                      "start": 40,
                      "end": 51
                    },
                    "directive": null,
                    "start": 40,
                    "end": 52
                  }
                ],
                "start": 38,
                "end": 54
              },
              "expression": false,
              "start": 27,
              "end": 54
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 55
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fieldFunc2",
              "start": 60,
              "end": 71
            },
            "typeAnnotation": null,
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
                  "start": 83,
                  "end": 84
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
                    "start": 89,
                    "end": 90
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 86,
                  "end": 90
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 92,
                "end": 94
              },
              "expression": false,
              "start": 74,
              "end": 94
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 60,
            "end": 95
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
              "start": 100,
              "end": 101
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 104,
              "end": 105
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 100,
            "end": 106
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
              "start": 111,
              "end": 115
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
                          "start": 128,
                          "end": 132
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc",
                          "start": 133,
                          "end": 143
                        },
                        "optional": false,
                        "computed": false,
                        "start": 128,
                        "end": 143
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 128,
                      "end": 145
                    },
                    "directive": null,
                    "start": 128,
                    "end": 146
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 155,
                            "end": 159
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "fieldFunc",
                            "start": 160,
                            "end": 170
                          },
                          "optional": false,
                          "computed": false,
                          "start": 155,
                          "end": 170
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true,
                        "start": 155,
                        "end": 174
                      },
                      "start": 155,
                      "end": 174
                    },
                    "directive": null,
                    "start": 155,
                    "end": 175
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
                          "start": 190,
                          "end": 194
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 197,
                            "end": 201
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "fieldFunc",
                            "start": 202,
                            "end": 212
                          },
                          "optional": false,
                          "computed": false,
                          "start": 197,
                          "end": 212
                        },
                        "definite": false,
                        "start": 190,
                        "end": 212
                      }
                    ],
                    "declare": false,
                    "start": 184,
                    "end": 213
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
                        "start": 222,
                        "end": 226
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 222,
                      "end": 228
                    },
                    "directive": null,
                    "start": 222,
                    "end": 229
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 242,
                          "end": 246
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc",
                          "start": 247,
                          "end": 257
                        },
                        "optional": false,
                        "computed": false,
                        "start": 242,
                        "end": 257
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 238,
                      "end": 259
                    },
                    "directive": null,
                    "start": 238,
                    "end": 260
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
                          "start": 276,
                          "end": 279
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 284,
                              "end": 285
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 287,
                              "end": 288
                            }
                          ],
                          "start": 282,
                          "end": 290
                        },
                        "definite": false,
                        "start": 276,
                        "end": 290
                      }
                    ],
                    "declare": false,
                    "start": 270,
                    "end": 291
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 300,
                          "end": 304
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc2",
                          "start": 305,
                          "end": 316
                        },
                        "optional": false,
                        "computed": false,
                        "start": 300,
                        "end": 316
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 317,
                          "end": 318
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 323,
                            "end": 326
                          },
                          "start": 320,
                          "end": 326
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 328,
                          "end": 329
                        }
                      ],
                      "optional": false,
                      "start": 300,
                      "end": 330
                    },
                    "directive": null,
                    "start": 300,
                    "end": 331
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
                          "start": 346,
                          "end": 347
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 354,
                              "end": 358
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "fieldFunc2",
                              "start": 359,
                              "end": 370
                            },
                            "optional": false,
                            "computed": false,
                            "start": 354,
                            "end": 370
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 371,
                              "end": 372
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 377,
                                "end": 380
                              },
                              "start": 374,
                              "end": 380
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 382,
                              "end": 383
                            }
                          ],
                          "start": 350,
                          "end": 384
                        },
                        "definite": false,
                        "start": 346,
                        "end": 384
                      }
                    ],
                    "declare": false,
                    "start": 340,
                    "end": 385
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
                          "start": 400,
                          "end": 403
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 406,
                              "end": 410
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "fieldFunc2",
                              "start": 411,
                              "end": 422
                            },
                            "optional": false,
                            "computed": false,
                            "start": 406,
                            "end": 422
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
                                "start": 422,
                                "end": 429
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false,
                                "start": 430,
                                "end": 439
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true,
                                "start": 440,
                                "end": 446
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 429,
                                "end": 430
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 439,
                                "end": 440
                              }
                            ],
                            "start": 422,
                            "end": 446
                          },
                          "start": 406,
                          "end": 446
                        },
                        "definite": false,
                        "start": 400,
                        "end": 446
                      }
                    ],
                    "declare": false,
                    "start": 394,
                    "end": 447
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
                              "type": "ThisExpression",
                              "start": 456,
                              "end": 460
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 461,
                              "end": 472
                            },
                            "optional": false,
                            "computed": false,
                            "start": 456,
                            "end": 472
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 456,
                          "end": 474
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc2",
                          "start": 475,
                          "end": 486
                        },
                        "optional": false,
                        "computed": false,
                        "start": 456,
                        "end": 486
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
                            "start": 486,
                            "end": 493
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 494,
                            "end": 500
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 501,
                            "end": 503
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 493,
                            "end": 494
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 500,
                            "end": 501
                          }
                        ],
                        "start": 486,
                        "end": 503
                      },
                      "start": 456,
                      "end": 503
                    },
                    "directive": null,
                    "start": 456,
                    "end": 504
                  }
                ],
                "start": 118,
                "end": 510
              },
              "expression": false,
              "start": 115,
              "end": 510
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 111,
            "end": 510
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 526
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 542,
                        "end": 543
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 538,
                      "end": 545
                    },
                    "start": 531,
                    "end": 546
                  }
                ],
                "start": 529,
                "end": 548
              },
              "expression": false,
              "start": 526,
              "end": 548
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 515,
            "end": 548
          }
        ],
        "start": 8,
        "end": 550
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 550
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 550
}
```
