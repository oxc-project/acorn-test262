__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 508,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 29,
            "decorators": [],
            "name": "lineTokens",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 36,
            "decorators": [],
            "name": "token",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 44,
            "decorators": [],
            "name": "tokens",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 508,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 508,
        "body": [
          {
            "type": "IfStatement",
            "start": 66,
            "end": 506,
            "test": {
              "type": "LogicalExpression",
              "start": 70,
              "end": 188,
              "left": {
                "type": "LogicalExpression",
                "start": 70,
                "end": 136,
                "left": {
                  "type": "LogicalExpression",
                  "start": 70,
                  "end": 115,
                  "left": {
                    "type": "BinaryExpression",
                    "start": 70,
                    "end": 102,
                    "left": {
                      "type": "CallExpression",
                      "start": 70,
                      "end": 94,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 70,
                        "end": 92,
                        "object": {
                          "type": "MemberExpression",
                          "start": 70,
                          "end": 87,
                          "object": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 80,
                            "decorators": [],
                            "name": "lineTokens",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 86,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 92,
                          "decorators": [],
                          "name": "trim",
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
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 99,
                      "end": 102,
                      "value": "=",
                      "raw": "'='"
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 106,
                    "end": 115,
                    "left": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 111,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "start": 114,
                      "end": 115,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 119,
                  "end": 136,
                  "left": {
                    "type": "MemberExpression",
                    "start": 119,
                    "end": 129,
                    "object": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 124,
                      "decorators": [],
                      "name": "token",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 129,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 134,
                    "end": 136,
                    "value": "",
                    "raw": "''"
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 140,
                "end": 188,
                "left": {
                  "type": "MemberExpression",
                  "start": 140,
                  "end": 162,
                  "object": {
                    "type": "MemberExpression",
                    "start": 140,
                    "end": 157,
                    "object": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 146,
                      "decorators": [],
                      "name": "tokens",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "BinaryExpression",
                      "start": 147,
                      "end": 156,
                      "left": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 152,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "start": 155,
                        "end": 156,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "optional": false,
                    "computed": true
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 162,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 167,
                  "end": 188,
                  "value": "attribute.name.html",
                  "raw": "'attribute.name.html'"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 190,
              "end": 506,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 200,
                  "end": 479,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 204,
                    "end": 233,
                    "left": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 209,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 215,
                      "end": 232,
                      "left": {
                        "type": "MemberExpression",
                        "start": 215,
                        "end": 228,
                        "object": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 221,
                          "decorators": [],
                          "name": "tokens",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 228,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "start": 231,
                        "end": 232,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 235,
                    "end": 306,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 249,
                        "end": 296,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 256,
                          "end": 295,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 258,
                              "end": 276,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 258,
                                "end": 268,
                                "decorators": [],
                                "name": "appendText",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 270,
                                "end": 276,
                                "value": "\"\"",
                                "raw": "'\\\"\\\"'"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 278,
                              "end": 293,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 278,
                                "end": 290,
                                "decorators": [],
                                "name": "advanceCount",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 292,
                                "end": 293,
                                "value": 1,
                                "raw": "1"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "start": 320,
                    "end": 479,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 324,
                      "end": 406,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 324,
                        "end": 373,
                        "left": {
                          "type": "MemberExpression",
                          "start": 324,
                          "end": 346,
                          "object": {
                            "type": "MemberExpression",
                            "start": 324,
                            "end": 341,
                            "object": {
                              "type": "Identifier",
                              "start": 324,
                              "end": 330,
                              "decorators": [],
                              "name": "tokens",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "BinaryExpression",
                              "start": 331,
                              "end": 340,
                              "left": {
                                "type": "Identifier",
                                "start": 331,
                                "end": 336,
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 339,
                                "end": 340,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "optional": false,
                            "computed": true
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 342,
                            "end": 346,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "start": 351,
                          "end": 373,
                          "value": "attribute.value.html",
                          "raw": "'attribute.value.html'"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 377,
                        "end": 406,
                        "left": {
                          "type": "MemberExpression",
                          "start": 377,
                          "end": 399,
                          "object": {
                            "type": "MemberExpression",
                            "start": 377,
                            "end": 394,
                            "object": {
                              "type": "Identifier",
                              "start": 377,
                              "end": 383,
                              "decorators": [],
                              "name": "tokens",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "BinaryExpression",
                              "start": 384,
                              "end": 393,
                              "left": {
                                "type": "Identifier",
                                "start": 384,
                                "end": 389,
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 392,
                                "end": 393,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "optional": false,
                            "computed": true
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 395,
                            "end": 399,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "start": 404,
                          "end": 406,
                          "value": "",
                          "raw": "''"
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 408,
                      "end": 479,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 422,
                          "end": 469,
                          "argument": {
                            "type": "ObjectExpression",
                            "start": 429,
                            "end": 468,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 431,
                                "end": 449,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 431,
                                  "end": 441,
                                  "decorators": [],
                                  "name": "appendText",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 443,
                                  "end": 449,
                                  "value": "\"\"",
                                  "raw": "'\\\"\\\"'"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 451,
                                "end": 466,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 451,
                                  "end": 463,
                                  "decorators": [],
                                  "name": "advanceCount",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 465,
                                  "end": 466,
                                  "value": 1,
                                  "raw": "1"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 488,
                  "end": 500,
                  "argument": {
                    "type": "Literal",
                    "start": 495,
                    "end": 499,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
