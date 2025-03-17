__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 82,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 82,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 82,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 80,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 80,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 38,
                  "end": 80,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 74,
                      "attributes": [],
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 55,
                        "end": 74,
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "start": 63,
                          "end": 74,
                          "body": []
                        },
                        "declare": false,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "implements": [],
                        "superClass": null,
                        "superTypeArguments": null,
                        "typeParameters": null
                      },
                      "exportKind": "value",
                      "source": null,
                      "specifiers": []
                    }
                  ]
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "module"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 165,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 91,
        "end": 165,
        "body": {
          "type": "TSModuleBlock",
          "start": 100,
          "end": 165,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 106,
              "end": 128,
              "attributes": [],
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 113,
                "end": 128,
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value",
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 124,
                  "end": 127,
                  "left": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 133,
              "end": 163,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 140,
                "end": 163,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 144,
                    "end": 162,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 150,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 145,
                        "end": 150,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 147,
                          "end": 150,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 147,
                            "end": 150,
                            "left": {
                              "type": "Identifier",
                              "start": 147,
                              "end": 148,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 149,
                              "end": 150,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 153,
                      "end": 162,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 157,
                        "end": 160,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 158,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 160,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
