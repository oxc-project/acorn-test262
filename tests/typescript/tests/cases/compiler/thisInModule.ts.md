__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myMod",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 27
                },
                "init": null,
                "definite": false,
                "start": 26,
                "end": 27
              }
            ],
            "declare": false,
            "start": 22,
            "end": 28
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 33,
                  "end": 37
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "optional": false,
                "computed": false,
                "start": 33,
                "end": 39
              },
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 42,
                "end": 43
              },
              "start": 33,
              "end": 43
            },
            "directive": null,
            "start": 33,
            "end": 44
          }
        ],
        "start": 16,
        "end": 46
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 46
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 46
}
```
