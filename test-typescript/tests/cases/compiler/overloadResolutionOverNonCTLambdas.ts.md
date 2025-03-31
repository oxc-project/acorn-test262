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
        "name": "Bugs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 24,
              "end": 29,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 139,
            "end": 409,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 152,
              "name": "bug2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 167,
                "name": "message",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 160,
                  "end": 167,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 161,
                    "end": 167
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 169,
                "end": 182,
                "argument": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 176,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
            "body": {
              "type": "BlockStatement",
              "start": 191,
              "end": 409,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 197,
                  "end": 386,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 201,
                      "end": 385,
                      "id": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 207,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "message",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 217,
                            "end": 224,
                            "name": "replace",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
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
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 248,
                                "end": 253,
                                "name": "match",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "RestElement",
                                "start": 255,
                                "end": 262,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 258,
                                  "end": 262,
                                  "name": "rest",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": null,
                                "value": null
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 264,
                              "end": 384,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 272,
                                  "end": 291,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 276,
                                      "end": 290,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 276,
                                        "end": 281,
                                        "name": "index",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 283,
                                        "end": 290,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 283,
                                          "end": 287,
                                          "name": "rest",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "start": 288,
                                          "end": 289,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "computed": true,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
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
                                        "prefix": true,
                                        "argument": {
                                          "type": "MemberExpression",
                                          "start": 312,
                                          "end": 323,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 312,
                                            "end": 316,
                                            "name": "args",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 317,
                                            "end": 322,
                                            "name": "index",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": true,
                                          "optional": false
                                        }
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
                                        "name": "args",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 355,
                                        "end": 360,
                                        "name": "index",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": true,
                                      "optional": false
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "start": 372,
                                      "end": 377,
                                      "name": "match",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
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
                    "name": "result",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            }
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
        "name": "bug3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 427,
          "end": 447,
          "name": "f",
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
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 431,
                    "end": 438,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 432,
                      "end": 438
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 460,
                  "end": 463,
                  "value": "s",
                  "raw": "\"s\""
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 468,
      "end": 514,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 483,
        "name": "fprime",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 484,
          "end": 492,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 485,
            "end": 492,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 486,
              "end": 492
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 493,
        "end": 500,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 494,
          "end": 500
        }
      }
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
          "name": "bug3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 521,
            "end": 527,
            "name": "fprime",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "bug3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 536,
            "end": 575,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 545,
                "end": 553,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 546,
                  "end": 553,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 547,
                    "end": 553
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 554,
              "end": 561,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 555,
                "end": 561
              }
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
