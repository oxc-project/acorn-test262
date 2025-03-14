__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 43,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 43,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 25,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 24,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
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
            "type": "ExpressionStatement",
            "start": 30,
            "end": 41,
            "expression": {
              "type": "AssignmentExpression",
              "start": 30,
              "end": 40,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 30,
                "end": 36,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 30,
                  "end": 34
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 39,
                "end": 40,
                "raw": "5",
                "value": 5
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "myMod",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
