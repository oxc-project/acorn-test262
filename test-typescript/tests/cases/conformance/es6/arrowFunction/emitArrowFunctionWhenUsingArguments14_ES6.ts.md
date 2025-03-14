emitArrowFunctionWhenUsingArguments14_ES6.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 126,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 126,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 126,
        "body": [
          {
            "type": "IfStatement",
            "start": 37,
            "end": 124,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 56,
              "end": 124,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 66,
                  "end": 86,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 70,
                      "end": 85,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 79,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 82,
                        "end": 85,
                        "raw": "100",
                        "value": 100
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ReturnStatement",
                  "start": 95,
                  "end": 118,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 102,
                    "end": 117,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 117,
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
              "start": 41,
              "end": 54,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 41,
                "end": 52,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 45,
                  "decorators": [],
                  "name": "Math",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 52,
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
  "sourceType": "script"
}
```
