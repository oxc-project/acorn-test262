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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "myMod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "object": {
                  "type": "ThisExpression",
                  "start": 30,
                  "end": 34
                },
                "property": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 39,
                "end": 40,
                "value": 5,
                "raw": "5"
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
