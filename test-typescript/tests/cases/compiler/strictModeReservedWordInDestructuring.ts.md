__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 306,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 1,
        "end": 13,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 32,
          "id": {
            "type": "ArrayPattern",
            "start": 18,
            "end": 26,
            "elements": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 25,
                "name": "public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 29,
            "end": 32,
            "elements": [
              {
                "type": "Literal",
                "start": 30,
                "end": 31,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 62,
          "id": {
            "type": "ObjectPattern",
            "start": 38,
            "end": 51,
            "properties": [
              {
                "type": "Property",
                "start": 40,
                "end": 49,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "name": "public",
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
          "init": {
            "type": "ObjectExpression",
            "start": 54,
            "end": 62,
            "properties": [
              {
                "type": "Property",
                "start": 56,
                "end": 60,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 59,
                  "end": 60,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 93,
          "id": {
            "type": "ArrayPattern",
            "start": 68,
            "end": 79,
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 69,
                "end": 78,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 70,
                    "end": 77,
                    "name": "private",
                    "typeAnnotation": null,
                    "decorators": [],
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
          "init": {
            "type": "ArrayExpression",
            "start": 82,
            "end": 93,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 83,
                "end": 92,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 84,
                    "end": 91,
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 184,
          "id": {
            "type": "ObjectPattern",
            "start": 99,
            "end": 144,
            "properties": [
              {
                "type": "Property",
                "start": 101,
                "end": 117,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 104,
                  "end": 117,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 106,
                      "end": 115,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 107,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 115,
                        "name": "static",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 119,
                "end": 143,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 122,
                  "end": 143,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 124,
                      "end": 141,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 125,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 127,
                        "end": 141,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 129,
                            "end": 139,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 129,
                              "end": 130,
                              "name": "p",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 132,
                              "end": 139,
                              "name": "package",
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
                      "kind": "init",
                      "optional": false
                    }
                  ],
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
          "init": {
            "type": "ObjectExpression",
            "start": 147,
            "end": 184,
            "properties": [
              {
                "type": "Property",
                "start": 149,
                "end": 160,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 152,
                  "end": 160,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 154,
                      "end": 158,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 157,
                        "end": 158,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 162,
                "end": 182,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 165,
                  "end": 182,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 167,
                      "end": 180,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 170,
                        "end": 180,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 172,
                            "end": 178,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 173,
                              "name": "p",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 175,
                              "end": 178,
                              "value": "h",
                              "raw": "'h'"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 241,
          "id": {
            "type": "ObjectPattern",
            "start": 190,
            "end": 211,
            "properties": [
              {
                "type": "Property",
                "start": 192,
                "end": 198,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 198,
                  "name": "public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 198,
                  "name": "public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 200,
                "end": 209,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 209,
                  "name": "protected",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 209,
                  "name": "protected",
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
          "init": {
            "type": "ObjectExpression",
            "start": 214,
            "end": 241,
            "properties": [
              {
                "type": "Property",
                "start": 216,
                "end": 225,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 222,
                  "name": "public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 224,
                  "end": 225,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 227,
                "end": 239,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 236,
                  "name": "protected",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 238,
                  "end": 239,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 243,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 304,
          "id": {
            "type": "ObjectPattern",
            "start": 247,
            "end": 274,
            "properties": [
              {
                "type": "Property",
                "start": 249,
                "end": 258,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 255,
                  "name": "public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
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
                "start": 260,
                "end": 272,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 269,
                  "name": "protected",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
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
          "init": {
            "type": "ObjectExpression",
            "start": 277,
            "end": 304,
            "properties": [
              {
                "type": "Property",
                "start": 279,
                "end": 288,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 285,
                  "name": "public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 287,
                  "end": 288,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 290,
                "end": 302,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 299,
                  "name": "protected",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 301,
                  "end": 302,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
