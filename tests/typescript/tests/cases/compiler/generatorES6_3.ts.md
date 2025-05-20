__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 35,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 20,
              "end": 35,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 26,
                  "end": 33,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 26,
                    "end": 33,
                    "argument": {
                      "type": "Literal",
                      "start": 32,
                      "end": 33,
                      "raw": "0",
                      "value": 0
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
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
