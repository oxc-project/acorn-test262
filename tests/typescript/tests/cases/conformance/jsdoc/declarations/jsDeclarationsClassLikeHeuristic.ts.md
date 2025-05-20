__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 90,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 70,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 63,
        "end": 69,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 67,
          "end": 69,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 71,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 71,
          "end": 84,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 71,
            "end": 82,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 73,
              "end": 82,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 87,
          "end": 89,
          "properties": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
