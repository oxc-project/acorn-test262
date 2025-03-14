interfaceThatIndirectlyInheritsFromItself.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 405,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 32,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 57,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 50,
                "end": 56
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 23,
          "end": 31,
          "expression": {
            "type": "Identifier",
            "start": 23,
            "end": 31,
            "decorators": [],
            "name": "Derived2",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 110,
      "body": {
        "type": "TSInterfaceBody",
        "start": 92,
        "end": 110,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 108,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 101,
                "end": 107
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 87,
          "end": 91,
          "expression": {
            "type": "Identifier",
            "start": 87,
            "end": 91,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 78,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 112,
      "end": 165,
      "body": {
        "type": "TSInterfaceBody",
        "start": 147,
        "end": 165,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 163,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 162,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 156,
                "end": 162
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 139,
          "end": 146,
          "expression": {
            "type": "Identifier",
            "start": 139,
            "end": 146,
            "decorators": [],
            "name": "Derived",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 130,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 167,
      "end": 405,
      "body": {
        "type": "TSModuleBlock",
        "start": 182,
        "end": 405,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 188,
            "end": 261,
            "body": {
              "type": "TSInterfaceBody",
              "start": 226,
              "end": 261,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 245,
                  "end": 255,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 246,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 246,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 248,
                      "end": 254
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 214,
                "end": 225,
                "expression": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 222,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 222,
                  "end": 225,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 223,
                      "end": 224,
                      "typeName": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 224,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 198,
              "end": 202,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 202,
              "end": 205,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 203,
                  "end": 204,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
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
            "start": 267,
            "end": 330,
            "body": {
              "type": "TSInterfaceBody",
              "start": 304,
              "end": 330,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 314,
                  "end": 324,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 315,
                    "end": 323,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 317,
                      "end": 323
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 296,
                "end": 303,
                "expression": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 300,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 300,
                  "end": 303,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 301,
                      "end": 302,
                      "typeName": {
                        "type": "Identifier",
                        "start": 301,
                        "end": 302,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 277,
              "end": 284,
              "decorators": [],
              "name": "Derived",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 284,
              "end": 287,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 285,
                  "end": 286,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 286,
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
            "start": 336,
            "end": 403,
            "body": {
              "type": "TSInterfaceBody",
              "start": 377,
              "end": 403,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 387,
                  "end": 397,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 387,
                    "end": 388,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 388,
                    "end": 396,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 390,
                      "end": 396
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 366,
                "end": 376,
                "expression": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 373,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 373,
                  "end": 376,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 374,
                      "end": 375,
                      "typeName": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 346,
              "end": 354,
              "decorators": [],
              "name": "Derived2",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 354,
              "end": 357,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 355,
                  "end": 356,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 356,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 181,
        "decorators": [],
        "name": "Generic",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
