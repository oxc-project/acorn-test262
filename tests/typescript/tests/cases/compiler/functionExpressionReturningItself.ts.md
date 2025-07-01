__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "somefn",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 23
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "somefn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 41
                  },
                  "start": 28,
                  "end": 42
                }
              ],
              "start": 26,
              "end": 44
            },
            "expression": false,
            "start": 8,
            "end": 44
          },
          "definite": false,
          "start": 4,
          "end": 44
        }
      ],
      "declare": false,
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
