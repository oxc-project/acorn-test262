__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "f",
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
          "start": 20,
          "end": 58,
          "name": "source",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 58,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 28,
              "end": 58,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 28,
                  "end": 39,
                  "typeName": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 36,
                    "name": "Iterable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 36,
                    "end": 39,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 37,
                        "end": 38,
                        "typeName": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 38,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 42,
                  "end": 58,
                  "typeName": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 55,
                    "name": "AsyncIterable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 55,
                    "end": 58,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 56,
                        "end": 57,
                        "typeName": {
                          "type": "Identifier",
                          "start": 56,
                          "end": 57,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 105,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 66,
            "end": 103,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 77,
              "end": 84,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 83,
                  "end": 84,
                  "id": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 88,
              "end": 94,
              "name": "source",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 96,
              "end": 103,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
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
