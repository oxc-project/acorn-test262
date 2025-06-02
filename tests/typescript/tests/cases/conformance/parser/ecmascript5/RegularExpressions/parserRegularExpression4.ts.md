__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 297,
      "test": {
        "type": "LogicalExpression",
        "start": 4,
        "end": 99,
        "left": {
          "type": "CallExpression",
          "start": 4,
          "end": 19,
          "callee": {
            "type": "MemberExpression",
            "start": 4,
            "end": 11,
            "object": {
              "type": "Identifier",
              "start": 4,
              "end": 6,
              "decorators": [],
              "name": "Ca",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 7,
              "end": 11,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 12,
              "end": 18,
              "object": {
                "type": "Identifier",
                "start": 12,
                "end": 13,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 14,
                "end": 18,
                "decorators": [],
                "name": "href",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          ],
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "LogicalExpression",
          "start": 23,
          "end": 99,
          "left": {
            "type": "LogicalExpression",
            "start": 23,
            "end": 70,
            "left": {
              "type": "CallExpression",
              "start": 23,
              "end": 38,
              "callee": {
                "type": "MemberExpression",
                "start": 23,
                "end": 30,
                "object": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 25,
                  "decorators": [],
                  "name": "Ba",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 30,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 31,
                  "end": 37,
                  "object": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 37,
                    "decorators": [],
                    "name": "href",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "CallExpression",
              "start": 42,
              "end": 70,
              "callee": {
                "type": "MemberExpression",
                "start": 42,
                "end": 62,
                "object": {
                  "type": "Literal",
                  "start": 42,
                  "end": 57,
                  "value": null,
                  "raw": "/(\\\\?|&)adurl=/",
                  "regex": {
                    "pattern": "(\\\\?|&)adurl=",
                    "flags": ""
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 62,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 63,
                  "end": 69,
                  "object": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "href",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
            }
          },
          "operator": "&&",
          "right": {
            "type": "UnaryExpression",
            "start": 74,
            "end": 99,
            "operator": "!",
            "argument": {
              "type": "CallExpression",
              "start": 75,
              "end": 99,
              "callee": {
                "type": "MemberExpression",
                "start": 75,
                "end": 91,
                "object": {
                  "type": "Literal",
                  "start": 75,
                  "end": 86,
                  "value": null,
                  "raw": "/(\\\\?|&)q=/",
                  "regex": {
                    "pattern": "(\\\\?|&)q=",
                    "flags": ""
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 91,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 92,
                  "end": 98,
                  "object": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 98,
                    "decorators": [],
                    "name": "href",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
            },
            "prefix": true
          }
        }
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 101,
        "end": 297,
        "expression": {
          "type": "SequenceExpression",
          "start": 101,
          "end": 296,
          "expressions": [
            {
              "type": "LogicalExpression",
              "start": 101,
              "end": 157,
              "left": {
                "type": "CallExpression",
                "start": 101,
                "end": 138,
                "callee": {
                  "type": "MemberExpression",
                  "start": 101,
                  "end": 130,
                  "object": {
                    "type": "Literal",
                    "start": 101,
                    "end": 124,
                    "value": null,
                    "raw": "/ (\\\\ ? | & ) rct = j /",
                    "regex": {
                      "pattern": " (\\\\ ? | & ) rct = j ",
                      "flags": ""
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 130,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "start": 131,
                    "end": 137,
                    "object": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 137,
                      "decorators": [],
                      "name": "href",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                ],
                "optional": false
              },
              "operator": "||",
              "right": {
                "type": "AssignmentExpression",
                "start": 143,
                "end": 156,
                "operator": "+=",
                "left": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 148,
                  "end": 156,
                  "value": "&rct=j",
                  "raw": "\"&rct=j\""
                }
              }
            },
            {
              "type": "LogicalExpression",
              "start": 159,
              "end": 288,
              "left": {
                "type": "CallExpression",
                "start": 159,
                "end": 183,
                "callee": {
                  "type": "MemberExpression",
                  "start": 159,
                  "end": 175,
                  "object": {
                    "type": "Literal",
                    "start": 159,
                    "end": 170,
                    "value": null,
                    "raw": "/(\\\\?|&)q=/",
                    "regex": {
                      "pattern": "(\\\\?|&)q=",
                      "flags": ""
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 175,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "start": 176,
                    "end": 182,
                    "object": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 182,
                      "decorators": [],
                      "name": "href",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                ],
                "optional": false
              },
              "operator": "||",
              "right": {
                "type": "SequenceExpression",
                "start": 188,
                "end": 287,
                "expressions": [
                  {
                    "type": "AssignmentExpression",
                    "start": 188,
                    "end": 245,
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 193,
                      "end": 245,
                      "left": {
                        "type": "Literal",
                        "start": 193,
                        "end": 198,
                        "value": "&q=",
                        "raw": "\"&q=\""
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 201,
                        "end": 245,
                        "callee": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 219,
                          "decorators": [],
                          "name": "encodeURIComponent",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "LogicalExpression",
                            "start": 220,
                            "end": 244,
                            "left": {
                              "type": "LogicalExpression",
                              "start": 220,
                              "end": 239,
                              "left": {
                                "type": "CallExpression",
                                "start": 220,
                                "end": 226,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 220,
                                  "end": 221,
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 222,
                                    "end": 225,
                                    "value": "q",
                                    "raw": "\"q\""
                                  }
                                ],
                                "optional": false
                              },
                              "operator": "||",
                              "right": {
                                "type": "CallExpression",
                                "start": 230,
                                "end": 239,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 230,
                                  "end": 231,
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 232,
                                    "end": 238,
                                    "value": "as_q",
                                    "raw": "\"as_q\""
                                  }
                                ],
                                "optional": false
                              }
                            },
                            "operator": "||",
                            "right": {
                              "type": "Identifier",
                              "start": 243,
                              "end": 244,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "AssignmentExpression",
                    "start": 247,
                    "end": 287,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 248,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 251,
                      "end": 287,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 251,
                        "end": 262,
                        "object": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 253,
                          "end": 262,
                          "decorators": [],
                          "name": "substring",
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
                          "start": 263,
                          "end": 264,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "BinaryExpression",
                          "start": 266,
                          "end": 286,
                          "left": {
                            "type": "Literal",
                            "start": 266,
                            "end": 270,
                            "value": 1948,
                            "raw": "1948"
                          },
                          "operator": "-",
                          "right": {
                            "type": "MemberExpression",
                            "start": 273,
                            "end": 286,
                            "object": {
                              "type": "MemberExpression",
                              "start": 273,
                              "end": 279,
                              "object": {
                                "type": "Identifier",
                                "start": 273,
                                "end": 274,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 275,
                                "end": 279,
                                "decorators": [],
                                "name": "href",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 280,
                              "end": 286,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            },
            {
              "type": "AssignmentExpression",
              "start": 290,
              "end": 296,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 290,
                "end": 291,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "UnaryExpression",
                "start": 294,
                "end": 296,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 295,
                  "end": 296,
                  "value": 0,
                  "raw": "0"
                },
                "prefix": true
              }
            }
          ]
        },
        "directive": null
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
