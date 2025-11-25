__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "eslintPluginImportX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./lib/index.js",
                    "raw": "\"./lib/index.js\"",
                    "start": 49,
                    "end": 65
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null,
                  "start": 42,
                  "end": 66
                },
                "typeArguments": null,
                "start": 35,
                "end": 66
              },
              "start": 33,
              "end": 66
            },
            "start": 14,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 66
        }
      ],
      "declare": true,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "eslintPluginImportX",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 96
      },
      "start": 68,
      "end": 97
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 98
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PluginConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parser",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 45,
                    "end": 49
                  }
                ],
                "start": 36,
                "end": 49
              },
              "start": 34,
              "end": 49
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 50
          }
        ],
        "start": 23,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "stage-0",
                      "raw": "'stage-0'",
                      "start": 82,
                      "end": 91
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PluginConfig",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 105
                        },
                        "typeArguments": null,
                        "start": 93,
                        "end": 105
                      },
                      "start": 91,
                      "end": 105
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 82,
                    "end": 106
                  }
                ],
                "start": 76,
                "end": 108
              },
              "start": 74,
              "end": 108
            },
            "start": 67,
            "end": 108
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 108
        }
      ],
      "declare": true,
      "start": 53,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_default",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "configs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 147
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Literal",
                              "value": "stage-0",
                              "raw": "'stage-0'",
                              "start": 159,
                              "end": 168
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "PluginConfig",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 170,
                                  "end": 182
                                },
                                "typeArguments": null,
                                "start": 170,
                                "end": 182
                              },
                              "start": 168,
                              "end": 182
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 159,
                            "end": 183
                          }
                        ],
                        "start": 149,
                        "end": 189
                      },
                      "start": 147,
                      "end": 189
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 140,
                    "end": 190
                  }
                ],
                "start": 134,
                "end": 192
              },
              "start": 132,
              "end": 192
            },
            "start": 124,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 192
        }
      ],
      "declare": true,
      "start": 110,
      "end": 193
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 217
      },
      "exportKind": "value",
      "start": 194,
      "end": 218
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 235
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 235
          },
          "exportKind": "value",
          "start": 228,
          "end": 235
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 219,
      "end": 238
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 239
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
            "name": "pluginImportX",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 25
          },
          "start": 7,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "eslint-plugin-import-x",
        "raw": "'eslint-plugin-import-x'",
        "start": 31,
        "end": 55
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 55
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Plugin",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 73
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "configs",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 85
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 94
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parser",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 105,
                            "end": 111
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 113,
                                  "end": 119
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 122,
                                  "end": 126
                                }
                              ],
                              "start": 113,
                              "end": 126
                            },
                            "start": 111,
                            "end": 126
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 105,
                          "end": 126
                        }
                      ],
                      "start": 103,
                      "end": 128
                    }
                  ],
                  "start": 94,
                  "end": 129
                },
                "start": 88,
                "end": 129
              },
              "start": 86,
              "end": 129
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 129
          }
        ],
        "start": 74,
        "end": 131
      },
      "declare": false,
      "start": 57,
      "end": 131
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Plugin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 148
                },
                "typeArguments": null,
                "start": 142,
                "end": 148
              },
              "start": 140,
              "end": 148
            },
            "start": 139,
            "end": 148
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "pluginImportX",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 164
          },
          "definite": false,
          "start": 139,
          "end": 164
        }
      ],
      "declare": false,
      "start": 133,
      "end": 165
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 165
}
```
