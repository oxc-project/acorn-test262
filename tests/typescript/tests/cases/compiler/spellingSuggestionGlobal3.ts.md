__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "global",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 12
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 18
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 20,
                  "end": 24
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 24
              }
            ],
            "start": 15,
            "end": 26
          },
          "definite": false,
          "start": 6,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globals",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 34
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 36
        },
        "optional": false,
        "computed": false,
        "start": 27,
        "end": 36
      },
      "directive": null,
      "start": 27,
      "end": 36
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
