__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 7,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 6,
        "callee": {
          "type": "Literal",
          "start": 0,
          "end": 4,
          "value": null,
          "raw": "null"
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 8,
      "end": 20,
      "expression": {
        "type": "CallExpression",
        "start": 8,
        "end": 19,
        "callee": {
          "type": "Identifier",
          "start": 8,
          "end": 17,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 45,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 44,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 50,
      "expression": {
        "type": "CallExpression",
        "start": 46,
        "end": 49,
        "callee": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
