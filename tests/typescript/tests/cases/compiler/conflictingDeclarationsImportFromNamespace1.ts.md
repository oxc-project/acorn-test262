__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 28,
          "value": "./index",
          "raw": "\"./index\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 210,
      "id": {
        "type": "Literal",
        "start": 46,
        "end": 55,
        "value": "./index",
        "raw": "\"./index\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 56,
        "end": 210,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 62,
            "end": 208,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 84,
              "decorators": [],
              "name": "LoDashStatic",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 85,
              "end": 208,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 93,
                  "end": 202,
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 97,
                    "decorators": [],
                    "name": "pick",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 97,
                    "end": 134,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 98,
                        "end": 114,
                        "name": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSObjectKeyword",
                          "start": 108,
                          "end": 114
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 116,
                        "end": 133,
                        "name": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 117,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 126,
                          "end": 133,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 132,
                            "end": 133,
                            "typeName": {
                              "type": "Identifier",
                              "start": 132,
                              "end": 133,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 144,
                      "end": 153,
                      "decorators": [],
                      "name": "object",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 150,
                        "end": 153,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 152,
                          "end": 153,
                          "typeName": {
                            "type": "Identifier",
                            "start": 152,
                            "end": 153,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 163,
                      "end": 181,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 171,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 171,
                        "end": 181,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 173,
                          "end": 181,
                          "typeName": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 178,
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 178,
                            "end": 181,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 179,
                                "end": 180,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 179,
                                  "end": 180,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 191,
                      "end": 201,
                      "typeName": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 195,
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 195,
                        "end": 201,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 196,
                            "end": 197,
                            "typeName": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 197,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 199,
                            "end": 200,
                            "typeName": {
                              "type": "Identifier",
                              "start": 199,
                              "end": 200,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
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
  "end": 47,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "pick",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "pick",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "value": "./index",
        "raw": "\"./index\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 32,
      "end": 46,
      "expression": {
        "type": "Identifier",
        "start": 41,
        "end": 45,
        "decorators": [],
        "name": "pick",
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
  "start": 39,
  "end": 161,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 39,
      "end": 50,
      "expression": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 51,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 105,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 105,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 91,
                  "end": 105,
                  "left": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 105,
                    "decorators": [],
                    "name": "LoDashStatic",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "type": "TSModuleDeclaration",
      "start": 107,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 127,
        "end": 160,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 133,
            "end": 158,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 155,
              "decorators": [],
              "name": "LoDashStatic",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 156,
              "end": 158,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
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
  "end": 70,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 16,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 16,
            "decorators": [],
            "name": "pick",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 35,
        "value": "lodash/pick",
        "raw": "'lodash/pick'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 70,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 70,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "decorators": [],
              "name": "pick",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 57,
              "end": 69,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "start": 63,
                "end": 69,
                "callee": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 67,
                  "decorators": [],
                  "name": "pick",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
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
