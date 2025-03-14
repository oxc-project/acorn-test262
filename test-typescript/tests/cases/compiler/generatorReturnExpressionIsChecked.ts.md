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
      "async": false,
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
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 31,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 31,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 23,
            "decorators": [],
            "name": "Iterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
