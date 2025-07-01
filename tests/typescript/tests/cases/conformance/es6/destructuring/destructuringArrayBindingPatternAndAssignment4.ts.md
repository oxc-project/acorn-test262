__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
                    },
                    "start": 32,
                    "end": 40
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 43,
                    "end": 47
                  }
                ],
                "start": 32,
                "end": 47
              },
              "start": 30,
              "end": 47
            },
            "start": 26,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 26,
          "end": 47
        }
      ],
      "declare": true,
      "start": 12,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 61
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 62
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 69
          },
          "definite": false,
          "start": 55,
          "end": 69
        }
      ],
      "declare": false,
      "start": 49,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 79
}
```
