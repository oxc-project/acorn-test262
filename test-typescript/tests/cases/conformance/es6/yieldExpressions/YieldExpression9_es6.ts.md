YieldExpression9_es6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 37,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 20,
              "end": 37,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 24,
                  "end": 35,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 24,
                    "end": 34,
                    "argument": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 33,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
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
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
