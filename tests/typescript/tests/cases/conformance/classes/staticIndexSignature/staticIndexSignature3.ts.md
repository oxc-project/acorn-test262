__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 459,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
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
        "end": 94,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 14,
            "end": 50,
            "parameters": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 40,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 32,
                  "end": 40,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 34,
                    "end": 40
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              }
            },
            "readonly": true,
            "static": true,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 55,
            "end": 92,
            "parameters": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 81,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 73,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 75,
                    "end": 81
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 92,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 84,
                "end": 92,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 84,
                    "end": 86,
                    "literal": {
                      "type": "Literal",
                      "start": 84,
                      "end": 86,
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 89,
                    "end": 92,
                    "literal": {
                      "type": "Literal",
                      "start": 89,
                      "end": 92,
                      "value": 233,
                      "raw": "233"
                    }
                  }
                ]
              }
            },
            "readonly": true,
            "static": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 157,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 157,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 120,
            "end": 155,
            "parameters": [
              {
                "type": "Identifier",
                "start": 137,
                "end": 146,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 138,
                  "end": 146,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 140,
                    "end": 146
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 155,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 149,
                "end": 155
              }
            },
            "readonly": true,
            "static": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 258,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 167,
        "decorators": [],
        "name": "ED",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 178,
        "end": 258,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 184,
            "end": 220,
            "parameters": [
              {
                "type": "Identifier",
                "start": 201,
                "end": 210,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 202,
                  "end": 210,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 204,
                    "end": 210
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 220,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 213,
                "end": 220
              }
            },
            "readonly": true,
            "static": true,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 225,
            "end": 255,
            "parameters": [
              {
                "type": "Identifier",
                "start": 242,
                "end": 251,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 243,
                  "end": 251,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 245,
                    "end": 251
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 255,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 254,
                "end": 255,
                "literal": {
                  "type": "Literal",
                  "start": 254,
                  "end": 255,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "readonly": true,
            "static": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 260,
      "end": 319,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 268,
        "decorators": [],
        "name": "DD",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 277,
        "end": 278,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 279,
        "end": 319,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 285,
            "end": 317,
            "parameters": [
              {
                "type": "Identifier",
                "start": 302,
                "end": 311,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 303,
                  "end": 311,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 305,
                    "end": 311
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 317,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 314,
                "end": 317,
                "literal": {
                  "type": "Literal",
                  "start": 314,
                  "end": 317,
                  "value": 421,
                  "raw": "421"
                }
              }
            },
            "readonly": true,
            "static": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 338,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 328,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 331,
            "end": 337,
            "object": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 333,
              "end": 336,
              "value": "f",
              "raw": "\"f\""
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
      "start": 339,
      "end": 356,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 346,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 350,
            "end": 355,
            "object": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 352,
              "end": 354,
              "value": 42,
              "raw": "42"
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
      "start": 357,
      "end": 373,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 373,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 367,
            "end": 373,
            "object": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 369,
              "end": 372,
              "value": "f",
              "raw": "\"f\""
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
      "start": 374,
      "end": 389,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 389,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 381,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 384,
            "end": 389,
            "object": {
              "type": "Identifier",
              "start": 384,
              "end": 385,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 386,
              "end": 388,
              "value": 42,
              "raw": "42"
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
      "start": 390,
      "end": 407,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 407,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 397,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 400,
            "end": 407,
            "object": {
              "type": "Identifier",
              "start": 400,
              "end": 402,
              "decorators": [],
              "name": "ED",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 403,
              "end": 406,
              "value": "f",
              "raw": "\"f\""
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
      "start": 408,
      "end": 424,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 424,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 415,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 418,
            "end": 424,
            "object": {
              "type": "Identifier",
              "start": 418,
              "end": 420,
              "decorators": [],
              "name": "ED",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 421,
              "end": 423,
              "value": 42,
              "raw": "42"
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
      "start": 425,
      "end": 442,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 432,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 435,
            "end": 442,
            "object": {
              "type": "Identifier",
              "start": 435,
              "end": 437,
              "decorators": [],
              "name": "DD",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 438,
              "end": 441,
              "value": "f",
              "raw": "\"f\""
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
      "start": 443,
      "end": 459,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 450,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 453,
            "end": 459,
            "object": {
              "type": "Identifier",
              "start": 453,
              "end": 455,
              "decorators": [],
              "name": "DD",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 456,
              "end": 458,
              "value": 42,
              "raw": "42"
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
