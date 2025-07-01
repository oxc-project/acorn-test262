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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                  "name": "bogus",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 15
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 17,
                  "end": 18
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 10,
                "end": 18
              }
            ],
            "start": 8,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
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
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 23,
              "end": 27
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 28
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 32,
              "end": 34
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 36,
              "end": 37
            }
          ],
          "start": 31,
          "end": 38
        },
        "start": 22,
        "end": 38
      },
      "directive": null,
      "start": 22,
      "end": 39
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 39
}
```
