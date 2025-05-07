__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 396,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSEnumBody",
        "start": 19,
        "end": 40,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 25,
            "end": 29,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "zero",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 38,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 18,
        "decorators": [],
        "name": "numbers",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 97,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 97,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 70,
              "end": 71,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 95,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 85,
              "end": 86,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 63,
        "decorators": [],
        "name": "indexAccess",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 120,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 120,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 120,
                  "decorators": [],
                  "name": "indexAccess",
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 131,
            "end": 138,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 131,
              "end": 135,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 136,
              "end": 137,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 148,
            "end": 155,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 148,
              "end": 152,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 153,
              "end": 154,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 167,
            "end": 185,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 171,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 172,
              "end": 184,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 172,
                "end": 179,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 180,
                "end": 184,
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 196,
            "end": 213,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 196,
              "end": 200,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 201,
              "end": 212,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 208,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 209,
                "end": 212,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 222,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 225,
            "end": 246,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 225,
              "end": 229,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 230,
              "end": 245,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 230,
                "end": 237,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 238,
                "end": 244,
                "raw": "\"zero\"",
                "value": "zero",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 254,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 257,
            "end": 277,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 257,
              "end": 261,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 262,
              "end": 276,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 262,
                "end": 269,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 270,
                "end": 275,
                "raw": "\"one\"",
                "value": "one",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 280,
      "end": 322,
      "body": {
        "type": "TSEnumBody",
        "start": 301,
        "end": 322,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 307,
            "end": 311,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "decorators": [],
              "name": "zero",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 317,
            "end": 320,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 300,
        "decorators": [],
        "name": "numbersNotConst",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 359,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 330,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 333,
            "end": 359,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 333,
              "end": 337,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 338,
              "end": 358,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 338,
                "end": 353,
                "decorators": [],
                "name": "numbersNotConst",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 354,
                "end": 358,
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 396,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 395,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 370,
            "end": 395,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 370,
              "end": 374,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 375,
              "end": 394,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 375,
                "end": 390,
                "decorators": [],
                "name": "numbersNotConst",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 391,
                "end": 394,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
