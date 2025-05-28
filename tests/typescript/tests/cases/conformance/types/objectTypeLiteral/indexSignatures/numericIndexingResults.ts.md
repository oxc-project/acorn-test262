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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 16,
                  "end": 24,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  }
                }
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
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 39,
              "end": 40,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 43,
              "end": 45,
              "value": "",
              "raw": "''"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 59,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 51,
              "end": 54,
              "value": "2",
              "raw": "\"2\""
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 57,
              "end": 59,
              "value": "",
              "raw": "''"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 72,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 71,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 89,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 82,
            "end": 88,
            "object": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 84,
              "end": 87,
              "value": "1",
              "raw": "'1'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 106,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 96,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 99,
            "end": 105,
            "object": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 101,
              "end": 104,
              "value": "2",
              "raw": "'2'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 123,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 113,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 116,
            "end": 122,
            "object": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 118,
              "end": 121,
              "value": "3",
              "raw": "'3'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 130,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 133,
            "end": 137,
            "object": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 135,
              "end": 136,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 153,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 145,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 148,
            "end": 152,
            "object": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 150,
              "end": 151,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 168,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 163,
            "end": 167,
            "object": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 165,
              "end": 166,
              "value": 3,
              "raw": "3"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 192,
                    "end": 198
                  }
                }
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 252,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 269,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 268,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 262,
            "end": 268,
            "object": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 264,
              "end": 267,
              "value": "1",
              "raw": "'1'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 286,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 276,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 279,
            "end": 285,
            "object": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 281,
              "end": 284,
              "value": "2",
              "raw": "'2'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 303,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 293,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 296,
            "end": 302,
            "object": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 298,
              "end": 301,
              "value": "3",
              "raw": "'3'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 318,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 310,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 313,
            "end": 317,
            "object": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 315,
              "end": 316,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 333,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 325,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 328,
            "end": 332,
            "object": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 330,
              "end": 331,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 348,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 343,
            "end": 347,
            "object": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 345,
              "end": 346,
              "value": 3,
              "raw": "3"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 350,
      "end": 417,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 417,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 365,
                          "end": 373,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 367,
                            "end": 373
                          }
                        }
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 419,
      "end": 435,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 434,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 425,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 428,
            "end": 434,
            "object": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 430,
              "end": 433,
              "value": "1",
              "raw": "'1'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 436,
      "end": 452,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 440,
          "end": 451,
          "id": {
            "type": "Identifier",
            "start": 440,
            "end": 442,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 445,
            "end": 451,
            "object": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 447,
              "end": 450,
              "value": "2",
              "raw": "'2'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 453,
      "end": 469,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 457,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 457,
            "end": 459,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 462,
            "end": 468,
            "object": {
              "type": "Identifier",
              "start": 462,
              "end": 463,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 464,
              "end": 467,
              "value": "3",
              "raw": "'3'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 470,
      "end": 484,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 474,
          "end": 483,
          "id": {
            "type": "Identifier",
            "start": 474,
            "end": 476,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 479,
            "end": 483,
            "object": {
              "type": "Identifier",
              "start": 479,
              "end": 480,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 481,
              "end": 482,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 485,
      "end": 499,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 489,
          "end": 498,
          "id": {
            "type": "Identifier",
            "start": 489,
            "end": 491,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 494,
            "end": 498,
            "object": {
              "type": "Identifier",
              "start": 494,
              "end": 495,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 496,
              "end": 497,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 500,
      "end": 514,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 513,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 506,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 509,
            "end": 513,
            "object": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 511,
              "end": 512,
              "value": 3,
              "raw": "3"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 516,
      "end": 567,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 520,
          "end": 567,
          "id": {
            "type": "Identifier",
            "start": 520,
            "end": 546,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 527,
                          "end": 535,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 529,
                            "end": 535
                          }
                        }
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
            }
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
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 558,
                "end": 565,
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "start": 568,
      "end": 585,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 575,
            "decorators": [],
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 578,
            "end": 584,
            "object": {
              "type": "Identifier",
              "start": 578,
              "end": 579,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 580,
              "end": 583,
              "value": "1",
              "raw": "'1'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 603,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 602,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 593,
            "decorators": [],
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 596,
            "end": 602,
            "object": {
              "type": "Identifier",
              "start": 596,
              "end": 597,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 598,
              "end": 601,
              "value": "2",
              "raw": "'2'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 604,
      "end": 620,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 619,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 610,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 613,
            "end": 619,
            "object": {
              "type": "Identifier",
              "start": 613,
              "end": 614,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 615,
              "end": 618,
              "value": "3",
              "raw": "'3'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 621,
      "end": 635,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 634,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 627,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 630,
            "end": 634,
            "object": {
              "type": "Identifier",
              "start": 630,
              "end": 631,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 632,
              "end": 633,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 636,
      "end": 650,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 649,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 642,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 645,
            "end": 649,
            "object": {
              "type": "Identifier",
              "start": 645,
              "end": 646,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 647,
              "end": 648,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 651,
      "end": 665,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 664,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 657,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 660,
            "end": 664,
            "object": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "value": 3,
              "raw": "3"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 667,
      "end": 744,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 723,
            "decorators": [],
            "name": "b2",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 679,
                          "end": 687,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 681,
                            "end": 687
                          }
                        }
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
            }
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
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 735,
                "end": 742,
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "start": 745,
      "end": 763,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 762,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 752,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 755,
            "end": 762,
            "object": {
              "type": "Identifier",
              "start": 755,
              "end": 757,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 758,
              "end": 761,
              "value": "1",
              "raw": "'1'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 764,
      "end": 782,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 768,
          "end": 781,
          "id": {
            "type": "Identifier",
            "start": 768,
            "end": 771,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 774,
            "end": 781,
            "object": {
              "type": "Identifier",
              "start": 774,
              "end": 776,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 777,
              "end": 780,
              "value": "2",
              "raw": "'2'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 783,
      "end": 800,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 787,
          "end": 799,
          "id": {
            "type": "Identifier",
            "start": 787,
            "end": 789,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 792,
            "end": 799,
            "object": {
              "type": "Identifier",
              "start": 792,
              "end": 794,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 795,
              "end": 798,
              "value": "3",
              "raw": "'3'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 801,
      "end": 816,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 805,
          "end": 815,
          "id": {
            "type": "Identifier",
            "start": 805,
            "end": 807,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 810,
            "end": 815,
            "object": {
              "type": "Identifier",
              "start": 810,
              "end": 812,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 813,
              "end": 814,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 817,
      "end": 832,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 831,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 823,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 826,
            "end": 831,
            "object": {
              "type": "Identifier",
              "start": 826,
              "end": 828,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 829,
              "end": 830,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 833,
      "end": 848,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 847,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 839,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 842,
            "end": 847,
            "object": {
              "type": "Identifier",
              "start": 842,
              "end": 844,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 845,
              "end": 846,
              "value": 3,
              "raw": "3"
            },
            "optional": false,
            "computed": true
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
