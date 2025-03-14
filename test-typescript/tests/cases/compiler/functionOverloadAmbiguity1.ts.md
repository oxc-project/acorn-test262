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
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "callb",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 39,
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 39,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 20,
              "end": 39,
              "params": [
                {
                  "type": "Identifier",
                  "start": 21,
                  "end": 30,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 24,
                      "end": 30
                    }
                  }
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
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 43,
      "end": 85,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "decorators": [],
        "name": "callb",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 58,
          "end": 82,
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 82,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 63,
              "end": 82,
              "params": [
                {
                  "type": "Identifier",
                  "start": 64,
                  "end": 73,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 67,
                      "end": 73
                    }
                  }
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
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 107,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 104,
        "end": 107,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 100,
        "decorators": [],
        "name": "callb",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 101,
          "end": 102,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 136,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 114,
            "end": 134,
            "async": false,
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
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 131,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 113,
          "decorators": [],
          "name": "callb",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 170,
      "end": 213,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 185,
        "decorators": [],
        "name": "callb2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 186,
          "end": 210,
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 189,
            "end": 210,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 191,
              "end": 210,
              "params": [
                {
                  "type": "Identifier",
                  "start": 192,
                  "end": 201,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 193,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 195,
                      "end": 201
                    }
                  }
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
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 214,
      "end": 257,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 229,
        "decorators": [],
        "name": "callb2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 230,
          "end": 254,
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 233,
            "end": 254,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 235,
              "end": 254,
              "params": [
                {
                  "type": "Identifier",
                  "start": 236,
                  "end": 245,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 239,
                      "end": 245
                    }
                  }
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
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 280,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 277,
        "end": 280,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 273,
        "decorators": [],
        "name": "callb2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 274,
          "end": 275,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 281,
      "end": 311,
      "expression": {
        "type": "CallExpression",
        "start": 281,
        "end": 310,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 288,
            "end": 308,
            "async": false,
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
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 305,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 289,
                "end": 290,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 281,
          "end": 287,
          "decorators": [],
          "name": "callb2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
