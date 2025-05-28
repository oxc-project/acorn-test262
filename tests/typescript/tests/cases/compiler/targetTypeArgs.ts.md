__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 354,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 42,
          "decorators": [],
          "name": "callback",
          "optional": false,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 33,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    }
                  }
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
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 59,
                  "end": 66,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 79,
            "end": 96,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 112,
            "end": 133,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 152,
            "end": 182,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
            "expression": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 195,
            "end": 225,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
            "expression": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 238,
            "end": 268,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 249,
                "end": 250,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 251,
                "end": 252,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
            "expression": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 283,
            "end": 313,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 296,
                "end": 297,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
            "expression": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 330,
            "end": 351,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 341,
                "end": 342,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 343,
                "end": 344,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
