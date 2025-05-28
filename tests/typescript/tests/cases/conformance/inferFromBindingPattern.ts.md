__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 993,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 30,
              "end": 36
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 39,
        "end": 42,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 41,
          "end": 42,
          "typeName": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 44,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 63,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 80,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 74,
              "end": 80
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 83,
        "end": 88,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 85,
          "end": 88,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 86,
              "end": 87,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 109,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 126,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 139,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 131,
          "end": 139,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 133,
              "end": 137,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 134,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 136,
                  "end": 137,
                  "typeName": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 156,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 148,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 151,
            "end": 155,
            "callee": {
              "type": "Identifier",
              "start": 151,
              "end": 153,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 191,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 190,
          "id": {
            "type": "ArrayPattern",
            "start": 179,
            "end": 183,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 180,
                "end": 182,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 186,
            "end": 190,
            "callee": {
              "type": "Identifier",
              "start": 186,
              "end": 188,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 229,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 228,
          "id": {
            "type": "ObjectPattern",
            "start": 212,
            "end": 221,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 214,
                "end": 219,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 219,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 224,
            "end": 228,
            "callee": {
              "type": "Identifier",
              "start": 224,
              "end": 226,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 264,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 276,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 276,
        "end": 288,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 277,
            "end": 287,
            "name": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 281,
              "end": 287
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 290,
        "end": 295,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 292,
          "end": 295,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 293,
              "end": 294,
              "typeName": {
                "type": "Identifier",
                "start": 293,
                "end": 294,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 296,
        "end": 319,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 299,
            "end": 317,
            "argument": {
              "type": "ArrayExpression",
              "start": 306,
              "end": 317,
              "elements": [
                {
                  "type": "TSAsExpression",
                  "start": 307,
                  "end": 316,
                  "expression": {
                    "type": "Literal",
                    "start": 307,
                    "end": 309,
                    "value": 42,
                    "raw": "42"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 313,
                    "end": 316
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 338,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 337,
          "id": {
            "type": "ArrayPattern",
            "start": 326,
            "end": 329,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 332,
            "end": 337,
            "callee": {
              "type": "Identifier",
              "start": 332,
              "end": 335,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 375,
      "end": 434,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 396,
        "decorators": [],
        "name": "SelectProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 396,
        "end": 402,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 397,
            "end": 398,
            "name": {
              "type": "Identifier",
              "start": 397,
              "end": 398,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 400,
            "end": 401,
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 403,
        "end": 434,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 407,
            "end": 432,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 407,
              "end": 415,
              "decorators": [],
              "name": "selector",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 431,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 418,
                "end": 431,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 419,
                    "end": 425,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 422,
                      "end": 425,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 424,
                        "end": 425,
                        "typeName": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 425,
                          "decorators": [],
                          "name": "T",
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
                  "start": 427,
                  "end": 431,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 430,
                    "end": 431,
                    "typeName": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 431,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
      "start": 436,
      "end": 469,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 453,
        "decorators": [],
        "name": "SelectResult",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 453,
        "end": 459,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 454,
            "end": 455,
            "name": {
              "type": "Identifier",
              "start": 454,
              "end": 455,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 457,
            "end": 458,
            "name": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 462,
        "end": 468,
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "start": 463,
            "end": 464,
            "typeName": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 466,
            "end": 467,
            "typeName": {
              "type": "Identifier",
              "start": 466,
              "end": 467,
              "decorators": [],
              "name": "T",
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
      "type": "TSInterfaceDeclaration",
      "start": 471,
      "end": 526,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 487,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 488,
        "end": 526,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 492,
            "end": 505,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 492,
              "end": 496,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 504,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 498,
                "end": 504
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 508,
            "end": 524,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 508,
              "end": 515,
              "decorators": [],
              "name": "surname",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 515,
              "end": 523,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 517,
                "end": 523
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
      "start": 528,
      "end": 625,
      "id": {
        "type": "Identifier",
        "start": 545,
        "end": 555,
        "decorators": [],
        "name": "selectJohn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 555,
        "end": 567,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 556,
            "end": 566,
            "name": {
              "type": "Identifier",
              "start": 556,
              "end": 557,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 560,
              "end": 566,
              "typeName": {
                "type": "Identifier",
                "start": 560,
                "end": 566,
                "decorators": [],
                "name": "Person",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 568,
          "end": 598,
          "decorators": [],
          "name": "props",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 574,
            "end": 598,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 576,
              "end": 598,
              "typeName": {
                "type": "Identifier",
                "start": 576,
                "end": 587,
                "decorators": [],
                "name": "SelectProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 587,
                "end": 598,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 588,
                    "end": 594,
                    "typeName": {
                      "type": "Identifier",
                      "start": 588,
                      "end": 594,
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 596,
                    "end": 597,
                    "typeName": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 597,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 599,
        "end": 624,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 601,
          "end": 624,
          "typeName": {
            "type": "Identifier",
            "start": 601,
            "end": 613,
            "decorators": [],
            "name": "SelectResult",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 613,
            "end": 624,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 614,
                "end": 620,
                "typeName": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 620,
                  "decorators": [],
                  "name": "Person",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 622,
                "end": 623,
                "typeName": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 623,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 657,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 656,
          "id": {
            "type": "ArrayPattern",
            "start": 633,
            "end": 641,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 634,
                "end": 640,
                "decorators": [],
                "name": "person",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 644,
            "end": 656,
            "callee": {
              "type": "Identifier",
              "start": 644,
              "end": 654,
              "decorators": [],
              "name": "selectJohn",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 658,
      "end": 695,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 664,
          "end": 694,
          "id": {
            "type": "ArrayPattern",
            "start": 664,
            "end": 679,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 665,
                "end": 668,
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 670,
                "end": 678,
                "decorators": [],
                "name": "whatever",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 682,
            "end": 694,
            "callee": {
              "type": "Identifier",
              "start": 682,
              "end": 692,
              "decorators": [],
              "name": "selectJohn",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 696,
      "end": 722,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 702,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 702,
            "end": 706,
            "decorators": [],
            "name": "john",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 709,
            "end": 721,
            "callee": {
              "type": "Identifier",
              "start": 709,
              "end": 719,
              "decorators": [],
              "name": "selectJohn",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 723,
      "end": 764,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 763,
          "id": {
            "type": "ArrayPattern",
            "start": 729,
            "end": 756,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 730,
                "end": 741,
                "decorators": [],
                "name": "personAgain",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 743,
                "end": 755,
                "decorators": [],
                "name": "nufinspecial",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 759,
            "end": 763,
            "decorators": [],
            "name": "john",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 788,
      "end": 834,
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 814,
        "decorators": [],
        "name": "makeTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 814,
        "end": 818,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 815,
            "end": 817,
            "name": {
              "type": "Identifier",
              "start": 815,
              "end": 817,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 819,
          "end": 826,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 822,
            "end": 826,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 824,
              "end": 826,
              "typeName": {
                "type": "Identifier",
                "start": 824,
                "end": 826,
                "decorators": [],
                "name": "T1",
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
        "start": 827,
        "end": 833,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 829,
          "end": 833,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 830,
              "end": 832,
              "typeName": {
                "type": "Identifier",
                "start": 830,
                "end": 832,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 835,
      "end": 884,
      "id": {
        "type": "Identifier",
        "start": 852,
        "end": 859,
        "decorators": [],
        "name": "stringy",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 859,
        "end": 871,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 860,
            "end": 870,
            "name": {
              "type": "Identifier",
              "start": 860,
              "end": 861,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSStringKeyword",
              "start": 864,
              "end": 870
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 872,
          "end": 879,
          "decorators": [],
          "name": "arg",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 876,
            "end": 879,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 878,
              "end": 879,
              "typeName": {
                "type": "Identifier",
                "start": 878,
                "end": 879,
                "decorators": [],
                "name": "T",
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
        "start": 880,
        "end": 883,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 882,
          "end": 883,
          "typeName": {
            "type": "Identifier",
            "start": 882,
            "end": 883,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 886,
      "end": 929,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 892,
          "end": 928,
          "id": {
            "type": "Identifier",
            "start": 892,
            "end": 905,
            "decorators": [],
            "name": "isStringTuple",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 908,
            "end": 928,
            "callee": {
              "type": "Identifier",
              "start": 908,
              "end": 917,
              "decorators": [],
              "name": "makeTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 918,
                "end": 927,
                "callee": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 925,
                  "decorators": [],
                  "name": "stringy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 943,
      "end": 980,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 949,
          "end": 979,
          "id": {
            "type": "ArrayPattern",
            "start": 949,
            "end": 956,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 950,
                "end": 955,
                "decorators": [],
                "name": "isAny",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 959,
            "end": 979,
            "callee": {
              "type": "Identifier",
              "start": 959,
              "end": 968,
              "decorators": [],
              "name": "makeTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 969,
                "end": 978,
                "callee": {
                  "type": "Identifier",
                  "start": 969,
                  "end": 976,
                  "decorators": [],
                  "name": "stringy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            ],
            "optional": false
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
