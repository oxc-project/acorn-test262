__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
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
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 63,
                          "end": 74,
                          "body": []
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 117,
                "end": 120,
                "left": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
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
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 137,
                    "end": 155,
                    "id": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 143,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
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
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 143,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      }
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
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 153,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 160,
      "end": 187,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 167,
        "end": 187,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 171,
            "end": 186,
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 175,
              "end": 186,
              "callee": {
                "type": "MemberExpression",
                "start": 179,
                "end": 184,
                "object": {
                  "type": "MemberExpression",
                  "start": 179,
                  "end": 182,
                  "object": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 182,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
