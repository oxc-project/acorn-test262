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
      "async": true,
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
            "body": {
              "type": "BlockStatement",
              "start": 96,
              "end": 103,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 77,
              "end": 84,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 83,
                  "end": 84,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 88,
              "end": 94,
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 58,
          "decorators": [],
          "name": "source",
          "optional": false,
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 36,
                    "end": 39,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 37,
                        "end": 38,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 38,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 36,
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 42,
                  "end": 58,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 55,
                    "end": 58,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 56,
                        "end": 57,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 56,
                          "end": 57,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 55,
                    "decorators": [],
                    "name": "AsyncIterable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
