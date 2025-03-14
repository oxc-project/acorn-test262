__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
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
            "type": "ArrowFunctionExpression",
            "start": 8,
            "end": 34,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 14,
              "end": 34,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 21,
                  "end": 30,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 21,
                    "end": 30,
                    "argument": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
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
