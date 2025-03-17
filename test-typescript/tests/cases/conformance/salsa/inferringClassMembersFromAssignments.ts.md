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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 8,
            "end": 15,
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 53,
            "name": "stringOrNumber",
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
      "start": 55,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 73,
            "name": "stringOrNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 76,
            "end": 91,
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 78,
              "end": 91,
              "name": "inConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 152,
            "name": "stringOrNumberOrUndefined",
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
      "start": 155,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 184,
            "name": "stringOrNumberOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 197,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 189,
              "end": 197,
              "name": "inMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 228,
            "name": "stringOrNumberOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 231,
            "end": 241,
            "object": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 233,
              "end": 241,
              "name": "inGetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 272,
            "name": "stringOrNumberOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 275,
            "end": 285,
            "object": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 277,
              "end": 285,
              "name": "inSetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 316,
            "name": "stringOrNumberOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 319,
            "end": 342,
            "object": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 321,
              "end": 342,
              "name": "inPropertyDeclaration",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 373,
            "name": "stringOrNumberOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 376,
            "end": 399,
            "object": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 378,
              "end": 399,
              "name": "inNestedArrowFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 455,
            "name": "stringOrNumberOrBoolean",
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
      "start": 458,
      "end": 477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 476,
            "name": "number",
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
      "start": 478,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 503,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 488,
            "name": "number",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 491,
            "end": 503,
            "object": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 493,
              "end": 503,
              "name": "inMultiple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 566,
            "name": "stringOrBooleanOrUndefined",
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
      "start": 568,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 620,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 598,
            "name": "stringOrBooleanOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 601,
            "end": 620,
            "object": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 603,
              "end": 620,
              "name": "inMultipleMethods",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 634,
            "name": "any",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 634,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 631,
                "end": 634
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
      "start": 636,
      "end": 665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 664,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 643,
            "name": "any",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 646,
            "end": 664,
            "object": {
              "type": "Identifier",
              "start": 646,
              "end": 647,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 648,
              "end": 664,
              "name": "inMethodNullable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 697,
            "name": "stringOrNumberOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 700,
            "end": 716,
            "object": {
              "type": "Identifier",
              "start": 700,
              "end": 701,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 702,
              "end": 716,
              "name": "inStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 747,
            "name": "stringOrNumberOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 750,
            "end": 766,
            "object": {
              "type": "Identifier",
              "start": 750,
              "end": 751,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 752,
              "end": 766,
              "name": "inStaticGetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 772,
            "end": 797,
            "name": "stringOrNumberOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 800,
            "end": 816,
            "object": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 802,
              "end": 816,
              "name": "inStaticSetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 822,
            "end": 847,
            "name": "stringOrNumberOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 850,
            "end": 879,
            "object": {
              "type": "Identifier",
              "start": 850,
              "end": 851,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 852,
              "end": 879,
              "name": "inStaticPropertyDeclaration",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 885,
            "end": 910,
            "name": "stringOrNumberOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 913,
            "end": 942,
            "object": {
              "type": "Identifier",
              "start": 913,
              "end": 914,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 915,
              "end": 942,
              "name": "inStaticNestedArrowFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
