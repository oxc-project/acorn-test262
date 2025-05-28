__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 27,
        "value": "lib/result",
        "raw": "\"lib/result\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 199,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 34,
            "end": 111,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 41,
              "end": 111,
              "id": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null
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
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "start": 70,
                    "end": 71,
                    "name": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
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
                  }
                ]
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 80,
                        "end": 90,
                        "typeName": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 87,
                          "decorators": [],
                          "name": "Failure",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 99,
                        "end": 109,
                        "typeName": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 106,
                          "decorators": [],
                          "name": "Success",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 116,
            "end": 161,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 123,
              "end": 161,
              "id": {
                "type": "Identifier",
                "start": 133,
                "end": 140,
                "decorators": [],
                "name": "Failure",
                "optional": false,
                "typeAnnotation": null
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
                    "name": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 158,
                "end": 161,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 166,
            "end": 197,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 173,
              "end": 197,
              "id": {
                "type": "Identifier",
                "start": 183,
                "end": 190,
                "decorators": [],
                "name": "Success",
                "optional": false,
                "typeAnnotation": null
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
                    "name": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
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
                  }
                ]
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 194,
                "end": 197,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 35,
        "value": "lib/result",
        "raw": "\"lib/result\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 74,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 45,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
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
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 57,
          "end": 73,
          "typeName": {
            "type": "Identifier",
            "start": 57,
            "end": 63,
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 56,
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 55,
        "value": "src/datastore_result",
        "raw": "\"src/datastore_result\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 130,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 65,
        "end": 130,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 71,
            "end": 129,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 76,
              "decorators": [],
              "name": "build",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 79,
              "end": 129,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 108,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 83,
                  "end": 108,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
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
                  }
                }
              },
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
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
