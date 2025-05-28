__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 24,
          "decorators": [],
          "name": "await",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 25,
        "end": 40,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 27,
          "end": 40,
          "typeName": {
            "type": "Identifier",
            "start": 27,
            "end": 34,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 34,
            "end": 40,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 35,
                "end": 39
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 44,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
