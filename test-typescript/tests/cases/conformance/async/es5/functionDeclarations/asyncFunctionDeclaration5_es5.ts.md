asyncFunctionDeclaration5_es5.ts
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
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 44,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 24,
          "decorators": [],
          "name": "await",
          "optional": false
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 27,
            "end": 34,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
