__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 427,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 48,
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
        "end": 48,
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
                    "type": "TSStringKeyword",
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
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 50,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 58,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 58,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
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
      "start": 60,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 69,
            "end": 75,
            "object": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 71,
              "end": 74,
              "value": "y",
              "raw": "'y'"
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
      "start": 78,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 93,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 87,
            "end": 93,
            "object": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 89,
              "end": 92,
              "value": "a",
              "raw": "'a'"
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
      "start": 95,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 104,
            "end": 108,
            "object": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 106,
              "end": 107,
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
      "type": "TSInterfaceDeclaration",
      "start": 112,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 167,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 130,
            "end": 150,
            "parameters": [
              {
                "type": "Identifier",
                "start": 131,
                "end": 140,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 155,
            "end": 165,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
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
      "start": 169,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 177,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 177,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
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
      "start": 178,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 184,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 193,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 189,
              "end": 192,
              "value": "y",
              "raw": "'y'"
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
      "start": 195,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 201,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 204,
            "end": 210,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 206,
              "end": 209,
              "value": "a",
              "raw": "'a'"
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
      "start": 212,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 225,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 218,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 221,
            "end": 225,
            "object": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 223,
              "end": 224,
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
      "start": 229,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 279,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 236,
                "end": 279,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 242,
                    "end": 262,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 243,
                        "end": 252,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 244,
                          "end": 252,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 246,
                            "end": 252
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 253,
                      "end": 261,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 255,
                        "end": 261
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 267,
                    "end": 277,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 268,
                      "end": 276,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 270,
                        "end": 276
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
      "start": 281,
      "end": 297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 296,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 287,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 290,
            "end": 296,
            "object": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 292,
              "end": 295,
              "value": "y",
              "raw": "'y'"
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
      "start": 298,
      "end": 314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 313,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 307,
            "end": 313,
            "object": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 309,
              "end": 312,
              "value": "a",
              "raw": "'a'"
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
            "name": "r9",
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
      "start": 331,
      "end": 373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 373,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 361,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 336,
              "end": 361,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 338,
                "end": 361,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 340,
                    "end": 359,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 341,
                        "end": 350,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 342,
                          "end": 350,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 344,
                            "end": 350
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 351,
                      "end": 359,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 353,
                        "end": 359
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
            "start": 364,
            "end": 373,
            "properties": [
              {
                "type": "Property",
                "start": 366,
                "end": 371,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 369,
                  "end": 371,
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
      "start": 375,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 382,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 385,
            "end": 391,
            "object": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 387,
              "end": 390,
              "value": "y",
              "raw": "'y'"
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
      "start": 393,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 409,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 400,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 403,
            "end": 409,
            "object": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 405,
              "end": 408,
              "value": "a",
              "raw": "'a'"
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
      "start": 411,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 418,
            "name": "r12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 421,
            "end": 425,
            "object": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 423,
              "end": 424,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
