__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 575,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 21,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 12,
        "end": 21,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 12,
            "end": 15,
            "literal": {
              "type": "Literal",
              "start": 12,
              "end": 15,
              "raw": "\"A\"",
              "value": "A",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 18,
            "end": 21,
            "literal": {
              "type": "Literal",
              "start": 18,
              "end": 21,
              "raw": "\"B\"",
              "value": "B",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 57,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 50,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
                  "decorators": [],
                  "name": "Kind",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 121,
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 121,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 104,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 98,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 103,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 100,
                "end": 103,
                "literal": {
                  "type": "Literal",
                  "start": 100,
                  "end": 103,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 119,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 81,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 123,
      "end": 183,
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 156,
            "end": 166,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 160,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 165,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 162,
                "end": 165,
                "literal": {
                  "type": "Literal",
                  "start": 162,
                  "end": 165,
                  "raw": "\"B\"",
                  "value": "B",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 181,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 180,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 174,
                "end": 180
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 143,
          "end": 149,
          "expression": {
            "type": "Identifier",
            "start": 143,
            "end": 149,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 185,
      "end": 242,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 201,
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 202,
          "end": 216,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 216,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 210,
              "end": 216,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 210,
                "end": 216,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 218,
          "end": 227,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 222,
            "end": 227,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 224,
              "end": 227,
              "literal": {
                "type": "Literal",
                "start": 224,
                "end": 227,
                "raw": "\"A\"",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 228,
        "end": 241,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 230,
          "end": 241,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 230,
            "end": 236,
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 241,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 240,
              "end": 241,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 243,
      "end": 300,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 259,
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 260,
          "end": 274,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 274,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 268,
              "end": 274,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 268,
                "end": 274,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 276,
          "end": 285,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 280,
            "end": 285,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 282,
              "end": 285,
              "literal": {
                "type": "Literal",
                "start": 282,
                "end": 285,
                "raw": "\"B\"",
                "value": "B",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 286,
        "end": 299,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 288,
          "end": 299,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 288,
            "end": 294,
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 298,
            "end": 299,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 299,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 301,
      "end": 401,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 365,
        "end": 401,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 371,
            "end": 399,
            "argument": {
              "type": "BinaryExpression",
              "start": 378,
              "end": 398,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 378,
                "end": 389,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 384,
                  "decorators": [],
                  "name": "entity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 389,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 394,
                "end": 398,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 317,
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 318,
          "end": 332,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 324,
            "end": 332,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 326,
              "end": 332,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 326,
                "end": 332,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 334,
          "end": 344,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 338,
            "end": 344,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 340,
              "end": 344,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 340,
                "end": 344,
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 345,
        "end": 364,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 347,
          "end": 364,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 347,
            "end": 353,
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 358,
            "end": 363,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 358,
              "end": 363,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 358,
                  "end": 359,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 362,
                  "end": 363,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 444,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 444,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 411,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 411,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 410,
                "end": 411,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 414,
            "end": 444,
            "properties": [
              {
                "type": "Property",
                "start": 420,
                "end": 429,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 424,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 426,
                  "end": 429,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 435,
                "end": 441,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 436,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 438,
                  "end": 441,
                  "raw": "100",
                  "value": 100,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 446,
      "end": 509,
      "alternate": {
        "type": "BlockStatement",
        "start": 491,
        "end": 509,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 497,
            "end": 507,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 501,
                "end": 506,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 502,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 506,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 467,
        "end": 485,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 473,
            "end": 483,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 477,
                "end": 482,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 478,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 481,
                  "end": 482,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 450,
        "end": 465,
        "arguments": [
          {
            "type": "Identifier",
            "start": 458,
            "end": 459,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 461,
            "end": 464,
            "raw": "\"A\"",
            "value": "A",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 450,
          "end": 457,
          "decorators": [],
          "name": "hasKind",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 511,
      "end": 575,
      "alternate": {
        "type": "BlockStatement",
        "start": 557,
        "end": 575,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 563,
            "end": 573,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 567,
                "end": 572,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 533,
        "end": 551,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 539,
            "end": 549,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 543,
                "end": 548,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 543,
                  "end": 544,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 548,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 515,
        "end": 531,
        "argument": {
          "type": "CallExpression",
          "start": 516,
          "end": 531,
          "arguments": [
            {
              "type": "Identifier",
              "start": 524,
              "end": 525,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Literal",
              "start": 527,
              "end": 530,
              "raw": "\"B\"",
              "value": "B",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 516,
            "end": 523,
            "decorators": [],
            "name": "hasKind",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "!",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
