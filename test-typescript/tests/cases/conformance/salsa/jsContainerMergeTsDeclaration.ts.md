__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 39,
            "arguments": [],
            "callee": {
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
                    "type": "ReturnStatement",
                    "start": 26,
                    "end": 35,
                    "argument": {
                      "type": "Literal",
                      "start": 33,
                      "end": 34,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
