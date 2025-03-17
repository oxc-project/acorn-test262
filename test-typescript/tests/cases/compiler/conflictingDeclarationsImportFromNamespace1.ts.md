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
        "name": "_",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "LoDashStatic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "pick",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                      "name": "object",
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
                            "name": "T",
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
                    {
                      "type": "RestElement",
                      "start": 163,
                      "end": 181,
                      "argument": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 171,
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                        "name": "Pick",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            "name": "pick",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "pick",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "pick",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "_",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "_",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 105,
            "name": "_",
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
                    "name": "_",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 105,
                    "name": "LoDashStatic",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "_",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "LoDashStatic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
  "end": 71,
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
            "name": "pick",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "name": "pick",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 57,
              "end": 69,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "CallExpression",
                "start": 63,
                "end": 69,
                "callee": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 67,
                  "name": "pick",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
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
