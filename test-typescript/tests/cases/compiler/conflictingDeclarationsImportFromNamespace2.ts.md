node_modules/@types/lodash/object.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 28,
          "raw": "\"./index\"",
          "value": "./index"
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 214,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 56,
        "end": 214,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 62,
            "end": 212,
            "body": {
              "type": "TSInterfaceBody",
              "start": 85,
              "end": 212,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 93,
                  "end": 206,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 97,
                    "decorators": [],
                    "name": "pick",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 99,
                      "end": 205,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 146,
                          "end": 155,
                          "decorators": [],
                          "name": "object",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 152,
                            "end": 155,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 154,
                              "end": 155,
                              "typeName": {
                                "type": "Identifier",
                                "start": 154,
                                "end": 155,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "start": 165,
                          "end": 183,
                          "argument": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 173,
                            "decorators": [],
                            "name": "props",
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 173,
                            "end": 183,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 175,
                              "end": 183,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 180,
                                "end": 183,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 181,
                                    "end": 182,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 181,
                                      "end": 182,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 175,
                                "end": 180,
                                "decorators": [],
                                "name": "Array",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 192,
                        "end": 205,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 195,
                          "end": 205,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 199,
                            "end": 205,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 200,
                                "end": 201,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 200,
                                  "end": 201,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 203,
                                "end": 204,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 203,
                                  "end": 204,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 199,
                            "decorators": [],
                            "name": "Pick",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 99,
                        "end": 136,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 100,
                            "end": 116,
                            "const": false,
                            "constraint": {
                              "type": "TSObjectKeyword",
                              "start": 110,
                              "end": 116
                            },
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 100,
                              "end": 101,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            },
                            "out": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 118,
                            "end": 135,
                            "const": false,
                            "constraint": {
                              "type": "TSTypeOperator",
                              "start": 128,
                              "end": 135,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 134,
                                "end": 135,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 134,
                                  "end": 135,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 119,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 84,
              "decorators": [],
              "name": "LoDashStatic",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 46,
        "end": 55,
        "raw": "\"./index\"",
        "value": "./index"
      }
    }
  ],
  "sourceType": "module"
}
```
node_modules/@types/lodash/pick.d.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "raw": "\"./index\"",
        "value": "./index"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "pick",
            "optional": false
          }
        }
      ]
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
node_modules/@types/lodash/index.d.ts
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
        "decorators": [],
        "name": "_",
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
          "definite": false,
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 105,
                    "decorators": [],
                    "name": "LoDashStatic",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 107,
      "end": 160,
      "body": {
        "type": "TSModuleBlock",
        "start": 127,
        "end": 160,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 133,
            "end": 158,
            "body": {
              "type": "TSInterfaceBody",
              "start": 156,
              "end": 158,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 155,
              "decorators": [],
              "name": "LoDashStatic",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "_",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module"
}
```
index.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 35,
        "raw": "'lodash/pick'",
        "value": "lodash/pick"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 70,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 70,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 69,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "decorators": [],
              "name": "pick",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 57,
              "end": 69,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 63,
                "end": 69,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 67,
                  "decorators": [],
                  "name": "pick",
                  "optional": false
                },
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
