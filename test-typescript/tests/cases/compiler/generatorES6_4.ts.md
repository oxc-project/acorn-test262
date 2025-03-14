__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 44,
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
            "type": "ObjectExpression",
            "start": 8,
            "end": 44,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 42,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 18,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 18,
                  "end": 42,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 21,
                    "end": 42,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 30,
                        "end": 37,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 30,
                          "end": 37,
                          "argument": {
                            "type": "Literal",
                            "start": 36,
                            "end": 37,
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
                  "params": []
                }
              }
            ]
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
