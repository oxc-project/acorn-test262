__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 49,
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 35,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 22,
          "end": 35,
          "typeName": {
            "type": "Identifier",
            "start": 22,
            "end": 29,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 29,
            "end": 35,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 30,
                "end": 34
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 49,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 40,
            "end": 47,
            "argument": null
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
