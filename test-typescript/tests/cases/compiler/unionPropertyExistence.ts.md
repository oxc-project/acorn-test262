__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 487,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 74,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 23,
              "name": "inAll",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 52,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 43,
              "name": "notInB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 72,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "name": "notInC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
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
      "type": "TSInterfaceDeclaration",
      "start": 76,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 152,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 109,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 99,
              "name": "inAll",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 108,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 101,
                "end": 108
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 114,
            "end": 130,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 121,
              "name": "onlyInB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 129,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 123,
                "end": 129
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 150,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 141,
              "name": "notInC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 154,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 165,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 166,
        "end": 208,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 172,
            "end": 186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 177,
              "name": "inAll",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 191,
            "end": 206,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 197,
              "name": "notInB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
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
      "type": "TSTypeAliasDeclaration",
      "start": 210,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 217,
        "name": "AB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 220,
        "end": 225,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 220,
            "end": 221,
            "typeName": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 224,
            "end": 225,
            "typeName": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 227,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 235,
        "name": "ABC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 238,
        "end": 244,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 238,
            "end": 239,
            "typeName": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 242,
            "end": 244,
            "typeName": {
              "type": "Identifier",
              "start": 242,
              "end": 244,
              "name": "AB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 257,
            "name": "ab",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 253,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 255,
                "end": 257,
                "typeName": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 257,
                  "name": "AB",
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
      "start": 259,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 271,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 271,
            "name": "abc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 271,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 271,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 271,
                  "name": "ABC",
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
      "start": 274,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 304,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 304,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 291,
                "end": 304,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 291,
                    "end": 296,
                    "literal": {
                      "type": "Literal",
                      "start": 291,
                      "end": 296,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 299,
                    "end": 304,
                    "literal": {
                      "type": "Literal",
                      "start": 299,
                      "end": 304,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 335,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 335,
            "name": "bFoo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 335,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 326,
                "end": 335,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 326,
                    "end": 327,
                    "typeName": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 330,
                    "end": 335,
                    "literal": {
                      "type": "Literal",
                      "start": 330,
                      "end": 335,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 338,
      "end": 347,
      "expression": {
        "type": "CallExpression",
        "start": 338,
        "end": 346,
        "callee": {
          "type": "MemberExpression",
          "start": 338,
          "end": 344,
          "object": {
            "type": "Identifier",
            "start": 338,
            "end": 339,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 340,
            "end": 344,
            "name": "nope",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 348,
      "end": 361,
      "expression": {
        "type": "MemberExpression",
        "start": 348,
        "end": 360,
        "object": {
          "type": "Identifier",
          "start": 348,
          "end": 352,
          "name": "bFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 353,
          "end": 360,
          "name": "onlyInB",
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
      "type": "ExpressionStatement",
      "start": 362,
      "end": 371,
      "expression": {
        "type": "MemberExpression",
        "start": 362,
        "end": 370,
        "object": {
          "type": "Identifier",
          "start": 362,
          "end": 363,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 364,
          "end": 370,
          "name": "length",
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
      "type": "ExpressionStatement",
      "start": 378,
      "end": 390,
      "expression": {
        "type": "MemberExpression",
        "start": 378,
        "end": 389,
        "object": {
          "type": "Identifier",
          "start": 378,
          "end": 382,
          "name": "bFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 383,
          "end": 389,
          "name": "length",
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
      "type": "ExpressionStatement",
      "start": 392,
      "end": 403,
      "expression": {
        "type": "MemberExpression",
        "start": 392,
        "end": 402,
        "object": {
          "type": "Identifier",
          "start": 392,
          "end": 394,
          "name": "ab",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 395,
          "end": 402,
          "name": "onlyInB",
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
      "type": "ExpressionStatement",
      "start": 405,
      "end": 415,
      "expression": {
        "type": "MemberExpression",
        "start": 405,
        "end": 414,
        "object": {
          "type": "Identifier",
          "start": 405,
          "end": 407,
          "name": "ab",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 408,
          "end": 414,
          "name": "notInC",
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
      "type": "ExpressionStatement",
      "start": 422,
      "end": 433,
      "expression": {
        "type": "MemberExpression",
        "start": 422,
        "end": 432,
        "object": {
          "type": "Identifier",
          "start": 422,
          "end": 425,
          "name": "abc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 426,
          "end": 432,
          "name": "notInC",
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
      "type": "ExpressionStatement",
      "start": 434,
      "end": 444,
      "expression": {
        "type": "MemberExpression",
        "start": 434,
        "end": 443,
        "object": {
          "type": "Identifier",
          "start": 434,
          "end": 436,
          "name": "ab",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 437,
          "end": 443,
          "name": "notInB",
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
      "type": "ExpressionStatement",
      "start": 445,
      "end": 456,
      "expression": {
        "type": "MemberExpression",
        "start": 445,
        "end": 455,
        "object": {
          "type": "Identifier",
          "start": 445,
          "end": 448,
          "name": "abc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 449,
          "end": 455,
          "name": "notInB",
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
      "type": "ExpressionStatement",
      "start": 458,
      "end": 468,
      "expression": {
        "type": "MemberExpression",
        "start": 458,
        "end": 467,
        "object": {
          "type": "Identifier",
          "start": 458,
          "end": 461,
          "name": "abc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 462,
          "end": 467,
          "name": "inAll",
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
      "type": "ExpressionStatement",
      "start": 475,
      "end": 486,
      "expression": {
        "type": "MemberExpression",
        "start": 475,
        "end": 485,
        "object": {
          "type": "Identifier",
          "start": 475,
          "end": 478,
          "name": "abc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 479,
          "end": 485,
          "name": "inNone",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
