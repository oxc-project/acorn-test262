__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "a",
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
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 24,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
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
      "start": 26,
      "end": 52,
      "expression": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 51,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 26,
          "end": 41,
          "elements": [
            {
              "type": "RestElement",
              "start": 27,
              "end": 40,
              "argument": {
                "type": "ArrayPattern",
                "start": 30,
                "end": 40,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 34,
                    "end": 39,
                    "left": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 38,
                      "end": 39,
                      "value": 0,
                      "raw": "0"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
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
          "start": 44,
          "end": 51,
          "elements": [
            {
              "type": "Literal",
              "start": 45,
              "end": 47,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "Literal",
              "start": 49,
              "end": 50,
              "value": 1,
              "raw": "1"
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
