__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 136,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 31,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 25,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 28,
            "end": 30,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 79,
      "expression": {
        "type": "MemberExpression",
        "start": 62,
        "end": 78,
        "object": {
          "type": "Identifier",
          "start": 62,
          "end": 69,
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 70,
          "end": 78,
          "decorators": [],
          "name": "SomeName",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 136,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 127,
            "decorators": [],
            "name": "myString",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 130,
            "end": 135,
            "value": "str",
            "raw": "'str'"
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
