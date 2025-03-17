__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 355,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 42,
          "name": "callback",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 42,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 23,
              "end": 42,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 24,
                  "end": 33,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 33,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 38,
                  "end": 42
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 73,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 50,
            "end": 68,
            "expression": {
              "type": "CallExpression",
              "start": 50,
              "end": 67,
              "callee": {
                "type": "Identifier",
                "start": 50,
                "end": 58,
                "name": "callback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 59,
                  "end": 66,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 98,
      "expression": {
        "type": "CallExpression",
        "start": 75,
        "end": 97,
        "callee": {
          "type": "Identifier",
          "start": 75,
          "end": 78,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 79,
            "end": 96,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 91,
              "end": 96,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 93,
                  "end": 94,
                  "expression": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 135,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 134,
        "callee": {
          "type": "MemberExpression",
          "start": 100,
          "end": 111,
          "object": {
            "type": "ArrayExpression",
            "start": 100,
            "end": 103,
            "elements": [
              {
                "type": "Literal",
                "start": 101,
                "end": 102,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 104,
            "end": 111,
            "name": "forEach",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 112,
            "end": 133,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 128,
              "end": 133,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 130,
                  "end": 131,
                  "expression": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 131,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 184,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 183,
        "callee": {
          "type": "MemberExpression",
          "start": 136,
          "end": 151,
          "object": {
            "type": "ArrayExpression",
            "start": 136,
            "end": 145,
            "elements": [
              {
                "type": "Literal",
                "start": 137,
                "end": 144,
                "value": "hello",
                "raw": "\"hello\""
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 151,
            "name": "every",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 152,
            "end": 182,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 168,
              "end": 182,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 169,
                  "end": 181,
                  "argument": {
                    "type": "Literal",
                    "start": 176,
                    "end": 180,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 227,
      "expression": {
        "type": "CallExpression",
        "start": 185,
        "end": 226,
        "callee": {
          "type": "MemberExpression",
          "start": 185,
          "end": 194,
          "object": {
            "type": "ArrayExpression",
            "start": 185,
            "end": 188,
            "elements": [
              {
                "type": "Literal",
                "start": 186,
                "end": 187,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 194,
            "name": "every",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 195,
            "end": 225,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 211,
              "end": 225,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 212,
                  "end": 224,
                  "argument": {
                    "type": "Literal",
                    "start": 219,
                    "end": 223,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 270,
      "expression": {
        "type": "CallExpression",
        "start": 228,
        "end": 269,
        "callee": {
          "type": "MemberExpression",
          "start": 228,
          "end": 237,
          "object": {
            "type": "ArrayExpression",
            "start": 228,
            "end": 231,
            "elements": [
              {
                "type": "Literal",
                "start": 229,
                "end": 230,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 232,
            "end": 237,
            "name": "every",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 238,
            "end": 268,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 249,
                "end": 250,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 251,
                "end": 252,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 254,
              "end": 268,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 255,
                  "end": 267,
                  "argument": {
                    "type": "Literal",
                    "start": 262,
                    "end": 266,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 315,
      "expression": {
        "type": "CallExpression",
        "start": 271,
        "end": 314,
        "callee": {
          "type": "MemberExpression",
          "start": 271,
          "end": 282,
          "object": {
            "type": "ArrayExpression",
            "start": 271,
            "end": 276,
            "elements": [
              {
                "type": "Literal",
                "start": 272,
                "end": 275,
                "value": "s",
                "raw": "\"s\""
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 277,
            "end": 282,
            "name": "every",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 283,
            "end": 313,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 296,
                "end": 297,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 299,
              "end": 313,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 300,
                  "end": 312,
                  "argument": {
                    "type": "Literal",
                    "start": 307,
                    "end": 311,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 353,
      "expression": {
        "type": "CallExpression",
        "start": 316,
        "end": 352,
        "callee": {
          "type": "MemberExpression",
          "start": 316,
          "end": 329,
          "object": {
            "type": "ArrayExpression",
            "start": 316,
            "end": 321,
            "elements": [
              {
                "type": "Literal",
                "start": 317,
                "end": 320,
                "value": "s",
                "raw": "\"s\""
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 322,
            "end": 329,
            "name": "forEach",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 330,
            "end": 351,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 341,
                "end": 342,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 343,
                "end": 344,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 346,
              "end": 351,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 348,
                  "end": 349,
                  "expression": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 349,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
