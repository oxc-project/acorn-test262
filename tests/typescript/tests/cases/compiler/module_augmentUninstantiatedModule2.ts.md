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
        "start": 51,
        "end": 53
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
                "start": 76,
                "end": 83
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
                      "start": 92,
                      "end": 96
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 98,
                        "end": 104
                      },
                      "start": 96,
                      "end": 104
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 92,
                    "end": 105
                  }
                ],
                "start": 84,
                "end": 110
              },
              "declare": false,
              "start": 66,
              "end": 110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 59,
            "end": 110
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
                "start": 132,
                "end": 146
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
                      "start": 156,
                      "end": 162
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
                                "start": 168,
                                "end": 174
                              },
                              "start": 166,
                              "end": 174
                            },
                            "start": 165,
                            "end": 174
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
                              "start": 179,
                              "end": 186
                            },
                            "typeArguments": null,
                            "start": 179,
                            "end": 186
                          },
                          "start": 176,
                          "end": 186
                        },
                        "start": 164,
                        "end": 186
                      },
                      "start": 162,
                      "end": 186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 156,
                    "end": 187
                  }
                ],
                "start": 147,
                "end": 192
              },
              "declare": false,
              "start": 122,
              "end": 192
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 115,
            "end": 192
          }
        ],
        "start": 54,
        "end": 194
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 36,
      "end": 194
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "ng",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 207
      },
      "start": 196,
      "end": 208
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 209
}
```
