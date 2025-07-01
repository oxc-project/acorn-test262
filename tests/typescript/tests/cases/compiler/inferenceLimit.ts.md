__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 34
          },
          "start": 21,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mymodule",
        "raw": "\"./mymodule\"",
        "start": 40,
        "end": 52
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 14,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BrokenClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 79
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 96
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
                  "body": [],
                  "start": 99,
                  "end": 101
                },
                "expression": false,
                "start": 96,
                "end": 101
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 85,
              "end": 101
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "brokenMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 124
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
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 132,
                        "end": 138
                      },
                      "start": 130,
                      "end": 138
                    },
                    "start": 125,
                    "end": 138
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      },
                      "start": 145,
                      "end": 153
                    },
                    "start": 140,
                    "end": 153
                  }
                ],
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
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 170,
                          "end": 177
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 178,
                                "end": 183
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "MyModule",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 184,
                                        "end": 192
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "MyModel",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 193,
                                        "end": 200
                                      },
                                      "start": 184,
                                      "end": 200
                                    },
                                    "typeArguments": null,
                                    "start": 184,
                                    "end": 200
                                  }
                                ],
                                "start": 183,
                                "end": 201
                              },
                              "start": 178,
                              "end": 201
                            }
                          ],
                          "start": 177,
                          "end": 202
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 204,
                                "end": 211
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "reject",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 213,
                                "end": 219
                              }
                            ],
                            "returnType": null,
                            "body": {
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
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Array",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 243,
                                              "end": 248
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "TSQualifiedName",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "MyModule",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 249,
                                                      "end": 257
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "MyModel",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 258,
                                                      "end": 265
                                                    },
                                                    "start": 249,
                                                    "end": 265
                                                  },
                                                  "typeArguments": null,
                                                  "start": 249,
                                                  "end": 265
                                                }
                                              ],
                                              "start": 248,
                                              "end": 266
                                            },
                                            "start": 243,
                                            "end": 266
                                          },
                                          "start": 241,
                                          "end": 266
                                        },
                                        "start": 235,
                                        "end": 266
                                      },
                                      "init": {
                                        "type": "ArrayExpression",
                                        "elements": [],
                                        "start": 269,
                                        "end": 271
                                      },
                                      "definite": false,
                                      "start": 235,
                                      "end": 271
                                    }
                                  ],
                                  "declare": false,
                                  "start": 231,
                                  "end": 272
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
                                        "name": "populateItems",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 282,
                                        "end": 295
                                      },
                                      "init": {
                                        "type": "ArrowFunctionExpression",
                                        "expression": false,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "order",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 299,
                                            "end": 304
                                          }
                                        ],
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
                                                  "name": "Promise",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 328,
                                                  "end": 335
                                                },
                                                "typeArguments": null,
                                                "arguments": [
                                                  {
                                                    "type": "ArrowFunctionExpression",
                                                    "expression": false,
                                                    "async": false,
                                                    "typeParameters": null,
                                                    "params": [
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "resolve",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 337,
                                                        "end": 344
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "reject",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 346,
                                                        "end": 352
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
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                  "type": "MemberExpression",
                                                                  "object": {
                                                                    "type": "ThisExpression",
                                                                    "start": 367,
                                                                    "end": 371
                                                                  },
                                                                  "property": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "doStuff",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 372,
                                                                    "end": 379
                                                                  },
                                                                  "optional": false,
                                                                  "computed": false,
                                                                  "start": 367,
                                                                  "end": 379
                                                                },
                                                                "typeArguments": null,
                                                                "arguments": [
                                                                  {
                                                                    "type": "MemberExpression",
                                                                    "object": {
                                                                      "type": "Identifier",
                                                                      "decorators": [],
                                                                      "name": "order",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 380,
                                                                      "end": 385
                                                                    },
                                                                    "property": {
                                                                      "type": "Identifier",
                                                                      "decorators": [],
                                                                      "name": "id",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 386,
                                                                      "end": 388
                                                                    },
                                                                    "optional": false,
                                                                    "computed": false,
                                                                    "start": 380,
                                                                    "end": 388
                                                                  }
                                                                ],
                                                                "optional": false,
                                                                "start": 367,
                                                                "end": 389
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "then",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 401,
                                                                "end": 405
                                                              },
                                                              "optional": false,
                                                              "computed": false,
                                                              "start": 367,
                                                              "end": 405
                                                            },
                                                            "typeArguments": null,
                                                            "arguments": [
                                                              {
                                                                "type": "ArrowFunctionExpression",
                                                                "expression": false,
                                                                "async": false,
                                                                "typeParameters": null,
                                                                "params": [
                                                                  {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "items",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 407,
                                                                    "end": 412
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
                                                                            "type": "Identifier",
                                                                            "decorators": [],
                                                                            "name": "order",
                                                                            "optional": false,
                                                                            "typeAnnotation": null,
                                                                            "start": 431,
                                                                            "end": 436
                                                                          },
                                                                          "property": {
                                                                            "type": "Identifier",
                                                                            "decorators": [],
                                                                            "name": "items",
                                                                            "optional": false,
                                                                            "typeAnnotation": null,
                                                                            "start": 437,
                                                                            "end": 442
                                                                          },
                                                                          "optional": false,
                                                                          "computed": false,
                                                                          "start": 431,
                                                                          "end": 442
                                                                        },
                                                                        "right": {
                                                                          "type": "Identifier",
                                                                          "decorators": [],
                                                                          "name": "items",
                                                                          "optional": false,
                                                                          "typeAnnotation": null,
                                                                          "start": 445,
                                                                          "end": 450
                                                                        },
                                                                        "start": 431,
                                                                        "end": 450
                                                                      },
                                                                      "directive": null,
                                                                      "start": 431,
                                                                      "end": 451
                                                                    },
                                                                    {
                                                                      "type": "ExpressionStatement",
                                                                      "expression": {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                          "type": "Identifier",
                                                                          "decorators": [],
                                                                          "name": "resolve",
                                                                          "optional": false,
                                                                          "typeAnnotation": null,
                                                                          "start": 464,
                                                                          "end": 471
                                                                        },
                                                                        "typeArguments": null,
                                                                        "arguments": [
                                                                          {
                                                                            "type": "Identifier",
                                                                            "decorators": [],
                                                                            "name": "order",
                                                                            "optional": false,
                                                                            "typeAnnotation": null,
                                                                            "start": 472,
                                                                            "end": 477
                                                                          }
                                                                        ],
                                                                        "optional": false,
                                                                        "start": 464,
                                                                        "end": 478
                                                                      },
                                                                      "directive": null,
                                                                      "start": 464,
                                                                      "end": 479
                                                                    }
                                                                  ],
                                                                  "start": 417,
                                                                  "end": 491
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "start": 406,
                                                                "end": 491
                                                              }
                                                            ],
                                                            "optional": false,
                                                            "start": 367,
                                                            "end": 492
                                                          },
                                                          "directive": null,
                                                          "start": 367,
                                                          "end": 493
                                                        }
                                                      ],
                                                      "start": 357,
                                                      "end": 501
                                                    },
                                                    "id": null,
                                                    "generator": false,
                                                    "start": 336,
                                                    "end": 501
                                                  }
                                                ],
                                                "start": 324,
                                                "end": 502
                                              },
                                              "start": 317,
                                              "end": 503
                                            }
                                          ],
                                          "start": 309,
                                          "end": 509
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 298,
                                        "end": 509
                                      },
                                      "definite": false,
                                      "start": 282,
                                      "end": 509
                                    }
                                  ],
                                  "declare": false,
                                  "start": 278,
                                  "end": 510
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
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
                                            "name": "Promise",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 523,
                                            "end": 530
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "all",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 531,
                                            "end": 534
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 523,
                                          "end": 534
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "result",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 535,
                                                "end": 541
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "map",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 542,
                                                "end": 545
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 535,
                                              "end": 545
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "populateItems",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 546,
                                                "end": 559
                                              }
                                            ],
                                            "optional": false,
                                            "start": 535,
                                            "end": 560
                                          }
                                        ],
                                        "optional": false,
                                        "start": 523,
                                        "end": 561
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "then",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 569,
                                        "end": 573
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 523,
                                      "end": 573
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ArrowFunctionExpression",
                                        "expression": false,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "orders",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Array",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 583,
                                                  "end": 588
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "TSQualifiedName",
                                                        "left": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "MyModule",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 589,
                                                          "end": 597
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "MyModel",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 598,
                                                          "end": 605
                                                        },
                                                        "start": 589,
                                                        "end": 605
                                                      },
                                                      "typeArguments": null,
                                                      "start": 589,
                                                      "end": 605
                                                    }
                                                  ],
                                                  "start": 588,
                                                  "end": 606
                                                },
                                                "start": 583,
                                                "end": 606
                                              },
                                              "start": 581,
                                              "end": 606
                                            },
                                            "start": 575,
                                            "end": 606
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
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "resolve",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 621,
                                                  "end": 628
                                                },
                                                "typeArguments": null,
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "orders",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 629,
                                                    "end": 635
                                                  }
                                                ],
                                                "optional": false,
                                                "start": 621,
                                                "end": 636
                                              },
                                              "directive": null,
                                              "start": 621,
                                              "end": 637
                                            }
                                          ],
                                          "start": 611,
                                          "end": 645
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 574,
                                        "end": 645
                                      }
                                    ],
                                    "optional": false,
                                    "start": 523,
                                    "end": 646
                                  },
                                  "start": 516,
                                  "end": 647
                                }
                              ],
                              "start": 224,
                              "end": 653
                            },
                            "id": null,
                            "generator": false,
                            "start": 203,
                            "end": 653
                          }
                        ],
                        "start": 166,
                        "end": 654
                      },
                      "start": 159,
                      "end": 655
                    }
                  ],
                  "start": 155,
                  "end": 659
                },
                "expression": false,
                "start": 124,
                "end": 659
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 105,
              "end": 659
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "doStuff",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 683
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": true,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 688,
                        "end": 694
                      },
                      "start": 686,
                      "end": 694
                    },
                    "start": 684,
                    "end": 694
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": null,
                      "start": 702,
                      "end": 709
                    }
                  ],
                  "start": 696,
                  "end": 713
                },
                "expression": false,
                "start": 683,
                "end": 713
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 663,
              "end": 713
            }
          ],
          "start": 80,
          "end": 715
        },
        "abstract": false,
        "declare": false,
        "start": 62,
        "end": 715
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 55,
      "end": 715
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 716
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyModel",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 24
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 33
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 35,
                  "end": 41
                },
                "start": 33,
                "end": 41
              },
              "accessibility": null,
              "static": false,
              "start": 31,
              "end": 42
            }
          ],
          "start": 25,
          "end": 44
        },
        "declare": false,
        "start": 7,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
