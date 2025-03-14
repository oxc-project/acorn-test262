computedPropertyNamesSourceMap2_ES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 87,
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
            "end": 87,
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
                "start": 51,
                "end": 85,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 56,
                  "end": 65,
                  "raw": "\"goodbye\"",
                  "value": "goodbye"
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 66,
                  "end": 85,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 69,
                    "end": 85,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 73,
                        "end": 82,
                        "argument": {
                          "type": "Literal",
                          "start": 80,
                          "end": 81,
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
