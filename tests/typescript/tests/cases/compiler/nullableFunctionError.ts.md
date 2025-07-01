__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 0,
          "end": 4
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 0,
        "end": 6
      },
      "directive": null,
      "start": 0,
      "end": 7
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 8,
          "end": 17
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 8,
        "end": 19
      },
      "directive": null,
      "start": 8,
      "end": 20
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 28,
                "end": 44
              },
              "start": 26,
              "end": 44
            },
            "start": 25,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 25,
          "end": 44
        }
      ],
      "declare": false,
      "start": 21,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 47
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 46,
        "end": 49
      },
      "directive": null,
      "start": 46,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
