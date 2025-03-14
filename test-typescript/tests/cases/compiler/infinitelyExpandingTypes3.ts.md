infinitelyExpandingTypes3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 136,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 136,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 32,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 51,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 50,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 47,
                  "end": 50,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 48,
                      "end": 49,
                      "typeName": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "decorators": [],
                  "name": "List",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 114,
            "end": 134,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 119,
              "decorators": [],
              "name": "owner",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 133,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 130,
                  "end": 133,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 131,
                      "end": 132,
                      "typeName": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 130,
                  "decorators": [],
                  "name": "OwnerList",
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
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "List",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "start": 138,
      "end": 204,
      "body": {
        "type": "TSInterfaceBody",
        "start": 183,
        "end": 204,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 189,
            "end": 202,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 193,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 201,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 195,
                "end": 201
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 182,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 173,
            "decorators": [],
            "name": "List",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 173,
            "end": 182,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 174,
                "end": 181,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 178,
                  "decorators": [],
                  "name": "List",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 157,
        "decorators": [],
        "name": "OwnerList",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 157,
        "end": 160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 158,
            "end": 159,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 206,
      "end": 273,
      "body": {
        "type": "TSInterfaceBody",
        "start": 252,
        "end": 273,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 258,
            "end": 271,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 262,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 270,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 264,
                "end": 270
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 238,
          "end": 251,
          "expression": {
            "type": "Identifier",
            "start": 238,
            "end": 242,
            "decorators": [],
            "name": "List",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 242,
            "end": 251,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 243,
                "end": 250,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 247,
                  "end": 250,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 248,
                      "end": 249,
                      "typeName": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 249,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 247,
                  "decorators": [],
                  "name": "List",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 226,
        "decorators": [],
        "name": "OwnerList2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 226,
        "end": 229,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 227,
            "end": 228,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 300,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 300,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 300,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 283,
                "end": 300,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 292,
                  "end": 300,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 293,
                      "end": 299
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 292,
                  "decorators": [],
                  "name": "OwnerList",
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
      "start": 302,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 328,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 328,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 310,
                "end": 328,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 320,
                  "end": 328,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 321,
                      "end": 327
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 320,
                  "decorators": [],
                  "name": "OwnerList2",
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
      "type": "ExpressionStatement",
      "start": 331,
      "end": 339,
      "expression": {
        "type": "AssignmentExpression",
        "start": 331,
        "end": 338,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 331,
          "end": 333,
          "decorators": [],
          "name": "o1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 336,
          "end": 338,
          "decorators": [],
          "name": "o2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
