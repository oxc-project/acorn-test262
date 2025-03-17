__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 94,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 47,
                "end": 81,
                "argument": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 54,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 54,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 56,
                    "end": 81,
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "start": 57,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 60,
                          "end": 70,
                          "typeName": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 70,
                            "name": "TFirstArgs",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 72,
                        "end": 80,
                        "typeName": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 80,
                          "name": "TLastArg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 92,
              "end": 94,
              "body": []
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 10,
              "end": 46,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 11,
                  "end": 35,
                  "name": {
                    "type": "Identifier",
                    "start": 11,
                    "end": 21,
                    "name": "TFirstArgs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 30,
                    "end": 35,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 30,
                      "end": 33
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 37,
                  "end": 45,
                  "name": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 45,
                    "name": "TLastArg",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 88,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 84,
                "end": 88
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
