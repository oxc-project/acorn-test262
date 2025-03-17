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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 119,
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
                "name": "elaborate",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 24,
                "end": 30,
                "name": "nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "name": "mod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "name": "name",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 40,
          "end": 119,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 46,
              "end": 117,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 53,
                "end": 117,
                "id": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 69,
                  "name": "ReferredTo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 70,
                  "end": 117,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 80,
                      "end": 111,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 91,
                        "name": "doSomething",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 91,
                        "end": 111,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 100,
                          "end": 111,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 95,
                            "end": 99
                          }
                        }
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
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
        "name": "RT_ALIAS",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 34,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 33,
          "value": "file1",
          "raw": "\"file1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 36,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 53,
        "name": "ReferredTo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                  "name": "RT_ALIAS",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 74,
                  "name": "elaborate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 75,
                "end": 81,
                "name": "nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "name": "mod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 86,
            "end": 90,
            "name": "name",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 91,
          "end": 101,
          "name": "ReferredTo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 226,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 111,
        "end": 226,
        "id": {
          "type": "Identifier",
          "start": 118,
          "end": 133,
          "name": "ImportingModule",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 134,
          "end": 226,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 140,
              "end": 224,
              "id": {
                "type": "Identifier",
                "start": 146,
                "end": 162,
                "name": "UsesReferredType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 163,
                "end": 224,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 173,
                    "end": 218,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 184,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 184,
                      "end": 218,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "referred",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 201,
                              "end": 213,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 203,
                                "end": 213,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 203,
                                  "end": 213,
                                  "name": "ReferredTo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 215,
                        "end": 218,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
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
  "sourceType": "module",
  "hashbang": null
}
```
