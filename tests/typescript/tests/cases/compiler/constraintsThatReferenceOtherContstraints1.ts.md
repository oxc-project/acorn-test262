__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 367,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 20,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 51,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 33,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 46,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 45,
              "end": 46,
              "typeName": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 51,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 222,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 61,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 78,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 78,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 91,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 91,
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 125,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 103,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 108,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 108,
                  "end": 124,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 115,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 115,
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 123,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 123,
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 277,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 276,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 276,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 234,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 234,
                  "end": 276,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 236,
                      "end": 249,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 238,
                          "end": 247,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 238,
                            "end": 239,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 239,
                            "end": 247,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 241,
                              "end": 247
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 251,
                      "end": 275,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 253,
                          "end": 263,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 253,
                            "end": 254,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 254,
                            "end": 262,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 256,
                              "end": 262
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 264,
                          "end": 273,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 264,
                            "end": 265,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 265,
                            "end": 273,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 267,
                              "end": 273
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
