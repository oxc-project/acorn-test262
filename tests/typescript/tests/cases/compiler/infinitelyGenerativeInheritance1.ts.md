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
        "name": "Stack",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
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
              "name": "pop",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 30
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "typeArguments": null,
                "start": 34,
                "end": 35
              },
              "start": 32,
              "end": 35
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 27,
            "end": 35
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 47
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 46,
                  "end": 47
                }
              ],
              "start": 45,
              "end": 48
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Stack",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 57
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 58,
                            "end": 59
                          },
                          "typeArguments": null,
                          "start": 58,
                          "end": 59
                        }
                      ],
                      "start": 57,
                      "end": 60
                    },
                    "start": 52,
                    "end": 60
                  },
                  "start": 50,
                  "end": 60
                },
                "start": 49,
                "end": 60
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Stack",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 68
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 71,
                            "end": 72
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 74,
                                "end": 75
                              },
                              "typeArguments": null,
                              "start": 74,
                              "end": 75
                            },
                            "start": 72,
                            "end": 75
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 71,
                          "end": 76
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 77,
                            "end": 78
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 80,
                                "end": 81
                              },
                              "typeArguments": null,
                              "start": 80,
                              "end": 81
                            },
                            "start": 78,
                            "end": 81
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 77,
                          "end": 81
                        }
                      ],
                      "start": 69,
                      "end": 83
                    }
                  ],
                  "start": 68,
                  "end": 84
                },
                "start": 63,
                "end": 84
              },
              "start": 61,
              "end": 84
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 42,
            "end": 84
          }
        ],
        "start": 19,
        "end": 86
      },
      "declare": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyStack",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 105
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
              "start": 106,
              "end": 107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 107
          }
        ],
        "start": 105,
        "end": 108
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Stack",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 122
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
                  "start": 123,
                  "end": 124
                },
                "typeArguments": null,
                "start": 123,
                "end": 124
              }
            ],
            "start": 122,
            "end": 125
          },
          "start": 117,
          "end": 125
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 137
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 139
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 138,
                  "end": 139
                }
              ],
              "start": 137,
              "end": 140
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Stack",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 149
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 150,
                            "end": 151
                          },
                          "typeArguments": null,
                          "start": 150,
                          "end": 151
                        }
                      ],
                      "start": 149,
                      "end": 152
                    },
                    "start": 144,
                    "end": 152
                  },
                  "start": 142,
                  "end": 152
                },
                "start": 141,
                "end": 152
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Stack",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 160
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 164
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 166,
                                "end": 167
                              },
                              "typeArguments": null,
                              "start": 166,
                              "end": 167
                            },
                            "start": 164,
                            "end": 167
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 163,
                          "end": 168
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 169,
                            "end": 170
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 172,
                                "end": 173
                              },
                              "typeArguments": null,
                              "start": 172,
                              "end": 173
                            },
                            "start": 170,
                            "end": 173
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 169,
                          "end": 173
                        }
                      ],
                      "start": 161,
                      "end": 175
                    }
                  ],
                  "start": 160,
                  "end": 176
                },
                "start": 155,
                "end": 176
              },
              "start": 153,
              "end": 176
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 134,
            "end": 176
          }
        ],
        "start": 126,
        "end": 178
      },
      "declare": false,
      "start": 88,
      "end": 178
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 178
}
```
