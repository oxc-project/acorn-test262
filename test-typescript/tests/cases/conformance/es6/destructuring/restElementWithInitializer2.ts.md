__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 15,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 15,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 7,
                  "end": 13
                }
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
      "type": "VariableDeclaration",
      "start": 17,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 32,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 32,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 24,
                "end": 32,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 24,
                  "end": 30
                }
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
      "start": 34,
      "end": 49,
      "expression": {
        "type": "AssignmentExpression",
        "start": 34,
        "end": 48,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 34,
          "end": 44,
          "elements": [
            {
              "type": "RestElement",
              "start": 35,
              "end": 43,
              "argument": {
                "type": "AssignmentPattern",
                "start": 38,
                "end": 43,
                "left": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
