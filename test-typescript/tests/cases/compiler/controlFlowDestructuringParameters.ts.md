__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 55,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 54,
      "expression": {
        "type": "CallExpression",
        "start": 21,
        "end": 53,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 39,
            "end": 51,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 40,
                "end": 45,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 42,
                    "end": 43,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 21,
          "end": 35,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 21,
            "end": 31,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 22,
                "end": 30,
                "properties": [
                  {
                    "type": "Property",
                    "start": 24,
                    "end": 28,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 25,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 27,
                      "end": 28,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "decorators": [],
            "name": "map",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
