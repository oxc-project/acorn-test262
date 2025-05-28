__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "decorators": [],
        "name": "await",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 37,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 24,
          "end": 37,
          "typeName": {
            "type": "Identifier",
            "start": 24,
            "end": 31,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 31,
            "end": 37,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 32,
                "end": 36
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 41,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
