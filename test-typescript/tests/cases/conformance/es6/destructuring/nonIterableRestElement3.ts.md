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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 15,
                  "decorators": [],
                  "name": "bogus",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 17,
                  "end": 18,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 39,
      "directive": null,
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
              "argument": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
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
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
