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
                "id": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 99,
                  "name": "v",
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
                        "name": "await",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
