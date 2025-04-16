__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 716,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "ImportDeclaration",
      "start": 14,
      "end": 53,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 21,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 26,
            "end": 34,
            "name": "MyModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 52,
        "value": "./mymodule",
        "raw": "\"./mymodule\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 715,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 62,
        "end": 715,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 79,
          "name": "BrokenClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 80,
          "end": 715,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 85,
              "end": 101,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 85,
                "end": 96,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 96,
                "end": 101,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 99,
                  "end": 101,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 105,
              "end": 659,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 112,
                "end": 124,
                "name": "brokenMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 124,
                "end": 659,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 125,
                    "end": 138,
                    "name": "field",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 130,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 132,
                        "end": 138
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 140,
                    "end": 153,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 155,
                  "end": 659,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 159,
                      "end": 655,
                      "argument": {
                        "type": "NewExpression",
                        "start": 166,
                        "end": 654,
                        "callee": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 177,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 203,
                            "end": 653,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 204,
                                "end": 211,
                                "name": "resolve",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 213,
                                "end": 219,
                                "name": "reject",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 224,
                              "end": 653,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 231,
                                  "end": 272,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 235,
                                      "end": 271,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 235,
                                        "end": 266,
                                        "name": "result",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 241,
                                          "end": 266,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 243,
                                            "end": 266,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 243,
                                              "end": 248,
                                              "name": "Array",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "start": 248,
                                              "end": 266,
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "start": 249,
                                                  "end": 265,
                                                  "typeName": {
                                                    "type": "TSQualifiedName",
                                                    "start": 249,
                                                    "end": 265,
                                                    "left": {
                                                      "type": "Identifier",
                                                      "start": 249,
                                                      "end": 257,
                                                      "name": "MyModule",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "start": 258,
                                                      "end": 265,
                                                      "name": "MyModel",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    }
                                                  },
                                                  "typeArguments": null
                                                }
                                              ]
                                            }
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "ArrayExpression",
                                        "start": 269,
                                        "end": 271,
                                        "elements": []
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "let",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 278,
                                  "end": 510,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 282,
                                      "end": 509,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 282,
                                        "end": 295,
                                        "name": "populateItems",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "ArrowFunctionExpression",
                                        "start": 298,
                                        "end": 509,
                                        "id": null,
                                        "expression": false,
                                        "generator": false,
                                        "async": false,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "start": 299,
                                            "end": 304,
                                            "name": "order",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        ],
                                        "body": {
                                          "type": "BlockStatement",
                                          "start": 309,
                                          "end": 509,
                                          "body": [
                                            {
                                              "type": "ReturnStatement",
                                              "start": 317,
                                              "end": 503,
                                              "argument": {
                                                "type": "NewExpression",
                                                "start": 324,
                                                "end": 502,
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 328,
                                                  "end": 335,
                                                  "name": "Promise",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "ArrowFunctionExpression",
                                                    "start": 336,
                                                    "end": 501,
                                                    "id": null,
                                                    "expression": false,
                                                    "generator": false,
                                                    "async": false,
                                                    "params": [
                                                      {
                                                        "type": "Identifier",
                                                        "start": 337,
                                                        "end": 344,
                                                        "name": "resolve",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "start": 346,
                                                        "end": 352,
                                                        "name": "reject",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      }
                                                    ],
                                                    "body": {
                                                      "type": "BlockStatement",
                                                      "start": 357,
                                                      "end": 501,
                                                      "body": [
                                                        {
                                                          "type": "ExpressionStatement",
                                                          "start": 367,
                                                          "end": 493,
                                                          "expression": {
                                                            "type": "CallExpression",
                                                            "start": 367,
                                                            "end": 492,
                                                            "callee": {
                                                              "type": "MemberExpression",
                                                              "start": 367,
                                                              "end": 405,
                                                              "object": {
                                                                "type": "CallExpression",
                                                                "start": 367,
                                                                "end": 389,
                                                                "callee": {
                                                                  "type": "MemberExpression",
                                                                  "start": 367,
                                                                  "end": 379,
                                                                  "object": {
                                                                    "type": "ThisExpression",
                                                                    "start": 367,
                                                                    "end": 371
                                                                  },
                                                                  "property": {
                                                                    "type": "Identifier",
                                                                    "start": 372,
                                                                    "end": 379,
                                                                    "name": "doStuff",
                                                                    "typeAnnotation": null,
                                                                    "decorators": [],
                                                                    "optional": false
                                                                  },
                                                                  "computed": false,
                                                                  "optional": false
                                                                },
                                                                "arguments": [
                                                                  {
                                                                    "type": "MemberExpression",
                                                                    "start": 380,
                                                                    "end": 388,
                                                                    "object": {
                                                                      "type": "Identifier",
                                                                      "start": 380,
                                                                      "end": 385,
                                                                      "name": "order",
                                                                      "typeAnnotation": null,
                                                                      "decorators": [],
                                                                      "optional": false
                                                                    },
                                                                    "property": {
                                                                      "type": "Identifier",
                                                                      "start": 386,
                                                                      "end": 388,
                                                                      "name": "id",
                                                                      "typeAnnotation": null,
                                                                      "decorators": [],
                                                                      "optional": false
                                                                    },
                                                                    "computed": false,
                                                                    "optional": false
                                                                  }
                                                                ],
                                                                "optional": false,
                                                                "typeArguments": null
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "start": 401,
                                                                "end": 405,
                                                                "name": "then",
                                                                "typeAnnotation": null,
                                                                "decorators": [],
                                                                "optional": false
                                                              },
                                                              "computed": false,
                                                              "optional": false
                                                            },
                                                            "arguments": [
                                                              {
                                                                "type": "ArrowFunctionExpression",
                                                                "start": 406,
                                                                "end": 491,
                                                                "id": null,
                                                                "expression": false,
                                                                "generator": false,
                                                                "async": false,
                                                                "params": [
                                                                  {
                                                                    "type": "Identifier",
                                                                    "start": 407,
                                                                    "end": 412,
                                                                    "name": "items",
                                                                    "typeAnnotation": null,
                                                                    "decorators": [],
                                                                    "optional": false
                                                                  }
                                                                ],
                                                                "body": {
                                                                  "type": "BlockStatement",
                                                                  "start": 417,
                                                                  "end": 491,
                                                                  "body": [
                                                                    {
                                                                      "type": "ExpressionStatement",
                                                                      "start": 431,
                                                                      "end": 451,
                                                                      "expression": {
                                                                        "type": "AssignmentExpression",
                                                                        "start": 431,
                                                                        "end": 450,
                                                                        "operator": "=",
                                                                        "left": {
                                                                          "type": "MemberExpression",
                                                                          "start": 431,
                                                                          "end": 442,
                                                                          "object": {
                                                                            "type": "Identifier",
                                                                            "start": 431,
                                                                            "end": 436,
                                                                            "name": "order",
                                                                            "typeAnnotation": null,
                                                                            "decorators": [],
                                                                            "optional": false
                                                                          },
                                                                          "property": {
                                                                            "type": "Identifier",
                                                                            "start": 437,
                                                                            "end": 442,
                                                                            "name": "items",
                                                                            "typeAnnotation": null,
                                                                            "decorators": [],
                                                                            "optional": false
                                                                          },
                                                                          "computed": false,
                                                                          "optional": false
                                                                        },
                                                                        "right": {
                                                                          "type": "Identifier",
                                                                          "start": 445,
                                                                          "end": 450,
                                                                          "name": "items",
                                                                          "typeAnnotation": null,
                                                                          "decorators": [],
                                                                          "optional": false
                                                                        }
                                                                      },
                                                                      "directive": null
                                                                    },
                                                                    {
                                                                      "type": "ExpressionStatement",
                                                                      "start": 464,
                                                                      "end": 479,
                                                                      "expression": {
                                                                        "type": "CallExpression",
                                                                        "start": 464,
                                                                        "end": 478,
                                                                        "callee": {
                                                                          "type": "Identifier",
                                                                          "start": 464,
                                                                          "end": 471,
                                                                          "name": "resolve",
                                                                          "typeAnnotation": null,
                                                                          "decorators": [],
                                                                          "optional": false
                                                                        },
                                                                        "arguments": [
                                                                          {
                                                                            "type": "Identifier",
                                                                            "start": 472,
                                                                            "end": 477,
                                                                            "name": "order",
                                                                            "typeAnnotation": null,
                                                                            "decorators": [],
                                                                            "optional": false
                                                                          }
                                                                        ],
                                                                        "optional": false,
                                                                        "typeArguments": null
                                                                      },
                                                                      "directive": null
                                                                    }
                                                                  ]
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null
                                                              }
                                                            ],
                                                            "optional": false,
                                                            "typeArguments": null
                                                          },
                                                          "directive": null
                                                        }
                                                      ]
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null
                                                  }
                                                ],
                                                "typeArguments": null
                                              }
                                            }
                                          ]
                                        },
                                        "typeParameters": null,
                                        "returnType": null
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "let",
                                  "declare": false
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 516,
                                  "end": 647,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 523,
                                    "end": 646,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 523,
                                      "end": 573,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 523,
                                        "end": 561,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 523,
                                          "end": 534,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 523,
                                            "end": 530,
                                            "name": "Promise",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 531,
                                            "end": 534,
                                            "name": "all",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "type": "CallExpression",
                                            "start": 535,
                                            "end": 560,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 535,
                                              "end": 545,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 535,
                                                "end": 541,
                                                "name": "result",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 542,
                                                "end": 545,
                                                "name": "map",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "computed": false,
                                              "optional": false
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 546,
                                                "end": 559,
                                                "name": "populateItems",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ],
                                            "optional": false,
                                            "typeArguments": null
                                          }
                                        ],
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 569,
                                        "end": 573,
                                        "name": "then",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "ArrowFunctionExpression",
                                        "start": 574,
                                        "end": 645,
                                        "id": null,
                                        "expression": false,
                                        "generator": false,
                                        "async": false,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "start": 575,
                                            "end": 606,
                                            "name": "orders",
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 581,
                                              "end": 606,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 583,
                                                "end": 606,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 583,
                                                  "end": 588,
                                                  "name": "Array",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "start": 588,
                                                  "end": 606,
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "start": 589,
                                                      "end": 605,
                                                      "typeName": {
                                                        "type": "TSQualifiedName",
                                                        "start": 589,
                                                        "end": 605,
                                                        "left": {
                                                          "type": "Identifier",
                                                          "start": 589,
                                                          "end": 597,
                                                          "name": "MyModule",
                                                          "typeAnnotation": null,
                                                          "decorators": [],
                                                          "optional": false
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "start": 598,
                                                          "end": 605,
                                                          "name": "MyModel",
                                                          "typeAnnotation": null,
                                                          "decorators": [],
                                                          "optional": false
                                                        }
                                                      },
                                                      "typeArguments": null
                                                    }
                                                  ]
                                                }
                                              }
                                            },
                                            "decorators": [],
                                            "optional": false
                                          }
                                        ],
                                        "body": {
                                          "type": "BlockStatement",
                                          "start": 611,
                                          "end": 645,
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "start": 621,
                                              "end": 637,
                                              "expression": {
                                                "type": "CallExpression",
                                                "start": 621,
                                                "end": 636,
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 621,
                                                  "end": 628,
                                                  "name": "resolve",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "start": 629,
                                                    "end": 635,
                                                    "name": "orders",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  }
                                                ],
                                                "optional": false,
                                                "typeArguments": null
                                              },
                                              "directive": null
                                            }
                                          ]
                                        },
                                        "typeParameters": null,
                                        "returnType": null
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ]
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        ],
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 177,
                          "end": 202,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 178,
                              "end": 201,
                              "typeName": {
                                "type": "Identifier",
                                "start": 178,
                                "end": 183,
                                "name": "Array",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 183,
                                "end": 201,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 184,
                                    "end": 200,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 184,
                                      "end": 200,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 184,
                                        "end": 192,
                                        "name": "MyModule",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 193,
                                        "end": 200,
                                        "name": "MyModel",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 663,
              "end": 713,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 676,
                "end": 683,
                "name": "doStuff",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 683,
                "end": 713,
                "id": null,
                "expression": false,
                "generator": false,
                "async": true,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 684,
                    "end": 694,
                    "name": "id",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 686,
                      "end": 694,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 688,
                        "end": 694
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 696,
                  "end": 713,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 702,
                      "end": 709,
                      "argument": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 44,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 24,
          "name": "MyModel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 25,
          "end": 44,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 31,
              "end": 42,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 33,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 35,
                  "end": 41
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
