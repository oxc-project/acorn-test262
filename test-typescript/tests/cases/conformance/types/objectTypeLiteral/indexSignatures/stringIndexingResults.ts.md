__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 426,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 48,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 48,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 14,
            "end": 34,
            "accessibility": null,
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
                    "type": "TSStringKeyword",
                    "start": 18,
                    "end": 24
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 46,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 43,
              "end": 45,
              "raw": "''",
              "value": "",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 58,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 58,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 60,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 69,
            "end": 75,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 71,
              "end": 74,
              "raw": "'y'",
              "value": "y",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 87,
            "end": 93,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 89,
              "end": 92,
              "raw": "'a'",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 104,
            "end": 108,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 106,
              "end": 107,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 112,
      "end": 167,
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 167,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 130,
            "end": 150,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 131,
                "end": 140,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 155,
            "end": 165,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 177,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 177,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 178,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 193,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 184,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 193,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 189,
              "end": 192,
              "raw": "'y'",
              "value": "y",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 201,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 204,
            "end": 210,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 206,
              "end": 209,
              "raw": "'a'",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 218,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 221,
            "end": 225,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 223,
              "end": 224,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 279,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 243,
                        "end": 252,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 244,
                          "end": 252,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 246,
                            "end": 252
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 253,
                      "end": 261,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 255,
                        "end": 261
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 267,
                    "end": 277,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 268,
                      "end": 276,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 270,
                        "end": 276
                      }
                    }
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
      "start": 281,
      "end": 297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 296,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 287,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 290,
            "end": 296,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 292,
              "end": 295,
              "raw": "'y'",
              "value": "y",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 307,
            "end": 313,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 309,
              "end": 312,
              "raw": "'a'",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 321,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 324,
            "end": 328,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 326,
              "end": 327,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 361,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 341,
                        "end": 350,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 342,
                          "end": 350,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 344,
                            "end": 350
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 351,
                      "end": 359,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 353,
                        "end": 359
                      }
                    }
                  }
                ]
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 369,
                  "end": 371,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 382,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 385,
            "end": 391,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 387,
              "end": 390,
              "raw": "'y'",
              "value": "y",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 400,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 403,
            "end": 409,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 405,
              "end": 408,
              "raw": "'a'",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 418,
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 421,
            "end": 425,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 423,
              "end": 424,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
