__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 304,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 32,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 31,
          "id": {
            "type": "ArrayPattern",
            "start": 17,
            "end": 25,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 18,
                "end": 24,
                "decorators": [],
                "name": "public",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 28,
            "end": 31,
            "elements": [
              {
                "type": "Literal",
                "start": 29,
                "end": 30,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 62,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 61,
          "id": {
            "type": "ObjectPattern",
            "start": 37,
            "end": 50,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 39,
                "end": 48,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 48,
                  "decorators": [],
                  "name": "public",
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
          "init": {
            "type": "ObjectExpression",
            "start": 53,
            "end": 61,
            "properties": [
              {
                "type": "Property",
                "start": 55,
                "end": 59,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 58,
                  "end": 59,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 93,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 92,
          "id": {
            "type": "ArrayPattern",
            "start": 67,
            "end": 78,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 68,
                "end": 77,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 69,
                    "end": 76,
                    "decorators": [],
                    "name": "private",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 81,
            "end": 92,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 82,
                "end": 91,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 83,
                    "end": 90,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 184,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 183,
          "id": {
            "type": "ObjectPattern",
            "start": 98,
            "end": 143,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 100,
                "end": 116,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 103,
                  "end": 116,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 105,
                      "end": 114,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 106,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 114,
                        "decorators": [],
                        "name": "static",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 118,
                "end": 142,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 121,
                  "end": 142,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 123,
                      "end": 140,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 124,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 126,
                        "end": 140,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 128,
                            "end": 138,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 128,
                              "end": 129,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 138,
                              "decorators": [],
                              "name": "package",
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
          "init": {
            "type": "ObjectExpression",
            "start": 146,
            "end": 183,
            "properties": [
              {
                "type": "Property",
                "start": 148,
                "end": 159,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 151,
                  "end": 159,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 153,
                      "end": 157,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 156,
                        "end": 157,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 161,
                "end": 181,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 164,
                  "end": 181,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 166,
                      "end": 179,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 167,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 169,
                        "end": 179,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 171,
                            "end": 177,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 172,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 174,
                              "end": 177,
                              "value": "h",
                              "raw": "'h'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 241,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 240,
          "id": {
            "type": "ObjectPattern",
            "start": 189,
            "end": 210,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 191,
                "end": 197,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 197,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 197,
                  "decorators": [],
                  "name": "public",
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
                "start": 199,
                "end": 208,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 208,
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 208,
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 213,
            "end": 240,
            "properties": [
              {
                "type": "Property",
                "start": 215,
                "end": 224,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 221,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 223,
                  "end": 224,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 226,
                "end": 238,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 235,
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 237,
                  "end": 238,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 304,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 303,
          "id": {
            "type": "ObjectPattern",
            "start": 246,
            "end": 273,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 248,
                "end": 257,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 254,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "a",
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
                "start": 259,
                "end": 271,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 268,
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 271,
                  "decorators": [],
                  "name": "b",
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
          "init": {
            "type": "ObjectExpression",
            "start": 276,
            "end": 303,
            "properties": [
              {
                "type": "Property",
                "start": 278,
                "end": 287,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 284,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 286,
                  "end": 287,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 289,
                "end": 301,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 298,
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 300,
                  "end": 301,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
