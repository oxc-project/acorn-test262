__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 12,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 9,
                "end": 12
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 26,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 25,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 14,
          "end": 21,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 24,
          "end": 25,
          "raw": "4",
          "value": 4,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
