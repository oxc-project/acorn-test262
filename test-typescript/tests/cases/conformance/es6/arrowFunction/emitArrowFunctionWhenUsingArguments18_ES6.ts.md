__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 142,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 142,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 142,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 77,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 76,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 41,
                  "end": 60,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 43,
                      "end": 58,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 52,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 58,
                        "decorators": [],
                        "name": "args",
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 63,
                  "end": 76,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 65,
                      "end": 74,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 74,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 74,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 82,
            "end": 140,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 101,
              "end": 140,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 111,
                  "end": 134,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 118,
                    "end": 133,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 133,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 86,
              "end": 99,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 86,
                "end": 97,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 90,
                  "decorators": [],
                  "name": "Math",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 97,
                  "decorators": [],
                  "name": "random",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
