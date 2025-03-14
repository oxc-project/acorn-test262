__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 40,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 40,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 35,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 35,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 34,
              "end": 35,
              "typeName": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 27,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 26,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 26,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 26,
                "decorators": [],
                "name": "hm",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
