thisKeyword.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 32,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 17,
            "end": 30,
            "expression": {
              "type": "AssignmentExpression",
              "start": 17,
              "end": 29,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 17,
                "end": 25,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 17,
                  "end": 21
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 28,
                "end": 29,
                "raw": "4",
                "value": 4
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
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
