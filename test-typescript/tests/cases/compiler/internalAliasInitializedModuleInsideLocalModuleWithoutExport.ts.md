__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 82,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 82,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 82,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 80,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 80,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 38,
                  "end": 80,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 74,
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 55,
                        "end": 74,
                        "id": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 63,
                          "end": 74,
                          "body": []
                        },
                        "decorators": [],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 158,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 91,
        "end": 158,
        "id": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 100,
          "end": 158,
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "start": 106,
              "end": 121,
              "id": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 117,
                "end": 120,
                "left": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 126,
              "end": 156,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 133,
                "end": 156,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 137,
                    "end": 155,
                    "id": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 143,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 138,
                        "end": 143,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 140,
                          "end": 143,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 140,
                            "end": 143,
                            "left": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 141,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 143,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 146,
                      "end": 155,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 150,
                        "end": 153,
                        "object": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 153,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
