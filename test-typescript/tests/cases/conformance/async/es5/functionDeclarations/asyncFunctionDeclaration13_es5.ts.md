__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 102,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 102,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 87,
            "end": 100,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 91,
                "end": 99,
                "definite": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 99,
                        "decorators": [],
                        "name": "await",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 35,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 22,
          "end": 35,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 22,
            "end": 29,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
