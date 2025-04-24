__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "let",
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
          "init": {
            "type": "ObjectExpression",
            "start": 15,
            "end": 17,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 34,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 20,
        "end": 32,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 20,
          "end": 26,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "decorators": [],
            "name": "let",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 24,
            "end": 25,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "Literal",
          "start": 29,
          "end": 32,
          "raw": "100",
          "value": 100
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
