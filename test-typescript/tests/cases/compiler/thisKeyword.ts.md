__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "object": {
                  "type": "ThisExpression",
                  "start": 17,
                  "end": 21
                },
                "property": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 28,
                "end": 29,
                "value": 4,
                "raw": "4"
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
