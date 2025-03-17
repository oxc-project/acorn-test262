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
      "end": 31,
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
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
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
      "start": 33,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 45,
        "end": 72,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 51,
            "end": 70,
            "parameters": [
              {
                "type": "Identifier",
                "start": 52,
                "end": 61,
                "name": "k",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 74,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 129,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 103,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 95,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 108,
            "end": 127,
            "parameters": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 118,
                "name": "k",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 118,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 112,
                    "end": 118
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 127,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 149,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 149,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "name": "A",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 169,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 169,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "name": "B",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 189,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 189,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 221,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 221,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 208,
                "end": 221,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 208,
                    "end": 209,
                    "typeName": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 212,
                    "end": 221
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
      "start": 243,
      "end": 249,
      "expression": {
        "type": "MemberExpression",
        "start": 243,
        "end": 248,
        "object": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 245,
          "end": 248,
          "name": "foo",
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
      "start": 250,
      "end": 258,
      "expression": {
        "type": "MemberExpression",
        "start": 250,
        "end": 258,
        "object": {
          "type": "Identifier",
          "start": 250,
          "end": 251,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 252,
          "end": 257,
          "value": "foo",
          "raw": "\"foo\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 292,
      "expression": {
        "type": "MemberExpression",
        "start": 286,
        "end": 291,
        "object": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 288,
          "end": 291,
          "name": "foo",
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
      "start": 293,
      "end": 302,
      "expression": {
        "type": "MemberExpression",
        "start": 293,
        "end": 301,
        "object": {
          "type": "Identifier",
          "start": 293,
          "end": 294,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 295,
          "end": 300,
          "value": "foo",
          "raw": "\"foo\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 329,
      "expression": {
        "type": "MemberExpression",
        "start": 323,
        "end": 328,
        "object": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 325,
          "end": 328,
          "name": "foo",
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
      "start": 330,
      "end": 338,
      "expression": {
        "type": "MemberExpression",
        "start": 330,
        "end": 338,
        "object": {
          "type": "Identifier",
          "start": 330,
          "end": 331,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 332,
          "end": 337,
          "value": "foo",
          "raw": "\"foo\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 366,
      "end": 372,
      "expression": {
        "type": "MemberExpression",
        "start": 366,
        "end": 371,
        "object": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 368,
          "end": 371,
          "name": "bar",
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
      "start": 373,
      "end": 382,
      "expression": {
        "type": "MemberExpression",
        "start": 373,
        "end": 381,
        "object": {
          "type": "Identifier",
          "start": 373,
          "end": 374,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 375,
          "end": 380,
          "value": "bar",
          "raw": "\"bar\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 419,
      "expression": {
        "type": "ChainExpression",
        "start": 412,
        "end": 418,
        "expression": {
          "type": "MemberExpression",
          "start": 412,
          "end": 418,
          "object": {
            "type": "Identifier",
            "start": 412,
            "end": 413,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 415,
            "end": 418,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 420,
      "end": 430,
      "expression": {
        "type": "ChainExpression",
        "start": 420,
        "end": 430,
        "expression": {
          "type": "MemberExpression",
          "start": 420,
          "end": 430,
          "object": {
            "type": "Identifier",
            "start": 420,
            "end": 421,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 424,
            "end": 429,
            "value": "foo",
            "raw": "\"foo\""
          },
          "computed": true,
          "optional": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 474,
      "expression": {
        "type": "ChainExpression",
        "start": 467,
        "end": 473,
        "expression": {
          "type": "MemberExpression",
          "start": 467,
          "end": 473,
          "object": {
            "type": "Identifier",
            "start": 467,
            "end": 468,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 470,
            "end": 473,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 475,
      "end": 486,
      "expression": {
        "type": "ChainExpression",
        "start": 475,
        "end": 485,
        "expression": {
          "type": "MemberExpression",
          "start": 475,
          "end": 485,
          "object": {
            "type": "Identifier",
            "start": 475,
            "end": 476,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 479,
            "end": 484,
            "value": "bar",
            "raw": "\"bar\""
          },
          "computed": true,
          "optional": true
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
