__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 84,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 84,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 78,
        "end": 83,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 82,
          "end": 83,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
