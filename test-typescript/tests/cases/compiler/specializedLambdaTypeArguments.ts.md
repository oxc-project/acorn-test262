specializedLambdaTypeArguments.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 44,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 44,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 42,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 41,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 21,
                  "end": 41,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 23,
                      "end": 39,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 32,
                        "end": 39,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 35,
                          "end": 39,
                          "typeName": {
                            "type": "Identifier",
                            "start": 35,
                            "end": 39,
                            "decorators": [],
                            "name": "Tany",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 23,
                        "end": 29,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 24,
                            "end": 28,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 24,
                              "end": 28,
                              "decorators": [],
                              "name": "Tany",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 62,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 62,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 53,
                  "end": 62,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 54,
                      "end": 61
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "X",
                  "optional": false
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
  ],
  "sourceType": "script"
}
```
