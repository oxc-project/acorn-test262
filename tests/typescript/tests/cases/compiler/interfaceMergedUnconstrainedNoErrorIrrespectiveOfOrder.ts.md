__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 232,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 232,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 37,
        "end": 232,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 49,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 50,
          "end": 232,
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "start": 56,
              "end": 148,
              "id": {
                "type": "Identifier",
                "start": 66,
                "end": 74,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 74,
                "end": 107,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 75,
                    "end": 106,
                    "name": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 76,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSFunctionType",
                      "start": 85,
                      "end": 106,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 86,
                          "end": 98,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 93,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 93,
                            "end": 98,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 95,
                              "end": 98
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 100,
                        "end": 106,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 103,
                          "end": 106
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 108,
                "end": 148,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 118,
                    "end": 142,
                    "key": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 126,
                      "decorators": [],
                      "name": "throttle",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 128,
                      "end": 141,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 130,
                        "end": 141,
                        "typeName": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 138,
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 138,
                          "end": 141,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 139,
                              "end": 140,
                              "typeName": {
                                "type": "Identifier",
                                "start": 139,
                                "end": 140,
                                "decorators": [],
                                "name": "T",
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
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 153,
              "end": 230,
              "id": {
                "type": "Identifier",
                "start": 163,
                "end": 171,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 171,
                "end": 174,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 172,
                    "end": 173,
                    "name": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 175,
                "end": 230,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 185,
                    "end": 224,
                    "key": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 190,
                      "decorators": [],
                      "name": "unary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 192,
                      "end": 223,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 194,
                        "end": 223,
                        "typeName": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 202,
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 202,
                          "end": 223,
                          "params": [
                            {
                              "type": "TSFunctionType",
                              "start": 203,
                              "end": 222,
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 206,
                                "end": 222,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 209,
                                  "end": 222,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 209,
                                    "end": 219,
                                    "decorators": [],
                                    "name": "ReturnType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 219,
                                    "end": 222,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 220,
                                        "end": 221,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 220,
                                          "end": 221,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              }
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
        "kind": "namespace",
        "declare": false,
        "global": false
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 202,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 202,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 19,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 20,
          "end": 202,
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 103,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 44,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 44,
                "end": 47,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 45,
                    "end": 46,
                    "name": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 48,
                "end": 103,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 58,
                    "end": 97,
                    "key": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 63,
                      "decorators": [],
                      "name": "unary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 65,
                      "end": 96,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 67,
                        "end": 96,
                        "typeName": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 75,
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 75,
                          "end": 96,
                          "params": [
                            {
                              "type": "TSFunctionType",
                              "start": 76,
                              "end": 95,
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 79,
                                "end": 95,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 82,
                                  "end": 95,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 82,
                                    "end": 92,
                                    "decorators": [],
                                    "name": "ReturnType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 92,
                                    "end": 95,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 93,
                                        "end": 94,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 93,
                                          "end": 94,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              }
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
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 108,
              "end": 200,
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 126,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 126,
                "end": 159,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 127,
                    "end": 158,
                    "name": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSFunctionType",
                      "start": 137,
                      "end": 158,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 138,
                          "end": 150,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 145,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 145,
                            "end": 150,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 147,
                              "end": 150
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 152,
                        "end": 158,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 155,
                          "end": 158
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 160,
                "end": 200,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 170,
                    "end": 194,
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 178,
                      "decorators": [],
                      "name": "throttle",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 180,
                      "end": 193,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 182,
                        "end": 193,
                        "typeName": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 190,
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 190,
                          "end": 193,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 191,
                              "end": 192,
                              "typeName": {
                                "type": "Identifier",
                                "start": 191,
                                "end": 192,
                                "decorators": [],
                                "name": "T",
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
        "kind": "namespace",
        "declare": false,
        "global": false
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
