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
      "end": 165,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 91,
        "end": 165,
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
          "end": 165,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 106,
              "end": 128,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 113,
                "end": 128,
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 124,
                  "end": 127,
                  "left": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 133,
              "end": 163,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 140,
                "end": 163,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 144,
                    "end": 162,
                    "id": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 150,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 145,
                        "end": 150,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 147,
                          "end": 150,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 147,
                            "end": 150,
                            "left": {
                              "type": "Identifier",
                              "start": 147,
                              "end": 148,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 149,
                              "end": 150,
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
                      "start": 153,
                      "end": 162,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 157,
                        "end": 160,
                        "object": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 158,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 160,
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
