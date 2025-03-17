__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 11,
          "end": 56,
          "name": "callback",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 56,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 21,
              "end": 56,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 22,
                  "end": 33,
                  "name": "arg",
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
                },
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 47,
                  "name": "arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 52,
                  "end": 56
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 63,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 59,
          "end": 63
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 65,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "name": "f",
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
          "start": 76,
          "end": 107,
          "name": "callback",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 107,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 86,
              "end": 107,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 98,
                  "name": "arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 100,
                "end": 107,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 103,
                  "end": 107
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 108,
        "end": 114,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 110,
          "end": 114
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "name": "f",
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
          "start": 127,
          "end": 144,
          "name": "callback",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 135,
            "end": 144,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 137,
              "end": 144
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 149,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 151,
        "end": 187,
        "callee": {
          "type": "Identifier",
          "start": 151,
          "end": 152,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 153,
            "end": 186,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 154,
                "end": 165,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 165,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 159,
                    "end": 165
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 167,
                "end": 179,
                "name": "arg2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 173,
                    "end": 179
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 184,
              "end": 186,
              "body": []
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
