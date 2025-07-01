__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "public",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 24
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 25
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 29,
                "end": 30
              }
            ],
            "start": 28,
            "end": 31
          },
          "definite": false,
          "start": 17,
          "end": 31
        }
      ],
      "declare": false,
      "start": 13,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "start": 39,
                  "end": 40
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 48
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 39,
                "end": 48
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 50
          },
          "init": {
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
                  "start": 55,
                  "end": 56
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 58,
                  "end": 59
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 55,
                "end": 59
              }
            ],
            "start": 53,
            "end": 61
          },
          "definite": false,
          "start": 37,
          "end": 61
        }
      ],
      "declare": false,
      "start": 33,
      "end": 62
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 76
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 77
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 78
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 83,
                    "end": 90
                  }
                ],
                "start": 82,
                "end": 91
              }
            ],
            "start": 81,
            "end": 92
          },
          "definite": false,
          "start": 67,
          "end": 92
        }
      ],
      "declare": false,
      "start": 63,
      "end": 93
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 106
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "static",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 114
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 105,
                      "end": 114
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 116
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 100,
                "end": 116
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
                  "start": 118,
                  "end": 119
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 124
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 128,
                              "end": 129
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "package",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 131,
                              "end": 138
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 128,
                            "end": 138
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 140
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 123,
                      "end": 140
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 142
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 118,
                "end": 142
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 143
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 154
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 156,
                        "end": 157
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 153,
                      "end": 157
                    }
                  ],
                  "start": 151,
                  "end": 159
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 148,
                "end": 159
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
                  "start": 161,
                  "end": 162
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 167
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 171,
                              "end": 172
                            },
                            "value": {
                              "type": "Literal",
                              "value": "h",
                              "raw": "'h'",
                              "start": 174,
                              "end": 177
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 171,
                            "end": 177
                          }
                        ],
                        "start": 169,
                        "end": 179
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 166,
                      "end": 179
                    }
                  ],
                  "start": 164,
                  "end": 181
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 161,
                "end": 181
              }
            ],
            "start": 146,
            "end": 183
          },
          "definite": false,
          "start": 98,
          "end": 183
        }
      ],
      "declare": false,
      "start": 94,
      "end": 184
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 197
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 197
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 191,
                "end": 197
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 208
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 208
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 199,
                "end": 208
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 210
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 221
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 223,
                  "end": 224
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 215,
                "end": 224
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 235
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 237,
                  "end": 238
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 226,
                "end": 238
              }
            ],
            "start": 213,
            "end": 240
          },
          "definite": false,
          "start": 189,
          "end": 240
        }
      ],
      "declare": false,
      "start": 185,
      "end": 241
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 254
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 248,
                "end": 257
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 268
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 271
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 259,
                "end": 271
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 273
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 284
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 286,
                  "end": 287
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 278,
                "end": 287
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 298
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 300,
                  "end": 301
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 289,
                "end": 301
              }
            ],
            "start": 276,
            "end": 303
          },
          "definite": false,
          "start": 246,
          "end": 303
        }
      ],
      "declare": false,
      "start": 242,
      "end": 304
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 304
}
```
