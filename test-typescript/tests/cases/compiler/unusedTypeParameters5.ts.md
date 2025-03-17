__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 39,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 31,
                "end": 36,
                "typeName": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 36,
                  "name": "Dummy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 13,
              "name": "Dummy",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 82,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 48,
                "end": 82,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 54,
                    "end": 80,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 58,
                      "end": 67,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 59,
                          "end": 60,
                          "name": {
                            "type": "Identifier",
                            "start": 59,
                            "end": 60,
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
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 62,
                          "end": 63,
                          "name": {
                            "type": "Identifier",
                            "start": 62,
                            "end": 63,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 65,
                          "end": 66,
                          "name": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "name": "K",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 69,
                          "end": 72,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 71,
                            "end": 72,
                            "typeName": {
                              "type": "Identifier",
                              "start": 71,
                              "end": 72,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 73,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 75,
                        "end": 79,
                        "typeName": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 76,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 76,
                          "end": 79,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 77,
                              "end": 78,
                              "typeName": {
                                "type": "Identifier",
                                "start": 77,
                                "end": 78,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
