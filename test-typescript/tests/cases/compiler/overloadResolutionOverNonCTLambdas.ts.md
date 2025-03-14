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
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 411,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 16,
            "end": 29,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 24,
              "end": 29,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 139,
            "end": 409,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 207,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 209,
                        "end": 385,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 225,
                            "end": 237,
                            "raw": "/\\{(\\d+)\\}/g",
                            "regex": {
                              "flags": "g",
                              "pattern": "\\{(\\d+)\\}"
                            },
                            "value": null
                          },
                          {
                            "type": "FunctionExpression",
                            "start": 239,
                            "end": 384,
                            "async": false,
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
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 276,
                                        "end": 281,
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 283,
                                        "end": 290,
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 283,
                                          "end": 287,
                                          "decorators": [],
                                          "name": "rest",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Literal",
                                          "start": 288,
                                          "end": 289,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 298,
                                  "end": 378,
                                  "argument": {
                                    "type": "ConditionalExpression",
                                    "start": 305,
                                    "end": 377,
                                    "alternate": {
                                      "type": "Identifier",
                                      "start": 372,
                                      "end": 377,
                                      "decorators": [],
                                      "name": "match",
                                      "optional": false
                                    },
                                    "consequent": {
                                      "type": "MemberExpression",
                                      "start": 350,
                                      "end": 361,
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 350,
                                        "end": 354,
                                        "decorators": [],
                                        "name": "args",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 355,
                                        "end": 360,
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false
                                      }
                                    },
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 305,
                                      "end": 339,
                                      "operator": "!==",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "start": 305,
                                        "end": 323,
                                        "argument": {
                                          "type": "MemberExpression",
                                          "start": 312,
                                          "end": 323,
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 312,
                                            "end": 316,
                                            "decorators": [],
                                            "name": "args",
                                            "optional": false
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 317,
                                            "end": 322,
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false
                                          }
                                        },
                                        "operator": "typeof",
                                        "prefix": true
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 328,
                                        "end": 339,
                                        "raw": "'undefined'",
                                        "value": "undefined"
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 248,
                                "end": 253,
                                "decorators": [],
                                "name": "match",
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
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ]
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 209,
                          "end": 224,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 216,
                            "decorators": [],
                            "name": "message",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 217,
                            "end": 224,
                            "decorators": [],
                            "name": "replace",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
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
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 152,
              "decorators": [],
              "name": "bug2",
              "optional": false
            },
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
                "argument": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 176,
                  "decorators": [],
                  "name": "args",
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
                }
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
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Bugs",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 413,
      "end": 466,
      "async": false,
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
              "arguments": [
                {
                  "type": "Literal",
                  "start": 460,
                  "end": 463,
                  "raw": "\"s\"",
                  "value": "s"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 458,
                "end": 459,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 422,
        "end": 426,
        "decorators": [],
        "name": "bug3",
        "optional": false
      },
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
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 468,
      "end": 514,
      "async": false,
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
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 483,
        "decorators": [],
        "name": "fprime",
        "optional": false
      },
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
        "arguments": [
          {
            "type": "Identifier",
            "start": 521,
            "end": 527,
            "decorators": [],
            "name": "fprime",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 516,
          "end": 520,
          "decorators": [],
          "name": "bug3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 577,
      "expression": {
        "type": "CallExpression",
        "start": 531,
        "end": 576,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 536,
            "end": 575,
            "async": false,
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
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 531,
          "end": 535,
          "decorators": [],
          "name": "bug3",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
