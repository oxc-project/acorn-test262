__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 439,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "W",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 35,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 33,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 33,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 33,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 37,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "name": "W",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 51,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 54,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 57,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "name": "c",
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
        "start": 44,
        "end": 62,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 51,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 54,
            "end": 55,
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 57,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "c",
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
      "type": "TSInterfaceDeclaration",
      "start": 65,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 82,
        "name": "WStatic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 120,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 90,
            "end": 95,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "name": "W",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 106,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 105,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "name": "W",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 112,
            "end": 117,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 116,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "name": "W",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 124,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 138,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 138,
                  "name": "WStatic",
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
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "name": "W",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 144,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 163,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 159,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 151,
                "end": 159,
                "exprName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "name": "W",
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
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "name": "W",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 165,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 178,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 178,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 172,
                "end": 178
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "name": "W",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 193,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 206,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 200,
                "end": 206
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 209,
            "end": 212,
            "object": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "W",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "name": "a",
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
      "start": 214,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 229,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 221,
                "end": 229,
                "exprName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "name": "W",
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
            "type": "MemberExpression",
            "start": 232,
            "end": 235,
            "object": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "W",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "name": "a",
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
      "start": 246,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 263,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 263,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 253,
                "end": 263,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 260,
                  "end": 263,
                  "left": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 261,
                    "name": "W",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 266,
            "end": 269,
            "object": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "name": "W",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "a",
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
      "start": 271,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 290,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 286,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 286,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 278,
                "end": 286,
                "exprName": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 286,
                  "name": "W",
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
            "type": "Literal",
            "start": 289,
            "end": 290,
            "value": 3,
            "raw": "3"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 318,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 308,
                "end": 318,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 315,
                  "end": 318,
                  "left": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 316,
                    "name": "W",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 318,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 321,
            "end": 322,
            "value": 4,
            "raw": "4"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 344,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 338,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 338,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 331,
                "end": 338,
                "typeName": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 338,
                  "name": "WStatic",
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
            "type": "MemberExpression",
            "start": 341,
            "end": 344,
            "object": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "name": "W",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "name": "a",
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
      "start": 355,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 373,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 369,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 369,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 362,
                "end": 369,
                "typeName": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 369,
                  "name": "WStatic",
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
            "type": "Literal",
            "start": 372,
            "end": 373,
            "value": 5,
            "raw": "5"
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
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 396,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 392,
            "name": "h",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 392,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 391,
                "end": 392,
                "typeName": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
                  "name": "W",
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
            "type": "Literal",
            "start": 395,
            "end": 396,
            "value": 3,
            "raw": "3"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 398,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 412,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 406,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 406,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 405,
                "end": 406,
                "typeName": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "name": "W",
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
            "type": "MemberExpression",
            "start": 409,
            "end": 412,
            "object": {
              "type": "Identifier",
              "start": 409,
              "end": 410,
              "name": "W",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "name": "a",
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
      "type": "ExpressionStatement",
      "start": 414,
      "end": 422,
      "expression": {
        "type": "AssignmentExpression",
        "start": 414,
        "end": 421,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 414,
          "end": 415,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 418,
          "end": 421,
          "object": {
            "type": "Identifier",
            "start": 418,
            "end": 419,
            "name": "W",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 420,
            "end": 421,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 427,
      "expression": {
        "type": "MemberExpression",
        "start": 423,
        "end": 426,
        "object": {
          "type": "Identifier",
          "start": 423,
          "end": 424,
          "name": "W",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 425,
          "end": 426,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 428,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 432,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 438,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 438,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 435,
                "end": 438,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 435,
                  "end": 438,
                  "left": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 436,
                    "name": "W",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 438,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
