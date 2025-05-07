__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "decorators": [],
            "name": "global",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 15,
            "end": 26,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 24,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 18,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 20,
                  "end": 24,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 36,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 27,
        "end": 36,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 27,
          "end": 34,
          "decorators": [],
          "name": "globals",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
