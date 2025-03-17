__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 841,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 74,
        "end": 133,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 80,
            "end": 103,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 93,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 87,
                    "end": 93
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 108,
            "end": 131,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 112,
                "end": 121,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 113,
                  "end": 121,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 115,
                    "end": 121
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 130,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
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
      "start": 135,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 146,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 147,
        "end": 174,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 153,
            "end": 172,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 157,
                "end": 164,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 158,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 160,
                    "end": 164,
                    "typeName": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 164,
                      "name": "Date",
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
              "start": 165,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 171,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 171,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 176,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 187,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 187,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 188,
            "end": 189,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
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
        "start": 191,
        "end": 245,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 197,
            "end": 215,
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 201,
                "end": 205,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 202,
                  "end": 205,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 204,
                    "end": 205,
                    "typeName": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 205,
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
              "start": 206,
              "end": 214,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 208,
                "end": 214
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 220,
            "end": 243,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 223,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 224,
                "end": 233,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 225,
                  "end": 233,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 227,
                    "end": 233
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 242,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
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
      "start": 247,
      "end": 312,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 258,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 258,
        "end": 261,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 259,
            "end": 260,
            "name": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
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
        "start": 262,
        "end": 312,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 268,
            "end": 284,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 271,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 272,
                "end": 276,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 273,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 275,
                    "end": 276,
                    "typeName": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 276,
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
              "start": 277,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 279,
                "end": 283,
                "typeName": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 283,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 289,
            "end": 310,
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 293,
                "end": 300,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 294,
                  "end": 300,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 296,
                    "end": 300,
                    "typeName": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 300,
                      "name": "Date",
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
              "start": 301,
              "end": 309,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 303,
                "end": 309
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
      "type": "VariableDeclaration",
      "start": 314,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 331,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 321,
                "end": 331,
                "typeName": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 322,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 322,
                  "end": 331,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 323,
                      "end": 330
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
      "start": 333,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 338,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 341,
            "end": 352,
            "callee": {
              "type": "MemberExpression",
              "start": 341,
              "end": 346,
              "object": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 343,
                "end": 346,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 347,
                "end": 351,
                "value": true,
                "raw": "true"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 395,
      "end": 484,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 406,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 406,
        "end": 412,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 407,
            "end": 408,
            "name": {
              "type": "Identifier",
              "start": 407,
              "end": 408,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 410,
            "end": 411,
            "name": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
              "name": "U",
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
        "start": 413,
        "end": 484,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 419,
            "end": 443,
            "key": {
              "type": "Identifier",
              "start": 419,
              "end": 422,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 423,
                "end": 427,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 424,
                  "end": 427,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 426,
                    "end": 427,
                    "typeName": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 427,
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
                "start": 429,
                "end": 433,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 430,
                  "end": 433,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 432,
                    "end": 433,
                    "typeName": {
                      "type": "Identifier",
                      "start": 432,
                      "end": 433,
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
              "start": 434,
              "end": 442,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 436,
                "end": 442
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 448,
            "end": 482,
            "key": {
              "type": "Identifier",
              "start": 448,
              "end": 451,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 452,
                "end": 461,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 453,
                  "end": 461,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 455,
                    "end": 461
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 463,
                "end": 472,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 464,
                  "end": 472,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 466,
                    "end": 472
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 473,
              "end": 481,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 475,
                "end": 481
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
      "start": 486,
      "end": 534,
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 497,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 497,
        "end": 503,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 498,
            "end": 499,
            "name": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 501,
            "end": 502,
            "name": {
              "type": "Identifier",
              "start": 501,
              "end": 502,
              "name": "U",
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
        "start": 504,
        "end": 534,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 510,
            "end": 532,
            "key": {
              "type": "Identifier",
              "start": 510,
              "end": 513,
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
              "start": 513,
              "end": 516,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 514,
                  "end": 515,
                  "name": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 515,
                    "name": "W",
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
            "params": [
              {
                "type": "Identifier",
                "start": 517,
                "end": 521,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 518,
                  "end": 521,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 520,
                    "end": 521,
                    "typeName": {
                      "type": "Identifier",
                      "start": 520,
                      "end": 521,
                      "name": "W",
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
                "start": 523,
                "end": 527,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 524,
                  "end": 527,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 526,
                    "end": 527,
                    "typeName": {
                      "type": "Identifier",
                      "start": 526,
                      "end": 527,
                      "name": "W",
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
              "start": 528,
              "end": 531,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 530,
                "end": 531,
                "typeName": {
                  "type": "Identifier",
                  "start": 530,
                  "end": 531,
                  "name": "W",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 536,
      "end": 560,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 540,
          "end": 559,
          "id": {
            "type": "Identifier",
            "start": 540,
            "end": 559,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 541,
              "end": 559,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 543,
                "end": 559,
                "typeName": {
                  "type": "Identifier",
                  "start": 543,
                  "end": 544,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 544,
                  "end": 559,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 545,
                      "end": 552
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 554,
                      "end": 558,
                      "typeName": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 558,
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "start": 561,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 581,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 567,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 570,
            "end": 581,
            "callee": {
              "type": "MemberExpression",
              "start": 570,
              "end": 575,
              "object": {
                "type": "Identifier",
                "start": 570,
                "end": 571,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 572,
                "end": 575,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 576,
                "end": 577,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 579,
                "end": 580,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 642,
      "end": 710,
      "id": {
        "type": "Identifier",
        "start": 652,
        "end": 653,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 653,
        "end": 659,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 654,
            "end": 655,
            "name": {
              "type": "Identifier",
              "start": 654,
              "end": 655,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 657,
            "end": 658,
            "name": {
              "type": "Identifier",
              "start": 657,
              "end": 658,
              "name": "U",
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
        "start": 660,
        "end": 710,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 666,
            "end": 671,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 666,
              "end": 667,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 667,
              "end": 670,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 669,
                "end": 670,
                "typeName": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 676,
            "end": 681,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 676,
              "end": 677,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 677,
              "end": 680,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 679,
                "end": 680,
                "typeName": {
                  "type": "Identifier",
                  "start": 679,
                  "end": 680,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 686,
            "end": 708,
            "key": {
              "type": "Identifier",
              "start": 686,
              "end": 689,
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
              "start": 689,
              "end": 692,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 690,
                  "end": 691,
                  "name": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 691,
                    "name": "A",
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
            "params": [
              {
                "type": "Identifier",
                "start": 693,
                "end": 697,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 694,
                  "end": 697,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 696,
                    "end": 697,
                    "typeName": {
                      "type": "Identifier",
                      "start": 696,
                      "end": 697,
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
              },
              {
                "type": "Identifier",
                "start": 699,
                "end": 703,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 700,
                  "end": 703,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 702,
                    "end": 703,
                    "typeName": {
                      "type": "Identifier",
                      "start": 702,
                      "end": 703,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 704,
              "end": 707,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 706,
                "end": 707,
                "typeName": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 707,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 712,
      "end": 760,
      "id": {
        "type": "Identifier",
        "start": 722,
        "end": 723,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 723,
        "end": 729,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 724,
            "end": 725,
            "name": {
              "type": "Identifier",
              "start": 724,
              "end": 725,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 727,
            "end": 728,
            "name": {
              "type": "Identifier",
              "start": 727,
              "end": 728,
              "name": "U",
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
        "start": 730,
        "end": 760,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 736,
            "end": 758,
            "key": {
              "type": "Identifier",
              "start": 736,
              "end": 739,
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
              "start": 739,
              "end": 742,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 740,
                  "end": 741,
                  "name": {
                    "type": "Identifier",
                    "start": 740,
                    "end": 741,
                    "name": "W",
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
            "params": [
              {
                "type": "Identifier",
                "start": 743,
                "end": 747,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 744,
                  "end": 747,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 746,
                    "end": 747,
                    "typeName": {
                      "type": "Identifier",
                      "start": 746,
                      "end": 747,
                      "name": "W",
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
                "start": 749,
                "end": 753,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 750,
                  "end": 753,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 752,
                    "end": 753,
                    "typeName": {
                      "type": "Identifier",
                      "start": 752,
                      "end": 753,
                      "name": "W",
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
              "start": 754,
              "end": 757,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 756,
                "end": 757,
                "typeName": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 757,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 762,
      "end": 786,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 766,
          "end": 785,
          "id": {
            "type": "Identifier",
            "start": 766,
            "end": 785,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 767,
              "end": 785,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 769,
                "end": 785,
                "typeName": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 770,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 770,
                  "end": 785,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 771,
                      "end": 778
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 780,
                      "end": 784,
                      "typeName": {
                        "type": "Identifier",
                        "start": 780,
                        "end": 784,
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "start": 787,
      "end": 808,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 791,
          "end": 807,
          "id": {
            "type": "Identifier",
            "start": 791,
            "end": 793,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 796,
            "end": 807,
            "callee": {
              "type": "MemberExpression",
              "start": 796,
              "end": 801,
              "object": {
                "type": "Identifier",
                "start": 796,
                "end": 797,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 798,
                "end": 801,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 802,
                "end": 803,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 805,
                "end": 806,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
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
