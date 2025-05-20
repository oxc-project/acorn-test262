__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 16,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 19,
            "end": 36,
            "arguments": [],
            "callee": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 33,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 33,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 74,
            "decorators": [],
            "name": "crash",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
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
