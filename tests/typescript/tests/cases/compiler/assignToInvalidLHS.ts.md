__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 14,
                "end": 17
              },
              "start": 13,
              "end": 17
            },
            "start": 12,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 17
        }
      ],
      "declare": true,
      "start": 0,
      "end": 18
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 177
              },
              "typeArguments": null,
              "arguments": [],
              "start": 172,
              "end": 177
            },
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 180,
              "end": 181
            },
            "start": 172,
            "end": 181
          },
          "definite": false,
          "start": 168,
          "end": 181
        }
      ],
      "declare": false,
      "start": 164,
      "end": 182
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 182
}
```
