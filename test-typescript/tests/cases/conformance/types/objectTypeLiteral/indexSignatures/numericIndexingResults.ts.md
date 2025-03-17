__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 848,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 61,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 14,
            "end": 34,
            "parameters": [
              {
                "type": "Identifier",
                "start": 15,
                "end": 24,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 16,
                  "end": 24,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 46,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 39,
              "end": 40,
              "value": 1,
              "raw": "1"
            },
            "value": {
              "type": "Literal",
              "start": 43,
              "end": 45,
              "value": "",
              "raw": "''"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 59,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 51,
              "end": 54,
              "value": "2",
              "raw": "\"2\""
            },
            "value": {
              "type": "Literal",
              "start": 57,
              "end": 59,
              "value": "",
              "raw": "''"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 71,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 82,
            "end": 88,
            "object": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 84,
              "end": 87,
              "value": "1",
              "raw": "'1'"
            },
            "computed": true,
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
      "start": 90,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 96,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 99,
            "end": 105,
            "object": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 101,
              "end": 104,
              "value": "2",
              "raw": "'2'"
            },
            "computed": true,
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
      "start": 107,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 113,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 116,
            "end": 122,
            "object": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 118,
              "end": 121,
              "value": "3",
              "raw": "'3'"
            },
            "computed": true,
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
      "start": 124,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 130,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 133,
            "end": 137,
            "object": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 135,
              "end": 136,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
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
      "start": 139,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 145,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 148,
            "end": 152,
            "object": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 150,
              "end": 151,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
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
      "start": 154,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 163,
            "end": 167,
            "object": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 165,
              "end": 166,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 170,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 181,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 182,
        "end": 242,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 188,
            "end": 208,
            "parameters": [
              {
                "type": "Identifier",
                "start": 189,
                "end": 198,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 192,
                    "end": 198
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 207,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 213,
            "end": 223,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 213,
              "end": 214,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 222,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 216,
                "end": 222
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 228,
            "end": 240,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 228,
              "end": 231,
              "value": "2",
              "raw": "\"2\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 239,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 233,
                "end": 239
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
      "start": 244,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 252,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 251,
                "end": 252,
                "typeName": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "name": "I",
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
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 268,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 262,
            "end": 268,
            "object": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 264,
              "end": 267,
              "value": "1",
              "raw": "'1'"
            },
            "computed": true,
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
      "start": 270,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 276,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 279,
            "end": 285,
            "object": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 281,
              "end": 284,
              "value": "2",
              "raw": "'2'"
            },
            "computed": true,
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
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 293,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 296,
            "end": 302,
            "object": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 298,
              "end": 301,
              "value": "3",
              "raw": "'3'"
            },
            "computed": true,
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
      "start": 304,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 310,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 313,
            "end": 317,
            "object": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 315,
              "end": 316,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
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
      "start": 319,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 325,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 328,
            "end": 332,
            "object": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 330,
              "end": 331,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
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
      "start": 334,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 343,
            "end": 347,
            "object": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 345,
              "end": 346,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
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
      "start": 350,
      "end": 417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 417,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 357,
                "end": 417,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 363,
                    "end": 383,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 364,
                        "end": 373,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 365,
                          "end": 373,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 367,
                            "end": 373
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 374,
                      "end": 382,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 376,
                        "end": 382
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 388,
                    "end": 398,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 388,
                      "end": 389,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 389,
                      "end": 397,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 391,
                        "end": 397
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 403,
                    "end": 415,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 403,
                      "end": 406,
                      "value": "2",
                      "raw": "\"2\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 406,
                      "end": 414,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 408,
                        "end": 414
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "start": 419,
      "end": 435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 434,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 425,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 428,
            "end": 434,
            "object": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 430,
              "end": 433,
              "value": "1",
              "raw": "'1'"
            },
            "computed": true,
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
      "start": 436,
      "end": 452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 440,
          "end": 451,
          "id": {
            "type": "Identifier",
            "start": 440,
            "end": 442,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 445,
            "end": 451,
            "object": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 447,
              "end": 450,
              "value": "2",
              "raw": "'2'"
            },
            "computed": true,
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
      "start": 453,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 457,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 457,
            "end": 459,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 462,
            "end": 468,
            "object": {
              "type": "Identifier",
              "start": 462,
              "end": 463,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 464,
              "end": 467,
              "value": "3",
              "raw": "'3'"
            },
            "computed": true,
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
      "start": 470,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 474,
          "end": 483,
          "id": {
            "type": "Identifier",
            "start": 474,
            "end": 476,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 479,
            "end": 483,
            "object": {
              "type": "Identifier",
              "start": 479,
              "end": 480,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 481,
              "end": 482,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
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
      "start": 485,
      "end": 499,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 489,
          "end": 498,
          "id": {
            "type": "Identifier",
            "start": 489,
            "end": 491,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 494,
            "end": 498,
            "object": {
              "type": "Identifier",
              "start": 494,
              "end": 495,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 496,
              "end": 497,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
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
      "start": 500,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 513,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 506,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 509,
            "end": 513,
            "object": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 511,
              "end": 512,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
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
      "start": 516,
      "end": 567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 520,
          "end": 567,
          "id": {
            "type": "Identifier",
            "start": 520,
            "end": 546,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 521,
              "end": 546,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 523,
                "end": 546,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 525,
                    "end": 544,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 526,
                        "end": 535,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 527,
                          "end": 535,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 529,
                            "end": 535
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 536,
                      "end": 544,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 538,
                        "end": 544
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 549,
            "end": 567,
            "properties": [
              {
                "type": "Property",
                "start": 551,
                "end": 556,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 551,
                  "end": 552,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "Literal",
                  "start": 554,
                  "end": 556,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 558,
                "end": 565,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 558,
                  "end": 561,
                  "value": "2",
                  "raw": "\"2\""
                },
                "value": {
                  "type": "Literal",
                  "start": 563,
                  "end": 565,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 575,
            "name": "r1a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 578,
            "end": 584,
            "object": {
              "type": "Identifier",
              "start": 578,
              "end": 579,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 580,
              "end": 583,
              "value": "1",
              "raw": "'1'"
            },
            "computed": true,
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
      "start": 586,
      "end": 603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 602,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 593,
            "name": "r2a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 596,
            "end": 602,
            "object": {
              "type": "Identifier",
              "start": 596,
              "end": 597,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 598,
              "end": 601,
              "value": "2",
              "raw": "'2'"
            },
            "computed": true,
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
      "start": 604,
      "end": 620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 619,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 610,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 613,
            "end": 619,
            "object": {
              "type": "Identifier",
              "start": 613,
              "end": 614,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 615,
              "end": 618,
              "value": "3",
              "raw": "'3'"
            },
            "computed": true,
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
      "start": 621,
      "end": 635,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 634,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 627,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 630,
            "end": 634,
            "object": {
              "type": "Identifier",
              "start": 630,
              "end": 631,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 632,
              "end": 633,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
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
      "start": 636,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 649,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 642,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 645,
            "end": 649,
            "object": {
              "type": "Identifier",
              "start": 645,
              "end": 646,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 647,
              "end": 648,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
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
      "start": 651,
      "end": 665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 664,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 657,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 660,
            "end": 664,
            "object": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
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
      "start": 667,
      "end": 744,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 723,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 673,
              "end": 723,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 675,
                "end": 723,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 677,
                    "end": 697,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 678,
                        "end": 687,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 679,
                          "end": 687,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 681,
                            "end": 687
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 688,
                      "end": 696,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 690,
                        "end": 696
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 698,
                    "end": 708,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 698,
                      "end": 699,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 699,
                      "end": 707,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 701,
                        "end": 707
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 709,
                    "end": 721,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 709,
                      "end": 712,
                      "value": "2",
                      "raw": "\"2\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 712,
                      "end": 720,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 714,
                        "end": 720
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 726,
            "end": 744,
            "properties": [
              {
                "type": "Property",
                "start": 728,
                "end": 733,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 728,
                  "end": 729,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "Literal",
                  "start": 731,
                  "end": 733,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 735,
                "end": 742,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 735,
                  "end": 738,
                  "value": "2",
                  "raw": "\"2\""
                },
                "value": {
                  "type": "Literal",
                  "start": 740,
                  "end": 742,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 745,
      "end": 763,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 762,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 752,
            "name": "r1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 755,
            "end": 762,
            "object": {
              "type": "Identifier",
              "start": 755,
              "end": 757,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 758,
              "end": 761,
              "value": "1",
              "raw": "'1'"
            },
            "computed": true,
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
      "start": 764,
      "end": 782,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 768,
          "end": 781,
          "id": {
            "type": "Identifier",
            "start": 768,
            "end": 771,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 774,
            "end": 781,
            "object": {
              "type": "Identifier",
              "start": 774,
              "end": 776,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 777,
              "end": 780,
              "value": "2",
              "raw": "'2'"
            },
            "computed": true,
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
      "start": 783,
      "end": 800,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 787,
          "end": 799,
          "id": {
            "type": "Identifier",
            "start": 787,
            "end": 789,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 792,
            "end": 799,
            "object": {
              "type": "Identifier",
              "start": 792,
              "end": 794,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 795,
              "end": 798,
              "value": "3",
              "raw": "'3'"
            },
            "computed": true,
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
      "start": 801,
      "end": 816,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 805,
          "end": 815,
          "id": {
            "type": "Identifier",
            "start": 805,
            "end": 807,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 810,
            "end": 815,
            "object": {
              "type": "Identifier",
              "start": 810,
              "end": 812,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 813,
              "end": 814,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
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
      "start": 817,
      "end": 832,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 831,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 823,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 826,
            "end": 831,
            "object": {
              "type": "Identifier",
              "start": 826,
              "end": 828,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 829,
              "end": 830,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
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
      "start": 833,
      "end": 848,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 847,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 839,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 842,
            "end": 847,
            "object": {
              "type": "Identifier",
              "start": 842,
              "end": 844,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 845,
              "end": 846,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
            "optional": false
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
