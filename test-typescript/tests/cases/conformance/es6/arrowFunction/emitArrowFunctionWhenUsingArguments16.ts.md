__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 158,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 158,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 158,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 61,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 60,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 50,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 53,
                  "end": 60,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 66,
            "end": 127,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 85,
              "end": 127,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 95,
                  "end": 121,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 102,
                    "end": 120,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 108,
                      "end": 120,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 117,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 118,
                        "end": 119,
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
              "start": 70,
              "end": 83,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 70,
                "end": 81,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 74,
                  "decorators": [],
                  "name": "Math",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 81,
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
            "start": 132,
            "end": 156,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 136,
                "end": 155,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 145,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 148,
                  "end": 155,
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
  "sourceType": "script",
  "hashbang": null
}
```
