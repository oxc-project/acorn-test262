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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 17,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 14,
                "end": 17
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
      "type": "VariableDeclaration",
      "start": 164,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "right": {
              "type": "Literal",
              "start": 180,
              "end": 181,
              "raw": "5",
              "value": 5,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
