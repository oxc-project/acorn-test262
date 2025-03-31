__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 486,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 19,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 43,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 33,
              "end": 34,
              "value": 1,
              "raw": "1"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 60,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 48,
              "end": 51,
              "value": 1.1,
              "raw": "1.1"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 53,
                "end": 59
              }
            },
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
      "start": 64,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 72,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
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
      "start": 74,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 80,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 83,
            "end": 87,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 85,
              "end": 86,
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
      "start": 89,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 95,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 98,
            "end": 104,
            "object": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 100,
              "end": 103,
              "value": 1.1,
              "raw": "1.1"
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
      "start": 106,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 112,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 115,
            "end": 121,
            "object": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 117,
              "end": 120,
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
      "start": 123,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 132,
            "end": 140,
            "object": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 134,
              "end": 139,
              "value": "1.1",
              "raw": "'1.1'"
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
      "start": 143,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 155,
        "end": 190,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 161,
            "end": 171,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 161,
              "end": 162,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 188,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 176,
              "end": 179,
              "value": 1.1,
              "raw": "1.1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 187,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 181,
                "end": 187
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
      "start": 192,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 200,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 200,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
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
      "start": 202,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 211,
            "end": 215,
            "object": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 213,
              "end": 214,
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
      "start": 217,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 223,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 226,
            "end": 232,
            "object": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 228,
              "end": 231,
              "value": 1.1,
              "raw": "1.1"
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
      "start": 234,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 240,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 243,
            "end": 249,
            "object": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 245,
              "end": 248,
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
      "start": 251,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 268,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 257,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 260,
            "end": 268,
            "object": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 262,
              "end": 267,
              "value": "1.1",
              "raw": "'1.1'"
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
      "start": 271,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 313,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 313,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 313,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 278,
                "end": 313,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 284,
                    "end": 294,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 284,
                      "end": 285,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 285,
                      "end": 293,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 287,
                        "end": 293
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 299,
                    "end": 311,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 299,
                      "end": 302,
                      "value": 1.1,
                      "raw": "1.1"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 302,
                      "end": 310,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 304,
                        "end": 310
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
      "start": 315,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 328,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 321,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 324,
            "end": 328,
            "object": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 326,
              "end": 327,
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
      "start": 330,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 334,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 336,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 339,
            "end": 345,
            "object": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 341,
              "end": 344,
              "value": 1.1,
              "raw": "1.1"
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
      "start": 347,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 362,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 353,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 356,
            "end": 362,
            "object": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 358,
              "end": 361,
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
      "start": 364,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 370,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 373,
            "end": 381,
            "object": {
              "type": "Identifier",
              "start": 373,
              "end": 374,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 375,
              "end": 380,
              "value": "1.1",
              "raw": "'1.1'"
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
      "start": 384,
      "end": 417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 392,
            "end": 417,
            "properties": [
              {
                "type": "Property",
                "start": 398,
                "end": 402,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 398,
                  "end": 399,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "Literal",
                  "start": 401,
                  "end": 402,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 408,
                "end": 415,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 408,
                  "end": 411,
                  "value": 1.1,
                  "raw": "1.1"
                },
                "value": {
                  "type": "Literal",
                  "start": 413,
                  "end": 415,
                  "value": "",
                  "raw": "\"\""
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
      "start": 419,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 432,
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
            "end": 432,
            "object": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 430,
              "end": 431,
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
      "start": 434,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 449,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 440,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 443,
            "end": 449,
            "object": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 445,
              "end": 448,
              "value": 1.1,
              "raw": "1.1"
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
      "start": 451,
      "end": 467,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 455,
          "end": 466,
          "id": {
            "type": "Identifier",
            "start": 455,
            "end": 457,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 460,
            "end": 466,
            "object": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 462,
              "end": 465,
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
      "start": 468,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 472,
          "end": 485,
          "id": {
            "type": "Identifier",
            "start": 472,
            "end": 474,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 477,
            "end": 485,
            "object": {
              "type": "Identifier",
              "start": 477,
              "end": 478,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 479,
              "end": 484,
              "value": "1.1",
              "raw": "'1.1'"
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
