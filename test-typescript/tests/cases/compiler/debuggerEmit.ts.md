__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 33,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 20,
              "end": 33,
              "body": [
                {
                  "type": "DebuggerStatement",
                  "start": 22,
                  "end": 31
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 34,
        "end": 37,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "x",
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
