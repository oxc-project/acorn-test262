__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "id": {
            "type": "ArrayPattern",
            "start": 4,
            "end": 13,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 5,
                "end": 9,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              },
              {
                "type": "Identifier",
                "start": 11,
                "end": 12,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 16,
            "end": 25,
            "elements": [
              {
                "type": "Literal",
                "start": 17,
                "end": 18,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 20,
                "end": 21,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "value": 3,
                "raw": "3"
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
      "start": 64,
      "end": 86,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 85,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 64,
          "end": 73,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 65,
              "end": 69,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            },
            {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 76,
          "end": 85,
          "elements": [
            {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 80,
              "end": 81,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 83,
              "end": 84,
              "value": 3,
              "raw": "3"
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
