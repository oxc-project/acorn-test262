__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 944,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 8,
            "end": 15,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 53,
            "decorators": [],
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 53,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 38,
                "end": 53,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
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
      "start": 55,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 73,
            "decorators": [],
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 76,
            "end": 91,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 78,
              "end": 91,
              "decorators": [],
              "name": "inConstructor",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 152,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 152,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 125,
                "end": 152,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 125,
                    "end": 131
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 143,
                    "end": 152
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
      "start": 155,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 197,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 184,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 197,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 189,
              "end": 197,
              "decorators": [],
              "name": "inMethod",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 228,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 231,
            "end": 241,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 233,
              "end": 241,
              "decorators": [],
              "name": "inGetter",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 243,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 272,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 275,
            "end": 285,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 277,
              "end": 285,
              "decorators": [],
              "name": "inSetter",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 316,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 319,
            "end": 342,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 321,
              "end": 342,
              "decorators": [],
              "name": "inPropertyDeclaration",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 399,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 373,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 376,
            "end": 399,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 378,
              "end": 399,
              "decorators": [],
              "name": "inNestedArrowFunction",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 455,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 455,
            "decorators": [],
            "name": "stringOrNumberOrBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 455,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 430,
                "end": 455,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 430,
                    "end": 436
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 439,
                    "end": 445
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 448,
                    "end": 455
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
      "start": 458,
      "end": 477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 476,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 476,
            "decorators": [],
            "name": "number",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 468,
              "end": 476,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 470,
                "end": 476
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
      "start": 478,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 503,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 488,
            "decorators": [],
            "name": "number",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 491,
            "end": 503,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 493,
              "end": 503,
              "decorators": [],
              "name": "inMultiple",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 509,
          "end": 566,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 566,
            "decorators": [],
            "name": "stringOrBooleanOrUndefined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 536,
              "end": 566,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 538,
                "end": 566,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 538,
                    "end": 544
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 547,
                    "end": 554
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 557,
                    "end": 566
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
      "start": 568,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 620,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 598,
            "decorators": [],
            "name": "stringOrBooleanOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 601,
            "end": 620,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 603,
              "end": 620,
              "decorators": [],
              "name": "inMultipleMethods",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 622,
      "end": 635,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 634,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 634,
            "decorators": [],
            "name": "any",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 634,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 631,
                "end": 634
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
      "start": 636,
      "end": 665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 664,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 643,
            "decorators": [],
            "name": "any",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 646,
            "end": 664,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 646,
              "end": 647,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 648,
              "end": 664,
              "decorators": [],
              "name": "inMethodNullable",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 668,
      "end": 717,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 672,
          "end": 716,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 697,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 700,
            "end": 716,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 700,
              "end": 701,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 702,
              "end": 716,
              "decorators": [],
              "name": "inStaticMethod",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 766,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 747,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 750,
            "end": 766,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 750,
              "end": 751,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 752,
              "end": 766,
              "decorators": [],
              "name": "inStaticGetter",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 817,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 772,
          "end": 816,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 772,
            "end": 797,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 800,
            "end": 816,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 802,
              "end": 816,
              "decorators": [],
              "name": "inStaticSetter",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 818,
      "end": 880,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 822,
          "end": 879,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 822,
            "end": 847,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 850,
            "end": 879,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 850,
              "end": 851,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 852,
              "end": 879,
              "decorators": [],
              "name": "inStaticPropertyDeclaration",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 881,
      "end": 943,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 885,
          "end": 942,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 885,
            "end": 910,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 913,
            "end": 942,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 913,
              "end": 914,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 915,
              "end": 942,
              "decorators": [],
              "name": "inStaticNestedArrowFunction",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
