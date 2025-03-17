__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 7,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 6,
        "arguments": [],
        "callee": {
          "type": "Literal",
          "start": 0,
          "end": 4,
          "raw": "null",
          "value": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 8,
      "end": 20,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 8,
        "end": 19,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 8,
          "end": 17,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 44,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 44,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 28,
                "end": 44,
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 28,
                    "end": 32
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 35,
                    "end": 44
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 46,
      "end": 50,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 46,
        "end": 49,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "decorators": [],
          "name": "f",
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
