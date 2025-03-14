restElementWithInitializer2.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "a",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 32,
            "decorators": [],
            "name": "x",
            "optional": false,
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
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 35,
              "end": 43,
              "argument": {
                "type": "AssignmentPattern",
                "start": 38,
                "end": 43,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
