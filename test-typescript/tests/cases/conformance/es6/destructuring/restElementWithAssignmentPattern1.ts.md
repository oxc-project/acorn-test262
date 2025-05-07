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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 52,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 51,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 26,
          "end": 41,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 27,
              "end": 40,
              "argument": {
                "type": "ArrayPattern",
                "start": 30,
                "end": 40,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 34,
                    "end": 39,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 38,
                      "end": 39,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                ],
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
          "start": 44,
          "end": 51,
          "elements": [
            {
              "type": "Literal",
              "start": 45,
              "end": 47,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 49,
              "end": 50,
              "raw": "1",
              "value": 1,
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
