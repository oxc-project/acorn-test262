__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 229,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 22,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "name": "call",
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
          "start": 71,
          "end": 101,
          "name": "handler",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 101,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 80,
              "end": 101,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 81,
                  "end": 92,
                  "argument": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 88,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 90,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 92,
                        "name": "TS",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 94,
                "end": 101,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 97,
                  "end": 101
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 107,
          "end": 118,
          "argument": {
            "type": "Identifier",
            "start": 110,
            "end": 114,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 116,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 118,
                "name": "TS",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 65,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 64,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "name": "TS",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 55,
              "end": 64,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 55,
                "end": 62
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 119,
        "end": 125,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 121,
          "end": 125
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 168,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 167,
        "callee": {
          "type": "Identifier",
          "start": 130,
          "end": 134,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 135,
            "end": 166,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 136,
                "end": 145,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 145,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 139,
                    "end": 145
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 147,
                "end": 156,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 161,
              "end": 166,
              "left": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
      "type": "ExpressionStatement",
      "start": 169,
      "end": 228,
      "expression": {
        "type": "CallExpression",
        "start": 169,
        "end": 227,
        "callee": {
          "type": "Identifier",
          "start": 169,
          "end": 173,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 174,
            "end": 205,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 175,
                "end": 184,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 176,
                  "end": 184,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 178,
                    "end": 184
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 186,
                "end": 195,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 187,
                  "end": 195,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 189,
                    "end": 195
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 200,
              "end": 205,
              "left": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 207,
            "end": 208,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 210,
            "end": 211,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 213,
            "end": 214,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 216,
            "end": 217,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "Literal",
            "start": 219,
            "end": 220,
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Literal",
            "start": 222,
            "end": 223,
            "value": 6,
            "raw": "6"
          },
          {
            "type": "Literal",
            "start": 225,
            "end": 226,
            "value": 7,
            "raw": "7"
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
