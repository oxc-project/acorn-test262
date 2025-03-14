generatorTypeCheck3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 44,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 44,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "g1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 40,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 16,
          "end": 40,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 32,
            "end": 40,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 33,
                "end": 39
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 16,
            "end": 32,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
