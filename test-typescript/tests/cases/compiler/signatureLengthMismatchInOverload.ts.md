signatureLengthMismatchInOverload.ts
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
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 56,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 56,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 21,
              "end": 56,
              "params": [
                {
                  "type": "Identifier",
                  "start": 22,
                  "end": 33,
                  "decorators": [],
                  "name": "arg",
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
                },
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 47,
                  "decorators": [],
                  "name": "arg2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    }
                  }
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
          }
        }
      ],
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
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 107,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 107,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 86,
              "end": 107,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 98,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
                    }
                  }
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
          }
        }
      ],
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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 149,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 144,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 135,
            "end": 144,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 137,
              "end": 144
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 151,
        "end": 187,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 153,
            "end": 186,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 184,
              "end": 186,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 154,
                "end": 165,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 165,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 159,
                    "end": 165
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 167,
                "end": 179,
                "decorators": [],
                "name": "arg2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 173,
                    "end": 179
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 151,
          "end": 152,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
