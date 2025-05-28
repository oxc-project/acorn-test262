__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 577,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 411,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Bugs",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 411,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 16,
            "end": 29,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 24,
              "end": 29,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 139,
            "end": 409,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 152,
              "decorators": [],
              "name": "bug2",
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
                "start": 153,
                "end": 167,
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 160,
                  "end": 167,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 161,
                    "end": 167
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 169,
                "end": 182,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 176,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 176,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 177,
                    "end": 182,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 177,
                      "end": 180
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 191,
              "end": 409,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 197,
                  "end": 386,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 201,
                      "end": 385,
                      "id": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 207,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 209,
                        "end": 385,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 209,
                          "end": 224,
                          "object": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 216,
                            "decorators": [],
                            "name": "message",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 217,
                            "end": 224,
                            "decorators": [],
                            "name": "replace",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 225,
                            "end": 237,
                            "value": null,
                            "raw": "/\\{(\\d+)\\}/g",
                            "regex": {
                              "flags": "g",
                              "pattern": "\\{(\\d+)\\}"
                            }
                          },
                          {
                            "type": "FunctionExpression",
                            "start": 239,
                            "end": 384,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 248,
                                "end": 253,
                                "decorators": [],
                                "name": "match",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "RestElement",
                                "start": 255,
                                "end": 262,
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "start": 258,
                                  "end": 262,
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeAnnotation": null,
                                "value": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 264,
                              "end": 384,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 272,
                                  "end": 291,
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 276,
                                      "end": 290,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 276,
                                        "end": 281,
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 283,
                                        "end": 290,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 283,
                                          "end": 287,
                                          "decorators": [],
                                          "name": "rest",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "start": 288,
                                          "end": 289,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "optional": false,
                                        "computed": true
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "declare": false
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 298,
                                  "end": 378,
                                  "argument": {
                                    "type": "ConditionalExpression",
                                    "start": 305,
                                    "end": 377,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 305,
                                      "end": 339,
                                      "left": {
                                        "type": "UnaryExpression",
                                        "start": 305,
                                        "end": 323,
                                        "operator": "typeof",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "start": 312,
                                          "end": 323,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 312,
                                            "end": 316,
                                            "decorators": [],
                                            "name": "args",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 317,
                                            "end": 322,
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": true
                                        },
                                        "prefix": true
                                      },
                                      "operator": "!==",
                                      "right": {
                                        "type": "Literal",
                                        "start": 328,
                                        "end": 339,
                                        "value": "undefined",
                                        "raw": "'undefined'"
                                      }
                                    },
                                    "consequent": {
                                      "type": "MemberExpression",
                                      "start": 350,
                                      "end": 361,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 350,
                                        "end": 354,
                                        "decorators": [],
                                        "name": "args",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 355,
                                        "end": 360,
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": true
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "start": 372,
                                      "end": 377,
                                      "decorators": [],
                                      "name": "match",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              ]
                            },
                            "expression": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 391,
                  "end": 405,
                  "argument": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 404,
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 413,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 422,
        "end": 426,
        "decorators": [],
        "name": "bug3",
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
          "start": 427,
          "end": 447,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 428,
            "end": 447,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 429,
              "end": 447,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 430,
                  "end": 438,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 431,
                    "end": 438,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 432,
                      "end": 438
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 439,
                "end": 447,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 441,
                  "end": 447
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 449,
        "end": 466,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 451,
            "end": 464,
            "argument": {
              "type": "CallExpression",
              "start": 458,
              "end": 464,
              "callee": {
                "type": "Identifier",
                "start": 458,
                "end": 459,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 460,
                  "end": 463,
                  "value": "s",
                  "raw": "\"s\""
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 468,
      "end": 514,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 483,
        "decorators": [],
        "name": "fprime",
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
          "start": 484,
          "end": 492,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 485,
            "end": 492,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 486,
              "end": 492
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 493,
        "end": 500,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 494,
          "end": 500
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 501,
        "end": 514,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 503,
            "end": 512,
            "argument": {
              "type": "Identifier",
              "start": 510,
              "end": 511,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 516,
      "end": 529,
      "expression": {
        "type": "CallExpression",
        "start": 516,
        "end": 528,
        "callee": {
          "type": "Identifier",
          "start": 516,
          "end": 520,
          "decorators": [],
          "name": "bug3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 521,
            "end": 527,
            "decorators": [],
            "name": "fprime",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 577,
      "expression": {
        "type": "CallExpression",
        "start": 531,
        "end": 576,
        "callee": {
          "type": "Identifier",
          "start": 531,
          "end": 535,
          "decorators": [],
          "name": "bug3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 536,
            "end": 575,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 545,
                "end": 553,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 546,
                  "end": 553,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 547,
                    "end": 553
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 554,
              "end": 561,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 555,
                "end": 561
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 562,
              "end": 575,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 564,
                  "end": 573,
                  "argument": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 572,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
