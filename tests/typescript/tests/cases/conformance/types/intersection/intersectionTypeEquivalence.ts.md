__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 350,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 25,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 25,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
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
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 26,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 77,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 77,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 66,
            "end": 75,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 124,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 124,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 119,
                "end": 124,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 119,
                    "end": 120,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 120,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 123,
                    "end": 124,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 126,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 139,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 139,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 134,
                "end": 139,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 134,
                    "end": 135,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 135,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 138,
                    "end": 139,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 212,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 229,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 229,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 229,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 220,
                "end": 229,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 220,
                    "end": 221,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 221,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 224,
                    "end": 225,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 225,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 228,
                    "end": 229,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 231,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 250,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 250,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 250,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 239,
                "end": 250,
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "start": 240,
                    "end": 245,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 240,
                        "end": 241,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 241,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 244,
                        "end": 245,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 245,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 249,
                    "end": 250,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 252,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 271,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 271,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 271,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 260,
                "end": 271,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 260,
                    "end": 261,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 261,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSIntersectionType",
                    "start": 265,
                    "end": 270,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 265,
                        "end": 266,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 265,
                          "end": 266,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 269,
                        "end": 270,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 269,
                          "end": 270,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                ]
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
      "start": 273,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 287,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 287,
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 287,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 282,
                "end": 287,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 282,
                    "end": 283,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 283,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 286,
                    "end": 287,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 286,
                      "end": 287,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 289,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 303,
            "decorators": [],
            "name": "bc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 303,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 298,
                "end": 303,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 298,
                    "end": 299,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 299,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 302,
                    "end": 303,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 303,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 305,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 326,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 326,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 326,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 313,
                "end": 326,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 313,
                    "end": 322,
                    "exprName": {
                      "type": "Identifier",
                      "start": 320,
                      "end": 322,
                      "decorators": [],
                      "name": "ab",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 325,
                    "end": 326,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 326,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 328,
      "end": 350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 349,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 349,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 349,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 336,
                "end": 349,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 336,
                    "end": 337,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 337,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeQuery",
                    "start": 340,
                    "end": 349,
                    "exprName": {
                      "type": "Identifier",
                      "start": 347,
                      "end": 349,
                      "decorators": [],
                      "name": "bc",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null
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
