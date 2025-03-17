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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 25,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 15,
                "end": 25,
                "typeParameters": null,
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
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 42,
            "name": "b",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
