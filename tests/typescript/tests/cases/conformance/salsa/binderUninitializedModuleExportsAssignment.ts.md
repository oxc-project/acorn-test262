__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "loop1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "loop2",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "loop2",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 28
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "loop1",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 36
          },
          "definite": false,
          "start": 23,
          "end": 36
        }
      ],
      "declare": false,
      "start": 19,
      "end": 37
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 45
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 53
          },
          "optional": false,
          "computed": false,
          "start": 39,
          "end": 53
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "loop2",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 61
        },
        "start": 39,
        "end": 61
      },
      "directive": null,
      "start": 39,
      "end": 62
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 62
}
```
