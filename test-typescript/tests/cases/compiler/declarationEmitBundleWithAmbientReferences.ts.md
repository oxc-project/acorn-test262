lib/lib.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 199,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 199,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 34,
            "end": 111,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 41,
              "end": 111,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "decorators": [],
                "name": "Result",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 75,
                "end": 110,
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "start": 76,
                    "end": 90,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 76,
                        "end": 77,
                        "typeName": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 77,
                          "decorators": [],
                          "name": "E",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 80,
                        "end": 90,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 87,
                          "end": 90,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 88,
                              "end": 89,
                              "typeName": {
                                "type": "Identifier",
                                "start": 88,
                                "end": 89,
                                "decorators": [],
                                "name": "E",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 87,
                          "decorators": [],
                          "name": "Failure",
                          "optional": false
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSIntersectionType",
                    "start": 95,
                    "end": 109,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 96,
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 99,
                        "end": 109,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 106,
                          "end": 109,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 107,
                              "end": 108,
                              "typeName": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 108,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 106,
                          "decorators": [],
                          "name": "Success",
                          "optional": false
                        }
                      }
                    ]
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 52,
                "end": 72,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 53,
                    "end": 68,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 63,
                      "end": 68,
                      "typeName": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 68,
                        "decorators": [],
                        "name": "Error",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 70,
                    "end": 71,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 116,
            "end": 161,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 123,
              "end": 161,
              "body": {
                "type": "TSInterfaceBody",
                "start": 158,
                "end": 161,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 133,
                "end": 140,
                "decorators": [],
                "name": "Failure",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 140,
                "end": 157,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 141,
                    "end": 156,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 151,
                      "end": 156,
                      "typeName": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 156,
                        "decorators": [],
                        "name": "Error",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 166,
            "end": 197,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 173,
              "end": 197,
              "body": {
                "type": "TSInterfaceBody",
                "start": 194,
                "end": 197,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 183,
                "end": 190,
                "decorators": [],
                "name": "Success",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 190,
                "end": 193,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 191,
                    "end": 192,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 27,
        "raw": "\"lib/result\"",
        "value": "lib/result"
      }
    }
  ],
  "sourceType": "module"
}
```
src/datastore_result.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 35,
        "raw": "\"lib/result\"",
        "value": "lib/result"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "Result",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "Result",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 45,
        "end": 74,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "T",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 57,
          "end": 73,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 63,
            "end": 73,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 64,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 69,
                  "decorators": [],
                  "name": "Error",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 71,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 57,
            "end": 63,
            "decorators": [],
            "name": "Result",
            "optional": false
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 51,
          "end": 54,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 52,
              "end": 53,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "T",
                "optional": false
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
  ],
  "sourceType": "module"
}
```
src/conditional_directive_field.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 56,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 55,
        "raw": "\"src/datastore_result\"",
        "value": "src/datastore_result"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 27,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 27,
            "decorators": [],
            "name": "DatastoreResult",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 130,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 65,
        "end": 130,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 71,
            "end": 129,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 76,
              "decorators": [],
              "name": "build",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 79,
              "end": 129,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 129,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 115,
                    "end": 127,
                    "argument": {
                      "type": "Literal",
                      "start": 122,
                      "end": 126,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 108,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 83,
                  "end": 108,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 100,
                    "end": 108,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 101,
                        "end": 107
                      }
                    ]
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 83,
                    "end": 100,
                    "left": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 98,
                      "decorators": [],
                      "name": "DatastoreResult",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
