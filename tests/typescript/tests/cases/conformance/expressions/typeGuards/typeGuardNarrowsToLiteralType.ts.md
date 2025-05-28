__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "isFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
          "parameterName": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
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
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 79,
        "decorators": [],
        "name": "doThis",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                "value": "foo",
                "raw": "\"foo\""
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 101,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 124,
        "decorators": [],
        "name": "doThat",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 166,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 165,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 167,
      "end": 235,
      "test": {
        "type": "CallExpression",
        "start": 171,
        "end": 183,
        "callee": {
          "type": "Identifier",
          "start": 171,
          "end": 176,
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
            "expression": {
              "type": "CallExpression",
              "start": 191,
              "end": 204,
              "callee": {
                "type": "Identifier",
                "start": 191,
                "end": 197,
                "decorators": [],
                "name": "doThis",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 213,
        "end": 235,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 219,
            "end": 233,
            "expression": {
              "type": "CallExpression",
              "start": 219,
              "end": 232,
              "callee": {
                "type": "Identifier",
                "start": 219,
                "end": 225,
                "decorators": [],
                "name": "doThat",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
