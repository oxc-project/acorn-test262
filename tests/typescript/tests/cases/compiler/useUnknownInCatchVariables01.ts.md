__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 532,
  "body": [
    {
      "type": "TryStatement",
      "start": 0,
      "end": 400,
      "block": {
        "type": "BlockStatement",
        "start": 4,
        "end": 18,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 19,
        "end": 400,
        "param": {
          "type": "Identifier",
          "start": 26,
          "end": 27,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 29,
          "end": 400,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 49,
              "end": 70,
              "expression": {
                "type": "UnaryExpression",
                "start": 49,
                "end": 69,
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "start": 54,
                  "end": 69,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 54,
                    "end": 67,
                    "object": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 67,
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "prefix": true
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 75,
              "end": 84,
              "expression": {
                "type": "UnaryExpression",
                "start": 75,
                "end": 83,
                "operator": "void",
                "argument": {
                  "type": "UpdateExpression",
                  "start": 80,
                  "end": 83,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "prefix": true
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 89,
              "end": 98,
              "expression": {
                "type": "UnaryExpression",
                "start": 89,
                "end": 97,
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "start": 94,
                  "end": 97,
                  "callee": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "prefix": true
              },
              "directive": null
            },
            {
              "type": "IfStatement",
              "start": 104,
              "end": 251,
              "test": {
                "type": "BinaryExpression",
                "start": 108,
                "end": 129,
                "left": {
                  "type": "UnaryExpression",
                  "start": 108,
                  "end": 116,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 121,
                  "end": 129,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 131,
                "end": 251,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 216,
                    "end": 245,
                    "expression": {
                      "type": "CallExpression",
                      "start": 216,
                      "end": 244,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 216,
                        "end": 227,
                        "object": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 223,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 227,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 228,
                          "end": 243,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 228,
                            "end": 241,
                            "object": {
                              "type": "Identifier",
                              "start": 228,
                              "end": 229,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 230,
                              "end": 241,
                              "decorators": [],
                              "name": "toUpperCase",
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
              "alternate": null
            },
            {
              "type": "IfStatement",
              "start": 256,
              "end": 319,
              "test": {
                "type": "BinaryExpression",
                "start": 260,
                "end": 278,
                "left": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 278,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 280,
                "end": 319,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 290,
                    "end": 313,
                    "expression": {
                      "type": "ChainExpression",
                      "start": 290,
                      "end": 312,
                      "expression": {
                        "type": "CallExpression",
                        "start": 290,
                        "end": 312,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 290,
                          "end": 310,
                          "object": {
                            "type": "MemberExpression",
                            "start": 290,
                            "end": 297,
                            "object": {
                              "type": "Identifier",
                              "start": 290,
                              "end": 291,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 292,
                              "end": 297,
                              "decorators": [],
                              "name": "stack",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 299,
                            "end": 310,
                            "decorators": [],
                            "name": "toUpperCase",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "start": 324,
              "end": 398,
              "test": {
                "type": "BinaryExpression",
                "start": 328,
                "end": 349,
                "left": {
                  "type": "UnaryExpression",
                  "start": 328,
                  "end": 336,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 336,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 341,
                  "end": 349,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 351,
                "end": 398,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 361,
                    "end": 379,
                    "expression": {
                      "type": "CallExpression",
                      "start": 361,
                      "end": 378,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 361,
                        "end": 376,
                        "object": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 362,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 363,
                          "end": 376,
                          "decorators": [],
                          "name": "toExponential",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 388,
                    "end": 392,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 388,
                      "end": 391,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 389,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            }
          ]
        }
      },
      "finalizer": null
    },
    {
      "type": "TryStatement",
      "start": 403,
      "end": 532,
      "block": {
        "type": "BlockStatement",
        "start": 407,
        "end": 421,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 422,
        "end": 532,
        "param": {
          "type": "Identifier",
          "start": 429,
          "end": 435,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 430,
            "end": 435,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 432,
              "end": 435
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 437,
          "end": 532,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 467,
              "end": 488,
              "expression": {
                "type": "UnaryExpression",
                "start": 467,
                "end": 487,
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "start": 472,
                  "end": 487,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 472,
                    "end": 485,
                    "object": {
                      "type": "Identifier",
                      "start": 472,
                      "end": 473,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 474,
                      "end": 485,
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "prefix": true
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 493,
              "end": 516,
              "expression": {
                "type": "UnaryExpression",
                "start": 493,
                "end": 515,
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "start": 498,
                  "end": 515,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 498,
                    "end": 513,
                    "object": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 499,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 500,
                      "end": 513,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "prefix": true
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 521,
              "end": 530,
              "expression": {
                "type": "UnaryExpression",
                "start": 521,
                "end": 529,
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "start": 526,
                  "end": 529,
                  "callee": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 527,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "prefix": true
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
