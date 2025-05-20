__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 119,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 119,
        "body": {
          "type": "TSModuleBlock",
          "start": 40,
          "end": 119,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 46,
              "end": 117,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 53,
                "end": 117,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 70,
                  "end": 117,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 80,
                      "end": 111,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 91,
                        "decorators": [],
                        "name": "doSomething",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 91,
                        "end": 111,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 100,
                          "end": 111,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 95,
                            "end": 99
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 69,
                  "decorators": [],
                  "name": "ReferredTo",
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
          "type": "TSQualifiedName",
          "start": 14,
          "end": 39,
          "left": {
            "type": "TSQualifiedName",
            "start": 14,
            "end": 34,
            "left": {
              "type": "TSQualifiedName",
              "start": 14,
              "end": 30,
              "left": {
                "type": "Identifier",
                "start": 14,
                "end": 23,
                "decorators": [],
                "name": "elaborate",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 24,
                "end": 30,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 226,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "RT_ALIAS",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 34,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 33,
          "raw": "\"file1\"",
          "value": "file1"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 36,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 53,
        "decorators": [],
        "name": "ReferredTo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 56,
        "end": 101,
        "left": {
          "type": "TSQualifiedName",
          "start": 56,
          "end": 90,
          "left": {
            "type": "TSQualifiedName",
            "start": 56,
            "end": 85,
            "left": {
              "type": "TSQualifiedName",
              "start": 56,
              "end": 81,
              "left": {
                "type": "TSQualifiedName",
                "start": 56,
                "end": 74,
                "left": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 64,
                  "decorators": [],
                  "name": "RT_ALIAS",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 74,
                  "decorators": [],
                  "name": "elaborate",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 75,
                "end": 81,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 86,
            "end": 90,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 91,
          "end": 101,
          "decorators": [],
          "name": "ReferredTo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 226,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 111,
        "end": 226,
        "body": {
          "type": "TSModuleBlock",
          "start": 134,
          "end": 226,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 140,
              "end": 224,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 163,
                "end": 224,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 173,
                    "end": 218,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 184,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 184,
                      "end": 218,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 215,
                        "end": 218,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 185,
                          "end": 213,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 193,
                            "end": 213,
                            "decorators": [],
                            "name": "referred",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 201,
                              "end": 213,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 203,
                                "end": 213,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 203,
                                  "end": 213,
                                  "decorators": [],
                                  "name": "ReferredTo",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 146,
                "end": 162,
                "decorators": [],
                "name": "UsesReferredType",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 118,
          "end": 133,
          "decorators": [],
          "name": "ImportingModule",
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
  "sourceType": "module",
  "hashbang": null
}
```
