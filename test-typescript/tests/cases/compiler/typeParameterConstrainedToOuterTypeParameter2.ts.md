__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 51,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 49,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 24,
              "end": 37,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 25,
                  "end": 36,
                  "name": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 35,
                    "end": 36,
                    "typeName": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "name": "T",
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
                "start": 38,
                "end": 48,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 41,
                    "end": 48,
                    "typeName": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 42,
                      "end": 48,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 43,
                          "end": 47,
                          "typeName": {
                            "type": "Identifier",
                            "start": 43,
                            "end": 44,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 44,
                            "end": 47,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 45,
                                "end": 46,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 45,
                                  "end": 46,
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
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
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
      "start": 53,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 67,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 66,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 104,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 74,
            "end": 102,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 77,
              "end": 90,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 78,
                  "end": 89,
                  "name": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 88,
                    "end": 89,
                    "typeName": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "name": "T",
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
                "start": 91,
                "end": 101,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 101,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 94,
                    "end": 101,
                    "typeName": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 95,
                      "end": 101,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 96,
                          "end": 100,
                          "typeName": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 97,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 97,
                            "end": 100,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 98,
                                "end": 99,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 98,
                                  "end": 99,
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
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 122,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 122,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 114,
                  "end": 122,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 115,
                      "end": 121
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 143,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 139,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 130,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 131,
                  "end": 139,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 132,
                      "end": 138
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
