__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 55,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "isFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 36,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 36,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 30,
              "end": 36
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 54,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 40,
          "end": 54,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 54,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 49,
              "end": 54,
              "literal": {
                "type": "Literal",
                "start": 49,
                "end": 54,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 100,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 79,
        "decorators": [],
        "name": "doThis",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 80,
          "end": 92,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 92,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 87,
              "end": 92,
              "literal": {
                "type": "Literal",
                "start": 87,
                "end": 92,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 93,
        "end": 99,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 95,
          "end": 99
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 101,
      "end": 147,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 124,
        "decorators": [],
        "name": "doThat",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 125,
          "end": 138,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 138,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 132,
              "end": 138
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 140,
        "end": 146,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 142,
          "end": 146
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 165,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 165,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 167,
      "end": 235,
      "alternate": {
        "type": "BlockStatement",
        "start": 213,
        "end": 235,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 219,
            "end": 233,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 219,
              "end": 232,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 226,
                  "end": 231,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 219,
                "end": 225,
                "decorators": [],
                "name": "doThat",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 185,
        "end": 207,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 191,
            "end": 205,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 191,
              "end": 204,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 198,
                  "end": 203,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 191,
                "end": 197,
                "decorators": [],
                "name": "doThis",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 171,
        "end": 183,
        "arguments": [
          {
            "type": "Identifier",
            "start": 177,
            "end": 182,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 171,
          "end": 176,
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null
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
