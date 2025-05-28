__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 753,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 49,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 34,
              "end": 49,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 49,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 54,
            "end": 79,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 61,
              "end": 79,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 68,
                "end": 71,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 69,
                    "end": 70,
                    "name": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
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
                  }
                ]
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 72,
                "end": 79,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 96,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
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
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 96,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 127,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 134,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 131,
          "end": 134,
          "elementType": {
            "type": "TSTypeReference",
            "start": 131,
            "end": 132,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 160,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 141,
            "end": 158,
            "argument": {
              "type": "ArrayExpression",
              "start": 148,
              "end": 157,
              "elements": [
                {
                  "type": "NewExpression",
                  "start": 149,
                  "end": 156,
                  "callee": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 174,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 177,
        "end": 202,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 183,
            "end": 200,
            "argument": {
              "type": "ArrayExpression",
              "start": 190,
              "end": 199,
              "elements": [
                {
                  "type": "NewExpression",
                  "start": 191,
                  "end": 198,
                  "callee": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 196,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 222,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 235,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 237,
        "end": 244,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 239,
          "end": 244,
          "elementType": {
            "type": "TSTypeReference",
            "start": 239,
            "end": 242,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 239,
              "end": 242,
              "left": {
                "type": "Identifier",
                "start": 239,
                "end": 240,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 245,
        "end": 272,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 251,
            "end": 270,
            "argument": {
              "type": "ArrayExpression",
              "start": 258,
              "end": 269,
              "elements": [
                {
                  "type": "NewExpression",
                  "start": 259,
                  "end": 268,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 263,
                    "end": 266,
                    "object": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 264,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 273,
      "end": 308,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 286,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 289,
        "end": 308,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 295,
            "end": 306,
            "argument": {
              "type": "MemberExpression",
              "start": 302,
              "end": 305,
              "object": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 347,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 360,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 362,
        "end": 375,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 364,
          "end": 375,
          "elementType": {
            "type": "TSTypeReference",
            "start": 364,
            "end": 373,
            "typeName": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 365,
              "end": 373,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 366,
                  "end": 372
                }
              ]
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 376,
        "end": 409,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 382,
            "end": 407,
            "argument": {
              "type": "ArrayExpression",
              "start": 389,
              "end": 406,
              "elements": [
                {
                  "type": "NewExpression",
                  "start": 390,
                  "end": 405,
                  "callee": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 395,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 395,
                    "end": 403,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 396,
                        "end": 402
                      }
                    ]
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 410,
      "end": 459,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 423,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 426,
        "end": 459,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 432,
            "end": 457,
            "argument": {
              "type": "ArrayExpression",
              "start": 439,
              "end": 456,
              "elements": [
                {
                  "type": "NewExpression",
                  "start": 440,
                  "end": 455,
                  "callee": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 445,
                    "end": 453,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 446,
                        "end": 452
                      }
                    ]
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 499,
      "end": 565,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 512,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 514,
        "end": 529,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 516,
          "end": 529,
          "elementType": {
            "type": "TSTypeReference",
            "start": 516,
            "end": 527,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 516,
              "end": 519,
              "left": {
                "type": "Identifier",
                "start": 516,
                "end": 517,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 518,
                "end": 519,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 519,
              "end": 527,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 520,
                  "end": 526
                }
              ]
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 530,
        "end": 565,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 536,
            "end": 563,
            "argument": {
              "type": "ArrayExpression",
              "start": 543,
              "end": 562,
              "elements": [
                {
                  "type": "NewExpression",
                  "start": 544,
                  "end": 561,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 548,
                    "end": 551,
                    "object": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 549,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 551,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 551,
                    "end": 559,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 552,
                        "end": 558
                      }
                    ]
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 566,
      "end": 617,
      "id": {
        "type": "Identifier",
        "start": 575,
        "end": 579,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 582,
        "end": 617,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 588,
            "end": 615,
            "argument": {
              "type": "ArrayExpression",
              "start": 595,
              "end": 614,
              "elements": [
                {
                  "type": "NewExpression",
                  "start": 596,
                  "end": 613,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 600,
                    "end": 603,
                    "object": {
                      "type": "Identifier",
                      "start": 600,
                      "end": 601,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 603,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 603,
                    "end": 611,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 604,
                        "end": 610
                      }
                    ]
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 646,
      "end": 704,
      "id": {
        "type": "Identifier",
        "start": 655,
        "end": 659,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 661,
        "end": 672,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 663,
          "end": 672,
          "elementType": {
            "type": "TSFunctionType",
            "start": 664,
            "end": 669,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 666,
              "end": 669,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 668,
                "end": 669,
                "typeName": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 669,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 673,
        "end": 704,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 679,
            "end": 702,
            "argument": {
              "type": "ArrayExpression",
              "start": 686,
              "end": 701,
              "elements": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 687,
                  "end": 700,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "NewExpression",
                    "start": 693,
                    "end": 700,
                    "callee": {
                      "type": "Identifier",
                      "start": 697,
                      "end": 698,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "id": null,
                  "generator": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 705,
      "end": 753,
      "id": {
        "type": "Identifier",
        "start": 714,
        "end": 719,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 722,
        "end": 753,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 728,
            "end": 751,
            "argument": {
              "type": "ArrayExpression",
              "start": 735,
              "end": 750,
              "elements": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 736,
                  "end": 749,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "NewExpression",
                    "start": 742,
                    "end": 749,
                    "callee": {
                      "type": "Identifier",
                      "start": 746,
                      "end": 747,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "id": null,
                  "generator": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
