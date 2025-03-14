destructuringArrayBindingPatternAndAssignment4.ts
```json
{
  "type": "Program",
  "start": 12,
  "end": 80,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 47,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 47,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 32,
                "end": 47,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 32,
                    "end": 40,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 43,
                    "end": 47
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 69,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 55,
            "end": 62,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 61,
                "decorators": [],
                "name": "value",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "decorators": [],
            "name": "data",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
