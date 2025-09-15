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
        "name": "ng",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "angular",
          "raw": "\"angular\"",
          "start": 20,
          "end": 29
        },
        "start": 12,
        "end": 30
      },
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./moduleAugmentation",
        "raw": "\"./moduleAugmentation\"",
        "start": 39,
        "end": 61
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 62
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 71,
                "end": 77
              },
              "start": 69,
              "end": 77
            },
            "start": 68,
            "end": 77
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ng",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 82
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 92
              },
              "optional": false,
              "computed": false,
              "start": 80,
              "end": 92
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 80,
            "end": 94
          },
          "definite": false,
          "start": 68,
          "end": 94
        }
      ],
      "declare": false,
      "start": 64,
      "end": 95
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 96
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ng",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "angular",
        "raw": "\"angular\"",
        "start": 20,
        "end": 29
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "angular",
        "raw": "\"angular\"",
        "start": 45,
        "end": 54
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IAngularStatic",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 92
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 112
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 120,
                            "end": 126
                          },
                          "start": 117,
                          "end": 126
                        },
                        "start": 114,
                        "end": 126
                      },
                      "start": 112,
                      "end": 126
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 103,
                    "end": 127
                  }
                ],
                "start": 93,
                "end": 133
              },
              "declare": false,
              "start": 68,
              "end": 133
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 61,
            "end": 133
          }
        ],
        "start": 55,
        "end": 135
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 30,
      "end": 135
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 136
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ng",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ng",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 16,
                    "end": 18
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IAngularStatic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 19,
                    "end": 33
                  },
                  "start": 16,
                  "end": 33
                },
                "typeArguments": null,
                "start": 16,
                "end": 33
              },
              "start": 14,
              "end": 33
            },
            "start": 12,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 33
        }
      ],
      "declare": true,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ng",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 56
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 86
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 99
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 101,
                        "end": 107
                      },
                      "start": 99,
                      "end": 107
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 95,
                    "end": 108
                  }
                ],
                "start": 87,
                "end": 113
              },
              "declare": false,
              "start": 69,
              "end": 113
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 62,
            "end": 113
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IAngularStatic",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 149
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "module",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 165
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 171,
                                "end": 177
                              },
                              "start": 169,
                              "end": 177
                            },
                            "start": 168,
                            "end": 177
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 182,
                              "end": 189
                            },
                            "typeArguments": null,
                            "start": 182,
                            "end": 189
                          },
                          "start": 179,
                          "end": 189
                        },
                        "start": 167,
                        "end": 189
                      },
                      "start": 165,
                      "end": 189
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 159,
                    "end": 190
                  }
                ],
                "start": 150,
                "end": 195
              },
              "declare": false,
              "start": 125,
              "end": 195
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 118,
            "end": 195
          }
        ],
        "start": 57,
        "end": 197
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 36,
      "end": 197
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "ng",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 210
      },
      "start": 199,
      "end": 211
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 212
}
```
