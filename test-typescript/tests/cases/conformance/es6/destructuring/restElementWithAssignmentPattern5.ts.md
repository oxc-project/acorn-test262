__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 25,
            "name": "s2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 51,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 27,
          "end": 39,
          "elements": [
            {
              "type": "RestElement",
              "start": 28,
              "end": 38,
              "argument": {
                "type": "ArrayPattern",
                "start": 31,
                "end": 38,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 35,
                    "end": 37,
                    "name": "s2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 42,
          "end": 50,
          "elements": [
            {
              "type": "Literal",
              "start": 43,
              "end": 45,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "Literal",
              "start": 47,
              "end": 49,
              "value": "",
              "raw": "\"\""
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
