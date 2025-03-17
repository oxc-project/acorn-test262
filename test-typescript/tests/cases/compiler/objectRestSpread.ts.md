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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "let",
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
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 306,
          "id": {
            "type": "ObjectPattern",
            "start": 31,
            "end": 294,
            "properties": [
              {
                "type": "Property",
                "start": 37,
                "end": 54,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 37,
                  "end": 54,
                  "left": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 41,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 60,
                "end": 90,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "name": "more",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 60,
                  "end": 90,
                  "left": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 64,
                    "name": "more",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "properties": [
                        {
                          "type": "RestElement",
                          "start": 69,
                          "end": 75,
                          "argument": {
                            "type": "Identifier",
                            "start": 72,
                            "end": 75,
                            "name": "obj",
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
                      "decorators": [],
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
                            "name": "obj",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 96,
                "end": 130,
                "method": false,
                "shorthand": false,
                "computed": true,
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
                  "left": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 117,
                    "name": "other",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 136,
                "end": 247,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 146,
                  "name": "yetAnother",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 148,
                  "end": 247,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 148,
                    "end": 234,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 149,
                        "end": 233,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 155,
                          "name": "nested",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 157,
                          "end": 233,
                          "left": {
                            "type": "ObjectPattern",
                            "start": 157,
                            "end": 220,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 159,
                                "end": 203,
                                "method": false,
                                "shorthand": false,
                                "computed": true,
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
                                  "left": {
                                    "type": "Identifier",
                                    "start": 180,
                                    "end": 190,
                                    "name": "nestedProp",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                                          "name": "obj",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "decorators": [],
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "RestElement",
                                "start": 205,
                                "end": 218,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 208,
                                  "end": 218,
                                  "name": "nestedRest",
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
                            "decorators": [],
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
                                  "name": "obj",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
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
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 253,
                "end": 278,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 255,
                  "name": "fn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 253,
                  "end": 278,
                  "left": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 255,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "start": 258,
                    "end": 278,
                    "id": null,
                    "expression": false,
                    "generator": true,
                    "async": true,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 276,
                      "end": 278,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 284,
                "end": 292,
                "argument": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 292,
                  "name": "props",
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
            "decorators": [],
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
      "kind": "let",
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
          "properties": [
            {
              "type": "Property",
              "start": 316,
              "end": 333,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 316,
                "end": 320,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 316,
                "end": 333,
                "left": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 339,
              "end": 373,
              "method": false,
              "shorthand": false,
              "computed": true,
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
                "left": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 360,
                  "name": "other",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 379,
              "end": 387,
              "argument": {
                "type": "Identifier",
                "start": 382,
                "end": 387,
                "name": "props",
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
          "decorators": [],
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
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 418,
          "end": 457,
          "properties": [
            {
              "type": "Property",
              "start": 424,
              "end": 441,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 424,
                "end": 428,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 424,
                "end": 441,
                "left": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 428,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 447,
              "end": 455,
              "argument": {
                "type": "Identifier",
                "start": 450,
                "end": 455,
                "name": "props",
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
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 459,
        "end": 461,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
