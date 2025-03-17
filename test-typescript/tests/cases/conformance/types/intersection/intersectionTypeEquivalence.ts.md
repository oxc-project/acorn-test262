__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 352,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 26,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 24,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 27,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 50,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 78,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 67,
            "end": 76,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 125,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 125,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 125,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 120,
                "end": 125,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 120,
                    "end": 121,
                    "typeName": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 124,
                    "end": 125,
                    "typeName": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 127,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 140,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 140,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 135,
                "end": 140,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 135,
                    "end": 136,
                    "typeName": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 139,
                    "end": 140,
                    "typeName": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 213,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 230,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 230,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 221,
                "end": 230,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 221,
                    "end": 222,
                    "typeName": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 225,
                    "end": 226,
                    "typeName": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 229,
                    "end": 230,
                    "typeName": {
                      "type": "Identifier",
                      "start": 229,
                      "end": 230,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 232,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 251,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 251,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 251,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 240,
                "end": 251,
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "start": 241,
                    "end": 246,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 241,
                        "end": 242,
                        "typeName": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 242,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 245,
                        "end": 246,
                        "typeName": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 246,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 250,
                    "end": 251,
                    "typeName": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 251,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 253,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 272,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 259,
              "end": 272,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 261,
                "end": 272,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 261,
                    "end": 262,
                    "typeName": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSIntersectionType",
                    "start": 266,
                    "end": 271,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 266,
                        "end": 267,
                        "typeName": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 267,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 270,
                        "end": 271,
                        "typeName": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 271,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
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
      "start": 274,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 288,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 288,
            "name": "ab",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 288,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 283,
                "end": 288,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 283,
                    "end": 284,
                    "typeName": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 284,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 287,
                    "end": 288,
                    "typeName": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 290,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 304,
            "name": "bc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 304,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 299,
                "end": 304,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 299,
                    "end": 300,
                    "typeName": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 303,
                    "end": 304,
                    "typeName": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 304,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 306,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 327,
            "name": "z1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 327,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 314,
                "end": 327,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 314,
                    "end": 323,
                    "exprName": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 323,
                      "name": "ab",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 326,
                    "end": 327,
                    "typeName": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 329,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 350,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 350,
            "name": "z1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 335,
              "end": 350,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 337,
                "end": 350,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 337,
                    "end": 338,
                    "typeName": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 338,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeQuery",
                    "start": 341,
                    "end": 350,
                    "exprName": {
                      "type": "Identifier",
                      "start": 348,
                      "end": 350,
                      "name": "bc",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
