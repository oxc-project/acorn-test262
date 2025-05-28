__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 688,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 16,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 25,
        "decorators": [],
        "name": "Strs",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 26,
        "end": 54,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 32,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 36,
              "end": 39,
              "value": "a",
              "raw": "'a'"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 45,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 49,
              "end": 52,
              "value": "b",
              "raw": "'b'"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 68,
        "decorators": [],
        "name": "TestStrs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 71,
        "end": 96,
        "key": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 81,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 81,
            "end": 85,
            "decorators": [],
            "name": "Strs",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 88,
          "end": 94
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 159,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 114,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 114,
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 117,
            "end": 159,
            "properties": [
              {
                "type": "Property",
                "start": 123,
                "end": 137,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 124,
                  "end": 130,
                  "object": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 128,
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 133,
                  "end": 137,
                  "value": "xo",
                  "raw": "'xo'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 143,
                "end": 157,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 144,
                  "end": 150,
                  "object": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 148,
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 153,
                  "end": 157,
                  "value": "xe",
                  "raw": "'xe'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 213,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 168,
            "decorators": [],
            "name": "ux",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 171,
            "end": 213,
            "properties": [
              {
                "type": "Property",
                "start": 177,
                "end": 191,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 178,
                  "end": 184,
                  "object": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 182,
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 187,
                  "end": 191,
                  "value": "xo",
                  "raw": "'xo'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 197,
                "end": 211,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 198,
                  "end": 204,
                  "object": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 202,
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 211,
                  "value": "xe",
                  "raw": "'xe'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 270,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 231,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 231,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 231,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 231,
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 234,
            "end": 270,
            "properties": [
              {
                "type": "Property",
                "start": 240,
                "end": 251,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 241,
                  "end": 244,
                  "value": "a",
                  "raw": "'a'"
                },
                "value": {
                  "type": "Literal",
                  "start": 247,
                  "end": 251,
                  "value": "yo",
                  "raw": "'yo'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 257,
                "end": 268,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 258,
                  "end": 261,
                  "value": "b",
                  "raw": "'b'"
                },
                "value": {
                  "type": "Literal",
                  "start": 264,
                  "end": 268,
                  "value": "ye",
                  "raw": "'ye'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 285,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 281,
            "end": 284,
            "value": "a",
            "raw": "'a'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 300,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 296,
            "end": 299,
            "value": "b",
            "raw": "'b'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 353,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 318,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 310,
                "end": 318,
                "typeName": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 318,
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 321,
            "end": 353,
            "properties": [
              {
                "type": "Property",
                "start": 327,
                "end": 336,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 332,
                  "end": 336,
                  "value": "zo",
                  "raw": "'zo'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 342,
                "end": 351,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 344,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 347,
                  "end": 351,
                  "value": "ze",
                  "raw": "'ze'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 397,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 362,
            "decorators": [],
            "name": "uz",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 365,
            "end": 397,
            "properties": [
              {
                "type": "Property",
                "start": 371,
                "end": 380,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 376,
                  "end": 380,
                  "value": "zo",
                  "raw": "'zo'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 386,
                "end": 395,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 391,
                  "end": 395,
                  "value": "ze",
                  "raw": "'ze'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 399,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 408,
        "decorators": [],
        "name": "Nums",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 409,
        "end": 425,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 415,
            "end": 416,
            "id": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 422,
            "end": 423,
            "id": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 426,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 439,
        "decorators": [],
        "name": "TestNums",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 442,
        "end": 466,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 444,
            "end": 454,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 444,
              "end": 445,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 453,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 447,
                "end": 453
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 455,
            "end": 464,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 455,
              "end": 456,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 456,
              "end": 464,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 458,
                "end": 464
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
      "start": 467,
      "end": 523,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 523,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 484,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 474,
              "end": 484,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 476,
                "end": 484,
                "typeName": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 484,
                  "decorators": [],
                  "name": "TestNums",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 487,
            "end": 523,
            "properties": [
              {
                "type": "Property",
                "start": 493,
                "end": 504,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 494,
                  "end": 500,
                  "object": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 498,
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 503,
                  "end": 504,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 510,
                "end": 521,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 511,
                  "end": 517,
                  "object": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 515,
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 520,
                  "end": 521,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 524,
      "end": 571,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 571,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 532,
            "decorators": [],
            "name": "un",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 535,
            "end": 571,
            "properties": [
              {
                "type": "Property",
                "start": 541,
                "end": 552,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 542,
                  "end": 548,
                  "object": {
                    "type": "Identifier",
                    "start": 542,
                    "end": 546,
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 551,
                  "end": 552,
                  "value": 3,
                  "raw": "3"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 558,
                "end": 569,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 559,
                  "end": 565,
                  "object": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 563,
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 564,
                    "end": 565,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 568,
                  "end": 569,
                  "value": 4,
                  "raw": "4"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 572,
      "end": 585,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 578,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 580,
            "decorators": [],
            "name": "an",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 583,
            "end": 584,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 599,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 598,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 594,
            "decorators": [],
            "name": "bn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 597,
            "end": 598,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 600,
      "end": 648,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 617,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 607,
              "end": 617,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 609,
                "end": 617,
                "typeName": {
                  "type": "Identifier",
                  "start": 609,
                  "end": 617,
                  "decorators": [],
                  "name": "TestNums",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 620,
            "end": 648,
            "properties": [
              {
                "type": "Property",
                "start": 626,
                "end": 633,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 629,
                  "decorators": [],
                  "name": "an",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 632,
                  "end": 633,
                  "value": 5,
                  "raw": "5"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 639,
                "end": 646,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 642,
                  "decorators": [],
                  "name": "bn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 645,
                  "end": 646,
                  "value": 6,
                  "raw": "6"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 649,
      "end": 688,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 688,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 657,
            "decorators": [],
            "name": "um",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 660,
            "end": 688,
            "properties": [
              {
                "type": "Property",
                "start": 666,
                "end": 673,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 669,
                  "decorators": [],
                  "name": "an",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 672,
                  "end": 673,
                  "value": 7,
                  "raw": "7"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 679,
                "end": 686,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 682,
                  "decorators": [],
                  "name": "bn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 685,
                  "end": 686,
                  "value": 8,
                  "raw": "8"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
