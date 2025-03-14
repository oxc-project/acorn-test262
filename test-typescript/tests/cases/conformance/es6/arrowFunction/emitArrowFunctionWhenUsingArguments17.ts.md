emitArrowFunctionWhenUsingArguments17.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 177,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 177,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 177,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 79,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 41,
                  "end": 54,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 43,
                      "end": 52,
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
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 52,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 57,
                  "end": 79,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 59,
                      "end": 77,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 68,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 70,
                        "end": 77,
                        "raw": "\"hello\"",
                        "value": "hello"
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
            "start": 85,
            "end": 146,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 104,
              "end": 146,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 114,
                  "end": 140,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 121,
                    "end": 139,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 127,
                      "end": 139,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 136,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 137,
                        "end": 138,
                        "raw": "0",
                        "value": 0
                      }
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
              "start": 89,
              "end": 102,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 89,
                "end": 100,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 93,
                  "decorators": [],
                  "name": "Math",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 100,
                  "decorators": [],
                  "name": "random",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 175,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 174,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 164,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 167,
                  "end": 174,
                  "raw": "\"world\"",
                  "value": "world"
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
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
