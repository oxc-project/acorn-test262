topLevelAwaitNonModule.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 8,
      "expression": {
        "type": "AwaitExpression",
        "start": 0,
        "end": 7,
        "argument": {
          "type": "Identifier",
          "start": 6,
          "end": 7,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 19,
            "decorators": [],
            "name": "arr",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 22,
            "end": 41,
            "elements": [
              {
                "type": "CallExpression",
                "start": 23,
                "end": 40,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 23,
                  "end": 38,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 30,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 38,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false
                  }
                },
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 44,
      "end": 85,
      "await": true,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 85,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 78,
            "end": 83,
            "expression": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "decorators": [],
              "name": "item",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 55,
        "end": 65,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 61,
            "end": 65,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
              "decorators": [],
              "name": "item",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "decorators": [],
        "name": "arr",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
