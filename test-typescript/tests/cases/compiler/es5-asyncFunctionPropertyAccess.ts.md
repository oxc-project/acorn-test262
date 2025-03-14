es5-asyncFunctionPropertyAccess.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 86,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 86,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 70,
            "end": 84,
            "expression": {
              "type": "AssignmentExpression",
              "start": 70,
              "end": 83,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "AwaitExpression",
                "start": 74,
                "end": 83,
                "argument": {
                  "type": "MemberExpression",
                  "start": 80,
                  "end": 83,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 61,
        "decorators": [],
        "name": "propertyAccess0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 145,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 121,
        "end": 145,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 127,
            "end": 143,
            "expression": {
              "type": "AssignmentExpression",
              "start": 127,
              "end": 142,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 131,
                "end": 142,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 132,
                  "end": 139,
                  "argument": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 118,
        "decorators": [],
        "name": "propertyAccess1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 147,
      "end": 202,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 202,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 200,
            "expression": {
              "type": "AwaitExpression",
              "start": 186,
              "end": 199,
              "argument": {
                "type": "CallExpression",
                "start": 192,
                "end": 199,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 177,
        "decorators": [],
        "name": "callExpression0",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
