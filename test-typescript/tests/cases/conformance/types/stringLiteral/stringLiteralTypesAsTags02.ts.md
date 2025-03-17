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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Kind",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "A",
              "raw": "\"A\""
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
              "value": "B",
              "raw": "\"B\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "name": "Entity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 50,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
                  "name": "Kind",
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
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 81,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "name": "Entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 121,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 98,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "A",
                  "raw": "\"A\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 119,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
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
      "start": 123,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 143,
          "end": 149,
          "expression": {
            "type": "Identifier",
            "start": 143,
            "end": 149,
            "name": "Entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 156,
            "end": 166,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 160,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "B",
                  "raw": "\"B\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 181,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 180,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 174,
                "end": 180
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
      "type": "TSDeclareFunction",
      "start": 185,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 201,
        "name": "hasKind",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 202,
          "end": 216,
          "name": "entity",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 216,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 210,
              "end": 216,
              "typeName": {
                "type": "Identifier",
                "start": 210,
                "end": 216,
                "name": "Entity",
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
        {
          "type": "Identifier",
          "start": 218,
          "end": 227,
          "name": "kind",
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
                "value": "A",
                "raw": "\"A\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 228,
        "end": 241,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 230,
          "end": 241,
          "parameterName": {
            "type": "Identifier",
            "start": 230,
            "end": 236,
            "name": "entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 241,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 240,
              "end": 241,
              "typeName": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 243,
      "end": 300,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 259,
        "name": "hasKind",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 260,
          "end": 274,
          "name": "entity",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 274,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 268,
              "end": 274,
              "typeName": {
                "type": "Identifier",
                "start": 268,
                "end": 274,
                "name": "Entity",
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
        {
          "type": "Identifier",
          "start": 276,
          "end": 285,
          "name": "kind",
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
                "value": "B",
                "raw": "\"B\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 286,
        "end": 299,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 288,
          "end": 299,
          "parameterName": {
            "type": "Identifier",
            "start": 288,
            "end": 294,
            "name": "entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 298,
            "end": 299,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 299,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 301,
      "end": 401,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 317,
        "name": "hasKind",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 318,
          "end": 332,
          "name": "entity",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 324,
            "end": 332,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 326,
              "end": 332,
              "typeName": {
                "type": "Identifier",
                "start": 326,
                "end": 332,
                "name": "Entity",
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
        {
          "type": "Identifier",
          "start": 334,
          "end": 344,
          "name": "kind",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 338,
            "end": 344,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 340,
              "end": 344,
              "typeName": {
                "type": "Identifier",
                "start": 340,
                "end": 344,
                "name": "Kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "MemberExpression",
                "start": 378,
                "end": 389,
                "object": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 384,
                  "name": "entity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 389,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 394,
                "end": 398,
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 345,
        "end": 364,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 347,
          "end": 364,
          "parameterName": {
            "type": "Identifier",
            "start": 347,
            "end": 353,
            "name": "entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 362,
                  "end": 363,
                  "typeName": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 411,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 411,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 410,
                "end": 411,
                "typeName": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
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
          "init": {
            "type": "ObjectExpression",
            "start": 414,
            "end": 444,
            "properties": [
              {
                "type": "Property",
                "start": 420,
                "end": 429,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 424,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 426,
                  "end": 429,
                  "value": "A",
                  "raw": "\"A\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 435,
                "end": 441,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 436,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 438,
                  "end": 441,
                  "value": 100,
                  "raw": "100"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 446,
      "end": 509,
      "test": {
        "type": "CallExpression",
        "start": 450,
        "end": 465,
        "callee": {
          "type": "Identifier",
          "start": 450,
          "end": 457,
          "name": "hasKind",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 458,
            "end": 459,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 461,
            "end": 464,
            "value": "A",
            "raw": "\"A\""
          }
        ],
        "optional": false,
        "typeArguments": null
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
                "id": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 478,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 481,
                  "end": 482,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 502,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 506,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 511,
      "end": 575,
      "test": {
        "type": "UnaryExpression",
        "start": 515,
        "end": 531,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 516,
          "end": 531,
          "callee": {
            "type": "Identifier",
            "start": 516,
            "end": 523,
            "name": "hasKind",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 524,
              "end": 525,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Literal",
              "start": 527,
              "end": 530,
              "value": "B",
              "raw": "\"B\""
            }
          ],
          "optional": false,
          "typeArguments": null
        }
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
                "id": {
                  "type": "Identifier",
                  "start": 543,
                  "end": 544,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 548,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
