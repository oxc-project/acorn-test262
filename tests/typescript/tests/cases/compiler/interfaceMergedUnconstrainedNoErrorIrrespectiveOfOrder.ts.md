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
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 49
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 74
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 76
                    },
                    "constraint": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 93
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 95,
                              "end": 98
                            },
                            "start": 93,
                            "end": 98
                          },
                          "value": null,
                          "start": 86,
                          "end": 98
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 103,
                          "end": 106
                        },
                        "start": 100,
                        "end": 106
                      },
                      "start": 85,
                      "end": 106
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 75,
                    "end": 106
                  }
                ],
                "start": 74,
                "end": 107
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "throttle",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 126
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 138
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 139,
                                "end": 140
                              },
                              "typeArguments": null,
                              "start": 139,
                              "end": 140
                            }
                          ],
                          "start": 138,
                          "end": 141
                        },
                        "start": 130,
                        "end": 141
                      },
                      "start": 128,
                      "end": 141
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 118,
                    "end": 142
                  }
                ],
                "start": 108,
                "end": 148
              },
              "declare": false,
              "start": 56,
              "end": 148
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 171
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 173
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 172,
                    "end": 173
                  }
                ],
                "start": 171,
                "end": 174
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 190
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 194,
                          "end": 202
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ReturnType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 209,
                                    "end": 219
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 220,
                                          "end": 221
                                        },
                                        "typeArguments": null,
                                        "start": 220,
                                        "end": 221
                                      }
                                    ],
                                    "start": 219,
                                    "end": 222
                                  },
                                  "start": 209,
                                  "end": 222
                                },
                                "start": 206,
                                "end": 222
                              },
                              "start": 203,
                              "end": 222
                            }
                          ],
                          "start": 202,
                          "end": 223
                        },
                        "start": 194,
                        "end": 223
                      },
                      "start": 192,
                      "end": 223
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 185,
                    "end": 224
                  }
                ],
                "start": 175,
                "end": 230
              },
              "declare": false,
              "start": 153,
              "end": 230
            }
          ],
          "start": 50,
          "end": 232
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 37,
        "end": 232
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 232
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 30,
  "end": 232
}
```
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
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 44
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 46
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 45,
                    "end": 46
                  }
                ],
                "start": 44,
                "end": 47
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 63
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 67,
                          "end": 75
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ReturnType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 82,
                                    "end": 92
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 93,
                                          "end": 94
                                        },
                                        "typeArguments": null,
                                        "start": 93,
                                        "end": 94
                                      }
                                    ],
                                    "start": 92,
                                    "end": 95
                                  },
                                  "start": 82,
                                  "end": 95
                                },
                                "start": 79,
                                "end": 95
                              },
                              "start": 76,
                              "end": 95
                            }
                          ],
                          "start": 75,
                          "end": 96
                        },
                        "start": 67,
                        "end": 96
                      },
                      "start": 65,
                      "end": 96
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 58,
                    "end": 97
                  }
                ],
                "start": 48,
                "end": 103
              },
              "declare": false,
              "start": 26,
              "end": 103
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 126
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 128
                    },
                    "constraint": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 141,
                            "end": 145
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 147,
                              "end": 150
                            },
                            "start": 145,
                            "end": 150
                          },
                          "value": null,
                          "start": 138,
                          "end": 150
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 155,
                          "end": 158
                        },
                        "start": 152,
                        "end": 158
                      },
                      "start": 137,
                      "end": 158
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 127,
                    "end": 158
                  }
                ],
                "start": 126,
                "end": 159
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "throttle",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 178
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 190
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 191,
                                "end": 192
                              },
                              "typeArguments": null,
                              "start": 191,
                              "end": 192
                            }
                          ],
                          "start": 190,
                          "end": 193
                        },
                        "start": 182,
                        "end": 193
                      },
                      "start": 180,
                      "end": 193
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 170,
                    "end": 194
                  }
                ],
                "start": 160,
                "end": 200
              },
              "declare": false,
              "start": 108,
              "end": 200
            }
          ],
          "start": 20,
          "end": 202
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 202
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
}
```
