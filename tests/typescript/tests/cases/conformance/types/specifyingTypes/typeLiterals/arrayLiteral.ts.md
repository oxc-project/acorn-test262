__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 41,
            "end": 43
          },
          "definite": false,
          "start": 37,
          "end": 43
        }
      ],
      "declare": false,
      "start": 33,
      "end": 44
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 62
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 63,
                "end": 64
              }
            ],
            "start": 53,
            "end": 65
          },
          "definite": false,
          "start": 49,
          "end": 65
        }
      ],
      "declare": false,
      "start": 45,
      "end": 66
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 77,
                "end": 78
              }
            ],
            "start": 76,
            "end": 79
          },
          "definite": false,
          "start": 72,
          "end": 79
        }
      ],
      "declare": false,
      "start": 68,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 90,
                "end": 91
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 93,
                "end": 94
              }
            ],
            "start": 89,
            "end": 95
          },
          "definite": false,
          "start": 85,
          "end": 95
        }
      ],
      "declare": false,
      "start": 81,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 102
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 114
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 115,
                  "end": 121
                }
              ],
              "start": 114,
              "end": 122
            },
            "arguments": [],
            "start": 105,
            "end": 124
          },
          "definite": false,
          "start": 101,
          "end": 124
        }
      ],
      "declare": false,
      "start": 97,
      "end": 125
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 135,
                  "end": 141
                },
                "start": 135,
                "end": 143
              },
              "start": 133,
              "end": 143
            },
            "start": 131,
            "end": 143
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 146,
            "end": 148
          },
          "definite": false,
          "start": 131,
          "end": 148
        }
      ],
      "declare": false,
      "start": 127,
      "end": 149
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 158,
                  "end": 164
                },
                "start": 158,
                "end": 166
              },
              "start": 156,
              "end": 166
            },
            "start": 154,
            "end": 166
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 178
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 179,
                "end": 180
              }
            ],
            "start": 169,
            "end": 181
          },
          "definite": false,
          "start": 154,
          "end": 181
        }
      ],
      "declare": false,
      "start": 150,
      "end": 182
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 192,
                  "end": 198
                },
                "start": 192,
                "end": 200
              },
              "start": 190,
              "end": 200
            },
            "start": 188,
            "end": 200
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 204,
                "end": 205
              }
            ],
            "start": 203,
            "end": 206
          },
          "definite": false,
          "start": 188,
          "end": 206
        }
      ],
      "declare": false,
      "start": 184,
      "end": 207
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 216,
                  "end": 222
                },
                "start": 216,
                "end": 224
              },
              "start": 214,
              "end": 224
            },
            "start": 212,
            "end": 224
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 228,
                "end": 229
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 231,
                "end": 232
              }
            ],
            "start": 227,
            "end": 233
          },
          "definite": false,
          "start": 212,
          "end": 233
        }
      ],
      "declare": false,
      "start": 208,
      "end": 234
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 243,
                  "end": 249
                },
                "start": 243,
                "end": 251
              },
              "start": 241,
              "end": 251
            },
            "start": 239,
            "end": 251
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 263
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 264,
                  "end": 270
                }
              ],
              "start": 263,
              "end": 271
            },
            "arguments": [],
            "start": 254,
            "end": 273
          },
          "definite": false,
          "start": 239,
          "end": 273
        }
      ],
      "declare": false,
      "start": 235,
      "end": 274
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 274
}
```
