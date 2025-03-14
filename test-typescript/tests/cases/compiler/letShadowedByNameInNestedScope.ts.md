__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 7,
      "end": 113,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 113,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 38,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 37,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 36,
                  "end": 37,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 43,
            "end": 111,
            "expression": {
              "type": "CallExpression",
              "start": 43,
              "end": 110,
              "arguments": [],
              "callee": {
                "type": "FunctionExpression",
                "start": 44,
                "end": 107,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 56,
                  "end": 107,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 66,
                      "end": 77,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 70,
                          "end": 76,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 72,
                            "decorators": [],
                            "name": "_x",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 75,
                            "end": 76,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 86,
                      "end": 101,
                      "expression": {
                        "type": "CallExpression",
                        "start": 86,
                        "end": 100,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 86,
                          "end": 97,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 86,
                            "end": 93,
                            "decorators": [],
                            "name": "console",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 97,
                            "decorators": [],
                            "name": "log",
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
                "id": null,
                "params": []
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
        "start": 16,
        "end": 19,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
