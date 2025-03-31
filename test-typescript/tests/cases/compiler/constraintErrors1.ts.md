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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 35,
          "name": "test",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 40,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 27,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 26,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 26,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 26,
                "name": "hm",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
