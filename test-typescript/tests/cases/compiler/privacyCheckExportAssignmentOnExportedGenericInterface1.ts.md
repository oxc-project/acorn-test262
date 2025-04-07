__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 24,
              "end": 46,
              "body": {
                "type": "TSInterfaceBody",
                "start": 39,
                "end": 46,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 35,
                "end": 38,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 36,
                    "end": 37,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 49,
      "end": 69,
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 69,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 62,
        "end": 65,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 63,
            "end": 64,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 107,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 107,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 79,
                "end": 107,
                "abstract": false,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 86,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 89,
                    "end": 107,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 94,
                      "end": 107,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 95,
                          "end": 106,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 98,
                            "end": 106,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 99,
                                "end": 105
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 98,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 89,
                      "end": 94,
                      "left": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 92,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": null
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
      "type": "TSExportAssignment",
      "start": 109,
      "end": 122,
      "expression": {
        "type": "Identifier",
        "start": 118,
        "end": 121,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
