computedPropertyNames18_ES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 62,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 62,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 60,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 60,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 28,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 31,
                  "end": 60,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 41,
                      "end": 54,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 42,
                        "end": 50,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 42,
                          "end": 46
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 50,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 53,
                        "end": 54,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
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
