__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 316,
  "body": [
    {
      "type": "TryStatement",
      "start": 0,
      "end": 55,
      "block": {
        "type": "BlockStatement",
        "start": 4,
        "end": 25,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 10,
            "end": 23,
            "argument": {
              "type": "ArrayExpression",
              "start": 16,
              "end": 22,
              "elements": [
                {
                  "type": "Literal",
                  "start": 17,
                  "end": 18,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 20,
                  "end": 21,
                  "value": 1,
                  "raw": "1"
                }
              ]
            }
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 26,
        "end": 55,
        "param": {
          "type": "ArrayPattern",
          "start": 33,
          "end": 39,
          "elements": [
            {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 41,
          "end": 55,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 47,
              "end": 53,
              "expression": {
                "type": "BinaryExpression",
                "start": 47,
                "end": 52,
                "left": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": null
    },
    {
      "type": "TryStatement",
      "start": 57,
      "end": 120,
      "block": {
        "type": "BlockStatement",
        "start": 61,
        "end": 90,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 67,
            "end": 88,
            "argument": {
              "type": "ObjectExpression",
              "start": 73,
              "end": 87,
              "properties": [
                {
                  "type": "Property",
                  "start": 75,
                  "end": 79,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 78,
                    "end": 79,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 81,
                  "end": 85,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 84,
                    "end": 85,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 91,
        "end": 120,
        "param": {
          "type": "ObjectPattern",
          "start": 98,
          "end": 104,
          "properties": [
            {
              "type": "Property",
              "start": 99,
              "end": 100,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 102,
              "end": 103,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 106,
          "end": 120,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 112,
              "end": 118,
              "expression": {
                "type": "BinaryExpression",
                "start": 112,
                "end": 117,
                "left": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": null
    },
    {
      "type": "TryStatement",
      "start": 122,
      "end": 196,
      "block": {
        "type": "BlockStatement",
        "start": 126,
        "end": 159,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 132,
            "end": 157,
            "argument": {
              "type": "ArrayExpression",
              "start": 138,
              "end": 156,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 139,
                  "end": 155,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 141,
                      "end": 147,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "start": 144,
                        "end": 147,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 145,
                            "end": 146,
                            "value": 0,
                            "raw": "0"
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 149,
                      "end": 153,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 150,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 152,
                        "end": 153,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 160,
        "end": 196,
        "param": {
          "type": "ArrayPattern",
          "start": 167,
          "end": 180,
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 168,
              "end": 179,
              "properties": [
                {
                  "type": "Property",
                  "start": 169,
                  "end": 175,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrayPattern",
                    "start": 172,
                    "end": 175,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 173,
                        "end": 174,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 177,
                  "end": 178,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 182,
          "end": 196,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 188,
              "end": 194,
              "expression": {
                "type": "BinaryExpression",
                "start": 188,
                "end": 193,
                "left": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": null
    },
    {
      "type": "TryStatement",
      "start": 263,
      "end": 315,
      "block": {
        "type": "BlockStatement",
        "start": 267,
        "end": 270,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 271,
        "end": 315,
        "param": {
          "type": "ArrayPattern",
          "start": 301,
          "end": 309,
          "elements": [
            {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 311,
          "end": 315,
          "body": []
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
