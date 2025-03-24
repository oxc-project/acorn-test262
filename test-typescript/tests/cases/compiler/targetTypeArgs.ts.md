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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 73,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 50,
            "end": 68,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 50,
              "end": 67,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 59,
                  "end": 66,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 50,
                "end": 58,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 98,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 75,
        "end": 97,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 79,
            "end": 96,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 91,
              "end": 96,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 93,
                  "end": 94,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 75,
          "end": 78,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 135,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 134,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 112,
            "end": 133,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 128,
              "end": 133,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 130,
                  "end": 131,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 131,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 100,
          "end": 111,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 100,
            "end": 103,
            "elements": [
              {
                "type": "Literal",
                "start": 101,
                "end": 102,
                "raw": "1",
                "value": 1
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 104,
            "end": 111,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 184,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 183,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 152,
            "end": 182,
            "async": false,
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
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 136,
          "end": 151,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 136,
            "end": 145,
            "elements": [
              {
                "type": "Literal",
                "start": 137,
                "end": 144,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 151,
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 227,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 185,
        "end": 226,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 195,
            "end": 225,
            "async": false,
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
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 185,
          "end": 194,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 185,
            "end": 188,
            "elements": [
              {
                "type": "Literal",
                "start": 186,
                "end": 187,
                "raw": "1",
                "value": 1
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 194,
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 270,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 228,
        "end": 269,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 238,
            "end": 268,
            "async": false,
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
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 228,
          "end": 237,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 228,
            "end": 231,
            "elements": [
              {
                "type": "Literal",
                "start": 229,
                "end": 230,
                "raw": "1",
                "value": 1
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 232,
            "end": 237,
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 315,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 271,
        "end": 314,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 283,
            "end": 313,
            "async": false,
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
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 271,
          "end": 282,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 271,
            "end": 276,
            "elements": [
              {
                "type": "Literal",
                "start": 272,
                "end": 275,
                "raw": "\"s\"",
                "value": "s"
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 277,
            "end": 282,
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 353,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 316,
        "end": 352,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 330,
            "end": 351,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 346,
              "end": 351,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 348,
                  "end": 349,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 349,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 316,
          "end": 329,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 316,
            "end": 321,
            "elements": [
              {
                "type": "Literal",
                "start": 317,
                "end": 320,
                "raw": "\"s\"",
                "value": "s"
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 322,
            "end": 329,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
