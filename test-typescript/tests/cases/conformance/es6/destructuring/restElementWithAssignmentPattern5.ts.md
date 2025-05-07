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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "s",
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
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 25,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
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
      "start": 27,
      "end": 51,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 27,
          "end": 39,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 28,
              "end": 38,
              "argument": {
                "type": "ArrayPattern",
                "start": 31,
                "end": 38,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 35,
                    "end": 37,
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
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
          "start": 42,
          "end": 50,
          "elements": [
            {
              "type": "Literal",
              "start": 43,
              "end": 45,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 47,
              "end": 49,
              "raw": "\"\"",
              "value": "",
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
