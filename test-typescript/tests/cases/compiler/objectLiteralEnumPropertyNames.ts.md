__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 689,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 16,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 25,
        "name": "Strs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 32,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": false,
      "declare": false,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 68,
        "name": "TestStrs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 71,
        "end": 96,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 74,
          "end": 85,
          "name": {
            "type": "Identifier",
            "start": 74,
            "end": 77,
            "name": "key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 81,
            "end": 85,
            "typeName": {
              "type": "Identifier",
              "start": 81,
              "end": 85,
              "name": "Strs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 88,
          "end": 94
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 81,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 81,
            "end": 85,
            "name": "Strs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "name": "key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 114,
            "name": "x",
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
                  "name": "TestStrs",
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
          "init": {
            "type": "ObjectExpression",
            "start": 117,
            "end": 159,
            "properties": [
              {
                "type": "Property",
                "start": 123,
                "end": 137,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 124,
                  "end": 130,
                  "object": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 128,
                    "name": "Strs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 133,
                  "end": 137,
                  "value": "xo",
                  "raw": "'xo'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 143,
                "end": 157,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 144,
                  "end": 150,
                  "object": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 148,
                    "name": "Strs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 153,
                  "end": 157,
                  "value": "xe",
                  "raw": "'xe'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 168,
            "name": "ux",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 178,
                  "end": 184,
                  "object": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 182,
                    "name": "Strs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 187,
                  "end": 191,
                  "value": "xo",
                  "raw": "'xo'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 197,
                "end": 211,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 198,
                  "end": 204,
                  "object": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 202,
                    "name": "Strs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 211,
                  "value": "xe",
                  "raw": "'xe'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 231,
            "name": "y",
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
                  "name": "TestStrs",
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
          "init": {
            "type": "ObjectExpression",
            "start": 234,
            "end": 270,
            "properties": [
              {
                "type": "Property",
                "start": 240,
                "end": 251,
                "method": false,
                "shorthand": false,
                "computed": true,
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 257,
                "end": 268,
                "method": false,
                "shorthand": false,
                "computed": true,
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 318,
            "name": "z",
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
                  "name": "TestStrs",
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
          "init": {
            "type": "ObjectExpression",
            "start": 321,
            "end": 353,
            "properties": [
              {
                "type": "Property",
                "start": 327,
                "end": 336,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 332,
                  "end": 336,
                  "value": "zo",
                  "raw": "'zo'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 342,
                "end": 351,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 344,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 347,
                  "end": 351,
                  "value": "ze",
                  "raw": "'ze'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 362,
            "name": "uz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 376,
                  "end": 380,
                  "value": "zo",
                  "raw": "'zo'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 386,
                "end": 395,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 391,
                  "end": 395,
                  "value": "ze",
                  "raw": "'ze'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "Nums",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 415,
          "end": 416,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 416,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 426,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 439,
        "name": "TestNums",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 523,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 484,
            "name": "n",
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
                  "name": "TestNums",
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
          "init": {
            "type": "ObjectExpression",
            "start": 487,
            "end": 523,
            "properties": [
              {
                "type": "Property",
                "start": 493,
                "end": 504,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 494,
                  "end": 500,
                  "object": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 498,
                    "name": "Nums",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 503,
                  "end": 504,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 510,
                "end": 521,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 511,
                  "end": 517,
                  "object": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 515,
                    "name": "Nums",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 520,
                  "end": 521,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 524,
      "end": 571,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 571,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 532,
            "name": "un",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 542,
                  "end": 548,
                  "object": {
                    "type": "Identifier",
                    "start": 542,
                    "end": 546,
                    "name": "Nums",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 551,
                  "end": 552,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 558,
                "end": 569,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 559,
                  "end": 565,
                  "object": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 563,
                    "name": "Nums",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 564,
                    "end": 565,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 568,
                  "end": 569,
                  "value": 4,
                  "raw": "4"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 572,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 578,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 580,
            "name": "an",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 598,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 594,
            "name": "bn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 600,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 617,
            "name": "m",
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
                  "name": "TestNums",
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
          "init": {
            "type": "ObjectExpression",
            "start": 620,
            "end": 648,
            "properties": [
              {
                "type": "Property",
                "start": 626,
                "end": 633,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 629,
                  "name": "an",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 632,
                  "end": 633,
                  "value": 5,
                  "raw": "5"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 639,
                "end": 646,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 642,
                  "name": "bn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 645,
                  "end": 646,
                  "value": 6,
                  "raw": "6"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 649,
      "end": 688,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 688,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 657,
            "name": "um",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 669,
                  "name": "an",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 672,
                  "end": 673,
                  "value": 7,
                  "raw": "7"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 679,
                "end": 686,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 682,
                  "name": "bn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 685,
                  "end": 686,
                  "value": 8,
                  "raw": "8"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
