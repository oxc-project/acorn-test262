__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 41,
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
            "end": 41,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 39,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 15,
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
                  "start": 15,
                  "end": 39,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 18,
                    "end": 39,
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
