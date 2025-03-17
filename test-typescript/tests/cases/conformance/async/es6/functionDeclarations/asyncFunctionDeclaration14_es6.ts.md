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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
      "declare": false,
      "typeParameters": null,
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
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
