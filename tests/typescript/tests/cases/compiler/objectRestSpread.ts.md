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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 26,
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
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 307,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 306,
          "id": {
            "type": "ObjectPattern",
            "start": 31,
            "end": 294,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 37,
                "end": 54,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 60,
                "end": 90,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "decorators": [],
                  "name": "more",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "properties": [
                        {
                          "type": "RestElement",
                          "start": 69,
                          "end": 75,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 72,
                            "end": 75,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null
                        }
                      ],
                      "optional": false,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 96,
                "end": 130,
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "start": 97,
                  "end": 109,
                  "left": {
                    "type": "Literal",
                    "start": 97,
                    "end": 99,
                    "value": "",
                    "raw": "''"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 102,
                    "end": 109,
                    "value": "other",
                    "raw": "'other'"
                  }
                },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 136,
                "end": 247,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 146,
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "properties": [
                      {
                        "type": "Property",
                        "start": 149,
                        "end": 233,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 155,
                          "decorators": [],
                          "name": "nested",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                            "properties": [
                              {
                                "type": "Property",
                                "start": 159,
                                "end": 203,
                                "kind": "init",
                                "key": {
                                  "type": "BinaryExpression",
                                  "start": 160,
                                  "end": 177,
                                  "left": {
                                    "type": "Literal",
                                    "start": 160,
                                    "end": 168,
                                    "value": "nested",
                                    "raw": "'nested'"
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "start": 171,
                                    "end": 177,
                                    "value": "prop",
                                    "raw": "'prop'"
                                  }
                                },
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "optional": false
                              },
                              {
                                "type": "RestElement",
                                "start": 205,
                                "end": 218,
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "start": 208,
                                  "end": 218,
                                  "decorators": [],
                                  "name": "nestedRest",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeAnnotation": null,
                                "value": null
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 253,
                "end": 278,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 255,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "FunctionExpression",
                    "start": 258,
                    "end": 278,
                    "id": null,
                    "generator": true,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 276,
                      "end": 278,
                      "body": []
                    },
                    "expression": false
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 284,
                "end": 292,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 292,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 402,
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
          "properties": [
            {
              "type": "Property",
              "start": 316,
              "end": 333,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 316,
                "end": 320,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 339,
              "end": 373,
              "kind": "init",
              "key": {
                "type": "BinaryExpression",
                "start": 340,
                "end": 352,
                "left": {
                  "type": "Literal",
                  "start": 340,
                  "end": 342,
                  "value": "",
                  "raw": "''"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 345,
                  "end": 352,
                  "value": "other",
                  "raw": "'other'"
                }
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 379,
              "end": 387,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 382,
                "end": 387,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
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
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 404,
      "end": 461,
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 417,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 418,
          "end": 457,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 424,
              "end": 441,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 424,
                "end": 428,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 447,
              "end": 455,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 450,
                "end": 455,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 459,
        "end": 461,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
