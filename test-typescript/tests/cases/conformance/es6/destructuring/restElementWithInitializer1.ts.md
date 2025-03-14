restElementWithInitializer1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
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
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 35,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 21,
            "end": 31,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 22,
                "end": 30,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
