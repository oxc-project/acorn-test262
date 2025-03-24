__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 305,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 1,
        "end": 13,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
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
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 18,
            "end": 26,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 25,
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
            "start": 29,
            "end": 32,
            "elements": [
              {
                "type": "Literal",
                "start": 30,
                "end": 31,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 38,
            "end": 51,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 40,
                "end": 49,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 59,
                  "end": 60,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 68,
            "end": 79,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 69,
                "end": 78,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 70,
                    "end": 77,
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
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 99,
            "end": 144,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 101,
                "end": 117,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 104,
                  "end": 117,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 106,
                      "end": 115,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 107,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 115,
                        "decorators": [],
                        "name": "static",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 119,
                "end": 143,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 122,
                  "end": 143,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 124,
                      "end": 141,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 125,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectPattern",
                        "start": 127,
                        "end": 141,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 129,
                            "end": 139,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 129,
                              "end": 130,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 132,
                              "end": 139,
                              "decorators": [],
                              "name": "package",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                }
              }
            ],
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 152,
                  "end": 160,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 154,
                      "end": 158,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 157,
                        "end": 158,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 162,
                "end": 182,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 165,
                  "end": 182,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 167,
                      "end": 180,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 170,
                        "end": 180,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 172,
                            "end": 178,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 173,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 175,
                              "end": 178,
                              "raw": "'h'",
                              "value": "h"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 190,
            "end": 211,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 192,
                "end": 198,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 198,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 198,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 200,
                "end": 209,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 209,
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 209,
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 222,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 224,
                  "end": 225,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 227,
                "end": 239,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 236,
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 238,
                  "end": 239,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 247,
            "end": 274,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 249,
                "end": 258,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 255,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 260,
                "end": 272,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 269,
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 285,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 287,
                  "end": 288,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 290,
                "end": 302,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 299,
                  "decorators": [],
                  "name": "protected",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 301,
                  "end": 302,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
