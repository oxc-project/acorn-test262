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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 30,
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 62,
        "end": 78,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 62,
          "end": 69,
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 70,
          "end": 78,
          "decorators": [],
          "name": "SomeName",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 135,
          "definite": false,
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
            "raw": "'str'",
            "value": "str",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
