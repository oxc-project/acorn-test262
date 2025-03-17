__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 340,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "callb",
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
          "start": 15,
          "end": 39,
          "name": "lam",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 39,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 20,
              "end": 39,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 21,
                  "end": 30,
                  "name": "l",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 24,
                      "end": 30
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 32,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 35,
                  "end": 39
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 43,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "name": "callb",
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
          "start": 58,
          "end": 82,
          "name": "lam",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 82,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 63,
              "end": 82,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 64,
                  "end": 73,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 67,
                      "end": 73
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 75,
                "end": 82,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 78,
                  "end": 82
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 100,
        "name": "callb",
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
          "start": 101,
          "end": 102,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 104,
        "end": 107,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 136,
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 113,
          "name": "callb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 114,
            "end": 134,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 121,
              "end": 134,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 123,
                  "end": 132,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 123,
                    "end": 131,
                    "object": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 131,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
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
      "type": "TSDeclareFunction",
      "start": 170,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 185,
        "name": "callb2",
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
          "start": 186,
          "end": 210,
          "name": "lam",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 189,
            "end": 210,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 191,
              "end": 210,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 192,
                  "end": 201,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 193,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 195,
                      "end": 201
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 203,
                "end": 210,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 206,
                  "end": 210
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 214,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 229,
        "name": "callb2",
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
          "start": 230,
          "end": 254,
          "name": "lam",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 233,
            "end": 254,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 235,
              "end": 254,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 236,
                  "end": 245,
                  "name": "l",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 239,
                      "end": 245
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 247,
                "end": 254,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 250,
                  "end": 254
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 280,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 273,
        "name": "callb2",
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
          "start": 274,
          "end": 275,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 277,
        "end": 280,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 281,
      "end": 311,
      "expression": {
        "type": "CallExpression",
        "start": 281,
        "end": 310,
        "callee": {
          "type": "Identifier",
          "start": 281,
          "end": 287,
          "name": "callb2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 288,
            "end": 308,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 289,
                "end": 290,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 295,
              "end": 308,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 297,
                  "end": 306,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 297,
                    "end": 305,
                    "object": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 305,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
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
