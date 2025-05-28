__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 46,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 40,
            "end": 46,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 41,
                "end": 45
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 70,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 72,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 72,
            "end": 79,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 79,
            "end": 85,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 80,
                "end": 84
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 88,
        "body": []
      },
      "expression": false
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
  "start": 404,
  "end": 509,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 404,
      "end": 508,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 411,
        "end": 508,
        "id": {
          "type": "Identifier",
          "start": 428,
          "end": 437,
          "decorators": [],
          "name": "__awaiter",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 438,
            "end": 450,
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 450,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 447,
                "end": 450
              }
            }
          },
          {
            "type": "Identifier",
            "start": 452,
            "end": 467,
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 467,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 464,
                "end": 467
              }
            }
          },
          {
            "type": "Identifier",
            "start": 469,
            "end": 480,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 470,
              "end": 480,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 472,
                "end": 480,
                "typeName": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 480,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 482,
            "end": 501,
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 501,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 501,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 501,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 502,
          "end": 507,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 504,
            "end": 507
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
  "end": 664,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 663,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 662,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 24,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 14,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 6,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 7,
              "end": 14,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 24,
            "decorators": [],
            "name": "__awaiter",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 27,
          "end": 662,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 37,
              "end": 44,
              "decorators": [],
              "name": "thisArg",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 46,
              "end": 56,
              "decorators": [],
              "name": "_arguments",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 61,
              "end": 70,
              "decorators": [],
              "name": "generator",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 72,
            "end": 662,
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 78,
                "end": 186,
                "id": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 92,
                  "decorators": [],
                  "name": "adopt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 93,
                    "end": 98,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 100,
                  "end": 186,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 102,
                      "end": 184,
                      "argument": {
                        "type": "ConditionalExpression",
                        "start": 109,
                        "end": 183,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 109,
                          "end": 127,
                          "left": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 114,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "instanceof",
                          "right": {
                            "type": "Identifier",
                            "start": 126,
                            "end": 127,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 135,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "alternate": {
                          "type": "NewExpression",
                          "start": 138,
                          "end": 183,
                          "callee": {
                            "type": "Identifier",
                            "start": 142,
                            "end": 143,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "FunctionExpression",
                              "start": 144,
                              "end": 182,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 154,
                                  "end": 161,
                                  "decorators": [],
                                  "name": "resolve",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 163,
                                "end": 182,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 165,
                                    "end": 180,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 165,
                                      "end": 179,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 165,
                                        "end": 172,
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 173,
                                          "end": 178,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "expression": false
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              {
                "type": "ReturnStatement",
                "start": 191,
                "end": 660,
                "argument": {
                  "type": "NewExpression",
                  "start": 198,
                  "end": 659,
                  "callee": {
                    "type": "LogicalExpression",
                    "start": 203,
                    "end": 221,
                    "left": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 204,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "||",
                    "right": {
                      "type": "AssignmentExpression",
                      "start": 209,
                      "end": 220,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 210,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 220,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 223,
                      "end": 658,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 233,
                          "end": 240,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 242,
                          "end": 248,
                          "decorators": [],
                          "name": "reject",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 250,
                        "end": 658,
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "start": 260,
                            "end": 351,
                            "id": {
                              "type": "Identifier",
                              "start": 269,
                              "end": 278,
                              "decorators": [],
                              "name": "fulfilled",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 279,
                                "end": 284,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 286,
                              "end": 351,
                              "body": [
                                {
                                  "type": "TryStatement",
                                  "start": 288,
                                  "end": 349,
                                  "block": {
                                    "type": "BlockStatement",
                                    "start": 292,
                                    "end": 324,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 294,
                                        "end": 322,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 294,
                                          "end": 321,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 294,
                                            "end": 298,
                                            "decorators": [],
                                            "name": "step",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "CallExpression",
                                              "start": 299,
                                              "end": 320,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 299,
                                                "end": 313,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 299,
                                                  "end": 308,
                                                  "decorators": [],
                                                  "name": "generator",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 309,
                                                  "end": 313,
                                                  "decorators": [],
                                                  "name": "next",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "start": 314,
                                                  "end": 319,
                                                  "decorators": [],
                                                  "name": "value",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              ],
                                              "optional": false
                                            }
                                          ],
                                          "optional": false
                                        },
                                        "directive": null
                                      }
                                    ]
                                  },
                                  "handler": {
                                    "type": "CatchClause",
                                    "start": 325,
                                    "end": 349,
                                    "param": {
                                      "type": "Identifier",
                                      "start": 332,
                                      "end": 333,
                                      "decorators": [],
                                      "name": "e",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 335,
                                      "end": 349,
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "start": 337,
                                          "end": 347,
                                          "expression": {
                                            "type": "CallExpression",
                                            "start": 337,
                                            "end": 346,
                                            "callee": {
                                              "type": "Identifier",
                                              "start": 337,
                                              "end": 343,
                                              "decorators": [],
                                              "name": "reject",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 344,
                                                "end": 345,
                                                "decorators": [],
                                                "name": "e",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "optional": false
                                          },
                                          "directive": null
                                        }
                                      ]
                                    }
                                  },
                                  "finalizer": null
                                }
                              ]
                            },
                            "expression": false
                          },
                          {
                            "type": "FunctionDeclaration",
                            "start": 360,
                            "end": 454,
                            "id": {
                              "type": "Identifier",
                              "start": 369,
                              "end": 377,
                              "decorators": [],
                              "name": "rejected",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 378,
                                "end": 383,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 385,
                              "end": 454,
                              "body": [
                                {
                                  "type": "TryStatement",
                                  "start": 387,
                                  "end": 452,
                                  "block": {
                                    "type": "BlockStatement",
                                    "start": 391,
                                    "end": 427,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 393,
                                        "end": 425,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 393,
                                          "end": 424,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 393,
                                            "end": 397,
                                            "decorators": [],
                                            "name": "step",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "CallExpression",
                                              "start": 398,
                                              "end": 423,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 398,
                                                "end": 416,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 398,
                                                  "end": 407,
                                                  "decorators": [],
                                                  "name": "generator",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "start": 408,
                                                  "end": 415,
                                                  "value": "throw",
                                                  "raw": "\"throw\""
                                                },
                                                "optional": false,
                                                "computed": true
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "start": 417,
                                                  "end": 422,
                                                  "decorators": [],
                                                  "name": "value",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              ],
                                              "optional": false
                                            }
                                          ],
                                          "optional": false
                                        },
                                        "directive": null
                                      }
                                    ]
                                  },
                                  "handler": {
                                    "type": "CatchClause",
                                    "start": 428,
                                    "end": 452,
                                    "param": {
                                      "type": "Identifier",
                                      "start": 435,
                                      "end": 436,
                                      "decorators": [],
                                      "name": "e",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 438,
                                      "end": 452,
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "start": 440,
                                          "end": 450,
                                          "expression": {
                                            "type": "CallExpression",
                                            "start": 440,
                                            "end": 449,
                                            "callee": {
                                              "type": "Identifier",
                                              "start": 440,
                                              "end": 446,
                                              "decorators": [],
                                              "name": "reject",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 447,
                                                "end": 448,
                                                "decorators": [],
                                                "name": "e",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "optional": false
                                          },
                                          "directive": null
                                        }
                                      ]
                                    }
                                  },
                                  "finalizer": null
                                }
                              ]
                            },
                            "expression": false
                          },
                          {
                            "type": "FunctionDeclaration",
                            "start": 463,
                            "end": 573,
                            "id": {
                              "type": "Identifier",
                              "start": 472,
                              "end": 476,
                              "decorators": [],
                              "name": "step",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 477,
                                "end": 483,
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 485,
                              "end": 573,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 487,
                                  "end": 571,
                                  "expression": {
                                    "type": "ConditionalExpression",
                                    "start": 487,
                                    "end": 570,
                                    "test": {
                                      "type": "MemberExpression",
                                      "start": 487,
                                      "end": 498,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 487,
                                        "end": 493,
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 494,
                                        "end": 498,
                                        "decorators": [],
                                        "name": "done",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "consequent": {
                                      "type": "CallExpression",
                                      "start": 501,
                                      "end": 522,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 501,
                                        "end": 508,
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "start": 509,
                                          "end": 521,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 509,
                                            "end": 515,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 516,
                                            "end": 521,
                                            "decorators": [],
                                            "name": "value",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "alternate": {
                                      "type": "CallExpression",
                                      "start": 525,
                                      "end": 570,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 525,
                                        "end": 549,
                                        "object": {
                                          "type": "CallExpression",
                                          "start": 525,
                                          "end": 544,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 525,
                                            "end": 530,
                                            "decorators": [],
                                            "name": "adopt",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "MemberExpression",
                                              "start": 531,
                                              "end": 543,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 531,
                                                "end": 537,
                                                "decorators": [],
                                                "name": "result",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 538,
                                                "end": 543,
                                                "decorators": [],
                                                "name": "value",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            }
                                          ],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 545,
                                          "end": 549,
                                          "decorators": [],
                                          "name": "then",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 550,
                                          "end": 559,
                                          "decorators": [],
                                          "name": "fulfilled",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 561,
                                          "end": 569,
                                          "decorators": [],
                                          "name": "rejected",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "expression": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 582,
                            "end": 652,
                            "expression": {
                              "type": "CallExpression",
                              "start": 582,
                              "end": 651,
                              "callee": {
                                "type": "Identifier",
                                "start": 582,
                                "end": 586,
                                "decorators": [],
                                "name": "step",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "start": 587,
                                  "end": 650,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 587,
                                    "end": 648,
                                    "object": {
                                      "type": "AssignmentExpression",
                                      "start": 588,
                                      "end": 642,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 588,
                                        "end": 597,
                                        "decorators": [],
                                        "name": "generator",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "start": 600,
                                        "end": 642,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 600,
                                          "end": 615,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 600,
                                            "end": 609,
                                            "decorators": [],
                                            "name": "generator",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 610,
                                            "end": 615,
                                            "decorators": [],
                                            "name": "apply",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 616,
                                            "end": 623,
                                            "decorators": [],
                                            "name": "thisArg",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          {
                                            "type": "LogicalExpression",
                                            "start": 625,
                                            "end": 641,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 625,
                                              "end": 635,
                                              "decorators": [],
                                              "name": "_arguments",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "||",
                                            "right": {
                                              "type": "ArrayExpression",
                                              "start": 639,
                                              "end": 641,
                                              "elements": []
                                            }
                                          }
                                        ],
                                        "optional": false
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 644,
                                      "end": 648,
                                      "decorators": [],
                                      "name": "next",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    }
                  ]
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
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
  "end": 49,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 46,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 40,
            "end": 46,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 41,
                "end": 45
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
