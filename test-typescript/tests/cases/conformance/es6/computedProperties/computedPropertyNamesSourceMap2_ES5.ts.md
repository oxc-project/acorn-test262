computedPropertyNamesSourceMap2_ES5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 90,
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
            "end": 90,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 48,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 15,
                  "end": 22,
                  "raw": "\"hello\"",
                  "value": "hello"
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 23,
                  "end": 48,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 26,
                    "end": 48,
                    "body": [
                      {
                        "type": "DebuggerStatement",
                        "start": 36,
                        "end": 45
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 54,
                "end": 88,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 59,
                  "end": 68,
                  "raw": "\"goodbye\"",
                  "value": "goodbye"
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 69,
                  "end": 88,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 72,
                    "end": 88,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 76,
                        "end": 85,
                        "argument": {
                          "type": "Literal",
                          "start": 83,
                          "end": 84,
                          "raw": "0",
                          "value": 0
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
