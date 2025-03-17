__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
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
              "name": "invalid",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "Iterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
