__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "elaborate",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 26
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 33
              },
              "start": 17,
              "end": 33
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 37
            },
            "start": 17,
            "end": 37
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 42
          },
          "start": 17,
          "end": 42
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReferredTo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 72
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doSomething",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 94
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 98,
                            "end": 102
                          },
                          "start": 96,
                          "end": 102
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 103,
                          "end": 114
                        },
                        "expression": false,
                        "start": 94,
                        "end": 114
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 83,
                      "end": 114
                    }
                  ],
                  "start": 73,
                  "end": 120
                },
                "abstract": false,
                "declare": false,
                "start": 56,
                "end": 120
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 49,
              "end": 120
            }
          ],
          "start": 43,
          "end": 122
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 122
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RT_ALIAS",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "file1",
          "raw": "\"file1\"",
          "start": 26,
          "end": 33
        },
        "start": 18,
        "end": 34
      },
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferredTo",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 53
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RT_ALIAS",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 64
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "elaborate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 74
                },
                "start": 56,
                "end": 74
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 81
              },
              "start": 56,
              "end": 81
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 85
            },
            "start": 56,
            "end": 85
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 90
          },
          "start": 56,
          "end": 90
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReferredTo",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 101
        },
        "start": 56,
        "end": 101
      },
      "importKind": "value",
      "start": 36,
      "end": 102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportingModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 136
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "UsesReferredType",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 165
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 187
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "referred",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ReferredTo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 206,
                                  "end": 216
                                },
                                "typeArguments": null,
                                "start": 206,
                                "end": 216
                              },
                              "start": 204,
                              "end": 216
                            },
                            "start": 196,
                            "end": 216
                          },
                          "readonly": false,
                          "static": false,
                          "start": 188,
                          "end": 216
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 218,
                        "end": 221
                      },
                      "expression": false,
                      "start": 187,
                      "end": 221
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 176,
                    "end": 221
                  }
                ],
                "start": 166,
                "end": 227
              },
              "abstract": false,
              "declare": false,
              "start": 143,
              "end": 227
            }
          ],
          "start": 137,
          "end": 229
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 111,
        "end": 229
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 104,
      "end": 229
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 229
}
```
