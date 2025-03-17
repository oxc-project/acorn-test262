__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 994,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 44,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 63,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 109,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "T",
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
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 148,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 151,
            "end": 155,
            "callee": {
              "type": "Identifier",
              "start": 151,
              "end": 153,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 190,
          "id": {
            "type": "ArrayPattern",
            "start": 179,
            "end": 183,
            "elements": [
              {
                "type": "Identifier",
                "start": 180,
                "end": 182,
                "name": "x2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 228,
          "id": {
            "type": "ObjectPattern",
            "start": 212,
            "end": 221,
            "properties": [
              {
                "type": "Property",
                "start": 214,
                "end": 219,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 219,
                  "name": "x3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 337,
          "id": {
            "type": "ArrayPattern",
            "start": 326,
            "end": 329,
            "elements": [
              {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "SelectProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "name": "selector",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "obj",
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
                          "name": "T",
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
        "name": "SelectResult",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T",
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
      "type": "TSInterfaceDeclaration",
      "start": 471,
      "end": 526,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 487,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "surname",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "selectJohn",
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
          "start": 568,
          "end": 598,
          "name": "props",
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
                "name": "SelectProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Person",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "Person",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "SelectResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "Person",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "K",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 656,
          "id": {
            "type": "ArrayPattern",
            "start": 633,
            "end": 641,
            "elements": [
              {
                "type": "Identifier",
                "start": 634,
                "end": 640,
                "name": "person",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
              "name": "selectJohn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 658,
      "end": 695,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 664,
          "end": 694,
          "id": {
            "type": "ArrayPattern",
            "start": 664,
            "end": 679,
            "elements": [
              {
                "type": "Identifier",
                "start": 665,
                "end": 668,
                "name": "any",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 670,
                "end": 678,
                "name": "whatever",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
              "name": "selectJohn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 696,
      "end": 722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 702,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 702,
            "end": 706,
            "name": "john",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 709,
            "end": 721,
            "callee": {
              "type": "Identifier",
              "start": 709,
              "end": 719,
              "name": "selectJohn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 723,
      "end": 764,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 763,
          "id": {
            "type": "ArrayPattern",
            "start": 729,
            "end": 756,
            "elements": [
              {
                "type": "Identifier",
                "start": 730,
                "end": 741,
                "name": "personAgain",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 743,
                "end": 755,
                "name": "nufinspecial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 759,
            "end": 763,
            "name": "john",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "makeTuple",
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
          "start": 819,
          "end": 826,
          "name": "arg",
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
                "name": "T1",
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
      "body": null,
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
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 835,
      "end": 884,
      "id": {
        "type": "Identifier",
        "start": 852,
        "end": 859,
        "name": "stringy",
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
          "start": 872,
          "end": 879,
          "name": "arg",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 886,
      "end": 929,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 892,
          "end": 928,
          "id": {
            "type": "Identifier",
            "start": 892,
            "end": 905,
            "name": "isStringTuple",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 908,
            "end": 928,
            "callee": {
              "type": "Identifier",
              "start": 908,
              "end": 917,
              "name": "makeTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 918,
                "end": 927,
                "callee": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 925,
                  "name": "stringy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 943,
      "end": 980,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 949,
          "end": 979,
          "id": {
            "type": "ArrayPattern",
            "start": 949,
            "end": 956,
            "elements": [
              {
                "type": "Identifier",
                "start": 950,
                "end": 955,
                "name": "isAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
              "name": "makeTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 969,
                "end": 978,
                "callee": {
                  "type": "Identifier",
                  "start": 969,
                  "end": 976,
                  "name": "stringy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
