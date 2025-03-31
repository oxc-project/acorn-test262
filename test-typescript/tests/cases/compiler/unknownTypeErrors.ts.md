__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 16,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 16,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9,
                "end": 16,
                "typeName": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 16,
                  "name": "Unknown",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 19,
            "end": 20,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
