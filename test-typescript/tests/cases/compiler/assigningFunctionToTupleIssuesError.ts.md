__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 25,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 15,
                "end": 25,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 18,
                  "end": 25,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 21,
                    "end": 25
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 42,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 42,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 34,
                "end": 42,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 35,
                    "end": 41
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
