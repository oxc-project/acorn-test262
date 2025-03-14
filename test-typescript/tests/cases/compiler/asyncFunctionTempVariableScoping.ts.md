__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 105,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 105,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 57,
        "end": 104,
        "async": true,
        "body": {
          "type": "CallExpression",
          "start": 90,
          "end": 104,
          "arguments": [
            {
              "type": "AwaitExpression",
              "start": 94,
              "end": 103,
              "argument": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 90,
            "end": 93,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "optional": false
        },
        "expression": true,
        "generator": false,
        "id": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 64,
            "end": 85,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 66,
                "end": 69,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 71,
                "end": 74,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              },
              {
                "type": "RestElement",
                "start": 76,
                "end": 83,
                "argument": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 83,
                  "decorators": [],
                  "name": "rest",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
