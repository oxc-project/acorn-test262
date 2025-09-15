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
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
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
        "name": "blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
                  "start": 21,
                  "end": 25
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 30
                },
                "optional": false,
                "computed": false,
                "start": 21,
                "end": 30
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 33,
                "end": 35
              },
              "start": 21,
              "end": 35
            },
            "directive": null,
            "start": 21,
            "end": 36
          }
        ],
        "start": 15,
        "end": 38
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
