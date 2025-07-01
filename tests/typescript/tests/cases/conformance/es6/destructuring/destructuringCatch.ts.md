__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 17,
                  "end": 18
                },
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 20,
                  "end": 21
                }
              ],
              "start": 16,
              "end": 22
            },
            "start": 10,
            "end": 23
          }
        ],
        "start": 4,
        "end": 25
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 39
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 48
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "start": 47,
                "end": 52
              },
              "directive": null,
              "start": 47,
              "end": 53
            }
          ],
          "start": 41,
          "end": 55
        },
        "start": 26,
        "end": 55
      },
      "finalizer": null,
      "start": 0,
      "end": 55
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 76
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 78,
                    "end": 79
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 75,
                  "end": 79
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 84,
                    "end": 85
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 81,
                  "end": 85
                }
              ],
              "start": 73,
              "end": 87
            },
            "start": 67,
            "end": 88
          }
        ],
        "start": 61,
        "end": 90
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 100
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 100
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 99,
              "end": 100
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 103
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 103
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 102,
              "end": 103
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 104
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 113
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 117
                },
                "start": 112,
                "end": 117
              },
              "directive": null,
              "start": 112,
              "end": 118
            }
          ],
          "start": 106,
          "end": 120
        },
        "start": 91,
        "end": 120
      },
      "finalizer": null,
      "start": 57,
      "end": 120
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 142
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 145,
                            "end": 146
                          }
                        ],
                        "start": 144,
                        "end": 147
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 141,
                      "end": 147
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 149,
                        "end": 150
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 152,
                        "end": 153
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 149,
                      "end": 153
                    }
                  ],
                  "start": 139,
                  "end": 155
                }
              ],
              "start": 138,
              "end": 156
            },
            "start": 132,
            "end": 157
          }
        ],
        "start": 126,
        "end": 159
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "value": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 174
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 175
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 169,
                  "end": 175
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 178
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 178
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 177,
                  "end": 178
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 179
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 180
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 189
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 193
                },
                "start": 188,
                "end": 193
              },
              "directive": null,
              "start": 188,
              "end": 194
            }
          ],
          "start": 182,
          "end": 196
        },
        "start": 160,
        "end": 196
      },
      "finalizer": null,
      "start": 122,
      "end": 196
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 267,
        "end": 270
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 301,
          "end": 309
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 311,
          "end": 315
        },
        "start": 271,
        "end": 315
      },
      "finalizer": null,
      "start": 263,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 315
}
```
