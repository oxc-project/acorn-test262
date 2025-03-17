__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "g",
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
        "start": 48,
        "end": 65,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 54,
            "end": 63,
            "argument": {
              "type": "Literal",
              "start": 61,
              "end": 62,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 47,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 47,
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 31,
            "name": "IterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 31,
            "end": 47,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              },
              {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
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
