__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 216,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 15,
      "end": 62,
      "body": {
        "type": "TSInterfaceBody",
        "start": 32,
        "end": 62,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 51,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 41,
                "end": 50,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 44,
                  "end": 50,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 45,
                      "end": 49,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 46,
                        "end": 49,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 47,
                            "end": 48,
                            "typeName": {
                              "type": "Identifier",
                              "start": 47,
                              "end": 48,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 45,
                        "end": 46,
                        "decorators": [],
                        "name": "X",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 44,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
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
        "start": 25,
        "end": 28,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 28,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 30,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 81,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 81,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 81,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 73,
                  "end": 81,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 74,
                      "end": 80
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 73,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 91,
            "end": 94,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "z",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 124,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 124,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 117,
            "end": 122,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 107,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 107,
        "end": 110,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 109,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 125,
      "end": 175,
      "body": {
        "type": "TSInterfaceBody",
        "start": 143,
        "end": 175,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 149,
            "end": 167,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 153,
              "decorators": [],
              "name": "ofC4",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 167,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 157,
                  "end": 167,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 158,
                      "end": 166,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 160,
                          "end": 164,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 161,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 161,
                            "end": 164,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 163,
                              "end": 164,
                              "typeName": {
                                "type": "Identifier",
                                "start": 163,
                                "end": 164,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 157,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
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
        "start": 135,
        "end": 139,
        "decorators": [],
        "name": "Foo2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 139,
        "end": 142,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 141,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 196,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 184,
                "end": 196,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 188,
                  "end": 196,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 189,
                      "end": 195
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 188,
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 207,
            "end": 214,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 207,
              "end": 209,
              "decorators": [],
              "name": "f2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 210,
              "end": 214,
              "decorators": [],
              "name": "ofC4",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
