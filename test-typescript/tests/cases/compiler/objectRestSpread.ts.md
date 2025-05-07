__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 461,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 12,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 26,
      "directive": null,
      "expression": {
        "type": "ObjectExpression",
        "start": 16,
        "end": 24,
        "properties": [
          {
            "type": "SpreadElement",
            "start": 17,
            "end": 23,
            "argument": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 306,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 31,
            "end": 294,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 37,
                "end": 54,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 37,
                  "end": 54,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 41,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 44,
                    "end": 54,
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "start": 46,
                        "end": 52,
                        "argument": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 52,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 60,
                "end": 90,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "decorators": [],
                  "name": "more",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 60,
                  "end": 90,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 64,
                    "decorators": [],
                    "name": "more",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "AssignmentExpression",
                    "start": 67,
                    "end": 90,
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "start": 67,
                      "end": 77,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "RestElement",
                          "start": 69,
                          "end": 75,
                          "argument": {
                            "type": "Identifier",
                            "start": 72,
                            "end": 75,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 80,
                      "end": 90,
                      "properties": [
                        {
                          "type": "SpreadElement",
                          "start": 82,
                          "end": 88,
                          "argument": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 88,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 96,
                "end": 130,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 97,
                  "end": 109,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 97,
                    "end": 99,
                    "raw": "''",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 102,
                    "end": 109,
                    "raw": "'other'",
                    "value": "other",
                    "regex": null,
                    "bigint": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 112,
                  "end": 130,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 117,
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 120,
                    "end": 130,
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "start": 122,
                        "end": 128,
                        "argument": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 128,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 136,
                "end": 247,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 146,
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 148,
                  "end": 247,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 148,
                    "end": 234,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 149,
                        "end": 233,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 155,
                          "decorators": [],
                          "name": "nested",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 157,
                          "end": 233,
                          "decorators": [],
                          "left": {
                            "type": "ObjectPattern",
                            "start": 157,
                            "end": 220,
                            "decorators": [],
                            "optional": false,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 159,
                                "end": 203,
                                "computed": true,
                                "key": {
                                  "type": "BinaryExpression",
                                  "start": 160,
                                  "end": 177,
                                  "operator": "+",
                                  "left": {
                                    "type": "Literal",
                                    "start": 160,
                                    "end": 168,
                                    "raw": "'nested'",
                                    "value": "nested",
                                    "regex": null,
                                    "bigint": null
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 171,
                                    "end": 177,
                                    "raw": "'prop'",
                                    "value": "prop",
                                    "regex": null,
                                    "bigint": null
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "AssignmentPattern",
                                  "start": 180,
                                  "end": 203,
                                  "decorators": [],
                                  "left": {
                                    "type": "Identifier",
                                    "start": 180,
                                    "end": 190,
                                    "decorators": [],
                                    "name": "nestedProp",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "right": {
                                    "type": "ObjectExpression",
                                    "start": 193,
                                    "end": 203,
                                    "properties": [
                                      {
                                        "type": "SpreadElement",
                                        "start": 195,
                                        "end": 201,
                                        "argument": {
                                          "type": "Identifier",
                                          "start": 198,
                                          "end": 201,
                                          "decorators": [],
                                          "name": "obj",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "RestElement",
                                "start": 205,
                                "end": 218,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 208,
                                  "end": 218,
                                  "decorators": [],
                                  "name": "nestedRest",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": null,
                                "value": null
                              }
                            ],
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "right": {
                            "type": "ObjectExpression",
                            "start": 223,
                            "end": 233,
                            "properties": [
                              {
                                "type": "SpreadElement",
                                "start": 225,
                                "end": 231,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 228,
                                  "end": 231,
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 237,
                    "end": 247,
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "start": 239,
                        "end": 245,
                        "argument": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 245,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 253,
                "end": 278,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 255,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 253,
                  "end": 278,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 255,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "FunctionExpression",
                    "start": 258,
                    "end": 278,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 276,
                      "end": 278,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": true,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "RestElement",
                "start": 284,
                "end": 292,
                "argument": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 292,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 297,
            "end": 306,
            "expression": {
              "type": "ObjectExpression",
              "start": 297,
              "end": 299,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 303,
              "end": 306
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 402,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 310,
        "end": 401,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 310,
          "end": 389,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 316,
              "end": 333,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 316,
                "end": 320,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 316,
                "end": 333,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 323,
                  "end": 333,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 325,
                      "end": 331,
                      "argument": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 331,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 339,
              "end": 373,
              "computed": true,
              "key": {
                "type": "BinaryExpression",
                "start": 340,
                "end": 352,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 340,
                  "end": 342,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Literal",
                  "start": 345,
                  "end": 352,
                  "raw": "'other'",
                  "value": "other",
                  "regex": null,
                  "bigint": null
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "start": 355,
                "end": 373,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 360,
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 363,
                  "end": 373,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 365,
                      "end": 371,
                      "argument": {
                        "type": "Identifier",
                        "start": 368,
                        "end": 371,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "RestElement",
              "start": 379,
              "end": 387,
              "argument": {
                "type": "Identifier",
                "start": 382,
                "end": 387,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 392,
          "end": 401,
          "expression": {
            "type": "ObjectExpression",
            "start": 392,
            "end": 394,
            "properties": []
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 398,
            "end": 401
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 404,
      "end": 461,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 459,
        "end": 461,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 417,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 418,
          "end": 457,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 424,
              "end": 441,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 424,
                "end": 428,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 424,
                "end": 441,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 428,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 431,
                  "end": 441,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 433,
                      "end": 439,
                      "argument": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 439,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "RestElement",
              "start": 447,
              "end": 455,
              "argument": {
                "type": "Identifier",
                "start": 450,
                "end": 455,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
