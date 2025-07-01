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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 25
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 28,
            "end": 30
          },
          "definite": false,
          "start": 18,
          "end": 30
        }
      ],
      "declare": false,
      "start": 14,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 69
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeName",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 78
        },
        "optional": false,
        "computed": false,
        "start": 62,
        "end": 78
      },
      "directive": null,
      "start": 62,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myString",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 127
          },
          "init": {
            "type": "Literal",
            "value": "str",
            "raw": "'str'",
            "start": 130,
            "end": 135
          },
          "definite": false,
          "start": 119,
          "end": 135
        }
      ],
      "declare": false,
      "start": 113,
      "end": 136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 136
}
```
