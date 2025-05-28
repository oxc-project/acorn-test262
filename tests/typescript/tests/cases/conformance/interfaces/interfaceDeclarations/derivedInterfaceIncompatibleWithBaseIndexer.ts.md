__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 558,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 94,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 21,
            "end": 60,
            "parameters": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 31,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 34,
                "end": 59,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 36,
                    "end": 46,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 39,
                        "end": 45
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 47,
                    "end": 57,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 50,
                        "end": 56
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 65,
            "end": 92,
            "parameters": [
              {
                "type": "Identifier",
                "start": 66,
                "end": 75,
                "decorators": [],
                "name": "x",
                "optional": false,
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
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 78,
                "end": 92,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 80,
                    "end": 90,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 89,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 83,
                        "end": 89
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 96,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 113,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 122,
          "end": 126,
          "expression": {
            "type": "Identifier",
            "start": 122,
            "end": 126,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 127,
        "end": 160,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 133,
            "end": 149,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 133,
              "end": 134,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 136,
                "end": 149,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 138,
                    "end": 147,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 141,
                        "end": 147
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 162,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 180,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 189,
          "end": 193,
          "expression": {
            "type": "Identifier",
            "start": 189,
            "end": 193,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 194,
        "end": 229,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 200,
            "end": 218,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 200,
              "end": 203,
              "value": "1",
              "raw": "'1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 218,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 205,
                "end": 218,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 207,
                    "end": 216,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 208,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 208,
                      "end": 216,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 210,
                        "end": 216
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 231,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 249,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 258,
          "end": 262,
          "expression": {
            "type": "Identifier",
            "start": 258,
            "end": 262,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 263,
        "end": 298,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 269,
            "end": 287,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 287,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 274,
                "end": 287,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 276,
                    "end": 285,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 276,
                      "end": 277,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 277,
                      "end": 285,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 279,
                        "end": 285
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 300,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 318,
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 327,
          "end": 331,
          "expression": {
            "type": "Identifier",
            "start": 327,
            "end": 331,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 332,
        "end": 369,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 338,
            "end": 358,
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 341,
              "decorators": [],
              "name": "foo",
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
              "start": 343,
              "end": 358,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 345,
                "end": 358,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 347,
                    "end": 356,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 347,
                      "end": 348,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 348,
                      "end": 356,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 350,
                        "end": 356
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 424,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 442,
        "decorators": [],
        "name": "Derived5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 451,
          "end": 455,
          "expression": {
            "type": "Identifier",
            "start": 451,
            "end": 455,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 456,
        "end": 489,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 462,
            "end": 478,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 462,
              "end": 463,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 463,
              "end": 478,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 465,
                "end": 478,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 467,
                    "end": 476,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 468,
                      "end": 476,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 470,
                        "end": 476
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 491,
      "end": 558,
      "id": {
        "type": "Identifier",
        "start": 501,
        "end": 509,
        "decorators": [],
        "name": "Derived5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 518,
          "end": 522,
          "expression": {
            "type": "Identifier",
            "start": 518,
            "end": 522,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 523,
        "end": 558,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 529,
            "end": 547,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 529,
              "end": 532,
              "value": "1",
              "raw": "'1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 532,
              "end": 547,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 534,
                "end": 547,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 536,
                    "end": 545,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 537,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 537,
                      "end": 545,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 539,
                        "end": 545
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
