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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 32,
                      "end": 33
                    },
                    "start": 26,
                    "end": 33
                  },
                  "directive": null,
                  "start": 26,
                  "end": 33
                }
              ],
              "start": 20,
              "end": 35
            },
            "expression": false,
            "start": 8,
            "end": 35
          },
          "definite": false,
          "start": 4,
          "end": 35
        }
      ],
      "declare": false,
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
