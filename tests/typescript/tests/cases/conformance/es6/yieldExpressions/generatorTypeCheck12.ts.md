__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "g",
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
        "end": 47,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 47,
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 31,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null
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
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 66,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 54,
            "end": 64,
            "argument": {
              "type": "Literal",
              "start": 61,
              "end": 63,
              "value": "",
              "raw": "\"\""
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
