__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 509,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 29,
            "decorators": [],
            "name": "lineTokens",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 36,
            "decorators": [],
            "name": "token",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 44,
            "decorators": [],
            "name": "tokens",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 508,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 508,
        "body": [
          {
            "type": "IfStatement",
            "start": 66,
            "end": 506,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 190,
              "end": 506,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 200,
                  "end": 479,
                  "alternate": {
                    "type": "IfStatement",
                    "start": 320,
                    "end": 479,
                    "alternate": null,
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
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 431,
                                  "end": 441,
                                  "decorators": [],
                                  "name": "appendText",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 443,
                                  "end": 449,
                                  "raw": "'\\\"\\\"'",
                                  "value": "\"\""
                                }
                              },
                              {
                                "type": "Property",
                                "start": 451,
                                "end": 466,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 451,
                                  "end": 463,
                                  "decorators": [],
                                  "name": "advanceCount",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 465,
                                  "end": 466,
                                  "raw": "1",
                                  "value": 1
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "start": 324,
                      "end": 406,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 324,
                        "end": 373,
                        "operator": "!==",
                        "left": {
                          "type": "MemberExpression",
                          "start": 324,
                          "end": 346,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 324,
                            "end": 341,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 324,
                              "end": 330,
                              "decorators": [],
                              "name": "tokens",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "BinaryExpression",
                              "start": 331,
                              "end": 340,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 331,
                                "end": 336,
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 339,
                                "end": 340,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 342,
                            "end": 346,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 351,
                          "end": 373,
                          "raw": "'attribute.value.html'",
                          "value": "attribute.value.html"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 377,
                        "end": 406,
                        "operator": "!==",
                        "left": {
                          "type": "MemberExpression",
                          "start": 377,
                          "end": 399,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 377,
                            "end": 394,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 377,
                              "end": 383,
                              "decorators": [],
                              "name": "tokens",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "BinaryExpression",
                              "start": 384,
                              "end": 393,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 384,
                                "end": 389,
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 392,
                                "end": 393,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 395,
                            "end": 399,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 404,
                          "end": 406,
                          "raw": "''",
                          "value": ""
                        }
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
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 258,
                                "end": 268,
                                "decorators": [],
                                "name": "appendText",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 270,
                                "end": 276,
                                "raw": "'\\\"\\\"'",
                                "value": "\"\""
                              }
                            },
                            {
                              "type": "Property",
                              "start": 278,
                              "end": 293,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 278,
                                "end": 290,
                                "decorators": [],
                                "name": "advanceCount",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 292,
                                "end": 293,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 204,
                    "end": 233,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 209,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 215,
                      "end": 232,
                      "operator": "-",
                      "left": {
                        "type": "MemberExpression",
                        "start": 215,
                        "end": 228,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 221,
                          "decorators": [],
                          "name": "tokens",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 228,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 231,
                        "end": 232,
                        "raw": "1",
                        "value": 1
                      }
                    }
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
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 70,
              "end": 188,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 70,
                "end": 136,
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "start": 70,
                  "end": 115,
                  "operator": "&&",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 70,
                    "end": 102,
                    "operator": "===",
                    "left": {
                      "type": "CallExpression",
                      "start": 70,
                      "end": 94,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 70,
                        "end": 92,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 70,
                          "end": 87,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 80,
                            "decorators": [],
                            "name": "lineTokens",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 86,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 92,
                          "decorators": [],
                          "name": "trim",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 99,
                      "end": 102,
                      "raw": "'='",
                      "value": "="
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 106,
                    "end": 115,
                    "operator": ">",
                    "left": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 111,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 114,
                      "end": 115,
                      "raw": "0",
                      "value": 0
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 119,
                  "end": 136,
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 119,
                    "end": 129,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 124,
                      "decorators": [],
                      "name": "token",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 129,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 134,
                    "end": 136,
                    "raw": "''",
                    "value": ""
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 140,
                "end": 188,
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "start": 140,
                  "end": 162,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 140,
                    "end": 157,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 146,
                      "decorators": [],
                      "name": "tokens",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "BinaryExpression",
                      "start": 147,
                      "end": 156,
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 152,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 155,
                        "end": 156,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 162,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 167,
                  "end": 188,
                  "raw": "'attribute.name.html'",
                  "value": "attribute.name.html"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
