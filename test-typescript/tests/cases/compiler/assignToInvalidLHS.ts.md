__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 17,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 14,
                "end": 17
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 172,
            "end": 181,
            "operator": "=",
            "left": {
              "type": "NewExpression",
              "start": 172,
              "end": 177,
              "callee": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "right": {
              "type": "Literal",
              "start": 180,
              "end": 181,
              "value": 5,
              "raw": "5"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
