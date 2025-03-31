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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 24,
          "name": "await",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 44,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
