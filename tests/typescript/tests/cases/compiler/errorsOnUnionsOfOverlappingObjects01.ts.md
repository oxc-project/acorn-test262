__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 842,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
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
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 82,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
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
      "start": 84,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 99,
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 100,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 106,
            "end": 139,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 130,
              "decorators": [],
              "name": "totallyUnrelatedProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 132,
                "end": 138
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
      "type": "ExportNamedDeclaration",
      "start": 143,
      "end": 175,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 150,
        "end": 175,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 154,
            "end": 174,
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 158,
              "end": 174,
              "properties": [
                {
                  "type": "Property",
                  "start": 160,
                  "end": 165,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 163,
                    "end": 165,
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
                  "start": 167,
                  "end": 172,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 170,
                    "end": 172,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 177,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 195,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 196,
          "end": 210,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 197,
            "end": 210,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 199,
              "end": 210,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 199,
                  "end": 202,
                  "typeName": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 202,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 205,
                  "end": 210,
                  "typeName": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 210,
                    "decorators": [],
                    "name": "Other",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 211,
        "end": 216,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 213,
          "end": 216
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 224,
      "expression": {
        "type": "CallExpression",
        "start": 219,
        "end": 223,
        "callee": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 244,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 244,
        "callee": {
          "type": "Identifier",
          "start": 225,
          "end": 226,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 227,
            "end": 243,
            "properties": [
              {
                "type": "Property",
                "start": 229,
                "end": 234,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 230,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 232,
                  "end": 234,
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
                "start": 236,
                "end": 241,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 239,
                  "end": 241,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 246,
      "end": 286,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 265,
          "end": 279,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 279,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 268,
              "end": 279,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 268,
                  "end": 271,
                  "typeName": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 271,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 274,
                  "end": 279,
                  "typeName": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 279,
                    "decorators": [],
                    "name": "Other",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 280,
        "end": 285,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 282,
          "end": 285
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 288,
      "end": 293,
      "expression": {
        "type": "CallExpression",
        "start": 288,
        "end": 292,
        "callee": {
          "type": "Identifier",
          "start": 288,
          "end": 289,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 294,
      "end": 313,
      "expression": {
        "type": "CallExpression",
        "start": 294,
        "end": 313,
        "callee": {
          "type": "Identifier",
          "start": 294,
          "end": 295,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 296,
            "end": 312,
            "properties": [
              {
                "type": "Property",
                "start": 298,
                "end": 303,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 301,
                  "end": 303,
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
                "start": 305,
                "end": 310,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 306,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 308,
                  "end": 310,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 315,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 333,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 334,
          "end": 354,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 335,
            "end": 354,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 337,
              "end": 354,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 337,
                  "end": 340,
                  "typeName": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 340,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 343,
                  "end": 346,
                  "typeName": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 346,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 349,
                  "end": 354,
                  "typeName": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 354,
                    "decorators": [],
                    "name": "Other",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 355,
        "end": 360,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 357,
          "end": 360
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 363,
      "end": 368,
      "expression": {
        "type": "CallExpression",
        "start": 363,
        "end": 367,
        "callee": {
          "type": "Identifier",
          "start": 363,
          "end": 364,
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 365,
            "end": 366,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 388,
      "expression": {
        "type": "CallExpression",
        "start": 369,
        "end": 388,
        "callee": {
          "type": "Identifier",
          "start": 369,
          "end": 370,
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 371,
            "end": 387,
            "properties": [
              {
                "type": "Property",
                "start": 373,
                "end": 378,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 374,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 376,
                  "end": 378,
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
                "start": 380,
                "end": 385,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 381,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 383,
                  "end": 385,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 390,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 406,
        "decorators": [],
        "name": "CatDog",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 407,
        "end": 429,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 409,
            "end": 418,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 412,
              "decorators": [],
              "name": "cat",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 412,
              "end": 417,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 414,
                "end": 417
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 419,
            "end": 427,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 419,
              "end": 422,
              "decorators": [],
              "name": "dog",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 427,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 424,
                "end": 427
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
      "start": 430,
      "end": 484,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 450,
        "decorators": [],
        "name": "ManBearPig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 451,
        "end": 484,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 453,
            "end": 462,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 453,
              "end": 456,
              "decorators": [],
              "name": "man",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 456,
              "end": 461,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 458,
                "end": 461
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 463,
            "end": 473,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 463,
              "end": 467,
              "decorators": [],
              "name": "bear",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 467,
              "end": 472,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 469,
                "end": 472
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 474,
            "end": 482,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 474,
              "end": 477,
              "decorators": [],
              "name": "pig",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 477,
              "end": 482,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 479,
                "end": 482
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
      "start": 485,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 503,
        "decorators": [],
        "name": "Platypus",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 504,
        "end": 521,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 506,
            "end": 519,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 506,
              "end": 514,
              "decorators": [],
              "name": "platypus",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 514,
              "end": 519,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 516,
                "end": 519
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
      "start": 523,
      "end": 588,
      "id": {
        "type": "Identifier",
        "start": 528,
        "end": 540,
        "decorators": [],
        "name": "ExoticAnimal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 547,
        "end": 587,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 549,
            "end": 555,
            "typeName": {
              "type": "Identifier",
              "start": 549,
              "end": 555,
              "decorators": [],
              "name": "CatDog",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 562,
            "end": 572,
            "typeName": {
              "type": "Identifier",
              "start": 562,
              "end": 572,
              "decorators": [],
              "name": "ManBearPig",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 579,
            "end": 587,
            "typeName": {
              "type": "Identifier",
              "start": 579,
              "end": 587,
              "decorators": [],
              "name": "Platypus",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 590,
      "end": 644,
      "id": {
        "type": "Identifier",
        "start": 607,
        "end": 615,
        "decorators": [],
        "name": "addToZoo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 616,
          "end": 636,
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 622,
            "end": 636,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 624,
              "end": 636,
              "typeName": {
                "type": "Identifier",
                "start": 624,
                "end": 636,
                "decorators": [],
                "name": "ExoticAnimal",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 637,
        "end": 643,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 639,
          "end": 643
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 646,
      "end": 684,
      "expression": {
        "type": "CallExpression",
        "start": 646,
        "end": 683,
        "callee": {
          "type": "Identifier",
          "start": 646,
          "end": 654,
          "decorators": [],
          "name": "addToZoo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 655,
            "end": 682,
            "properties": [
              {
                "type": "Property",
                "start": 657,
                "end": 680,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 660,
                  "decorators": [],
                  "name": "dog",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 662,
                  "end": 680,
                  "value": "Barky McBarkface",
                  "raw": "\"Barky McBarkface\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 685,
      "end": 728,
      "expression": {
        "type": "CallExpression",
        "start": 685,
        "end": 727,
        "callee": {
          "type": "Identifier",
          "start": 685,
          "end": 693,
          "decorators": [],
          "name": "addToZoo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 694,
            "end": 726,
            "properties": [
              {
                "type": "Property",
                "start": 696,
                "end": 708,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 699,
                  "decorators": [],
                  "name": "man",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 701,
                  "end": 708,
                  "value": "Manny",
                  "raw": "\"Manny\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 710,
                "end": 724,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 714,
                  "decorators": [],
                  "name": "bear",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 716,
                  "end": 724,
                  "value": "Coffee",
                  "raw": "\"Coffee\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 730,
      "end": 779,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 736,
          "end": 778,
          "id": {
            "type": "Identifier",
            "start": 736,
            "end": 743,
            "decorators": [],
            "name": "manBeer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 746,
            "end": 778,
            "properties": [
              {
                "type": "Property",
                "start": 748,
                "end": 760,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 751,
                  "decorators": [],
                  "name": "man",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 753,
                  "end": 760,
                  "value": "Manny",
                  "raw": "\"Manny\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 762,
                "end": 776,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 766,
                  "decorators": [],
                  "name": "beer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 768,
                  "end": 776,
                  "value": "Coffee",
                  "raw": "\"Coffee\""
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
      "type": "ExpressionStatement",
      "start": 780,
      "end": 823,
      "expression": {
        "type": "CallExpression",
        "start": 780,
        "end": 822,
        "callee": {
          "type": "Identifier",
          "start": 780,
          "end": 788,
          "decorators": [],
          "name": "addToZoo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 789,
            "end": 821,
            "properties": [
              {
                "type": "Property",
                "start": 791,
                "end": 803,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 794,
                  "decorators": [],
                  "name": "man",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 796,
                  "end": 803,
                  "value": "Manny",
                  "raw": "\"Manny\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 805,
                "end": 819,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 809,
                  "decorators": [],
                  "name": "beer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 811,
                  "end": 819,
                  "value": "Coffee",
                  "raw": "\"Coffee\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 824,
      "end": 842,
      "expression": {
        "type": "CallExpression",
        "start": 824,
        "end": 841,
        "callee": {
          "type": "Identifier",
          "start": 824,
          "end": 832,
          "decorators": [],
          "name": "addToZoo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 833,
            "end": 840,
            "decorators": [],
            "name": "manBeer",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
