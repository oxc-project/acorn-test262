__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "call",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TS",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 46
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 55,
                "end": 62
              },
              "start": 55,
              "end": 64
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 64
          }
        ],
        "start": 43,
        "end": 65
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 88
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 90,
                        "end": 92
                      },
                      "typeArguments": null,
                      "start": 90,
                      "end": 92
                    },
                    "start": 88,
                    "end": 92
                  },
                  "value": null,
                  "start": 81,
                  "end": 92
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 97,
                  "end": 101
                },
                "start": 94,
                "end": 101
              },
              "start": 80,
              "end": 101
            },
            "start": 78,
            "end": 101
          },
          "start": 71,
          "end": 101
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 114
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TS",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 118
              },
              "typeArguments": null,
              "start": 116,
              "end": 118
            },
            "start": 114,
            "end": 118
          },
          "value": null,
          "start": 107,
          "end": 118
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 121,
          "end": 125
        },
        "start": 119,
        "end": 125
      },
      "body": null,
      "expression": false,
      "start": 22,
      "end": 126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 134
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 139,
                    "end": 145
                  },
                  "start": 137,
                  "end": 145
                },
                "start": 136,
                "end": 145
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  },
                  "start": 148,
                  "end": 156
                },
                "start": 147,
                "end": 156
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "start": 161,
              "end": 166
            },
            "id": null,
            "generator": false,
            "start": 135,
            "end": 166
          }
        ],
        "optional": false,
        "start": 130,
        "end": 167
      },
      "directive": null,
      "start": 130,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 173
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 178,
                    "end": 184
                  },
                  "start": 176,
                  "end": 184
                },
                "start": 175,
                "end": 184
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 189,
                    "end": 195
                  },
                  "start": 187,
                  "end": 195
                },
                "start": 186,
                "end": 195
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 201
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 205
              },
              "start": 200,
              "end": 205
            },
            "id": null,
            "generator": false,
            "start": 174,
            "end": 205
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 207,
            "end": 208
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 210,
            "end": 211
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 213,
            "end": 214
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 216,
            "end": 217
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 219,
            "end": 220
          },
          {
            "type": "Literal",
            "value": 6,
            "raw": "6",
            "start": 222,
            "end": 223
          },
          {
            "type": "Literal",
            "value": 7,
            "raw": "7",
            "start": 225,
            "end": 226
          }
        ],
        "optional": false,
        "start": 169,
        "end": 227
      },
      "directive": null,
      "start": 169,
      "end": 228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 228
}
```
