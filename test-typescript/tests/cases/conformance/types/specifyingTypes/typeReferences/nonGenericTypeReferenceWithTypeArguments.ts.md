nonGenericTypeReferenceWithTypeArguments.ts
```json
{
  "type": "Program",
  "start": 77,
  "end": 410,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 77,
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 88,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 89,
      "end": 104,
      "body": {
        "type": "TSInterfaceBody",
        "start": 101,
        "end": 104,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 105,
      "end": 115,
      "body": {
        "type": "TSEnumBody",
        "start": 112,
        "end": 115,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 116,
      "end": 129,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 125,
        "end": 128,
        "members": []
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 147,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 147,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 139,
                  "end": 147,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 140,
                      "end": 146
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "C",
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
      "start": 149,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 166,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 166,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 158,
                  "end": 166,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 159,
                      "end": 165
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "I",
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
      "start": 168,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 185,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 185,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 177,
                  "end": 185,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 178,
                      "end": 184
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "E",
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
      "start": 187,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 204,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 196,
                  "end": 204,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 197,
                      "end": 203
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "T",
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
      "type": "FunctionDeclaration",
      "start": 207,
      "end": 409,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 223,
        "end": 409,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 229,
            "end": 240,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 237,
              "end": 240,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 245,
            "end": 260,
            "body": {
              "type": "TSInterfaceBody",
              "start": 257,
              "end": 260,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "decorators": [],
              "name": "I",
              "optional": false
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 265,
            "end": 275,
            "body": {
              "type": "TSEnumBody",
              "start": 272,
              "end": 275,
              "members": []
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "E",
              "optional": false
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 280,
            "end": 292,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 289,
              "end": 291,
              "members": []
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 297,
            "end": 315,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 301,
                "end": 314,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 314,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 305,
                      "end": 314,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 306,
                        "end": 314,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 307,
                            "end": 313
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 306,
                        "decorators": [],
                        "name": "C",
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
            "start": 320,
            "end": 338,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 324,
                "end": 337,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 337,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 326,
                    "end": 337,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 328,
                      "end": 337,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 329,
                        "end": 337,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 330,
                            "end": 336
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
                        "decorators": [],
                        "name": "I",
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
            "start": 343,
            "end": 361,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 347,
                "end": 360,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 360,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 349,
                    "end": 360,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 351,
                      "end": 360,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 352,
                        "end": 360,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 353,
                            "end": 359
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 352,
                        "decorators": [],
                        "name": "E",
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
            "start": 366,
            "end": 384,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 370,
                "end": 383,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 383,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 372,
                    "end": 383,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 374,
                      "end": 383,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 375,
                        "end": 383,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 376,
                            "end": 382
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "decorators": [],
                        "name": "T",
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
            "start": 389,
            "end": 407,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 393,
                "end": 406,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 406,
                  "decorators": [],
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 395,
                    "end": 406,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 397,
                      "end": 406,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 398,
                        "end": 406,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 399,
                            "end": 405
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
                        "decorators": [],
                        "name": "U",
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
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 217,
        "end": 220,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 218,
            "end": 219,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
