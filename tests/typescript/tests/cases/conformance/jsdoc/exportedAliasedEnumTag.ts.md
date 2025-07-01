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
            "name": "middlewarify",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 16
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 25
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 33
              },
              "optional": false,
              "computed": false,
              "start": 19,
              "end": 33
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 36,
              "end": 38
            },
            "start": 19,
            "end": 38
          },
          "definite": false,
          "start": 4,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "middlewarify",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 66
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 71
          },
          "optional": false,
          "computed": false,
          "start": 54,
          "end": 71
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "BEFORE",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 84
              },
              "value": {
                "type": "Literal",
                "value": "before",
                "raw": "'before'",
                "start": 86,
                "end": 94
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 78,
              "end": 94
            }
          ],
          "start": 74,
          "end": 96
        },
        "start": 54,
        "end": 96
      },
      "directive": null,
      "start": 54,
      "end": 97
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
