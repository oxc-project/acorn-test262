YieldExpression17_es6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
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
            "end": 36,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 34,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 17,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 17,
                  "end": 34,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 20,
                    "end": 34,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 22,
                        "end": 32,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 22,
                          "end": 31,
                          "argument": {
                            "type": "Identifier",
                            "start": 28,
                            "end": 31,
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
                  "generator": false,
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
  "sourceType": "script"
}
```
