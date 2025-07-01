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
                "start": 14,
                "end": 23
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 30
              },
              "start": 14,
              "end": 30
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "start": 14,
            "end": 34
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 39
          },
          "start": 14,
          "end": 39
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
                  "start": 59,
                  "end": 69
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
                        "start": 80,
                        "end": 91
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
                            "start": 95,
                            "end": 99
                          },
                          "start": 93,
                          "end": 99
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 100,
                          "end": 111
                        },
                        "expression": false,
                        "start": 91,
                        "end": 111
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 80,
                      "end": 111
                    }
                  ],
                  "start": 70,
                  "end": 117
                },
                "abstract": false,
                "declare": false,
                "start": 53,
                "end": 117
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 46,
              "end": 117
            }
          ],
          "start": 40,
          "end": 119
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 119
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 119
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 120
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
          "start": 118,
          "end": 133
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
                "start": 146,
                "end": 162
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
                      "start": 173,
                      "end": 184
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
                                  "start": 203,
                                  "end": 213
                                },
                                "typeArguments": null,
                                "start": 203,
                                "end": 213
                              },
                              "start": 201,
                              "end": 213
                            },
                            "start": 193,
                            "end": 213
                          },
                          "readonly": false,
                          "static": false,
                          "start": 185,
                          "end": 213
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 215,
                        "end": 218
                      },
                      "expression": false,
                      "start": 184,
                      "end": 218
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 173,
                    "end": 218
                  }
                ],
                "start": 163,
                "end": 224
              },
              "abstract": false,
              "declare": false,
              "start": 140,
              "end": 224
            }
          ],
          "start": 134,
          "end": 226
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 111,
        "end": 226
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 104,
      "end": 226
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
