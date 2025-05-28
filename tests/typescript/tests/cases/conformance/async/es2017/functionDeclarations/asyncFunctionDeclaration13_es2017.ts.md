__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 102,
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
        "end": 102,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 87,
            "end": 100,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 91,
                "end": 99,
                "id": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 99,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 92,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 94,
                      "end": 99,
                      "typeName": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 99,
                        "decorators": [],
                        "name": "await",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
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
