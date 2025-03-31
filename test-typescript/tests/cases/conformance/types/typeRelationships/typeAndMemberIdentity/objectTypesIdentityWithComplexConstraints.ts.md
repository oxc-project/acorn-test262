__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 389,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 105,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 103,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 20,
              "end": 85,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 21,
                  "end": 84,
                  "name": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 31,
                    "end": 84,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 45,
                        "end": 76,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 45,
                          "end": 58,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 46,
                              "end": 57,
                              "name": {
                                "type": "Identifier",
                                "start": 46,
                                "end": 47,
                                "name": "S",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 56,
                                "end": 57,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 56,
                                  "end": 57,
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                            "start": 59,
                            "end": 63,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 60,
                              "end": 63,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 62,
                                "end": 63,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 62,
                                  "end": 63,
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
                            "type": "Identifier",
                            "start": 65,
                            "end": 69,
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 66,
                              "end": 69,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 68,
                                "end": 69,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 68,
                                  "end": 69,
                                  "name": "S",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 70,
                          "end": 76,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 72,
                            "end": 76
                          }
                        }
                      }
                    ]
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
                "start": 86,
                "end": 90,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 87,
                  "end": 90,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 89,
                    "end": 90,
                    "typeName": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
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
                "type": "Identifier",
                "start": 92,
                "end": 96,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 96,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
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
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 103,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 99,
                "end": 103
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 107,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 119,
        "end": 160,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 127,
            "end": 158,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 127,
              "end": 140,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 128,
                  "end": 139,
                  "name": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 138,
                    "end": 139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                "start": 141,
                "end": 145,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 142,
                  "end": 145,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 144,
                    "end": 145,
                    "typeName": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 145,
                      "name": "U",
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
                "type": "Identifier",
                "start": 147,
                "end": 151,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 151,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 150,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 158,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 154,
                "end": 158
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 279,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 291,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 292,
          "end": 296,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 293,
            "end": 296,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 295,
              "end": 296,
              "typeName": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 299,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 311,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 312,
          "end": 316,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 313,
            "end": 316,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 315,
              "end": 316,
              "typeName": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 365,
      "end": 389,
      "id": {
        "type": "Identifier",
        "start": 374,
        "end": 377,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 378,
          "end": 384,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 379,
            "end": 384,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 381,
              "end": 384
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 389,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
