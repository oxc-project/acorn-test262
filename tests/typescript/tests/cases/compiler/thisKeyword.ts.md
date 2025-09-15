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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 20,
                  "end": 24
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 28
                },
                "optional": false,
                "computed": false,
                "start": 20,
                "end": 28
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 31,
                "end": 32
              },
              "start": 20,
              "end": 32
            },
            "directive": null,
            "start": 20,
            "end": 33
          }
        ],
        "start": 14,
        "end": 35
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
