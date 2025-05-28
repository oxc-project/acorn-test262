__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 31,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 31,
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 23,
            "decorators": [],
            "name": "Iterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 23,
            "end": 31,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 55,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 38,
            "end": 53,
            "argument": {
              "type": "Identifier",
              "start": 45,
              "end": 52,
              "decorators": [],
              "name": "invalid",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
