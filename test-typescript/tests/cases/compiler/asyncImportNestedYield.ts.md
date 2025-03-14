asyncImportNestedYield.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 74,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 74,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 28,
            "end": 72,
            "expression": {
              "type": "ImportExpression",
              "start": 28,
              "end": 71,
              "options": null,
              "source": {
                "type": "MemberExpression",
                "start": 35,
                "end": 70,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 36,
                  "end": 61,
                  "argument": {
                    "type": "ImportExpression",
                    "start": 42,
                    "end": 61,
                    "options": null,
                    "source": {
                      "type": "YieldExpression",
                      "start": 49,
                      "end": 60,
                      "argument": {
                        "type": "Literal",
                        "start": 55,
                        "end": 60,
                        "raw": "\"foo\"",
                        "value": "foo"
                      },
                      "delegate": false
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 70,
                  "decorators": [],
                  "name": "default",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 19,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
