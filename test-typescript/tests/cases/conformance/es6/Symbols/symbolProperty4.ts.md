__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 99,
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
            "type": "ObjectExpression",
            "start": 8,
            "end": 99,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 27,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 15,
                  "end": 23,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 21,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 26,
                  "end": 27,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 33,
                "end": 49,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 34,
                  "end": 42,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 40,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 43,
                  "end": 49,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 46,
                    "end": 49,
                    "body": []
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
                "start": 55,
                "end": 97,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 60,
                  "end": 68,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 66,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 69,
                  "end": 97,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 72,
                    "end": 97,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 82,
                        "end": 91,
                        "argument": {
                          "type": "Literal",
                          "start": 89,
                          "end": 90,
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
  "sourceType": "script",
  "hashbang": null
}
```
