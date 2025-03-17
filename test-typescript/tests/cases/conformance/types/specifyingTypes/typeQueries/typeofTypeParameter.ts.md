__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 82,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 82,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 29,
            "end": 45,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 44,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 44,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 36,
                      "end": 44,
                      "exprName": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 50,
            "end": 66,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 54,
                "end": 65,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 65,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 57,
                      "end": 65,
                      "exprName": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 71,
            "end": 80,
            "argument": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "a",
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
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 18,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 17,
              "end": 18,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 19,
        "end": 22,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 21,
          "end": 22,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
