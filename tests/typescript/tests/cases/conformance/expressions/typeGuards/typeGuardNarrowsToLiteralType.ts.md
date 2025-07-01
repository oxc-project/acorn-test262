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
        "name": "isFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 30,
              "end": 36
            },
            "start": 28,
            "end": 36
          },
          "start": 23,
          "end": 36
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 45
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 49,
                "end": 54
              },
              "start": 49,
              "end": 54
            },
            "start": 49,
            "end": 54
          },
          "start": 40,
          "end": 54
        },
        "start": 38,
        "end": 54
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 79
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 87,
                "end": 92
              },
              "start": 87,
              "end": 92
            },
            "start": 85,
            "end": 92
          },
          "start": 80,
          "end": 92
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 95,
          "end": 99
        },
        "start": 93,
        "end": 99
      },
      "body": null,
      "expression": false,
      "start": 56,
      "end": 100
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doThat",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 124
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 132,
              "end": 138
            },
            "start": 130,
            "end": 138
          },
          "start": 125,
          "end": 138
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 142,
          "end": 146
        },
        "start": 140,
        "end": 146
      },
      "body": null,
      "expression": false,
      "start": 101,
      "end": 147
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              },
              "start": 157,
              "end": 165
            },
            "start": 152,
            "end": 165
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 165
        }
      ],
      "declare": false,
      "start": 148,
      "end": 166
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 176
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 182
          }
        ],
        "optional": false,
        "start": 171,
        "end": 183
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 197
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 203
                }
              ],
              "optional": false,
              "start": 191,
              "end": 204
            },
            "directive": null,
            "start": 191,
            "end": 205
          }
        ],
        "start": 185,
        "end": 207
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThat",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 225
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 231
                }
              ],
              "optional": false,
              "start": 219,
              "end": 232
            },
            "directive": null,
            "start": 219,
            "end": 233
          }
        ],
        "start": 213,
        "end": 235
      },
      "start": 167,
      "end": 235
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 236
}
```
