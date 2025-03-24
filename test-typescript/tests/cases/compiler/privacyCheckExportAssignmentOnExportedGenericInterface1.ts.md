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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 46,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 24,
              "end": 46,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 35,
                "end": 38,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 36,
                    "end": 37,
                    "name": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
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
              "body": {
                "type": "TSInterfaceBody",
                "start": 39,
                "end": 46,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 49,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 62,
        "end": 65,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 63,
            "end": 64,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 69,
        "body": []
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 107,
            "name": "Foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 107,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 79,
                "end": 107,
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 86,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 89,
                    "end": 107,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 89,
                      "end": 94,
                      "left": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 92,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 94,
                      "end": 107,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 95,
                          "end": 106,
                          "typeName": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 98,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                          }
                        }
                      ]
                    }
                  }
                }
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
    },
    {
      "type": "TSExportAssignment",
      "start": 109,
      "end": 122,
      "expression": {
        "type": "Identifier",
        "start": 118,
        "end": 121,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
