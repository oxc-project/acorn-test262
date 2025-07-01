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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 18,
                "end": 25
              },
              "start": 16,
              "end": 25
            },
            "start": 15,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 33
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 38,
                "end": 39
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 41,
                "end": 43
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 38,
              "end": 43
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 45,
                "end": 46
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 48,
                "end": 52
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 45,
              "end": 52
            }
          ],
          "start": 36,
          "end": 54
        },
        "start": 27,
        "end": 54
      },
      "directive": null,
      "start": 27,
      "end": 55
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 55
}
```
