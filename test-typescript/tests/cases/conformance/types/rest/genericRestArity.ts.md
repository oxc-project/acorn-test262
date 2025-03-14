genericRestArity.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "call",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 71,
          "end": 101,
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 101,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 80,
              "end": 101,
              "params": [
                {
                  "type": "RestElement",
                  "start": 81,
                  "end": 92,
                  "argument": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 88,
                    "decorators": [],
                    "name": "args",
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
                        "decorators": [],
                        "name": "TS",
                        "optional": false
                      }
                    }
                  }
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
          }
        },
        {
          "type": "RestElement",
          "start": 107,
          "end": 118,
          "argument": {
            "type": "Identifier",
            "start": 110,
            "end": 114,
            "decorators": [],
            "name": "args",
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
                "decorators": [],
                "name": "TS",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 119,
        "end": 125,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 121,
          "end": 125
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 65,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 64,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "decorators": [],
              "name": "TS",
              "optional": false
            },
            "out": false
          }
        ]
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
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 135,
            "end": 166,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 161,
              "end": 166,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 136,
                "end": 145,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 145,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 139,
                    "end": 145
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 147,
                "end": 156,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 130,
          "end": 134,
          "decorators": [],
          "name": "call",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 228,
      "expression": {
        "type": "CallExpression",
        "start": 169,
        "end": 227,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 174,
            "end": 205,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 200,
              "end": 205,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 175,
                "end": 184,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 176,
                  "end": 184,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 178,
                    "end": 184
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 186,
                "end": 195,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 187,
                  "end": 195,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 189,
                    "end": 195
                  }
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 207,
            "end": 208,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 210,
            "end": 211,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 213,
            "end": 214,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 216,
            "end": 217,
            "raw": "4",
            "value": 4
          },
          {
            "type": "Literal",
            "start": 219,
            "end": 220,
            "raw": "5",
            "value": 5
          },
          {
            "type": "Literal",
            "start": 222,
            "end": 223,
            "raw": "6",
            "value": 6
          },
          {
            "type": "Literal",
            "start": 225,
            "end": 226,
            "raw": "7",
            "value": 7
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 169,
          "end": 173,
          "decorators": [],
          "name": "call",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
