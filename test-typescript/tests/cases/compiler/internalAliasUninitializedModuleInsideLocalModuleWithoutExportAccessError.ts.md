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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 105,
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
          "end": 105,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 103,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 103,
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
                  "end": 103,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 97,
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 55,
                        "end": 97,
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "extends": [],
                        "typeParameters": null,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 67,
                          "end": 97,
                          "body": [
                            {
                              "type": "TSMethodSignature",
                              "start": 81,
                              "end": 87,
                              "key": {
                                "type": "Identifier",
                                "start": 81,
                                "end": 84,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false,
                              "kind": "method",
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "accessibility": null,
                              "readonly": false,
                              "static": false
                            }
                          ]
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
      "start": 107,
      "end": 182,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 114,
        "end": 182,
        "id": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 140,
                "end": 143,
                "left": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
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
              "start": 149,
              "end": 167,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 156,
                "end": 167,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 160,
                    "end": 166,
                    "id": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 166,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 161,
                        "end": 166,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 163,
                          "end": 166,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 163,
                            "end": 166,
                            "left": {
                              "type": "Identifier",
                              "start": 163,
                              "end": 164,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
                              "name": "I",
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
                    "init": null,
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
            },
            {
              "type": "ExpressionStatement",
              "start": 172,
              "end": 180,
              "expression": {
                "type": "CallExpression",
                "start": 172,
                "end": 179,
                "callee": {
                  "type": "MemberExpression",
                  "start": 172,
                  "end": 177,
                  "object": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 177,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
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
      "start": 185,
      "end": 205,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 192,
        "end": 205,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 196,
            "end": 204,
            "id": {
              "type": "Identifier",
              "start": 196,
              "end": 204,
              "name": "z",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 197,
                "end": 204,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 199,
                  "end": 204,
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
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 204,
                      "name": "I",
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
            "init": null,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
