__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "typed",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 61
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 67
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "param",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 87
            },
            "start": 75,
            "end": 88
          }
        ],
        "start": 69,
        "end": 90
      },
      "expression": false,
      "start": 47,
      "end": 90
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "typed",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 105
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 106,
                "end": 107
              }
            ],
            "optional": false,
            "start": 100,
            "end": 108
          },
          "definite": false,
          "start": 96,
          "end": 108
        }
      ],
      "declare": false,
      "start": 92,
      "end": 109
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 47,
  "end": 110
}
```
