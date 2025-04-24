__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 12,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 30,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 29,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 14,
          "end": 24,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 14,
            "end": 20,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 20,
              "name": "bar"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 21,
            "end": 24,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 27,
          "end": 29,
          "raw": "20",
          "value": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
