__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 20,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 18,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 15,
                  "decorators": [],
                  "name": "bogus",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 17,
                  "end": 18,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 39,
      "expression": {
        "type": "AssignmentExpression",
        "start": 22,
        "end": 38,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 22,
          "end": 28,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 23,
              "end": 27,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 31,
          "end": 38,
          "elements": [
            {
              "type": "Literal",
              "start": 32,
              "end": 34,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "value": 0,
              "raw": "0"
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
