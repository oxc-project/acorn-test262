__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 67,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 66,
            "decorators": [],
            "name": "eslintPluginImportX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 35,
                "end": 66,
                "exprName": {
                  "type": "TSImportType",
                  "start": 42,
                  "end": 66,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 49,
                    "end": 65,
                    "literal": {
                      "type": "Literal",
                      "start": 49,
                      "end": 65,
                      "value": "./lib/index.js",
                      "raw": "\"./lib/index.js\""
                    }
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 68,
      "end": 97,
      "expression": {
        "type": "Identifier",
        "start": 77,
        "end": 96,
        "decorators": [],
        "name": "eslintPluginImportX",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 239,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "PluginConfig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 50,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 33,
              "decorators": [],
              "name": "parser",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 49,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 36,
                "end": 49,
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
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 109,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 108,
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 76,
                "end": 108,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 82,
                    "end": 106,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 82,
                      "end": 91,
                      "value": "stage-0",
                      "raw": "'stage-0'"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 91,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 93,
                        "end": 105,
                        "typeName": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 105,
                          "decorators": [],
                          "name": "PluginConfig",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 193,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 192,
            "decorators": [],
            "name": "_default",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 134,
                "end": 192,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 140,
                    "end": 190,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 147,
                      "decorators": [],
                      "name": "configs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 149,
                        "end": 189,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 159,
                            "end": 183,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Literal",
                              "start": 159,
                              "end": 168,
                              "value": "stage-0",
                              "raw": "'stage-0'"
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 168,
                              "end": 182,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 170,
                                "end": 182,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 170,
                                  "end": 182,
                                  "decorators": [],
                                  "name": "PluginConfig",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 194,
      "end": 218,
      "declaration": {
        "type": "Identifier",
        "start": 209,
        "end": 217,
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 219,
      "end": 238,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 228,
          "end": 235,
          "local": {
            "type": "Identifier",
            "start": 228,
            "end": 235,
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 228,
            "end": 235,
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
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
  "end": 165,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 25,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "decorators": [],
            "name": "pluginImportX",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 55,
        "value": "eslint-plugin-import-x",
        "raw": "'eslint-plugin-import-x'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 73,
        "decorators": [],
        "name": "Plugin",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 74,
        "end": 131,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 129,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 85,
              "decorators": [],
              "name": "configs",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 94,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 94,
                  "end": 129,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 103,
                      "end": 128,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 105,
                          "end": 126,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 111,
                            "decorators": [],
                            "name": "parser",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 111,
                            "end": 126,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 113,
                              "end": 126,
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
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 165,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 148,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 142,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 148,
                  "decorators": [],
                  "name": "Plugin",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 151,
            "end": 164,
            "decorators": [],
            "name": "pluginImportX",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
