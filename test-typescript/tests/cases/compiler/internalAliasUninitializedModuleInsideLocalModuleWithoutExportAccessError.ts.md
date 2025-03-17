__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 105,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 105,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 105,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 103,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 103,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 38,
                  "end": 103,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 97,
                      "attributes": [],
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 55,
                        "end": 97,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 67,
                          "end": 97,
                          "body": [
                            {
                              "type": "TSMethodSignature",
                              "start": 81,
                              "end": 87,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 81,
                                "end": 84,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "method",
                              "optional": false,
                              "params": [],
                              "readonly": false,
                              "returnType": null,
                              "static": false,
                              "typeParameters": null
                            }
                          ]
                        },
                        "declare": false,
                        "extends": [],
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null
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
      "start": 107,
      "end": 182,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 114,
        "end": 182,
        "body": {
          "type": "TSModuleBlock",
          "start": 123,
          "end": 182,
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "start": 129,
              "end": 144,
              "id": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 140,
                "end": 143,
                "left": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 149,
              "end": 167,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 156,
                "end": 167,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 160,
                    "end": 166,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 166,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 161,
                        "end": 166,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 163,
                          "end": 166,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 163,
                            "end": 166,
                            "left": {
                              "type": "Identifier",
                              "start": 163,
                              "end": 164,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExpressionStatement",
              "start": 172,
              "end": 180,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 172,
                "end": 179,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 172,
                  "end": 177,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 177,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 185,
      "end": 205,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 192,
        "end": 205,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 196,
            "end": 204,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 196,
              "end": 204,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 197,
                "end": 204,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 199,
                  "end": 204,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 199,
                    "end": 204,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 199,
                      "end": 202,
                      "left": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 200,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 204,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
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
