__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 821,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 63,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 19,
            "end": 26,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 25,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 25,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 31,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 40,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 42,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 44,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 61,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 52,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 54,
                "end": 60
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
      "start": 64,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 127,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 83,
            "end": 90,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 89,
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 95,
            "end": 109,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 104,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 108,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 108,
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 114,
            "end": 125,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 116,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 124,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 118,
                "end": 124
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
      "start": 128,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 140,
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 149,
          "end": 151,
          "expression": {
            "type": "Identifier",
            "start": 149,
            "end": 151,
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 152,
        "end": 190,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 158,
            "end": 172,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 167,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 171,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
                  "decorators": [],
                  "name": "D1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 177,
            "end": 188,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 179,
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 187,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 181,
                "end": 187
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
      "start": 191,
      "end": 207,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 206,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 224,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 223,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 223,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 217,
                "end": 223
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 255,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 254,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 254,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 254,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 239,
                "end": 254,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 239,
                    "end": 245
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 248,
                    "end": 254
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 271,
        "decorators": [],
        "name": "isC1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 272,
          "end": 278,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 273,
            "end": 278,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 275,
              "end": 278
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 279,
        "end": 288,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 281,
          "end": 288,
          "parameterName": {
            "type": "Identifier",
            "start": 281,
            "end": 282,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 286,
            "end": 288,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 286,
              "end": 288,
              "typeName": {
                "type": "Identifier",
                "start": 286,
                "end": 288,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 289,
        "end": 309,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 295,
            "end": 307,
            "argument": {
              "type": "Literal",
              "start": 302,
              "end": 306,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 311,
      "end": 362,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 324,
        "decorators": [],
        "name": "isC2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 325,
          "end": 331,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 326,
            "end": 331,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 328,
              "end": 331
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 332,
        "end": 341,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 334,
          "end": 341,
          "parameterName": {
            "type": "Identifier",
            "start": 334,
            "end": 335,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 339,
            "end": 341,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 339,
              "end": 341,
              "typeName": {
                "type": "Identifier",
                "start": 339,
                "end": 341,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 342,
        "end": 362,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 348,
            "end": 360,
            "argument": {
              "type": "Literal",
              "start": 355,
              "end": 359,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 364,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 377,
        "decorators": [],
        "name": "isD1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 378,
          "end": 384,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 379,
            "end": 384,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 381,
              "end": 384
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 385,
        "end": 394,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 387,
          "end": 394,
          "parameterName": {
            "type": "Identifier",
            "start": 387,
            "end": 388,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 392,
            "end": 394,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 392,
              "end": 394,
              "typeName": {
                "type": "Identifier",
                "start": 392,
                "end": 394,
                "decorators": [],
                "name": "D1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 395,
        "end": 415,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 401,
            "end": 413,
            "argument": {
              "type": "Literal",
              "start": 408,
              "end": 412,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 428,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 427,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 427,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 427,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 425,
                "end": 427,
                "typeName": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 427,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 440,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 439,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 439,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 439,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 437,
                "end": 439,
                "typeName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 439,
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 441,
      "end": 452,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 451,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 451,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 447,
              "end": 451,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 449,
                "end": 451,
                "typeName": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 451,
                  "decorators": [],
                  "name": "D1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 453,
      "end": 473,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 457,
          "end": 472,
          "id": {
            "type": "Identifier",
            "start": 457,
            "end": 472,
            "decorators": [],
            "name": "c1Orc2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 463,
              "end": 472,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 465,
                "end": 472,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 465,
                    "end": 467,
                    "typeName": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 467,
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 470,
                    "end": 472,
                    "typeName": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 472,
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 474,
      "end": 506,
      "expression": {
        "type": "AssignmentExpression",
        "start": 474,
        "end": 505,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 474,
          "end": 477,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 480,
          "end": 505,
          "left": {
            "type": "CallExpression",
            "start": 480,
            "end": 492,
            "callee": {
              "type": "Identifier",
              "start": 480,
              "end": 484,
              "decorators": [],
              "name": "isC1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 485,
                "end": 491,
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 496,
            "end": 505,
            "object": {
              "type": "Identifier",
              "start": 496,
              "end": 502,
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 503,
              "end": 505,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 545,
      "expression": {
        "type": "AssignmentExpression",
        "start": 513,
        "end": 544,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 513,
          "end": 516,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 519,
          "end": 544,
          "left": {
            "type": "CallExpression",
            "start": 519,
            "end": 531,
            "callee": {
              "type": "Identifier",
              "start": 519,
              "end": 523,
              "decorators": [],
              "name": "isC2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 524,
                "end": 530,
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 535,
            "end": 544,
            "object": {
              "type": "Identifier",
              "start": 535,
              "end": 541,
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 542,
              "end": 544,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 552,
      "end": 584,
      "expression": {
        "type": "AssignmentExpression",
        "start": 552,
        "end": 583,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 552,
          "end": 555,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 558,
          "end": 583,
          "left": {
            "type": "CallExpression",
            "start": 558,
            "end": 570,
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 562,
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 563,
                "end": 569,
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 574,
            "end": 583,
            "object": {
              "type": "Identifier",
              "start": 574,
              "end": 580,
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 581,
              "end": 583,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 623,
      "expression": {
        "type": "AssignmentExpression",
        "start": 591,
        "end": 622,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 591,
          "end": 594,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 597,
          "end": 622,
          "left": {
            "type": "CallExpression",
            "start": 597,
            "end": 609,
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 601,
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 602,
                "end": 608,
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 613,
            "end": 622,
            "object": {
              "type": "Identifier",
              "start": 613,
              "end": 619,
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 620,
              "end": 622,
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 631,
      "end": 651,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 650,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 650,
            "decorators": [],
            "name": "c2Ord1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 641,
              "end": 650,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 643,
                "end": 650,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 643,
                    "end": 645,
                    "typeName": {
                      "type": "Identifier",
                      "start": 643,
                      "end": 645,
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 648,
                    "end": 650,
                    "typeName": {
                      "type": "Identifier",
                      "start": 648,
                      "end": 650,
                      "decorators": [],
                      "name": "D1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 652,
      "end": 684,
      "expression": {
        "type": "AssignmentExpression",
        "start": 652,
        "end": 683,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 652,
          "end": 655,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 658,
          "end": 683,
          "left": {
            "type": "CallExpression",
            "start": 658,
            "end": 670,
            "callee": {
              "type": "Identifier",
              "start": 658,
              "end": 662,
              "decorators": [],
              "name": "isC2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 663,
                "end": 669,
                "decorators": [],
                "name": "c2Ord1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 674,
            "end": 683,
            "object": {
              "type": "Identifier",
              "start": 674,
              "end": 680,
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 681,
              "end": 683,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 691,
      "end": 723,
      "expression": {
        "type": "AssignmentExpression",
        "start": 691,
        "end": 722,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 691,
          "end": 694,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 697,
          "end": 722,
          "left": {
            "type": "CallExpression",
            "start": 697,
            "end": 709,
            "callee": {
              "type": "Identifier",
              "start": 697,
              "end": 701,
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 702,
                "end": 708,
                "decorators": [],
                "name": "c2Ord1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 713,
            "end": 722,
            "object": {
              "type": "Identifier",
              "start": 713,
              "end": 719,
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 720,
              "end": 722,
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 730,
      "end": 762,
      "expression": {
        "type": "AssignmentExpression",
        "start": 730,
        "end": 761,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 730,
          "end": 733,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 736,
          "end": 761,
          "left": {
            "type": "CallExpression",
            "start": 736,
            "end": 748,
            "callee": {
              "type": "Identifier",
              "start": 736,
              "end": 740,
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 741,
                "end": 747,
                "decorators": [],
                "name": "c2Ord1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 752,
            "end": 761,
            "object": {
              "type": "Identifier",
              "start": 752,
              "end": 758,
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 759,
              "end": 761,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 769,
      "end": 810,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 809,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 784,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 775,
              "end": 784,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 777,
                "end": 784,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 777,
                    "end": 779,
                    "typeName": {
                      "type": "Identifier",
                      "start": 777,
                      "end": 779,
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 782,
                    "end": 784,
                    "typeName": {
                      "type": "Identifier",
                      "start": 782,
                      "end": 784,
                      "decorators": [],
                      "name": "D1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 787,
            "end": 809,
            "left": {
              "type": "CallExpression",
              "start": 787,
              "end": 799,
              "callee": {
                "type": "Identifier",
                "start": 787,
                "end": 791,
                "decorators": [],
                "name": "isC1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 792,
                  "end": 798,
                  "decorators": [],
                  "name": "c2Ord1",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 803,
              "end": 809,
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null
            }
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
