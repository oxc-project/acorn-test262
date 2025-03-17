__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 13,
            "decorators": [],
            "name": "let",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 13,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10,
                "end": 13
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 16,
            "end": 18,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 35,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 21,
        "end": 33,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 21,
          "end": 27,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 21,
            "end": 24,
            "decorators": [],
            "name": "let",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 25,
            "end": 26,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "Literal",
          "start": 30,
          "end": 33,
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
