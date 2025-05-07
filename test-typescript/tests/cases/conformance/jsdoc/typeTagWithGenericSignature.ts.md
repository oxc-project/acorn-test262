__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 47,
  "end": 110,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 90,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 90,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 75,
            "end": 88,
            "argument": {
              "type": "Identifier",
              "start": 82,
              "end": 87,
              "decorators": [],
              "name": "param",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "decorators": [],
        "name": "typed",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 67,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 100,
            "end": 108,
            "arguments": [
              {
                "type": "Literal",
                "start": 106,
                "end": 107,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 100,
              "end": 105,
              "decorators": [],
              "name": "typed",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
