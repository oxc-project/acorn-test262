__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 47,
            "name": "data",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "ArrayPattern",
            "start": 55,
            "end": 62,
            "elements": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 61,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "name": "data",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
